import * as React from 'react';
import { Button, View, Text } from 'react-native';
import BarraSuperior from '../components/barraSuperior';
import Precio from '../components/precio';

export default function Cotizacion({ navigation }) {
    
    return (
        <View style={{ flex: 10, maxWidth:"100%" }}>
            <View style={{flex:1}}>
                <BarraSuperior navigation={navigation} style={{flex:1}}/>
            </View>
            <View style={{flex:9, backgroundColor:"black"}}>
                <Precio status={true}/>
                <Precio status={true}/>
                <Precio status={false}/>
            </View>
        </View>
    );
}