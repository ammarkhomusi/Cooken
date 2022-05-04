import { View, Text, StyleSheet, TouchableOpacity, ViewStyle, GestureResponderEvent } from 'react-native';
import React from 'react';

interface Props {
    text: string;
    onPress: (e: GestureResponderEvent) => void;
    style?: ViewStyle;
}

export const GenericButton: React.FC<Props> = ({ text, onPress, style }) => {
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
    fontWeight:'bold',
    color: 'white',
    fontSize: 25
  }
})