import React, {
  Component,
  Text,
  View,
} from 'react-native';
import styles from '../../styles/Stylesheet.js';

class AnimationScene extends Component {
  render() {
    return (
      <View style={styles.container}>
        <Text style={styles.title}>
          Animation Scene
        </Text>
      </View>
    );
  }
}

export default AnimationScene;
