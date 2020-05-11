import React, { FC, useState } from 'react';
import { StyleSheet, SafeAreaView } from 'react-native';
import { User } from '../types';
import { Table, Score } from '../components';

interface Props {
  user: User;
  oponent: User;
  setWinner: (player: User) => void;
}

export const GameScreen: FC<Props> = ({ user, oponent, setWinner }) => {
  return (
    <SafeAreaView style={styles.container}>
      <Score user={user} oponent={oponent} />
      <Table setWinner={setWinner} />
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  pointsContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  pointsContent: {
    padding: 24,
    justifyContent: 'space-between',
    alignItems: 'center',
    borderWidth: 2,
    width: '50%'
  },
  points: {
    fontSize: 16,
    fontWeight: 'bold',
  },
});
