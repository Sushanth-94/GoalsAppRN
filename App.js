import React from "react";
import {
  StyleSheet,
  Text,
  View,
  TextInput,
  Button,
  ScrollView,
  FlatList,
} from "react-native";
import GoalItem from "./components/GoalItem";
import GoalInput from "./components/GoalInput";
import { FirebaseSetUp } from "./components/FirebaseSetUp";

export default class App extends React.Component {
  state = {
    goals: [],
    visible: false,
  };
  addGoal = (value) => {
    this.setState({
      goals: [...this.state.goals, { key: Math.random().toString(), value }],
      visible: false
    });
  };
  onDeleteItem = (id) => {
    const newState = this.state.goals.filter((goal) => goal.key !== id);
    this.setState({ goals: newState });
  };
  toggleModal = () => {
    this.setState({ visible: !this.state.visible })
  }
  render() {
    return (
      <View style={styles.screen}>
        <Button
          title="Add New Goal"
          onPress={this.toggleModal}
        />
        <GoalInput
          addGoal={(value) => this.addGoal(value)}
          visible={this.state.visible}
          onToggle={this.toggleModal}
        />
        <FlatList
          data={this.state.goals}
          renderItem={(itemData) => (
            <GoalItem
              deleteItem={() => this.onDeleteItem(itemData.item.key)}
              title={itemData.item.value}
            />
          )}
        ></FlatList>        
      </View>
    );
  }
}

const styles = StyleSheet.create({
  screen: {
    padding: 50,
  },
});
