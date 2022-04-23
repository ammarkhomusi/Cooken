import { View, Text, StyleSheet, TouchableOpacity } from 'react-native'
import React from 'react'

export default function GenericButton({ text, onPress, style }) {
  const content = (
    <View style={[styles.button, style]}>
      <Text style={styles.text}>{text}</Text>
    </View>
  )
  return (
    <TouchableOpacity onPress={onPress}>{content}</TouchableOpacity>
  )

}

const styles = StyleSheet.create({
  button: {
    backgroundColor:'#F6A84C',
    justifyContent:'center',
    alignItems: 'center',
    padding: 5,
    marginBottom:30,
    height: 62,
    width:300,
    borderRadius: 100/ 5,
  },
  text: {

    color: 'white',
    fontSize: 20
  }
})