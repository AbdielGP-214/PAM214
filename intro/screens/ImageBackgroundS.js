import React, { useState, useEffect } from 'react';
import { Text, StyleSheet, View, SafeAreaView, ImageBackground } from 'react-native';


export default function ImageBackgroundS()  {

  const [showSplash, setShowSplash] = useState(true);

  useEffect(() => {

    const timer = setTimeout(() => {

      setShowSplash(false);

    }, 3000);

    return () => clearTimeout(timer);

},[]);


if(showSplash){


  
    return (
      <View style={styles.splashContainer}>
        <Text style={styles.splashText}>BIENVENIDO A LA APP :3! </Text>
      </View>
    );
  }

  return (
    <SafeAreaView  style={{flex: 1}}> 

    <ImageBackground

    source={{
      uri: 'https://www.bmw-m.com/content/dam/bmw/marketBMW_M/www_bmw-m_com/fastlane/motorsport/M4-GT3-EVO/2025/bmw-m4-gt3-evo-hd-06-2.jpg',
    }}
    style={styles.background}
    >

      <View style={styles.overlay}>
        <Text style={styles.title}> Bienvenido! </Text>
      </View>
    </ImageBackground>

    </SafeAreaView>
  );
  }


// Estilos
const styles = StyleSheet.create({
  

  splashContainer: {
    flex: 1, 
    backgroundColor: '#000000ff', 
    justifyContent: 'center', 
    alignItems: 'center', 
  },

  
  splashText: {
    fontSize: 24, 
    color: '#fff', 
  },

  
  background: {
    flex: 1, 
    justifyContent: 'center', 
    alignItems: 'center', 
  },

  
  overlay: {
    backgroundColor: 'rgba(0,0,0,0.5)', 
    padding: 20, 
    borderRadius: 10, 
  },

  
  title: {
    fontSize: 28, 
    color: '#fff', 
    marginBottom: 10, 
    textAlign: 'center', 
  },
});