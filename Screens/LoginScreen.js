import React, { useEffect, useState } from "react";
import {
  KeyboardAvoidingView,
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
  w,
} from "react-native";

import { auth } from "../firebase";

import { useNavigation } from "@react-navigation/core";

const LoginScreen = () => {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [user, setUser] = useState(false);

    const navigation = useNavigation();


    const handleLogin = () => {
        auth
          .signInWithEmailAndPassword(email, password)
          .then((userCredentials) => {
            const user = userCredentials.user;
            console.log("Logged in with:", user.email);
          })
          .catch((error) => alert(error.message));
    }

  return (
    <View style={styles.container}>
      <Text style={{ fontSize: 25, marginTop: 20 }}>Welcome Back! </Text>

      <Text style={{ fontSize: 16, color: "gray", marginTop: 20 }}>
        Sign in to continue
      </Text>
      <TextInput
        style={{
          marginTop: 40,
          borderBottomColor: "#ddd",
          borderBottomWidth: 1,
          paddingBottom: 20,
        }}
        placeholder='Email'
        value={email}
        onChangeText={(text) => setEmail(text)}
      />

      <TextInput
        style={{
          marginTop: 40,
          borderBottomColor: "#ddd",
          borderBottomWidth: 1,
          paddingBottom: 20,
        }}
        placeholder='Password'
        value={password}
        onChangeText={(text) => setPassword(text)}
        secureTextEntry={true}
      />

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

        <View style={{ flexDirection: "row", marginTop: 60 }}>
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
        </View>

        <View style={{ flexDirection: "row", marginTop: 40 }}>
          <Text style={{ color: "gray" }}>Don't have an account?</Text>
          <Text
            style={{ fontWeight: "bold" }}
            onPress={() => {
              navigation.replace("Register");
            }}
          >
            {" "}
            Sign Up
          </Text>
        </View>
      </View>
    </View>
  );
};



export default LoginScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#FFF",
    padding: 20,
    justifyContent: "center",
  },
  image: {
    width: 400,
    height: 250,
    // marginVertical: 10,
    resizeMode: "cover",
  },
  
});
