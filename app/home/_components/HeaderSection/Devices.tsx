import { StyleSheet, Text, TouchableOpacity, View } from "react-native";
import React from "react";
import Animated from "react-native-reanimated";
import { removeSelectedDeviceConnected, setSelectedDeviceConnected, useDevicesConnectedStore } from "@/store/devicesConnected.store";
import clsx from "clsx";
import { DEVICE_CARD_COLORS } from "@/constants/Colors";
import { DeviceItem } from "@/components/ui/Cards/DeviceItem";

const Devices = () => {

  const deviceConnectedCollection = useDevicesConnectedStore.use.collections();

  const deviceConnectedSelected = useDevicesConnectedStore.use.selected()


  const handlePress = (device) => {
    if (deviceConnectedSelected.some((item) => item.target == device.target)) removeSelectedDeviceConnected([device.target])
    else setSelectedDeviceConnected(device)
  }

  return (
    
    <Animated.FlatList
        horizontal={true}
        showsVerticalScrollIndicator={true}
        data={deviceConnectedCollection}
        renderItem={({ item }) => <DeviceItem  device={item} onPress={handlePress} />}
        keyExtractor={item => item.id}   
        className="max-w-[80vw]"
    
      />
   
   
  );
};

export default Devices;


const styles = StyleSheet.create({
  container: {
    backgroundColor:"#ffff",
    height: 120,
    width:250,
    margin:4
  }
})
