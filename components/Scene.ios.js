'use strict';
import React, {
  Component,
  Text,
  TouchableOpacity,
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
        <TouchableOpacity onPress={this.props.onForward}>
          <Text style={styles.button}>
            Next scene
          </Text>
        </TouchableOpacity>
        <TouchableOpacity onPress={this.props.onBack}>
          <Text style={styles.button}>
            Back scene
          </Text>
        </TouchableOpacity>
      </View>
    );
  }
}

export default Scene;
