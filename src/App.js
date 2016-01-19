import React, { Component, Navigator, } from 'react-native';
import Navbar from './components/Navbar.js';
import ButtonScene from './components/Scenes/ButtonScene.js';
import ImageScene from './components/Scenes/ImageScene.js';
import { BUTTON_SCENE, IMAGE_SCENE, } from './components/Scenes/SceneIndexes.js';

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
    switch(route.index) {
      case IMAGE_SCENE:
      return <ImageScene/>;
      case BUTTON_SCENE:
      default:
      return <ButtonScene/>;
    }
  }
  _configureScene() {
    return CustomSceneConfig;
  }
  render() {
    return (
      <Navigator
        configureScene={this._configureScene}
        initialRoute={{index: 1,}}
        navigationBar={<Navbar/>}
        renderScene={this._renderScene}
      />
    );
  }
}

export default App;
