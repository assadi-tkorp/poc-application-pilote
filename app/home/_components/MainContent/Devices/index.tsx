import { StyleSheet, Text, View } from "react-native";
import React from "react";
import { useQuery } from "@tanstack/react-query";
import Animated from "react-native-reanimated";
import { setSelectOneDeviceConnected, useDevicesConnectedStore } from "@/store/devicesConnected.store";
import { getDeviceConnected } from "@/services/PulseApiEndpoint";
import { generateListDevice } from "./helper";

import EmptyDeviceConnected from "./EmptyDeviceConnected";
import { fetchMockDeviceConnected } from "@/mock/DeviceContected.mock";
import { DeviceItem } from "@/components/ui/Cards/DeviceItem";

const DeviceLists = () => {
  const query = useQuery({ queryKey: ["deviceConnected"], queryFn: () => getDeviceConnected(), refetchOnMount: "always" });
  const deviceConnectedCollection = useDevicesConnectedStore.use.collections();

  React.useEffect(() => {
  
    if (!query.isFetching) {
      query.data && generateListDevice(query.data);
    }
 
  }, [query.isFetching]);

  const TEXT_DEVICE = query.isFetching ? `Recuperation des appareils connecté au reseau` : !query.data && `Aucune appareil trouvé sous le reseau`;
  const handlePress = (device) => {
    device && setSelectOneDeviceConnected(device);
}

  return (
    <>
       {query.isError && <Text> {query.error.message} </Text>}
      {deviceConnectedCollection.length > 0 ? (
        <Animated.FlatList
          horizontal={false}
          showsVerticalScrollIndicator={true}
         numColumns={3}
          data={deviceConnectedCollection}
          renderItem={({ item }) => <DeviceItem device={item} onPress={handlePress}   />}
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
