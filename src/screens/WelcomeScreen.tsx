import React from "react";
import { ImageBackground, Image, View, StyleSheet } from "react-native";
import { imageStyles } from "../constants/constantStyles";
import RoundButton from "../components/RoundButton";
import { DefaultText } from "../components/DefaultText";

const WelcomeScreen = ({ navigation }) => {
  return (
    
    <View style={styles.background}>
      <ImageBackground
        source={require("../../assets/background-panels/background-panel-1.png")}
        style={imageStyles.backgroundImage}
      >
        <View style={styles.container}>
        <Image source={require("../../assets/matur-logo.png")} style={styles.logo} />
          <View style={styles.textContainer}> 
          
          <DefaultText typography="display">Welcome to Matur!</DefaultText>
          <DefaultText typography="smallBody">
            Explore food cultures from all across the world with recipes, restaurants, and articles.
          </DefaultText>
          
          <RoundButton title="Sign Me In" onPress={() => navigation.navigate("SignIn")} />
          <RoundButton title="Sign Me Up" onPress={() => navigation.navigate("SignUp")} />
          </View>
        </View>
      </ImageBackground>
    </View>
  );
};

export default WelcomeScreen;

const styles = StyleSheet.create({
  background: {
    flex: 1,
  },
  container: {
    flex: 1,
    flexDirection: "column",
    alignItems: "center",
    marginHorizontal: "6%",
    marginTop: "40%"
  },
  textContainer: {
    flex: 5,
    flexDirection: "column",
    alignItems: "center",
  },
  logo: {
    flex: 1,
    width: "70%",
    height: "70%",
    resizeMode: 'contain',
  }
});
