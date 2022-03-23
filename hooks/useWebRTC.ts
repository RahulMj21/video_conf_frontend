// importing modules 👇👇👇👇👇👇
import {
  MutableRefObject,
  useCallback,
  useEffect,
  useRef,
  useState,
} from "react";
import freeice from "freeice";

// importing files 👇👇👇👇👇👇
import socketInit from "../utils/socketInit";
import useStateWithCallback from "./useStateWithCallback";

export interface User {
  _id: string;
  name: string;
  email: string;
}
export interface Client extends User {
  muted: true;
}

const useWebRTC = (roomId: string, user: User) => {
  const [clients, setClients] = useStateWithCallback([]);
  const videoElements = useRef<any>({});
  const connections = useRef<any>({});
  const localMediaStream: MutableRefObject<MediaStream | null> = useRef(null);
  const socket = useRef<any>(null);
  const clientsRef = useRef<any>();

  // socket initialization 👇👇👇👇👇👇
  useEffect(() => {
    socket.current = socketInit();
  }, []);

  // add new Client method
  const addNewClient = useCallback(
    (newClient: Client, cb: Function) => {
      const existingClient = clients.find(
        (client: Client) => client._id === newClient._id
      );
      if (existingClient === "undefined") {
        setClients((prev: Client[] | []) => [...prev, newClient], cb);
      }
    },
    [clients, setClients]
  );

  // getting user media 👇👇👇👇👇👇
  useEffect(() => {
    const startCapture = async () => {
      localMediaStream.current = await navigator.mediaDevices.getUserMedia({
        audio: true,
        video: true,
      });
    };
    startCapture().then(() => {
      addNewClient({ ...user, muted: true }, () => {
        const currentElement = videoElements.current[user._id];
        if (currentElement) {
          currentElement.volume = 0;
          currentElement.srcObject = localMediaStream.current;
          socket.current?.emit("join", roomId, user);
        }
      });
    });
  }, []);

  // handle new_peer 👇👇👇👇👇👇
  useEffect(() => {
    const handleNewPeer = async ({
      socketId,
      createOffer,
      user: remoteUser,
    }: {
      socketId: string;
      createOffer: Boolean;
      user: User;
    }) => {
      if (socketId in connections.current) return;

      // creating new RTCPeer connection
      connections.current[socketId] = new RTCPeerConnection({
        iceServers: freeice(),
      });
      // on icecandidate
      connections.current[socketId].onicecandidate = (e: any) => {
        socket.current?.emit("relay_ice", {
          socketId,
          icecandidate: e.candidate,
        });
      };
      // handle on track
      connections.current[socketId].ontrack = ({
        streams: [remoteStream],
      }: {
        streams: [remoteStream: MediaStream];
      }) => {
        addNewClient({ ...remoteUser, muted: true }, () => {
          let setteled = true;

          const interval = setInterval(() => {
            if (videoElements.current[socketId]) {
              videoElements.current[socketId].srcObject = remoteStream;
              setteled: true;
            }
            if (setteled) clearInterval(interval);
          }, 1000);
        });
      };

      // set All local track to the remote track
      localMediaStream.current
        ?.getTracks()
        .forEach((track: MediaStreamTrack) => {
          connections.current[socketId].addTrack(
            track,
            localMediaStream.current
          );
        });

      // create offer
      if (createOffer) {
        const offer = await connections.current[socketId].createOffer();

        // set offer to localdescription
        await connections.current[socketId].setLocalDescription(offer);

        // emit relay_sdp
        socket.current?.emit("relay_sdp", {
          socketId,
          sessionDescription: offer,
        });
      }
    };

    socket.current?.on("add_peer", handleNewPeer);
  }, []);

  // handle icecandidate 👇👇👇👇👇👇
  useEffect(() => {
    socket.current?.on(
      "icecandidate",
      ({ socketId, icecandidate }: { socketId: string; icecandidate: any }) => {
        if (icecandidate) {
          connections.current[socketId].addIceCandidate(icecandidate);
        }
      }
    );
  }, []);

  // handle sessionDescription 👇👇👇👇👇👇
  useEffect(() => {
    const handleSessionDescription = async ({
      socketId,
      sessionDescription: remoteDescription,
    }: {
      socketId: string;
      sessionDescription: any;
    }) => {
      await connections.current[socketId].setRemoteDescription(
        new RTCSessionDescription(remoteDescription)
      );
      if (remoteDescription.type === "offer") {
        const answer = await connections.current[socketId].createAnswer();
        await connections.current[socketId].setLocalDescription(answer);
        socket.current?.emit("relay_sdp", {
          socketId,
          sessionDescription: answer,
        });
      }
    };

    socket.current?.on("session_description", handleSessionDescription);
  }, []);

  // providing clients to the clientRef 👇👇👇👇👇👇
  useEffect(() => {
    clientsRef.current = clients;
  }, [clients]);

  // handle mute/unmute 👇👇👇👇👇👇
  useEffect(() => {
    const setMute = (userId: string, mute: Boolean) => {
      const newClients = clientsRef.current.map((client: Client) => {
        if (client._id === userId) return { ...client, muted: mute };
        return client;
      });
      setClients(newClients, () => {});
    };

    socket.current?.on("mute", ({ userId }: { userId: string }) => {
      setMute(userId, true);
    });
    socket.current?.on("unmute", ({ userId }: { userId: string }) => {
      setMute(userId, false);
    });
  }, []);

  // handle remove_peer 👇👇👇👇👇👇
  useEffect(() => {
    const handleRemovePeer = ({
      socketId,
      userId,
    }: {
      socketId: string;
      userId: string;
    }) => {
      if (connections.current[socketId]) {
        connections.current[socketId].close();
        delete connections.current[socketId];
      }
      delete videoElements.current[userId];

      setClients(
        (prev: Client[]) => prev.filter((client) => client._id !== userId),
        () => {}
      );
    };

    socket.current?.on("remove_peer", handleRemovePeer);
  }, []);

  // handleMute function 👇👇👇👇👇👇
  const handleMute = async (isMuted: Boolean, userId: string) => {
    let settled = false;
    const interval = setInterval(() => {
      if (localMediaStream.current) {
        localMediaStream.current.getTracks()[0].enabled = !isMuted;
        settled = true;
      }
      if (settled) clearInterval(interval);
    }, 200);

    if (isMuted) {
      socket.current?.emit("mute", {
        roomId,
        userId,
      });
    } else {
      socket.current?.emit("unmute", {
        roomId,
        userId,
      });
    }
  };

  // providing user instance to the videoElementRef 👇👇👇👇👇👇
  const provideRef = (userId: string, instance: HTMLVideoElement) => {
    videoElements.current[userId] = instance;
  };

  return { clients, provideRef, handleMute };
};

export default useWebRTC;
