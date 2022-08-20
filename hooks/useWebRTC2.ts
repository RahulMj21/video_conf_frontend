import { useCallback, useEffect, useRef } from "react";
import { Socket } from "socket.io-client";
import { UserInterface } from "../slices/user.slice";
import socketInit from "../utils/socketInit";
import { useStateWithCallback } from "./useStateWithCallback2";
import freeice from "freeice";

type VideoElements = {
  [key: string]: HTMLVideoElement;
};
type Connections = {
  [key: string]: RTCPeerConnection;
};
type User = {
  _id: string;
  name: string;
  avatar: {
    public_id: string;
    secure_url: string;
  };
};

export const useWebRTC = (roomId: string, user: UserInterface) => {
  const [clients, setClients] = useStateWithCallback([]);

  const videoElements = useRef<VideoElements>({});
  const connections = useRef<Connections>({});
  const localMediaStream = useRef<MediaStream | null>(null);
  const socket = useRef<Socket | null>(null);

  const addNewClient = useCallback(
    (newClient, cb) => {
      const existingClient = clients.find(
        (client) => client._id === newClient._id
      );
      if (!existingClient || typeof existingClient === "undefined") {
        setClients((prev) => [...prev, newClient], cb);
      }
    },
    [clients, setClients]
  );

  // initialize socket
  useEffect(() => {
    socket.current = socketInit();
  }, []);

  // add_peer
  useEffect(() => {
    const handleAddPeer = async ({
      socketId,
      user: remoteUser,
      createOffer,
    }: {
      socketId: string;
      user: User;
      createOffer: boolean;
    }) => {
      if (socketId in connections.current) {
        return;
      }
      connections.current[socketId] = new RTCPeerConnection({
        iceServers: freeice(),
      });

      const currentConnection = connections.current[socketId];

      currentConnection.onicecandidate = (e: RTCPeerConnectionIceEvent) => {
        socket.current?.emit("relay_ice", {
          socketId,
          icecandidate: e.candidate,
        });
      };

      currentConnection.ontrack = ({ streams: [remoteStream] }) => {
        addNewClient(remoteUser, () => {
          let settled = false;
          const interval = setInterval(() => {
            if (videoElements.current[remoteUser._id]) {
              videoElements.current[remoteUser._id].srcObject = remoteStream;
              settled = true;
            }
          }, 500);
          if (settled) clearInterval(interval);
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
        await currentConnection.setLocalDescription(offer);
        socket.current?.emit("relay_sdp", {
          socketId,
          sessiondescription: offer,
        });
      }
    };

    socket.current?.on("add_peer", handleAddPeer);

    return () => {
      socket.current?.off("add_peer");
    };
  }, []);

  // handle icecandidate
  useEffect(() => {
    const handleIceCandidate = ({
      socketId,
      icecandidate,
    }: {
      socketId: string;
      icecandidate: RTCIceCandidate;
    }) => {
      if (icecandidate) {
        connections.current[socketId].addIceCandidate(icecandidate);
      }
    };
    socket.current?.on("icecandidate", handleIceCandidate);

    return () => {
      socket.current?.off("icecandidate");
    };
  }, []);

  // handle sessiondescription
  useEffect(() => {
    const handleSessionDescription = async ({
      socketId,
      sessiondescription,
    }: {
      socketId: string;
      sessiondescription: RTCSessionDescription;
    }) => {
      const currentConnection = connections.current[socketId];
      await currentConnection.setRemoteDescription(
        new RTCSessionDescription(sessiondescription)
      );
      if (sessiondescription.type === "offer") {
        const answer = await currentConnection.createAnswer();
        currentConnection.setLocalDescription(answer);
        socket.current?.emit("relay_sdp", {
          socketId,
          sessiondescription: answer,
        });
      }
    };

    socket.current?.on("sessiondescription", handleSessionDescription);

    return () => {
      socket.current?.off("sessiondescription");
    };
  }, []);

  // capture our own media
  useEffect(() => {
    const startCapture = async () => {
      // get displayMedia shares the screen
      // localMediaStream.current = await navigator.mediaDevices.getDisplayMedia({
      //   video: true,
      // });

      localMediaStream.current = await navigator.mediaDevices.getUserMedia({
        audio: true,
        video: {
          width: { min: 1024, ideal: 1280, max: 1920 },
          height: { min: 576, ideal: 720, max: 1080 },
        },
      });
    };

    startCapture().then(() => {
      addNewClient(user, () => {
        const localElement = videoElements.current[user._id];
        if (localElement) {
          localElement.volume = 0;
          localElement.srcObject = localMediaStream.current;
        }
        socket.current?.emit("join", { roomId, userId: user._id });
      });
    });
  }, []);

  // add our videoElement to the videoElementsRef
  const provideInstance = (instance: HTMLVideoElement, userId: string) => {
    videoElements.current[userId] = instance;
  };

  return { clients, provideInstance, socket } as const;
};
