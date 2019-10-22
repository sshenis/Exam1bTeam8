import React from 'react';
import {View, Text, TouchableOpacity, Button} from 'react-native';
import styles from '../styles/ToastStyles';
 
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