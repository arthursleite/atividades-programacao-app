import React, { useState } from 'react';
import { SafeAreaView, StyleSheet, TextInput, Button, Text, View } from 'react-native';

const App = () => {
  const [peso, setPeso] = useState('');
  const [altura, setAltura] = useState('');
  const [resultadoIMC, setResultadoIMC] = useState('');

  const calcularIMC = () => {
    let imc = parseFloat(peso.replace(',', '.')) / (parseFloat(altura.replace(',', '.')) * parseFloat(altura.replace(',', '.')));
    console.log(parseFloat(altura))
    setResultadoIMC(imc.toFixed(2));
  }

  return (
    <SafeAreaView>
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
      <Button
        onPress={calcularIMC}
        title="Calcular"
      />
      <Text>{resultadoIMC}</Text>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  input: {
    height: 40,
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
});

export default App;