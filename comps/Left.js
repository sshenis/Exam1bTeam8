import React, {useState} from 'react';
import {View, Text, TextInput, Button, Alert, Image, ImageBackground} from 'react-native';
import styles from '../styles/LeftStyles';
 
 
function Left(){

  // Input
  const [titleText, setTitleText] = useState("");

  // currently has no functionality
  // const [showImage, setShowImage] = useState(false);
  
  // Button
  var but = null;

  
  if (titleText == "") {
    but = (
    <View>
    <Button
    style = {styles.button}
    title = "Set Image"
    onPress={() => Alert.alert(

     // TITLE OF ALERT
   'Alert',

   // THE VALUE OF THE INPUT
   'Dont leave the text input blank!',

   // OK BUTTON
   [{text: 'OK', onPress: () => console.log('OK Pressed')}],

   
   {cancelable: false}
   )} 
   />
   </View>
    )
  } 
 

  return (

    <View style={styles.left}>


  <ImageBackground
      style={[styles.left, {width: '100%', height: "100%"}]}
      source={{uri: + " ' "+ {titleText} + " ' "}}
        
  >

      {but}

      <TextInput 
      style={styles.input}
      placeholder = "image url" 
      onChangeText = { text => setTitleText(text)}
      />

      <Text style={styles.title}>Your image url is {titleText}</Text>
      </ImageBackground>
    </View>

  )
}
  

export default Left;