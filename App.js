import React, { useState,useContext ,useEffect} from "react";
import { StatusBar, StyleSheet, View, Text } from "react-native";
import Context from "./API/Context";
import InshortTabs from "./components/InshortTabs";

// import { Constants, Location, Permissions } from "expo";
// import * as Permissions from "expo-permissions";
// import * as Location from "expo-location";


import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import LoginScreen from './Screens/LoginScreen';
import RegisterScreen from './Screens/RegisterScreen';

const Stack = createNativeStackNavigator();

function App() {
  // const [latitude, setLatitude] = useState("");
  // const [longitude, setLongitude] = useState("");
  // const [location, setLocation] = useState("");
  // const { darkTheme } = useContext(NewsContext);
  // useEffect(() => {
  //   findCurrentLocationAsync = async () => {
  //     let { status } = await Permissions.askAsync(Permissions.LOCATION);

  //     if (status !== "granted") {
  //       alert("Permission Denied");
  //      console.log("Permission Denied");
  //     }

  //     let location = await Location.getCurrentPositionAsync();
  //     setLocation(location);
  //     setLatitude(location.coords.latitude);
  //     setLongitude(location.coords.longitude);
  //   };
  //   findCurrentLocationAsync()
  // }, [])
  
  
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

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     marginTop: StatusBar.currentHeight,
//   },
// });

export default () => {
  return (
    <Context>
      <App />
    </Context>
  );
};
