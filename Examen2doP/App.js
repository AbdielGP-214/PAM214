//1. Imports: Zona de importaciones
import { Text, StyleSheet, View, TextInput, ImageBackground, Dimensions, Button, Image,ScrollView } from 'react-native'
import React, { useState, useEffect } from 'react'

const BackgroundImage = require('../Examen2doP/assets/fondo1.png')
const Logo = require('../Examen2doP/assets/Icono1.png')

//2. Main: Zona de componentes
export default function App() {

const [showSplash, setShowSplash] = useState(true)

    useEffect(() => {

    const timer = setTimeout(() => {

      setShowSplash(false);

    }, 4000);

    return () => clearTimeout(timer);

},[]);

if (showSplash) {
    return (
      <ImageBackground source={BackgroundImage} style={styles.background} resizeMode="cover">
        <View style={styles.overlay}>
        <Text style={styles.tittle}>---Bienvenido a tu perfil--- </Text>
        <Image source={Logo} style={styles.logo} />
        <Text style={styles.tittle}>Cargando...</Text>
        </View>
      </ImageBackground>
    )
  }


  return (
       
     <ImageBackground source={BackgroundImage} style={styles.background} resizeMode="cover">
      <View style={styles.overlay}>
        <View style={styles.formContainer}> 
          <Text style={styles.titulo}>perfil </Text>
        
          
          
         
        </View>
      </View>
    </ImageBackground>



  );
}
//3. Estilos: Zona estetica y posicionamiento 
const { width, height } = Dimensions.get('window')
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
   background: { 
    flex: 1,
    width: width,
    height: height,
  },
  overlay: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 20,
  },
   tittle: { 
    fontSize: 28,
    color: 'white',
    fontWeight: 'bold',
    marginBottom: 10,
    textAlign: 'center',
    },
    formContainer: { 
    backgroundColor: 'rgba(0, 0, 0, 0.6)', 
    borderRadius: 10,
    padding: 20,
    alignItems: 'center',
    width: '80%', 
    maxWidth: 400, 
  },
  titulo: { 
    fontSize: 24,
    fontWeight: 'bold',
    color: 'white',
    marginBottom: 15,
  },


});
