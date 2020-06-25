import React from 'react';
import { StyleSheet, Text, View ,TouchableOpacity} from 'react-native';
import { MaterialCommunityIcons } from '@expo/vector-icons';

export default function TodoItem({item,pressHandle}) {

    return (
      <TouchableOpacity onPress={()=>pressHandle(item.key)}   style={styles.item}>
            <MaterialCommunityIcons name="delete" size={24} color="black" />
            <Text style={styles.itemList}>{item.text}</Text>
      </TouchableOpacity>
    );
  }
  
  const styles = StyleSheet.create({
    item: {
      padding:16,
      marginTop:16,
      borderColor:'#bbb',
      borderWidth:1,
      borderStyle:'dashed',
      borderRadius:10,
      flexDirection:'row'   
    },
    itemList:{
      paddingLeft:10
    }
  });