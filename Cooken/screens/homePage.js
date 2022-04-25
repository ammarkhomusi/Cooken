import { View, Text, StyleSheet, ImageBackground } from 'react-native'
import React, { useState } from 'react';
import GenericButton from '../ButtonComponents/GenericButton';
import RouteButton from '../ButtonComponents/RouteButton';

const img = { uri: 'https://firebasestorage.googleapis.com/v0/b/cooken-imgs.appspot.com/o/screenshot%20no%20lines.png?alt=media&token=8b555913-fa90-4848-93db-96d0bce147e1'}
const homeImg = { uri: 'https://firebasestorage.googleapis.com/v0/b/cooken-imgs.appspot.com/o/Screenshot%20(70).png?alt=media&token=7bf3081e-d4f5-4865-a6bf-55e934ce3c84'}


export default function homePage() {
  return (
    <View style={styles.container}>
      <ImageBackground source={img} resizeMode='cover' style={styles.img}>
        <View style={styles.logo}>
        <ImageBackground blurRadius={10} source={homeImg} resizeMode='cover' style={styles.homeImg} imageStyle={styles.image}></ImageBackground>
          <Text style={styles.mainText}>WHAT'S</Text>
          <Text style={styles.mainText}>COOKEN</Text>
        </View>
        <View style={styles.rollButtons}>
          <Text style={styles.explainText}>Picks a dish based off your preferences</Text>
          <GenericButton text={'Roll For Your Recipe!'}/>
          {/* add a dropdown option for difficutly? */}
          <Text style={styles.explainText}>Picks a totally random dish!</Text>
          <GenericButton text={'Suprise Me!!'}/>
        </View>
        <View  style={styles.navButtons}>
          {/* <RouteButton text={'Profile'} style/>
          <RouteButton text={'Logout'}/> */}
          <GenericButton text={'Profile'} style={{width:175, marginLeft:17}}/>
          <GenericButton text={'Logout'} style={{width:175, marginLeft:10}}/>
        </View>
      </ImageBackground>
    </View>
  )
}

const styles = StyleSheet.create({
  container:{
    flex: 1,
    // justifyContent: 'center',
    // alignItems: 'center'
  },
  img:{
    flex: 1,
    justifyContent: 'center',
    width: '100%',
    height: '100%'
  },
  homeImg:{
    marginTop:25,
    flex:1,
    justifyContent:'center',
    width: 400,
    height: 400,
  },
  image:{
    borderRadius: 400/3
  },
  logo:{
    justifyContent:'center',
    alignItems:"center",
    flex:1,
    marginTop:20
    // backgroundColor:'yellow'
  },
  mainText:{
    color:'#FDF397',
    shadowColor:'black',
    fontWeight:'bold',
    fontSize:86
  },
  rollButtons:{
    paddingBottom:20,
    justifyContent:'center',
    alignItems:'center',
    flex:1,
    // backgroundColor:'green'
  },
  navButtons:{
    flex:.2,
    justifyContent:'flex-start',
    flexDirection:'row',
    // backgroundColor:'blue'
  },
  routeButtons:{
    width:  10
  }
})