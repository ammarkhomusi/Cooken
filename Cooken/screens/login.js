import React, { useState } from 'react';
import {
  StyleSheet,
  Text,
  View,
  TextInput,
  ImageBackground,
  useWindowDimensions
 } from 'react-native';
import GenericButton from '../ButtonComponents/GenericButton';
import * as Font from 'expo-font'


const img = { uri: 'https://firebasestorage.googleapis.com/v0/b/cooken-imgs.appspot.com/o/screenshot%20no%20lines.png?alt=media&token=8b555913-fa90-4848-93db-96d0bce147e1'}


export default function login() {

  const windowHeight = useWindowDimensions().height;

  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('')
  return (
    <View style={[styles.container, {minHeight: Math.round(windowHeight)}]} >
      <ImageBackground source={img} resizeMode='cover' style={styles.img}>
        <View style={styles.logo}>
          <Text style={styles.logoText}>COOKEN</Text>
        </View>
        <View style={styles.inputs}>
          <TextInput
            style={styles.emailInput}
            onChange ={(e) => setEmail(e.target.value)}
            value={email}
            placeholder = 'Email'
          />
          <TextInput style={styles.passwordInput}
            onChange={(e) => setPassword(e.target.value)}
            value={password}
            placeholder = 'Password'
          />
          <Text style={styles.passwordLink}>Forgot Password?</Text>
        </View>
        <View style={styles.buttons}>
          <GenericButton text={'Login'}/>
          <GenericButton text={'Create Account'}/>
        </View>
      </ImageBackground>
    </View>
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
    // backgroundColor: 'green',
  },
  logo: {
    flex: 1,

    // backgroundColor: 'blue',
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
    // backgroundColor: 'yellow',
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
    borderRadius: 100/ 5,
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
    paddingBottom: 15,
  }
});