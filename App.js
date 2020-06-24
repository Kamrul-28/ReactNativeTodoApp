import React, { useState } from 'react';
import { StyleSheet, Text, View,ScrollView,FlatList, SafeAreaView ,TouchableOpacity} from 'react-native';

export default function App() {

  const [person, setPerson] = useState([
    { name:'kamrul',id:'1' },
    { name:'sazid' ,id:'2'  },
    { name:'mukit' ,id:'3'  },
    { name:'rayhan',id:'4'  },
    { name:'preya' ,id:'5' },
    { name:'arobi' ,id:'6' },
    { name:'Rayhan',id:'7' },
    { name:'arobi' ,id:'8' },
    { name:'preya' ,id:'9' },
  ]);


  const pressHandeler=(id)=>{
        console.log(id)
        setPerson((prevPerson)=>{
              return prevPerson.filter( person=> person.id!=id );
        })
  }
  return (
    <SafeAreaView style={styles.container}>
        
        <FlatList
            numColumns={2}
            keyExtractor={(item)=>item.id}
            data={person}
            renderItem={({item})=>(
              <TouchableOpacity onPress={()=>pressHandeler(item.id)}>
                  <Text style={styles.item}>{item.name}</Text>
              </TouchableOpacity>
            )}
        
        />
        
        {/* <ScrollView>
            {person.map((item)=>{
                  return (
                    <View key={item.key}>
                        <Text style={styles.item}>{item.name}</Text>
                    </View>
                  )
              })}
        </ScrollView> */}
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
