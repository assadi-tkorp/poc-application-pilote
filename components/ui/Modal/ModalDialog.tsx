import {
  Pressable,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from "react-native";
import React, { Children } from "react";
import Modal from "react-native-modal";
import ModalCard from "../Cards/ModalCard";
import CloseButton from "./CloseButton";
import clsx from "clsx";

interface ModalDialogProps {
  isModalVisible: boolean;
  setModalVisible: (isModalVisible: boolean) => void;
  children: React.JSX.Element;
}
const ModalDialog = ({
  isModalVisible,
  setModalVisible,
  children,
  ...props
}: ModalDialogProps) => {
  const closeModal = () => {
    setModalVisible(false);
  };

  return (
    <Modal
    {...props} 
      isVisible={isModalVisible}
      animationIn="zoomIn"
      onBackdropPress={closeModal}

      className={clsx("bg-white rounded mx-auto overflow-hidden relative",props?.className)}
      
    >
      
        <View className="flex-row justify-end p-4 rounded ">
          <CloseButton closeModal={closeModal} />
        </View>

   {children}
     
    </Modal>
  );
};

export default ModalDialog;

const styles = StyleSheet.create({});
