import React, {useState} from 'react';
import {View, Text, Switch} from 'react-native';
import styles from '../styles/RightStyles';

// Import your own comps below

function Right(){

   const [setWidth, widthMode] = useState(false);
   var normalState = "40%";
  // UI - ONLY USE MAIN TO CHANGE INTERFACE 
  // REMINDER YOU ARE CODING IN YOUR OWN BRANCH NOT MASTER
   if (setWidth === false) {
      normalState = "50%"
   } else {
      normalState 
   }
  
  return (

    <View style={styles.right}>
      <Text>Normal</Text>
      <Switch  
         // onValueChange = {(value=>widthMode(value))}
         // value = {setWidth}
      />

      <Text>Wide</Text>
      <Switch 
         onValueChange = {widthMode}
         value = {setWidth}
      />

      {/* <Text>Wider</Text>
      <Switch />

      <Text>Widest</Text>
      <Switch /> */}

    </View>

  )}

export default Right;
