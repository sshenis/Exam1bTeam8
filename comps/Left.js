import React, {useState} from 'react';
import {View, Text, TextInput, Button, Alert, Image} from 'react-native';
import styles from '../styles/LeftStyles';
 
 
function Left(){

  // Input
  const [titleText, setTitleText] = useState("");

  // currently has no functionality
  // const [showImage, setShowImage] = useState(false);
  
  // Button
  var but = null;
  var bgImg = null;

  
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

      <Image
      style={{width: '100%', height: 100, zIndex: 1000}}
      source = {{uri: ' https://cdn.shopify.com/s/files/1/3004/1474/products/orange-tabby_1800x1800.png?v=1544042837'}}
      />

      {but}

      <TextInput 
      style={styles.input}
      placeholder = "image url" 
      onChangeText = { text => setTitleText(text)}
      />

      <Text style={styles.title}>Your image url is {titleText}</Text>
    </View>

  )
}
  

export default Left;