import React, {
  Animated,
  Easing,
  Component,
  Text,
  View,
} from 'react-native';
import styles from '../../styles/Stylesheet.js';

const MyAnimatedText = Animated.createAnimatedComponent(Text);

class AnimationScene extends Component {
  state = {
    fontSize: new Animated.Value(0),
  };
  constructor(props: any) {
    super(props);
    Animated.sequence([
      Animated.spring(
        this.state.fontSize,
        {
          toValue: 30,
          friction: 1,
          tension: 60,
        }
      ),
      Animated.timing(
        this.state.fontSize,
        {
          toValue: 0,
          duration: 5000,
          delay: 0,
          easing: Easing.inOut(Easing.linear),
        }
      ),
    ]).start();
  }
  render() {
    return (
      <View style={styles.container}>
        <MyAnimatedText style={{
          textAlign: `center`,
          color: `#333333`,
          fontSize: this.state.fontSize,
          margin: 10,
        }}
        >
          Animation Scene
        </MyAnimatedText>
      </View>
    );
  }
}

export default AnimationScene;
