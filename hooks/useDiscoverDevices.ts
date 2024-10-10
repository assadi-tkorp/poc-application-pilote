import React from "react";
import { EventPulseWebsocketType, EventWebsocketType } from "@/interfaces/PulseWebsocketType";
import { debug } from "@/lib/utils";
import { generateListDevice } from "../app/home/_components/MainContent/Devices/helper";
import { MDM_WEBSOCKET_URL } from "@/constants/Networks";

/**
 * Ecouteur d'événement discoverDevices émis par le mdm et mise à jour du store contenant les appareils connecté
 */
const useDiscoverDevices = () => {
  React.useEffect(() => {
    const pulseWebSocketInstance = new WebSocket(MDM_WEBSOCKET_URL);

    //Instance websocket
    pulseWebSocketInstance.onmessage = (event) => {
      const jsonData: EventWebsocketType & EventPulseWebsocketType = event.data ? JSON.parse(event.data) : null;
      const message = jsonData?.message;
      const value = JSON.parse(jsonData.value);
      debug.log("message websocket >> ", message);
      debug.log("value >>", value);
      if (message && message === "discoverDevices") {
        generateListDevice(value);
      }
    };
    //Nettoyage
    return () => {
      //Fermeture connexion websocket
      pulseWebSocketInstance.close();
    };
  }, []);
};

export default useDiscoverDevices;
