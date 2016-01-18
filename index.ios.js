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

class App extends Component {
  _renderScene(route, navigator) {
    return (
      <Scene name={route.name}/>
    );
  }
  _configureScene() {
    return CustomSceneConfig;
  }
  render() {
    return (
      <Navigator
        initialRoute={{name: "Scene1", index: 1}}
        navigationBar={<Navbar/>}
        renderScene={this._renderScene}
        configureScene={this._configureScene}
      />
    );
  }
}

AppRegistry.registerComponent('RNPlayground', () => App);
