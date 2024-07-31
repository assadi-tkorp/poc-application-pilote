import { View, Text, Button,} from 'react-native'
import React, { useEffect } from 'react'
import { SafeAreaView } from 'react-native-safe-area-context'
import DevicesCards from '@/components/ui/Cards/DevicesCards'
import Animated from 'react-native-reanimated';
import VolumeSection from '@/components/Home/Settings/VolumeSection';
import ContentSection from '@/components/Home/ContentSection';


const Home = () => {


  const ws = new WebSocket("ws://localhost:10002")
  const sendMessage = () => {
    const message = {	type:"test",
      route:"test",
      target:"target",
      body:"test"}
   ws.send(JSON.stringify(message))
  }
  
  useEffect(() => {
    
  

    ws.onmessage =(event => {
      alert(JSON.stringify(event.data))
    })
  },[])

  return (
    <SafeAreaView className="h-screen bg-slate-300 justify-center ">
            <View className="mx-auto" >
       <Text>Appareil selectionné: </Text>
       </View>
          {/* Devices section */}
          <View className="flex-row justify-center flex-wrap p-6 " >
            <DevicesCards />
            <DevicesCards />
            <DevicesCards />
      </View>
            {/* Content section */}
      <View className="flex-1 p-5" >
        <View className="flex-row  h-min-[100px] flex-1" >
          <View className="w-[75%] bg-slate-500 h-full" >
            <Text className="font-bold text-center text-xl text-white my-3" >Contenus</Text>
           < ContentSection />
          </View>
           {/* setting section */}
          <View className="w-[25%] bg-white-500 h-full px-3 ">
          <Text className="font-bold text-center text-xl my-3" >Parametres</Text>
            <Animated.ScrollView className="rounded bg-white shadow-xl p-3" >
              <VolumeSection />
            </Animated.ScrollView>
          </View>
          
        </View>
       
      </View>
    </SafeAreaView>
  )
}

export default Home
