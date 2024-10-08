import { StyleSheet, Text, View } from 'react-native'
import React from 'react'

interface Props {
    isLoading:boolean
    text: string
}
const EmptyDeviceConnected = ({isLoading=true,text = "Aucune appareil connecté"}:Props) => {
  return (
    <View  className="h-[120] rounded bg-gray-100 flex-row justify-center items-center"  >
          <Text>{ text}</Text>
    </View>
  )
}

export default EmptyDeviceConnected

const styles = StyleSheet.create({

  })