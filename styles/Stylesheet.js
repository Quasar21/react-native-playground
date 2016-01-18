'use strict';
import React, { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#000000'
  },
  navbarContainer: {
    flex: 0,
    flexDirection: 'row',
    justifyContent: 'space-around',
    flexWrap: 'nowrap'
  },
  button: {
    backgroundColor: '#4E6E5E',
    borderRadius: 4,
    margin: 10,
    padding: 5
  },
  buttonText: {
    fontSize: 20,
    textAlign: 'center',
    color: '#FFFFFF'
  },
  title: {
    textAlign: 'center',
    color: '#333333',
    fontSize: 30,
    margin: 10
  },
});

export default styles;
