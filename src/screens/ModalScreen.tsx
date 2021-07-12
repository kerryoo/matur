"use strict";

import React, { useState } from "react";
import { Image, View, StyleSheet, Button } from "react-native";
import colors from "../constants/colors";
import DefaultText from "../components/DefaultText";
import GestureRecognizer, {
  swipeDirections,
} from "react-native-swipe-gestures";

const ModalScreen = ({ navigation }) => {
  const [swipe, setSwipe] = useState("ready to be swiped");
  const [gesture, setGesture] = useState("None");

  const onSwipe = (gestureName, gestureState) => {
    const { SWIPE_UP, SWIPE_DOWN, SWIPE_LEFT, SWIPE_RIGHT } = swipeDirections;
    setGesture(gestureName);
  };

  const config = {
    velocityThreshold: 0.3,
    directionalOffsetThreshold: 80,
  };

  return (
    <GestureRecognizer
      onSwipe={(direction, state) => onSwipe(direction, state)}
      onSwipeUp={(state) => onSwipeUp(state)}
      config={config}
      style={styles.container}
    >
    </GestureRecognizer>
  );
};

export default ModalScreen;

const styles = StyleSheet.create({
  container: {
    justifyContent: "flex-end",
    flex: 1,
    backgroundColor: colors.transparent,
  },
  modal: {
    height: "85%",
    backgroundColor: "black",
    borderTopLeftRadius: 25,
    borderTopRightRadius: 25,
    padding: "5%",
    paddingBottom: "10%",
    justifyContent: "space-between",
  },
});