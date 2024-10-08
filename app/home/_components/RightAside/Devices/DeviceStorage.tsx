import { View, Text } from 'react-native'
import React from 'react'

const DeviceStorage = () => {

    const MutedText = ({children}:{children:React.ReactNode})=><Text className="text-muted" >{ children }</Text>

  return (
    <View  >
          <Text className="font-bold mb-1" >Espace de stockage:</Text>
          <Text className="font-bold mb-1" >Interne total: <MutedText>50GB</MutedText></Text>
          <Text className="font-bold mb-1" >Interne restante: <MutedText>120GB</MutedText>  </Text>
          <Text className="font-bold mb-1" >Externe total: <MutedText> 120GB</MutedText> </Text>
          <Text className="font-bold mb-1" >Externe restante: <MutedText>120GB</MutedText> </Text>
    </View>
  )
}

export default DeviceStorage