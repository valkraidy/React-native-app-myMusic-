import React from 'react'
import { 
    View,
    Text,
    TouchableOpacity,
    TextInput,
    Password,
    SafeAreaView} from 'react-native'
import { AntDesign } from '@expo/vector-icons';
import { MaterialCommunityIcons } from '@expo/vector-icons';


const SignIn = () => {
  return (
    <SafeAreaView>

<View style={{top:60,paddingHorizontal:10}}>
<AntDesign name="arrowleft"  size={24}  color="black" 
style={{left:-10}}/>
<Text style={{fontWeight:"bold",fontSize:24,left:40,top:-30}}>

Welcome Back!
</Text>

</View>




<View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' ,top:229}}>
    <Text 
    style ={{
        fontSize:16,
        fontWeight:900,
        right:100,
        paddingVertical:10}}>Email address</Text>
      <TextInput
      
        style={{ height: 40,width:300, borderColor: '#F2F2F2', borderBottomWidth: 1, marginBottom: 30, paddingHorizontal: 10, }}
        // onChangeText={handleInput1Change}
        value={Text}
        placeholder="name@example.com"
      />
       <Text style={{fontSize:16,fontWeight:900,right:120,paddingVertical:10}}>Password</Text>
      <TextInput
        style={{ height: 40,width:300, borderColor: '#F2F2F2', borderBottomWidth: 1, marginBottom: 20, paddingHorizontal: 10 }}
        // onChangeText={handleInput2Change}
        value={Password}
        placeholder="Enter your password"
      />
<View>
      <Text style={{fontSize:16,fontWeight:400,right:103,paddingVertical:10}}>Remember me</Text>
      <TouchableOpacity style={{left:175,top:-35}}>

      <MaterialCommunityIcons name="toggle-switch" size={29} color="#0DCDAA" />
      </TouchableOpacity>
      
      
      </View>
     
    </View> 

    <View 
      style={{ 
        flex: 1,
         justifyContent: 'flex-end',
          alignItems: 'center',
           marginBottom:66,
           marginTop:300 }} >
        <TouchableOpacity
          style={{
            backgroundColor: "#0DCDAA",
            padding: 15,
            width: 300,
            alignItems:'center',
            borderRadius: 10,
            position:'relative'
          }}
        >
          <Text
           style={{
             color: "#fff",
              fontSize: 15
              }}>Sign in</Text>
        </TouchableOpacity>

        {/* <TouchableOpacity
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

        </TouchableOpacity> */}
      </View>







    </SafeAreaView>
  )
}

export default SignIn