import React, { FC } from 'react';
import { StyleSheet, View, Text } from 'react-native';
import { User } from '../types';

interface Props {
  user: User;
  oponent: User;
}

export const Score: FC<Props> = ({ user, oponent }) => (
  <View style={styles.container}>
    <View style={styles.content}>
      <Text style={styles.points}>
        {user.name}: {user.points}
      </Text>
    </View>
    <View style={styles.content}>
      <Text style={styles.points}>{oponent.points}: Computador</Text>
    </View>
  </View>
);

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center'
  },
  content: {
    padding: 24,
    justifyContent: 'space-between',
    alignItems: 'center',
    borderWidth: 2,
    width: '50%'
  },
  points: {
    fontSize: 16,
    fontWeight: 'bold'
  }
});
