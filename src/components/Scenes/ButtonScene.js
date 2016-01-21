import React, {
  Component,
  Text,
  View,
  TouchableHighlight,
  TouchableOpacity,
  TouchableWithoutFeedback,
  TouchableNativeFeedback,
} from 'react-native';
import styles from '../../styles/Stylesheet.js';

class ButtonScene extends Component {
  _renderTouchableHighlight(text) {
    return (
      <TouchableHighlight style={styles.button}>
        <Text style={styles.buttonText}>
          {text}
        </Text>
      </TouchableHighlight>
    );
  }
  _renderTouchableOpacity(text) {
    return (
      <TouchableOpacity style={styles.button}>
        <Text style={styles.buttonText}>
          {text}
        </Text>
      </TouchableOpacity>
    );
  }
  _renderTouchableWithoutFeedback(text) {
    return (
      <TouchableWithoutFeedback style={styles.button}>
        <Text style={styles.buttonText}>
          {text}
        </Text>
      </TouchableWithoutFeedback>
    );
  }
  _renderTouchableWithoutFeedback(text) {
    return (
      <TouchableWithoutFeedback style={styles.button}>
        <Text style={styles.buttonText}>
          {text}
        </Text>
      </TouchableWithoutFeedback>
    );
  }
  _renderTouchableNativeFeedback(text) {
    var {Platform,} = React;
    if(Platform.OS === `ios`) {
      return this._renderTouchableHighlight(text); // fallback for ios
    }
    return (
      <TouchableNativeFeedback style={styles.button}>
        <Text style={styles.buttonText}>
          {text}
        </Text>
      </TouchableNativeFeedback>
    );
  }
  render() {
    return (
      <View style={styles.container}>
        <Text style={styles.title}>
          Button Scene
        </Text>
        <View>
          {this._renderTouchableHighlight(`Highlight`)}
          {this._renderTouchableOpacity(`Opacity`)}
          {this._renderTouchableWithoutFeedback(`Without Feedback`)}
          {this._renderTouchableNativeFeedback(`Native Feedback`)}
        </View>
      </View>
    );
  }
}

ButtonScene.propTypes = {
  name: React.PropTypes.string,
};

export default ButtonScene;
