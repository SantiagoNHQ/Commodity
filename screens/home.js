import * as React from 'react';
import { Button, Text, View, TextInput, Image} from 'react-native';
import { TouchableOpacity } from 'react-native-gesture-handler';
import BarraSuperior from '../components/barraSuperior';
import axios from "axios"

import {colors} from "../colors"

import { AntDesign } from '@expo/vector-icons';
import { MaterialIcons } from '@expo/vector-icons';
import { Ionicons } from '@expo/vector-icons';
import { MaterialCommunityIcons } from '@expo/vector-icons';


export default function HomeScreen({ navigation }) {


    return (
      <View style={{ flex: 10, maxWidth:"100%", }}>
            <View style={{flex:1}}>
                <BarraSuperior navigation={navigation} style={{flex:1}}/>
            </View>
            <View style={{flex:9, backgroundColor:colors.fondo, justifyContent:"center", alignItems:"center" }}>

                <View style={{ height:200,marginBottom:"5%" }}>
                    <Image
                        style={{ width: 200, height: 200, borderRadius:100, borderWidth:5, borderColor:colors.primario}}
                        source={require('../perfil.jpg')}
                    />

                </View>
                <View style={{flex:1, backgroundColor:colors.fuerte, maxHeight:"20%", width:"80%", marginBottom:"5%",borderRadius:15, justifyContent:"center"}}>
                    <Text style={{textAlign:"center", fontSize:25,fontWeight:"bold", color:colors.blanco}}>Hidalgo Santiago</Text>
                    <Text style={{textAlign:"center", fontSize:20, color:colors.blanco}}>Santi</Text>
                </View>    
                <View style={{flex:1, backgroundColor:colors.blanco, maxHeight:"20%", width:"80%" ,borderRadius:15, justifyContent:"center"}}>
                    <View style={{flexDirection:"row", justifyContent:"center", marginVertical:"1.5%"}}>
                        <MaterialIcons name="work-outline" size={24} color={colors.fuerte} />
                        <Text style={{textAlign:"left", marginHorizontal:"2%", fontSize:15, color:colors.fuerte}}>React Native Developer</Text>

                    </View>
                    <View style={{flexDirection:"row", justifyContent:"center", marginVertical:"1.5%"}}>
                        <Ionicons name="mail-outline" size={24} color={colors.fuerte} />
                        <Text style={{textAlign:"left", marginHorizontal:"2%", fontSize:15, color:colors.fuerte}}>santiagonicolashq@gmail.com</Text>
                    </View>
                    <View style={{flexDirection:"row", justifyContent:"center", marginVertical:"1.5%"}}>
                        <MaterialCommunityIcons name="map-marker-outline" size={24} color={colors.fuerte} />   
                        <Text style={{textAlign:"left", marginHorizontal:"2%", fontSize:15, color:colors.fuerte}}>Mendoza, Argentina</Text>
                    </View>
                    
                </View>    
                
            </View>
      </View>
    );
}
  