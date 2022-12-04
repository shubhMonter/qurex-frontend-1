import React, { useEffect, useLayoutEffect, useRef } from 'react';
import { useSelector } from 'react-redux';

export const VideoPlayer = ({ user }) => {
  const ref = useRef();
  const auth = useSelector((state) => state.auth);
  let authData = auth?.data;
  useEffect(() => {
    user?.videoTrack?.play(ref.current);
  }, []);

  return (
    <>
      {authData?.role === 'doctor' ? (
        <div
          ref={ref}
          className="h-auto max-w-full "
          style={{ aspectRatio: 7 / 5 }}
        ></div>
      ) : (
        <div
          ref={ref}
          className="h-auto max-w-full "
          style={{ aspectRatio: 8 / 4 }}
        ></div>
      )}
    </>
  );
};
