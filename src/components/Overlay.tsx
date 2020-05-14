import React, { FC } from 'react';
import {
  View,
  Text,
  StyleSheet,
  TouchableHighlight
} from 'react-native';
import { State } from '../types';

interface Props {
  winner: string;
  state: State;
  onPress: () => void;
}

const selectOverlayText = (text: State, winner?: string) => {
  switch (text) {
    case State.Draw:
      return 'Empate';
    case State.Winner:
      return `${winner} Venceu`;
    default:
      return '';
  }
};

export const Overlay: FC<Props> = ({ state, winner, onPress }) => (
  <TouchableHighlight style={styles.touchable} onPress={onPress}>
    <View style={styles.container}>
      <Text style={styles.message}>{selectOverlayText(state, winner)}</Text>
      <Text style={styles.subMessage}>Clique na tela para recomeçar</Text>
    </View>
  </TouchableHighlight>
);

const styles = StyleSheet.create({
  container: {
    position: 'absolute',
    backgroundColor: 'grey',
    opacity: 0.93,
    top: 0,
    left: 0,
    height: '100%',
    width: '100%',
    justifyContent: 'center',
    alignItems: 'center'
  },
  message: {
    zIndex: 10,
    fontSize: 36,
    color: '#000',
    fontWeight: 'bold'
  },
  subMessage: {
    fontSize: 20
  },
  touchable: {
    zIndex: 3,
    position: 'absolute',
    height: '100%',
    width: '100%',
    justifyContent: 'center',
    alignItems: 'center'
  }
});
