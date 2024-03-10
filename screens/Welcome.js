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
      <Text style={styles.text1}>Welcome!</Text>
      <Text style={styles.text2}>Sign in or create a new account.</Text>

      <View>
       <Image
       source = {require("../assets/frame.png")}
       style ={{backgroundColor:'#fff',width:320,height:248,top:118}}
       />
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
              fontSize: 15
              }}>Sign in</Text>
        </TouchableOpacity>

        <TouchableOpacity
        style={{
          
                width:300,
                backgroundColor:'#fff',
                borderRadius:10,
                alignItems:'center',
                borderColor:'#789',
                borderWidth: 1,
                marginVertical:10,
                padding:15,
              
                }}>
                    
                    <Text style={{color:'black',fontWeight:'bold',}}>
                        No account yet? <Text style={{color:'#0DCDAA'}}>Sign up.</Text> 
                    </Text>

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
    fontSize: 32,
    color: "black",
    
  },
  text2: {
    fontSize: 16,
    fontWeight: "300",
    color: "black",
  },
});
