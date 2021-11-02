import React, { useEffect, useState, useContext } from "react";
import {
  KeyboardAvoidingView,
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
  StatusBar,
} from "react-native";

import { auth } from "../firebase";

import { useNavigation } from "@react-navigation/core";
import { NewsContext } from "./../API/Context";


const RegisterScreen = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [password1, setPassword1] = useState("");
  const [showPassword, setShowPassword] = useState(true);
  const [showPassword1, setShowPassword1] = useState(true);

  

  const navigation = useNavigation();
    const darkTheme = useContext(NewsContext);

const handleValidation=()=>{
  if (password===password1) handleSignup()
  else {
    alert("Passwords Dont Match")
    setEmail("")
    setPassword("")
    setPassword1("")  
  }
}

  const handleSignup = () => {
    auth
      .createUserWithEmailAndPassword(email, password)
      .then((userCredentials) => {
        const user = userCredentials.user;
        console.log("Registered with:", user.email);
        alert("Registration Successful");
        navigation.replace("Login");

      })
      .catch((error) => alert(error.message));
  };

  return (
    <KeyboardAvoidingView
      style={{
        flex: 1,
        backgroundColor: darkTheme ? "#282C35" : "white",
        padding: 20,
        justifyContent: "center",
        marginTop: StatusBar.currentHeight,
      }}
      behavior={Platform.OS === "ios" ? "padding" : "height"}
    >
      <Text
        style={{
          fontSize: 25,
          marginTop: 20,
          color: !darkTheme ? "#282C35" : "white",
        }}
      >
        Create Your Account!{" "}
      </Text>

      <Text style={{ fontSize: 16, color: "gray", marginTop: 20 }}>
        Sign Up to continue
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
          placeholder='Confirm Password'
          value={password1}
          onChangeText={(text) => setPassword1(text)}
          secureTextEntry={showPassword1}
        />
        <TouchableOpacity
          onPress={() => {
            setShowPassword1((prev) => !prev);
          }}
        >
          <Text style={{ color: "#FFF" }}>
            {(i = showPassword1 ? "Show" : "Hide")}
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
          onPress={handleValidation}
        >
          <Text style={{ textAlign: "center", color: "#FFF", fontSize: 16 }}>
            Sign Up
          </Text>
        </TouchableOpacity>

        <View style={{ flexDirection: "row", marginTop: 40 }}>
          <Text style={{ color: "gray" }}>Already Have a account?</Text>
          <Text
            style={{
              fontWeight: "bold",
              color: !darkTheme ? "#282C35" : "white",
            }}
            onPress={() => {
              navigation.replace("Login");
            }}
          >
            {" "}
            Sign In
          </Text>
        </View>
      </View>
    </KeyboardAvoidingView>
  );
};

export default RegisterScreen;


