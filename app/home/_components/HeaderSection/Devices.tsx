import { StyleSheet, Text, TouchableOpacity, View } from "react-native";
import React from "react";
import Animated from "react-native-reanimated";
import { removeAllSelectedDeviceConnected, removeSelectedDeviceConnected, setSelectedDeviceConnected, useDevicesConnectedStore } from "@/store/devicesConnected.store";
import { DeviceItemLight } from "@/components/ui/Cards/DeviceItemLight";

const Devices = () => {

  const deviceConnectedCollection = useDevicesConnectedStore.use.collections();
  const deviceConnectedSelected = useDevicesConnectedStore.use.selected()

  React.useEffect(() => {
     return () => {
      removeAllSelectedDeviceConnected()
    }
  },[])


  const handlePress = (device) => {
    if (deviceConnectedSelected.some((item) => item.target == device.target)) removeSelectedDeviceConnected([device.target])
    else setSelectedDeviceConnected(device)
  }

  return (
    
    <Animated.FlatList
        horizontal={true}
        showsVerticalScrollIndicator={true}
        data={deviceConnectedCollection}
        renderItem={({ item }) => <DeviceItemLight  device={item} onPress={handlePress} />}
        keyExtractor={item => item.id}   
        className="max-w-[80vw]"
    
      />
   
   
  );
};

export default Devices;

