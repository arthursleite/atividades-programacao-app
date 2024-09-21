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

const citacoes = [
  {
    citacao: 'A maior glória da vida não está em cair, mas em levantar cada vez que caímos.',
    autor: 'Nelson Mandela',
    linkFoto: 'https://upload.wikimedia.org/wikipedia/commons/0/02/Nelson_Mandela_1994.jpg',
  },
  {
    citacao: 'A maneira de começar é parar de falar e começar a fazer.',
    autor: 'Walt Disney',
    linkFoto: 'https://upload.wikimedia.org/wikipedia/commons/d/df/Walt_Disney_1946.JPG',
  },
  {
    citacao: 'Seu tempo é limitado, portanto, não o desperdice vivendo os fracassos da vida de outra pessoa. Não se deixe aprisionar pelo dogma - que é viver com os resultados do pensamento de outras pessoas.',
    autor: 'Steve Jobs',
    linkFoto: 'https://upload.wikimedia.org/wikipedia/commons/f/f5/Steve_Jobs_Headshot_2010-CROP2.jpg',
  },
  {
    citacao: 'Se a vida fosse previsível, deixaria de ser vida e não teria sabor.',
    autor: 'Eleanor Roosevelt',
    linkFoto: 'https://upload.wikimedia.org/wikipedia/commons/2/22/Eleanor_Roosevelt_portrait_1933.jpg',
  },
  {
    citacao: 'Se o senhor olhar para o que tem na vida, sempre terá mais. Se o senhor olhar para o que não tem na vida, nunca terá o suficiente.',
    autor: 'Oprah Winfrey',
    linkFoto: 'https://upload.wikimedia.org/wikipedia/commons/f/f6/Pre_Inaugural_Reception_%2852639556983%29_%28cropped%29.jpg',
  },
  {
    citacao: 'Se o senhor estabelecer metas ridiculamente altas e fracassar, fracassará acima do sucesso de todos os outros.',
    autor: 'James Cameron',
    linkFoto: 'https://upload.wikimedia.org/wikipedia/commons/f/fe/James_Cameron_by_Gage_Skidmore.jpg',
  },
  {
    citacao: 'A vida é o que acontece quando o senhor está ocupado fazendo outros planos.',
    autor: 'John Lennon',
    linkFoto: 'https://upload.wikimedia.org/wikipedia/commons/8/85/John_Lennon_1969_%28cropped%29.jpg',
  },
];

const App = () => {
  const [citacao, setCitacao] = useState(null);

  const mostrarCitacao = () => {
    const indice = Math.floor(Math.random() * citacoes.length);
    setCitacao(citacoes[indice]);
  };

  return (
    <SafeAreaView style={styles.container}>
      <View>
        <Text style={styles.title}>
          Quotes
        </Text>
        <Separator />
        {citacao && (
          <Image
            source={{ uri: citacao.linkFoto }}
            style={styles.image}
          />
        )}
        <Separator />
        {citacao && (
          <Text style={styles.citacaoText}>
            {citacao.citacao}
          </Text>
        )}
        <Separator />
        {citacao && (
          <Text style={styles.autorText}>
            - {citacao.autor}
          </Text>
        )}
        <Separator />
        <TouchableOpacity onPress={mostrarCitacao} style={styles.button}>
          <Text style={styles.buttonText}>Nova citação</Text>
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 16,
    textAlign: 'center',
  },
  separator: {
    marginVertical: 8,
    borderBottomColor: '#737373',
    borderBottomWidth: StyleSheet.hairlineWidth,
  },
  image: {
    width: 150,
    height: 150,
    borderRadius: 75,
    resizeMode: 'cover',
    alignSelf: 'center',
  },
  citacaoText: {
    fontSize: 18,
    fontStyle: 'italic',
    textAlign: 'center',
    marginVertical: 10,
  },
  autorText: {
    fontSize: 16,
    fontWeight: 'bold',
    textAlign: 'center',
  },
  button: {
    backgroundColor: '#007BFF',
    padding: 10,
    borderRadius: 5,
    alignSelf: 'center',
  },
  buttonText: {
    color: '#fff',
    fontSize: 16,
  },
});

export default App;
