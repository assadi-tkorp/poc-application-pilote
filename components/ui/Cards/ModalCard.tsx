import { StyleSheet, Text, View } from 'react-native'
import React from 'react'


type cardProps = {
    children?: React.ReactNode

}
const ModalCard = ({ children, ...props }: cardProps) => {
    const defaultStyle = "rounded shadow bg-white w-fit mx-auto"
  return (
    <View {...props}  className={defaultStyle + props.className} >
        {children}
  </View>
  )
}

export default ModalCard

const styles = StyleSheet.create({})