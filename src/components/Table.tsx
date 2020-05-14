import React, { FC, useState } from 'react';
import { SafeAreaView, StyleSheet, View, FlatList, Button } from 'react-native';
import { Square } from './Square';

interface Props {
  game: string[];
  disabled: boolean;
  onSquareClick: (value: string, key: number) => void;
}

export const Table: FC<Props> = ({ game, disabled, onSquareClick }) => (
  <FlatList
    data={game}
    style={styles.content}
    scrollEnabled={false}
    keyExtractor={(_, idx) => idx.toString()}
    numColumns={3}
    renderItem={(key) => (
      <View>
        <Square
          style={key.item === 'X' ? { color: 'red' } : { color: 'green' }}
          disabled={disabled}
          onPress={(value) => onSquareClick(value, key.index)}
          value={key.item}
        />
      </View>
    )}
  />
);

const styles = StyleSheet.create({
  content: {
    marginTop: 100
  }
});
