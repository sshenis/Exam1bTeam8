import React, {useState} from 'react';
import {View, Text, Switch} from 'react-native';
import styles from '../styles/RightStyles';

// Import your own comps below


function Right(){

  // UI - ONLY USE MAIN TO CHANGE INTERFACE 
  // REMINDER YOU ARE CODING IN YOUR OWN BRANCH NOT MASTER
  
  return (

    <View style={styles.right}>
      <Text>Normal</Text>
      <Switch 
         
      />

      <Text>Wide</Text>
      <Switch 
         onValueChange
      />

      <Text>Wider</Text>
      <Switch />

      <Text>Widest</Text>
      <Switch />

    </View>

  )}

export default Right;
