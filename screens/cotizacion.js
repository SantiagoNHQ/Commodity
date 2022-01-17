import * as React from 'react';
import { Button, View, Text, TextInput, TouchableOpacity, ScrollView, Modal, Pressable, Image} from 'react-native';
import BarraSuperior from '../components/barraSuperior';
import Precio from '../components/precio';
import axios from 'axios';

import { useDispatch, useSelector } from "react-redux";

import {actualizarCommodity} from "../redux/actions"

import {colors} from "../colors"
import { Ionicons } from '@expo/vector-icons';

export default function Cotizacion({ navigation }) {

    const dispatch = useDispatch()
    
    const [fechaInicial, setFechaInicial]= React.useState("")
    const [fechaFinal, setFechaFinal]= React.useState("")
    const [error, setError]= React.useState(false)
    const [cargando, setCargando]= React.useState(false)
    

    const commoditys = useSelector((state) => state.commodity.commoditys)



    const traerDatos = async (fechaInicial, fechaFinal)=>{
        if(!fechaInicial || fechaInicial< 1963 || fechaInicial>fechaFinal  || !fechaFinal || fechaFinal>2016 ){
            setError(true)
            return
        }
        setError(false)
        setCargando(true)

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
            arr.push({commo:obj[property]})
        }
        
        setCargando(false)
        dispatch(actualizarCommodity(arr))

    }

    return (
        <View style={{ flex: 10, maxWidth:"100%", backgroundColor:colors.fondo }}>
            <View style={{flex:1}}>
                <BarraSuperior navigation={navigation} style={{flex:1}}/>
            </View>
            <View style={{flex:9,}}>
    
                
                <Text style={{flex:1.5, textAlign:"center", textAlignVertical:"center", fontSize:30, fontStyle:"italic", fontWeight:"bold",color:colors.fuerte}}>Commoditys</Text>
                
                <View style={{flexDirection:"row", flex:0.5, marginHorizontal:"10%", justifyContent:"space-around" }}>
                    <TextInput style={{flex:1, borderWidth:1, textAlign:"center", borderRadius:20, borderColor:colors.fuerte, borderWidth:2,minHeight:30 }} onChangeText={setFechaInicial} placeholder='Desde' keyboardType="numeric" />
                    <TextInput style={{flex:1, borderWidth:1, textAlign:"center", borderRadius:20, borderColor:colors.fuerte, borderWidth:2,minHeight:30}} onChangeText={setFechaFinal} placeholder='Hasta' keyboardType="numeric" />
                </View>
            
                <TouchableOpacity style={{flex:1, justifyContent:"center", alignItems:"center", marginTop:"5%" }} onPress={()=> traerDatos(fechaInicial, fechaFinal)}>
                    <View style={{backgroundColor:colors.primario, padding:"2%", borderRadius:100}}>
                        <Ionicons name="search" size={24} color="black" />
                    </View>
                </TouchableOpacity>
                    {error &&<Text style={{textAlign:"center", fontSize:20,textAlignVertical:"center", padding:"2%", color:colors.fuerte, borderRadius:20}}>Ingresar fecha desde 1963 hasta 2016</Text>}

                <View style={{flex:7,marginVertical:"2%", paddingVertical:"10%"}}>
                    {cargando && 
                        <View style={{flex: 1, justifyContent:"center", alignItems:"center"}}>
                          <Image style={{width: 100,height: 100,}}  source={require('../loading-12.gif')} />
                        </View>
                    }
                    <ScrollView style={{}}>
                        {!cargando && commoditys[0] && commoditys.map((comm)=> 
                             <Precio style={{flex:1}} status={false} key={comm.commo[0].commodity} nombre={comm.commo[0].commodity}   datos={comm}/> 
                        )} 
                    </ScrollView>
                </View>

            </View>
        </View>
    );
}