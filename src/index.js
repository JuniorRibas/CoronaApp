import React from 'react'


import { createAppContainer } from 'react-navigation'
import { createStackNavigator } from 'react-navigation-stack'

import Load from './pages/Load'
import StackPrincipal from './pages/StackPrincipal'

const Stack = createAppContainer(createStackNavigator({
    Load:{
        screen: Load
    },
    StackPrincipal:{
        screen: StackPrincipal,
        navigationOptions:{
            headerShown: false
        }
    }
}))




export default Stack;