import React, { FC, useState } from 'react';
import { SafeAreaView, StyleSheet, View, FlatList, Button } from 'react-native';
import { Square } from './Square';

interface Props {
  game: string[];
  finished: boolean;
  onSquareClick: (value: string, key: number) => void;
  onRestart: () => void;
}

export const Table: FC<Props> = ({
  game,
  finished,
  onSquareClick,
  onRestart
}) => (
  <SafeAreaView style={styles.container}>
    <FlatList
      data={game}
      keyExtractor={(_, idx) => idx.toString()}
      numColumns={3}
      renderItem={(key) => (
        <View style={[styles.input]}>
          <Square
            disabled={finished}
            onPress={(value) => onSquareClick(value, key.index)}
            value={key.item}
          />
        </View>
      )}
    />
    <Button onPress={onRestart} title="Começar de novo" />
  </SafeAreaView>
);

const styles = StyleSheet.create({
  container: {
    flex: 1
  },
  input: {}
});
