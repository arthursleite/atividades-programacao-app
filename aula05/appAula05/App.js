import Slider from '@react-native-community/slider'
import { Picker } from '@react-native-picker/picker'
import { useState } from 'react'
import { Button, View, Text, SafeAreaView, StyleSheet, Switch } from 'react-native'

function App() {
  const [produtoSelecionado, setProdutoSelecionado] = useState(0)
  const [produtos, setProdutos] = useState([
    { key: 1, nome: 'Claro' },
    { key: 2, nome: 'Escuro' },
    { key: 3, nome: 'Automático' },
  ])

  const [value, setValue] = useState(0)
  const [isOn, setIsOn] = useState(false)

  let produtosItem = produtos.map((value, key) => {
    return (
      <Picker.Item
        key={key}
        value={key}
        label={value.nome}
      />
    );
  });

  function resetarOpcoes() {
    setProdutoSelecionado(0)
    setValue(16)
    setIsOn(false)
  }

  return (
    <SafeAreaView style={styles.containerPrincipal}>
      <View style={styles.container}>
        <Text style={styles.text}>Configurações de Preferências</Text>

        <Text style={styles.text}>Tema</Text>
        <Picker
          selectedValue={produtoSelecionado}
          onValueChange={(item) => setProdutoSelecionado(item)}
          style={styles.text}
        >
          {produtosItem}
        </Picker>
        <Text style={styles.text}>{'Tema: ' + produtos[produtoSelecionado].nome}</Text>

        <Text style={styles.text}>Tamanho da fonte</Text>
        <Slider
          minimumValue={12}
          maximumValue={30}
          value={value}
          onValueChange={(value) => setValue(value)}
          style={{ width: '100%', marginBottom: 20 }}
        />
        <Text style={styles.text}>{value.toFixed()}</Text>

        <Text style={styles.text}>Switch</Text>
        <Switch
          value={isOn}
          onValueChange={(value) => setIsOn(value)}
          style={styles.text}
        />
        <Text style={styles.text}>{isOn ? 'Ativado' : 'Desativado'}</Text>

        <Button
          title="Resetar"
          onPress={resetarOpcoes}
        />
      </View>
    </SafeAreaView>
  )
}

const styles = StyleSheet.create({
  containerPrincipal: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  container: {
    width: '90%',
    padding: 20,
    borderRadius: 10,
    backgroundColor: '#f0f0f0',
    alignItems: 'center'
  },
  text: {
    fontSize: 24,
    marginBottom: 20
  }
})

export default App