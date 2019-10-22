import React from 'react';
import {View} from 'react-native';
import styles from './styles/AppStyles';
 
// ONLY LEAD DEV WILL IMPORT MAIN IN APP.JS
import Main from './comps/Main';
 
function App(){
  // UI
  return (

    <View style={styles.app}>

      <Main/>

    </View>
    
  )}


export default App;
