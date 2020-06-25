import React from 'react';
import { StyleSheet, Text, View,SafeAreaView} from 'react-native';

export default function Header() {

  return (
    <SafeAreaView style={styles.header}>
      <Text  style={styles.title}>Todo List</Text>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  header: {
    height:100,
    paddingTop:40,
    backgroundColor:'coral'
  },
  title:{
      textAlign:"center",
      color:'#fff',
      fontSize:40,
      fontWeight:'bold'
  }
});
