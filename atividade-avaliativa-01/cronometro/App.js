import React, { useEffect, useState } from 'react';
import { StyleSheet, Text, TouchableOpacity, View } from 'react-native';

const App = () => {
  const [tempo, setTempo] = useState(0);
  const [isRodando, setIsRodando] = useState(false);

  useEffect(() => {
    let interval = null;
    if (isRodando) {
      interval = setInterval(() => {
        setTempo(prevTempo => prevTempo + 100); // Incrementa 100 ms (0.1s)
      }, 100); // Atualiza a cada 100 ms
    } else {
      clearInterval(interval);
    }
    return () => clearInterval(interval);
  }, [isRodando]);

  const formatarTempo = (tempo) => {
    const minutes = Math.floor(tempo / 60000);
    const seconds = Math.floor((tempo % 60000) / 1000);
    const milliseconds = Math.floor((tempo % 1000) / 10);

    return `${String(minutes).padStart(2, '0')}:${String(seconds).padStart(2, '0')},${String(milliseconds).padStart(2, '0')}`;
  };

  const comecarCronometro = () => {
    setIsRodando(true);
  };

  const pararCronometro = () => {
    setIsRodando(false);
  };

  const zerarCronometro = () => {
    setIsRodando(false);
    setTempo(0);
  };

  return (
    <View style={styles.container}>
      <Text style={styles.timerText}>
        {formatarTempo(tempo)}
      </Text>
      <View style={styles.buttonContainer}>
        <TouchableOpacity onPress={comecarCronometro} style={styles.button}><Text style={styles.buttonText}>Começar</Text></TouchableOpacity>
        <TouchableOpacity onPress={pararCronometro} style={styles.button}><Text style={styles.buttonText}>Parar</Text></TouchableOpacity>
        <TouchableOpacity onPress={zerarCronometro} style={styles.button}><Text style={styles.buttonText}>Zerar</Text></TouchableOpacity>
      </View>
    </View>
  );
};

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
