import React, { Children } from "react";
import { StyleSheet, Text, View, TouchableOpacity } from "react-native";
import Colors from "../constants/colors";

interface Props {
  children: React.ReactNode;
  style?: {};
  onPress: Function;
}

const MainButton = (props: Props) => {
  const { children, style, onPress } = props;
  return (
    <TouchableOpacity
      onPress={() => {
        onPress();
      }}
      activeOpacity={0.6}
    >
      <View style={styles.button}>
        <Text style={styles.buttonText}> {children}</Text>
      </View>
    </TouchableOpacity>
  );
};

export default MainButton;

const styles = StyleSheet.create({
  button: {
    backgroundColor: Colors.primary,
    paddingVertical: 12,
    paddingHorizontal: 30,
    borderRadius: 25,
  },
  buttonText: {
    color: "white",
    fontFamily: "open-sans",
    fontSize: 18,
  },
});
