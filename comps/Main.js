import React from 'react';
import {View, Text} from 'react-native';
import styles from '../styles/MainStyles';
 
// Import your own comps below
import Toast from './Toast';
 
function Main(){

  // UI - ONLY USE MAIN TO CHANGE INTERFACE 
  // REMINDER YOU ARE CODING IN YOUR OWN BRANCH NOT MASTER
  
  return (

    <View style={styles.main}>
      <Toast />
    </View>

  )}

export default Main;
