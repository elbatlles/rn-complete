import React, { Children } from "react";
import { StyleSheet, Text, View, ViewProps } from "react-native";

interface Props {
  children: React.ReactNode;
  style?: {};
}

const Card = (props: Props) => {
  const { children, style } = props;
  return <View style={{ ...styles.card, ...style }}>{children}</View>;
};

export default Card;

const styles = StyleSheet.create({
  card: {
    width: 300,
    maxWidth: "80%",
    alignItems: "center",
    shadowColor: "black",
    shadowOffset: { width: 0, height: 2 },
    shadowRadius: 6,
    shadowOpacity: 0.26,
    backgroundColor: "white",
    elevation: 8,
    padding: 20,
  },
});
