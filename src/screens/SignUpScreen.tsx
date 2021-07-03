import React from "react";
import { ImageBackground, Image, Text, View, StyleSheet } from "react-native";
import { imageStyles } from "../constants/constantStyles";
import { DefaultText } from "../components/DefaultText";
import PagerView from "react-native-pager-view";

const SignUpScreen = ({ navigation }) => {
  return (
    <View style={{ flex: 1 }}>
      <PagerView style={styles.viewPager} initialPage={0} pageMargin={0}>
        <View style={styles.page} key="1">
          <ImageBackground
            source={require("../../assets/background-panels/background-panel-2.png")}
            style={imageStyles.backgroundImage}
          >
            <View style={styles.container}>
              <View style={styles.textContainer}>
                <DefaultText typography="display">
                  Welcome to Matur!
                </DefaultText>
                <DefaultText typography="smallBody">
                  Explore food cultures from all across the world with recipes,
                  restaurants, and articles.
                </DefaultText>
              </View>
            </View>
          </ImageBackground>
        </View>
        <View style={styles.page} key="2">
        <ImageBackground
            source={require("../../assets/background-panels/background-panel-3.png")}
            style={imageStyles.backgroundImage}
          >
            <View style={styles.container}>
              <View style={styles.textContainer}>
                <DefaultText typography="display">
                  Welcome to Matur!
                </DefaultText>
                <DefaultText typography="smallBody">
                  Explore food cultures from all across the world with recipes,
                  restaurants, and articles.
                </DefaultText>
              </View>
            </View>
          </ImageBackground>
        </View>
        <View style={styles.page} key="3">
          <Text>Third page</Text>
        </View>
      </PagerView>
    </View>
  );
};

export default SignUpScreen;

const styles = StyleSheet.create({
  background: {
    flex: 1,
  },
  container: {
    flex: 1,
    flexDirection: "column",
    alignItems: "center",
    marginHorizontal: "6%",
    marginTop: "40%",
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
    resizeMode: "contain",
  },
  viewPager: {
    flex: 1,
  },
  page: {
    justifyContent: "center",
    alignItems: "center",
  },
});
