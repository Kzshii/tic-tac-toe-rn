import React, { useState } from 'react';
import { UserScreen, GameScreen } from './src/pages';
import { User } from './src/types/user';
import { SafeAreaView, View, Text } from 'react-native';

export default function App() {
  // const [users, setUsers] = useState<User[]>([]);
  // const [userSelected, setUserSelected] = useState<User|undefined>();

  // const onChangeUser = (name: string) => {
  //   const existentUser = users.findIndex(user => user.name, name);
  //   if (existentUser !== -1) {
  //     setUserSelected(users[existentUser]);
  //   } else {
  //     setUsers([...users, new User({ name: name })]);
  //     setUserSelected(new User({ name: name }));
  //   }
  // };
  // console.log(users, userSelected);
  // if (users.length > 0 && !userSelected) {
  //   <SafeAreaView>
  //     <View>
  //       <Text>Selecione o jogador: </Text>
  //     </View>
  //   </SafeAreaView>
  // }
  // else if (userSelected && userSelected.name !== '') {
  //   return <GameScreen />;
  // }
  // return <UserScreen setUserName={onChangeUser} />;
  const [user, setUser] = useState<User>();
  const [oponent, setOponent] = useState<User>(new User({ name: 'comp' }));

  const onChangeUser = (name: string) => {
    setUser(new User({ name: name }));
  };
  if (!!user) {
    return <GameScreen setWinner={() => console.log('calma')} user={user} oponent={oponent}/>;
  }
  return <UserScreen setUserName={onChangeUser} />;
};
