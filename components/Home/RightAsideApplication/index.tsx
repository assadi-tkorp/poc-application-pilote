import { Button, StyleSheet, Text, View } from "react-native";
import React from "react";
import Animated, {
  FadeInLeft,

  FadeOutLeft,
} from "react-native-reanimated";
import { useAppContentStore } from "@/store/applications.store";
import IconPoster from "./IconPoster";
import ModalDialog from "@/components/ui/Modal/ModalDialog";
import RunAppViewModal from "./RunAppViewModal";

const RightAsideApplication = () => {
  const selectedAppContent = useAppContentStore.use.selected();

  const [isModalVisible, setModalVisible] = React.useState(false);

  const toggleModal = () => {
    setModalVisible(!isModalVisible);
  };

  return (
    <View className="rounded  shadow-xl flex-1 p-3 bg-gray-100 rounded-md bg-clip-padding backdrop-filter backdrop-blur-sm bg-opacity-50 border border-gray-300">
      <IconPoster image={selectedAppContent?.icon} />
      <Animated.Text
        entering={FadeInLeft.delay(80)}
        exiting={FadeOutLeft}
        className="font-bold text-center text-xl mt-10"
      >
        {selectedAppContent?.name}
      </Animated.Text>
      <Animated.Text
        entering={FadeInLeft.delay(150)}
        exiting={FadeOutLeft}
        className="text-center text mt-2"
      >
        {selectedAppContent?.packageName}
      </Animated.Text>
      <Animated.Text
        entering={FadeInLeft.delay(180)}
        exiting={FadeOutLeft}
        className="text-center text mt-2"
      >
        {selectedAppContent?.versionName}
      </Animated.Text>
      <Animated.ScrollView className="h-[100px] my-3"></Animated.ScrollView>
      <View>
        <Button title="Diffuser" onPress={toggleModal} />
      </View>
      <ModalDialog
        isModalVisible={isModalVisible}
        setModalVisible={setModalVisible}
        children={<RunAppViewModal setModalVisible={setModalVisible} />}
        style={styles.modalContainer}
      />
    </View>
  );
};

export default RightAsideApplication;

const styles = StyleSheet.create({
  modalContainer: {
    flex: 0.75,
    width: "45%",
    overflow: "hidden", 
  
  }
});
