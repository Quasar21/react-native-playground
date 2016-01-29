import React, {
  Component,
  Text,
  View,
  Image,
} from 'react-native';
import styles from '../../styles/Stylesheet.js';

class GestureScene extends Component {
  render() {
    return (
      <View style={styles.container}>
        <Text style={styles.title}>
          Gesture Scene
        </Text>
      </View>
    );
  }
}

export default ImageScene;
