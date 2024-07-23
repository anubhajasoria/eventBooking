import { LinearGradient } from "expo-linear-gradient";
import React, { useState } from "react";
import { Text, TextInput, TouchableOpacity, View } from "react-native";
import { QuestionsData } from "../data/Questions";
import { Button } from "../components";
import { Ionicons } from "@expo/vector-icons";
import { useNavigation } from "@react-navigation/native";

const Questionnaire = () => {
  const [qNumber, setQNumber] = useState(0);
  const [answer, setAnswer] = useState([]);
  const navigation = useNavigation();

  const setValueAtIndex = (value) => {
    // Copy the original array to avoid mutating state directly

    if (!QuestionsData[qNumber].multi) {
      const newArray = [...answer];
      // Replace or add value at the specified index
      newArray.splice(qNumber, 1, value); // Replace 1 element at index with 'value'

      // Update state with the modified array
      setAnswer(newArray);
    } else {
      const newArray =
        answer.length === qNumber ? [...answer, []] : [...answer];
      const currentIndex = newArray[qNumber].indexOf(value);
      console.log(currentIndex, value);
      if (currentIndex === -1) {
        // If value does not exist, add it
        newArray[qNumber].push(value);
      } else {
        // If value exists, remove it
        newArray[qNumber].splice(currentIndex, 1);
      }

      setAnswer(newArray);
      //add logic in a way that if a view pressed once then the value is added in the answer[qNumber] array else it is removed
    }
  };
  console.log(answer);
  return (
    <LinearGradient
      colors={["#6C63FF55", "#6C63FF22"]}
      className={"flex-1"}
      start={{ x: 0, y: 1 }}
      end={{ x: 1, y: 1 }}
    >
      <View className="flex-1  p-12 pt-40">
        <Text className="text-button font-medium mb-3">
          QUESTION {qNumber + 1} of {QuestionsData.length}
        </Text>
        <Text className="text-xl font-medium mb-8">
          {QuestionsData[qNumber]?.question}
        </Text>

        {QuestionsData[qNumber]?.type === "text" && (
          <TextInput
            value={answer[qNumber]}
            className="text-xl "
            placeholder="Write your answer here"
            placeholderTextColor={"rgba(108, 99, 255, 0.3)"}
            multiline={true}
            onChangeText={setValueAtIndex}
          />
        )}
        {QuestionsData[qNumber]?.type === "list" &&
          QuestionsData[qNumber]?.options?.map((e, i) => {
            return (
              <TouchableOpacity
                onPress={() => {
                  if (QuestionsData[qNumber].multi) {
                    setValueAtIndex(e);
                  } else {
                    setValueAtIndex(e);
                  }
                }}
                key={i}
                className={
                  "items-center  mb-3 p-4 bg-opWhite rounded-lg flex-row justify-center "
                }
              >
                <View className="flex-1 ">
                  <Text className="text-button font-medium text-base  text-center">
                    {e}
                  </Text>
                </View>
                {answer[qNumber]?.includes(e) && (
                  <Ionicons
                    name="checkmark-circle-sharp"
                    size={24}
                    color={"#6C63FF"}
                  />
                )}
              </TouchableOpacity>
            );
          })}
      </View>
      <View className="p-12 pb-40">
        {qNumber + 1 <= QuestionsData.length && (
          <Button
            title={
              qNumber < QuestionsData.length - 1
                ? "Next Question"
                : "Claim Ticket"
            }
            onPress={() => {
              if (qNumber < QuestionsData.length && answer[qNumber])
                setQNumber(qNumber + 1);
              if (answer.length === QuestionsData.length) {
                navigation.navigate("Home", { claimed: true });
              }
            }}
          />
        )}
      </View>
    </LinearGradient>
  );
};

export default Questionnaire;
