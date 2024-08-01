import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import Animated, { FadeIn, FadeOut }from 'react-native-reanimated'

interface posterProps {
    image:string
}
const Poster = ({ image }: posterProps) => {

    
  return (
    <View>
          <Animated.Image  entering={FadeIn} exiting={FadeOut}  source={{ uri: image }}
         resizeMode="contain"
              style={styles.poster}
          />
    </View>
  )
}

export default Poster

const styles = StyleSheet.create({
    poster: {  
        height: 200,
        aspectRatio: 4 / 3,
        margin:"auto"
    }
})