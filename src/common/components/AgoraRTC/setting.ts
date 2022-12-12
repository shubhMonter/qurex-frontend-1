import {
  ClientConfig,
  createClient,
  createMicrophoneAndCameraTracks,
} from "agora-rtc-react";

export const appId = "487313108aca464bb93de894daedc887";
export const token =
  "007eJxTYAgRvZivzK/DtYhRgmPWEqUV11eospcsTVBODN0hN/VJ6V4FBhMLc2NDY0MDi8TkRBMzk6QkS+OUVAtLk5TE1JRkCwvzgOPTkhsCGRmu7f7KwsgAgSA+K0NgaVFqBQMDAFaaHcM=";

export const config: ClientConfig = { mode: "rtc", codec: "vp8" };
export const useClient = createClient(config);
export const useMicrophoneAndCameraTracks = createMicrophoneAndCameraTracks();
export const Channel = "Qurex";
