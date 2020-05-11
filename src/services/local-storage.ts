import AsyncStorage from '@react-native-community/async-storage';

const token = 'ck9x6x63f000001l33yvh5m5t';

const localStorage = async () => {
  try {
    await AsyncStorage.setItem('Token', token);
  } catch (e) {
    // saving error
  }
}