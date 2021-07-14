import React from "react";
import { ImageBackground, Image, View, StyleSheet } from "react-native";
import { imageStyles } from "../constants/constantStyles";
import RoundButton from "../components/RoundButton";
import DefaultText from "../components/DefaultText";

const FeedScreen = ({ navigation }) => {
  return (
    <View>
      <DefaultText typography="display">Feed</DefaultText>
    </View>
  );
};

export default FeedScreen;