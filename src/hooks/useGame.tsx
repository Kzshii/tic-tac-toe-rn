import React, { useState, useEffect } from 'react';
import { calculateWinner } from '../utils/calculateWinner';

export interface GameState {
  gameCount: number;
  rows: string[];
}

interface ReactHookState {
  finished: boolean;
}

export const useGame = (game: GameState): ReactHookState => {
  const [finished, setFinished] = useState(false);

  useEffect(() => {
    if (calculateWinner(game.rows)) {
      setFinished(true);
    }
  }, [game.rows]);
  
  return { finished };
}