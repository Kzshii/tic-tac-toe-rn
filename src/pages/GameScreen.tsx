import React, { FC, useState } from 'react';
import { StyleSheet, SafeAreaView } from 'react-native';
import { useGame, OpponentLvl, initialState, Turn } from '../hooks/useGame';
import { User } from '../types';
import { Table, Score } from '../components';

interface Props {
  user: User;
  oponent: User;
  setWinner: (player: User) => void;
}

export const GameScreen: FC<Props> = ({ user, oponent, setWinner }) => {
  const { finished, game, setGame } = useGame(OpponentLvl.Easy);

  const onSquareClick = (value: string, key: number) => {
    const clonedRows = [...game.rows];
    clonedRows.splice(key, 1, 'X');
    setGame({
      turn: Turn.opponnent,
      gameCount: game.gameCount + 1,
      rows: clonedRows
    });
  };

  const onRestart = () => {
    setGame(initialState);
  };

  return (
    <SafeAreaView style={styles.container}>
      <Score user={user} oponent={oponent} />
      <Table
        game={game.rows}
        finished={finished}
        onRestart={onRestart}
        onSquareClick={onSquareClick}
      />
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center'
  },
  pointsContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center'
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
    fontWeight: 'bold'
  }
});
