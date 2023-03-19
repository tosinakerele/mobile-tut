import React from "react";
import { Alert, Image } from "react-native";
import { View, Text, TouchableOpacity } from "react-native";

const MenuContainer = ({ key, title, imageSrc, type, setType }) => {
  const handlePress = () => {
    setType(title.toLowerCase());
    console.log("first");
  };
  return (
    <TouchableOpacity
      className="items-center justify-center space-y-2"
      onPress={handlePress}
      key={key}
    >
      <View
        className={`w-24 text-center h-24 shadow-sm rounded-full space-y-2 ${
          type === title.toLowerCase() ? "bg-gray-800" : ""
        }`}
      >
        <Image source={imageSrc} className="w-full h-full object-contain" />
        <Text className="text-[#00bcc9] text-center text-base font-semibold">
          {title}
        </Text>
      </View>
    </TouchableOpacity>
  );
};

export default MenuContainer;
