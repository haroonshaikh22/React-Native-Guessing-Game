import React from "react";
import { View, Text, StyleSheet, Button, Image, Dimensions } from "react-native";
import BodyText from "../Components/BodyText";
import MainButton from "../Components/MainButton";
import Color from "../constants/Color";

const GameOverScreen = (props) => {
  return (
    <View style={styles.screen}>
      <BodyText>Game is Over !</BodyText>
      <View style={styles.imageContainer}>
        <Image source={require("../assets/success.png")} style={styles.image} />
      </View>

      <View style={styles.resultContainer}>
      <BodyText style={styles.resultText}>
        Yuor phone needed <Text style={styles.highLight}>{props.roundsNumber}</Text>
        rounds top guess the number<Text style={styles.highLight}>{props.userNumber}</Text>
      </BodyText>
      </View>
      <MainButton onPress={props.onRestart}>New Game</MainButton>
    </View>
  );
};

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    paddingVertical: 10,
  },
  imageContainer: {
    width: Dimensions.get('window').width * 0.7,
    height: Dimensions.get('window').width * 0.7,
    borderRadius: Dimensions.get('window').width * 0.7 /2,
    borderWidth: 3,
    borderColor: "black",
    overflow: "hidden",
    marginVertical: Dimensions.get('window').height / 30
  },
  image: {
    width: "80%",
    height: 300,
  },
  highLight: {
      color : Color.primary,
      fontFamily: 'open-sans-bold'
  },
  resultContainer: {
      marginHorizontal: 30,
      marginVertical: Dimensions.get('window').height / 60,
  },
  resultText: {
      textAlign: 'center'
  }
});

export default GameOverScreen;
