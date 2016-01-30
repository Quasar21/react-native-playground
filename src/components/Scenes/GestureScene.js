import React, {
  Component,
  Text,
  View,
  PanResponder,
} from 'react-native';
import styles from '../../styles/Stylesheet.js';


class GestureScene extends Component {
  _panResponder = {};
  _previousLeft = 0;
  _previousTop = 0;
  _viewStyles = {};
  view = (null : ?{ setNativeProps(props: Object): void });

  constructor(props: any) {
    super(props);
    this._previousLeft = 20;
    this._previousTop = 84;
    this._viewStyles = {
      style: {
        left: this._previousLeft,
        top: this._previousTop,
      },
    };
    this._panResponder = PanResponder.create({
      onStartShouldSetPanResponder: () => true,
      onMoveShouldSetPanResponder: () => true,
      onPanResponderMove: this._handlePanResponderMove,
      onPanResponderRelease: this._handlePanResponderEnd,
      onPanResponderTerminate: this._handlePanResponderEnd,
    });
  }

  componentDidMount() {
    this._updatePosition();
  }

  render() {
    return (
      <View style={styles.container}>
        <Text style={styles.title}>
          Gesture Scene
        </Text>
        <View
          ref={(view) => {
            this.view = view;
          }}
          {...this._panResponder.panHandlers}
        >
          <Text style={styles.title}>
            I understand gestures
          </Text>
        </View>
      </View>
    );
  }

  _updatePosition() {
    this.view && this.view.setNativeProps(this._viewStyles);
  }

  _handlePanResponderMove = (e: Object, gestureState: Object) => {
    this._viewStyles.style.left = this._previousLeft + gestureState.dx;
    this._viewStyles.style.top  = this._previousTop + gestureState.dy;
    this._updatePosition();
  };
  _handlePanResponderEnd = (e: Object, gestureState: Object) => {
    this._previousLeft += gestureState.dx;
    this._previousTop += gestureState.dy;
  };
}

export default GestureScene;
