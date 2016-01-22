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
  _renderTouchableHighlight(text, buttonProps) {
    return (
      <TouchableHighlight style={styles.button} {...buttonProps}>
        <Text style={styles.buttonText}>
          {text}
        </Text>
      </TouchableHighlight>
    );
  }
  _renderTouchableOpacity(text, buttonProps) {
    return (
      <TouchableOpacity style={styles.button} {...buttonProps}>
        <Text style={styles.buttonText}>
          {text}
        </Text>
      </TouchableOpacity>
    );
  }
  _renderTouchableWithoutFeedback(text, buttonProps) {
    return (
      <TouchableWithoutFeedback style={styles.button} {...buttonProps}>
        <Text style={styles.buttonText}>
          {text}
        </Text>
      </TouchableWithoutFeedback>
    );
  }
  _renderTouchableWithoutFeedback(text, buttonProps) {
    return (
      <TouchableWithoutFeedback style={styles.button} {...buttonProps}>
        <Text style={styles.buttonText}>
          {text}
        </Text>
      </TouchableWithoutFeedback>
    );
  }
  _renderTouchableNativeFeedback(text, buttonProps) {
    var {Platform,} = React;
    if(Platform.OS === `ios`) {
      return this._renderTouchableHighlight(text, buttonProps); // fallback for ios
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
          {this._renderTouchableHighlight(`Highlight`, {activeOpacity: 1,})}
          {this._renderTouchableOpacity(`Opacity`)}
          {this._renderTouchableWithoutFeedback(`Without Feedback`)}
          {this._renderTouchableNativeFeedback(`Native Feedback`)}
        </View>
      </View>
    );
  }
}

export default ButtonScene;
