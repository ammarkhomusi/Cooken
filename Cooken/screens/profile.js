import { View, Text, ImageBackground, StyleSheet, TextInput, useWindowDimensions } from 'react-native'
import React, { useState } from 'react'
import GenericButton from '../ButtonComponents/GenericButton';
import { CheckBox } from 'react-native-elements';

const img = { uri: 'https://firebasestorage.googleapis.com/v0/b/cooken-imgs.appspot.com/o/screenshot%20no%20lines.png?alt=media&token=8b555913-fa90-4848-93db-96d0bce147e1'}



export default function Profile({ navigation }) {
  const windowHeight = useWindowDimensions().height;
  // TODO should get user info from global state when login is pressed
  // const [email, setEmail] = useState(user.email)
  // const [username, setUsername] = useState(user.username)


  //routes
  const toHome = () => {
    navigation.navigate('Home')
  }


  return (
    <View style={[styles.container, {minHeight: Math.round(windowHeight)}]} >
      <ImageBackground source={img} resizeMode='cover' style={styles.img}>
        <View style={styles.inputs}>
          <Text style={styles.pageTitle}>Account Info</Text>
          <TextInput
            style={styles.inputFields}
            editable={false}
            // TODO
            // value={email}
            />
           <TextInput
            style={styles.inputFields}
            editable={false}
            //TODO
            // value={username}
            />
        </View>
        <View style={styles.checkBoxesContainer}>
          <CheckBox></CheckBox><Text style={styles.checkBoxText}>italian</Text>
          <CheckBox></CheckBox><Text style={styles.checkBoxText}>greek</Text>
          <CheckBox></CheckBox><Text style={styles.checkBoxText}>american</Text>
        </View>
        <View style={styles.checkBoxesContainer}>
          <CheckBox></CheckBox><Text style={styles.checkBoxText}>chinese</Text>
          <CheckBox></CheckBox><Text style={styles.checkBoxText}>mexican</Text>
          <CheckBox></CheckBox><Text style={styles.checkBoxText}>indian</Text>
        </View>
        <View style={styles.buttons}>
          <GenericButton text={'Edit Account Info'}/>
          <GenericButton text={'Save Changes'} onPress={toHome}/>
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
    alignItems:'center',
    fontWeight:'bold'
  },
  inputs:{
    flex: 1,
    // backgroundColor: 'yellow',
    justifyContent:'center',
    alignItems: 'center',
    paddingTop:30,
    marginTop:45
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
  checkBoxesContainer:{
    flexDirection:'row',
    justifyContent:'center',
    alignItems:'center',
    flex:.3,
  },
  checkBoxText:{
    fontWeight:'bold',
    fontSize: 15
  },
  buttons:{
    justifyContent:'center',
    alignItems:'center',
    color:'orange',
    flex:1,
    // backgroundColor: 'green',
  }
})