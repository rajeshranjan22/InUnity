import {
  Text,
  TextInput,
  TouchableOpacity,
  View,
  Image,
  Alert,
  ScrollView,
} from "react-native";
import React from "react";
import styles from "./style";
import FontAwesome from "react-native-vector-icons/FontAwesome";
import { useNavigation } from "@react-navigation/native";
import { useState } from "react";
import axios from "axios";
import AsyncStorage from "@react-native-async-storage/async-storage";

const SignInPage = () => {
  const navigation = useNavigation();

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  function handleSubmit() {
    console.log(email, password);
    const userData = {
      email: email,
      password: password,
    };

    axios.post("http://192.168.1.8:8080/login-user", userData).then((res) => {
      console.log(res.data);
      if (res.data.status == "ok") {
        Alert.alert("Logged In Successfull");
        AsyncStorage.setItem("token", res.data.data);
        AsyncStorage.setItem("isLoggedIn", JSON.stringify(true));
        AsyncStorage.setItem("userType", res.data.userType);
        navigation.navigate("Home");
      }
    });
  }

  return (
    <ScrollView
      contentContainerStyle={{ flexGrow: 1 }}
      keyboardShouldPersistTaps={"always"}
    >
      <View>
        <View style={styles.logoContainer}>
          <Image
            style={styles.logo}
            source={require("../../../assets/sign-in.png")}
          />
        </View>
        <View style={styles.loginContainer}>
          <Text style={styles.text_header}>Login !!!</Text>
          <View style={styles.action}>
            <TextInput
              placeholder="Enter Email"
              style={styles.textInput}
              onChange={(e) => setEmail(e.nativeEvent.text)}
            />
          </View>
          <View style={styles.action}>
            <TextInput
              placeholder="Enter Password"
              style={styles.textInput}
              onChange={(e) => setPassword(e.nativeEvent.text)}
            />
          </View>
          <View
            style={{
              justifyContent: "flex-end",
              alignItems: "flex-end",
              marginTop: 8,
              marginRight: 10,
            }}
          >
            <Text style={{ color: "#420475", fontWeight: "700" }}>
              Forgot Password
            </Text>
          </View>
        </View>
        <View style={styles.button}>
          <TouchableOpacity style={styles.inBut} onPress={() => handleSubmit()}>
            <View>
              <Text style={styles.textSign}>Sign In</Text>
            </View>
          </TouchableOpacity>
          <View style={{ padding: 15 }}>
            <Text
              style={{ fontSize: 14, fontWeight: "bold", color: "#919191" }}
            >
              ----Or Continue as----
            </Text>
          </View>

          <View style={styles.bottomButton}>
            <View style={{ alignItems: "center", justifyContent: "center" }}>
              <TouchableOpacity
                style={styles.inBut2}
                onPress={() => {
                  navigation.navigate("SignUp");
                }}
              >
                <FontAwesome
                  name="user-plus"
                  color="white"
                  style={[styles.smallIcon2, { fontSize: 30 }]}
                />
              </TouchableOpacity>

              <Text style={styles.bottomText}>Sign Up</Text>
            </View>
            <View style={{ alignItems: "center", justifyContent: "center" }}>
              <TouchableOpacity
                style={styles.inBut2}
                onPress={() => alert("Coming Soon")}
              >
                <FontAwesome
                  name="google"
                  color="white"
                  style={[styles.smallIcon2, { fontSize: 30 }]}
                />
              </TouchableOpacity>

              <Text style={styles.bottomText}>Google</Text>
            </View>
            <View style={{ alignItems: "center", justifyContent: "center" }}>
              <TouchableOpacity
                style={styles.inBut2}
                onPress={() => alert("Coming Soon")}
              >
                <FontAwesome
                  name="facebook-f"
                  color="white"
                  style={[styles.smallIcon2, { fontSize: 30 }]}
                />
              </TouchableOpacity>

              <Text style={styles.bottomText}>Facebook</Text>
            </View>
          </View>
        </View>
      </View>
    </ScrollView>
  );
};

export default SignInPage;
