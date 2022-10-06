import { View, Text , TextInput , StyleSheet} from 'react-native'
import React from 'react';

const Custominput = ({value, setValue ,secureTextEntry, placeholder}) => {
  return (
    <View style={styles.container}>
      <TextInput 
      value={value}
      onChangeText={setValue}
      placeholder={placeholder}
      style={styles.input}
      secureTextEntry={secureTextEntry}
      />
      
      {/* <TextInput placeholder='holder' style={styles.input}/> */}
    
    </View>
  )
}

const styles = StyleSheet.create({
    container : {
        backgroundColor: 'white',
        width : '100%',
        // padding: 2,

        borderColor: '#e8e8e8',
        borderWidth: 1,
        boderRadius:15,

        paddingHorizontal:10,
        marginVertical:5,
    },
    input : {},
});


export default Custominput;