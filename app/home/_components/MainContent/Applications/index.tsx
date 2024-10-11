import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { useQuery } from '@tanstack/react-query'
import { fetchMockAppContent } from '@/services/api'
import Animated from 'react-native-reanimated'
import ItemApp from './ItemApp'
import { removeSelectedApp, setAppCollection, setSelectedApp, useAppContentStore } from '@/store/applications.store'
import { getApplicationInstalled } from '@/services/PulseApiEndpoint'

const ApplicationLists = () => {

    const query = useQuery({ queryKey: ['movieCollection'], queryFn:()=> getApplicationInstalled() ,refetchOnMount:"always"})
    
    const AppCollections = useAppContentStore.use.collections()
    const selectedApp = useAppContentStore.use.selected()
    const handleSelectedItem = (data:any) => {
        setSelectedApp(data)
    }

    React.useEffect(() => {
        if (!query.isFetching) {
          query.data && setAppCollection(query.data)
        }
    
      return () => {
        removeSelectedApp()
      }
    
    }, [query.isFetching])
    

    

  return (
    <>
    {query.isError && <Text> {query.error.message} </Text>}
      {query.isFetching?<Text>Chargements des donnes en cours</Text> : <Animated.FlatList
        horizontal={false}
        showsVerticalScrollIndicator={true}
        numColumns={4}
        data={AppCollections}
        renderItem={({ item }) => <ItemApp isSelected={selectedApp?.id ==item.id} data={item} onSelected={handleSelectedItem} />}
        keyExtractor={item => item.id} extraData={selectedApp}
        className="w-fit mx-auto flex-1"
    
      />}
    </>
  )
}

export default ApplicationLists

const styles = StyleSheet.create({})