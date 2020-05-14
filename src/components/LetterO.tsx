import React from 'react';
import { View, StyleSheet } from 'react-native';

export const Circle = () => <View style={styles.content} />;

const styles = StyleSheet.create({
  content: {
    padding: 30,
    backgroundColor: '#ffc229',
    borderRadius: 30
  }
});
