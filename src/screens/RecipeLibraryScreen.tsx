import React from "react";
import { ImageBackground, Image, View, StyleSheet, FlatList } from "react-native";
import { imageStyles } from "../constants/constantStyles";
import RoundButton from "../components/RoundButton";
import DefaultText from "../components/DefaultText";
import RecipeCard from "../components/RecipeCard";
import { chineseRecipeImages } from "../constants/images";

const RecipeLibraryScreen = ({ route, navigation }) => {
  const { title } = route.params;

  const testData = [
    {name: "Mapo Tofu", image: chineseRecipeImages.mapoTofu},
    {name: "Congee", image: chineseRecipeImages.congee},
    {name: "Char Siu", image: chineseRecipeImages.charSiu},
    {name: "Kung Pao Chicken", image: chineseRecipeImages.kungPao},
    {name: "Peking Duck", image: chineseRecipeImages.pekingDuck},
    {name: "Scallion Pancakes", image: chineseRecipeImages.scallionPancake},
    {name: "Soup Dumplings", image: chineseRecipeImages.soupDumplings},
    {name: "Zha Jiang Mian", image: chineseRecipeImages.zhajiang},
  ]


  const renderRecipeCard = ({item}) => {
    
    return <RecipeCard title={item.name} image={item.image}/>
  }

  return (
    <View>
      <FlatList
        data={testData}
        renderItem={renderRecipeCard}
        keyExtractor={(item) => item.name}
      />
    </View>
  );
};

export default RecipeLibraryScreen;
