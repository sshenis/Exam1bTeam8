import React from 'react';
import {View, Text, TouchableOpacity, Button} from 'react-native';
import styles from '../styles/ToastStyles';

// This is outside your function. It is supposed to be inside and before return
/* It also seems like you are using an old method. Maybe try going about it using
const method and useState. */
 
state = {
    textValue: 'Toast'
  }

  onPress = () => {
    this.setState({
      textValue: 'Youve moved the Toast up!'
    })
  }

 
function Toast(){
  
  return (

    <View style={styles.toast}>
       <Text onPress={this.onPress}>{this.state.textValue}</Text>
    </View>

  )}

export default Toast;
//<Button title="Toast" onPress={this.onPress} />
/*export default class App extends Component {
    constructor(props) {
      super(props)
      this.state = { count: 0 }
    }
  
    onPress = () => {
      this.setState({
        count: this.state.count+1
      })
    }
  
   render() {
     return (
       <View style={styles.container}>
         <TouchableOpacity
           style={styles.button}
           onPress={this.onPress}
         >
           <Text> Toast </Text>
         </TouchableOpacity>
         <View style={[styles.countContainer]}>
           <Text style={[styles.countText]}>
              { this.state.count !== 0 ? this.state.count: null}
            </Text>
          </View>
        </View>
      )
    }
  }*/