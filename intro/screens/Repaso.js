import { Text, StyleSheet, View, TextInput, Switch, ImageBackground, Dimensions, Button, Image } from 'react-native'
import React, { useState, useEffect } from 'react'

const BackgroundImage = require('../assets/Fondo1.png')
const Logo = require('../assets/Icono1.png')

export default function Repaso() {
  const [prendido, setPrendido] = useState(false)
  const [nombre, setNombre] = useState('')
  const [correo, setCorreo] = useState('')
  const [showSplash, setShowSplash] = useState(true)

  useEffect(() => {
    const timer = setTimeout(() => {
      setShowSplash(false)
    }, 3000)
    return () => clearTimeout(timer)
  }, [])

  if (showSplash) {
    return (
      <ImageBackground source={BackgroundImage} style={styles.background} resizeMode="cover">
        <View style={styles.overlay}>
        <Text style={styles.tittle}>---Bienvenido A La Base--- </Text>
        <Image source={Logo} style={styles.logo} />
        <Text style={styles.tittle}>Cargando...</Text>
        </View>
      </ImageBackground>
    )
  }

  const mostrarAlerta = () => {
    if (nombre.trim() === '' && correo.trim() === '') {
      alert('ERROR: Completa todos los campos Cadete');
      return;
    }
    if (nombre.trim() === '') {
      alert('Error: Por favor ingresa tu nombre completo Cadete')
      return;
    }
    if (correo.trim() === '') {
      alert('Error: Por favor ingresa tu correo electrónico Cadete')
      return;
    }
    if (!correo.includes('@')) {
      alert('Error: el correo debe contener "@"');
      return;
    }
    if (!correo.includes('.com')) {
      alert('Error: el correo debe contener ".com"');
      return;
    }
    if (!prendido) {
      alert('Error:  Cadete Debes aceptar los términos y condiciones')
      return;
    }
    alert(`Registro completo:\nNombre:${nombre} \nCorreo:${correo}`);
  }

  return (
    <ImageBackground source={BackgroundImage} style={styles.background} resizeMode="cover">
      <View style={styles.overlay}>
        <View style={styles.formContainer}> 
          <Text style={styles.titulo}>Registro De Spartan </Text>
        
          <TextInput
            style={styles.recuadro}
            placeholder="Escribe tu nombre "
            placeholderTextColor="#f30202ff"
            value={nombre}
            onChangeText={setNombre}
            maxLength={50}
          />
          <TextInput
            style={styles.recuadro}
            placeholder="Escribe tu correo electrónico"
            placeholderTextColor="#f30202ff"
            value={correo}
            onChangeText={setCorreo}
            maxLength={50}
          />
          <View style={styles.switchContainer}>
          <Text style={styles.switchLabel}>Aceptar términos y condiciones</Text>
          <Switch value={prendido} onValueChange={setPrendido} />
          </View>
          <Button color="green" title="Registrar" onPress={mostrarAlerta} />
        </View>
      </View>
    </ImageBackground>
  )
}

const { width, height } = Dimensions.get('window') // Obtiene el ancho y alto total de la pantalla del dispositivo
const styles = StyleSheet.create({
  background: { // Estilo para el ImageBackground (la imagen de fondo principal)
    flex: 1,
    width: width,
    height: height,
  },
  overlay: {// Estilo para la View que centra todo el contenido
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 20,
  },
  formContainer: { // Estilo para el recuadro negro
    backgroundColor: 'rgba(0, 0, 0, 0.6)', 
    borderRadius: 10,
    padding: 20,
    alignItems: 'center',
    width: '80%', 
    maxWidth: 400, 
  },
  tittle: { // Estilo para los textos de la pantalla de carga
    fontSize: 28,
    color: 'white',
    fontWeight: 'bold',
    marginBottom: 10,
    textAlign: 'center',
  },
  titulo: { // Estilo para el título del formulario
    fontSize: 24,
    fontWeight: 'bold',
    color: 'white',
    marginBottom: 15,
  },
  recuadro: { // Estilo para los campos de texto
    backgroundColor: 'white',
    borderWidth: 1,
    borderColor: 'black',
    padding: 10,
    width: '100%', 
    marginBottom: 20,
    borderRadius: 5,
  },
  logo: { // Estilo para el logo en la pantalla de carga
    width: 120,
    height: 120,
    marginBottom: 20,
    borderRadius: 60,
  },
  switchContainer: { // Estilo para la View que agrupa el Switch y su texto
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 20,
  },
  switchLabel: { // Estilo para el texto 'Aceptar términos y condiciones'
    fontSize: 16,
    color: 'white',
    marginRight: 10,
  },
})