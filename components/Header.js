import React from "react";
import { StyleSheet, Text, View, } from "react-native";

export default function Header() {
    return (
      <View style={styles.main}>
        <Text style={styles.text}> Checklist </Text>
      </View>
    );
}

const styles = StyleSheet.create({
  main: {
    paddingTop: 50,
    height: 100,
    backgroundColor: "#FF8B33",
  },
  text: {
    fontSize: 22,
    color: "#fff",
    textAlign: "center",
  },
});
