import clsx from "clsx";
import { StyleSheet, Text, TouchableOpacity, View } from "react-native";
import React from "react";
import { setSelectOneDeviceConnected, useDevicesConnectedStore } from "@/store/devicesConnected.store";
import { DevicesConnectedType } from "@/interfaces/DevicesConnected.interface";
import { DEVICE_CARD_COLORS } from "@/constants/Colors";
import { cn } from "@/lib/utils";

type TextSectionProps = {
  label: string;
  value?: string;
  isSelected?: boolean;
  textClassName?: string;
  className?: string;
};

export const TextSection = ({ label, value, textClassName, className }: TextSectionProps) => {
  return (
    <View className={clsx("flex-1 flex-row items-center", className)}>
      <Text className={clsx("font-bold", "mr-1", textClassName)}>{label}</Text>
      <Text className={clsx("text-sm font-normal", textClassName)}>{value} </Text>
    </View>
  );
};

export type DeviceItemProps = {
  device: DevicesConnectedType;
  onPress:(device:DevicesConnectedType)=>void
};
export const DeviceItem = ({ device, onPress }: DeviceItemProps) => {
    const deviceConnectedSelected = useDevicesConnectedStore.use.selected();
    const DEFAULT_CLASS = ["bg-white","border", "border-gray-300", "rounded", "p-3", "relative"]
    const SELECTED_STYLE = ["bg-cyan-200","border-cyan-500"]
    const SELECTED_CLASS = deviceConnectedSelected.some((item) => item.target == device.target) ? SELECTED_STYLE : []
    const CARD_CLASS = clsx(DEFAULT_CLASS, SELECTED_CLASS)
    const TEXT_SELECTED_STYLE = clsx("text-cyan-900", "text-shadow")
    const TEXT_SELECTED_CLASS = deviceConnectedSelected.some((item) => item.target == device.target) ? TEXT_SELECTED_STYLE: []
  
  const handlePress = () => {
    onPress && device && onPress(device);
  };

  return (
    <TouchableOpacity
      style={styles.container}
      className={cn(CARD_CLASS)}
      onPress={handlePress}
    >
      <TextSection
        label="ID:"
        value={device.id}
        textClassName={TEXT_SELECTED_CLASS}
      />
      <TextSection
        label="IP:"
        value={device.target}
        textClassName={TEXT_SELECTED_CLASS}
      />
      <TextSection
        label="Type:"
        value={device.typeDevice}
        textClassName={TEXT_SELECTED_CLASS}
      />
      <TextSection
        label="Model:"
        value={device.model}
        textClassName={TEXT_SELECTED_CLASS}
      />
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  container: {
    height: 140,
    margin: 4,
  },
});
