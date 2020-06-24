import React ,{ useState } from 'react';
import { StyleSheet, Text, View,Button } from 'react-native';

export default function App() {

  const [name,setName]=useState('Kamrul');
  const [person,setPerson]=useState({ name:'Kamrul Hasan',age:25 });

  const clickHandle=()=>{
    setName('Hasan')
    setPerson({
      name:"Sazid Hasan",
      age:'23'
    })
  }
  return (
    <View style={styles.container}>
      <Text>My name is {name} </Text>
      <Text>His name is {person.name} and his age is {person.age}</Text>
      
      <View style={styles.buttonContainer}>
            <Button title='Click Me' onPress={clickHandle}/>
      </View>
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
  buttonContainer:{     
      marginTop:20
  }
});
