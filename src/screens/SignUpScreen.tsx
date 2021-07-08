import React, { useState } from "react";
import {
  ImageBackground,
  Image,
  FlatList,
  View,
  StyleSheet,
  Button,
} from "react-native";
import { imageStyles } from "../constants/constantStyles";
import { DefaultText } from "../components/DefaultText";
import PagerView from "react-native-pager-view";
import SelectableOption from "../components/SelectableOption";
import colors from "../constants/colors";
import FieldInput from "../components/FieldInput";

const SignUpScreen = ({ navigation }) => {
  const [progress, setProgress] = useState(0);
  const [favoriteFoods, setFavoriteFoods] = useState([]);
  const [selected, setSelected] = useState<string[]>([]);
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");

  const readyForNextPage = () => {
    switch (progress) {
      case 0:
        return favoriteFoods.length > 0;
      case 1:
        break;
      case 2:
        break;
      case 3:
        break;
    }
  };

  const renderSelectable = ({ item }) => {
    const alreadySelected = selected.includes(item.name);
    return (
      <SelectableOption
        title={item.name}
        color={item.color}
        borderColor={alreadySelected ? colors.interactive : item.color}
        onPress={() =>
          setSelected((prevState) => {
            if (alreadySelected) {
              return prevState.filter((e) => e !== item.name);
            } else {
              return [...prevState, item.name];
            }
          })
        }
      ></SelectableOption>
    );
  };

  const testData = [
    { name: "Argentinian" },
    { name: "Malaysian" },
    { name: "Ethiopian" },
    { name: "Moroccan" },
    { name: "French" },
  ];

  return (
    <View style={{ flex: 1 }}>
      <PagerView
        style={styles.viewPager}
        initialPage={0}
        pageMargin={0}
        showPageIndicator={true}
      >
        <View style={styles.page} key="1">
          <ImageBackground
            source={require("../../assets/background-panels-iphone/panel-1.png")}
            style={imageStyles.backgroundImage}
          >
            <View style={styles.container}>
              <View style={styles.textContainer}>
                <DefaultText typography="display">
                  What type of food do you like?
                </DefaultText>
                <DefaultText typography="smallBody">
                  This can be anything from dishes you cook from a day to day
                  basis to regions you're interested in exploring. Select at
                  least one!
                </DefaultText>
                {/* <View style={styles.selectablesContainer}>
                  <FlatList
                    data={testData}
                    renderItem={renderSelectable}
                    keyExtractor={(item) => item.name}
                    numColumns={2}
                  />
                </View> */}
              </View>
            </View>
          </ImageBackground>
        </View>
        <View style={styles.page} key="2">
          <ImageBackground
            source={require("../../assets/background-panels-iphone/panel-2.png")}
            style={imageStyles.backgroundImage}
          >
            <View style={styles.container}>
              <View style={styles.textContainer}>
                <DefaultText typography="display">
                  What should people call you?
                </DefaultText>
                <DefaultText typography="smallBody">
                  You can always change this later.
                </DefaultText>
                <FieldInput
                  placeholder="username"
                  textContentType="username"
                  onChangeText={setUsername}
                  value={username}
                />
                <FieldInput
                  placeholder="password"
                  textContentType="password"
                  onChangeText={setPassword}
                  value={password}
                />
                <FieldInput
                  placeholder="confirm password"
                  textContentType="password"
                  onChangeText={setConfirmPassword}
                  value={confirmPassword}
                />
                <FieldInput
                  placeholder="first name"
                  textContentType="name"
                  onChangeText={setFirstName}
                  value={firstName}
                />
                <FieldInput
                  placeholder="last name"
                  textContentType="familyName"
                  onChangeText={setLastName}
                  value={lastName}
                />
              </View>
            </View>
          </ImageBackground>
        </View>
        <View style={styles.page} key="3">
          <ImageBackground
            source={require("../../assets/background-panels-iphone/panel-3.png")}
            style={imageStyles.backgroundImage}
          >
            <View style={styles.container}>
              <View style={styles.textContainer}>
                <DefaultText typography="display">
                  Sign up with your phone number!
                </DefaultText>
                <DefaultText typography="smallBody">
                  Explore food cultures from all across the world with recipes,
                  restaurants, and articles.
                </DefaultText>
              </View>
            </View>
          </ImageBackground>
        </View>
        <View style={styles.page} key="4">
          <ImageBackground
            source={require("../../assets/background-panels-iphone/panel-4.png")}
            style={imageStyles.backgroundImage}
          >
            <View style={styles.container}>
              <View style={styles.textContainer}>
                <DefaultText typography="display">
                  Enter your 4-digit code!
                </DefaultText>
                <DefaultText typography="smallBody">
                  Explore food cultures from all across the world with recipes,
                  restaurants, and articles.
                </DefaultText>
              </View>
            </View>
          </ImageBackground>
        </View>
        <View style={styles.page} key="5">
          <ImageBackground
            source={require("../../assets/background-panels-iphone/panel-5.png")}
            style={imageStyles.backgroundImage}
          >
            <View style={styles.container}>
              <View style={styles.textContainer}>
                <DefaultText typography="display">
                  Thank you so much for joining!
                </DefaultText>
                <DefaultText typography="smallBody">
                  Explore food cultures from all across the world with recipes,
                  restaurants, and articles.
                </DefaultText>
              </View>
            </View>
          </ImageBackground>
        </View>
        <View style={styles.page} key="6">
          <ImageBackground
            source={require("../../assets/background-panels-iphone/panel-6.png")}
            style={imageStyles.backgroundImage}
          >
            <View style={styles.container}>
              <View style={styles.textContainer}>
                <DefaultText typography="display">
                  Explore and save recipes from various countries.
                </DefaultText>
                <DefaultText typography="smallBody">
                  Explore food cultures from all across the world with recipes,
                  restaurants, and articles.
                </DefaultText>
              </View>
            </View>
          </ImageBackground>
        </View>
        <View style={styles.page} key="7">
          <ImageBackground
            source={require("../../assets/background-panels-iphone/panel-7.png")}
            style={imageStyles.backgroundImage}
          >
            <View style={styles.container}>
              <View style={styles.textContainer}>
                <DefaultText typography="display">
                  Find restaurants near you that serve the food you love.
                </DefaultText>
                <DefaultText typography="smallBody">
                  Explore food cultures from all across the world with recipes,
                  restaurants, and articles.
                </DefaultText>
              </View>
            </View>
          </ImageBackground>
        </View>
        <View style={styles.page} key="8">
          <ImageBackground
            source={require("../../assets/background-panels-iphone/panel-8.png")}
            style={imageStyles.backgroundImage}
          >
            <View style={styles.container}>
              <View style={styles.textContainer}>
                <DefaultText typography="display">
                  Receive articles on the history and culture of your favorite
                  foods.
                </DefaultText>
                <DefaultText typography="smallBody">
                  Explore food cultures from all across the world with recipes,
                  restaurants, and articles.
                </DefaultText>
              </View>
            </View>
          </ImageBackground>
        </View>
        <View style={styles.page} key="9">
          <ImageBackground
            source={require("../../assets/background-panels-iphone/panel-9.png")}
            style={imageStyles.backgroundImage}
          >
            <View style={styles.container}>
              <View style={styles.textContainer}>
                <DefaultText typography="display">Eat!</DefaultText>
                <DefaultText typography="smallBody">
                  Explore food cultures from all across the world with recipes,
                  restaurants, and articles.
                </DefaultText>
              </View>
            </View>
          </ImageBackground>
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
    marginTop: "30%",
  },
  textContainer: {
    flex: 4,
    flexDirection: "column",
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
  selectablesContainer: {
    flex: 1,
    marginLeft: "5%",
    marginTop: "5%",
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "stretch",
  },
});
