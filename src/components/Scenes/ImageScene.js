import React, {
  Component,
  Text,
  View,
} from 'react-native';
import styles from '../../styles/Stylesheet.js';

class ImageScene extends Component {
  render() {
    return (
      <View style={styles.container}>
        <Text style={styles.title}>
          Image Scene
        </Text>
      </View>
    );
  }
}

ImageScene.propTypes = {
  name: React.PropTypes.string,
};

export default ImageScene;
