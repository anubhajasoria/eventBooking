import { View, Text } from "react-native";
import { Back, More } from "../../assets/svg";
import { LinearGradient } from "expo-linear-gradient";

const Header = () => {
  return (
    <LinearGradient
      colors={["rgba(0,0,0,0.8)", "transparent"]}
      className="absolute top-0 left-0 w-full p-4 z-10 h-[15vh]"
    >
      <View className="flex-1 flex-row justify-between items-center pt-6">
        <Back />
        <Text className="text-white text-xl font-bold">Event</Text>
        <More />
      </View>
    </LinearGradient>
  );
};
export default Header;
