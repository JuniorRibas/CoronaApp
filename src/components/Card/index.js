import React from 'react';

import { View, Text, StyleSheet } from 'react-native';

import { LineChart, Grid } from 'react-native-svg-charts'

import Icon from 'react-native-vector-icons/Feather'
Icon.loadFont()

// import { Container } from './styles';

const Card = (props) => {

    const data = [10, 10, 40]
    return (
        <View style={style.card}>
            <Text style={{ fontSize: 19, color: '#909490', fontFamily: 'Roboto-Bold' }}>{props.titulo}</Text>
            <View style={{ flexDirection: "row", alignItems: "center" }}>
                <Text style={{ fontSize: 32, color: props.color, fontFamily: 'Roboto-Bold' }}>{props.valor}</Text>
                {/* <Icon name="arrow-up" size={15} color={props.color} /> */}
                {/* <Text style={{ color: props.color }}>10</Text> */}
            </View>

            {/* <LineChart
                style={{ height: '50%', width: '100%' }}
                data={props.dataGrafico}
                svg={{ stroke: props.color }}
                contentInset={{ top: 20, bottom: 20 }}
            >

            </LineChart> */}
        </View>
    )
};


const style = StyleSheet.create({

    card: {
        marginTop: 10,
        width: '45%',
        height: 200,
        backgroundColor: '#FFF',
        elevation: 10,
        padding: 15,
        height:100,
        borderRadius: 8

    },
})

export default Card;
