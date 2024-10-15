import React, { useState } from 'react';
import { SafeAreaView, StyleSheet, TextInput, Text, StatusBar, Platform, Pressable, View, Image } from 'react-native';

const imagens = [
  require('./assets/user-pedra.png'),
  require('./assets/user-papel.png'),
  require('./assets/user-tesoura.png'),
  require('./assets/cpu-pedra.png'),
  require('./assets/cpu-papel.png'),
  require('./assets/cpu-tesoura.png')
]

const App = () => {
  const [opcaoCPU, setOpcaoCPU] = useState('');
  const [opcaoUser, setOpcaoUser] = useState('');

  const definirOpcaoCPU = () => {
    const opcoes = ['pedra', 'papel', 'tesoura'];
    const opcao = opcoes[Math.floor(Math.random() * opcoes.length)];
    setTimeout(() => {
      setOpcaoCPU(opcao);
    }, 1000);
  };

  const definirOpcaoUser = (opcao) => {
    switch (opcao) {
      case 'pedra':
        setOpcaoUser(opcao);
        break;
      case 'papel':
        setOpcaoUser(opcao);
        break;
      case 'tesoura':
        setOpcaoUser(opcao);
        break;
      default:
        'Opção inválida';
        break;
    }
    
    definirOpcaoCPU();
  };

  return (
    <SafeAreaView style={styles.androidSafeArea}>
      <Text style={styles.titulo}>Pedra, Papel e Tesoura</Text>
      <View>
        <View style={styles.containerResultadoCPU}>
          <Image
            source={require('./assets/cpu-pedra.png')}
            style={styles.imagemResultado}
          />
        </View>
        <View style={styles.containerResultadoUser}>
          <Image
            source={require('./assets/user-papel.png')}
            style={styles.imagemResultado}
          />
        </View>
      </View>
      <Text style={styles.enunciado}>Escolha uma opção:</Text>
      <View style={styles.containerBotoes}>
        <Pressable style={styles.botao} onPress={() => definirOpcaoUser('pedra')}>
          <Image
            source={require('./assets/user-pedra.png')}
            style={styles.imagemBotao}
          />
        </Pressable>
        <Pressable style={styles.botao} onPress={() => definirOpcaoUser('papel')}>
          <Image
            source={require('./assets/user-papel.png')}
            style={styles.imagemBotao}
          />
        </Pressable>
        <Pressable style={styles.botao} onPress={() => definirOpcaoUser('tesoura')}>
          <Image
            source={require('./assets/user-tesoura.png')}
            style={styles.imagemBotao}
          />
        </Pressable>
      </View>
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
    fontSize: 25,
    fontWeight: 'bold',
    textAlign: 'center',
  },
  androidSafeArea: {
    flex: 1,
    backgroundColor: 'white',
    paddingTop: Platform.OS === 'android' ? StatusBar.currentHeight : 0
  },
  enunciado: {
    fontSize: 22,
    fontWeight: 'bold',
    textAlign: 'center',
    marginTop: 20
  },
  botao: {
    alignItems: 'center',
    justifyContent: 'center',
    paddingVertical: 12,
    paddingHorizontal: 32,
    borderRadius: 6,
    elevation: 3,
    backgroundColor: 'blue',
  },
  textoBotao: {
    fontSize: 20,
    color: 'white'
  },
  imagemBotao: {
    width: 40,
    height: 30,
    alignSelf: 'center',
  },
  containerBotoes: {
    flexDirection: 'row',
    justifyContent: 'space-evenly',
    marginTop: 20,
  },
  imagemResultado: {
    width: 240,
    height: 200,
    alignSelf: 'center',
  },
  containerResultadoCPU: {
    flexDirection: 'row',
    justifyContent: 'flex-end'
  },
  containerResultadoUser: {
    flexDirection: 'row',
    justifyContent: 'flex-start'
  }
});

export default App;