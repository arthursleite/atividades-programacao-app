import React, { useState } from 'react';
import { SafeAreaView, StyleSheet, TextInput, Button, Text, StatusBar, Platform, Pressable } from 'react-native';

const App = () => {
  const [peso, setPeso] = useState('');
  const [altura, setAltura] = useState('');
  const [resultadoIMC, setResultadoIMC] = useState('');

  const calcularIMC = () => {
    let imc = parseFloat(peso.replace(',', '.')) / (parseFloat(altura.replace(',', '.')) * parseFloat(altura.replace(',', '.')));
    console.log(parseFloat(altura));
    setResultadoIMC(imc.toFixed(2));
  }

  return (
    <SafeAreaView style={styles.androidSafeArea}>
      <Text style={styles.titulo}>Calculadora de IMC</Text>
      <TextInput
        style={styles.input}
        onChangeText={setPeso}
        value={peso}
        placeholder="Insira seu peso"
        keyboardType="numeric"
      />
      <TextInput
        style={styles.input}
        onChangeText={setAltura}
        value={altura}
        placeholder="Insira sua altura"
        keyboardType="numeric"
      />
      <Pressable style={styles.botao} onPress={calcularIMC}>
        <Text style={styles.textoBotao}>Calcular</Text>
      </Pressable>
      <Text style={styles.resultado}>IMC: {resultadoIMC}</Text>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  input: {
    height: 50,
    margin: 12,
    borderWidth: 1,
    padding: 10,
    borderRadius: 10
  },
  titulo: {
    fontSize: 20,
    fontWeight: 'bold',
    textAlign: 'center',
  },
  androidSafeArea: {
    flex: 1,
    backgroundColor: 'white',
    paddingTop: Platform.OS === 'android' ? StatusBar.currentHeight : 0
  },
  resultado: {
    fontSize: 30,
    fontWeight: 'bold',
    textAlign: 'center',
    marginTop: 20
  },
  botao: {
    alignItems: 'center',
    justifyContent: 'center',
    paddingVertical: 12,
    paddingHorizontal: 32,
    borderRadius: 4,
    elevation: 3,
    backgroundColor: 'blue',
  },
  textoBotao : {
    fontSize: 20,
    color: 'white'
  }
});

export default App;