import { StyleSheet, Text, View } from "react-native";
import React from "react";
import Devices from "./Devices";
import { MDM_WEBSOCKET_URL } from "@/constants/Networks";
import { EventPulseWebsocketType, EventWebsocketType } from "@/interfaces/PulseWebsocketType";
import { debug } from "@/lib/utils";
import { generateListDevice } from "../MainContent/Devices/helper";
import { useDevicesConnectedStore } from "@/store/devicesConnected.store";
import { fetchMockDeviceConnected } from "@/mock/DeviceContected.mock";
import { useQuery } from "@tanstack/react-query";

const HeaderSection = () => {

  const query = useQuery({ queryKey: ["deviceConnected"], queryFn: () => fetchMockDeviceConnected(), refetchOnMount: "always" });

   React.useEffect(() => {

     if (query.data) {
        generateListDevice(query.data);
    } 
 
  }, [query.isFetching]);
 
  return (
    <View className=" bg-gray-100 rounded-md w-full  flex-[0.26] items-center p-2">
      {/*   <Devices />  */}
    </View>
  );
};

export default HeaderSection;

const styles = StyleSheet.create({});
