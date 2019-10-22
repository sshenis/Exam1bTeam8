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
  
  var tOpacity = 0;
  var popup = null;
  if(showGear === true){
        tOpacity = 1;
  } else {
        tOpacity;
  }
            
                // {/* alert goes HERE */}
                // Alert.alert(

                //     {/* ALERT TITLE */}
                // "Hey",

                //     {/* VALUE OF ALERT */}
                // "Hello",
                
                // [
                // {text: 'OK', onPress: () => console.log('OK Pressed')}
                // ],

                // {cancelable: false} 
  }
    return (

    <View style={styles.settings}>
        <View>
            <TouchableOpacity 
            opacity={tOpacity}

            </TouchableOpacity>
        </View>
            style={styles.settings}
            onPress={()=>{
                setShowGear(!showGear);
            }}>
            <Image
                style={styles.button}
                source={require('../img/gears.png')}
                />

    </View>
        
        );
};


export default Settings;