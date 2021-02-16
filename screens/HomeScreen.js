import React, { Component } from "react";
import {
  StyleSheet,
  View,
  Text,
  TextInput,
  TouchableOpacity,
} from "react-native";
import AppHeader from "../components/AppHeader";
export default class HomeScreen extends Component {
  constructor() {
    super();
    this.state = {
      text: "",
      isSearchPressed: false,
      isLoading: false,
      word: "Loading...",
      lexicalCategory: "",
      definition: "",
    };
  }

  getWord = (word) => {
    var searchKeyword = word.toLowerCase();
    var url =
      "https://rupinwhitehatjr.github.io/dictionary/" + searchKeyword + ".json";
    return fetch(url)
      .then((data) => {
        if (data.status === 200) {
          return data.json();
        } else {
          return null;
        }
      })
      .then((response) => {
        var responseObject = response;
        if (responseObject) {
          var wordData = responseObject.definitions[0];
          var definition = wordData.description;
          var lexicalCategory = wordData.wordtype;
          this.setState({
            word: this.state.text,
            definition: definition,
            lexicalCategory: lexicalCategory,
          });
        } else {
          this.setState({
            word: this.state.text,
            definition: "Not Found",
          });
        }
      });
  };

  render() {
    return (
      <View>
        <AppHeader />
        <TextInput
          style={styles.inputBox}
          onChangeText={(text) => {
            this.setState({
              text: text,
              isSearchPressed: false,
              word: "Loading...",
              lexicalCategory: "",
              examples: [],
              definition: "",
            });
          }}
          value={this.state.text}
        />

        <TouchableOpacity
          style={styles.searchButton}
          onPress={() => {
            this.setState({ isSearchPressed: true });
            this.getWord(this.state.text);
          }}
        >
          <Text style={styles.searchText}>Search</Text>
        </TouchableOpacity>

        <View>
          <Text style={{ fontSize: 20 }}>
            {this.state.isSearchPressed && this.state.word === "Loading..."
              ? this.state.word
              : ""}
          </Text>
          {this.state.word !== "Loading..." ? (
            <View>
              <View style={styles.detailsContainer}>
                <Text style={styles.detailsTitle}>Word : </Text>
                <Text style={{ fontSize: 18 }}>{this.state.word}</Text>
              </View>
              <View style={styles.detailsContainer}>
                <Text style={styles.detailsTitle}>Type : </Text>
                <Text style={{ fontSize: 18 }}>
                  {this.state.lexicalCategory}
                </Text>
              </View>
              <View style={{ flexDirection: "row", flexWrap: "wrap" }}>
                <Text style={styles.detailsTitle}>Definition : </Text>
                <Text style={{ fontSize: 18 }}>{this.state.definition}</Text>
              </View>
            </View>
          ) : null}
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  inputBox: {
    marginTop: 50,
    width: 200,
    alignSelf: "center",
    height: 40,
    textAlign: "center",
    borderWidth: 4,
  },
  searchButton: {
    width: 100,
    height: 40,
    alignSelf: "center",
    justifyContent: "center",
    alignItems: "center",
    margin: 10,
    borderWidth: 2,
    borderRadius: 10,
  },
  searchText: {
    fontSize: 20,
    fontWeight: "bold",
  },
  detailsContainer: {
    flexDirection: "row",
    alignItems: "center",
  },
  detailsTitle: {
    color: "orange",
    fontSize: 20,
    fontWeight: "bold",
  },
});
