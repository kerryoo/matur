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
import {images} from "../constants/images";
import { useNavigation } from "@react-navigation/native";
import { AntDesign } from "@expo/vector-icons";

interface Props {
  title: string;
  recipesCount: number;
}

const getImageFromTitle = (title: string) => {
  switch (title) {
    case "Chinese":
      return images.chineseCard;
    case "Italian":
      return images.italianCard;
    case "Korean":
      return images.koreanCard;
    case "Mexican":
      return images.mexicanCard;
    case "Swedish":
      return images.swedishCard;
  }
};

const CuisineLibraryCard = ({ title, recipesCount }: Props) => {
  const navigation = useNavigation();
  return (
    <TouchableOpacity
      onPress={() =>
        navigation.navigate("Main", {
          screen: "RecipeLibrary",
          params: { title: title },
        })
      }
    >
      <View style={styles.container}>
        <ImageBackground
          source={getImageFromTitle(title)}
          style={styles.background}
        >
          <DefaultText typography="display" style={styles.title}>
            {title}
          </DefaultText>
          <DefaultText typography="display" style={styles.recipeCount}>
            {recipesCount}
          </DefaultText>
          <AntDesign name="right" size={24} color="white" />
        </ImageBackground>
      </View>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  container: {
    width: "100%",
  },
  background: {
    flex: 1,
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    padding: "5%",
    
  },
  title: {
    color: "white",
    flex: 8,
  },
  recipeCount: {
      color: "white",
      flex: 1,
  }
});

export default CuisineLibraryCard;
