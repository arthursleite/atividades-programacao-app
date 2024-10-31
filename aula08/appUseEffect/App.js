import { useEffect, useState } from 'react';
import { SafeAreaView, StyleSheet, Text, View, Button, Platform, StatusBar } from 'react-native';

export default function App() {
  const [contador, setContador] = useState(0);

  useEffect(() => {
    console.log('useEffect chamado')
  }, [contador])

  return (
    <SafeAreaView style={styles.androidSafeArea}>
      <View style={{ alignItems: 'center'}}>
        <Button
          title='+'
          onPress={() => setContador(contador + 1)}
        />
        <Text style={{ fontSize: 24}}>{contador}</Text>
        <Button
          title='-'
          onPress={() => setContador(contador - 1)}
        />
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  androidSafeArea: {
    flex: 1,
    backgroundColor: 'white',
    paddingTop: Platform.OS === 'android' ? StatusBar.currentHeight : 0
  }
});
