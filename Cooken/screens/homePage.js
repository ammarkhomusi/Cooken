import { View, Text, StyleSheet, ImageBackground, LogBox } from 'react-native'
import React, { useState, useContext, useEffect } from 'react';
import GenericButton from '../ButtonComponents/GenericButton';
import { UserContext } from '../App';
import { recipeServices } from '../Services/recipeService';

LogBox.ignoreLogs(['Non-serializable values were found in the navigation state'])
const img = { uri: 'https://firebasestorage.googleapis.com/v0/b/cooken-imgs.appspot.com/o/screenshot%20no%20lines.png?alt=media&token=8b555913-fa90-4848-93db-96d0bce147e1'}
const homeImg = { uri: 'https://firebasestorage.googleapis.com/v0/b/cooken-imgs.appspot.com/o/Screenshot%20(70).png?alt=media&token=7bf3081e-d4f5-4865-a6bf-55e934ce3c84'}


export default function HomePage({ navigation, route }) {
  const { email, favCuisines} = route.params;
  console.log('this is params',route.params)
  const [recipe, setRecipe] = useState({});
  //function to generate random tag
  const randomRecipe =  async () => {
    const newRecipe = await recipeServices.getRandomRecipe();
    console.log('should be empty', recipe)
    console.log('new recipe', newRecipe)
    setRecipe(newRecipe);
    console.log('this should be new recipe',recipe)
  };

  //function to get random cuisinetag
  const cuisineTag = favCuisines[Math.floor(Math.random()*favCuisines.length)]
  console.log('this is random cuisine tag',cuisineTag);

  //function to get tag recipe
  const tagRecipe = async () => {
    const tagRecipe = await recipeServices.getRecipeByCuisine(cuisineTag, 'any')
    console.log('thisis tagrecipe', tagRecipe)
    setRecipe(tagRecipe)
    return tagRecipe;
  }

  //routes
  const toProfile = () => navigation.navigate('Profile',{});
  const toLogin = () => navigation.navigate('Login', { email: email, favCuisines: favCuisines});
  //on get recipe with tags
  const toTagResult =  async () => {
    const res = await tagRecipe()
    console.log('homepage res', res)
    navigation.navigate('Results',  {res: res, email: email, favCuisines: favCuisines, random: false})};


  //on surprise me click
  const toRandomResult = async () =>  {
    randomRecipe()
    navigation.navigate('Results', {recipe: recipe, email: email, favCuisines: favCuisines, random: true })
    // const res =  await randomRecipe()
    // navigation.navigate('Results', res)
  }




  return (
    <View style={styles.container}>
      <ImageBackground source={img} resizeMode='cover' style={styles.img}>
        <View style={styles.logo}>
        <ImageBackground blurRadius={10} source={homeImg} resizeMode='cover' style={styles.homeImg} imageStyle={styles.image}></ImageBackground>
          <Text style={styles.mainText}>WHAT'S</Text>
          <Text style={styles.mainText}>COOKEN</Text>
        </View>
        <View style={styles.rollButtons}>
          <Text style={styles.explainText}>Picks a dish based off your preferences</Text>
          <GenericButton text={'Roll For Your Recipe!'} onPress={toTagResult}/>
          {/* add a dropdown option for difficutly? */}
          <Text style={styles.explainText}>Picks a totally random dish!</Text>
          <GenericButton text={'Suprise Me!!'} onPress={toRandomResult}/>
        </View>
        <View  style={styles.navButtons}>
          {/* <RouteButton text={'Profile'} style/>
          <RouteButton text={'Logout'}/> */}
          <GenericButton text={'Profile'} style={{width:175, marginLeft:17}} onPress={toProfile}/>
          <GenericButton text={'Logout'} style={{width:175, marginLeft:10}} onPress={toLogin}/>
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
  homeImg:{
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
    alignItems:"center",
    flex:1,
  },
  mainText:{
    color:'#FDF397',
    shadowColor:'black',
    fontWeight:'bold',
    fontSize:86
  },
  explainText:{
    fontWeight:'bold',
    fontSize:15
  },
  rollButtons:{
    paddingTop:20,
    marginTop:20,
    paddingBottom:20,
    justifyContent:'center',
    alignItems:'center',
    flex:1,
    // backgroundColor:'green'
  },
  navButtons:{
    flex:.2,
    justifyContent:'flex-start',
    flexDirection:'row',
    // backgroundColor:'blue'
  },
  routeButtons:{
    width:  10
  }
})