import React, { useState, useEffect } from 'react';

import { View, Text, ImageBackground, StyleSheet, Image, Animated } from 'react-native';
import { NavigationActions, StackActions } from 'react-navigation';
// import { Container } from './styles';

const Load = (props) => {

    const [load, setLoad] = useState({
        width: new Animated.Value(200),
        height: new Animated.Value(200)
    })


    useEffect(() => {
        Animated.loop(
            Animated.sequence([
                Animated.parallel([
                    Animated.timing(
                        load.width,
                        {
                            toValue: 250,
                            duration: 500,
                            useNativeDriver: false
                        }
                    ),
                    Animated.timing(
                        load.height,
                        {
                            toValue: 250,
                            duration: 500,
                            useNativeDriver: false
                        }
                    )
                ]),
                Animated.parallel([
                    Animated.timing(
                        load.width,
                        {
                            toValue: 200,
                            duration: 500,
                            useNativeDriver: false
                        }
                    ),
                    Animated.timing(
                        load.height,
                        {
                            toValue: 200,
                            duration: 500,
                            useNativeDriver: false
                        }
                    )
                ])
            ])
        ).start()


        setTimeout(() => {

            const resetAction = StackActions.reset({
                index: 0,
                actions: [NavigationActions.navigate({ routeName: 'StackPrincipal' })],
            });

            props.navigation.dispatch(resetAction);

        }, 500);
    }, [])

    return (
        <ImageBackground style={style.container} source={require('./../../assets/background.jpg')}>


            <Animated.Image source={require('./../../assets/corona.png')} style={{
                width: load.width,
                height: load.height,
            }} />



        </ImageBackground>
    )
};


const style = StyleSheet.create({
    container: {
        flex: 1,
        resizeMode: "stretch",
        width: null,
        justifyContent: "center",
        alignItems: "center"
    },
    Image: {

    }
})

Load['navigationOptions'] = p => {
    return {
        headerShown: false
    }
}

export default Load;
