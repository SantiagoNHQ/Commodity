import * as React from 'react';
import { TouchableOpacity, View, Text  } from 'react-native';
import { AntDesign } from '@expo/vector-icons';

export default function Precio({ status, datos }) {
    const [ver, setVer] = React.useState(status)

    return (
      <TouchableOpacity onPress={()=> setVer(!ver)} style={{ flex:2,justifyContent:"center",alignItems:"center", maxHeight: ver&&datos? datos.length*50:50, backgroundColor:"green", borderRadius:20, marginVertical:"2%"}}>
          <View style={{flex:1, flexDirection:"row", justifyContent:"space-evenly", alignItems:"center"}}>

            <Text style={{textAlign:"center", marginHorizontal:"5%"}}>algo</Text>
            {!ver && <AntDesign name="caretdown" size={24} color="black" />}
            {ver && <AntDesign name="caretup" size={24} color="black" />}

          </View>
          {ver && datos?.map(()=>
            <Text style={{flex:1}}>no</Text>

          )}
      </TouchableOpacity>
    );
}
  