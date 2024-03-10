import React from 'react'
import { SafeAreaView, View,Text ,TextInput} from 'react-native'
import { AntDesign } from '@expo/vector-icons';

const Location = () => {
  return (
    
    <SafeAreaView style={{top:5,flex :1,}}>
<View style={{top:96,paddingHorizontal:10}}>
<AntDesign name="arrowleft"  size={20}  color="black" 
style={{left:-30}}/>
<TextInput
      
      style={{top:-30, height: 40,width:288, borderColor: '#F2F2F2', borderBottomWidth: 1.3, marginBottom: 0, paddingHorizontal: 20, }}
    
      placeholder="Select Location...."
      
    />
    <AntDesign name="search1" size={18} color="black"
    style={{left:295 ,top:-52}} />
</View>
<View>


</View>

<View style={{top:86,paddingVertical:20,left:-20}}>
   <Text style={{fontSize:12,fontWeight:400,paddingBottom:20}}>Most Searched</Text>

   <Text style={{fontWeight:600,fontSize:18}}>Barcelona</Text>
   <Text style={{fontSize:16,fontWeight:400,paddingBottom:20}}>Spain</Text>
   <Text  style={{fontWeight:600,fontSize:18,}}>Madrid</Text>
   <Text style={{fontSize:16,fontWeight:400,paddingBottom:20}}>Spain</Text>
   <Text  style={{fontWeight:600,fontSize:18,}}>London</Text>
   <Text style={{fontSize:12,fontWeight:400,paddingBottom:20}}>United Kingdom</Text>
   <Text  style={{fontWeight:600,fontSize:18,}}>Berlin</Text>
   <Text style={{fontSize:12,fontWeight:400,paddingBottom:20}}>German</Text>
   <Text  style={{fontWeight:600,fontSize:18,}}>Rome</Text>
   <Text style={{fontSize:12,fontWeight:400}}>Italy</Text>
</View>


    </SafeAreaView>
  )
}

export default Location