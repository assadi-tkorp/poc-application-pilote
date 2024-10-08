import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import Slider from '@react-native-community/slider';
import { convertVolumeBase15, parseNumber } from './helper';
import { debug } from '@/lib/utils';



const VolumeSection = () => {

  const [volume, setVolume] = React.useState<number>(50)

    const handleEndSlider = (value:number) => {
        const cleanValue =parseNumber(value) 
      
      const volume = convertVolumeBase15(cleanValue)
      debug.log(`Slider value changed ${volume}`)  
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