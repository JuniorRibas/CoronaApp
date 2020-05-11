import React from 'react'



import { createAppContainer } from 'react-navigation'
import { createBottomTabNavigator } from 'react-navigation-tabs'

import Icon from 'react-native-vector-icons/FontAwesome'
Icon.loadFont()

import Fa from 'react-native-vector-icons/Feather'
Fa.loadFont()

import Home from './../Home'
import Horario from './../Horarios'
import Mundo from './../Mundo'
import Vidas from './../Vidas'

const Tabs = createAppContainer(createBottomTabNavigator({
    Home:{
        screen: Home,
        navigationOptions:{
            tabBarIcon: ({focused}) =>{
                
                return (
                    <Icon name="user-md" size={25} color={ focused ? '#BF1515' : '#909490' } />
                )
            },
          
        },
        
    },
    Horario:{
        screen: Horario,
        navigationOptions:{
            tabBarIcon: ({focused}) =>{
                return (
                    <Fa name="clock" size={25} color={ focused ? '#BF1515' : '#909490' } />
                )
            },
          
        },
    },
    Mundo:{
        screen: Mundo,
        
        navigationOptions:{
            tabBarIcon: ({focused}) =>{
                return (
                    <Icon name="globe" size={25} color={ focused ? '#BF1515' : '#909490' } />
                )
            },
          
        },
    },
    Vidas:{
        screen: Vidas,
        navigationOptions:{
            tabBarIcon: ({focused}) =>{
                return (
                    <Icon name="heartbeat" size={25} color={ focused ? '#BF1515' : '#909490' } />
                )
            },
          
        },
    }
},
{
    tabBarOptions:{
        showLabel: false
    }
}))




export default Tabs;