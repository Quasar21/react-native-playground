import React, {
  Component,
  Text,
  View,
  Image,
} from 'react-native';
import styles from '../../styles/Stylesheet.js';

const image = require('../../images/react-native.png');

class ImageScene extends Component {
  render() {
    return (
      <View style={styles.container}>
        <Text style={styles.title}>
          Image Scene
        </Text>
        <Image source={image} style={styles.image}/>
      </View>
    );
  }
}

export default ImageScene;
