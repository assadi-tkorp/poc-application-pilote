import { StyleSheet, Text,  View } from 'react-native'
import React from 'react'
import Animated from 'react-native-reanimated';
import ItemVideos from './ItemVideos';
import { fetchMockContent } from '@/services/api';
import { useQuery } from '@tanstack/react-query';
import { setContentCollections, setSelectedContent, useContentStore } from '@/store/content.store';

const ContentSection = () => {



  const query = useQuery({ queryKey: ['contentCollection'], queryFn:()=> fetchMockContent() ,refetchOnMount:"always"})
  const contentCollections = useContentStore.use.collections()
  const selectedContent = useContentStore.use.selected()

  React.useEffect(() => {
    if (!query.isFetching) {
      query.data && setContentCollections(query.data)
    }


  }, [query.isFetching])
  
  const handleSelectedItem = (data:any) => {
    setSelectedContent(data)
  }



  return (


    <>
      {query.isError && <Text> {query.error.message} </Text>}
      {query.isFetching?<Text>Chargements des donnes en cours</Text> : <Animated.FlatList
        horizontal={false}
        showsVerticalScrollIndicator={true}
        numColumns={4}
        data={contentCollections}
        renderItem={({ item }) => <ItemVideos isSelected={selectedContent?.id == item.id} data={item} onSelected={handleSelectedItem} />}
        keyExtractor={item => item.id} extraData={selectedContent}
        className="w-fit mx-auto flex-1"
    
      />}
     </>
        
 
  )
}

export default ContentSection

const styles = StyleSheet.create({})