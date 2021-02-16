import * as React from "react";
import { Text, View, StyleSheet } from "react-native";

class AppHeader extends React.Component {
  render() {
    return (
      <View style={styles.textContainer}>
        <Text style={styles.text}>Pocket Dictionary</Text>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  textContainer: {
    backgroundColor: "purple",
  },
  text: {
    color: "white",
    padding: 20,
    fontSize: 22,
    fontWeight: "bold",
    textAlign: "center",
  },
});

export default AppHeader;
