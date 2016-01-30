import React, { Component, Text, View, TouchableOpacity, } from 'react-native';
import styles from '../styles/Stylesheet.js';

import {
  BUTTON_SCENE,
  IMAGE_SCENE,
  ANIMATION_SCENE,
  GESTURE_SCENE,
} from './Scenes/SceneIndexes.js';

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
            Button
          </Text>
        </TouchableOpacity>
        <TouchableOpacity onPress={() => this._OnPress(IMAGE_SCENE)}>
          <Text style={styles.button}>
            Image
          </Text>
        </TouchableOpacity>
        <TouchableOpacity onPress={() => this._OnPress(ANIMATION_SCENE)}>
          <Text style={styles.button}>
            Animation
          </Text>
        </TouchableOpacity>
        <TouchableOpacity onPress={() => this._OnPress(GESTURE_SCENE)}>
          <Text style={styles.button}>
            Gestures
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
