import React, { useState, useRef, useEffect } from "react";
import {
  Button,
  StyleSheet,
  Text,
  View,
  Alert,
  ScrollView,
  FlatList,
} from "react-native";
import Card from "../components/Card";
import MainButton from "../components/MainButton";
import NumberContainer from "../components/NumberContainer";
import DefaultStyles from "../constants/default-styles";
import { Ionicons } from "@expo/vector-icons";
import BodyText from "../components/BodyText";

interface Props {
  userChoice?: number;
  onGameOver: Function;
}
const generatRandomBetween = (
  min: number,
  max: number,
  exclude: number
): number => {
  min = Math.ceil(min);
  max = Math.ceil(max);
  const rndNum = Math.floor(Math.random() * (max - min)) + min;
  if (rndNum === exclude) {
    return generatRandomBetween(min, max, exclude);
  } else {
    return rndNum;
  }
};

const renderListItem = (
  listLength: number,
  itemData: { item: string; index: number }
) => {
  return (
    <View style={styles.listItem} key={listLength}>
      <Text>#{itemData.index}</Text>
      <Text>{itemData.item}</Text>
    </View>
  );
};
const GameScreen = (props: Props) => {
  const { userChoice, onGameOver } = props;
  const initialGuess = generatRandomBetween(
    1,
    100,
    userChoice ? userChoice : 0
  );
  const [currentGuess, setcurrentGuess] = useState(
    generatRandomBetween(1, 100, userChoice ? userChoice : 0)
  );
  const [pastGuesses, setpastGuesses] = useState<string[]>([
    initialGuess.toString(),
  ]);
  const currentLow = useRef(1);
  const currentHigh = useRef(100);

  useEffect(() => {
    if (currentGuess === userChoice) {
      onGameOver(pastGuesses.length);
    }
  }, [currentGuess, userChoice, onGameOver]);

  const nextGuessHandler = (direction: string) => {
    console.log("choise");
    console.log(userChoice);
    if (
      (direction === "lower" &&
        userChoice !== undefined &&
        currentGuess < userChoice) ||
      (direction === "greater" &&
        userChoice !== undefined &&
        currentGuess > userChoice)
    ) {
      Alert.alert("Don't lie!", "You know that this is wrong...", [
        { text: "Sorry", style: "cancel" },
      ]);
      return;
    }
    if (direction === "lower") {
      currentHigh.current = currentGuess;
    } else {
      currentLow.current = currentGuess;
    }
    const nextNumber = generatRandomBetween(
      currentLow.current,
      currentHigh.current,
      currentGuess
    );

    setcurrentGuess(nextNumber);
    // setrounds((curRounds) => curRounds + 1);
    setpastGuesses((curPastGuesses) => [
      nextNumber.toString(),
      ...curPastGuesses,
    ]);
  };
  return (
    <View style={styles.screen}>
      <Text style={DefaultStyles.title}>Opponent's Guess</Text>
      <NumberContainer>{currentGuess}</NumberContainer>
      <Card style={styles.buttonContainer}>
        <MainButton onPress={() => nextGuessHandler("lower")}>
          <Ionicons name="md-remove" size={24} color={"white"} />
        </MainButton>
        <MainButton onPress={() => nextGuessHandler("greater")}>
          <Ionicons name="md-add" size={24} color={"white"} />
        </MainButton>
      </Card>
      <View style={styles.listContainer}>
        {/* <ScrollView contentContainerStyle={styles.list}>
          {pastGuesses.map((guess, index) =>
            renderListItem(guess, pastGuesses.length - index)
          )}
          </ScrollView>*/}
        <FlatList
          keyExtractor={(item) => item}
          data={pastGuesses}
          renderItem={({ item, index }) =>
            renderListItem(pastGuesses.length, { item, index })
          }
          contentContainerStyle={styles.list}
        />
      </View>
    </View>
  );
};

export default GameScreen;

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    padding: 10,
    alignItems: "center",
  },
  buttonContainer: {
    flexDirection: "row",
    justifyContent: "space-around",
    marginTop: 20,
    width: 400,
    maxWidth: "90%",
  },
  listItem: {
    borderColor: "#ccc",
    padding: 15,
    marginVertical: 10,
    borderWidth: 1,

    justifyContent: "space-between",
    flexDirection: "row",
    width: "100%",
  },
  listContainer: { flex: 1, width: "60%" },
  list: {
    justifyContent: "flex-end",
    flexGrow: 1,
  },
});
