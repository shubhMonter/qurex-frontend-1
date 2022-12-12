import { AgoraVideoPlayer } from "agora-rtc-react";
import React, { useEffect, useRef } from "react";
import { useSelector } from "react-redux";

export const VideoPlayer = ({ user, tracks }) => {
  const ref = useRef();
  const authData = useSelector((state) => state.auth.authData);

  useEffect(() => {
    user?.videoTrack?.play(ref.current);
  }, []);

  return (
    <>
      {tracks && tracks.length > 0 ? (
        <div
          ref={ref}
          className="h-auto max-w-full "
          style={{ aspectRatio: 7 / 5 }}
        >
          <AgoraVideoPlayer
            videoTrack={tracks[1]}
            // key={user.uid}
            style={{ height: "100%", width: "100%" }}
          />
        </div>
      ) : (
        <div
          ref={ref}
          className="h-auto max-w-full "
          style={{ aspectRatio: 8 / 4 }}
        >
          <AgoraVideoPlayer
            videoTrack={user.videoTrack}
            key={user.uid}
            style={{ height: "100%", width: "100%" }}
          />
        </div>
      )}
    </>
  );
};
