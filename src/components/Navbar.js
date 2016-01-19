import React, { Component, Text, View, TouchableOpacity, } from 'react-native';
import styles from '../styles/Stylesheet.js';

class Navbar extends Component {
  _OnPress(index) {
    let navigator = this.props.navigator;
    let route = navigator.getCurrentRoutes();
    console.log(route);
    if (route.index > 0) {
      navigator.pop();
    }
    navigator.push({
      name: `Scene` + index,
      index: index,
    });
  }
  render() {
    console.log(this.props.navigator);
    return (
      <View style={styles.navbarContainer}>
        <TouchableOpacity onPress={() => this._OnPress(1)}>
          <Text style={styles.button}>
            Scene1
          </Text>
        </TouchableOpacity>
        <TouchableOpacity onPress={() => this._OnPress(2)}>
          <Text style={styles.button}>
            Scene2
          </Text>
        </TouchableOpacity>
        <TouchableOpacity onPress={() => this._OnPress(3)}>
          <Text style={styles.button}>
            Scene3
          </Text>
        </TouchableOpacity>
      </View>
    );
  }
}

Navbar.propTypes = {
 navigator: React.propTypes.object,
};

export default Navbar;
