import React, {
  Animated,
  Component,
  Text,
  View,
} from 'react-native';
import styles from '../../styles/Stylesheet.js';

class AnimationScene extends Component {
  state = {
    fontSize: new Animated.Value(20),
  };
  constructor(props: any) {
    super(props);
    Animated.spring(                          // Base: spring, decay, timing
      this.state.fontSize,                 // Animate `bounceValue`
      {
        toValue: 30,                         // Animate to smaller size
        friction: 1,                          // Bouncier spring
      }
    ).start();
  }
  render() {
    console.log(this.state);
    return (
      <View style={styles.container}>
        <Animated.Text style={{
          textAlign: `center`,
          color: `#333333`,
          fontSize: this.state.fontSize,
          margin: 10,
        }}
        >
          Animation Scene
        </Animated.Text >
      </View>
    );
  }
}

export default AnimationScene;
