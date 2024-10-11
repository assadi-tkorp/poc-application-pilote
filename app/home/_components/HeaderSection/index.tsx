import { StyleSheet, Text, View } from "react-native";
import React from "react";
import Devices from "./Devices";
import { generateListDevice } from "../MainContent/Devices/helper";
import { fetchMockDeviceConnected } from "@/mock/DeviceContected.mock";
import { useQuery } from "@tanstack/react-query";
import { getDeviceConnected } from "@/services/PulseApiEndpoint";
import { useGlobalStore } from "@/store/global.store";

const HeaderSection = () => {

  const query = useQuery({ queryKey: ["deviceConnected"], queryFn: () => getDeviceConnected(), refetchOnMount: "always" });
  const mediaType = useGlobalStore.use.mediaSelected()

  const SHOW_DEVICES = mediaType =="application" || mediaType ==  "video" ? true : false

   React.useEffect(() => {

     if (query.data) {
        generateListDevice(query.data);
     } 

 
  }, [query.isFetching]);
 
  return (
    <View className=" bg-gray-100 rounded-md w-full  flex-[0.20] items-center p-2">
      {SHOW_DEVICES &&  <Devices /> }
    </View>
  );
};

export default HeaderSection;

const styles = StyleSheet.create({});
