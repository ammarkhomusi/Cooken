import React, { useState } from 'react';
import Login from './screens/login'
import Register from './screens/register';
import Profile from './screens/profile';
import Home from './screens/homePage';
import Result from './screens/result';
import * as Font from 'expo-font';
import { AppLoading } from 'expo';

const getFont = () =>{
  return Font.loadAsync({
    'architects-daughter': require('./assets/fonts/ArchitectsDaughter-Regular.ttf'),
    'permanentMarker-regular': require('./assets/fonts/PermanentMarker-Regular.ttf')
  })
}

export default function App() {
  const [fontsLoaded, setFontsLoaded] = useState(false);

  return (
    // <Login/>
    // <Profile/>
    // <Home/>
    <Result/>
  );
  // if(fontsLoaded) {
  //   return (
  //     <Login/>
  //   );
  // } else {
  //   return (
  //     <AppLoading
  //       startAsync={getFont}
  //       onFinish={() => setFontsLoaded(true)}
  //     />
  //   );
  // }
}


