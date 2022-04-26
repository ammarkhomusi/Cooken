import { View, Text,ImageBackground, ScrollView, StyleSheet, useWindowDimensions } from 'react-native'
import React, { useState} from 'react'
import IngredientsList from '../ButtonComponents/Components/IngredientsList';
import GenericButton from '../ButtonComponents/GenericButton';

// const sampleImg = {uri: 'https://firebasestorage.googleapis.com/v0/b/cooken-imgs.appspot.com/o/greek-salad-3-1200.jpg?alt=media&token=1978a2df-c283-46b2-8754-73b233b21677'}
//{...recipe, imgUrl: {uri : recipe.imgURL}}

export default function recipeDetails({ navigation }) {
  //routes
  const toHome = () => navigation.navigate('Home');
  const toProfile = () => navigation.navigate('Profile')
  const windowHeight = useWindowDimensions().height;
  const [recipe, setRecipe] = useState({
    title: 'Greek Salad',
    imgUrl: {uri: 'https://firebasestorage.googleapis.com/v0/b/cooken-imgs.appspot.com/o/greek-salad-3-1200.jpg?alt=media&token=1978a2df-c283-46b2-8754-73b233b21677'},
    ingredients: [{ingredientAmount: 2, ingredientName: 'lbs of Spinach'},
                  { ingredientAmount: 3, ingredientName: 'lbs of tomatoes'},
                  {ingredientAmount:1, ingredientName:'cucumber'},
                  {ingredientAmount:4, ingredientName:'oz of black olives'}],
    instructions:`Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt
    ut labore et dolore magna aliqua. Amet cursus sit amet dictum sit amet justo. Pellentesque
    pulvinar pellentesque habitant morbi tristique senectus et. Massa massa ultricies mi quis
    hendrerit dolor magna. Eu augue ut lectus arcu bibendum at varius vel. Sodales ut eu sem
    integer vitae justo eget magna fermentum. Amet facilisis magna etiam tempor. Nunc eget`,
    cuisineTag:'greek'
    })


  return (
    <ScrollView style={styles.container}>
      <View style={[styles.mainContainer, {minHeight: Math.round(windowHeight)}]} >
      <ImageBackground source={recipe.imgUrl} resizeMode='cover' style={styles.sampleImg} imageStyle={styles.image}></ImageBackground>
      <View styles={styles.recipeTitleView}>
        <Text style={styles.recipeTitle}>{recipe.title}</Text>
      <View style={styles.cuisineTagContainer}>
        <Text style={styles.cuisineTag}>tags:</Text><Text style={styles.cuisineTagText}>{recipe.cuisineTag}</Text>
      </View>
      </View>
      <View style={styles.ingredients}>
        {recipe.ingredients.map((item) => {
          return <IngredientsList name={item.ingredientName} amount={item.ingredientAmount} />
        })}

        {/* will map through recipe.ingredients[] */}
      </View>
      <View style={styles.recipeInstructions}>
        <Text style={styles.instructions}>{recipe.instructions}</Text>
      </View>
      <View  style={styles.navButtons}>
          {/* <RouteButton text={'Profile'} style/>
          <RouteButton text={'Logout'}/> */}
          <GenericButton text={'Home'}  style={{borderWidth:2, borderColor:'white', width:175 }} onPress={toHome}/>
          <GenericButton text={'Profile'} style={{borderWidth:2, borderColor:'white', width:175, marginLeft:10}} onPress={toProfile}/>
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
  cuisineTagContainer:{
    justifyContent:'center',
    alignItems:'center',
  },
  cuisineTag:{
    color:'white',
    justifyContent:'center',
    alignItems:'center',
    fontSize:20
  },
  cuisineTagText:{
    flexDirection:'row',
    color:'white',
    justifyContent:'center',
    alignItems:'center',
    fontSize:20,
    marginLeft:20
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