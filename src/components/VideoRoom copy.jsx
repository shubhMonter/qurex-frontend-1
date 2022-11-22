import React, { useEffect, useState } from 'react';
import AgoraRTC, { createClient } from 'agora-rtc-sdk-ng';
import { VideoPlayer } from './VideoPlayer';
import { useFormik } from 'formik';
import * as Yup from 'yup';
import { headers, put } from '../api';
import { BaseSetting } from '../utils/common';
import { useSelector } from 'react-redux';
import { IoMdMicOff, IoMdMic } from 'react-icons/io';
import { HiOutlinePhoneMissedCall } from 'react-icons/hi';
import { BsCameraVideo, BsCameraVideoOff } from 'react-icons/bs';
const APP_ID = '6c3a0d0482ec419cb08f21a19e0a900c';
const TOKEN =
  '007eJxTYEi5KXZv1/zQmR8/e/gJt2ZcdWdc9f/RjINZRh5tdkqhHhMVGMySjRMNUgxMLIxSk00MLZOTDCzSjAwTDS1TDRItDQyS/VvykxsCGRmWtTSyMDJAIIjPyhBYWpRawcAAAJCGH+o=';
const CHANNEL = 'Qurex';

AgoraRTC.setLogLevel(4);

let agoraCommandQueue = Promise.resolve();

const createAgoraClient = ({ onVideoTrack, onUserDisconnected, user_id }) => {
  const client = createClient({
    mode: 'rtc',
    codec: 'vp8',
  });

  let tracks;

  const waitForConnectionState = (connectionState) => {
    return new Promise((resolve) => {
      const interval = setInterval(() => {
        if (client.connectionState === connectionState) {
          clearInterval(interval);
          resolve();
        }
      }, 200);
    });
  };

  const connect = async () => {
    console.log({ APP_ID, CHANNEL, TOKEN });
    await waitForConnectionState('DISCONNECTED');

    const uid = await client.join(APP_ID, CHANNEL, TOKEN, user_id);

    client.on('user-published', (user, mediaType) => {
      client.subscribe(user, mediaType).then(() => {
        if (mediaType === 'video') {
          onVideoTrack(user);
        }
      });
    });

    client.on('user-left', (user) => {
      onUserDisconnected(user);
    });

    tracks = await AgoraRTC.createMicrophoneAndCameraTracks();
    if (typeof tracks === Object && typeof tracks !== 'undefined') {
      await client.publish(tracks);
    }
    return {
      tracks,
      uid,
    };
  };

  const disconnect = async () => {
    await waitForConnectionState('CONNECTED');
    client.removeAllListeners();
    if (typeof tracks === Object && typeof tracks !== 'undefined') {
      for (let track of tracks) {
        track.stop();
        track.close();
      }
    }
    await client.unpublish(tracks);
    await client.leave();
  };

  return {
    disconnect,
    connect,
    client,
  };
};

