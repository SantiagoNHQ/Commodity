import * as React from 'react';
import { TouchableOpacity, View, Text,  } from 'react-native';
import { AntDesign } from '@expo/vector-icons';


export default function BarraSuperior({ navigation }) {
    return (
      <View style={{ flex:3,flexDirection:"row",justifyContent:"center",alignItems:"center", maxHeight:100, backgroundColor:"green"}}>
        <TouchableOpacity onPress={()=>navigation.openDrawer()} style={{flex:1, marginHorizontal:"5%", marginTop:"2%", justifyContent:"center"}}>
            <AntDesign  name="menufold" size={30} color="black" />
        </TouchableOpacity>
        <View style={{flex:1, marginHorizontal:"5%", marginTop:"2%", justifyContent:"center", alignItems:"center"}}>
            <Text>Santiago</Text>
        </View>
        <View style={{flex:1, marginHorizontal:"5%", marginTop:"2%", justifyContent:"center", alignItems:"center"}}>
            {/* <Text>Santiago</Text> */}
        </View>
      </View>
    );
}
  