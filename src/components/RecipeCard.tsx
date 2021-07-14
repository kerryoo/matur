import React from "react";
import {
  ImageBackground,
  Image,
  View,
  StyleSheet,
  TouchableOpacity,
} from "react-native";
import { imageStyles } from "../constants/constantStyles";
import RoundButton from "../components/RoundButton";
import DefaultText from "../components/DefaultText";
import images from "../constants/images";
import { useNavigation } from "@react-navigation/native";
import { AntDesign } from "@expo/vector-icons";

const RecipeCard = ({ title, image }) => {
  const navigation = useNavigation();
  return (
      <TouchableOpacity
        onPress={() =>
          navigation.navigate("Main", {
            screen: "Recipe",
            params: { title: title },
          })
        }
      >
        <ImageBackground source={image} style={styles.background}>
          <View style={styles.container}>
            <DefaultText typography="display" style={styles.title}>
              {title}
            </DefaultText>
          </View>
        </ImageBackground>
      </TouchableOpacity>
  );
};

export default RecipeCard;

const styles = StyleSheet.create({
  background: {
    flex: 1,
  },
  title: {
    color: "white",
    flex: 8,
  },
  recipeCount: {
    color: "white",
    flex: 1,
  },
  container: {
    backgroundColor: "rgba(0,0,0,0.4)",
    flex: 1,
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    paddingHorizontal: "5%",
    paddingTop: "5%",
    paddingBottom: "45%",
  },
});
