import React, { FC, useState } from 'react';
import { TextInput, SafeAreaView, StyleSheet, Button, Text } from 'react-native';

interface Props {
  setUserName: (name: string) => void;
}

export const UserScreen: FC<Props> = ({ setUserName }) => {
  const [user, setUser] = useState<string>('');
  const onNameChange = (name: string) => {
    setUser(name);
  }
  return (
  <SafeAreaView style={styles.container}>
    <Text style={styles.text}>Insira um nome</Text>
    <TextInput style={styles.input} onChangeText={onNameChange} value={user} />
    <Button onPress={() => setUserName(user)} title="Pronto" />
  </SafeAreaView>
  )
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center'
  },
  text: {
    fontSize: 30,
    fontWeight: 'bold'
  },
  input: {
    fontSize: 20,
    borderWidth: 2,
    width: 250,
    height: 36,
    borderColor: 'grey',
    borderRadius: 4,
    padding: 4,
    marginBottom: 10,
  }
});
