import { useState } from "react";
import {
  TextInput,
  View,
  Button,
  StyleSheet,
  Modal,
  Image,
} from "react-native";
import { StatusBar } from "expo-status-bar";

export default function GoalInput(props) {
  const [enteredGoalText, setEnteredGoalText] = useState("");

  function goalInputHandler(enteredText) {
    setEnteredGoalText(enteredText);
  }

  function addGoalHandler() {
    props.onAddGoal(enteredGoalText);
    setEnteredGoalText("");
  }

  console.log("GoalInput");

  return (
    <>
      <StatusBar style="light" />
      <Modal visible={props.visible} animationType="fade">
        <View style={styles.inputContainer}>
          <Image
            source={require("../assets/images/goal.png")}
            style={styles.image}
          />
          <TextInput
            style={styles.textInput}
            placeholder="Your course goal!"
            onChangeText={goalInputHandler}
            value={enteredGoalText}
          />
          <View style={styles.buttonContainer}>
            <View style={styles.button}>
              <Button
                title="Add Goal"
                onPress={addGoalHandler}
                color={"#57FF2E"}
              />
            </View>
            <View style={styles.button}>
              <Button
                title="Cancel"
                onPress={props.onCancel}
                color={"#FF2E2E"}
              />
            </View>
          </View>
        </View>
      </Modal>
    </>
  );
}

const styles = StyleSheet.create({
  inputContainer: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#1e086c",
    padding: 16,
  },
  image: {
    width: 100,
    height: 100,
    padding: 20,
  },
  textInput: {
    borderWidth: 1,
    borderColor: "#e4d0ff",
    backgroundColor: "#e4d0ff",
    color: "#120438",
    borderRadius: 10,
    width: "100%",
    padding: 16,
  },
  buttonContainer: {
    marginTop: 16,
    flexDirection: "row",
  },
  button: {
    width: 100,
    marginHorizontal: 10,
  },
});
