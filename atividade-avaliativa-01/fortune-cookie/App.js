import React, { useState } from 'react';
import { StyleSheet, Text, View, Image, TouchableOpacity } from 'react-native';

// Frases de sorte
const fortunes = [
  "A sorte está ao seu lado hoje!",
  "Grandes mudanças estão por vir.",
  "Sucesso está no seu caminho.",
  "Você terá uma surpresa agradável.",
  "A felicidade está à sua porta.",
  "Confie em si mesmo e você será imbatível.",
];

export default function App() {
  const [isCookieBroken, setIsCookieBroken] = useState(false);
  const [fortune, setFortune] = useState('');

  const quebrarBiscoito = () => {
    if (!isCookieBroken) {
      const randomFortune = fortunes[Math.floor(Math.random() * fortunes.length)];
      setFortune(randomFortune);
      setIsCookieBroken(true);
    }
  };

  const resetarBiscoito = () => {
    setIsCookieBroken(false);
    setFortune('');
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Fortune Cookie</Text>
      <TouchableOpacity onPress={quebrarBiscoito}>
        <Image
          source={
            isCookieBroken
              ? require('./assets/open-cookie.png')
              : require('./assets/closed-cookie.png')
          }
          style={styles.cookieImage}
        />
      </TouchableOpacity>
      {isCookieBroken && <Text style={styles.fortuneText}>{fortune}</Text>}
      {isCookieBroken && (
        <TouchableOpacity onPress={resetarBiscoito} style={styles.resetButton}>
          <Text style={styles.resetButtonText}>Tentar Novamente</Text>
        </TouchableOpacity>
      )}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#f0f0f0',
  },
  title: {
    fontSize: 24,
    marginBottom: 20,
    fontWeight: 'bold',
  },
  cookieImage: {
    width: 250,
    height: 250,
    marginBottom: 20,
  },
  fortuneText: {
    fontSize: 18,
    marginBottom: 20,
    textAlign: 'center',
    paddingHorizontal: 20,
    color: '#555',
  },
  resetButton: {
    backgroundColor: '#ffcc00',
    paddingVertical: 10,
    paddingHorizontal: 20,
    borderRadius: 5,
  },
  resetButtonText: {
    fontSize: 16,
    fontWeight: 'bold',
    color: '#fff',
  },
});