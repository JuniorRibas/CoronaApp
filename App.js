import React, { useState } from 'react';
import { StyleSheet, Text, View } from 'react-native';

import * as Font from 'expo-font';
import { AppLoading } from 'expo';



import Aplication from './src'



export default function App() {

  const [dataLoad, setDataLoad] = useState(false)

  const fetchFonts =  () => {
    return  Font.loadAsync({
      'Roboto-Bold': require('./assets/fonts/Roboto-Bold.ttf'),
      'Roboto-Medium': require('./assets/fonts/Roboto-Medium.ttf'),
    });
  };
  
  if (!dataLoad) {
    return <AppLoading
      startAsync={fetchFonts}
      onFinish={() => setDataLoad(true)}
    />
  } else {
    return (
      <Aplication />
    );
  }


}

