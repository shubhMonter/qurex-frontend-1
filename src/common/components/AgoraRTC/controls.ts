import AgoraRTC, {
  ConnectionState,
  ICameraVideoTrack,
  IMicrophoneAudioTrack,
} from "agora-rtc-sdk-ng";
import { useState } from "react";
import { appId, token, useClient } from "./setting";
export interface Controls {
  tracks: [IMicrophoneAudioTrack, ICameraVideoTrack] | null;
  setStart: Function;
  setInCall: Function;
  user_id: string;
  room_id: string;
  onVideoTrack: Function;
  onUserDisconnected: Function;
}

export enum mediaType {
  Audio = "audio",
  Video = "video",
}
export const Controls = (props: Controls) => {
  const {
    tracks,
    setStart,
    setInCall,
    user_id,
    room_id,
    onVideoTrack,
    onUserDisconnected,
  } = props;
  const [trackState, setTrackState] = useState({ video: true, audio: true });
  const client = useClient();
  const mute = async (type: mediaType) => {
    if (type === mediaType.Audio && tracks && tracks.length > 0) {
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
  console.log("check");

  //   const leaveChannel = async () => {
  //     await client.leave();
  //     client.removeAllListeners();
  //     tracks && tracks[0].close();
  //     tracks && tracks[1].close();
  //     setStart(false);
  //     setInCall(false);
  //   };
  const waitForConnectionState = (connectionState: ConnectionState) => {
    return new Promise<void>((resolve): void => {
      const interval = setInterval(() => {
        if (client.connectionState === connectionState) {
          clearInterval(interval);
          resolve();
        }
      }, 200);
    });
  };

  const connect = async () => {
    try {
      await waitForConnectionState("DISCONNECTED");

      const uid = await client.join(appId, "qurex" || room_id, token, user_id);
      console.log({ uid }, "controls");

      client.on("user-published", (user, mediaType) => {
        client.subscribe(user, mediaType).then(() => {
          if (mediaType === "video") {
            onVideoTrack(user);
          }
        });
      });

      client.on("user-left", (user) => {
        onUserDisconnected(user);
      });

      //tracks = await AgoraRTC.createMicrophoneAndCameraTracks();

      if (tracks) await client.publish(tracks);

      return { uid };
    } catch (error) {
      console.log(error);
    }
  };

  const disconnect = async () => {
    await waitForConnectionState("CONNECTED");
    client.removeAllListeners();
    if (tracks)
      for (let track of tracks) {
        track.stop();
        track.close();
      }
    tracks && (await client.unpublish(tracks));
    await client.leave();
    setStart(false);
    setInCall(false);
  };

  return { trackState, mute, connect, disconnect, client };
};
