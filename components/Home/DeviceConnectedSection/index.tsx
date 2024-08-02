import { StyleSheet, Text, View, VirtualizedList } from 'react-native'
import React from 'react'
import Animated from 'react-native-reanimated';
import { useQuery } from '@tanstack/react-query';
import { fetchMockDeviceConnected } from '@/services/api';
import DATA from '@/mock/DeviceContected.mock';
import DeviceConnectedItem from './DeviceConnectedItem';
import { setDeviceConnectedCollection, useDevicesConnectedStore } from '@/store/devicesConnected.store';
import EmptyDeviceConnected from './EmptyDeviceConnected';

const DeviceConnectedSection = () => {

   const query = useQuery({queryKey:["deviceConnected"],queryFn:()=>fetchMockDeviceConnected(),refetchOnMount:"always"})
  const deviceConnectedCollection = useDevicesConnectedStore.use.collections()
  const deviceConnectedSelected = useDevicesConnectedStore.use.selected()
  
  React.useEffect(() => {
    
    if (query.data) { 
      setDeviceConnectedCollection(query.data)
    }

  }, [query.isFetching])
  
  const TEXT_DEVICE = query.isFetchedAfterMount ? `Recuperation des appareils connecté au reseau` :  `Aucune appareil trouvé sous le reseau`
  return (
    <>

      {deviceConnectedCollection.length > 0 ?
        <Animated.FlatList 
     horizontal={true}
     showsVerticalScrollIndicator={true}
     data={deviceConnectedCollection}
     renderItem={({ item }) => <DeviceConnectedItem  data={item}  />}
     keyExtractor={item => item.id} 
     className="mx-auto rounded"
      
      /> :
        <EmptyDeviceConnected  isLoading={query.isFetching} text={TEXT_DEVICE} />
    
    }
    </>
  )
}

export default DeviceConnectedSection

const styles = StyleSheet.create({
  container: {

    height:120
  }
})