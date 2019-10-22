import React, {useState} from 'react';
import {View, Text, TouchableOpacity, Button} from 'react-native';
import styles from '../styles/ToastStyles';


// THIS DOES NOT WORK BUT THIS IS SOMETHING THAT WE SHOULD BE DOING
// OR SOMETHING. 
// DO NOT COPY THIS CODE USE IT FOR REFERENCE
function Toast(){

  const [float, setFloat] = useState(0);

  var box = null;
  var uptxt = "You've moved toast up";
  var dntxt = "You've moved toast down";
  var up = 100;
  if (float === 0) {
    box = (
      <TouchableOpacity>
        <Text>{uptxt}</Text>
      </TouchableOpacity>
    
    )
  }
  if (float === 1) {
    box = (
      
      <TouchableOpacity style={{marginBottom: up}}>
        <Text>{dntxt}</Text>
      </TouchableOpacity>
    
    )
  }
  
  return (
    <View style={styles.toast}>

      {box}

    </View>
   

  )}

export default Toast;