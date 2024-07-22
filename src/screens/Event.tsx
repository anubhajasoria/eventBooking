import { View, Image, ImageBackground, Text, Dimensions } from "react-native";
import { Button, CustomBottomSheet, Header } from "../components";
import { useState } from "react";
import { SafeAreaView } from "react-native-safe-area-context";
import { Calendar, Location, Frame, Money } from "../../assets/svg/";

const Event = () => {
  const [open, setOpen] = useState(true);
  return (
    <SafeAreaView className="flex-1 bg-white" edges={["bottom"]}>
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
          visible={open}
          onClose={() => {
            setOpen(false);
            console.log("press");
          }}
          ScrollableComponent={
            <View className="p-8 gap-y-8">
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
                <View className="bg-slate-500 h-[175] rounded-2xl"></View>
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
                title="Buy Tickets"
                classname={"w-full"}
                onPress={() => {
                  setOpen(true);
                  console.log("press");
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
