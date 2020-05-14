import React, { FC, useState } from 'react';
import {
  TextInput,
  SafeAreaView,
  StyleSheet,
  Button,
  Text,
  View,
  Picker,
  Image
} from 'react-native';
import { OpponentLevel } from '../types';

interface Props {
  level: OpponentLevel;
  userName: string;
  onFinish: (userName: string, level: OpponentLevel) => void;
}

export const UserScreen: FC<Props> = ({ userName, onFinish, level }) => {
  const [user, setUser] = useState<string>(userName);
  const [currentLevel, setLevel] = useState(level);
  const onNameChange = (name: string) => {
    setUser(name);
  };
  return (
    <SafeAreaView style={{ flex: 1 }}>
      <View style={styles.container}>
        <Image
          style={styles.logo}
          source={require('../../assets/images/tic-tac-toe.png')}
        />
        <Text style={styles.text}>Insira um nome</Text>
        <TextInput
          style={styles.input}
          onChangeText={onNameChange}
          value={user}
        />
        <Picker
          selectedValue={currentLevel}
          style={styles.picker}
          onValueChange={(value) => setLevel(value as OpponentLevel)}
        >
          <Picker.Item label="Fácil" value={OpponentLevel.Easy} />
          <Picker.Item label="Médio" value={OpponentLevel.Medium} />
          <Picker.Item label="Difícil" value={OpponentLevel.Hard} />
          <Picker.Item label="Muito difícil" value={OpponentLevel.Expert} />
        </Picker>
      </View>
      <Button onPress={() => onFinish(user, currentLevel)} title="Pronto" />
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center'
  },
  logo: {
    width: 200,
    height: 200,
    top: -50
  },
  text: {
    fontSize: 30,
    fontWeight: 'bold'
  },
  input: {
    fontSize: 20,
    fontWeight: 'bold',
    borderWidth: 2,
    width: 250,
    height: 36,
    borderColor: 'grey',
    borderRadius: 4,
    padding: 4,
    marginBottom: 10,
    textAlign: 'center'
  },
  picker: {
    height: 50,
    width: 250
  }
});
