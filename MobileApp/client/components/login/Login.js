import React from "react";
import {
  TouchableOpacity,
  TextInput,
  StyleSheet,
  Text,
  View,
} from "react-native";
import { Fontisto, Entypo } from "@expo/vector-icons";



import Button from "./Button_login";
import Cads from "./cadastro";

export function Login({ onPress, onpress }) {
  return (
    <View style={styles.container}>
      <View style={styles.wrapper}>
        <Text style={styles.bold}>Login</Text>

        <View style={styles.email}>
          <TextInput
            style={styles.input}
            underlineColorAndroid="transparent"
            placeholder="Enter your email:"
          />
          <Fontisto name="email" size={24} color="#4448" style={styles.icon} />
        </View>

        <View style={styles.password}>
          <TextInput
            style={styles.input}
            placeholder="Enter your password:"
            secureTextEntry
          />
          <Fontisto name="locked" size={24} color="#4448" style={styles.icon} />

          <TouchableOpacity>
            <Entypo
              name="eye"
              size={24}
              color="#4448"
              style={styles.iconSecret}
            />
          </TouchableOpacity>
        </View>

        <View>
          <Button labelButton="Login" onpress={onpress} />
        </View>

        <View>
          <TouchableOpacity>
            <Cads
              labelButton="Não possui uma conta? Cadastre-se"
              onpress={onPress}
            />
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
    width: "100%",
  },
  wrapper: {
    justifyContent: "center",
    alignItems: "center",
  },
  bold: {
    fontSize: 16,
  },

  input: {
    borderWidth: 1,
    width: 350,
    height: 45,
    borderWidth: 1,
    borderRadius: 8,
    borderColor: "#E4E7EB",
    paddingLeft: 40,
    fontSize: 14,
    margin: 10,
  },

  icon: {
    right: 350,
    top: 20,
  },

  iconSecret: {
    top: 20,
    right: 60,
  },

  password: {
    flexDirection: "row",
    marginLeft: 42,
  },

  email: {
    flexDirection: "row",
    marginLeft: 20,
  },
  background: {
    flex: 1,
  },
});
