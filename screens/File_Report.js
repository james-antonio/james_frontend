import { useState } from 'react';
import { Modal, Image, TouchableOpacity, TextInput, StyleSheet, Text, View } from 'react-native';
import { widthPercentageToDP as wp, heightPercentageToDP as hp } from 'react-native-responsive-screen';
import {Dropdown} from 'react-native-element-dropdown';
import DropdownComponent from '../components/DropdownComponent';
import MultiSelectComponent from '../components/MultiSelectComponent';

const File_Report = () => {

    return(
        <View style={styles.Screen}>
      <View style={styles.container}>
        <View style={styles.Heading}>
          <Text style={styles.Heading_Style}>Create a Report</Text>
        </View>

        <MultiSelectComponent/>
        <DropdownComponent/>

        <View style={styles.Info_Container}>
          <View style={styles.Description}>
            <Text style={styles.Description_Style}>Description</Text>
            <TextInput style={styles.Description_Box}
            placeholder='Enter Description...'
            editable={true}
            multiline={true}
            numberOfLines={4}
            maxLength={40}/>
          </View>

        </View>
          <TouchableOpacity style={styles.Upload}>
            <Image style={styles.Icon} source={require('./../assets/Pin-logo.png')}/>
            <Text style={styles.Info_Style}>Upload Image or Video</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.Enter_Button}>
            <Text style={styles.Button_Font}>ENTER</Text>
          </TouchableOpacity>
        
      </View>
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

    </View>
    )
}

const styles = StyleSheet.create ({
    Screen: {
        flex: 10
      },
      container: {
        flex: 9,
        backgroundColor: '#fff',
        marginHorizontal: 15
      },
      Heading: {
        marginTop: 80,
      },
      Heading_Style: {
        fontSize: hp(3.5),
        fontWeight: '700'
      },
      Info_Container: {
        flex: 6,
        marginTop: 13,
        gap: 20,
      },
      Icon: {
        height: hp(3),
        width: wp(4),
        marginRight: 10
      },
      Description: {
        flex: 1,
        paddingTop: 10,
      },
      Description_Style: {
        color: 'black',
        fontSize: hp(2),
        paddingBottom: 10
      },
      Description_Box: {
        flex: 1,
        padding: 10,
        textAlignVertical: 'top',
        borderRadius: 8,
        borderColor: '#6D6D6D',
        borderWidth: 1,
        fontSize: hp(2)
      },
      Upload: {
        borderRadius: 8,
        padding: 16,
        borderColor: '#6D6D6D',
        borderWidth: 1,
        marginTop: 20,
        marginBottom: 26,
        flexDirection: 'row'
      },
      Enter_Button: {
        borderRadius: 10,
        padding: 16,
        backgroundColor: '#E9C9AE',
        marginBottom: 20
      },
      Button_Font: {
        color: 'black',
        textAlign: 'center',
        fontSize: hp(2),
        fontWeight: '500'
      },
      Navigator: {
        flex: 1,
        backgroundColor: 'rgba(0, 0, 0, 0.90))',
        borderTopLeftRadius: 20,
        borderTopRightRadius: 20,
        flexDirection: 'row',
        alignItems: 'center',
        alignContent: 'center',
        justifyContent: 'space-evenly',
        paddingHorizontal: 50
      },
      Nav_Icon: {
        height: hp(4),
        width: wp(10),
        resizeMode: 'contain'
      },
      Icon_Container: {
        alignContent: 'center',
        alignItems: 'center'
      },
      Camera_Icon: {
        height: hp(4),
        width: wp(12),
      },
})

export default File_Report;