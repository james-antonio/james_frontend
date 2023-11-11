import React from 'react';
import { ImageBackground, Image, TouchableOpacity, StyleSheet, Text, View } from 'react-native';
import { widthPercentageToDP as wp, heightPercentageToDP as hp } from 'react-native-responsive-screen';
import { Avatar } from 'react-native-elements';
import { ScrollView } from 'react-native';

const Home = () => {
  return (
    <View style={styles.Container}>
      <ImageBackground style={styles.Background_Style} source={require('./../assets/bg-image.png')}>
        <View style={styles.Top_Navigator}>
          <TouchableOpacity style={styles.Back_Button}>
            <Image style={styles.Icon} source={require('./../assets/user.png')} />
          
          </TouchableOpacity>
          <Text style={styles.name}>Juan Dela Cruz</Text>

        </View>
       <ScrollView styles={styles.postcontainer}>
        <View style={styles.post}>
        
        </View>
        <View style={styles.post}>
        
        </View>
        

       </ScrollView>
      
      <View style={styles.Navigator}>

        <View style={styles.Icon_Container}>
          <TouchableOpacity><Image style={styles.Nav_Icon} source={require('./../assets/Report-logo.png')}/></TouchableOpacity>
          <Text style={{color:'#87CB00'}}>Reports</Text>
        </View>

        <View style={styles.Icon_Container}>
          <TouchableOpacity><Image style={styles.Nav_Icon} source={require('./../assets/Home-logo.png')}/></TouchableOpacity>
          <Text style={{color:'#C1C1C1'}}>Home</Text>
        </View>

        <View style={styles.Icon_Container}>
          <TouchableOpacity><Image style={styles.Camera_Icon} source={require('./../assets/Camera-logo.png')}/></TouchableOpacity>
          <Text style={{color:'#C1C1C1'}}>Camera</Text>
        </View>
      </View>
      </ImageBackground>
    </View>
  );
};

const styles = StyleSheet.create({
  Container: {
    flex: 1,
    paddingTop: 0,
  },
  name: {
    color: 'white',
    fontSize: hp(2),
    paddingHorizontal: 20,
  },
  post: {
  backgroundColor: 'white',
  height: hp(30),
  margin: 20,
  borderRadius: 25,
  
  },
  postcontainer: {
    flex: 1,
    maxHeight: 200,
    
  },
  Background_Style: {
    flex: 1,
  },
  Top_Navigator: {
    height: hp(10),
    backgroundColor: 'rgba(0, 0, 0, 0.90)',
    paddingHorizontal: 15,
    flexDirection: 'row',
    alignItems: 'center',
  },
  Back_Button: {
    backgroundColor: 'rgba(255, 255, 255, 0.80)',
    height: hp(6),
    width: wp(12),
    borderRadius: 8,
    justifyContent: 'center',
    alignItems: 'center',
  },
  Icon: {
    resizeMode: 'contain',
    height: hp(3),
    width: wp(6),
  },
  Profile_Style: {
    flex: 3,
    backgroundColor: 'white',
    height: hp(30),
    width: wp(90),
    borderRadius: 20,
    alignSelf: 'center',
    top: hp(5),
  },
  Navigator: {
    flex: 1,
    backgroundColor: 'rgba(0, 0, 0, 0.90)',
    borderTopLeftRadius: 20,
    borderTopRightRadius: 20,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-evenly',
    paddingHorizontal: 50,
  },
  Nav_Icon: {
    height: hp(4),
    width: wp(10),
    resizeMode: 'contain',
  },
  Icon_Container: {
    alignContent: 'center',
    alignItems: 'center',
  },
  Camera_Icon: {
    height: hp(4),
    width: wp(12),
  },


});

export default Home;
