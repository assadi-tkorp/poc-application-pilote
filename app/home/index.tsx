import { View} from "react-native";
import React from "react";
import { SafeAreaView } from "react-native-safe-area-context";
import { StatusBar } from "expo-status-bar";
import DeviceConnectedSection from "./_components/DeviceConnectedSection";
import BadgesMedia from "@/components/ui/Badges";
import Video360Lists from "./_components/MainContent/Video360";
import ApplicationLists from "./_components/MainContent/Applications";
import DeviceLists from "./_components/MainContent/Devices";
import Video360Info from "./_components/RightAside/Videos360";
import ApplicationInfo from "./_components/RightAside/Applications";
import DevicesInfo from "./_components/RightAside/Devices";



const Home = () => {
  type mediaStateType = "video" | "application"|"devices";
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
    
/*   useEffect(() => {


    ws.onmessage =(event => {
      alert(JSON.stringify(event.data))
    })
  }, [])  */

  const handleClickBadge = (media:string) => {
    media && setMediaType(media)
  }

  return (
    <SafeAreaView className="h-screen bg-slate-900 justify-center ">
      <StatusBar style="light" />
     
      {/* Devices section */}
      <View className="px-5">
          <DeviceConnectedSection />
      </View>
      {/* Content section */}
      <View className="flex-1 p-5">
        <View className="flex-row  h-min-[100px] flex-1">
          <View className="w-[75%] h-full bg-gray-100 rounded-md bg-clip-padding backdrop-filter backdrop-blur-sm bg-opacity-50 border border-gray-100 shadow">
            <View className="flex-row justify-center my-3">
    
              <BadgesMedia title="Video" variants="video" onPress={handleClickBadge}  />
              <BadgesMedia title="Applications" variants="application" onPress={handleClickBadge} />
              <BadgesMedia title="Appareils" variants="devices" onPress={handleClickBadge}  />
            </View>
            {mediaType === "video" && <Video360Lists />}
            {mediaType === "application" && <ApplicationLists />}
            {mediaType === "devices" && <DeviceLists />}
          </View>
          {/* setting section */}
          <View className="w-[25%] bg-white-500 h-full px-3 ">
            {mediaType === "video" && <Video360Info />}
            {mediaType === "application" && <ApplicationInfo />}
            {mediaType === "devices" && <DevicesInfo />}
          </View>
        </View>
      </View>
 
    </SafeAreaView>
  );
};

export default Home;
