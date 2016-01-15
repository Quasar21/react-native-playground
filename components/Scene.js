'use strict';
import React, {
  Component,
  Text,
  TouchableHighlight,
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
        <TouchableHighlight onPress={this.props.onForward}>
          <Text style={styles.button}>
            Next scene
          </Text>
        </TouchableHighlight>
        <TouchableHighlight onPress={this.props.onBack}>
          <Text style={styles.button}>
            Back scene
          </Text>
        </TouchableHighlight>
      </View>
    );
  }
}

export default Scene;
