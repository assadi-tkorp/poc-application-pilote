import { View, Text, Button } from 'react-native'
import React from 'react'
import Animated, { FadeIn, FadeInLeft, FadeInRight, FadeOut, FadeOutLeft } from 'react-native-reanimated'
import Poster from './Poster'
import MovieDescription from './MovieDescription'
import { useContentStore } from '@/store/content.store'

const Video360Info = () => {

    const selectedContent = useContentStore.use.selected()

  return (
      <View className="rounded  shadow-xl flex-1 p-3 bg-gray-100 rounded-md bg-clip-padding backdrop-filter backdrop-blur-sm bg-opacity-50 border border-gray-300">
          <Poster image={selectedContent?.posterUrl} />
          <Animated.Text entering={FadeInLeft.delay(50)} exiting={FadeOutLeft}  className="font-bold text-center text-xl mt-2" >{ selectedContent?.title}</Animated.Text>
          <Animated.ScrollView className="h-[100px] my-3" >
              <MovieDescription  description={selectedContent?.description} />
          
          </Animated.ScrollView>
          <View className="" >
              <Button  title='Diffuser' />
          </View>
    </View>
  )
}

export default Video360Info