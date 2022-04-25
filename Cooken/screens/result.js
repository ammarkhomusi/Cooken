import { View, Text, StyleSheet, ImageBackground } from 'react-native'
import React, { useState } from 'react';
import GenericButton from '../ButtonComponents/GenericButton';
import RouteButton from '../ButtonComponents/RouteButton';

const img = { uri: 'https://firebasestorage.googleapis.com/v0/b/cooken-imgs.appspot.com/o/screenshot%20no%20lines.png?alt=media&token=8b555913-fa90-4848-93db-96d0bce147e1'}
const sampleImg = {uri: 'https://firebasestorage.googleapis.com/v0/b/cooken-imgs.appspot.com/o/greek-salad-3-1200.jpg?alt=media&token=1978a2df-c283-46b2-8754-73b233b21677'}

export default function homePage() {
  return (
    <View style={styles.container}>
      <ImageBackground source={img} resizeMode='cover' style={styles.img}>
        <View style={styles.logo}>
          <Text style={styles.header}>Here's Your Dish!</Text>
          <Text style={styles.dishTitle}>Greek Salad</Text>
          <ImageBackground source={sampleImg} resizeMode='cover' style={styles.sampleImg} imageStyle={styles.image}></ImageBackground>
        </View>
        <View style={styles.chooseButtons}>
          <GenericButton text={'Get Cooken!'}/>
          {/* add a dropdown option for difficutly? */}
          <GenericButton text={'Re-roll'}/>
        </View>
        <View  style={styles.navButtons}>
          {/* <RouteButton text={'Profile'} style/>
          <RouteButton text={'Logout'}/> */}
          <GenericButton text={'Profile'}  style={{width:175, marginLeft:17}}/>
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
  sampleImg:{
    marginTop:15,
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
    alignItems:'center',
    flex:2,
    // backgroundColor:'yellow'
  },
  mainText:{
    fontSize:40
  },
  chooseButtons:{
    justifyContent:'center',
    alignItems:'center',
    flex:1,
    // backgroundColor:'green'
  },
  navButtons:{
    flex:.27,
    justifyContent:'flex-start',
    flexDirection:'row',
    // backgroundColor:'blue'
  },
  header:{
    paddingTop:20,
    fontSize:20,
  },
  dishTitle:{
    fontSize:30
  }
})