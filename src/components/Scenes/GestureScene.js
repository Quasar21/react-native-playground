import React, {
  Component,
  Text,
  View,
  PanResponder,
} from 'react-native';
import styles from '../../styles/Stylesheet.js';

const ACTIVE_COLOR = `rgba(1, 255, 255, 0.5)`;
const REGULAR_COLOR = `rgba(255, 255, 255, 1.0)`;

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
        backgroundColor: REGULAR_COLOR,
        margin: 10,
        borderRadius: 5,
      },
    };
    this._panResponder = PanResponder.create({
      onStartShouldSetPanResponder: () => true,
      onMoveShouldSetPanResponder: () => true,
      onPanResponderGrant: this._handleResponderGrant,
      onPanResponderMove: this._handlePanResponderMove,
      onPanResponderRelease: this._handlePanResponderEnd,
      onPanResponderTerminate: this._handlePanResponderEnd,
    });
  }

  componentDidMount() {
    this._updateProps();
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

  _updateProps() {
    this.view && this.view.setNativeProps(this._viewStyles);
  }


  _handleResponderGrant = () => {
    this._viewStyles.style.backgroundColor = ACTIVE_COLOR;
    this._updateProps();
  };

  _handlePanResponderMove = (e: Object, {dx, dy,}) => {
    this._viewStyles.style.left = this._previousLeft + dx;
    this._viewStyles.style.top  = this._previousTop + dy;
    this._updateProps();
  };

  _handlePanResponderEnd = (e: Object, {dx, dy,}) => {
    this._previousLeft += dx;
    this._previousTop += dy;
    this._viewStyles.style.backgroundColor = REGULAR_COLOR;
    this._updateProps();
  };
}

export default GestureScene;
