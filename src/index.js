import "./config/ReactotronConfig";
import "./config/DevToolsConfig";

import React, { Component } from "react";
import { Platform, StyleSheet, ScrollView, View, Text } from "react-native";

import Post from "./Post";

const white = "#FFF";
const orange = "#EE7777";
const title = "#333";

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: orange
  },

  header: {
    backgroundColor: white,
    justifyContent: "center",
    alignItems: "center",
    // Nesse ponto tinha apenas feito para iphone, após alguma pesquisa coloquei de forma
    //que funcionasse em ambos sistemas
    ...Platform.select({
      ios: {
        height: 76,
        paddingTop: 20
      },
      android: {
        height: 56,
        paddingTop: 0
      }
    })
  },

  headerTitle: {
    color: title,
    fontSize: 16,
    fontWeight: "bold"
  }
});

export default class App extends Component {
  state = {
    posts: [
      {
        id: 1,
        title: "Aprendendo React Native",
        author: "Lucas Ferreira",
        content:
          "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat."
      },
      {
        id: 2,
        title: "Aprendendo React Native",
        author: "Lucas Ferreira",
        content:
          "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat."
      },
      {
        id: 3,
        title: "Aprendendo React Native",
        author: "Lucas Ferreira",
        content:
          "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat."
      }
    ]
  };

  render() {
    const { posts } = this.state;

    return (
      <View style={styles.container}>
        <View style={styles.header}>
          <Text style={styles.headerTitle}>GoNative App</Text>
        </View>
        <ScrollView>
          {posts.map(post => (
            <Post key={post.id} data={post} />
          ))}
        </ScrollView>
      </View>
    );
  }
}
