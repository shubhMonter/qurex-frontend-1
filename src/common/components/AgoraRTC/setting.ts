import {
  ClientConfig,
  createClient,
  createMicrophoneAndCameraTracks,
} from "agora-rtc-react";

export const appId: string = "487313108aca464bb93de894daedc887";
export const token: string =
  "007eJxTYDhne/fVjw27L26es005RsjpI/dRlQa5WWXP77KriZ86e6RQgcHEwtzY0NjQwCIxOdHEzCQpydI4JdXC0iQlMTUl2cLCfO3DSckNgYwMD1d3MDBCIYjPyhBYWpRawcAAACYpIqs=";

export const config: ClientConfig = { mode: "rtc", codec: "vp8" };
export const useClient = createClient(config);
export const useMicrophoneAndCameraTracks = createMicrophoneAndCameraTracks();
export const Channel = "Qurex";
