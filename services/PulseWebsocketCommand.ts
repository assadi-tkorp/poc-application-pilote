import { pulseWebSocketInstance } from "./instance";

type sendRunPackageArgs = {
  packageName: string;
  target: string;
};
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
    type: "GET",
    route: `package/run?packageName=${packageName}`,
    target: target,
    body: "",
  };
  pulseWebSocketInstance.send(JSON.stringify(body));
};

type sendChangeVolumeMultimediaArgs = {
  level: number;
  targets: Array<String>;
};
/**
 * Ajustement de volume multimedia
 * @param {sendChangeVolumeMultimediaArgs} args
 */
export const sendChangeVolumeMultimedia = (
  args: sendChangeVolumeMultimediaArgs
) => {
  const { level, targets } = args;
  const body = {
    type: "POST",
    route: `package/run`,
    target: targets,
    body: JSON.stringify({ level }),
  };
  pulseWebSocketInstance.send(JSON.stringify(body));
};
