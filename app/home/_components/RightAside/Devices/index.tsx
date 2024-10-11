import { AndroidPlainWordMark } from "@/components/svg/plain";
import React from "react";
import { Button, Text, View } from "react-native";

import DevicesSettings from "./DevicesSettings";
import DeviceStorage from "./DeviceStorage";
import DevicesInfo from "./DevicesInfo";
import { useDevicesConnectedStore } from "@/store/devicesConnected.store";
import { sendRestartDevices } from "@/services/PulseWebsocketCommand";

const DevicesSpecifications = () => {

  const devicesSelected = useDevicesConnectedStore.use.selected()

  const handlePressRestart = () => {
    const targets = devicesSelected.map(it=>it.target)
    sendRestartDevices(targets)
  }

  return (
    <View className="flex-1 rounded  shadow-xl  p-3 bg-gray-100 rounded-md bg-clip-padding backdrop-filter backdrop-blur-sm bg-opacity-50 border border-gray-300">
      <View className="flex-1" >
        <View className="w-32 h-32 p-4 rounded bg-gray-300 mx-auto shadow mb-3">
          <AndroidPlainWordMark className="text-slate-900" />
        </View>
        <DevicesInfo />
        <DevicesSettings />
      </View>

      <View className="mt-3">
        <Button 
          title="Redemarrer"
          color={"hsl(0 84.2% 60.2%)"}
          onPress={handlePressRestart}
        />
      </View>
    </View>
  );
};

export default DevicesSpecifications;
