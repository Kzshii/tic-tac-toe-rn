import React, { FC } from 'react';
import { TouchableHighlight, View, Text, StyleSheet } from 'react-native';

interface Props {
  value: string;
  onPress: (value: string) => void;
  disabled: boolean;
}

export const KeyInput: FC<Props> = ({ value, onPress, disabled }) => (
  <TouchableHighlight
      style={styles.touchable}
      activeOpacity={0.6}
      underlayColor="transparent"
      onPress={() => onPress(value)}
      disabled={disabled}
    >
    <View style={styles.content}>
      <Text style={styles.value}>{value}</Text>
    </View>
  </TouchableHighlight>
);

const styles = StyleSheet.create({
  content: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    height: 100,
    width: 100,
    borderWidth: 3,
  },
  value: {
    fontSize: 40,
  },
  touchable: {
    flexBasis: 0,
    flexGrow: 1,
  }
});