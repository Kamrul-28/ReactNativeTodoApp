import React, { useState } from 'react';
import { StyleSheet, Text, View,ScrollView, SafeAreaView } from 'react-native';

export default function App() {

  const [person, setName] = useState([
    { name:'kamrul',key:'1' },
    { name:'sazid' ,key:'2'  },
    { name:'mukit' ,key:'3'  },
    { name:'rayhan',key:'4'  },
    { name:'preya' ,key:'5' },
    { name:'arobi' ,key:'6' },
    { name:'Rayhan',key:'7' },
    { name:'arobi' ,key:'8' },
    { name:'preya' ,key:'9' },
  ]);

  return (
    <SafeAreaView style={styles.container}>
        <ScrollView>
            {person.map((item)=>{
                  return (
                    <View key={item.key}>
                        <Text style={styles.item}>{item.name}</Text>
                    </View>
                  )
              })}
        </ScrollView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex:1,
    marginTop:40,
    marginHorizontal:20
  },
  item:{
      marginTop:24,
      padding:30,
      fontSize:24,
      backgroundColor:'pink',
  },
});
