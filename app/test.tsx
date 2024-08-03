import { Button, StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { pulseWebSocketInstance } from '@/services/instance'
import { sendRunPackage } from '@/services/PulseWebsocketCommand'
import { Link } from 'expo-router'

const Test = () => {


    const target = "172.20.10.10"
    const packageName = "com.google.android.youtube"

  const runPackage = () => {
    sendRunPackage({packageName,target})
       }

  type pulseWebsocketResponseData = {
    code:number|string,
    data: any,
    status:string
  }

  React.useEffect(() => {
   
    pulseWebSocketInstance.onmessage = (event) => {
      console.log('message received')
      if (event.data) {
        const jsonData = JSON.parse(event.data)
        console.log(jsonData)
      }
  
    

    }

  },[])

  return (
      <View className="p-6">
      <Text>about</Text>
      <Button title='Lancer youtube' onPress={runPackage} />
      <Link href="/"  className='p-3 my-3 bg-red-500 rounded shadow shadow-black text-center text-white'  >GO Home</Link>
    </View>
  )
}

export default Test

const styles = StyleSheet.create({})