import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import Animated, {FadeIn, FadeInLeft, FadeInRight, FadeOut, FadeOutLeft}from 'react-native-reanimated'


interface posterProps {
    description:string
}
const MovieDescription = ({description}:posterProps) => {
  return (
    <View className="w-fit mx-auto">
          <Animated.Text  entering={FadeInLeft.delay(100)} exiting={FadeOutLeft} >{ description}</Animated.Text>
    </View>
  )
}

export default MovieDescription

const styles = StyleSheet.create({})