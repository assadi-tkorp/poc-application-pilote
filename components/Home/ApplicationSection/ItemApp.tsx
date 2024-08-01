import { StyleSheet, Text, TouchableOpacity, View } from "react-native";
import React from "react";
import Card from "@/components/ui/Cards";
import { AppContentType } from "@/interfaces/ApplicationContents";
import Animated from "react-native-reanimated";
import { setSelectedApp } from "@/store/applications.store";

type ItemAppProps = {
  isSelected: boolean;
  data: AppContentType | null;
  onSelected: (id: string | number) => void;
};
const ItemApp = ({ isSelected, data, onSelected }: ItemAppProps) => {
  const ITEM_SELECTED: Array<string> = [
    "p-0 relative",
    "w-[200]",
    "min-h-[200]",
    "rounded",
    " bg-gray-100",
    "overflow-hidden",
      "text-xs"

  ];
  isSelected
    ? ITEM_SELECTED.push("border-4 border-blue-500 shadow")
    : ITEM_SELECTED;

  const handleClick = () => {
    data && setSelectedApp(data);
  };

  return (
    <TouchableOpacity onPress={handleClick}>
          <Card className={ITEM_SELECTED.join(" ")}>
              <View className="flex-1 flex-row justify-center items-center bg-slate-100" >
                  
        <Animated.Image
          source={{ uri: data?.icon }}
          resizeMode="cover"
          style={styles.image}
        />
              </View>
        <View className="w-full px-3" style={styles.cardBody}>
          <Text>{data?.name}</Text>
        </View>
      </Card>
    </TouchableOpacity>
  );
};

export default ItemApp;

const styles = StyleSheet.create({
    image: {
        height: 100,
        width:100,
        borderRadius:100
      },
    
    cardBody: {
        flex:0.35,
        backgroundColor: "rgba(255,255,255,1)",
        justifyContent: "center",
     
        
    }
});
