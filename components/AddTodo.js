import React, { useState } from 'react';
import { StyleSheet, Button, SafeAreaView, TextInput } from 'react-native';

export default function AddTodo( {submitHandle} ) {

    const[text,setText]=useState('')
  
    const handleSubmit=(val)=>{
        setText(val)
    }
  
    return (
      <SafeAreaView>
            <TextInput 
                style={styles.input}
                placeholder="New Todo..."
                onChangeText={(val)=>handleSubmit(val)}
            />
            <Button title='Add Todo' onPress={()=>submitHandle(text)} color="coral" />
      </SafeAreaView>
    );
  }
  
  const styles = StyleSheet.create({
    input: {
      marginBottom:10,
      paddingHorizontal:8,
      paddingVertical:6,
      borderBottomWidth:1,
      borderBottomColor:'#ddd'
    }
  });