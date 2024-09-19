import { StyleSheet, Text, View, VirtualizedList } from 'react-native'
import React from 'react'
import Animated from 'react-native-reanimated';
import { useQuery } from '@tanstack/react-query';
import { fetchMockDeviceConnected } from '@/services/api';
import DeviceConnectedItem from './DeviceConnectedItem';
import { setDeviceConnectedCollection, useDevicesConnectedStore } from '@/store/devicesConnected.store';
import EmptyDeviceConnected from './EmptyDeviceConnected';
import { getDeviceConnected } from '@/services/PulseApiEndpoint';
import { EventPulseWebsocket, EventPulseWebsocketType, EventWebsocketType } from '@/interfaces/PulseWebsocketType';
import { pulseWebSocketInstance } from '@/services/instance';
import { generateListDevice } from './helper';
import { MDM_WEBSOCKET_URL } from '@/constants/Networks';


const DeviceConnectedSection = () => {

   const query = useQuery({queryKey:["deviceConnected"],queryFn:()=>getDeviceConnected(),refetchOnMount:"always"})
  const deviceConnectedCollection = useDevicesConnectedStore.use.collections()
  const deviceConnectedSelected = useDevicesConnectedStore.use.selected()


  
  
  React.useEffect(() => {

    const pulseWebSocketInstance = new WebSocket(MDM_WEBSOCKET_URL)
    
    //Instance websocket
      pulseWebSocketInstance.onmessage = (event) => {
      const jsonData : EventWebsocketType & EventPulseWebsocketType = event.data ? JSON.parse(event.data):null
      const message = jsonData?.message
      const value = JSON.parse(jsonData.value)
      console.log('message >> ', message)
      console.log("value >>", value)
      if (message && message === "discoverDevices") {
      
            generateListDevice(value)
      }
      
    }

    if (query.data) { 
      generateListDevice(query.data)
    } 

    //Nettoyage
    return () => {
      //Fermeture connexion websocket
      pulseWebSocketInstance.close();
    } 

  }, [query.isFetching])
  


  
  
  const TEXT_DEVICE = query.isFetching ? `Recuperation des appareils connecté au reseau` : !query.data && `Aucune appareil trouvé sous le reseau`

  
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