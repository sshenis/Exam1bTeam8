import React, {useState} from 'react';
import {View, Text, Switch} from 'react-native';
import styles from '../styles/RightStyles';

// Import your own comps below
var width = null;

const [setWidth, setNewWidth] = useState(false);

if (setWidth === false) {
   width = (
      <Switch style={{width: '50%'}}>
   )
}
 
function Right(){

  // UI - ONLY USE MAIN TO CHANGE INTERFACE 
  // REMINDER YOU ARE CODING IN YOUR OWN BRANCH NOT MASTER
  
  return (

    <View style={styles.right}>
      <Text>Normal</Text>
      <Switch 
         onValueChange = {(value)=>setNewWidth(value)}
         value = {setWidth}
      />

      <Text>Wide</Text>
      <Switch />

      <Text>Wider</Text>
      <Switch />

      <Text>Widest</Text>
      <Switch />

    </View>

  )}

export default Right;
