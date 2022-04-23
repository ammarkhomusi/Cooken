import { View, Text, TextInput, ImageBackground, StyleSheet } from 'react-native'
import React, { useState } from 'react'
import GenericButton from '../ButtonComponents/GenericButton';


const img = { uri: 'https://firebasestorage.googleapis.com/v0/b/cooken-imgs.appspot.com/o/screenshot%20no%20lines.png?alt=media&token=8b555913-fa90-4848-93db-96d0bce147e1'}

export default function register() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [username, setUsername] = useState('');

  return (
    <View style={styles.container}>
      <ImageBackground source={img} resizeMode='cover' style={styles.img}>
        <View style={styles.inputs}>
          <Text style={styles.pageInfo}>Create Your Account</Text>
          <TextInput
            style={styles.inputFields}
            onChange={(e) => setEmail(e.target.value)}
            value={email}
            placeholder="Enter Email"
            />
          <TextInput
           style={styles.inputFields}
           onChange={(e) => setPassword(e.target.value)}
           value={password}
           placeholder="Create Password"
           />
          <TextInput
           style={styles.inputFields}
           onChange={(e) => setUsername(e.target.value)}
           value={username}
           placeholder="Create Username"
           />
        </View>
        <View style={styles.checkBoxes}></View>
        <View style={styles.buttons}>
          <GenericButton text={'Create Account'}/>
          <GenericButton text={'Back to Login'}/>
        </View>
      </ImageBackground>
    </View>
  )
}

const styles = StyleSheet.create({
  container:{
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center'
  },
  img:{
    flex: 1,
    justifyContent: 'center',
    width: '100%',
    height: '100%'
  },
  inputs:{
    flex: 1,
    backgroundColor: 'yellow',
    justifyContent:'center',
    alignItems: 'center',
    padding: 15
  },
  checkBoxes:{
    flex:1,
    backgroundColor:'blue'
  },
  buttons:{
    justifyContent:'center',
    alignItems:'center',
    color:'orange',
    flex:1,
    backgroundColor: 'green',
  },
  inputFields:{
    backgroundColor: 'white',
    borderWidth: 2,
    borderColor: '#777',
    padding: 8,
    margin: 15,
    height: 50,
    width:300,
    borderRadius: 100/ 5,
  },
  pageInfo:{
    fontSize:20,
    justifyContent:'center',
    alignItems:'center'
  },
})