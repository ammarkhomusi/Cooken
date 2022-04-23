import { View, Text, ImageBackground, StyleSheet, TextInput } from 'react-native'
import React, { useState } from 'react'
import GenericButton from '../ButtonComponents/GenericButton'

const img = { uri: 'https://firebasestorage.googleapis.com/v0/b/cooken-imgs.appspot.com/o/screenshot%20no%20lines.png?alt=media&token=8b555913-fa90-4848-93db-96d0bce147e1'}

// initialState =

export default function profile() {
  // TODO should get user info from global state when login is pressed
  // const [email, setEmail] = useState(user.email)
  // const [username, setUsername] = useState(user.username)

  return (
    <View style={styles.container}>
      <ImageBackground source={img} resizeMode='cover' style={styles.img}>
        <View style={styles.inputs}>
          <Text style={styles.pageTitle}>Account Info</Text>
          <TextInput
            style={styles.inputFields}
            // TODO
            // value={email}
            />
           <TextInput
            style={styles.inputFields}
            //TODO
            // value={username}
            />
        </View>
        <View style={styles.checkBoxes}></View>
        <View style={styles.buttons}>
          <GenericButton text={'Edit Account Info'}/>
          <GenericButton text={'Back'}/>
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
  pageTitle:{
    fontSize:20,
    justifyContent:'center',
    alignItems:'center'
  },
  inputs:{
    flex: 1,
    backgroundColor: 'yellow',
    justifyContent:'center',
    alignItems: 'center',
    padding: 15
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
  }
})