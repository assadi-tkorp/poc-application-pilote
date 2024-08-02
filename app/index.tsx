import { View, Text, Button } from "react-native";
import React, { useEffect } from "react";
import { SafeAreaView } from "react-native-safe-area-context";
import DevicesCards from "@/components/ui/Cards/DevicesCards";
import Animated from "react-native-reanimated";
import VolumeSection from "@/components/Home/Settings/VolumeSection";
import ContentSection from "@/components/Home/ContentSection";
import RightAside from "@/components/Home/RightAside";
import BadgesMedia from "@/components/ui/Badges";
import ApplicationContent from "@/components/Home/ApplicationSection";
import RightAsideApplication from "@/components/Home/RightAsideApplication";
import { StatusBar } from "expo-status-bar";

const Home = () => {
  type mediaStateType = "video" | "application";
  const [mediaType, setMediaType] = React.useState<mediaStateType>("video");
  const ws = new WebSocket("ws://localhost:10002");
  const sendMessage = () => {
    const message = {
      type: "test",
      route: "test",
      target: "target",
      body: "test",
    };
    ws.send(JSON.stringify(message));
  };
  /*   
  useEffect(() => {


    ws.onmessage =(event => {
      alert(JSON.stringify(event.data))
    })
  }, []) */

  const handleClickBadge = (media:string) => {
    setMediaType(media)
  }

  return (
    <SafeAreaView className="h-screen bg-slate-900 justify-center ">
      <StatusBar style="light" />
      <View className="mx-auto">
        <Text>Appareil selectionné: </Text>
      </View>
      {/* Devices section */}
      <View className="flex-row justify-center flex-wrap p-6 ">
        <DevicesCards />
        <DevicesCards />
        <DevicesCards />
      </View>
      {/* Content section */}
      <View className="flex-1 p-5">
        <View className="flex-row  h-min-[100px] flex-1">
          <View className="w-[75%] h-full bg-gray-100 rounded-md bg-clip-padding backdrop-filter backdrop-blur-sm bg-opacity-50 border border-gray-100 shadow">
            <View className="flex-row justify-center my-3">
              <BadgesMedia title="Video" variants="video" onPress={handleClickBadge}  />
              <BadgesMedia title="Applications" variants="application" onPress={handleClickBadge}  />
            </View>
            {mediaType === "video" && <ContentSection />}
            {mediaType === "application" && <ApplicationContent />}
          </View>
          {/* setting section */}
          <View className="w-[25%] bg-white-500 h-full px-3 ">
            {mediaType === "video" && <RightAside />}
            {mediaType === "application" && <RightAsideApplication />}
          </View>
        </View>
      </View>
    </SafeAreaView>
  );
};

export default Home;
