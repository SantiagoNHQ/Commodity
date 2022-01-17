import * as React from 'react';
import { Button, View, Text, TextInput, TouchableOpacity, ScrollView} from 'react-native';
import BarraSuperior from '../components/barraSuperior';
import Precio from '../components/precio';
import axios from 'axios';

import { useDispatch, useSelector } from "react-redux";

import {actualizarCommodity} from "../redux/actions"

import {colors} from "../colors"

export default function Cotizacion({ navigation }) {

    const dispatch = useDispatch()
    
    const [fechaInicial, setFechaInicial]= React.useState("")
    const [fechaFinal, setFechaFinal]= React.useState("")

    const commoditys = useSelector((state) => state.commodity.commoditys)

    const consolee = React.useMemo(() => {
        console.log(commoditys)
        console.log("holaa")
        console.log(commoditys[0]?.commo)
    }, [commoditys]);


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
            arr.push({commo:obj[property]})
        }
        // console.log(arr)
        // console.log(arr.length)
        console.log("aaaa")
        
        dispatch(actualizarCommodity(arr))
        // console.log(commoditys)

    }

    return (
        <View style={{ flex: 10, maxWidth:"100%", backgroundColor:colors.fondo }}>
            <View style={{flex:1}}>
                <BarraSuperior navigation={navigation} style={{flex:1}}/>
            </View>
            <View style={{flex:9,}}>
                
                <Text style={{flex:1.5, textAlign:"center", textAlignVertical:"center", fontSize:30, fontStyle:"italic", fontWeight:"bold",color:colors.fuerte}}>Commoditys</Text>
                
                <View style={{flexDirection:"row", flex:0.5, marginHorizontal:"10%", justifyContent:"space-around" }}>
                    <TextInput style={{flex:1, borderWidth:1, textAlign:"center", borderRadius:20, borderColor:colors.fuerte, borderWidth:2, }} onChangeText={setFechaInicial} placeholder='Desde' keyboardType="numeric" />
                    <TextInput style={{flex:1, borderWidth:1, textAlign:"center", borderRadius:20, borderColor:colors.fuerte, borderWidth:2,}} onChangeText={setFechaFinal} placeholder='Hasta' keyboardType="numeric" />
                </View>
            
                <TouchableOpacity style={{flex:1, justifyContent:"center", alignItems:"center", }} onPress={()=> traerDatos(fechaInicial, fechaFinal)}>
                    <Text style={{textAlign:"center", fontSize:20,textAlignVertical:"center", backgroundColor:colors.primario, padding:"2%", color:colors.blanco, borderRadius:20}}>Buscar</Text>
                </TouchableOpacity>
                {/* <View style={{flex:1, backgroundColor:"red",justifyContent:"center", alignItems:"center", width:"100%"}}> */}

                <View style={{flex:7,marginVertical:"2%", paddingVertical:"10%"}}>
                    <ScrollView style={{}}> 

                        
                        {commoditys[0] && commoditys.map((comm)=> 
                             <Precio style={{flex:1}} status={false} key={comm.commo[0].commodity} nombre={comm.commo[0].commodity}   datos={comm}/> 
                        )} 
                       


                    </ScrollView>
                </View>

            </View>
        </View>
    );
}