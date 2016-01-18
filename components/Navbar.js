'use strict';
import React, { Component, Text, View, TouchableOpacity } from 'react-native';
import styles from "../styles/Stylesheet.js";

class Navbar extends Component {
  render() {
    return (
      <View style={styles.navbarContainer}>
        <TouchableOpacity onPress={this.props.onScene1}>
          <Text style={styles.button}>
            Scene1
          </Text>
        </TouchableOpacity>
        <TouchableOpacity onPress={this.props.onScene2}>
          <Text style={styles.button}>
            Scene2
          </Text>
        </TouchableOpacity>
        <TouchableOpacity onPress={this.props.onScene3}>
          <Text style={styles.button}>
            Scene3
          </Text>
        </TouchableOpacity>
      </View>
    );
  }
}

export default Navbar;
