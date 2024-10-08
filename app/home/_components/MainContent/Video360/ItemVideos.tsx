import {
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
  ImageBackground,
  TouchableNativeFeedback,
} from "react-native";
import React from "react";
import Card from "@/components/ui/Cards";
import { MockMovieInterface } from "@/interfaces/MockMoviContent";
import Animated from "react-native-reanimated";
import * as FileSystem from 'expo-file-system';

type ItemVideoProps = {
  isSelected: boolean;
  data: MockMovieInterface | null;
  onSelected: (id: string) => void;
};
const ItemVideos = ({ isSelected, data, onSelected }: ItemVideoProps) => {
  const handleClick = () => {
    data && onSelected(data);
  };

  const ITEM_SELECTED: Array<string> = [
    "p-0 relative",
    "w-[200]",
    "min-h-[200]",
    "rounded",
    " bg-gray-100",
    "overflow-hidden",
    "text-xs",
      "shadow",
   "border","border-gray-300","shadow-slate-600"
  ];
  isSelected
    ? ITEM_SELECTED.push("border-4 border-green-500 shadow")
    : ITEM_SELECTED;
  
    const [imageUri, setImageUri] = React.useState("");
  
  React.useEffect(() => {

    const fetchImage = async () => {
      const fileUri = `file://${data?.posterUrl}`
      console.log(fileUri);
      
      const fileInfo = await FileSystem.getInfoAsync(fileUri);
      console.log(fileInfo);
      if (fileInfo.exists) {
        setImageUri(fileInfo.uri);
      }
     
    }
    if (data?.posterUrl) {
      fetchImage()
    }


},[data?.posterUrl])
  

  return (
    <TouchableOpacity onPress={handleClick}>
      <Card className={ITEM_SELECTED.join(" ")}>
       { imageUri &&<Animated.Image
          source={{ uri: imageUri }}
          resizeMode="cover"
          style={styles.image}
        />}
        <View className="w-full bg-white" style={styles.cardBody}>
          <Text>{data?.title}</Text>
        </View>
      </Card>
    </TouchableOpacity>
  );
};

export default ItemVideos;

const styles = StyleSheet.create({
  image: {
    height: 300,
  },

  cardBody: {
    position: "absolute",
    bottom: 0,
    padding: 13,
    right: 0,
    backgroundColor: "rgba(255,255,255,0.75)",
  },
});
