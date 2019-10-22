import {StyleSheet} from 'react-native';
 
{/* Play around with width if interface looks off */}

var styles = StyleSheet.create({
  
  left: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    width: "100%",
    zIndex: 0,
    backgroundColor: "#ffcba4"
  },
  title: {
    fontSize: 16
  },
  input: {
    width: 300,
    justifyContent: "center",
    alignItems: "center",
    textAlign: "center",
  }
});
 
export default styles;
