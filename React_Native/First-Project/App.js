import React from "react";
import WelcomeScreen from "./app/screens/WelcomeScreen";
import ViewImageScreen from "./app/screens/ViewImageScreen";
import { createStackNavigator } from "@react-navigation/stack";
import { NavigationContainer } from "@react-navigation/native";
import HomeScreen from "./app/screens/HomeScreen";
import ListScreen from "./app/screens/ListScreen";
const Stack = createStackNavigator();
function App(props) {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Home">
        <Stack.Screen name="Home" component={HomeScreen} />
        <Stack.Screen name="Page1" component={WelcomeScreen} />
        <Stack.Screen name="Page2" component={ViewImageScreen} />
        <Stack.Screen name="Page3" component={ListScreen} />
        {/* 继续添加其他页面 */}
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default App;
