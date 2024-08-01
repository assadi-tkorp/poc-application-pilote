import { StyleSheet, Text, View } from 'react-native'
import React from 'react'

interface posterProps {
    description:string
}
const MovieDescription = ({description}:posterProps) => {
  return (
    <View className="w-fit mx-auto">
          <Text>{ description}</Text>
    </View>
  )
}

export default MovieDescription

const styles = StyleSheet.create({})