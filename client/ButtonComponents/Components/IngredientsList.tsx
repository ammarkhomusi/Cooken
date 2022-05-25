import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
 
interface Props {
    name: string;
    amount: number;
}

export const IngredientsList: React.FC<Props> = ({ name, amount }) => {
  return (
    <View style={styles.ingredientsContainer}>
      <Text style={styles.ingredientText}>{amount}</Text>
      <Text style={styles.ingredientText}>{name}</Text>
    </View>
  )
}


const styles = StyleSheet.create({
  ingredientsContainer:{
    flex:.1,
    flexDirection:'row',
    margin:10

  },
  ingredientText:{
    fontSize:15,
    marginLeft:10,
    color:'white',
    fontWeight:'bold'
  }
})