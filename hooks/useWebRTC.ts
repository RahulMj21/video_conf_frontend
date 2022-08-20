import { useCallback, useEffect, useRef } from "react";
import { Socket } from "socket.io-client";
import { UserInterface } from "../slices/user.slice";
import socketInit from "../utils/socketInit";
import { useStateWithCallback } from "./useStateWithCallback2";
import freeice from "freeice";

interface User {
  _id: string;
  name: string;
  avatar: {
    public_id: string;
    secure_url: string;
  };
}

interface VideoElement {
  [key: string]: HTMLVideoElement;
}
interface Connections {
  [key: string]: RTCPeerConnection;
}

export const useWebRTC = (user: User, roomId: string) => {
  const [clients, setClients] = useStateWithCallback([]);

  const videoElements = useRef<VideoElement>({});
  const connections = useRef<Connections>({});
  const localMediaStream = useRef<MediaStream | null>(null);
  const socketRef = useRef<Socket | null>(null);

  const addNewClient = useCallback(
    (newClient: User, cb: Function) => {
      const existingClient = clients.find(
        (client) => client._id === newClient._id
      );
      if (!existingClient || typeof existingClient === "undefined") {
        setClients((prev: UserInterface[] | []) => [...prev, newClient], cb);
      }
    },
    [clients, setClients]
  );

  useEffect(() => {
    socketRef.current = socketInit();
  }, []);

  useEffect(() => {
    const addNewPeer = async ({
      socketId,
      user: remoteUser,
      createOffer,
    }: {
      socketId: string;
      user: User;
      createOffer: false;
    }) => {
      if (socketId in connections.current) {
        return;
      }
      connections.current[socketId] = new RTCPeerConnection({
        iceServers: freeice(),
      });

      const currentConnection = connections.current[socketId];

      currentConnection.onicecandidate = (e) => {
        socketRef.current?.emit("relay_ice", {
          socketId,
          icecandidate: e.candidate,
        });
      };
      currentConnection.ontrack = ({ streams: [remoteStream] }) => {
        addNewClient(remoteUser, () => {
          let setteled = false;
          const interval = setInterval(() => {
            if (videoElements.current[remoteUser._id]) {
              videoElements.current[remoteUser._id].srcObject = remoteStream;
              setteled = true;
            }
          }, 500);
          if (setteled) clearInterval(interval);
        });
      };

      localMediaStream.current?.getTracks().forEach((track) => {
        currentConnection.addTrack(
          track,
          localMediaStream.current as MediaStream
        );
      });

      if (createOffer) {
        const offer = await currentConnection.createOffer();
        currentConnection.setLocalDescription(offer);
        socketRef.current?.emit("relay_sdp", {
          socketId,
          sessiondescription: offer,
        });
      }
    };

    socketRef.current?.on("add_peer", addNewPeer);
  }, []);

  useEffect(() => {
    const getUserMedia = async () => {
      localMediaStream.current = await navigator.mediaDevices.getUserMedia({
        video: {
          height: 720,
          width: 1280,
        },
        audio: true,
      });
    };
    getUserMedia().then(() => {
      addNewClient(user, () => {
        const localElement = videoElements.current[user._id];
        if (localElement) {
          localElement.volume = 0;
          localElement.srcObject = localMediaStream.current;
        }
      });
    });
  }, []);

  const provideRef = (instance: HTMLVideoElement, userId: string) => {
    videoElements.current[userId] = instance;
  };

  return { clients, provideRef } as const;
};
