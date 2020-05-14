import React from 'react';
import { View, StyleSheet } from 'react-native';

export const LetterX = () => (
  <View style={styles.container}>
    <View style={styles.top} />
    <View style={styles.left} />
    <View style={styles.letter} />
    <View style={styles.right} />
    <View style={styles.bottom} />
  </View>
);

const styles = StyleSheet.create({
  container: {
    justifyContent: 'center',
    alignItems: 'center'
  },
  letter: {
    padding: 30,
    backgroundColor: '#0a6e0f',
    borderRadius: 10
  },
  top: {
    borderTopStartRadius: 20,
    position: 'absolute',
    zIndex: 1,
    top: -15,
    transform: [{ rotate: '45deg' }],
    padding: 15,
    backgroundColor: '#fff',
    width: 30,
    height: 30
  },
  left: {
    borderBottomLeftRadius: 20,
    position: 'absolute',
    zIndex: 1,
    left: -15,
    transform: [{ rotate: '45deg' }],
    padding: 15,
    backgroundColor: '#fff',
    width: 30,
    height: 30
  },
  right: {
    borderTopEndRadius: 20,
    position: 'absolute',
    zIndex: 1,
    right: -15,
    transform: [{ rotate: '45deg' }],
    padding: 15,
    backgroundColor: '#fff',
    width: 30,
    height: 30
  },
  bottom: {
    zIndex: 1,
    borderBottomEndRadius: 20,
    position: 'absolute',
    bottom: -15,
    transform: [{ rotate: '45deg' }],
    padding: 15,
    backgroundColor: '#fff',
    width: 30,
    height: 30
  }
});
