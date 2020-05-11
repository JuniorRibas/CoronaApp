import React, { useEffect, useState } from 'react';

import { View, Text, StyleSheet, ImageBackground, FlatList, TouchableOpacity } from 'react-native';

import {
    AdMobBanner,
    AdMobInterstitial,
    PublisherBanner,
    AdMobRewarded,
    setTestDeviceIDAsync
} from 'expo-ads-admob';


import axios from 'axios'

import Icon from 'react-native-vector-icons/Feather'
Icon.loadFont()

import Card from './../../components/Card'




const Home = () => {

    const data = [10, 20, 40]

    const [dados, setDados] = useState({
        list: []
    })
    const [ativo, setAtivo] = useState({
        pais: {
            pais: 'Escolha na Lista',
            dados: {
                "totalCasos": "0",
                "NovoCasos": "0",
                "totalMorte": "0",
                "NovasMortes": "0",
                "recuperados": "0",
                "ativos": "0"
            }
        }
    })

    useEffect(() => {
        console.log('Executou')
        LoadTabela()
    }, [])

    const LoadTabela = async () => {
        const data = await axios.get('http://192.168.200.137:3333/tabela')

        lista = { list: data.data }
        setDados(lista)
    }




    class RenderTable extends React.PureComponent {
        render() {
            return (
                <View key={this.props.item.pais + this.props.item.dados.totalCasos} style={style.listCabecalhoAndBody}>
                    <TouchableOpacity style={[{ width: '39%' }, style.listItens, { alignItems: 'flex-start', paddingLeft: 5, marginLeft: 0 }]}
                        onPress={() => {
                            setAtivo({ pais: this.props.item })
                        }}

                    >
                        <Text>{this.props.item.pais}</Text>
                    </TouchableOpacity>


                    <View style={[{ width: '15%' }, style.listItens]}>
                        <Text>{this.props.item.dados.totalCasos}</Text>
                    </View>
                    <View style={[{ width: '15%' }, style.listItens]}>
                        <Text >{this.props.item.dados.ativos}</Text>
                    </View>
                    <View style={[{ width: '15%' }, style.listItens]}>
                        <Text >{this.props.item.dados.recuperados}</Text>
                    </View>
                    <View
                        style={[{ width: '15%' }, style.listItens]}>
                        <Text >{this.props.item.dados.totalMorte}</Text>
                    </View>
                </View>
            )
        }
    }







    return (
        <View style={style.container}>
            <AdMobBanner
                bannerSize="fullBanner"
                adUnitID="ca-app-pub-1947730406452332/6751395709" // Test ID, Replace with your-admob-unit-id
                setTestDeviceIDAsync
                servePersonalizedAds // true or false
                onDidFailToReceiveAdWithError={(erro) => console.log(erro)} />
            <View style={style.ImageBackground} >
                <View style={{ marginTop: 30, marginHorizontal: 30 }}>
                    <Text style={{ color: '#FFF', fontFamily: 'Roboto-Medium' }}>Covid-19 Tracker</Text>
                    <Text style={{ color: '#FFF', fontSize: 40, fontFamily: 'Roboto-Bold' }} numberOfLines={1}>{ativo.pais.pais}</Text>
                    <Text style={{ color: '#909490', fontFamily: 'Roboto-Medium' }}>Ultima busca foi feita em : {new Date().getHours() + ":" + String(new Date().getMinutes()).padStart(2, '0')} </Text>
                </View>
            </View>
            <View style={style.container2}>

                <View style={{
                    top: -30,
                    marginHorizontal: 30
                }}>
                    <View style={{
                        flexDirection: "row",
                        justifyContent: 'space-between'
                    }}>
                        <Card titulo="CONFIRMADO" dataGrafico={data} color="#BF1515" valor={ativo.pais.dados.totalCasos} />

                        <Card titulo="ATIVOS" dataGrafico={data} color="#2768E5" valor={ativo.pais.dados.ativos} />
                    </View>
                    <View style={{
                        flexDirection: "row",
                        justifyContent: 'space-between'
                    }}>
                        <Card titulo="RECUPERADOS" dataGrafico={data} color="#08BA2D" valor={ativo.pais.dados.recuperados} />


                        <Card titulo="MORTES" dataGrafico={data} color="#9A9A9A" valor={ativo.pais.dados.totalMorte} />
                    </View>
                </View>


                <View style={style.listContainer}>

                    <View style={style.listCabecalhoAndBody}>
                        <View style={[{ width: '39%' }, style.listItens, { alignItems: 'flex-start', paddingLeft: 5, marginLeft: 0 }]}>
                            <Text style={{ fontSize: 15, fontFamily: 'Roboto-Bold' }}>PAÍS</Text>
                        </View>


                        <View style={[{ width: '15%' }, style.listItens]}>
                            <Text style={{ color: '#BF1515', fontFamily: 'Roboto-Bold' }}>C</Text>
                        </View>
                        <View style={[{ width: '15%' }, style.listItens]}>
                            <Text style={{ color: '#2768E5', fontFamily: 'Roboto-Bold' }} >A</Text>
                        </View>
                        <View style={[{ width: '15%' }, style.listItens]}>
                            <Text style={{ color: '#08BA2D', fontFamily: 'Roboto-Bold' }} >R</Text>
                        </View>
                        <View style={[{ width: '15%' }, style.listItens]}>
                            <Text style={{ color: '#9A9A9A', fontFamily: 'Roboto-Bold' }} >M</Text>
                        </View>
                    </View>
                    <FlatList
                        data={dados.list}
                        renderItem={({ item }) => <RenderTable item={item} />}
                        scrollEnabled={true}
                        removeClippedSubviews
                        maxToRenderPerBatch={5}
                    />
                </View>
            </View>

            {/* <View style={style.body}>


            </View> */}

        </View>
    )
};




const style = StyleSheet.create({
    container: {
        flex: 1,

    },
    ImageBackground: {
        flex: 1,
        backgroundColor: '#212b46',

    },
    container2: {
        flex: 2,
    },
    listContainer: {
        marginHorizontal: 30,
        top: -20,
        height: '57%'
    },
    listCabecalhoAndBody: {
        flexDirection: "row",
        height: 30,
        alignItems: "center",
        marginTop: 2
    },
    listItens: {
        borderRadius: 5,
        backgroundColor: '#DDD',
        height: '100%',
        justifyContent: "center",
        alignItems: "center",
        marginLeft: 1
    }
})



export default Home;
