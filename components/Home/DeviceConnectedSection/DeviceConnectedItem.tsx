import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { useDevicesConnectedStore } from '@/store/devicesConnected.store'
import { DevicesConnectedType } from '@/interfaces/DevicesConnected.interface'

interface DeviceConnectedItemProps {
  data:DevicesConnectedType
}
const DeviceConnectedItem = ({data}:DeviceConnectedItemProps) => {
  const deviceConnectedSelected = useDevicesConnectedStore.use.selected()
  return (
    <View style={styles.container} className="border border-gray-200 rounded p-3 relative" >
      <Text className="font-bold">IP: <Text className="text-sm font-normal" >{data.target} </Text> </Text>
      <Text className="font-bold">ID: <Text className="text-sm font-normal" >{data.androidId} </Text></Text>
      <Text className="font-bold">Type: <Text className="text-sm font-normal" >{data.typeDevice} </Text></Text>
      <Text className="font-bold">Model: <Text className="text-sm font-normal" >{data.model} </Text></Text>
    </View>
  )
}

export default DeviceConnectedItem


const styles = StyleSheet.create({
  container: {
    backgroundColor:"#ffff",
    height: 120,
    width:250,
    margin:4
  }
})