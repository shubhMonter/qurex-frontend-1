import {
  ClientConfig,
  createClient,
  createMicrophoneAndCameraTracks,
} from "agora-rtc-react";

export const appId: string = "b4460bd6e13b4a6db3ffb706eac9de9f";
export const token: string =
  "007eJxTYEjRUm7OrJkx821Cseoyx3ela1uy5mmypzBIzlkeZj2/4oUCQ5KJiZlBUopZqqFxkkmiWUqScVpakrmBWWpismVKqmXap0vTkhsCGRnkXzMzMzJAIIjPylBYWpRawcAAACssH9I=";
export const config: ClientConfig = { mode: "rtc", codec: "vp8" };
export const useClient = createClient(config);
export const useMicrophoneAndCameraTracks = createMicrophoneAndCameraTracks();
export const Channel = "qurex";
