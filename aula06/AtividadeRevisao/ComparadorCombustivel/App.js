import React, { useState } from 'react';
import { SafeAreaView, StyleSheet, TextInput, Text, StatusBar, Platform, Pressable, View, Image } from 'react-native';

const imagens = [
  require('./assets/gasolina.png'),
  require('./assets/etanol.png')
]

const Resultado = ({ resultado, imagem }) => {
  return (
    <View>
      <Text style={styles.resultado}>{resultado || "Resultado indisponível"}</Text>
      <Image source={imagem} style={styles.imagem} />
    </View>
  );
};

const App = () => {
  const [precoAlcool, setPrecoAlcool] = useState('');
  const [precoGasolina, setPrecoGasolina] = useState('');
  const [resultado, setResultado] = useState('');
  const [imagem, setImagem] = useState(0);

  const calcularPreco = () => {
    if (precoAlcool === '' || precoGasolina === '') {
      setResultado('Preencha os campos corretamente');
      return;
    }

    const precoAlcoolFormatado = parseFloat(precoAlcool.replace(',', '.'));
    const precoGasolinaFormatado = parseFloat(precoGasolina.replace(',', '.'));

    const resultadoFinal = precoAlcoolFormatado / precoGasolinaFormatado;

    if (resultadoFinal < 0.7) {
      setResultado('Abasteça com álcool');
      setImagem(imagens[1]);
    } else {
      setResultado('Abasteça com gasolina');
      setImagem(imagens[0]);
    }
  };

  return (
    <SafeAreaView style={styles.androidSafeArea}>
      <Text style={styles.titulo}>Comparador de Combustível</Text>
      <TextInput
        style={styles.input}
        onChangeText={setPrecoAlcool}
        value={precoAlcool}
        placeholder="Insira o preço do álcool"
        keyboardType="numeric"
      />
      <TextInput
        style={styles.input}
        onChangeText={setPrecoGasolina}
        value={precoGasolina}
        placeholder="Insira o preço da gasolina"
        keyboardType="numeric"
      />
      <Pressable style={styles.botao} onPress={calcularPreco}>
        <Text style={styles.textoBotao}>Calcular</Text>
      </Pressable>
      {resultado !== '' && (
        <Resultado resultado={resultado} imagem={imagem} />
      )}
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
  textoBotao: {
    fontSize: 20,
    color: 'white'
  },
  imagem: {
    width: 200,
    height: 200,
    alignSelf: 'center',
    marginBottom: 20
  }
});

export default App;