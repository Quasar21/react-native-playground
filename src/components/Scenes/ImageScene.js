import React, {
  Component,
  Text,
  View,
  Image,
} from 'react-native';
import styles from '../../styles/Stylesheet.js';

const imageSD = require('../../images/react-native_sd.png');
const image = require('../../images/react-native.png');
const imageHD = require('../../images/react-native_hd.png');

class ImageScene extends Component {
  render() {
    return (
      <View style={styles.container}>
        <Text style={styles.title}>
          Image Scene
        </Text>
        <Image source={imageHD} style={styles.image}/>
        <Image source={image} style={styles.image}/>
        <Image source={imageSD} style={styles.image}/>
      </View>
    );
  }
}

ImageScene.propTypes = {
  name: React.PropTypes.string,
};

export default ImageScene;
