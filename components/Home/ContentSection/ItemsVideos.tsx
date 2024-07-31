import { StyleSheet, Text, View,TouchableOpacity, ImageBackground, } from 'react-native'
import React from 'react'
import Card from '@/components/ui/Cards'
import { MockMovieInterface } from '@/interfaces/MockMoviContent'

type ItemsVideosProps = {
    isSelected: boolean,
    data: MockMovieInterface | null,
    onSelected:boolean
}
const ItemsVideos = ({ isSelected, data,onSelected }:ItemsVideosProps) => {
    
    const handleClick = () => {
        onSelected(data.id)
      }
   
    
    const ITEM_SELECTED:Array<string> = ["text-xs"]
    isSelected ? ITEM_SELECTED.push("text-red-500") : ITEM_SELECTED
    

    return (<TouchableOpacity onPress={handleClick}   >
        <Card className="p-0 relative w-[200] min-h-[200] rounded bg-gray-100 overflow-hidden"  >  
        <ImageBackground src={data?.vignetteUrl} resizeMode="cover" style={styles.image}    />

            <View className="w-full bg-white" style={styles.cardBody}>
                <Text className={ITEM_SELECTED.join(' ')} >{data?.title}</Text>
            </View>
            
       </Card>
      </TouchableOpacity>)
}

export default ItemsVideos

const styles = StyleSheet.create({
    image: {
        flex: 1,
     
   
       
        
  
      },
    
    cardBody: {
     
        position: "absolute",
        bottom: 0,
        padding: 13,
        right: 0, 
     
        
    }
})


