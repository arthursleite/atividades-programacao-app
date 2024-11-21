import { SafeAreaView, StyleSheet, Text, View, Button, TextInput } from 'react-native';
import { db } from './firebaseConfig';
import { getDoc, doc, onSnapshot, addDoc, collection } from 'firebase/firestore';
import { useEffect, useState } from 'react';

export default function App() {

  const [name, setName] = useState('Loading...');
  const {inputName, setInputName} = useState('');
  useEffect(() => {
    async function loadData() {
      // const docRef = doc(db, 'users', '1');
      // getDoc(docRef).then((doc) => {
      //   setName(doc.data().nome);
      // });
      onSnapshot(doc(db, 'users', '1'), (doc) => {
        setName(doc.data()?.nome);
      });
    }
    loadData();
  }, []);

  async function saveData() {
    await addDoc(collection(db, 'users'), {
      nome: 'Jonas',
      cargo: 'Analista'
    });
  }

  return (
    <SafeAreaView style={styles.container}>
      <Text style={styles.text}>{name}</Text>
      <TextInput
        style={styles.input}
        onChangeText={setInputName}
        value={inputName}
        placeholder="Type your name"
      />
      <Button title="Add user" onPress={saveData} />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  text: {
    fontSize: 30,
  },
  input: {
    height: 40,
    borderColor: 'gray',
    borderWidth: 1,
    paddingHorizontal: 10,
    marginVertical: 10,
    width: '80%',
  },
});