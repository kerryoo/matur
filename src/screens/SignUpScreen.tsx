import React, { useState } from "react";
import {
  ImageBackground,
  Image,
  FlatList,
  View,
  StyleSheet,
  Button,
  Text,
} from "react-native";
import { imageStyles, textStyles } from "../constants/constantStyles";
import DefaultText from "../components/DefaultText";
import PagerView from "react-native-pager-view";
import SelectableOption from "../components/SelectableOption";
import colors from "../constants/colors";
import FieldInput from "../components/FieldInput";
import {
  CodeField,
  Cursor,
  useBlurOnFulfill,
  useClearByFocusCell,
} from "react-native-confirmation-code-field";
import { useForm, Controller } from "react-hook-form";

const SignUpScreen = ({ navigation }) => {
  const [progress, setProgress] = useState(0);
  const [favoriteFoods, setFavoriteFoods] = useState([]);
  const [favoriteSelected, setFavoriteSelected] = useState<string[]>([]);

  const [dietaryRestrictions, setDietaryRestrictions] = useState([]);
  const [restrictionsSelected, setRestrictionsSelected] = useState<string[]>(
    []
  );

  const [allergies, setAlleriges] = useState([]);
  const [allergiesSelected, setAllergiesSelected] = useState<string[]>([]);

  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [phoneNumber, setPhoneNumber] = useState("");

  const [authCode, setAuthCode] = useState("");
  const ref = useBlurOnFulfill({ authCode, cellCount: 4 });
  const [props, getCellOnLayoutHandler] = useClearByFocusCell({
    authCode,
    setAuthCode,
  });

  const {
    control,
    handleSubmit,
    formState: { errors },
  } = useForm();
  const onSubmit = (data) => console.log(data);

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
    const alreadySelected = favoriteSelected.includes(item.name);
    return (
      <SelectableOption
        title={item.name}
        color={item.color}
        borderColor={alreadySelected ? colors.interactive : item.color}
        onPress={() =>
          setFavoriteSelected((prevState) => {
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

  const testCuisineData = [
    { name: "Argentinian" },
    { name: "Malaysian" },
    { name: "Ethiopian" },
    { name: "Moroccan" },
    { name: "French" },
  ];

  const testDietaryRestrictionsData = [
    { name: "Vegetarian" },
    { name: "Vegan" },
    { name: "Kosher" },
    { name: "Halal" },
  ];

  const testAllergiesData = [
    { name: "Milk" },
    { name: "Eggs" },
    { name: "Peanuts" },
    { name: "Tree nuts" },
    { name: "Soy" },
    { name: "Wheat" },
    { name: "Fish" },
    { name: "Shellfish" },
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
                  Any dietary restrictions?
                </DefaultText>
                <DefaultText typography="smallBody">
                  We don't want to recommend anything you can't eat.
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
        <View style={styles.page} key="3">
          <ImageBackground
            source={require("../../assets/background-panels-iphone/panel-3.png")}
            style={imageStyles.backgroundImage}
          >
            <View style={styles.container}>
              <View style={styles.textContainer}>
                <DefaultText typography="display">
                  How about allergies?
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
        <View style={styles.page} key="4">
          <ImageBackground
            source={require("../../assets/background-panels-iphone/panel-4.png")}
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

                <Controller
                  control={control}
                  rules={{
                    required: true,
                  }}
                  render={({ field: { onChange, onBlur, value } }) => (
                    <FieldInput
                      placeholder="username"
                      textContentType="username"
                      onChangeText={setUsername}
                      value={username}
                    />
                  )}
                  name="username"
                />
                {errors.username && <Text>Hello</Text>}
                <Controller
                  control={control}
                  rules={{
                    required: true,
                  }}
                  render={({ field: { onChange, onBlur, value } }) => (
                    <FieldInput
                      placeholder="password"
                      textContentType="password"
                      onChangeText={setPassword}
                      value={password}
                    />
                  )}
                  name="password"
                />
                {errors.password && <Text>Hello</Text>}
                <Controller
                  control={control}
                  rules={{
                    required: true,
                  }}
                  render={({ field: { onChange, onBlur, value } }) => (
                    <FieldInput
                      placeholder="confirm password"
                      textContentType="password"
                      onChangeText={setConfirmPassword}
                      value={confirmPassword}
                    />
                  )}
                  name="confirmPassword"
                />
                {errors.confirmPassword && <Text>Hello</Text>}
                <Controller
                  control={control}
                  rules={{
                    required: true,
                  }}
                  render={({ field: { onChange, onBlur, value } }) => (
                    <FieldInput
                      placeholder="first name"
                      textContentType="name"
                      onChangeText={setFirstName}
                      value={firstName}
                    />
                  )}
                  name="firstName"
                />
                {errors.firstName && <Text>Hello</Text>}
                <Controller
                  control={control}
                  rules={{
                    required: true,
                  }}
                  render={({ field: { onChange, onBlur, value } }) => (
                    <FieldInput
                      placeholder="last name"
                      textContentType="familyName"
                      onChangeText={setLastName}
                      value={lastName}
                    />
                  )}
                  name="lastName"
                />
                {errors.lastName && <Text>Hello</Text>}
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
                  Sign up with your phone number!
                </DefaultText>
                <DefaultText typography="smallBody">
                  Explore food cultures from all across the world with recipes,
                  restaurants, and articles.
                </DefaultText>
                <FieldInput
                  placeholder="phone number"
                  textContentType="telephoneNumber"
                  onChangeText={setPhoneNumber}
                  value={phoneNumber}
                />
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
                  Enter your 4-digit code!
                </DefaultText>
                <DefaultText typography="smallBody">
                  Explore food cultures from all across the world with recipes,
                  restaurants, and articles.
                </DefaultText>
              </View>
              <View style={styles.oneTimeCodeContainer}>
                <CodeField
                  ref={ref}
                  {...props}
                  value={authCode}
                  onChangeText={setAuthCode}
                  cellCount={4}
                  keyboardType="number-pad"
                  textContentType="oneTimeCode"
                  renderCell={({ index, symbol, isFocused }) => (
                    <View
                      key={index}
                      style={[styles.cell, isFocused && styles.focusCell]}
                      onLayout={getCellOnLayoutHandler(index)}
                    >
                      <Text style={styles.cellText}>
                        {symbol || (isFocused ? <Cursor /> : null)}
                      </Text>
                    </View>
                  )}
                />
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
        <View style={styles.page} key="8">
          <ImageBackground
            source={require("../../assets/background-panels-iphone/panel-8.png")}
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
        <View style={styles.page} key="9">
          <ImageBackground
            source={require("../../assets/background-panels-iphone/panel-9.png")}
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
        <View style={styles.page} key="10">
          <ImageBackground
            source={require("../../assets/background-panels-iphone/panel-10.png")}
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
        <View style={styles.page} key="11">
          <ImageBackground
            source={require("../../assets/background-panels-iphone/panel-10.png")}
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
    alignItems: "flex-start",
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

  root: { flex: 1, padding: 20 },
  cell: {
    width: "15%",
    height: 80,
    borderBottomWidth: 4,
    borderColor: colors.disabled,
    justifyContent: "flex-end",
    marginHorizontal: "2%",
  },
  focusCell: {
    borderColor: colors.default,
  },
  oneTimeCodeContainer: {
    justifyContent: "flex-start",
    flexDirection: "column",
    flex: 20,
  },
  cellText: {
    color: colors.default,
    fontFamily: "Poppins_600SemiBold",
    fontSize: 36,
    textAlign: "center",
  },
});
