import AgoraRTC, {
  ConnectionState,
  IAgoraRTCRemoteUser,
  ICameraVideoTrack,
  IMicrophoneAudioTrack,
} from "agora-rtc-sdk-ng";
import { useEffect, useState } from "react";
import {
  appId,
  Channel,
  token,
  useClient,
  useMicrophoneAndCameraTracks,
} from "./setting";
export interface Controls {
  setStart: Function;
  setInCall: Function;
  user_id: string;
  room_id: string;
  setUsers: Function;
}

export enum mediaType {
  Audio = "audio",
  Video = "video",
}
export const Controls = (props: Controls) => {
  const { setStart, setInCall, setUsers } = props;
  const [trackState, setTrackState] = useState({ video: true, audio: true });
  const { ready, tracks } = useMicrophoneAndCameraTracks();
  console.log(tracks);
  
  const client = useClient();
  const mute = async (type: mediaType) => {
    if (type === mediaType.Audio && tracks && tracks.length > 0) {
      console.log(tracks);

      await tracks[0].setEnabled(!trackState.audio);
      setTrackState((ps) => {
        return { ...ps, audio: !ps.audio };
      });
    } else if (type === mediaType.Video && tracks && tracks.length > 0) {
      await tracks[1].setEnabled(!trackState.video);
      setTrackState((ps) => {
        return { ...ps, video: !ps.video };
      });
    }
  };
  const disconnect = async () => {
    try {
      console.log("disconnect");

      await client.leave();
      client.removeAllListeners();
      tracks && tracks[0].close();
      tracks && tracks[1].close();
      setStart(false);
      setInCall(false);
    } catch (error) {
      console.log(error);
    }
  };

  //   const leaveChannel = async () => {
  //     await client.leave();
  //     client.removeAllListeners();
  //     tracks && tracks[0].close();
  //     tracks && tracks[1].close();
  //     setStart(false);
  //     setInCall(false);
  //   };

  useEffect(() => {
    let init = async (name: string) => {
      client.on("user-published", async (user, mediaType) => {
        console.log(user, "test usr");

        await client.subscribe(user, mediaType);
        if (mediaType === "video") {
          setUsers((prevUsers: IAgoraRTCRemoteUser[]) => {
            return [...prevUsers, user];
          });
        }
        if (mediaType === "audio") {
          user?.audioTrack?.play();
        }
      });

      client.on("user-unpublished", (user, mediaType) => {
        if (mediaType === "audio") {
          if (user.audioTrack) user.audioTrack.stop();
        }
        if (mediaType === "video") {
          setUsers((prevUsers: IAgoraRTCRemoteUser[]) => {
            return prevUsers?.filter(
              (User: IAgoraRTCRemoteUser) => User.uid !== user.uid
            );
          });
        }
      });

      client.on("user-left", (user) => {
        setUsers((prevUsers: IAgoraRTCRemoteUser[]) => {
          return prevUsers.filter((User) => User.uid !== user.uid);
        });
      });

      try {
        await client.join(appId, name, token, null);
      } catch (error) {
        console.log(error);

        console.log("error");
      }

      if (tracks) await client.publish([tracks[0], tracks[1]]);
      setStart(true);
    };
    console.log({ ready, tracks }, "test controls");

    if (ready && tracks) {
      try {
        init(Channel);
      } catch (error) {
        console.log(error);
      }
    }
  }, [Channel, client, ready, tracks]);

  return { trackState, mute, disconnect, client, tracks, ready };
};
