import { StyleSheet, Text, View } from 'react-native'
import React from 'react'


type cardProps = {
    children?: React.ReactNode

}
const Card = ({ children, ...props }: cardProps) => {
    const defaultStyle = "rounded shadow bg-white text-black p-4 w-45 min-h-[100px] m-3 first-of-type:ml-0 last-of-type:mr-0"
  return (
    <View {...props}  className={defaultStyle + props.className} >
        {children}
  </View>
  )
}

export default Card

const styles = StyleSheet.create({})