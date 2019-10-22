import React, { useState } from 'react';
import {
    View,
    Text,
    Button,
    Alert,
    TouchableOpacity,
    Image} from 'react-native';
import styles from '../styles/SettingsStyles';
// Import your own comps below

 
  // UI - ONLY USE MAIN TO CHANGE INTERFACE 
  // REMINDER YOU ARE CODING IN YOUR OWN BRANCH NOT MASTER
  
function Settings(){

  const [showGear, setShowGear]= useState(false)
  
  var popup = null;
  if(showGear === true){
        popup = (
            <View>
                {/* alert goes HERE */}

            </View>
            
        )
}  
    return (

    <View style={styles.main}>
        {popup}
        
        <TouchableOpacity>
            <Image
                style={styles.button}
                source={require('../img/gears.png')}
            />
        </TouchableOpacity>

    </View>
        
        );
};


export default Settings;