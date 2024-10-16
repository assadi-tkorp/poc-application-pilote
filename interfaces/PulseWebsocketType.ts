export type sendRunPackageArgs = {
  packageName: string;
  targets: Array<String>;
};

export type sendChangeVolumeMultimediaArgs = {
  level: number;
  targets: Array<String>;
};

export type EventWebsocketType = {
  message?: string;
  value?: any;
};
export type EventPulseWebsocketType = {
  type?: string;
  route?: string;
  target?: string;
  body?: any;
};

export type EventPulseWebsocket = EventWebsocketType & EventWebsocketType;
