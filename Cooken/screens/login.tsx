import React, { useState } from 'react';
import { NavigationScreenProp } from 'react-navigation';
import {
  StyleSheet,
  Text,
  View,
  TextInput,
  ImageBackground,
  useWindowDimensions,
  TouchableWithoutFeedback,
  Keyboard,
  GestureResponderEvent
 } from 'react-native';
import { GenericButton } from '../ButtonComponents/GenericButton';

const img = { uri: 'https://firebasestorage.googleapis.com/v0/b/cooken-imgs.appspot.com/o/screenshot%20no%20lines.png?alt=media&token=8b555913-fa90-4848-93db-96d0bce147e1' }

// added typescript
export default function Login ({ navigation }: { navigation: NavigationScreenProp<any, any> }) {
 const windowHeight = useWindowDimensions().height;

 const [email, setEmail] = useState('');
 const [password, setPassword] = useState('');

  const loginPressHandler = async (e: GestureResponderEvent) => {
    // FETCH TO GET USER WITH SAME EMAIL FROM DB AND REPLACE CURRENT STATE WITH IT
    e.preventDefault();
    const typedEmail = { email }; // where is email coming from??
    //needs to be fetch('http://localIPaddress:PORT/endpoint')
    let user = await fetch(`http://192.168.5.7:3001/login`, {
      method: "POST",
      headers: {Accept: 'application/json',
      "Content-Type": "application/json"},
      body: JSON.stringify(typedEmail)
    }).then((data) => data.json());
    console.log('USER', user)

    // user is a promise here. Why?
    navigation.navigate('Home', {
      email: user.email, favCuisines: user.favCuisines
    });
    // setEmail('');
    // setPassword('');
  }
  const createAcctPressHandler = () => navigation.navigate('Register');


  return (
    <TouchableWithoutFeedback onPress={() => Keyboard.dismiss()}>
      <View style={[styles.container, {minHeight: Math.round(windowHeight)}]} >
        <ImageBackground source={img} resizeMode='cover' style={styles.img}>
          <View style={styles.logo}>
            <Text style={styles.logoText}>COOKEN</Text>
          </View>
          <View style={styles.inputs}>
            <TextInput
              style={styles.emailInput}
              onChangeText ={(email) => setEmail(email)}
              value={email}
              placeholder = 'Email'
            />
            <TextInput secureTextEntry={true} style={styles.passwordInput}
              onChangeText={(password) => setPassword(password)}
              value={password}
              placeholder = 'Password'
            />
            <Text style={styles.passwordLink}>Forgot Password?</Text>
          </View>
          <View style={styles.buttons}>
            <GenericButton text={'Login'} onPress={loginPressHandler}/>
            <GenericButton text={'Create Account'} onPress={createAcctPressHandler}/>
            <Text style={styles.passwordLink}>Don't have an account? Create one!</Text>
          </View>
        </ImageBackground>
      </View>
    </TouchableWithoutFeedback>
  );
}


const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center'
  },
  img: {
    flex: 1,
    justifyContent: 'center',
    width: '100%',
    height: '100%'
  },
  buttons: {
    justifyContent:'center',
    alignItems:'center',
    color:'orange',
    flex:1,
  },
  logo: {
    flex: 1,

    justifyContent:'center',
    alignItems:'center'
  },
  logoText: {
    color:'#FFE600',
    marginTop: 90,
    fontSize: 90,
    justifyContent: 'center',
    alignItems: 'center'
  },
  inputs: {
    flex: .5,
    justifyContent:'center',
    alignItems: 'center',
    padding: 15

  },
  emailInput: {
    backgroundColor: 'white',
    borderWidth: 2,
    borderColor: '#777',
    padding: 8,
    margin: 15,
    height: 50,
    width:300,
    borderRadius: 100/ 6,
  },
  passwordInput: {
    backgroundColor: 'white',
    borderWidth: 2,
    borderColor: '#777',
    padding: 8,
    margin: 15,
    height: 50,
    width: 300,
    borderRadius: 100/ 6,
  },
  passwordLink: {
    fontWeight:'bold',
    paddingBottom: 15,
  }
});