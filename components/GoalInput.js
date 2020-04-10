import React from "react";
import { StyleSheet, TextInput, View, Button, Modal } from "react-native";

class GoalInput extends React.Component {
  state = {
    enteredGoal: "",
  };
  onChangeGoal = (enteredGoal) => {
    this.setState({ enteredGoal });
  };
  addHandler = () => {
    this.props.addGoal(this.state.enteredGoal);
    this.setState({ enteredGoal: "" });
  };
  render() {
    return (
      <Modal visible={this.props.visible} animationType="slide">
        <View style={styles.inputContainer}>
          <TextInput
            placeholder="Add goals"
            style={styles.input}
            onChangeText={this.onChangeGoal}
            value={this.state.enteredGoal}
          />
          <View style={styles.buttonContainer}>
            <View style={styles.button}>
              <Button title="ADD" onPress={this.addHandler} />
            </View>
            <View style={styles.button}>
              <Button
                title="Cancel"
                onPress={this.props.onToggle}
                color="red"
              />
            </View>
          </View>
        </View>
      </Modal>
    );
  }
}

const styles = StyleSheet.create({
  inputContainer: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  input: {
    borderColor: "black",
    borderWidth: 1,
    padding: 10,
    width: "80%",
    marginBottom: 10,
  },
  buttonContainer: {
    width: "60%",
    flexDirection: "row",
    justifyContent: "space-around",
  },
  button: {
    width: "40%"
  },
});

export default GoalInput;
