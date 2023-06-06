import { StyleSheet, Text, TouchableOpacity } from "react-native";
import React from "react";

const Cads = ({ labelButton, onpress }) => {
  return (
    <TouchableOpacity style={styles.button} onPress={onpress}>
      <Text style={styles.white}>{labelButton}</Text>
    </TouchableOpacity>
  );
};

export default Cads;

const styles = StyleSheet.create({
  white: {
    top: 15,
    fontSize: 12,
    color: "#51087E",
    textDecorationLine: "underline",
  },
});
