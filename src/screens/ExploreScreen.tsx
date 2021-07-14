import React from "react";
import { ImageBackground, Image, View, StyleSheet } from "react-native";
import { imageStyles } from "../constants/constantStyles";
import RoundButton from "../components/RoundButton";
import DefaultText from "../components/DefaultText";

const ExploreScreen = ({ navigation }) => {
  return (
    <View>
      <DefaultText typography="display">Explore</DefaultText>
    </View>
  );
};

export default ExploreScreen;