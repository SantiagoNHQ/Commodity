import * as React from 'react';
import { Button, View, Text, TextInput, TouchableOpacity } from 'react-native';
import BarraSuperior from '../components/barraSuperior';
import Precio from '../components/precio';
import axios from 'axios';

export default function Cotizacion({ navigation }) {
    const [fechaInicial, setFechaInicial]= React.useState("")
    const [fechaFinal, setFechaFinal]= React.useState("")


    const traerDatos = async (fechaInicial, fechaFinal)=>{

        var obj = {}
        var arr=[]
        for(let año=fechaInicial; año<=fechaFinal; año++){
            const res = await axios.get(`https://data.opendatasoft.com/api/records/1.0/search/?dataset=commodity-prices%40public&q=&facet=date&facet=commodity&refine.date=${año}`)
            let data = res.data.records
            let aux = []
            data.map((comm)=>{
                obj[comm.fields.commodity]? null: obj[comm.fields.commodity]=[]
                if(!aux.includes(comm.fields.commodity)){
                    obj[comm.fields.commodity] = [...obj[comm.fields.commodity],{commodity: comm.fields.commodity, price: comm.fields.price_index, año}]
                }
                aux.push(comm.fields.commodity)
            })
        }
    
        for (const property in obj) {
            // console.log(property)
            arr.push({[property]:obj[property]})
        }
        console.log(arr)
        console.log(arr.length)
        // console.log(arr[5])
    }

    return (
        <View style={{ flex: 10, maxWidth:"100%" }}>
            <View style={{flex:1}}>
                <BarraSuperior navigation={navigation} style={{flex:1}}/>
            </View>
            <View style={{flex:9, backgroundColor:"grey"}}>
                <TextInput style={{borderWidth:1}} onChangeText={setFechaInicial} placeholder='Desde' keyboardType="numeric" />
                <TextInput style={{borderWidth:1}} onChangeText={setFechaFinal} placeholder='Hasta' keyboardType="numeric" />
            
                <TouchableOpacity onPress={()=> traerDatos(fechaInicial, fechaFinal)}>
                    <Text>ver</Text>
                </TouchableOpacity>

                <Precio status={true} datos={[1,2,3,4,5,6]}/>
                <Precio status={true}/>
                <Precio status={false}/>
            </View>
        </View>
    );
}