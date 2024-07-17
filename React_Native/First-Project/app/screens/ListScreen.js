import React from "react";
import { View, StyleSheet } from "react-native";
import Card from "../components/Card/Card";
import ListItem from "../components/ListItem/ListItem";
function ListScreen(props) {
  return (
    <View style={styles.container}>
      <Card
        title="99 Hands New Red Jacket for Sale"
        subTitle="$2500"
        image={require("../assets/jacket1.jpg")}
      ></Card>
      <ListItem
        image={require("../assets/aerith.jpg")}
        title="Aerith"
        subTitle="50 Listings"
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    padding: 20,
    paddingTop: 100,
    backgroundColor: "#f8f4f4",
  },
});
export default ListScreen;
