import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import Slider from '@react-native-community/slider';
import { parseNumber } from './helper';



const VolumeSection = () => {

  const [volume, setVolume] = React.useState<number>(50)

    const handleEndSlider = (value:number) => {
        const newValue =parseNumber(value) 
        console.log(`Slider value changed ${newValue}`)    
    }

    const handleChangeSlider = (value: number) => {
      const newValue = parseNumber(value)
        setVolume(newValue)
    }

  return (
    <View>
          <Text className="my-2" >Volume : { volume}</Text>
          <View>
 
              <Slider
                minimumValue={0}
                maximumValue={100}
                minimumTrackTintColor="#1b1a1a"
                  maximumTrackTintColor="#000000"
                  thumbTintColor="#000000"
                  onSlidingComplete={handleEndSlider}
                  onValueChange={handleChangeSlider}
                  value={volume}
            />

          </View>
    </View>
  )
}

export default VolumeSection

const styles = StyleSheet.create({})