import { Pressable, StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React from 'react'

interface CloseButtonProps {

    closeModal: () => void;
 
  }
const CloseButton = ({closeModal}:CloseButtonProps) => {
  return (
    <TouchableOpacity onPress={closeModal} >
    <Text>Fermer</Text>
    </TouchableOpacity>
  )
}

export default CloseButton

const styles = StyleSheet.create({})