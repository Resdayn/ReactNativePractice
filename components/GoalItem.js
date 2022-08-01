import { StyleSheet, View, Text, Pressable } from "react-native";

const GoalItem = (props) => {
  return (
    <Pressable
      onPress={props.onDeleteItem.bind(this, props.id)}
      style={({pressed}) => pressed && styles.pressedItem
      }
    >
      <View style={styles.goalItem}>
        <Text style={styles.goalText}>{props.text}</Text>
      </View>
    </Pressable>
  );
};

const styles = StyleSheet.create({
  goalItem: {
    margin: 10,
    padding: 15,
    borderRadius: 6,
    backgroundColor: "#5e0acc",
    width: 300,
    alignSelf: "center",
  },
  goalText: {
    color: "white",
    textAlign: "center",
  },
  pressedItem: {
    opacity: 0.5,
  },
});

export default GoalItem;
