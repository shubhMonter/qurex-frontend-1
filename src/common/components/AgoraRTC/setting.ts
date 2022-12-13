import {
  ClientConfig,
  createClient,
  createMicrophoneAndCameraTracks,
} from "agora-rtc-react";

export const appId = "487313108aca464bb93de894daedc887";
export const token =
  "007eJxTYFCV/zEhZ39G6bqDgcvPcDfcOnd8+qR/mjF2ZVdE32Q81D+uwGBiYW5saGxoYJGYnGhiZpKUZGmckmphaZKSmJqSbGFhflFsRnJDICPDaukJzIwMEAjiszIElhalVjAwAAD0NiF/";

export const config: ClientConfig = { mode: "rtc", codec: "vp8" };
export const useClient = createClient(config);
export const useMicrophoneAndCameraTracks = createMicrophoneAndCameraTracks();
export const Channel = "Qurex";
