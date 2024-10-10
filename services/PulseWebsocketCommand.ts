import { sendChangeVolumeMultimediaArgs, sendRunPackageArgs } from "@/interfaces/PulseWebsocketType";
import { pulseWebSocketInstance } from "./instance";

/**
 * Envois le nom du package à exécuté vers les appareils cible
 * @param {sendRunPackageArgs} args
 * ```js
 * //Exemple target correspond aux ip des appareils
 * const args = {
 *  packageName:"com.google.android.youtube",
 *  targets:["xxx.xxx.xxx.xxx","xxx.xxx.xxx"]
 * }
 *
 * ```
 */
export const sendRunPackage = (args: sendRunPackageArgs) => {
  const { packageName, target } = args;

  const body = {
    type: "POST",
    route: `package/run`,
    target: target,
    body: JSON.stringify({ packageName }),
  };
  pulseWebSocketInstance.send(JSON.stringify(body));
};

/**
 * Ajustement de volume multimedia
 *
 */
export const sendChangeVolumeMultimedia = (args: sendChangeVolumeMultimediaArgs) => {
  const { level, targets } = args;

  for (const target of targets) {
    const body = {
      type: "POST",
      route: `volume`,
      target: target,
      body: JSON.stringify({ level }),
    };
    pulseWebSocketInstance.send(JSON.stringify(body));
  }
};
