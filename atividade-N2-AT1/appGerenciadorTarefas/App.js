import { useState, useEffect } from 'react';
import { StyleSheet, Text, View, Platform, SafeAreaView, TextInput, TouchableOpacity, StatusBar } from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';

function TaskItem({ task }) {
  return (
    <View style={styles.taskItem}>
      <Text style={styles.taskItemText}>{task}</Text>
    </View>
  );
}

export default function App() {

  const [input, setInput] = useState('');
  const [tasks, setTasks] = useState([]);

  useEffect(() => {
    loadData()
  }, []);

  async function loadData() {
    try {
      const value = await AsyncStorage.getItem('tasks');
      if (value !== null) {
        setTasks(JSON.parse(value));
      } else {
        setTasks([]);
      }
    } catch (e) {
      console.log("Erro ao carregar dados:", e);
      setTasks([]);
    }
  }

  async function addTask() {
    try {
      const existingTasks = await AsyncStorage.getItem('tasks');
      const taskList = existingTasks ? JSON.parse(existingTasks) : [];
      const updatedList = [...taskList, input];
      await AsyncStorage.setItem('tasks', JSON.stringify(updatedList));
      setTasks(updatedList);
    } catch (e) {
      console.log('erro no addTask', e);
    }
  }

  return (
    <SafeAreaView style={styles.container}>
      <Text style={styles.title}>Tarefas</Text>
      <TextInput
        style={styles.inputText}
        placeholder={'Add a new task'}
        onChangeText={(value) => setInput(value)}
      />
      <TouchableOpacity style={styles.btnAdd} onPress={() => addTask()}>
        <Text style={styles.btnAddText}>Adicionar tarefa</Text>
      </TouchableOpacity>

      <View style={styles.containerTasks}>
        {tasks.map((task, index) => (
          <TaskItem key={index} task={task} />
        ))}
      </View>
    </SafeAreaView >
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    backgroundColor: 'white',
    paddingTop: Platform.OS === 'android' ? StatusBar.currentHeight : 0,
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 10
  },
  inputText: {
    borderWidth: 1,
    borderColor: '#d2d2d3',
    width: '90%',
    padding: 10,
    borderRadius: 5
  },
  taskItem: {
    padding: 10,
    borderColor: '#dddddd',
    borderBottomWidth: 1,
    borderRadius: 5,
    width: '90%',
    justifyContent: 'center',
    alignItems: 'center',
    marginVertical: 3,
    marginHorizontal: 50,
    backgroundColor: '#f9f9f9',
  },
  taskItemText: {
    fontSize: 14,
    width: '100%',
    textAlign: 'center'
  },
  btnAdd: {
    backgroundColor: '#007bff',
    padding: 8,
    borderRadius: 19,
    margin: 10,
    width: '90%',
    height: 40,
    justifyContent: 'center',
    alignItems: 'center'
  },
  btnAddText: {
    color: '#fff',
    fontSize: 16,
    fontWeight: 'bold',
  },
  containerTasks: {
    width: '100%',
    alignItems: 'center',
    marginTop: 10,
  }
});
