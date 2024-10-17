import React, { useState, useEffect } from 'react';
import { SafeAreaView, StyleSheet, Text, StatusBar, Platform, TouchableOpacity, View, Image } from 'react-native';

const imagens = [
  require('./assets/user-pedra.png'),
  require('./assets/user-papel.png'),
  require('./assets/user-tesoura.png'),
  require('./assets/cpu-pedra.png'),
  require('./assets/cpu-papel.png'),
  require('./assets/cpu-tesoura.png')
];

const App = () => {
  const [opcaoCPU, setOpcaoCPU] = useState('');
  const [opcaoUser, setOpcaoUser] = useState('');
  const [vencedor, setVencedor] = useState('');

  const definirOpcaoUser = (opcao) => {
    setOpcaoUser(opcao);
  };

  const definirOpcaoCPU = () => {
    const opcoes = ['pedra', 'papel', 'tesoura'];
    const opcao = opcoes[Math.floor(Math.random() * opcoes.length)];
    setOpcaoCPU(opcao);
  };

  useEffect(() => {
    if (opcaoUser && opcaoCPU) {
      definirVencedor();
    }
  }, [opcaoUser, opcaoCPU]);

  const definirVencedor = () => {
    if (opcaoUser === 'pedra' && opcaoCPU === 'tesoura') {
      setVencedor('user');
    } else if (opcaoUser === 'tesoura' && opcaoCPU === 'papel') {
      setVencedor('user');
    } else if (opcaoUser === 'papel' && opcaoCPU === 'pedra') {
      setVencedor('user');
    } else if (opcaoCPU === 'pedra' && opcaoUser === 'tesoura') {
      setVencedor('CPU');
    } else if (opcaoCPU === 'tesoura' && opcaoUser === 'papel') {
      setVencedor('CPU');
    } else if (opcaoCPU === 'papel' && opcaoUser === 'pedra') {
      setVencedor('CPU');
    } else {
      setVencedor('empate');
    }
  };

  const rodarJogo = (opcaoUserParam) => {
    definirOpcaoUser(opcaoUserParam);
    definirOpcaoCPU();
  };

  const Resultado = () => {
    if (vencedor === 'user') {
      return <Text style={styles.resultado}>Você ganhou!</Text>;
    } else if (vencedor === 'CPU') {
      return <Text style={styles.resultado}>Você perdeu!</Text>;
    } else {
      return <Text style={styles.resultado}>Empate!</Text>;
    }
  };

  const ImagemCPU = () => {
    if (opcaoCPU === 'pedra') {
      return <Image source={imagens[3]} style={styles.imagemResultado} />;
    } else if (opcaoCPU === 'papel') {
      return <Image source={imagens[4]} style={styles.imagemResultado} />;
    } else if (opcaoCPU === 'tesoura') {
      return <Image source={imagens[5]} style={styles.imagemResultado} />;
    } else {
      return null; // Não exibir imagem enquanto não houver escolha
    }
  };

  const ImagemUser = () => {
    if (opcaoUser === 'pedra') {
      return <Image source={imagens[0]} style={styles.imagemResultado} />;
    } else if (opcaoUser === 'papel') {
      return <Image source={imagens[1]} style={styles.imagemResultado} />;
    } else if (opcaoUser === 'tesoura') {
      return <Image source={imagens[2]} style={styles.imagemResultado} />;
    } else {
      return null; // Não exibir imagem enquanto não houver escolha
    }
  };

  return (
    <SafeAreaView style={styles.androidSafeArea}>
      <Text style={styles.titulo}>Pedra, Papel e Tesoura</Text>
      <View>
        <View style={styles.containerResultadoCPU}>
          <ImagemCPU />
        </View>
        <View style={styles.containerResultadoUser}>
          <ImagemUser />
        </View>
      </View>
      <Resultado />
      <Text style={styles.enunciado}>Escolha uma opção:</Text>
      <View style={styles.containerBotoes}>
        <TouchableOpacity style={styles.botao} onPress={() => rodarJogo('pedra')}>
          <Image
            source={require('./assets/user-pedra.png')}
            style={styles.imagemBotao}
          />
        </TouchableOpacity>
        <TouchableOpacity style={styles.botao} onPress={() => rodarJogo('papel')}>
          <Image
            source={require('./assets/user-papel.png')}
            style={styles.imagemBotao}
          />
        </TouchableOpacity>
        <TouchableOpacity style={styles.botao} onPress={() => rodarJogo('tesoura')}>
          <Image
            source={require('./assets/user-tesoura.png')}
            style={styles.imagemBotao}
          />
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
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
    width: 220,
    height: 150,
    alignSelf: 'center',
    margin: 10
  },
  containerResultadoCPU: {
    flexDirection: 'row',
    justifyContent: 'flex-end',
  },
  containerResultadoUser: {
    flexDirection: 'row',
    justifyContent: 'flex-start'
  },
  resultado: {
    fontSize: 38,
    fontWeight: 'bold',
    textAlign: 'center',
    marginTop: 20
  }
});

export default App;
