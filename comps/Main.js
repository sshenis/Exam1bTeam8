import React from 'react';
import {View, Text} from 'react-native';
import styles from '../styles/MainStyles';
 
// Import your own comps below
import Left from '../comps/Left'
 
function Main(){

  // UI - ONLY USE MAIN TO CHANGE INTERFACE 
  // REMINDER YOU ARE CODING IN YOUR OWN BRANCH NOT MASTER
  
  return (

    <View style={styles.main}>
      <Left />
    </View>

  )}

export default Main;
