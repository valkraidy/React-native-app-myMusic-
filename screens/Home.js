import React from 'react'
import {Text,View,SafeAreaView,Image}from 'react-native'
import { MaterialIcons } from '@expo/vector-icons';
import { EvilIcons } from '@expo/vector-icons';
import { Entypo } from '@expo/vector-icons';
import { Foundation } from '@expo/vector-icons';
import { AntDesign } from '@expo/vector-icons';


const Home = () => {
  return (
<SafeAreaView style={{flex:1,}}>
    <View>

        <Text style={{left:2,fontSize:12,color:'#7C7C7C',top:68.65,}}>
            Find events in
        </Text>
        <View style={{top:75,fontSize:18}} >
       
            <Text style={{left:2,fontWeight:600,fontSize:18}} >
            <EvilIcons name="location" size={20} color="black" />
                Barcelona
                <Entypo name="chevron-down" size={20} 
                style={{paddingBottom:10, color:'#262627'}}/>

            </Text>
            <Text style={{left:3,top:36,fontSize:16,fontWeight:400,}}>
                Popular in Barcelona
            </Text>
            
            <View style={{height:225,top:10}}>

             <View>
                <View>
 
                 </View>
                 
                 
                <Image
                
                     source= {require('../assets/lady.png')}
                     style={{height:120,width:400,top:50,borderRadius:10}}  
                />
               
             </View>
               
              
                <View style={{top:50,backgroundColor:'#F2F2F2',height:110,borderRadius:10}}>
                    <View style={{left:5}}>
                         <Text style={{fontSize:12,fontWeight:400,top:13}}>
                          Mon, Apr 18 · 21:00 Pm 
                         </Text>

                          <Text style={{fontSize:16,fontWeight:700 ,top:17}}>
                          La Rosalia
                        
                         </Text>
                         <Text style={{fontSize:12,fontWeight:400,top:18}}>
                               <EvilIcons name="location" size={20} color="black" />
                          Palau Sant Jordi, Barcelona
                        
                        </Text>
                        <Text style={{left:334,paddingTop:18}}>
                        <MaterialIcons name="favorite-outline" size={20} color="#7C7C7C" 
                        style={{left:20,gap:17 }}/>
                        <Entypo name="share" size={20} color="#7C7C7C" />

                        </Text>
                    </View>
                </View>
            </View>
       </View>

        <View style={{height:84,width:373,top:160}}>
            <View>
                <Image
                source={require('../assets/kooks.png')}
                />
            </View>

            <View style={{left:100,top:-83}}>
                <Text style={{fontSize:12,fontWeight:400}} >
                Fri, Apr 22 · 21.00 Pm
                </Text>
                <Text style={{top:10,fontWeight:700,fontSize:18}}>
               
                The Kooks
                </Text>

                <Text style={{left:240,top:-10}}>
                     <MaterialIcons name="favorite-outline" size={20} color="#7C7C7C" 
                           />
                      <Entypo name="share" size={20} color="#7C7C7C" />
                 </Text>
               
                <Text style={{top:-5,fontSize:12,fontWeight:400}}>
                    <EvilIcons name="location" size={15} color="black" />
                    
                    Razzmatazz
                </Text>
            </View>
        </View>

        <View style={{height:84,width:373,top:180}}>
            <View>
                <Image
                source={require('../assets/thewambat.png')}
                />
            </View>

            <View style={{left:100,top:-83}}>
                <Text style={{fontSize:12,fontWeight:400}} >
                Mon, Apr 25  · 17.30Pm
                </Text>
                <Text style={{top:10,fontWeight:700,fontSize:18}}>
                The Wombats
                </Text>

                <Text style={{left:240,top:-10}}>
                     <MaterialIcons name="favorite-outline" size={20} color="#7C7C7C" 
                           />
                      <Entypo name="share" size={20} color="#7C7C7C" />
                 </Text>
               
                <Text style={{top:-5,fontSize:12,fontWeight:400}}>
                    <EvilIcons name="location" size={15} color="black" />
                    Sala Apolo
                </Text>
            </View>
        </View>

        <View style={{height:84,width:373,top:200}}>
            <View>
                <Image
                source={require('../assets/fosterthepeople.png')}
                />
            </View>

            <View style={{left:100,top:-83}}>
                <Text style={{fontSize:12,fontWeight:400}} >
                Thu, Apr 19 - 20.00 Pm
                </Text>
                <Text style={{top:10,fontWeight:700,fontSize:18}}>
               
                Foster The People
                </Text>

                <Text style={{left:240,top:-10}}>
                     <MaterialIcons name="favorite-outline" size={20} color="#7C7C7C" 
                           />
                      <Entypo name="share" size={20} color="#7C7C7C" />
                 </Text>
               
                <Text style={{top:-5,fontSize:12,fontWeight:400}}>
                    <EvilIcons name="location" size={15} color="black" />
               
                La Monumental
                </Text>
            </View>
        </View>



        <View style={{flex:1,top:90,width:390,alignItems:'center',justifyContent:"space-evenly"}}>

            <View >
                    <Text style={{left:-150,top:65}}>
                    <AntDesign name="home" size={24} color="black" style={{left:-30}} /> 
                    </Text>

                    <Text style={{left:-75,top:40}}>
                    <EvilIcons name="search" size={24} color="#BDBDBD"/>

                    </Text>

                    <Text style={{top:20}}>
                    <Foundation name="ticket" size={24} color="#BDBDBD"/>

                    </Text>

                    <Text style={{left:75}}>
                    <MaterialIcons name="favorite-border" size={24} color="#BDBDBD"/>

                    </Text>

                    <Text style={{left:150,top:-25}}>
                    <AntDesign name="user" size={24} color="#BDBDBD"/>

                    </Text>
            </View>
        </View>





    </View>
</SafeAreaView>
  )
}

export default Home