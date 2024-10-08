import { StyleSheet, Text, View } from "react-native";
import React from "react";
import { useQuery } from "@tanstack/react-query";
import Animated from "react-native-reanimated";
import { useDevicesConnectedStore } from "@/store/devicesConnected.store";
import { getDeviceConnected } from "@/services/PulseApiEndpoint";
import { MDM_WEBSOCKET_URL } from "@/constants/Networks";
import { EventPulseWebsocketType, EventWebsocketType } from "@/interfaces/PulseWebsocketType";
import { debug } from "@/lib/utils";
import { generateListDevice } from "./helper";
import ItemDevice from "./ItemDevice";
import EmptyDeviceConnected from "./EmptyDeviceConnected";
import { fetchMockDeviceConnected } from "@/mock/DeviceContected.mock";

const DeviceLists = () => {
  const query = useQuery({ queryKey: ["deviceConnected"], queryFn: () => fetchMockDeviceConnected(), refetchOnMount: "always" });
  const deviceConnectedCollection = useDevicesConnectedStore.use.collections();

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

    if (query.data) {
      generateListDevice(query.data);
    }


    
    //Nettoyage
    return () => {
      //Fermeture connexion websocket
      pulseWebSocketInstance.close();
    };
  }, [query.isFetching]);

  const TEXT_DEVICE = query.isFetching ? `Recuperation des appareils connecté au reseau` : !query.data && `Aucune appareil trouvé sous le reseau`;

  return (
    <>
       {query.isError && <Text> {query.error.message} </Text>}
      {deviceConnectedCollection.length > 0 ? (
        <Animated.FlatList
          horizontal={false}
          showsVerticalScrollIndicator={true}
         numColumns={3}
          data={deviceConnectedCollection}
          renderItem={({ item }) => <ItemDevice data={item}  />}
          keyExtractor={(item) => item.id}
          className="w-fit mx-auto"
     
        />
      ) : 
      !query.isError  &&  <EmptyDeviceConnected
          isLoading={query.isFetching}
          text={TEXT_DEVICE}
        />
      }
    </>
  );
};

export default DeviceLists;

const styles = StyleSheet.create({});
