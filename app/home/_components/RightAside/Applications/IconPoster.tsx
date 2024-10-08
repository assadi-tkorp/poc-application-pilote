import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import Animated from 'react-native-reanimated'

interface IconPosterProps  {
    image?:string
}
const IconPoster = ({image}:IconPosterProps) => {
  return (
    <View style={styles.container} >
     <Animated.Image   source={{ uri: image }}
         resizeMode="cover"
              style={styles.icon} />
    </View>
  )
}

export default IconPoster

const styles = StyleSheet.create({
    container: {
        height: 200,
        width: "100%", 
        justifyContent: "center",
        margin:"auto"
    },
    icon: {  
        height: 100,
        width:100,
        margin: "auto",
        borderRadius:100
    }
})