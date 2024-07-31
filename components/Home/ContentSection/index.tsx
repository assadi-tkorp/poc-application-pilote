import { StyleSheet, Text,  View } from 'react-native'
import React from 'react'
import Animated from 'react-native-reanimated';
import DATA from "@mock/VideosContents"
import ItemsVideos from './ItemsVideos';

const ContentSection = () => {
  const [selectedId, setSelectedId] = React.useState<string>();
 


  return (


      <Animated.FlatList
        horizontal={false}
        showsVerticalScrollIndicator={true}
        numColumns={4}
        data={DATA}
        renderItem={({ item }) => <ItemsVideos isSelected={selectedId == item.id} data={item} onSelected={setSelectedId} />}
        keyExtractor={item => item.id} extraData={selectedId}
        className="w-fit mx-auto"
    
      />
        
 
  )
}

export default ContentSection

const styles = StyleSheet.create({})