export const VideoRoom = ({ userID: user_id }) => {
  const auth = useSelector((state) => state.auth);
  let authData = auth?.data;
  const [users, setUsers] = useState([]);
  const [client, setClient] = useState(null);
  const [cleanUp, setCleanUp] = useState(null);
  const [currentUser, setCurrentUser] = useState({});
  const [muteText, setMuteText] = useState('Mute');
  const [pauseVideoText, setPauseVideoText] = useState('Pause Video');
  const [uid, setUid] = useState(user_id);
  const [onForm, setOnForm] = useState(false);

  useEffect(() => {
    const onVideoTrack = (user) => {
      user.audioTrack.play();
      setUsers((previousUsers) => [...previousUsers, user]);
    };

    const onUserDisconnected = (user) => {
      setUsers((previousUsers) =>
        previousUsers.filter((u) => u.uid !== user.uid)
      );
    };

    const { connect, disconnect, client } = createAgoraClient({
      onVideoTrack,
      onUserDisconnected,

      user_id,
    });

    const setup = async () => {
      const { tracks, uid } = await connect();
      setCurrentUser({
        uid,
        audioTrack: tracks[0],
        videoTrack: tracks[1],
      });
      setUid(uid);
      // setUsers((previousUsers) => [
      //   ...previousUsers,
      //   {
      //     uid,
      //     audioTrack: tracks[0],
      //     videoTrack: tracks[1],
      //   },
      // ]);
    };

    const cleanup = async () => {
      await disconnect();
      setUid(null);
      setUsers([]);
    };
    setCleanUp(cleanup);
    // setup();
    agoraCommandQueue = agoraCommandQueue.then(setup);
    setClient(client);
    // setDisconnect(disconnect)
    return () => {
      // cleanup();
      agoraCommandQueue = agoraCommandQueue.then(cleanup);
    };
  }, []);
  const formik = useFormik({
    initialValues: {
      issue: '',
      since: '',
      diagnosis: '',
      medication: '',
      advice: '',
    },
    validationSchema: Yup.object({
      issue: Yup.string()
        .max(20, 'Name must be 20 Characters or less')
        .required('Required'),
      since: Yup.string().required('Required'),
    }),
    onSubmit: async (values) => {
      const postUpdatedData = {
        issue: values.issue,
        since: values.since,
        diagnosis: values.diagnosis,
        medication: values.medication,
        advice: values.advice,
      };
      //console.log(postUpdatedData);
      //dispatch(postActions.updatePost(postUpdatedData));
      try {
        if (navigator.onLine) {
          //console.log(data);
          const response = await put(
            BaseSetting.doctorApiDomain + `/`,
            {
              awards: postUpdatedData,
            },
            headers
          );
          const result = response.data;
          console.log(result);
          if (result.status == 1) {
            alert('Succesfully Updated');
          }
          alert('Succesfully Updated');
        } else {
        }
      } catch (error) {
        alert('Error Updating Data');
      }
    },
  });

  const handleMute = () => {
    if (muteText == 'Mute') {
      currentUser?.audioTrack.setMuted(true);
      setMuteText('Unmute');
    } else {
      currentUser?.audioTrack.setMuted(false);
      setMuteText('Mute');
    }
  };
  const handlePauseVideo = () => {
    if (pauseVideoText == 'Pause Video') {
      currentUser?.videoTrack.setMuted(true);
      setPauseVideoText('Unpause Video');
    } else {
      currentUser?.videoTrack.setMuted(false);
      setPauseVideoText('Pause Video');
    }
  };

  async function leave() {
    cleanUp();
    // remove remote users and player views
    setUsers({});

    // leave the channel
    await client.leave();
    console.log('client leaves channel success');
  }
  console.log(
    '🚀 ~ file: VideoRoom.jsx ~ line 190 ~ handleMute ~ currentUser',
    currentUser
  );

  return (
    <>
      <div
        className={`mx-3 grid grid-cols-1 ${
          authData?.role === 'doctor' ? 'md:grid-cols-4' : 'md:grid-cols-3'
        }  gap-5`}
      >
        <div className="col-span-3">
          <div class="w-full h-96 flex">
            <div class="bg-gray-400  w-full mx-20 h-96 relative z-0">
              {users.map((user) => (
                <VideoPlayer
                  className="col-span-2"
                  key={user.uid}
                  user={user}
                />
              ))}
              {/* {currentUser?.uid && (
                <VideoPlayer
                  className="h-96"
                  key={currentUser.uid}
                  user={currentUser}
                />
              )} */}
              <div class="absolute bg-red-900 inset-0 flex h-40 w-40 z-10">
                {currentUser?.uid && (
                  <VideoPlayer key={currentUser.uid} user={currentUser} />
                )}
              </div>
              <div className="absolute inset-0 flex justify-center items-center z-10 mt-[34rem]">
                <button
                  className="btn btn-lg btn-primary rounded-pill  "
                  onClick={handleMute}
                >
                  {muteText === 'Mute' ? <IoMdMic /> : <IoMdMicOff />}
                </button>
                <button
                  className="ml-3 btn btn-lg btn-secondary rounded-pill  "
                  onClick={handlePauseVideo}
                >
                  {pauseVideoText === 'Pause Video' ? (
                    <BsCameraVideo />
                  ) : (
                    <BsCameraVideoOff />
                  )}
                </button>
                <button
                  className="ml-3 btn btn-lg btn-danger rounded-pill  "
                  onClick={leave}
                >
                  <HiOutlinePhoneMissedCall />
                </button>
              </div>
            </div>
          </div>
        </div>
        {authData?.role === 'doctor' ? (
          <div className="col-span-1">
            <form>
              <div className="sticky shadow-lg px-3 py-2 col-span-2 md:col-span-1 xl:col-span-1 lg:col-span-1 flex-col flex">
                <div className="px-5 py-2 rounded-md t412 mt-4 bg-[#FEE1DD] text-[#D47373] ">
                  Please fill the prescription or check prescription not
                  required before leaving consultation.
                </div>
                <div className="t414 text-[#1C1C1C] mt-4">Name: Mithun Rao</div>

                <div className="t414 text-[#1C1C1C] mt-4">Symtoms/Issue</div>
                <div className="mt-1">
                  <input
                    className="py-2 pl-2 rounded-md border w-full text-[12px] font-normal text-[#666666] outline-none"
                    placeholder="STI"
                    id="issue"
                    name="issue"
                    type="text"
                    value={formik.values.issue}
                    onChange={formik.handleChange}
                  />
                </div>
                {formik.errors.issue ? (
                  <p className="text-xs text-red-600 ">{formik.errors.issue}</p>
                ) : null}
                <div className="t414 text-[#1C1C1C] mt-4">Facing Since</div>
                <div className="mt-1">
                  <input
                    className="py-2 pl-2 rounded-md border w-full text-[12px] font-normal text-[#666666] outline-none"
                    placeholder="Since 2 months"
                    id="since"
                    name="since"
                    type="text"
                    value={formik.values.since}
                    onChange={formik.handleChange}
                  />
                </div>
                {formik.errors.since ? (
                  <p className="text-xs text-red-600 ">{formik.errors.since}</p>
                ) : null}
                <div className="t414 text-[#1C1C1C] mt-4">Diagnosis</div>
                <div className="mt-1">
                  <input
                    className="py-2 pl-2 rounded-md border w-full text-[12px] font-normal text-[#666666] outline-none"
                    placeholder="e.g: Mild Balantis"
                    id="diagnosis"
                    name="diagnosis"
                    type="text"
                    value={formik.values.diagnosis}
                    onChange={formik.handleChange}
                  />
                </div>
                {formik.errors.diagnosis ? (
                  <p className="text-xs text-red-600 ">
                    {formik.errors.diagnosis}
                  </p>
                ) : null}
                <div className="t414 text-[#1C1C1C] mt-4">
                  Treatment & Medication
                </div>
                <div className="mt-1">
                  <input
                    className="py-2 pl-2 rounded-md border w-full text-[12px] font-normal text-[#666666] outline-none"
                    placeholder="e.g: Ibuprofen 500mg"
                    id="medication"
                    name="medication"
                    type="text"
                    value={formik.values.medication}
                    onChange={formik.handleChange}
                  />
                </div>
                {formik.errors.medication ? (
                  <p className="text-xs text-red-600 ">
                    {formik.errors.medication}
                  </p>
                ) : null}
                <div className="t414 text-[#1C1C1C] mt-4">General Advice</div>
                <div className="mt-1">
                  <input
                    className="py-2 pl-2 rounded-md border w-full text-[12px] font-normal text-[#666666] outline-none"
                    placeholder="e.g: Avoid oily foods"
                    id="advice"
                    name="advice"
                    type="text"
                    value={formik.values.advice}
                    onChange={formik.handleChange}
                  />
                </div>
                {formik.errors.advice ? (
                  <p className="text-xs text-red-600 ">
                    {formik.errors.advice}
                  </p>
                ) : null}
                <div
                  className="mt-4 flex justify-center cursor-pointer hover:shadow-lg bg-[#7367f0] text-white rounded-md px-5 py-1.5 mx-1"
                  onClick={formik.handleSubmit}
                >
                  Save
                </div>
              </div>
            </form>
          </div>
        ) : (
          ''
        )}
      </div>
    </>
  );
};
