import { View, Image, ImageBackground, Text, Dimensions } from "react-native";
import { Button, CustomBottomSheet, Header } from "../components";
import { useState } from "react";
import { SafeAreaView } from "react-native-safe-area-context";
import { Calendar, Location, Frame, Money } from "../../assets/svg";
import { LinearGradient } from "expo-linear-gradient";
import FontAwesome from "@expo/vector-icons/FontAwesome";
import { useNavigation } from "@react-navigation/native";

const Event = ({ route }) => {
  const [open, setOpen] = useState(true);
  const navigation = useNavigation();
  const claimed = route?.params;
  console.log(claimed);
  return (
    <SafeAreaView className="flex-1" edges={[]}>
      <Header />
      <View className="flex-1 bg-white flex-col justify-between">
        <View>
          <Image
            source={require("../../assets/images/event.png")}
            className="w-full"
          />
        </View>
        {/* <Header /> */}
        {/* <Text>d</Text> */}
        <CustomBottomSheet
          alwaysOpen={true}
          visible={open}
          // onClose={() => {
          //   setOpen(false);
          //   console.log("press");
          // }}
          ScrollableComponent={
            <View className="p-8 gap-y-8 z-10">
              <View>
                <Text className="text-3xl font-semibold text-text mb-1">
                  Art show 🎨
                </Text>
                <Text className="text-base  text-text">By Olivia Adams</Text>
              </View>
              <View className="flex-row gap-x-3">
                <Calendar />
                <View>
                  <Text className="text-sm mb-1">Monday, Nov 13 2023</Text>
                  <Text className="text-xs text-subText">
                    6:00 PM - 10:00 PM
                  </Text>
                </View>
              </View>
              <View className="flex-row gap-x-3">
                <Location />
                <View>
                  <Text className="text-sm mb-1">Lower Manhattan</Text>
                  <Text className="text-button text-xs">
                    Join to see full address
                  </Text>
                </View>
              </View>
              <View className="flex-row gap-x-3">
                <Frame />
                <View>
                  <Text className="text-sm mb-1">78/100 tickets left</Text>
                  <Text className="text-xs text-subText">100+ invited</Text>
                </View>
              </View>
              <View className="flex-row gap-x-3">
                <Money />
                <View>
                  <Text>$10.00 - $50.00</Text>
                </View>
              </View>
              <View className="flex-col">
                <Text className="text-xl font-medium mb-2">
                  About this event
                </Text>
                <Text className="font-light leading-5">
                  Come join me in celebrating my 25th birthday! I can't wait to
                  celebrate with all of you, so let's make it a night to
                  remember. See you at the party!
                </Text>
              </View>
              <View className="flex-col pb-32">
                <Text className="text-xl font-medium mb-2">
                  Find this event
                </Text>
                <LinearGradient
                  colors={[
                    "#dce0e6",
                    "#ffffff",
                    "#dce0e6",
                    "#ffffff",
                    "#dce0e6",
                  ]}
                  start={{ x: 0, y: 0 }}
                  end={{ x: 1, y: 1 }}
                  className="bg-slate-500 h-[175] rounded-2xl items-center justify-center flex"
                >
                  <FontAwesome name="lock" size={30} color={"#6C63FF"} />
                  <Text className="mt-2 text-base text-button font-medium">
                    Join to unlock
                  </Text>
                </LinearGradient>
              </View>
            </View>
          }
          FooterComponent={
            <View
              className="p-10 items-center justify-center bg-white  absolute bottom-0 w-screen z-10"
              style={{
                elevation: "10",
                boxWithShadow: {
                  shadowColor: "#000000",
                  shadowOffset: { width: 10, height: 10 },
                  shadowOpacity: 0.1,
                  shadowRadius: 10,
                },
              }}
            >
              <Button
                title={
                  claimed?.claimed ? "Waiting for Approval" : "Buy Tickets"
                }
                classname={`w-full ${claimed?.claimed ? "bg-orange-400" : ""}`}
                onPress={() => {
                  setOpen(true);
                  navigation.navigate("Questionnaire");
                }}
              />
            </View>
          }
          // alwaysOpen={true}
          // modal_height={Dimensions.get("screen").height * 0.5}
        />
      </View>
    </SafeAreaView>
  );
};

export default Event;
