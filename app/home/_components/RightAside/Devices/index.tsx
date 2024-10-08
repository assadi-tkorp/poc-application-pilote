import { AndroidPlainWordMark } from '@/components/svg/plain'
import React from 'react'
import { Text, View } from 'react-native'
import Animated, { FadeInLeft, FadeOutLeft } from 'react-native-reanimated'
import DevicesSettings from './DevicesSettings'


const DevicesInfo = () => {

  
  return (
    <View className="rounded  shadow-xl flex-1 p-3 bg-gray-100 rounded-md bg-clip-padding backdrop-filter backdrop-blur-sm bg-opacity-50 border border-gray-300">
      <View className="w-32 h-32 p-4 rounded bg-gray-300 mx-auto shadow mb-3">
        <AndroidPlainWordMark className="text-slate-900" />
      </View>

      <View  className="mb-3"  >
      <Text className="font-bold" >IP:   <Animated.Text className="font-normal" entering={FadeInLeft.delay(100)} exiting={FadeOutLeft} >155</Animated.Text></Text>
      <Text className="font-bold">AndroidID:   <Animated.Text className="font-normal" entering={FadeInLeft.delay(100)} exiting={FadeOutLeft} >155</Animated.Text></Text>
      <Text className="font-bold">Model:   <Animated.Text className="font-normal" entering={FadeInLeft.delay(100)} exiting={FadeOutLeft} >155</Animated.Text></Text>
      <Text className="font-bold">Batterie:   <Animated.Text className="font-normal" entering={FadeInLeft.delay(100)} exiting={FadeOutLeft} >155</Animated.Text></Text>
 </View>
      <DevicesSettings />
      
</View>
  )
}

export default DevicesInfo
