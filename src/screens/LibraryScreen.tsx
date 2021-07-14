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

const LibraryScreen = ({ navigation }) => {
  const testData = [
    { name: "Chinese", recipesCount: 3, },
    { name: "Italian", recipesCount: 8, },
    { name: "Korean", recipesCount: 3, },
    { name: "Mexican", recipesCount: 11, },
    { name: "Swedish", recipesCount: 2, },
  ];

  const renderCuisineCard = ({ item }) => {
    return <CuisineLibraryCard title={item.name} recipesCount={item.recipesCount} />;
  };

  return (
    <View style={styles.container}>
      <FlatList
        data={testData}
        renderItem={renderCuisineCard}
        keyExtractor={(item) => item.name}
      />
    </View>
  );
};

export default LibraryScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    
  },
});
