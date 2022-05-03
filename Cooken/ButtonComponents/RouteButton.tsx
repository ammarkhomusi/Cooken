import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';
import React from 'react';

interface Props {
    text: string;
    onPress(): void;
}

export const RouteButton: React.FC<Props> = ({ text, onPress }) => {
  const content = (
    <View style={styles.button}>
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
    flexDirection: 'row',
    justifyContent:'flex-start',
    alignItems:'flex-start',
    marginBottom:30,

    height: 62,
    width:20,
    borderRadius: 100/ 5,
  },
  text: {
    color: 'white',
    fontSize: 20
  }
})
