import React, {
  Component,
  Text,
  View,
} from 'react-native';
import styles from '../styles/Stylesheet.js';

class Scene extends Component {
  render() {
    return (
      <View style={styles.container}>
        <Text style={styles.title}>
          {this.props.name}
        </Text>
      </View>
    );
  }
}

export default Scene;
