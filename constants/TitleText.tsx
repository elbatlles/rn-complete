import React from "react";
import { StyleSheet, Text, View } from "react-native";

interface Props {
  children: React.ReactNode;
  style?: {};
}

const TitleText = (props: Props) => {
  const { children, style } = props;
  return (
    <View>
      <Text style={{ ...style, ...styles.title }}>{children}</Text>
    </View>
  );
};

export default TitleText;

const styles = StyleSheet.create({
  title: {
    fontFamily: "open-sans-bold",
    fontSize: 18,
  },
});
