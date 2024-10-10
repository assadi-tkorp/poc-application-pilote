import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import Card from '@/components/ui/Cards'

export default function DeviceNoSelected() {
  return (
    <Card className="mx-auto flex justify-center items-center h-[150] w-full bg-slate-100" >
      <Text className="font bold">Aucun appareil renseigné</Text>
    </Card>
  )
}

const styles = StyleSheet.create({})