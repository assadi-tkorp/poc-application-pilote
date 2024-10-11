import { View, Text, StyleSheet } from 'react-native'
import React from 'react'
import {  router } from 'expo-router'
import { infoStorage } from '@/lib/fileSystem'
import LottieView from 'lottie-react-native';
import Animated, { FadeIn, FadeOut, useAnimatedStyle, useSharedValue, withRepeat, withTiming } from 'react-native-reanimated';

const SplashScreen = () => {

  const animation = React.useRef<LottieView>(null);
  const scale = useSharedValue<number>(0);
  const animationStyles = useAnimatedStyle(() => ({
    opacity: scale.value,
  }));

  React.useEffect(() => {

     scale.value = withRepeat(
      withTiming( scale.value + 1 , { duration: 500 }),
      -1,
      true
    ); 

    const timeID = setTimeout(() => {
    router.push('/home')
    }, 1000)
     
    return () => {
     clearTimeout(timeID)
    } 

},[])
  

  return (
    <View style={styles.container} className="bg-slate-800" > 
         <LottieView
        autoPlay
        ref={animation}
        speed={1.8}
        style={{
          width: 200,
          height: 200,
        
        
        }}

        source={require('../assets/lotties/Animation-1728639201392.json')}
      />
      <Animated.Text className="text-white text-xl mt-3"  style={
      [  animationStyles]
      }  >Veuillez patientez</Animated.Text>
     
    </View>
  )
}

export default SplashScreen

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems:"center"
  }
});


