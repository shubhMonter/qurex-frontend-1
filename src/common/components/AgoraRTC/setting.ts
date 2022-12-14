import {
  ClientConfig,
  createClient,
  createMicrophoneAndCameraTracks,
} from "agora-rtc-react";

export const appId = "487313108aca464bb93de894daedc887";
export const token =
  "007eJxTYDhzRTrr5GVRyVdTVRpLF1Z9n14eGfAq8nPBkpNVwR5C14sVGEwszI0NjQ0NLBKTE03MTJKSLI1TUi0sTVISU1OSLSzMr0+amdwQyMiwRH4PMyMDBIL4rAyBpUWpFQwMAN7ZIYs=";

export const config: ClientConfig = { mode: "rtc", codec: "vp8" };
export const useClient = createClient(config);
export const useMicrophoneAndCameraTracks = createMicrophoneAndCameraTracks();
export const Channel = "Qurex";
