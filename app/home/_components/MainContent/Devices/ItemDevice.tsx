import { StyleSheet, Text, TouchableOpacity, View } from "react-native";
import React from "react";
import { removeSelectedDeviceConnected, setSelectedDeviceConnected, useDevicesConnectedStore } from "@/store/devicesConnected.store";
import clsx from "clsx";
import { DevicesConnectedType } from "@/interfaces/DevicesConnected.interface";

type ItemDeviceProps   = {
  data:DevicesConnectedType
}
const ItemDevice = ({ data}: ItemDeviceProps) => {
  const deviceConnectedSelected = useDevicesConnectedStore.use.selected()

  const DEFAULT_CLASS = ["border", "border-gray-200", "rounded", "p-3", "relative"]
  const SELECTED_STYLE = ["border-red-500", "border-4"]
  const SELECTED_CLASS = deviceConnectedSelected.some((item) => item.target == data.target) ? SELECTED_STYLE : []
  const CARD_CLASS = clsx(DEFAULT_CLASS, SELECTED_CLASS)


  

  const handleClick = () => {
    if (deviceConnectedSelected.some((item) => item.target == data.target)) removeSelectedDeviceConnected([data.target])
    else setSelectedDeviceConnected(data)
  }

  return (
    <TouchableOpacity style={styles.container} className={CARD_CLASS} onPress={handleClick} >
      <Text className="font-bold">ID: <Text className="text-sm font-normal" >{data.id} </Text></Text>
      <Text className="font-bold">IP: <Text className="text-sm font-normal" >{data.target} </Text> </Text>
      <Text className="font-bold">Type: <Text className="text-sm font-normal" >{data.typeDevice} </Text></Text>
      <Text className="font-bold">Model: <Text className="text-sm font-normal" >{data.model} </Text></Text>
    </TouchableOpacity>
  )
};

export default ItemDevice;


const styles = StyleSheet.create({
  container: {
    backgroundColor:"#ffff",
    height: 120,
    width:250,
    margin:4
  }
})