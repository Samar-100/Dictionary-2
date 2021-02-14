import * as React from "react";
import {
  Text,
  View,
  StyleSheet,
  TextInput,
  TouchableOpacity,
} from "react-native";
import { Header } from "react-native-elements";

class HomeScreen extends React.Component {
  render() {
    return (
      <Header
        backgroundColor={"#9C8214"}
        centerComponent={{
          text: "Pocket Dictionary",
          style: { color: "#ffffff", fontSize: 20 },
        }}
      />
    );
  }
}

export default HomeScreen;
