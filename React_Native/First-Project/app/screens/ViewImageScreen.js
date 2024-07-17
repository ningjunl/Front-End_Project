import React from "react";
import { Image, StyleSheet, View } from "react-native";
import colors from "../config/colors";

function Screen2(props) {
  return (
    <>
      <View style={styles.container}>
        <Image
          style={styles.image}
          source={require("../assets/background2.jpg")}
        />
        <View style={styles.closeButton}></View>
        <View style={styles.deleteButton}></View>
      </View>
    </>
  );
}

const styles = StyleSheet.create({
  image: {
    width: "100%",
    height: "100%",
    position: "absolute",
  },
  container: {
    backgroundColor: "#000",
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  closeButton: {
    width: 50,
    height: 50,
    backgroundColor: colors.primary,
    position: "absolute",
    top: 40,
    left: 30,
  },
  deleteButton: {
    width: 50,
    height: 50,
    backgroundColor: colors.secondary,
    position: "absolute",
    top: 40,
    right: 30,
  },
});

export default Screen2;
