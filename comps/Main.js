import React from 'react';
import {View, Text} from 'react-native';
import styles from '../styles/MainStyles';


import Settings from '../comps/Settings'

import Right from '../comps/Right'
 
// Import your own comps below

import Toast from './Toast';

import Left from '../comps/Left'


 
function Main(){

  // UI - ONLY USE MAIN TO CHANGE INTERFACE 
  // REMINDER YOU ARE CODING IN YOUR OWN BRANCH NOT MASTER
  
  return (

    <View style={styles.main}>


      <Settings />

      <Toast />


        <Right /
      <Left />



    </View>

  )}

export default Main;
