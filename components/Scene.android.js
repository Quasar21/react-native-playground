'use strict';
import React, {
  Component,
  Text,
  TouchableNativeFeedback,
  View
} from 'react-native';
import styles from "../styles/Stylesheet.js";

class Scene extends Component {
  render() {
    return (
      <View style={styles.container}>
        <Text style={styles.title}>
          {this.props.name}
        </Text>
        <TouchableNativeFeedback onPress={this.props.onForward}>
          <Text style={styles.button}>
            Next scene
          </Text>
        </TouchableNativeFeedback>
        <TouchableNativeFeedback onPress={this.props.onBack}>
          <Text style={styles.button}>
            Back scene
          </Text>
        </TouchableNativeFeedback>
      </View>
    );
  }
}

export default Scene;
