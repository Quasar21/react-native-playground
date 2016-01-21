import React, {
  Component,
  Text,
  View,
  TouchableHighlight,
  TouchableOpacity,
  TouchableWithoutFeedback,
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
        </View>
      </View>
    );
  }
}

ButtonScene.propTypes = {
  name: React.PropTypes.string,
};

export default ButtonScene;
