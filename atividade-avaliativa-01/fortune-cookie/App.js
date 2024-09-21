import React, { useState } from 'react';
import {
  StyleSheet,
  View,
  SafeAreaView,
  Text,
  Image,
  TouchableOpacity
} from 'react-native';

const Separator = () => <View style={styles.separator} />;

const frases = [
  'A vida trará coisas boas se tiveres paciência.',
  'Demonstre amor e alegria em todas as oportunidades e verás que a paz nasce dentro de você.',
  'Não compense na ira o que lhe falta na razão.',
  'Defeitos e virtudes são apenas dois lados da mesma moeda.',
  'A maior de todas as torres começa no solo.',
  'Não há que ser forte. Há que ser flexível.',
  'Gente todo dia arruma os cabelos, por que não o coração?',
  'Há três coisas que jamais voltam; a flecha lançada, a palavra dita e a oportunidade perdida.',
  'A juventude não é uma época da vida, é um estado de espírito.',
  'Podemos escolher o que semear, mas somos obrigados a colher o que plantamos.',
];

const App = () => {
  const [frase, setFrase] = useState('');
  const [isBiscoitoQuebrado, setIsBiscoitoQuebrado] = useState(false);

  const quebrarBiscoito = () => {
    if (!isBiscoitoQuebrado) {
      const indice = Math.floor(Math.random() * frases.length);
      setFrase(frases[indice]);
      setIsBiscoitoQuebrado(true);
    }
  };

  const resetarBiscoito = () => {
    setFrase('');
    setIsBiscoitoQuebrado(false);
  };

  return (
    <SafeAreaView style={styles.container}>
      <View>
        <Text style={styles.title}>
          Fortune Cookie
        </Text>
        <Separator />
        <Image
          source={isBiscoitoQuebrado ? { uri: 'https://cache.e-cards.com/images/area/chinese-new-year/open-cookie.png' } : { uri: 'https://cache.e-cards.com/images/area/chinese-new-year/closed-cookie.png' }}
          style={styles.image}
        />

        <Separator />
        {isBiscoitoQuebrado && <Text style={styles.fraseText}>{frase}</Text>}

        <Separator />
        {isBiscoitoQuebrado && (
          <TouchableOpacity onPress={resetarBiscoito} style={styles.button}>
            <Text style={styles.buttonText}>Tentar novamente</Text>
          </TouchableOpacity>
        )}

        {!isBiscoitoQuebrado && (
          <TouchableOpacity onPress={quebrarBiscoito} style={styles.button}>
            <Text style={styles.buttonText}>Clique aqui para abrir o biscoito</Text>
          </TouchableOpacity>
        )}
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    marginHorizontal: 16,
  },
  title: {
    textAlign: 'center',
    marginVertical: 8,
  },
  separator: {
    marginVertical: 8,
    borderBottomColor: '#737373',
    borderBottomWidth: StyleSheet.hairlineWidth,
  },
  image: {
    width: 100,
    height: 100,
    alignSelf: 'center',
  },
  fraseText: {
    textAlign: 'center',
    fontSize: 16,
    marginVertical: 8,
  },
  button: {
    backgroundColor: '#2196F3',
    padding: 10,
    borderRadius: 5,
    alignItems: 'center',
    marginHorizontal: 50,
  },
  buttonText: {
    color: '#fff',
    fontSize: 16,
  },
});

export default App;
