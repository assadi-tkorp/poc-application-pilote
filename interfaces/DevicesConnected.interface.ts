export type typeDevice = "xr" | "tablet" | "unknown";

export type DevicesConnectedInterface = {
  id: string;
  androidId: string;
  target: string;
  model?: string;
  typeDevice?: typeDevice;
};
