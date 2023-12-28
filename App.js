import React, { useState } from "react";
import Header from "./components/Header";
import ListItem from "./components/ListItem";
import Form from "./components/Form";
import { StyleSheet, FlatList, View } from "react-native";

export default function App() {
  const [listOfItems, setListOfItems] = useState([
    { text: "Ukraine", key: "1" },
    { text: "Portugal", key: "2" },
    { text: "Iceland", key: "3" },
    { text: "USA", key: "4" },
    { text: "Canada", key: "5" },
  ]);

  const addHandler = (text) => {
    setListOfItems((list) => {
      return [
        { text: text, key: Math.random().toString(36).substring(7) },
        ...list,
      ];
    });
  };

  const deleteHandler = (key) => {
    setListOfItems((list) => {
      return list.filter((listOfItems) => listOfItems.key != key);
    });
  };

  return (
    <View style={styles.container}>
      <Header />
      <Form addHandler={addHandler} />
      <View>
        <FlatList
          data={listOfItems}
          renderItem={({ item }) => (
            <ListItem el={item} deleteHandler={deleteHandler} />
          )}
        />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({});
