import { View, Text, TextInput, ImageBackground, StyleSheet, useWindowDimensions } from 'react-native'
import React, { useState } from 'react'
import GenericButton from '../ButtonComponents/GenericButton';
// import { CheckBox } from 'react-native-elements';
import Checkbox from 'expo-checkbox';


const img = { uri: 'https://firebasestorage.googleapis.com/v0/b/cooken-imgs.appspot.com/o/screenshot%20no%20lines.png?alt=media&token=8b555913-fa90-4848-93db-96d0bce147e1'}

export default function register() {
  const windowHeight = useWindowDimensions().height;
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [username, setUsername] = useState('');
  //checkbox states
  const [italianisChecked, setItalianIsChecked] = useState(false);
  const [greekisChecked, setGreekIsChecked] = useState(false);
  const [americanisChecked, setAmericanIsChecked] = useState(false);
  const [chineseisChecked, setChineseIsChecked] = useState(false);
  const [mexicanisChecked, setMexicanIsChecked] = useState(false);
  const [indianisChecked, setIndianIsChecked] = useState(false);


  return (
    <View style={[styles.container, {minHeight: Math.round(windowHeight)}]} >
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
        <View style={styles.checkBoxesContainer}>
          <Checkbox value={italianisChecked} onValueChange={setItalianIsChecked}></Checkbox><Text style={styles.checkBoxText}>italian</Text>
          <Checkbox value={greekisChecked} onValueChange={setGreekIsChecked}></Checkbox><Text style={styles.checkBoxText}>greek</Text>
          <Checkbox value={americanisChecked} onValueChange={setAmericanIsChecked}></Checkbox><Text style={styles.checkBoxText}>american</Text>
        </View>
        <View style={styles.checkBoxesContainer}>
          <Checkbox value={chineseisChecked} onValueChange={setChineseIsChecked}></Checkbox><Text style={styles.checkBoxText}>chinese</Text>
          <Checkbox value={mexicanisChecked} onValueChange={setMexicanIsChecked}></Checkbox><Text style={styles.checkBoxText}>mexican</Text>
          <Checkbox value={indianisChecked} onValueChange={setIndianIsChecked}></Checkbox><Text style={styles.checkBoxText}>indian</Text>
        </View>
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
    marginTop:40,
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
    // backgroundColor: 'yellow',
    justifyContent:'center',
    alignItems: 'center',
    padding: 20
  },
  checkBoxesContainer:{
    marginLeft:40,
    flexDirection:'row',
    justifyContent:'center',
    alignItems:'center',
    flex:.2,
    // backgroundColor:'blue'
  },
  checkBox:{
    color:'black'
  },
  checkBoxText:{
    marginLeft:5,
    marginRight:45,
    fontWeight:'bold',
    fontSize: 15
  },
  buttons:{
    justifyContent:'center',
    alignItems:'center',
    color:'orange',
    flex:1,
    // backgroundColor: 'green',
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
    alignItems:'center',
    fontWeight:'bold'
  },
})