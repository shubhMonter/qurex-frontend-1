import {
  ClientConfig,
  createClient,
  createMicrophoneAndCameraTracks,
} from "agora-rtc-react";

export const appId = "b4460bd6e13b4a6db3ffb706eac9de9f";
export const token =
  "007eJxTYPCeG/L8akGly66iFYvK1JjdboeVvrlXNzvy/c1+g/RZM10VGJJMTMwMklLMUg2Nk0wSzVKSjNPSkswNzFITky1TUi3TnmfNTm4IZGRYOrOMhZEBAkF8FoaS1OISBgYA4uoiLA==";

export const config: ClientConfig = { mode: "rtc", codec: "vp8" };
export const useClient = createClient(config);
export const useMicrophoneAndCameraTracks = createMicrophoneAndCameraTracks();
export const Channel = "Qurex";
