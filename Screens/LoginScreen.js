import React, { useEffect, useState, useContext } from "react";
import {
  KeyboardAvoidingView,
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
  StatusBar,
  Switch,
} from "react-native";

import { auth } from "../firebase";

import { useNavigation } from "@react-navigation/core";
import { NewsContext } from './../API/Context';


const LoginScreen = () => {
  const { latitude } = useContext(NewsContext);
  const { longitude } = useContext(NewsContext);
  // const { address } = useContext(NewsContext);
  const { city } = useContext(NewsContext);
  const { temp } = useContext(NewsContext);
  // const { country } = useContext(NewsContext);
 

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [showPassword, setShowPassword] = useState(true);


  const navigation = useNavigation();
  const darkTheme = useContext(NewsContext);

  const handleLogin = () => {
    if(email && password){
      auth
        .signInWithEmailAndPassword(email, password)
        .then((userCredentials) => {
          const user = userCredentials.user;
          console.log("Logged in with:", user.email);
          navigation.replace("Home");
        })
        .catch((error) => {
          alert("Incorrect Email or Password,Please Try Again")
          setEmail("")
          setPassword("")
        });
    }
    else{
      alert("Enter Email and Password")
      setEmail("");
      setPassword("");
    }
  };
  

  let color;
  if(temp>=35) color = "red";
  else if (temp>=25 && temp<35) color = "orange";
  else color="blue"

  return (
    <KeyboardAvoidingView
      // style={styles.container}
      style={{
        flex: 1,
        backgroundColor: darkTheme ? "#282C35" : "white",
        padding: 20,
        justifyContent: "center",
        marginTop: StatusBar.currentHeight,
      }}
      behavior={Platform.OS === "ios" ? "padding" : "height"}
    >
      {/* <Text
        style={{
          // fontSize: 25,
          // marginTop: 20,
          color: !darkTheme ? "#282C35" : "white",
        }}
      >
        Lat:{latitude}
      </Text>
      <Text
        style={{
          // fontSize: 25,
          // marginTop: 20,
          color: !darkTheme ? "#282C35" : "white",
        }}
      >
        Long:{longitude}
      </Text> */}
      <Text
        style={{
          fontSize: 25,
          marginTop: 20,
          color: !darkTheme ? "#282C35" : "white",
        }}
      >
        Welcome Back!!{" "}
      </Text>

      <Text style={{ fontSize: 16, color: "gray", marginTop: 20 }}>
        Sign in to continue
      </Text>
      <TextInput
        style={{
          marginTop: 40,
          borderBottomColor: "#ddd",
          borderBottomWidth: 1,
          paddingBottom: 20,
          color: "#ddd",
          
        }}
        placeholderTextColor={!darkTheme ? "#282C35" : "white"}
        placeholder='Email'
        value={email}
        onChangeText={(text) => setEmail(text)}
      />
      <View
        style={{
          flexDirection: "row",
          marginTop: 40,
          borderBottomColor: "#ddd",
          borderBottomWidth: 1,
          paddingBottom: 20,
          justifyContent: "space-between",
        }}
      >
        <TextInput
          // style={{
          //   marginTop: 40,
          //   borderBottomColor: "#ddd",
          //   borderBottomWidth: 1,
          //   paddingBottom: 20,
          // }}
          placeholderTextColor={!darkTheme ? "#282C35" : "white"}
          placeholder='Password'
          value={password}
          onChangeText={(text) => setPassword(text)}
          secureTextEntry={showPassword}
        />
        <TouchableOpacity
          onPress={() => {
            setShowPassword((prev) => !prev);
          }}
        >
          <Text style={{ color: "#FFF" }}>
            {(i = showPassword ? "Show" : "Hide")}
          </Text>
        </TouchableOpacity>
      </View>

      <View
        style={{
          alignItems: "center",
          justifyContent: "center",
          marginTop: 40,
        }}
      >
        <TouchableOpacity
          style={{
            width: 200,
            backgroundColor: "#0d47a1",
            padding: 10,
            alignItems: "center",
            justifyContent: "center",
            borderRadius: 40,
            marginTop: 30,
          }}
          onPress={handleLogin}
        >
          <Text style={{ textAlign: "center", color: "#FFF", fontSize: 16 }}>
            Login Now
          </Text>
        </TouchableOpacity>

        {/* <View style={{ flexDirection: "row", marginTop: 60 }}>
          <View
            style={{
              height: 40,
              width: 40,
              borderRadius: 40 / 2,
              backgroundColor: "#3f51b5",
              alignItems: "center",
              justifyContent: "center",
            }}
          >
            <Text style={{ fontSize: 25, fontWeight: "bold", color: "#FFF" }}>
              f
            </Text>
          </View>
          <View
            style={{
              height: 40,
              width: 40,
              borderRadius: 40 / 2,
              backgroundColor: "#f44336",
              marginHorizontal: 10,
              alignItems: "center",
              justifyContent: "center",
            }}
          >
            <Text style={{ fontSize: 25, fontWeight: "bold", color: "#FFF" }}>
              G
            </Text>
          </View>
          <View
            style={{
              height: 40,
              width: 40,
              borderRadius: 40 / 2,
              backgroundColor: "#1565c0",
              alignItems: "center",
              justifyContent: "center",
            }}
          >
            <Text style={{ fontSize: 25, fontWeight: "bold", color: "#FFF" }}>
              in
            </Text>
          </View>
        </View> */}

        <View style={{ flexDirection: "row", marginTop: 40 }}>
          <Text style={{ color: "gray" }}>Don't have an account?</Text>
          <Text
            style={{
              fontWeight: "bold",
              color: !darkTheme ? "#282C35" : "white",
            }}
            onPress={() => {
              navigation.replace("Register");
            }}
          >
            {" "}
            Sign Up
          </Text>
        </View>
        <Text
          style={{
            // fontSize: 25,
            marginTop: 20,
            color: color,
          }}
        >
          {temp ?`Current Temperature In ${city} : ${temp}°C` : ""}
        </Text>
      </View>
    </KeyboardAvoidingView>
  );
};



export default LoginScreen;

// const styles = StyleSheet.create({
//   image: {
//     width: 400,
//     height: 250,
//     // marginVertical: 10,
//     resizeMode: "cover",
//   },
// });
