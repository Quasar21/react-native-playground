'use strict';
import React, { Component, Text } from 'react-native';
import styles from "../styles/Stylesheet.js";

class Navbar extends Component {
  render() {
    return (
      <Text style={styles.title}>
        Navbar component
      </Text>
    );
  }
}

export default Navbar;
