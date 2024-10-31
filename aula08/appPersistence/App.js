import { useState, useEffect } from 'react';
import { StyleSheet, Text, View, Platform, Button, SafeAreaView, TextInput } from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';

export default function App() {

  const [input, setInput] = useState('');
  const [name, setName] = useState('');

  useEffect(() => {
    loadData()
  }, []);

  async function loadData() {
    await AsyncStorage.getItem('@name').then((value) => {
      setName(value)
    })
  }

  async function addName() {
    await AsyncStorage.setItem('@name', input);
    setName(input);
    console.log('dentro da funcao' + name);
    setInput('');
  }
  { console.log(name) }
  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.innerContainer}>
        <TextInput
          style={styles.inputTxt}
          placeholder={'Type your name'}
          onChangeText={(value) => setInput(value)}
        />
        <Button
          title='+'
          onPress={() => addName()}
        />
      </View>
      <Text style={styles.txtName}>{name}</Text>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    backgroundColor: 'white',
    paddingTop: Platform.OS === 'android' ? StatusBar.currentHeight : 0,
  },
  innerContainer: {
    flexDirection: 'row',
    alignItems: 'center'
  },
  txtForm: {
    flexDirection: 'row',
    alignItems: 'center'
  },
  inputTxt: {
    borderWidth: 1,
    width: 350,
    padding: 10,
    borderRadius: 50
  },
  txtName: {
    marginTop: 20,
    padding: 30
  }
});
