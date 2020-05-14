import React, { FC } from 'react';
import { TouchableHighlight, View, Text, StyleSheet } from 'react-native';
import { emptyString } from '../utils/emptyString';
import { Circle } from './LetterO';
import { LetterX } from './LetterX';

interface Props {
  value: string;
  style: Record<string, string>;
  onPress: (value: string) => void;
  disabled: boolean;
}

export const Square: FC<Props> = ({ value, onPress, disabled, style }) => (
  <TouchableHighlight
    style={styles.touchable}
    activeOpacity={0.6}
    underlayColor="transparent"
    onPress={() => onPress(value)}
    disabled={!emptyString(value) || disabled}
  >
    <View style={styles.content}>
      {value === 'O' ? <Circle /> : value === 'X' ? <LetterX /> : <></>}
    </View>
  </TouchableHighlight>
);

const styles = StyleSheet.create({
  content: {
    justifyContent: 'center',
    alignItems: 'center',
    height: 100,
    width: 100,
    borderWidth: 2,
  },
  value: {
    fontSize: 48,
    fontWeight: 'bold'
  },
  touchable: {
    flexBasis: 0,
    flexGrow: 1
  }
});
