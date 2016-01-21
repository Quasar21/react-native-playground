import React, { Component, Text, View, TouchableOpacity, } from 'react-native';
import styles from '../styles/Stylesheet.js';

import { BUTTON_SCENE, IMAGE_SCENE, } from './Scenes/SceneIndexes.js';

class Navbar extends Component {
  _OnPress(sceneID) {
    let navigator = this.props.navigator;
    let routes = navigator.getCurrentRoutes();
    if(routes[routes.length-1].index === sceneID) {
      return;
    }
    navigator.push({
      index: sceneID,
    });
  }
  render() {
    return (
      <View style={styles.navbarContainer}>
        <TouchableOpacity onPress={() => this._OnPress(BUTTON_SCENE)}>
          <Text style={styles.button}>
            Button Scene
          </Text>
        </TouchableOpacity>
        <TouchableOpacity onPress={() => this._OnPress(IMAGE_SCENE)}>
          <Text style={styles.button}>
            Image Scene
          </Text>
        </TouchableOpacity>
        <TouchableOpacity onPress={() => this._OnPress(BUTTON_SCENE)}>
          <Text style={styles.button}>
            Scene3
          </Text>
        </TouchableOpacity>
      </View>
    );
  }
}

Navbar.propTypes = {
  navigator: React.PropTypes.object,
};

export default Navbar;
