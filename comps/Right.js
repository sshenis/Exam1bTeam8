import React, {useState} from 'react';
import {View, Text, Switch} from 'react-native';
import styles from '../styles/RightStyles';

// Import your own comps below

function Right(){

   var normalState = "40%";
   const [setWidth, widthMode] = useState(false);
  // UI - ONLY USE MAIN TO CHANGE INTERFACE 
  // REMINDER YOU ARE CODING IN YOUR OWN BRANCH NOT MASTER
   if (setWidth === false) {
      normalState = "40%"
   } else {
      normalState = "50%"
   } 
  
  return (

    <View style={[styles.right, {width: normalState}]}>
      <Text>Normal</Text>
      <Switch  
         value = {true}
      />

      <Text>Wide</Text>
      <Switch 
         onValueChange = {(value)=>widthMode(value)}
         value = {setWidth}
      />

      <Text>Wider</Text>
      <Switch

      />

      <Text>Widest</Text>
      <Switch 

      />

    </View>

  )}

export default Right;
