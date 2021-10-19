import React, { useContext } from "react";
import { StatusBar, StyleSheet, View, Text } from "react-native";
import Context from "./API/Context";
import InshortTabs from "./components/InshortTabs";


import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import LoginScreen from './Screens/LoginScreen';
import RegisterScreen from './Screens/RegisterScreen';

const Stack = createNativeStackNavigator();


function App() {
  // const { darkTheme } = useContext(NewsContext);
  
  return (
    // <View
    //   style={{
    //     ...styles.container,
    //     backgroundColor: darkTheme ? "#282C35" : "white",
    //   }}
    // >
    //  <InshortTabs />

    // </View>
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen
          options={{ headerShown: false }}
          name='Login'
          component={LoginScreen}
        />
        <Stack.Screen
          options={{ headerShown: false }}
          name='Register'
          component={RegisterScreen}
        />
        <Stack.Screen
          options={{ headerShown: false }}
          name='Home'
          component={InshortTabs}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginTop: StatusBar.currentHeight,
  },
});

export default () => {
  return (
    <Context>
      <App />
    </Context>
  );
};
