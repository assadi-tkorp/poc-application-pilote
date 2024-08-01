import { Button, StyleSheet, Text, View } from 'react-native'
import React from 'react'
import Animated, { FadeInLeft, FadeInRight, FadeOutLeft } from 'react-native-reanimated'
import { useAppContentStore } from '@/store/applications.store'
import IconPoster from './IconPoster'

const RightAsideApplication = () => {


    const selectedAppContent = useAppContentStore.use.selected()

  return (
    <View className="rounded bg-white shadow-xl flex-1 p-3">
    <IconPoster image={selectedAppContent?.icon} />
          <Animated.Text entering={FadeInLeft.delay(80)} exiting={FadeOutLeft}  className="font-bold text-center text-xl mt-10" >{selectedAppContent?.name}</Animated.Text>
          <Animated.Text entering={FadeInLeft.delay(150)} exiting={FadeOutLeft} className="text-center text mt-2" >{selectedAppContent?.packageName}</Animated.Text>
          <Animated.Text entering={FadeInLeft.delay(180)} exiting={FadeOutLeft}   className="text-center text mt-2" >{ selectedAppContent?.versionName}</Animated.Text>
        <Animated.ScrollView className="h-[100px] my-3" >
    </Animated.ScrollView>
    <View >
        <Button  title='Action' />
    </View>
</View>
  )
}

export default RightAsideApplication

const styles = StyleSheet.create({})