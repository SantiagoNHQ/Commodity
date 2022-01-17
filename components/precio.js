import * as React from 'react';
import { TouchableOpacity, View, Text  } from 'react-native';
import { AntDesign } from '@expo/vector-icons';
import {colors} from "../colors"

export default function Precio({ status, datos, nombre }) {
    const [ver, setVer] = React.useState(status)

    return (
      <TouchableOpacity onPress={()=> setVer(!ver)} style={{ marginVertical:"2%", marginHorizontal:"3%",  }}>
          <View style={{flex:1, flexDirection:"row", justifyContent:"space-between", alignItems:"center",borderRadius: ver?null:50, borderTopStartRadius:ver?20:null, borderTopEndRadius:ver?20:null, backgroundColor:colors.primario, height:50}}>

            <Text style={{textAlign:"center", marginHorizontal:"5%", width:"80%",fontWeight:"bold", fontSize:15 }}>{`${nombre}`}</Text>
            <View style={{marginRight:"5%"}}>
              {!ver && <AntDesign name="caretdown" size={24} color={colors.fondo} />}
              {ver && <AntDesign name="caretup" size={24} color={colors.fondo} />}
            </View>

          </View>

          {ver &&
          <View style={{backgroundColor:colors.secundario, borderBottomStartRadius:ver?20:null, borderBottomEndRadius:ver?20:null,}}>

            <View style={{flexDirection:"row", justifyContent:"center", alignItems:"center"}}>
              <Text style={{flex:1, textAlign:"center", fontWeight:"bold"}}>{`Año`}</Text>
              <Text style={{flex:1, textAlign:"center", fontWeight:"bold"}}>{`Precio`}</Text>
            </View>

            {ver && datos?.commo.map((comm)=>
              
              <View style={{flexDirection:"row", justifyContent:"center", alignItems:"center"}} key={comm.año}>
                <Text style={{flex:1, textAlign:"center"}}>{`${comm.año}`}</Text>
                <Text style={{flex:1, textAlign:"center"}}>{`${comm.price.toFixed(2)} USD`}</Text>
              </View>
          
            )}
          </View>
          }
      </TouchableOpacity>
    );
}
  