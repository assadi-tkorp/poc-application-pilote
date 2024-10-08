import { StyleSheet, Text, View } from "react-native";
import React from "react";
import Animated, { FadeInLeft, FadeOutLeft } from "react-native-reanimated";
import Card from "@/components/ui/Cards";
import DeviceStorage from "./DeviceStorage";
type DevicesInfo = {
    mode:"single"|"multiple"
}
const DevicesInfo = ({ mode }: DevicesInfo) => {
  
  const SingleDevice= () => (
    <View className="mb-3">
      <Text className="font-bold">
        ID:{" "}
        <Animated.Text
          className="font-normal"
          entering={FadeInLeft.delay(100)}
          exiting={FadeOutLeft}
        >
          123456
        </Animated.Text>
      </Text>
      <Text className="font-bold">
        IP:{" "}
        <Animated.Text
          className="font-normal"
          entering={FadeInLeft.delay(100)}
          exiting={FadeOutLeft}
        >
          192.168.1.25
        </Animated.Text>
      </Text>
      <Text className="font-bold">
        AndroidID:{" "}
        <Animated.Text
          className="font-normal"
          entering={FadeInLeft.delay(100)}
          exiting={FadeOutLeft}
        >
          155
        </Animated.Text>
      </Text>
      <Text className="font-bold">
        Model:{" "}
        <Animated.Text
          className="font-normal"
          entering={FadeInLeft.delay(100)}
          exiting={FadeOutLeft}
        >
          155
        </Animated.Text>
      </Text>
      <Text className="font-bold">
        Batterie:{" "}
        <Animated.Text
          className="font-normal"
          entering={FadeInLeft.delay(100)}
          exiting={FadeOutLeft}
        >
          15%
        </Animated.Text>
          </Text>
          <DeviceStorage /> 
    </View>
  );

  const MultipleDevices = () => (
    <Animated.View
      entering={FadeInLeft.delay(100)}
      exiting={FadeOutLeft}
    >
      <Card className="bg-slate-600 flex justify-center items-center ">
        <Text className="font-bold text-white mb-3">Appareils sélectionnés</Text>
        <Animated.Text className="font-bold text-xl text-white">5</Animated.Text>
      </Card>
    </Animated.View>
  );
    
    const RenderModeInfoDevice = () => {
        if (mode == "multiple") return <MultipleDevices />
        return <SingleDevice /> 
    }


  return  <RenderModeInfoDevice /> ;
};

export default DevicesInfo;

const styles = StyleSheet.create({});
