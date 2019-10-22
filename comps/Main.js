import React from 'react';
import {View, Text} from 'react-native';
import styles from '../styles/MainStyles';
import Settings from '../comps/Settings'
// Import your own comps below

 
function Main(){

  // UI - ONLY USE MAIN TO CHANGE INTERFACE 
  // REMINDER YOU ARE CODING IN YOUR OWN BRANCH NOT MASTER
  
  return (

    <View style={styles.main}>
      <Settings />
      
    </View>

  )}

export default Main;
