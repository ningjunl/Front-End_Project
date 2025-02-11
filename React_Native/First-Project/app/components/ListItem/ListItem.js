import React from "react";
import { Image, View, StyleSheet } from "react-native";
import AppText from "../AppText/AppText";
function ListItem({ title, subTitle, image }) {
  return (
    <View style={styles.container}>
      <Image style={styles.image} source={image}></Image>
      <View>
        <AppText style={styles.title}>{title}</AppText>
        <AppText style={styles.subTitle}>{subTitle}</AppText>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
  },
  image: {
    width: 70,
    height: 70,
    borderRadius: 35,
    marginRight: 10,
  },
  title: {
    color: "black",
    fontSize: 30,
    fontWeight: "900",
  },
  subTitle: {
    fontSize: 20,
    fontWeight: "bold",
  },
});
export default ListItem;
