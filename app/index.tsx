import { View, Text, StyleSheet } from 'react-native'
import React from 'react'
import { Link } from 'expo-router'
import { infoStorage } from '@/lib/fileSystem'

const SplashScreen = () => {
  React.useEffect(() => {

    infoStorage()

},[])
  

  return (
    <View style={styles.container} > 
      <Text>SplashScreen</Text>
      <Link href={{pathname:"/home"}} >Go Home</Link>
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


