import React, { useState } from 'react';
import { SafeAreaView, StyleSheet, TextInput, Text, StatusBar, Platform, Pressable, View } from 'react-native';

const Classificacao = ({ classificacaoIMC }) => {
  console.log("ClassificacaoIMC no componente:", classificacaoIMC);
  return (
    <View>
      <Text style={styles.resultado}>{classificacaoIMC || "Sem classificação"}</Text>
    </View>
  );
};

const App = () => {
  const [peso, setPeso] = useState('');
  const [altura, setAltura] = useState('');
  const [resultadoIMC, setResultadoIMC] = useState('');
  const [classificacaoIMC, setClassificacaoIMC] = useState('');
  const [triggerRender, setTriggerRender] = useState(false);
  console.log("ClassificacaoIMC no App:", classificacaoIMC);

  const calcularIMC = () => {
    console.log("Peso:", peso);
    console.log("Altura:", altura);

    let imc = parseFloat(peso.replace(',', '.')) / (parseFloat(altura.replace(',', '.')) * parseFloat(altura.replace(',', '.')));
    console.log("IMC calculado:", imc);

    setResultadoIMC(imc.toFixed(2));
    console.log('ResultadoIMC atualizado:', resultadoIMC);

    let classificacao = '';
    if (imc < 18.5) {
      classificacao = 'Abaixo do peso';
    } else if (imc >= 18.5 && imc < 24.9) {
      classificacao = 'Peso normal';
    } else if (imc >= 25 && imc < 29.9) {
      classificacao = 'Sobrepeso';
    } else if (imc >= 30 && imc < 34.9) {
      classificacao = 'Obesidade grau 1';
    } else if (imc >= 35 && imc < 39.9) {
      classificacao = 'Obesidade grau 2';
    } else {
      classificacao = 'Obesidade grau 3';
    }

    console.log("Classificação:", classificacao);
    setClassificacaoIMC(classificacao);
    console.log('ClassificacaoIMC atualizada:', classificacaoIMC); // Adicione este console.log
    setTriggerRender(!triggerRender);
  };


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
      {resultadoIMC !== '' && (
        <Classificacao classificacaoIMC={classificacaoIMC} />
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
  }
});

export default App;