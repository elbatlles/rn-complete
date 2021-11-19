import React from "react";
import { StyleSheet, Text, View } from "react-native";
import Colors from "../constants/colors";
import TitleText from "./TitleText";

interface Props {
  title: string;
}

const Header = (props: Props) => {
  const { title } = props;
  return (
    <View style={styles.header}>
      <TitleText>{title}</TitleText>
    </View>
  );
};

export default Header;

const styles = StyleSheet.create({
  header: {
    width: "100%",
    height: 50,
    paddingTop: 20,
    backgroundColor: Colors.primary,
    alignItems: "center",
    borderBottomColor: Colors.primary,
    borderBottomWidth: 2,
  },
  headerTitle: {
    color: "black",
    fontSize: 13,
    fontFamily: "open-sans-bold",
  },
});
