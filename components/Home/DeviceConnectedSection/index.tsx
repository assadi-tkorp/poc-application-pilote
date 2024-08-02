import { StyleSheet, Text, View, VirtualizedList } from 'react-native'
import React from 'react'
import Animated from 'react-native-reanimated';
import { useQuery } from '@tanstack/react-query';
import { fetchMockDeviceConnected } from '@/services/api';
import DATA from '@/mock/DeviceContected.mock';
import DeviceConnectedItem from './DeviceConnectedItem';
import { useDevicesConnectedStore } from '@/store/devicesConnected.store';

const DeviceConnectedSection = () => {

  // const query = useQuery({queryKey:["deviceConnected"],queryFn:()=>fetchMockDeviceConnected(),refetchOnMount:"always"})
  const deviceConnectedCollection = DATA
  const deviceConnectedSelected = useDevicesConnectedStore.use.selected()



  return (
    <>

      <Animated.FlatList 
     horizontal={true}
     showsVerticalScrollIndicator={true}
     data={deviceConnectedCollection}
     renderItem={({ item }) => <DeviceConnectedItem  data={item}  />}
     keyExtractor={item => item.id} 
     className="mx-auto rounded"
      
      />
    </>
  )
}

export default DeviceConnectedSection

const styles = StyleSheet.create({
  container: {

    height:120
  }
})