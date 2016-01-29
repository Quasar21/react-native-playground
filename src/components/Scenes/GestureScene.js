import React, {
  Component,
  Text,
  View,
  PanResponder,
} from 'react-native';
import styles from '../../styles/Stylesheet.js';

class GestureScene extends Component {
  constructor(props: any) {
    super(props);
    this._panResponder = PanResponder.create({
      // Ask to be the responder:
      onStartShouldSetPanResponder:        () => true,
      onStartShouldSetPanResponderCapture: () => true,
      onMoveShouldSetPanResponder:         () => true,
      onMoveShouldSetPanResponderCapture:  () => true,
      onPanResponderTerminationRequest:    () => true,
      onShouldBlockNativeResponder:        () => true,

      onPanResponderGrant: (evt, gestureState) => {
        // The guesture has started. Show visual feedback so the user knows
        // what is happening!
        console.log(`Gesture started`);
        console.log(`event`);
        console.log(evt);
        console.log(`Gesture State`);
        console.log(gestureState);
        // gestureState.{x,y}0 will be set to zero now
      },
      onPanResponderMove: (evt, gestureState) => {
        // The most recent move distance is gestureState.move{X,Y}
        console.log(`Move`);
        console.log(`event`);
        console.log(evt);
        console.log(`Gesture State`);
        console.log(gestureState);
        // The accumulated gesture distance since becoming responder is
        // gestureState.d{x,y}
      },
      onPanResponderRelease: (evt, gestureState) => {
        // The user has released all touches while this view is the
        // responder. This typically means a gesture has succeeded
        console.log(`Gesture released`);
        console.log(`event`);
        console.log(evt);
        console.log(`Gesture State`);
        console.log(gestureState);
      },
      onPanResponderTerminate: (evt, gestureState) => {
        // Another component has become the responder, so this gesture
        // should be cancelled
        console.log(`onPanResponderTerminate`);
        console.log(`event`);
        console.log(evt);
        console.log(`Gesture State`);
        console.log(gestureState);
      },
    });
  }
  render() {
    return (
      <View style={styles.container}>
        <Text style={styles.title}>
          Gesture Scene
        </Text>
        <View style={styles.container}
          {...this._panResponder.panHandlers}
        >
          <Text style={styles.title}>
            I understand gesutres
          </Text>
        </View>
      </View>
    );
  }
}

export default GestureScene;
