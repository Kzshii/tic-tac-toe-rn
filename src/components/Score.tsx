import React, { FC } from 'react';
import { StyleSheet, View, Text } from 'react-native';
import { User } from '../types';

interface Props {
  user: User;
  opponent: User;
}

export const Score: FC<Props> = ({ user, opponent }) => (
  <View style={styles.container}>
    <View style={styles.content}>
      <Text style={styles.name}>{user.name}</Text>
      <Text style={styles.points}>{user.points}</Text>
    </View>
    <View style={styles.content}>
      <Text style={styles.name}>Computador</Text>
      <Text style={styles.points}>{opponent.points}</Text>
    </View>
  </View>
);

const styles = StyleSheet.create({
  container: {
    width: '100%',
    padding: 32,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center'
  },
  content: {
    flexDirection: 'column',
    padding: 12,
    alignItems: 'center',
    borderRadius: 8,
    width: '40%',
    backgroundColor: '#cdab81'
  },
  name: {
    fontSize: 16,
    color: '#fff'
  },
  points: {
    fontSize: 32,
    fontWeight: 'bold',
    color: '#fff'
  }
});
