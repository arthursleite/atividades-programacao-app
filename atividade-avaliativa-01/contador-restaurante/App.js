import React, { useState } from 'react';
import { StyleSheet, Text, TouchableOpacity, View } from 'react-native';

const App = () => {
  const [numeroPessoas, setNumeroPessoas] = useState(0);

  const adicionarPessoa = () => {
    setNumeroPessoas(numeroAntigo => numeroAntigo + 1);
  }

  const removerPessoa = () => {
    if (numeroPessoas > 0) {
      setNumeroPessoas(numeroAntigo => Math.max(numeroAntigo - 1, 0));
    }
  }

  return (
    <View style={styles.container}>
      <Text style={styles.timerText}>
        Número de Pessoas
      </Text>
      <Text style={styles.timerText}>
        {numeroPessoas}
      </Text>
      <View style={styles.buttonContainer}>
        <TouchableOpacity onPress={adicionarPessoa} style={styles.button}><Text style={styles.buttonText}>Adicionar</Text></TouchableOpacity>
        <TouchableOpacity onPress={removerPessoa} style={styles.button}><Text style={styles.buttonText}>Remover</Text></TouchableOpacity>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f0f0f0',
    alignItems: 'center',
    justifyContent: 'center',
  },
  timerText: {
    fontSize: 64,
    fontWeight: 'bold',
    color: '#333',
    marginBottom: 30,
  },
  buttonContainer: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    width: '80%',
  },
  button: {
    margin: 10,
    padding: 15,
    backgroundColor: '#007bff',
    borderRadius: 10,
    elevation: 5,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.3,
    shadowRadius: 4,
  },
  buttonText: {
    color: '#fff',
    fontSize: 18,
    fontWeight: 'bold',
  },
});

export default App;
