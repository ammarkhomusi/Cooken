import { View, Text,ImageBackground, ScrollView, StyleSheet, useWindowDimensions } from 'react-native'
import React from 'react'
import { color } from '@rneui/base'
import IngredientsList from '../ButtonComponents/Components/IngredientsList';
import GenericButton from '../ButtonComponents/GenericButton';

const sampleImg = {uri: 'https://firebasestorage.googleapis.com/v0/b/cooken-imgs.appspot.com/o/greek-salad-3-1200.jpg?alt=media&token=1978a2df-c283-46b2-8754-73b233b21677'}


export default function recipeDetails() {
  const windowHeight = useWindowDimensions().height;


  return (
    <ScrollView style={styles.container}>
      <View style={[styles.mainContainer, {minHeight: Math.round(windowHeight)}]} >
      <ImageBackground source={sampleImg} resizeMode='cover' style={styles.sampleImg} imageStyle={styles.image}></ImageBackground>
      <View styles={styles.recipeTitleView}>
        <Text style={styles.recipeTitle}>Greek Salad</Text>
      </View>
      <View style={styles.ingredients}>
        <IngredientsList/>
        <IngredientsList/>
        <IngredientsList/>
        <IngredientsList/>
        {/* will map through recipe.ingredients[] */}
      </View>
      <View style={styles.recipeInstructions}>
        <Text style={styles.instructions}>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt
          ut labore et dolore magna aliqua. Amet cursus sit amet dictum sit amet justo. Pellentesque
          pulvinar pellentesque habitant morbi tristique senectus et. Massa massa ultricies mi quis
          hendrerit dolor magna. Eu augue ut lectus arcu bibendum at varius vel. Sodales ut eu sem
          integer vitae justo eget magna fermentum. Amet facilisis magna etiam tempor. Nunc eget
        </Text>
      </View>
      <View  style={styles.navButtons}>
          {/* <RouteButton text={'Profile'} style/>
          <RouteButton text={'Logout'}/> */}
          <GenericButton text={'Profile'}  style={{borderWidth:2, borderColor:'white', width:175 }}/>
          <GenericButton text={'Logout'} style={{borderWidth:2, borderColor:'white', width:175, marginLeft:10}}/>
        </View>
      </View>
    </ScrollView>
  )
}

const styles = StyleSheet.create({
  container:{
    flex:1,
    backgroundColor:'#ffaa00',
    width:'100%',
    // height
  },
  mainContainer:{
    justifyContent:'center',
    alignItems:'center'
  },
  sampleImg:{
    flex:1,
    justifyContent:'center',
    alignItems:'center',
    width: 400,
    height: 500,
  },
  image:{
    borderBottomLeftRadius: 400/4,
    borderBottomRightRadius:400/4.5
  },
  recipeTitleView:{
    flex:1,
    justifyContent:'center',
    alignItems:'center',

  },
  ingredients:{
    borderWidth:2,
    borderColor:'white',
    borderRadius: 100/6,
    flex:1,
    marginBottom:20,
    marginTop:15
  },
  recipeTitle:{
    color:'white',
    marginTop:10,
    justifyContent:'center',
    alignItems:'center',
    // backgroundColor:'blue',
    fontSize:40,
    fontWeight:'bold'
  },
  recipeInstructions:{
    borderWidth:2,
    borderColor:'white',
    borderRadius: 100/5,
    marginLeft:25,
    marginRight:25,
    justifyContent:'center',
    alignItems:'center',
    flex:1,
    // backgroundColor:'teal'
  },
  instructions:{
    margin:10,
    fontSize:20,
    color:'white',
    flex:1,
    justifyContent:'center',
    alignItems:'center'
  },
  navButtons:{
    marginTop:15,
    flex:.27,
    justifyContent:'flex-start',
    flexDirection:'row',
  }

})