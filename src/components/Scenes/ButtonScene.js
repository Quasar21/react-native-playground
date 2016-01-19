import React, {
  Component,
  Text,
  View,
} from 'react-native';
import styles from '../../styles/Stylesheet.js';

class ButtonScene extends Component {
  render() {
    return (
      <View style={styles.container}>
        <Text style={styles.title}>
          Button Scene
        </Text>
      </View>
    );
  }
}

ButtonScene.propTypes = {
  name: React.PropTypes.string,
};

export default ButtonScene;
