import React from "react";
import {
  ImageBackground,
  Image,
  View,
  StyleSheet,
  FlatList,
} from "react-native";
import { imageStyles } from "../constants/constantStyles";
import RoundButton from "../components/RoundButton";
import DefaultText from "../components/DefaultText";
import CuisineLibraryCard from "../components/CuisineLibraryCard";

const RecipeScreen = ({ route, navigation }) => {


  return (
    <View style={styles.container}>
      <DefaultText typography="display">Hello</DefaultText>
    </View>
  );
};

export default RecipeScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    
  },
});
