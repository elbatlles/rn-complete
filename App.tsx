import { StatusBar } from "expo-status-bar";
import React, { useEffect, useState } from "react";
import { StyleSheet, Text, View } from "react-native";
import Header from "./components/Header";
import GameOverScreen from "./screens/GameOverScreen";
import GameScreen from "./screens/GameScreen";
import StartGameScreen from "./screens/StartGameScreen";
import AppLoading from "expo-app-loading";
import * as Font from "expo-font";
const fetchFonts = () => {
  return Font.loadAsync({
    "open-sans": require("./assets/fonts/OpenSans-Regular.ttf"),
    "open-sans-bold": require("./assets/fonts/OpenSans-Bold.ttf"),
  });
};

export default function App() {
  const [userNumber, setuserNumber] = useState<number | null>(null);
  const [guessRounds, setguessRounds] = useState(0);

  const [dataLoaded, setdataLoaded] = useState(false);

  if (!dataLoaded) {
    return (
      <AppLoading
        onError={(err) => console.log(err)}
        startAsync={fetchFonts}
        onFinish={() => setdataLoaded(true)}
      />
    );
  }

  const startGameHandler = (selectedNumber: number) => {
    setuserNumber(selectedNumber);
    setguessRounds(0);
  };
  const configureNewGameHandler = () => {
    setguessRounds(0);
  };
  let content = <StartGameScreen onstartGame={startGameHandler} />;
  /* content = (
    <GameOverScreen
      roundsNumber={1}
      usernumber={1}
      onRestart={configureNewGameHandler}
    />
  );*/
  const gameOverHandler = (runOfRounds: number) => {
    setguessRounds(runOfRounds);
    // setuserNumber(null);
  };

  if (userNumber && guessRounds <= 0) {
    content = (
      <GameScreen userChoice={userNumber} onGameOver={gameOverHandler} />
    );
  } else if (guessRounds > 0) {
    content = (
      <GameOverScreen
        roundsNumber={guessRounds}
        usernumber={userNumber}
        onRestart={gameOverHandler}
      />
    );
  }

  return (
    <View style={styles.screen}>
      <Header title={"Adivina el numero"} />
      {content}
    </View>
  );
}

const styles = StyleSheet.create({
  screen: {
    flex: 1,
  },
});
