import React, { useState } from 'react';
import { StyleSheet, Text, View, Button, TextInput } from 'react-native';

export default function App() {

  const [name, setName] = useState('Kamrul');
  const [age, setAge] = useState('25');

  return (
    <View style={styles.container}>
      <Text>Enter Your Name</Text>
      <TextInput   
          multiline
          style={styles.input}
          placeholder='e.g kamrul hasan'
          onChangeText={(val) => setName(val)}

      />
      <Text>Enter Your Age</Text>
      <TextInput
          // keyboardType='numeric'
          style={styles.input}
          placeholder='e.g 25'
          onChangeText={(val) => setAge(val)}

      />

      <Text>Name: {name} and Age: {age}</Text>

      {/* <View style={styles.buttonContainer}>
            <Button title='Click Me' onPress={clickHandle}/>
      </View> */}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  buttonContainer: {
    marginTop: 20
  },
  input: {
    borderWidth: 1,
    borderColor: '#777',
    padding: 8,
    margin: 10,
    width: 200,
  }
});
