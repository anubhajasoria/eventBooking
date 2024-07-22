import React from "react";
import { Pressable, Text } from "react-native";

const Button = ({ classname, title, onPress }) => {
  return (
    <Pressable
      className={`rounded-full bg-button p-4  ${classname}`}
      onPress={onPress}
    >
      <Text className="text-white text-center">{title}</Text>
    </Pressable>
  );
};

export default Button;
