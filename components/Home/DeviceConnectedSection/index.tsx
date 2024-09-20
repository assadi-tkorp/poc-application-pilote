import { StyleSheet, Text, View, VirtualizedList } from 'react-native'
import React from 'react'
import Animated from 'react-native-reanimated';
import { useQuery } from '@tanstack/react-query';
import DeviceConnectedItem from './DeviceConnectedItem';
import {  useDevicesConnectedStore } from '@/store/devicesConnected.store';
import EmptyDeviceConnected from './EmptyDeviceConnected';
import { getDeviceConnected } from '@/services/PulseApiEndpoint';
import { EventPulseWebsocketType, EventWebsocketType } from '@/interfaces/PulseWebsocketType';
import { generateListDevice } from './helper';
import { MDM_WEBSOCKET_URL } from '@/constants/Networks';
import { BroadcastReceiver } from 'react-native-broadcast-receiver';
import { debug } from '@/lib/utils';


const DeviceConnectedSection = () => {
  const query = useQuery({queryKey:["deviceConnected"],queryFn:()=>getDeviceConnected(),refetchOnMount:"always"})
  const deviceConnectedCollection = useDevicesConnectedStore.use.collections()


  
  React.useEffect(() => {

    BroadcastReceiver.setIntentActionConfig([
      { action: 'com.pulse.mdm.service.DEVICE_DISCOVERY_RESOLVED', datakey: 'discoverDevices' },
    
    ]);
    

    const sub = BroadcastReceiver.addEventListner((d) =>
      debug.log('broadcast :>> ', d.data)
    );
    const pulseWebSocketInstance = new WebSocket(MDM_WEBSOCKET_URL)
    
    //Instance websocket
      pulseWebSocketInstance.onmessage = (event) => {
      const jsonData : EventWebsocketType & EventPulseWebsocketType = event.data ? JSON.parse(event.data):null
      const message = jsonData?.message
      const value = JSON.parse(jsonData.value)
      debug.log('message websocket >> ', message)
      debug.log("value >>", value)
      if (message && message === "discoverDevices") {
      
            generateListDevice(value)
      }
      
    }

    if (query.data) { 
      generateListDevice(query.data)
    } 

    //Nettoyage
    return () => {
      // remove broadcastListener
      sub.remove();
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