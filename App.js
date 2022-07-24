import React, {useState} from 'react';
import { Platform, StyleSheet, Text, View } from 'react-native';
import { KeyboardAvoidingView, TextInput, TouchableOpacity } from 'react-native';
import Task from './components/Task';

export default function App() {
  const [task, setTask] = useState();
  const [taskItems, setTaskItems] = useState([]);
  
  const handleAddTask = () => {
    setTaskItems([...taskItems, task]);
    setTask(null);
  }

  const completeTast = (index) => {
    let itemsCopy = [...taskItems];
    itemsCopy.splice(index, 1);
    setTaskItems(itemsCopy);
  }

  return (
    <View style={styles.container}>
      {/* Today's tasks */}
      <View style={styles.tasksWrapper}>

        <Text style={styles.sectionTitle}>Today's tasks 🔥🚀</Text>

        <View style={styles.items}>
          {/* this is for item list */}
          {
            taskItems.map((item, index) => {
              return (
                <TouchableOpacity onPress={() => completeTast()}>
                  <Task key={index} text={item}/>
                </TouchableOpacity>
              ) 
            })
          }
        </View>

      </View>
      <KeyboardAvoidingView
        behavior={Platform.OS === "ios" ? "padding" : "height"}
        style={styles.writeTaskWrapper}
        >
          <TextInput style={styles.input} placeholder={'Write a task'} value={task} onChangeText={text => setTask(text)}/>

          <TouchableOpacity onPress={() => handleAddTask()}>
            <View style={styles.addWrapper}>
              <Text style={styles.writeText}>+</Text>
            </View>
          </TouchableOpacity>
      </KeyboardAvoidingView>
    </View>
  );
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#e5e5e6',
  },
  tasksWrapper: {
    paddingTop: 80,
    paddingHorizontal: 20,
  },
  sectionTitle: {
    fontSize: 24,
    fontWeight: 'bold',
  },
  items: {
    marginTop: 30,
  },
  writeTaskWrapper: {
    position: 'absolute',
    bottom: 60,
    width: '100%',
    flexDirection: 'row',
    justifyContent: 'space-around',
    alignItems: 'center',
  },
  input: {
    paddingVertical: 15,
    paddingHorizontal: 15,
    backgroundColor: '#FFF',
    borderRadius: 60,
    borderColor: '#C0C0C0',
    borderWidth: 1,
    width: '80%',
  },
  addWrapper: {
    width: 60,
    height: 60,
    backgroundColor: '#FFF',
    borderRadius: 60,
    alignItems: 'center',
    justifyContent: 'center',
    borderColor: '#C0C0C0',
    borderWidth: 1,
  },
  writeText: {
    opacity: 0.8,
    fontSize: 30,
  },
});