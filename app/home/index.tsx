import { View} from "react-native";
import React from "react";
import { SafeAreaView } from "react-native-safe-area-context";
import { StatusBar } from "expo-status-bar";
import BadgesMedia from "@/components/ui/Badges";
import Video360Lists from "./_components/MainContent/Video360";
import ApplicationLists from "./_components/MainContent/Applications";
import DeviceLists from "./_components/MainContent/Devices";
import Video360Info from "./_components/RightAside/Videos360";
import ApplicationInfo from "./_components/RightAside/Applications";
import DevicesInfo from "./_components/RightAside/Devices";
import HeaderSection from "./_components/HeaderSection";
import useDiscoverDevices from "@/hooks/useDiscoverDevices";



const Home = () => {
  type mediaStateType = "video" | "application"|"devices";
  const [mediaType, setMediaType] = React.useState<mediaStateType>("video");

    useDiscoverDevices()

 

  const handleClickBadge = (media:string) => {
    media && setMediaType(media)
  }

  return (

  <SafeAreaView className="flex-1 bg-slate-900 justify-center p-5"  >
    <StatusBar style="light" />
    {/* Header section */}
    <HeaderSection />
    {/* Main section */}
      <View className="flex-1 flex-row pt-1 gap-1">
          <View className="w-[65vw] bg-gray-100 rounded-md bg-clip-padding backdrop-filter backdrop-blur-sm bg-opacity-50 border border-gray-100 shadow">
            <View className="flex-row justify-center p-4">
              <BadgesMedia title="Video" variants="video" onPress={handleClickBadge}  />
              <BadgesMedia title="Applications" variants="application" onPress={handleClickBadge} />
              <BadgesMedia title="Appareils" variants="devices" onPress={handleClickBadge}  />
            </View>
            {mediaType === "video" && <Video360Lists />}
            {mediaType === "application" && <ApplicationLists />}
            {mediaType === "devices" && <DeviceLists />}
          </View>
          {/* Right section */}
           <View className="bg-white-500 flex-1">
            {mediaType === "video" && <Video360Info />}
            {mediaType === "application" && <ApplicationInfo />}
            {mediaType === "devices" && <DevicesInfo />}
          </View> 
        </View>
  </SafeAreaView>
 
);
    
    
};

export default Home;
