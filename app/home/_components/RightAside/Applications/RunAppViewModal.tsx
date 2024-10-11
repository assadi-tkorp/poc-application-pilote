import {
  Button,
  Pressable,
  StyleSheet,
  Text,
  TouchableNativeFeedbackBase,
  View,
} from "react-native";
import React from "react";
import { useAppContentStore } from "@/store/applications.store";
import Animated, { FadeInLeft, FadeInRight, FadeOutLeft } from "react-native-reanimated";
import IconPoster from "./IconPoster";
import { useDevicesConnectedStore } from "@/store/devicesConnected.store";
import { sendRunPackage } from "@/services/PulseWebsocketCommand";

interface RunAppViewModal {
  setModalVisible: (value: boolean) => void;
}
const RunAppViewModal = ({ setModalVisible }: RunAppViewModal) => {
  const closeModal = () => {
    setModalVisible(false);
  };

  const appSelected = useAppContentStore.use.selected()
  const devicesConnected = useDevicesConnectedStore.use.collections()
  const devicesConnectedCount = useDevicesConnectedStore.use.count()
  const devicesConnectedSelected = useDevicesConnectedStore.use.selected()

  const runSelectedPackage = () => {
    const targets = [...devicesConnectedSelected].map(item => item.target)
    const packageName = appSelected?.packageName
      if(!packageName) return
         sendRunPackage({packageName,targets})
  }

  type pulseWebsocketResponseData = {
    code:number|string,
    data: any,
    status:string
  }





  return (
    <View className="flex-1">
      <View className="p-3 my-3 rounded mx-auto">
        <Text className="text-center font-semibold ">
          Souhaitez-vous diffusée cette application sur les appareils
          sélectionné ?
        </Text>
      </View>
      <View className="flex-row justify-evenly">
        <View style={styles.poster} >
        <IconPoster image={appSelected?.icon} />
        </View>
        <View style={styles.resumeCol} className="pt-5">
          <View style={{ flex: 0.35 }}>
            <Text className="text-center font-bold text-lg"  >
             {appSelected?.name}
            </Text>
          </View>
          <View className="flex-1 flex-col justify-end p-5">
            <View className="flex-row justify-evenly">
              <Text >Appareils connecté: {devicesConnectedCount }</Text>
              <Text > Selectionné: { devicesConnectedSelected.length}</Text>
            </View>
          </View>
        </View>
      </View>

      <View className="h-[150]  flex-row items-center justify-center">
        <Button title="Confirmer" onPress={runSelectedPackage} />
      </View>
    </View>
  );
};

export default RunAppViewModal;

const styles = StyleSheet.create({
  poster: {
    flex: 0.25,
    height: 220,
 
  },
  resumeCol: {
    flex: 0.65,
  },
});
