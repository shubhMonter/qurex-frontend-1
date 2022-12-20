import {
  ClientConfig,
  createClient,
  createMicrophoneAndCameraTracks,
} from "agora-rtc-react";

export const appId = "487313108aca464bb93de894daedc887";
export const token =
  "007eJxTYEjbsPrFPXXrhWZz4wqfZKnMalL5HxVnZzJh0d3KTWZPPjQoMJhYmBsbGhsaWCQmJ5qYmSQlWRqnpFpYmqQkpqYkW1iYMy1bmNwQyMhwrGY3AyMUgvisDIGlRakVDAwAxT8hQw==";

export const config: ClientConfig = { mode: "rtc", codec: "vp8" };
export const useClient = createClient(config);
export const useMicrophoneAndCameraTracks = createMicrophoneAndCameraTracks();
export const Channel = "Qurex";
