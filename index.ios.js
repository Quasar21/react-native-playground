'use strict';

import React, {
  AppRegistry,
  Component,
  Navigator
} from 'react-native';

import Navbar from "./components/Navbar.js";
import Scene from "./components/Scene.js";
import styles from "./styles/Stylesheet.js";

class App extends Component {
  _renderScene(route, navigator) {
    return (
      <Scene name={route.name}
          onForward={() => {
            let nextIndex = route.index + 1;
            navigator.push({
              name: 'Scene' + nextIndex,
              index: nextIndex
            });
          }}
          onBack={() => {
            if (route.index > 0) {
              navigator.pop();
            }
          }}
      />
    );
  }
  render() {
    return (
      <Navigator
        initialRoute={{name: "Scene", index: 0}}
        navigationBar={<Navbar/>}
        renderScene={this._renderScene}
      />
    );
  }
}

AppRegistry.registerComponent('RNPlayground', () => App);
