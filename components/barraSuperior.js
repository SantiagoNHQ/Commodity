import * as React from 'react';
import { TouchableOpacity, View, Text,  } from 'react-native';
import { AntDesign } from '@expo/vector-icons';

import {colors} from "../colors"


export default function BarraSuperior({ navigation }) {
    return (
      <View style={{ flex:3,flexDirection:"row",justifyContent:"center",alignItems:"center", maxHeight:100, backgroundColor:colors.primario, borderColor:colors.fuerte, borderBottomWidth:3}}>
        <TouchableOpacity onPress={()=>navigation.openDrawer()} style={{flex:1, marginHorizontal:"5%", marginTop:"5%", justifyContent:"center"}}>
            <AntDesign  name="menufold" size={30} color="black" />
        </TouchableOpacity>
        <View style={{flex:1, marginHorizontal:"5%", marginTop:"5%", justifyContent:"center", alignItems:"center"}}>
            <Text style={{fontSize:20, fontWeight:"700"}}>Santiago</Text>
        </View>
        <View style={{flex:1, marginHorizontal:"5%", marginTop:"2%", justifyContent:"center", alignItems:"center"}}>
            {/* <Text>Santiago</Text> */}
        </View>
      </View>
    );
}
  