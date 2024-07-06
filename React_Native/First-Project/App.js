import { useDeviceOrientation } from "@react-native-community/hooks";
import {
  StyleSheet,
  Text,
  View,
  Image,
  TouchableNativeFeedback,
  Button,
  Alert,
  Platform,
  StatusBar,
  useWindowDimensions,
} from "react-native";

export default function App() {
  console.log(useWindowDimensions());
  console.log(useDeviceOrientation());
  let x = 1;
  const handlePress = () => console.log("Text pressed", x++);
  console.log("App executed");

  return (
    <View style={{ flex: 1, justifyContent: "center" }}>
      <View style={styles.container}>
        <Button
          title="click me"
          onPress={() =>
            Alert.alert("My Title", "My Message", [
              { text: "Yes", onPress: () => console.log("Yes") },
              { text: "No", onPress: () => console.log("No") },
            ])
          }
        />
        <Text numberOfLines={1} onPress={handlePress} style={styles.text}>
          Hello React Native
        </Text>
        <Image
          blurRadius={10}
          fadeDuration={1000}
          source={{
            uri: "https://picsum.photos/200/300",
          }}
          style={{ width: 200, height: 300, resizeMode: "contain" }}
        />
        <TouchableNativeFeedback onPress={handlePress}>
          <View
            style={{
              width: 200,
              height: 70,
              backgroundColor: "dodgerblue",
              borderRadius: 10,
            }}
          >
            <Text style={{ color: "white" }}>Press me</Text>
          </View>
        </TouchableNativeFeedback>
      </View>
      <View
        style={{
          backgroundColor: "white",
          flex: 1,
        }}
      ></View>
      <View
        style={{
          backgroundColor: "black",
          flex: 1,
        }}
      ></View>
      <View
        style={{
          backgroundColor: "white",
          flex: 1,
        }}
      ></View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 4,
    justifyContent: "center",
    flexDirection: "column",
    backgroundColor: "dodgerblue",
    paddingTop: Platform.OS === "android" ? StatusBar.currentHeight : 0,
  },
  text: {
    marginTop: 0,
    color: "white",
  },
});
