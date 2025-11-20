import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

export default function Detalle() {
  return (
    <View style={styles.container}>
      <Text style={styles.text}>Detalles Usuario</Text>
      <Text style={styles.subText}>Usando Navegacion Stack</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    justifyContent: 'center',
    alignItems: 'center',
  },
  text: {
    fontSize: 20,
    fontWeight: 'bold',
    marginBottom: 10,
  },
  subText: {
    fontSize: 16,
    color: 'purple',
  }
});