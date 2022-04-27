import { View, Text, StyleSheet, ImageBackground, useWindowDimensions } from 'react-native'
import React, { useState } from 'react';
import GenericButton from '../ButtonComponents/GenericButton';
import RouteButton from '../ButtonComponents/RouteButton';
import { recipeServices } from '../Services/recipeService';

const img = { uri: 'https://firebasestorage.googleapis.com/v0/b/cooken-imgs.appspot.com/o/screenshot%20no%20lines.png?alt=media&token=8b555913-fa90-4848-93db-96d0bce147e1'}
const sampleImg = {uri: 'https://firebasestorage.googleapis.com/v0/b/cooken-imgs.appspot.com/o/greek-salad-3-1200.jpg?alt=media&token=1978a2df-c283-46b2-8754-73b233b21677'}
//will be recipe.imgUrl
export default function Results({ navigation, route }) {
  const  {recipe, email, favCuisines} = route.params;
  // console.log('this is res',res)
  // const email = '';
  // const favCuisines = [];
  // const recipe = {};
  // console.log('thisis fave cuis', favCuisines)
  // console.log('this is result screen',recipe)
  // console.log('this new state', newRecipe)
  const windowHeight = useWindowDimensions().height;

  const [newRecipe, setNewRecipe] = useState({...recipe, imgURL: { uri: recipe.imgURL}});

  //function that rerolls
  const randomRecipe =  async () => {
    const fetchedRecipe = await recipeServices.getRandomRecipe();
    // console.log('this', newRecipe)
    setNewRecipe({...fetchedRecipe, imgURL: { uri: fetchedRecipe.imgURL}});
  }

  //routes
  const toDetails = () => navigation.navigate('RecipeDetails', { recipe: newRecipe, email: email, favCuisines: favCuisines });
  const reloadWithNewResult = () => {
    randomRecipe()
  };
  const toHome = () => navigation.navigate('Home', {email: email, favCuisines: favCuisines});
  const toProfile = () => navigation.navigate('Profile');

  return (
    <View style={[styles.container, {minHeight: Math.round(windowHeight)}]} >
      <ImageBackground source={img} resizeMode='cover' style={styles.img}>
        <View style={styles.logo}>
          <Text style={styles.header}>Here's Your Dish!</Text>
          <Text style={styles.dishTitle}>{newRecipe.title}</Text>
          <ImageBackground source={newRecipe.imgURL} resizeMode='cover' style={styles.sampleImg} imageStyle={styles.image}></ImageBackground>
        </View>
        <View style={styles.chooseButtons}>
          <GenericButton text={'Get Cooken!'} style={{marginTop:15}} onPress={toDetails}/>
          {/* add a dropdown option for difficutly? */}
          <GenericButton text={'Re-roll'} onPress={reloadWithNewResult}/>
        </View>
        <View  style={styles.navButtons}>
          {/* <RouteButton text={'Profile'} style/>
          <RouteButton text={'Logout'}/> */}
          <GenericButton text={'Home'}  style={{width:175, marginLeft:17}} onPress={toHome}/>
          <GenericButton text={'Profile'} style={{width:175, marginLeft:10}} onPress={toProfile}/>
        </View>
      </ImageBackground>
    </View>
  )
}

const styles = StyleSheet.create({
  container:{
    flex: 1,
    // justifyContent: 'center',
    // alignItems: 'center'
  },
  img:{
    flex: 1,
    justifyContent: 'center',
    width: '100%',
    height: '100%'
  },
  sampleImg:{
    marginTop:10,
    flex:1,
    justifyContent:'center',
    width: 400,
    height: 400,
  },
  image:{

    borderRadius: 400/3
  },
  logo:{
    justifyContent:'center',
    alignItems:'center',
    flex:2,
    // backgroundColor:'yellow'
  },
  chooseButtons:{
    justifyContent:'center',
    alignItems:'center',
    flex:1,
    // backgroundColor:'green'
  },
  navButtons:{
    flex:.27,
    justifyContent:'flex-start',
    flexDirection:'row',
    // backgroundColor:'blue'
  },
  header:{
    paddingTop:20,
    fontSize:20,
    fontWeight:'bold'
  },
  dishTitle:{
    fontSize:30,
    fontWeight:'bold'
  }
})