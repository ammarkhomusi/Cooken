import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { NavigationContainer } from '@react-navigation/native';
import Home from '../screens/homePage';
import Login from '../screens/login';
import Profile from '../screens/profile';
import Register from '../screens/register';
import Results from '../screens/result';
import { RecipeDetails } from '../screens/recipeDetails';

const Stack = createNativeStackNavigator();
 
function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator
       screenOptions={{
        headerShown: false,
      }}>
        <Stack.Screen name="Login" component={Login} />
        <Stack.Screen name="Home" component={Home} />
        <Stack.Screen name="Profile" component={Profile} />
        <Stack.Screen name="Register" component={Register} />
        <Stack.Screen name="Results" component={Results} />
        <Stack.Screen name="RecipeDetails" component={RecipeDetails} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default App;