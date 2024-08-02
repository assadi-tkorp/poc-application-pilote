export type typeDeviceType = "xr" | "tablet" | "unknown";

export type DevicesConnectedType = {
  id: string;
  androidId: string;
  target: string;
  model?: string;
  typeDevice?: typeDeviceType;
};

export type DevicesConnectedListType = Array<DevicesConnectedType>;
