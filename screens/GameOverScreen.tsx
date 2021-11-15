import React from "react";
import { StyleSheet, Text, View } from "react-native";

interface Props {}

const GameOverScreen = (props: Props) => {
  return (
    <View style={styles.screen}>
      <Text>The game is Over</Text>
    </View>
  );
};

export default GameOverScreen;

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
});
