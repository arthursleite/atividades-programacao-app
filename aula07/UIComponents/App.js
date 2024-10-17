import { StyleSheet, Text, View, SafeAreaView, Platform, Image, TouchableOpacity } from 'react-native';

export default function App() {
  return (
    <SafeAreaView style={styles.androidSafeArea}>

      <View style={styles.containerBotoesSuperiores}>
        <TouchableOpacity>
          <Image
            source={require('./assets/azul.jpg')}
            style={styles.botoesSuperiores}
          />
        </TouchableOpacity>
        <TouchableOpacity>
          <Image
            source={require('./assets/azul.jpg')}
            style={styles.botoesSuperiores}
          />
        </TouchableOpacity>
        <TouchableOpacity>
          <Image
            source={require('./assets/azul.jpg')}
            style={styles.botoesSuperiores}
          />
        </TouchableOpacity>
        <TouchableOpacity>
          <Image
            source={require('./assets/azul.jpg')}
            style={styles.botoesSuperiores}
          />
        </TouchableOpacity>
        <TouchableOpacity>
          <Image
            source={require('./assets/azul.jpg')}
            style={styles.botoesSuperiores}
          />
        </TouchableOpacity>
      </View>

      <View style={styles.containerImagemCentral}>
        <Image
          source={require('./assets/bussola.jpg')}
          style={styles.imagemCentral}
        />
        <TouchableOpacity>
          <Image
            source={require('./assets/azul.jpg')}
            style={styles.botoesImagem1}
          />
        </TouchableOpacity>
        <TouchableOpacity>
          <Image
            source={require('./assets/azul.jpg')}
            style={styles.botoesImagem2}
          />
        </TouchableOpacity>
        <TouchableOpacity>
          <Image
            source={require('./assets/azul.jpg')}
            style={styles.botoesImagem3}
          />
        </TouchableOpacity>
      </View>

      <View>
        <View style={styles.containerTituloCards}>
          <Text style={styles.tituloCards}>Design</Text>
          <TouchableOpacity>
            <Image
              source={require('./assets/azul.jpg')}
              style={styles.botaoTituloCard}
            />
          </TouchableOpacity>
        </View>
        <View style={styles.containerCards}>
          <Image
            source={require('./assets/azul.jpg')}
            style={styles.card}
          />
          <Image
            source={require('./assets/azul.jpg')}
            style={styles.card}
          />
          <Image
            source={require('./assets/azul.jpg')}
            style={styles.card}
          />
        </View>
      </View>

      <View style={styles.containerBotoesInferiores}>
        <TouchableOpacity>
          <Image
            source={require('./assets/azul.jpg')}
            style={styles.botoesInferiores}
          />
        </TouchableOpacity>
        <TouchableOpacity>
          <Image
            source={require('./assets/azul.jpg')}
            style={styles.botoesInferiores}
          />
        </TouchableOpacity>
        <TouchableOpacity>
          <Image
            source={require('./assets/azul.jpg')}
            style={styles.botoesInferiores}
          />
        </TouchableOpacity>
        <TouchableOpacity>
          <Image
            source={require('./assets/azul.jpg')}
            style={styles.botoesInferiores}
          />
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  androidSafeArea: {
    flex: 1,
    backgroundColor: 'white',
    paddingTop: Platform.OS === 'android' ? StatusBar.currentHeight : 0
  },
  containerBotoesSuperiores: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    padding: 10,
    marginHorizontal: 20
  },
  botoesSuperiores: {
    width: 40,
    height: 40,
    borderRadius: 40
  },
  containerImagemCentral: {
    margin: 20,
    borderRadius: 30,
    borderWidth: 2,
    borderColor: 'black',
  },
  imagemCentral: {
    width: '100%',
    height: undefined,
    aspectRatio: 1,
    borderRadius: 30
  },
  botoesImagem1: {
    position: 'absolute',
    top: -330,
    left: 10,
    width: 80,
    height: 40,
    borderRadius: 40,
  },
  botoesImagem2: {
    position: 'absolute',
    top: -330,
    left: 250,
    width: 80,
    height: 40,
    borderRadius: 40,
  },
  botoesImagem3: {
    position: 'absolute',
    top: -50,
    left: 250,
    width: 80,
    height: 40,
    borderRadius: 40,
  },
  containerBotoesSuperioresImagem: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    padding: 10
  },
  tituloCards: {
    fontSize: 20,
    padding: 10,
  },
  containerTituloCards: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginHorizontal: 20
  },
  botaoTituloCard: {
    width: 40,
    height: 40,
    borderRadius: 40
  },
  containerCards: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginHorizontal: 20,
  },
  card: {
    width: '30%',
    height: 200,
    marginTop: 10,
    borderRadius: 20
  },
  containerBotoesInferiores: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    padding: 10,
    marginHorizontal: 30
  },
  botoesInferiores: {
    width: 50,
    height: 50,
    borderRadius: 40
  }
});
