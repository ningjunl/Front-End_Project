import React from "react";
import {
  ImageBackground,
  StyleSheet,
  View,
  Button,
  Image,
  Alert,
  Text,
} from "react-native";
import colors from "../config/colors";
import AppText from "../components/AppText";
import Entypo from "@expo/vector-icons/Entypo";
import MaterialCommunityIcons from "@expo/vector-icons/MaterialCommunityIcons";
import AppButton from "../components/Button";
function WelcomeScreen(props) {
  return (
    <ImageBackground
      style={styles.background}
      source={require("../assets/background.jpg")}
    >
      <View style={styles.iconContainer}>
        <Entypo name="game-controller" size={100} color={colors.primary} />
        <MaterialCommunityIcons
          name="gmail"
          size={100}
          color={colors.secondary}
        />
        <Text style={styles.text}>React Native</Text>
      </View>

      <View style={styles.bottonsContainer}>
        <AppButton
          title="Login"
          onPress={() => Alert.alert("Button Pressed!")}
        />
      </View>
      <View style={styles.bottonsContainer}>
        <AppButton
          title="Register"
          onPress={() => Alert.alert("Button Pressed!")}
          color={colors.secondary}
        />
      </View>
    </ImageBackground>
  );
}

export default WelcomeScreen;

const styles = StyleSheet.create({
  background: {
    flex: 1,
    justifyContent: "flex-end",
    alignItems: "center",
  },
  Logo: {
    width: 200,
    height: 200,
    position: "absolute",
    top: 300,
    borderRadius: 100,
    borderColor: colors.primary,
    borderWidth: 10,
  },
  iconContainer: {
    position: "absolute",
    top: 100,
    alignItems: "center",
  },
  bottonsContainer: {
    width: "100%",
  },
  text: {
    fontSize: 25,
    fontWeight: "600",
    color: colors.secondary,
  },
});
