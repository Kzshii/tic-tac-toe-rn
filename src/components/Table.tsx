import React, {FC, useState} from 'react'
import { SafeAreaView, StyleSheet, View, FlatList, Button } from 'react-native';
import { KeyInput } from './KeyInput';
import { useGame, GameState } from '../hooks/useGame';
import { User } from '../types';

interface Props {
  setWinner: (player: User) => void;
}

const initialState = { gameCount: 0, rows: ['', '', '', '', '', '', '', '', '']};

export const Table: FC<Props> = ({ setWinner }) => {
  const [game, setGame] = useState<GameState>(initialState);
  const { finished } = useGame(game);

  const onPress = (value: string, key: number) => {
    if (value === '') {
      const clonedRows = [...game.rows];
      clonedRows.splice(key, 1, 'X');
      setGame({ gameCount: game.gameCount + 1, rows: clonedRows })
    }
  }

  return (
    <SafeAreaView style={styles.container}>
      <FlatList
        data={game.rows}
        keyExtractor={(_, idx) => idx.toString()}
        numColumns={3}
        renderItem={(key) => (
          <View style={[styles.input ]}>
            <KeyInput disabled={finished} onPress={(value) => onPress(value, key.index)} value={key.item}/>
          </View>
        )}
      />
      <Button onPress={() => console.log('oi')} title="Começar de novo"/>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  input: {
    
  },
});