import { StyleSheet, Text, View } from "react-native";
import React from "react";
import Animated, { FadeInLeft, FadeOutLeft } from "react-native-reanimated";
import Card from "@/components/ui/Cards";
import DeviceStorage from "./DeviceStorage";
import { useDevicesConnectedStore } from "@/store/devicesConnected.store";
import DeviceNoSelected from "./DeviceNoSelected";

const DevicesInfo = () => {
  const deviceConnectedSelected = useDevicesConnectedStore.use.selected();
  const DEVICE_SELECTED = deviceConnectedSelected[0];
  const DEVICE_SELECTED_COUNT = deviceConnectedSelected.length;

  const SingleDevice = () => (
    <View className="mb-3">
      <Text className="font-bold">
        ID:{" "}
        {DEVICE_SELECTED?.id && (
          <Animated.Text
            className="font-normal"
            entering={FadeInLeft.delay(100)}
            exiting={FadeOutLeft}
          >
            {DEVICE_SELECTED?.id}
          </Animated.Text>
        )}
      </Text>
      <Text className="font-bold">
        IP:{" "}
        {DEVICE_SELECTED?.target && (
          <Animated.Text
            className="font-normal"
            entering={FadeInLeft.delay(150)}
            exiting={FadeOutLeft}
          >
            {DEVICE_SELECTED?.target}
          </Animated.Text>
        )}
      </Text>
      <Text className="font-bold">
        AndroidID:{" "}
        {DEVICE_SELECTED?.androidId && (
          <Animated.Text
            className="font-normal"
            entering={FadeInLeft.delay(200)}
            exiting={FadeOutLeft}
          >
            {DEVICE_SELECTED?.androidId}
          </Animated.Text>
        )}
      </Text>
      <Text className="font-bold">
        Model:{" "}
        {DEVICE_SELECTED?.model && (
          <Animated.Text
            className="font-normal"
            entering={FadeInLeft.delay(250)}
            exiting={FadeOutLeft}
          >
            {DEVICE_SELECTED.model}
          </Animated.Text>
        )}
      </Text>
      <Text className="font-bold">
        Batterie:{" "}
        <Animated.Text
          className="font-normal"
          entering={FadeInLeft.delay(300)}
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
        <Animated.Text className="font-bold text-xl text-white">{DEVICE_SELECTED_COUNT}</Animated.Text>
      </Card>
    </Animated.View>
  );

  const RenderModeInfoDevice = () => {
    if (DEVICE_SELECTED_COUNT === 1) return <SingleDevice />;
    if (DEVICE_SELECTED_COUNT > 1) return <MultipleDevices />;

    return <DeviceNoSelected />;
  };

  return <RenderModeInfoDevice />;
};

export default DevicesInfo;

const styles = StyleSheet.create({});
