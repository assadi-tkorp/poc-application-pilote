import { StyleSheet, Text, View } from "react-native";
import React from "react";
import Devices from "./Devices";
import { generateListDevice } from "../MainContent/Devices/helper";
import { fetchMockDeviceConnected } from "@/mock/DeviceContected.mock";
import { useQuery } from "@tanstack/react-query";
import { getDeviceConnected } from "@/services/PulseApiEndpoint";
import { removeAllSelectedDeviceConnected } from "@/store/devicesConnected.store";

const HeaderSection = () => {

  const query = useQuery({ queryKey: ["deviceConnected"], queryFn: () => getDeviceConnected(), refetchOnMount: "always" });

   React.useEffect(() => {

     if (query.data) {
        generateListDevice(query.data);
     } 
     
     return () => {
       removeAllSelectedDeviceConnected()
     }
 
  }, [query.isFetching]);
 
  return (
    <View className=" bg-gray-100 rounded-md w-full  flex-[0.20] items-center p-2">
        <Devices /> 
    </View>
  );
};

export default HeaderSection;

const styles = StyleSheet.create({});
