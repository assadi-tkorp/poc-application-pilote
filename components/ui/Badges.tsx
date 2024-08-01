import { StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React from 'react'
import { variantsMediaType } from '@/interfaces/themes'
import { ApplicationIcon, MovieOpenIcon } from '../svg/outline'
import Ionicons from '@expo/vector-icons/Ionicons';


interface BadgeProps {
    title: string
    variants: variantsMediaType

}
const BadgesMedia = ({ title, variants }: BadgeProps) => {
    
    const handleClick = () => {
        
    }

    const VARIANTS_COLORS = {
        video: {
            bgColor: "bg-yellow-200",
            textColor: "text-yellow-900",
        
        },
        application: {
            bgColor: "bg-cyan-200",
            textColor: "text-cyan-900",
        
         
        },
    }
    
    const VARIANTS_ICON = {
        video: {
            name: "videocam",
            color:"#713f12"
        },
        application: {
         name: "apps",
        color:"#164e63"
        },
    }
    
    

    const CLASS_BADGE_PARENT = ["rounded","p-3", "min-w-[100px]", "flex-row", "items-center", "justify-center","mx-2","first-of-type:ml-0", "last-of-type:mr-0"]
    CLASS_BADGE_PARENT.push(VARIANTS_COLORS[variants].bgColor)
    const CLASS_BADGE_TEXT = ["font-bold", "text-yellow-900","flex-row", "items-center"]
    CLASS_BADGE_TEXT.push(VARIANTS_COLORS[variants].textColor)

  return (
    <TouchableOpacity className={CLASS_BADGE_PARENT.join(" ")}  onPress={handleClick}  >
   <Ionicons name={VARIANTS_ICON[variants].name} size={20} color={VARIANTS_ICON[variants].color} /><Text className={CLASS_BADGE_TEXT.join(" ")} >  { title}</Text>
    </TouchableOpacity>
  )
}

export default BadgesMedia

const styles = StyleSheet.create({})