import { useState, useEffect } from 'react';
import { calculateWinner } from '../utils/calculateWinner';

interface GameState {
  turn: Turn;
  gameCount: number;
  rows: string[];
}

interface ReactHookState {
  finished: boolean;
  setGame: (game: GameState) => void;
  game: GameState;
}

export enum Turn {
  player,
  opponnent
}

export enum OpponentLvl {
  Easy,
  Medium,
  Hard,
  Expert
}

export const initialState = {
  turn: Turn.player,
  gameCount: 0,
  rows: ['', '', '', '', '', '', '', '', '']
};

export const useGame = (level: OpponentLvl): ReactHookState => {
  const [game, setGame] = useState<GameState>(initialState);
  const [finished, setFinished] = useState(false);

  const movementLevel = (level: OpponentLvl) => {
    switch (level) {
      case OpponentLvl.Easy:
        const clonedRows = [...game.rows];
        const firstAvailableSquare = clonedRows.findIndex((x) => x === '');
        clonedRows.splice(firstAvailableSquare, 1, 'O');
        setGame({
          turn: Turn.player,
          gameCount: game.gameCount + 1,
          rows: clonedRows
        });
        break;

      default:
        break;
    }
  };

  useEffect(() => {
    if (calculateWinner(game.rows)) {
      setFinished(true);
    } else if (!finished && game.turn === Turn.opponnent) {
      movementLevel(level);
    }

    return () => {
      setFinished(false);
    };
  }, [game]);

  return { finished, game, setGame };
};
