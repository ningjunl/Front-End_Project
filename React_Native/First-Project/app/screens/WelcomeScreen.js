import React from "react";
import { ImageBackground, StyleSheet, View, Button, Image } from "react-native";

function WelcomeScreen(props) {
  return (
    <ImageBackground
      style={styles.background}
      source={require("../assets/background.jpg")}
    >
      <Image
        style={styles.Logo}
        source={require("../assets/stadia_controller.png")}
      />
      <View style={styles.loginButton}>
        <Button
          title="Login"
          onPress={() => console.log("Login")}
          color="lightblue"
        />
      </View>
      <View style={styles.RegisterButton}>
        <Button
          title="Register"
          onPress={() => console.log("Register")}
          color="orange"
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
  loginButton: {
    width: "100%",
  },
  RegisterButton: {
    width: "100%",
  },
  Logo: {
    width: 200,
    height: 200,
    position: "absolute",
    top: 300,
  },
});
