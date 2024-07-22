import { StatusBar, Text, View } from "react-native";
import { Header } from "../src/components";
import { Event } from "../src/screens";
import { SafeAreaProvider, SafeAreaView } from "react-native-safe-area-context";
import { GestureHandlerRootView } from "react-native-gesture-handler";

export default function Index() {
  return (
    <GestureHandlerRootView style={{ flex: 1 }}>
      <SafeAreaProvider>
        <Event />
      </SafeAreaProvider>
    </GestureHandlerRootView>
  );
}
