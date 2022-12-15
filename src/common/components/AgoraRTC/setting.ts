import {
  ClientConfig,
  createClient,
  createMicrophoneAndCameraTracks,
} from "agora-rtc-react";

export const appId = "487313108aca464bb93de894daedc887";
export const token =
  "007eJxTYHggm5DqeCBY/a/M/MN7EjijJfo+7TS7cIND4vYh+fAzZ7gUGEwszI0NjQ0NLBKTE03MTJKSLI1TUi0sTVISU1OSLSzMf7PNTm4IZGSwr05jYmSAQBCflSGwtCi1goEBADvgHyw=";

export const config: ClientConfig = { mode: "rtc", codec: "vp8" };
export const useClient = createClient(config);
export const useMicrophoneAndCameraTracks = createMicrophoneAndCameraTracks();
export const Channel = "Qurex";
