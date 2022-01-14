import * as React from 'react';
import { Button, Text, View } from 'react-native';
import { TouchableOpacity } from 'react-native-gesture-handler';
import BarraSuperior from '../components/barraSuperior';
import axios from "axios"


const traerDatos = async ()=>{
    var obj = {}
    var arr=[]
 const res = await axios.get("https://data.opendatasoft.com/api/records/1.0/search/?dataset=commodity-prices%40public&q=&facet=date&facet=commodity&refine.date=2000")
    let data = res.data.records
    data.map((comm)=>{
        obj[comm.fields.commodity]? null: obj[comm.fields.commodity]=[]
        obj[comm.fields.commodity] = [...obj[comm.fields.commodity],{commodity: comm.fields.commodity, price: comm.fields.price_index, año:2000}]
    })
    const res1 = await axios.get("https://data.opendatasoft.com/api/records/1.0/search/?dataset=commodity-prices%40public&q=&facet=date&facet=commodity&refine.date=2001")
    let data1 = res1.data.records
    data1.map((comm)=>{
        obj[comm.fields.commodity]? null: obj[comm.fields.commodity]=[]
        obj[comm.fields.commodity] = [...obj[comm.fields.commodity],{commodity: comm.fields.commodity, price: comm.fields.price_index, año:2001}]
    })
    console.log(obj)
    for (const property in obj) {
        console.log(property)
        arr.push({[property]:obj[property]})
    }
    console.log(arr)
    console.log(arr.length)
    console.log(arr[15])
}

export default function HomeScreen({ navigation }) {
    return (
      <View style={{ flex: 10, maxWidth:"100%" }}>
            <View style={{flex:1}}>
                <BarraSuperior navigation={navigation} style={{flex:1}}/>
            </View>
            <View style={{flex:9, }}>
                <TouchableOpacity onPress={()=> traerDatos()}>
                    <Text>ver</Text>
                </TouchableOpacity>
                <Text>alaaa</Text>
            </View>
      </View>
    );
}
  