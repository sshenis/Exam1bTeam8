import {StyleSheet} from 'react-native';
 
{/* Play around with width if interface looks off */}

var styles = StyleSheet.create({
  
  right: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    width: "40%",
    height: "100%",
    position: "absolute",
    right: 0,

    backgroundColor: "#DDA0DD"
  },

  wide: {
    width: "50%"
  },

  wider: {
    width: "60%"
  },

  widest: {
    width: "70%"
  }

});
 
export default styles;
