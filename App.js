import React, { useState } from 'react';
import { StyleSheet, Text, View,FlatList, SafeAreaView, Alert ,TouchableWithoutFeedback, Keyboard } from 'react-native';
import Header from './components/Header'
import TodoItem from './components/TodoItem'
import AddTodo from './components/AddTodo'
// import SandBox from './components/SandBox'
export default function App() {

  const[todos,setTodos]=useState([
    {text:'buy coffee',key:'1'},
    {text:'creacte a app',key:'2'},
    {text:'play on the switch',key:'3'}
  ])

  const pressHandle=(key)=>{
      setTodos((prevTodos)=>{
          return prevTodos.filter(todo=>todo.key !=key);
      })
  }

  const submitHandle=(text)=>{
    
    if(text.length > 3){     
      setTodos((prevTodos)=>{
        return [
          { text:text , key:Math.random().toString() },
           ...prevTodos
        ]
      })
    }else{
      Alert.alert('Opps!','Todos must grater than 3 character');
    }

  }

  return (
    <TouchableWithoutFeedback onPress={()=>{
        // This is for dismiss the keyboard after touching the screen
        Keyboard.dismiss();
    }}>
        <SafeAreaView style={styles.container}>
          <Header />
            <View style={styles.content}>
                <AddTodo submitHandle={submitHandle}/>
                <View style={styles.list}>
                      <FlatList
                          data={todos}
                          renderItem={({item})=>(
                            <TodoItem item={item} pressHandle={pressHandle} />
                          )}
                      />
                </View>
            </View>
        </SafeAreaView>
    </TouchableWithoutFeedback>
  );
}

const styles = StyleSheet.create({
  container: {
    flex:1,
    backgroundColor:'#ddd'
  },
  content:{
      padding:40,
      flex:1,
  },
  list:{
      marginTop:20,
      flex:1,
  }

});
