import React, { useState } from 'react';
import { StyleSheet, Text, View,FlatList, SafeAreaView } from 'react-native';
import Header from './components/Header'
import TodoItem from './components/TodoItem'
import AddTodo from './components/AddTodo'

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

    console.log(text);
    setTodos((prevTodos)=>{
      return [
        { text:text , key:Math.random().toString() },
         ...prevTodos
      ]
    })

  }

  return (
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
  );
}

const styles = StyleSheet.create({
  container: {
    flex:1,
    backgroundColor:'#fff'
  },
  content:{
      padding:40
  },
  list:{
      marginTop:20
  }

});
