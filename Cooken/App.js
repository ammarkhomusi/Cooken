import React, { useState } from 'react';
import Login from './screens/login'
import Register from './screens/register';
import Profile from './screens/profile';
import Home from './screens/homePage';
import Result from './screens/result';
import RecipeDetails from './screens/recipeDetails';
import Navigator from './routes/homeStack'

import { AppLoading } from 'expo';

//user Context provider here


export default function App() {
  //setting blank state to context provider and updating on login press is username exists
  // if not alert username is incorrect
  return (
    <Navigator/>
    // <Profile/>
    // <Home/>
    // <Result/>
    // <RecipeDetails/>
    // <Register/>
  );
}


