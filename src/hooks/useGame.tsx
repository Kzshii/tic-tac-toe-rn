import { useState, useEffect } from 'react';
import { calculateWinner } from '../utils/calculateWinner';
import { api } from '../services/api';
import { OpponentLevel, Turn } from '../types';
import { State } from '../types/state';

interface GameState {
  turn: Turn;
  squaresFilled: number;
  rows: string[];
}

interface ReactHookState {
  finished: boolean;
  loading: boolean;
  hasError: boolean;
  setGame: (game: GameState) => void;
  setFinished: (value: boolean) => void;
  setState: (state: State) => void;
  game: GameState;
  state: State;
}

export const initialState = {
  turn: Turn.opponnent,
  squaresFilled: 0,
  rows: [' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ']
};

export const useGame = (level: OpponentLevel): ReactHookState => {
  const [game, setGame] = useState<GameState>(initialState);
  const [finished, setFinished] = useState(false);
  const [state, setState] = useState<State>(State.Playing);
  const [hasError, setHasError] = useState(false);
  const [loading, setLoading] = useState(false);

  const movement = async (level: OpponentLevel) => {
    try {
      setLoading(true);
      const rows = game.rows.reduce(
        (a, c) => (c ? (a = a + c) : (a = a + ' ')),
        ''
      );
      const { board } = await api.play({ board: rows, level: level });
      const newRow = board.split('');

      setGame({
        rows: newRow,
        squaresFilled: game.squaresFilled + 1,
        turn: Turn.opponnent
      });

    } catch (error) {
      setHasError(true);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    if (calculateWinner(game.rows) && game.squaresFilled < 9) {
      setState(State.Winner);
      setFinished(true);
    } else if (
      !finished &&
      game.turn === Turn.player &&
      game.squaresFilled < 9
    ) {
      movement(level);
    } else if (state === State.Playing && game.squaresFilled === 9) {
      setState(State.Draw);
      setFinished(true);
    }
  }, [game]);

  return {
    finished,
    game,
    loading,
    state,
    hasError,
    setGame,
    setFinished,
    setState
  };
};
