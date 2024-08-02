const TYPE_DEVICE = ["xr", "tablet", "unknown"];
const MODEL = [
  "PICO 4 Entreprise",
  "LENOVO X6",
  "HTC Vive",
  "HTC Vive Pro",
  "HTC Vive Pro 2",
  "PICO G2 4k",
];

const getRandomTypeDevice = () => {
  return TYPE_DEVICE[Math.floor(Math.random() * TYPE_DEVICE.length)];
};

const getRandomModel = () => {
  return MODEL[Math.floor(Math.random() * MODEL.length)];
};

const device = [
  {
    id: "668d464cb388fbe0748f8e7c",
    androidId: "5cdc7523f25f5616",
    target: "192.168.0.192",
    model: "unknown",
    typeDevice: "unknown",
  },
  {
    id: "668d464ab388fbe0748f8e77",
    androidId: "99db94f651b84528",
    target: "192.168.0.193",
    model: "unknown",
    typeDevice: "unknown",
  },
  {
    id: "65d60af460e7bbc2058ef979",
    androidId: "ae44a270ccd31510",
    target: "192.168.0.194",
    model: "unknown",
    typeDevice: "unknown",
  },
  {
    id: "65d60793c39b30ce577ac5a4",
    androidId: "58cff79d46118994",
    target: "192.168.0.195",
    model: "unknown",
    typeDevice: "unknown",
  },
];

const DATA = device.map((v, i) => {
  v.target = `192.168.0.19${i}`;
  v.model = getRandomModel();
  v.typeDevice = getRandomTypeDevice();
  return v;
});

export default DATA;
