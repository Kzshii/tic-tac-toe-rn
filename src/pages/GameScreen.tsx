import React, { FC, useState, useEffect, useCallback } from 'react';
import { StyleSheet, SafeAreaView, View, Button } from 'react-native';
import { useGame, initialState } from '../hooks/useGame';
import { User, OpponentLevel, Turn, State } from '../types';
import { Table, Score, Overlay } from '../components';

interface Props {
  user: User;
  level: OpponentLevel;
  opponent: User;
  setWinner: (player: Turn) => void;
  onChangeLevel: () => void;
}

const pickWinner = (turn: Turn, user: User) =>
  turn === Turn.player ? user.name : 'Computador';

export const GameScreen: FC<Props> = ({
  user,
  opponent,
  level,
  setWinner,
  onChangeLevel
}) => {
  const {
    state,
    finished,
    loading,
    game,
    setGame,
    setFinished,
    setState
  } = useGame(level);

  useEffect(() => {
    if (finished && state === State.Winner) {
      setWinner(game.turn);
    }
  }, [finished, game.turn]);

  const onSquareClick = (value: string, key: number) => {
    const clonedRows = [...game.rows];
    clonedRows.splice(key, 1, 'X');
    setGame({
      ...game,
      turn: Turn.player,
      squaresFilled: game.squaresFilled + 1,
      rows: clonedRows
    });
  };

  const onRestart = useCallback(() => {
    setGame(initialState);
    setState(State.Playing);
    setFinished(false);
  }, []);

  return (
    <>
      {finished && (
        <Overlay
          onPress={onRestart}
          state={state}
          winner={pickWinner(game.turn, user)}
        />
      )}
      <SafeAreaView style={styles.container}>
        <Score user={user} opponent={opponent} />
        <Table
          game={game.rows}
          disabled={finished || loading}
          onSquareClick={onSquareClick}
        />
        <Button
          disabled={loading}
          onPress={onChangeLevel}
          title="Trocar dificuldade"
        />
        <Button
          disabled={loading}
          onPress={onRestart}
          title="Começar de novo"
        />
      </SafeAreaView>
    </>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    width: '100%',
    height: '100%'
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
