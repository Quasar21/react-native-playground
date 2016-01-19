import React, { Component, Navigator, } from 'react-native';
import Navbar from './components/Navbar.js';
import Scene from './components/Scene';

const BaseConfig = Navigator.SceneConfigs.FloatFromBottom;
const CustomGesture = Object.assign({}, BaseConfig.gestures.pop, {
  snapVelocity: 6,
});
const CustomSceneConfig = Object.assign({}, BaseConfig, {
  springTension: 100,
  springFriction: 6,
  gestures: {
    pop: CustomGesture,
  },
});

class App extends Component {
  _renderScene(route, navigator) {
    return (
      <Scene
        name={route.name}
        onBack={() => {
          if (route.index > 0) {
            navigator.pop();
          }
        }}
        onForward={() => {
            let nextIndex = route.index + 1;
            navigator.push({
              name: `Scene` + nextIndex,
              index: nextIndex,
            });
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
        configureScene={this._configureScene}
        initialRoute={{name: `Scene1`, index: 1,}}
        navigationBar={<Navbar/>}
        renderScene={this._renderScene}
      />
    );
  }
}

export default App;
