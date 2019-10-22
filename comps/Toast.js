import React,{useState} from 'react';
import {View, Text, TouchableOpacity} from 'react-native';
import styles from '../styles/ToastStyles';
 
/*state = {
    textValue: 'Toast'
  }
//when you press the button it should alternate from Youve moved the Toast up! to Youve moved the Toast down!
  onPress = () => {
    this.setState({
      textValue: 'Youve moved the Toast up!'
    })
  }
  onPress = () => {
    this.setState({
      textValue: 'Youve moved the Toast down!'
    })
  }*/
 
function Toast(){

    const [count, setCount] = useState(0);
  
    var upToast = "You've moved toast up";
    var downToast = "You've moved toast down";
    var up = -500;
    var box = null;

    if (count === 0) {
       box = (<TouchableOpacity
           onPress={()=>{setFloat(!count)}}
         >
           <Text>{upToast}</Text>
         </TouchableOpacity>
         )
    }

    if (count === 1) {
        box = (<TouchableOpacity
            style={{marginBottom: up}}
            onPress={()=>{setFloat(!count)}}
          >
            <Text>{downToast}</Text>
          </TouchableOpacity>
          )
     }

     else {
        box = <Text>Toast</Text>
     }

  return (

    <View style={styles.toast}>
       <Text>{box}</Text>
    </View>

  )}

export default Toast;
//<Text onPress={this.onPress}>Toast</Text>
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