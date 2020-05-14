import React, { useState } from 'react';
import { UserScreen, GameScreen } from './src/pages';
import { User } from './src/types/user';
import { OpponentLevel, Turn } from './src/types';

export default function App() {
  const [user, setUser] = useState<User>(new User());
  const [level, setLevel] = useState<{
    level: OpponentLevel;
    selected: boolean;
  }>({ level: OpponentLevel.Medium, selected: true });
  const [opponent, setOpponent] = useState<User>(
    new User({ name: 'Computador' })
  );

  const onHandleWinner = (player: Turn) => {
    if (player === Turn.opponnent) {
      setOpponent({ ...opponent, points: opponent.points + 1 });
    } else {
      setUser({ ...user, points: user.points + 1 });
    }
  };

  const resetLevel = () => {
    setLevel({ level: level.level, selected: false });
    setOpponent(new User({ name: 'Computador' }))
  };

  const onFinish = (userName: string, level: OpponentLevel) => {
    setLevel({ level: level, selected: true });
    setUser(new User({ name: userName }));
  };

  if (!!user.name && level.selected) {
    return (
      <GameScreen
        setWinner={onHandleWinner}
        onChangeLevel={resetLevel}
        user={user}
        level={level.level}
        opponent={opponent}
      />
    );
  }
  return (
    <UserScreen userName={user.name} onFinish={onFinish} level={level.level} />
  );
}
