import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import Card from '@/components/ui/Cards'

export default function DeviceNoSelected() {
  return (
    <Card className="mx-auto flex justify-center items-center h-[150] w-full bg-slate-600" >
      <Text className="text-white">Veuillez sélectionner un appareil</Text>
    </Card>
  )
}

const styles = StyleSheet.create({})