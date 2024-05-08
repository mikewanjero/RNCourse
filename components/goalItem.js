import React from "react";
import { StyleSheet, View, Text, Pressable } from "react-native";

export default function GoalItem(props) {
  return (
    <View style={styles.goalItem}>
      <Pressable
        android_ripple={{ color: "#BD48FF" }}
        onPress={props.onDeleteItem.bind(this, props.id)}
      >
        <Text style={styles.goalText}>{props.text}</Text>
      </Pressable>
    </View>
  );
}

const styles = StyleSheet.create({
  goalItem: {
    textAlign: "left",
    margin: 8,
    borderRadius: 10,
    backgroundColor: "#5e0acc",
  },
  goalText: {
    color: "white",
    padding: 8,
  },
});
