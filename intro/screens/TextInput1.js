import { Text, StyleSheet, View, TextInput, Button, Alert} from 'react-native'
import React, { Component, useState} from 'react'


export default function TextInput1() {

    const [nombre, setNombre] = useState('');
    const [contraseña, setContraseña] = useState('');
    const [contenido, setContenido] = useState('');

    // Esta alerta se ejecutara directamente en celular
    const mostrarAlerta = ()=>{
        if (nombre.trim()=== '' || contraseña.trim()==='' || contenido.trim()===''){
            Alert.alert('Error,Por Favor llena todos los campos');//celular
            alert('Error ,Por Favot llena todos los campos') //navegador
        }else {
            Alert.alert(`Hola, ${nombre}! ,Tus datos han sido registrado con exito`);
            alert(`Hola, ${nombre}! ,Tus datos han sido registrados con exito , contraseña :${contraseña}! ,contenido:  ${contenido}! `)
            setNombre('');
            setContraseña('');
            setContenido('');
        }
    };


    return (
        <View style={styles.container}>
        <Text style={styles.label}>Ingresa tu nombre</Text>

        <TextInput
            style={styles.input}
            placeholder="Ej. Abdiel"
            value={nombre}
            onChangeText={setNombre}
            keyboardType="default"
            autoCapitalize="words"
        />

        <TextInput
        style={styles.input}
        placeholder='Ej. Password'
        keyboardType='numeric'
        secureTextEntry= {true}
        value={contraseña}
        onChangeText={setContraseña}
        />

        <TextInput
        style={styles.input}
        multiline={true}
        numberOfLines={4}
        value={contenido}
        onChangeText={setContenido}
        />
        <Button
        title='Saludar'
        onPress={mostrarAlerta}
        color="green"
        />

        </View>
    )
}

// 4. Estilos para nuestros componentes
const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    padding: 20,
    backgroundColor: '#f5f5f5',
  },
  label: {
    fontSize: 20,
    fontWeight: 'bold',
    marginBottom: 10,
    textAlign: 'center',
  },
  input: {
    height: 50,
    borderColor: 'gray',
    borderWidth: 1, //Sirve para ver el borde del input
    borderRadius: 8, // Bordes redondeados
    paddingHorizontal: 15, // Espacio interno a los lados
    marginBottom: 20, // Espacio debajo del input
    fontSize: 16,
  },
});