import React from 'react';
import { View, Text, ImageBackground, ScrollView, StyleSheet, useWindowDimensions, ImageSourcePropType } from 'react-native';
import { NavigationScreenProp } from 'react-navigation';
import { IngredientsList } from '../ButtonComponents/Components/IngredientsList';
import { GenericButton } from '../ButtonComponents/GenericButton';
interface Route {
    key: string;
    name: string;
    params: {
        recipe: {
            title: string;
            difficulty: string;
            ingredients: {
                    ingredientName: string;
                    ingredientAmount: number
                }[];
            instructions: string;
            cuisineTag: string;
            imgURL: ImageSourcePropType
        };
        email: string;
        favCuisines: string[]
    };
    path: string | undefined
}

export const RecipeDetails = ({ navigation, route }: { navigation: NavigationScreenProp<any, any>, route: Route}) => {
  const { recipe, email, favCuisines } = route.params

  //routes
  const toHome = () => navigation.navigate('Home', { email: email, favCuisines: favCuisines});
  const toProfile = () => navigation.navigate('Profile')
  const windowHeight = useWindowDimensions().height;

  return (
    <ScrollView style={styles.container}>
      <View style={[styles.mainContainer, {minHeight: Math.round(windowHeight)}]} >
      <ImageBackground source={recipe.imgURL} resizeMode='cover' style={styles.sampleImg} imageStyle={styles.image}></ImageBackground>
      <View style={styles.recipeTitleView}>
        <Text style={styles.recipeTitle}>{recipe.title}</Text>
      <View style={styles.cuisineTagContainer}>
        <Text style={styles.cuisineTag}>tags:</Text>
        <Text style={styles.cuisineTagText}>"{recipe.cuisineTag}"</Text>
      </View>
      </View>
      <View style={styles.ingredients}>
        {recipe.ingredients.map((item, index) => {
        return <IngredientsList name={item.ingredientName} amount={item.ingredientAmount} key={index} />
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