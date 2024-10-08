import { AndroidPlainWordMark } from "@/components/svg/plain";
import React from "react";
import { Button, Text, View } from "react-native";

import DevicesSettings from "./DevicesSettings";
import DeviceStorage from "./DeviceStorage";
import DevicesInfo from "./DevicesInfo";

const DevicesSpecifications = () => {
  return (
    <View className="rounded  shadow-xl flex-1 p-3 bg-gray-100 rounded-md bg-clip-padding backdrop-filter backdrop-blur-sm bg-opacity-50 border border-gray-300">
      <View className="flex-1">
        <View className="w-32 h-32 p-4 rounded bg-gray-300 mx-auto shadow mb-3">
          <AndroidPlainWordMark className="text-slate-900" />
        </View>
        <DevicesInfo mode="single" />
        <DevicesSettings />
      </View>

      <View className="my-3">
        <Button
          title="Redemarrer"
          color={"hsl(0 84.2% 60.2%)"}
        />
      </View>
    </View>
  );
};

export default DevicesSpecifications;
