import React, { useState } from "react";
import { StyleSheet, TextInput, Button, View } from "react-native";

export default function Form({ addHandler }) {
  const [text, setValue] = useState("");

  const onChange = (text) => {
    setValue(text);
  };

  return (
    <View>
      <TextInput
        style={styles.input}
        onChangeText={onChange}
        placeholder="Type in the text"
      />
      <Button
        color="#FF8B33"
        onPress={() => addHandler(text)}
        title="Additionally"
      />
    </View>
  );
}

const styles = StyleSheet.create({
  input: {
    borderBottomWidth: 1,
    borderColor: "#000",
    padding: 10,
    marginVertical: 30,
    marginHorizontal: "20%",
  },
});
