import React from "react";

import {
  Text,
  View,  Image,
  TouchableOpacity,
  StyleSheet,
} from "react-native";

const Welcome = () => {
  return (
    <View style={styles.container}>
      

      <View>
       <Image
       source = {require("../assets/location.png")}
       style ={{backgroundColor:'#fff',width:224,height:170}}
       />
      </View>

      <View style={{justifyContent: 'center',
          alignItems: 'center',flex: 1}} >
      <Text style={styles.text1}>Select Location</Text>
      <Text style={styles.text2}>Let us find your next event. Stay in tune with
what is happening in your area!
.</Text>
      </View>

      <View 
      style={{ 
        flex: 1,
         justifyContent: 'flex-end',
          alignItems: 'center',
           marginBottom:46,
           marginTop:100 }} >
        <TouchableOpacity
          style={{
            backgroundColor: "#0DCDAA",
            padding: 15,
            width: 300,
            alignItems:'center',
            borderRadius: 10,
          }}
        >
          <Text
           style={{
             color: "#fff",
              fontSize: 17,
              fontWeight:"bold",
              }}>Choose city</Text>
        </TouchableOpacity>

      
      </View>
    </View>
  );
};

export default Welcome;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
    marginTop:150
  
  },
  text1: {
    fontSize: 29,
    color: "black",
    fontWeight: "700"
    
  },
  text2: {
    fontSize: 16,
    fontWeight: "400",
    color: "black",
    alignContent:'center',
    alignItems:'center',
    textAlign:'center'
  },
});
