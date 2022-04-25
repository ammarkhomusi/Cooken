import { View, Text, StyleSheet } from 'react-native'
import React from 'react'

export default function IngredientsList() {
  return (
    <View style={styles.ingredientsContainer}>
      <Text style={styles.ingredientText}>2</Text>
      <Text style={styles.ingredientText}>lbs of Spinach</Text>
    </View>
  )
}

const styles = StyleSheet.create({
  ingredientsContainer:{
    flex:.1,
    flexDirection:'row',
    // backgroundColor:'green',
    margin:10

  },
  ingredientText:{
    fontSize:15,
    color:'white',
    fontWeight:'bold'
  }
})