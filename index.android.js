'use strict';

import React, {
  AppRegistry,
  Component,
  Navigator
} from 'react-native';

import Navbar from "./components/Navbar.js";
import Scene from "./components/Scene";
import styles from "./styles/Stylesheet.js";

const BaseConfig = Navigator.SceneConfigs.FloatFromBottom;
const CustomGesture = Object.assign({}, BaseConfig.gestures.pop, {
  snapVelocity: 6,
});
const CustomSceneConfig = Object.assign({}, BaseConfig, {
  springTension: 100,
  springFriction: 6,
  gestures: {
    pop: CustomGesture
  }
});

console.log(BaseConfig);

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
  _configureScene() {
    return CustomSceneConfig;
  }
  render() {
    return (
      <Navigator
        initialRoute={{name: "Scene", index: 0}}
        navigationBar={<Navbar/>}
        renderScene={this._renderScene}
        configureScene={this._configureScene}
      />
    );
  }
}

AppRegistry.registerComponent('RNPlayground', () => App);
