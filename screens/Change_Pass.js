import { useState } from 'react';
import { ImageBackground, Image, TouchableOpacity, TextInput, StyleSheet, Text, View, ImageComponent } from 'react-native';
import { widthPercentageToDP as wp, heightPercentageToDP as hp } from 'react-native-responsive-screen';
import { Avatar, Icon } from 'react-native-elements';

const Change_Pass = () => {
    return (
        <View style={styles.Container}>
            <ImageBackground style={styles.Background_Style} source={require('./../assets/bg-image.png')}>
                <View style={styles.Top_Navigator}>
                    <TouchableOpacity style={styles.Back_Button}>
                        <Image style={styles.Icon} source={require('./../assets/angle-left.png')}/>
                    </TouchableOpacity>
                </View>

                <View style={styles.Info_Container}>

                    <Text style={styles.Heading}>Reset Password</Text>

                    <View style={styles.Pass_Container}>
                        <Text style={styles.Password_Text}>Current Password</Text>
                        <TextInput style={styles.Password}/>

                        <Text style={styles.Password_Text}>New Password</Text>
                        <TextInput style={styles.Password}/>

                        <Text style={styles.Password_Text}>Confirm New Password</Text>
                        <TextInput style={styles.Password}/>
                    </View>

                    <View style={styles.Button_Container}>
                        <TouchableOpacity style={styles.Profile_Button}>
                            <Text style={styles.Button_Text}>Update Password</Text>
                        </TouchableOpacity>
                    </View>
                </View>

            </ImageBackground>
        </View>
    )
}

const styles = StyleSheet.create ({
    Container: {
        flex: 1,
        paddingTop: 0
    },
    Background_Style: {
        flex: 1
    },
    Top_Navigator: {
        height: hp(10),
        backgroundColor: 'rgba(0, 0, 0, 0.90)',
        justifyContent: 'center',
        paddingHorizontal: 15
    },
    Back_Button: {
        backgroundColor: 'rgba(255, 255, 255, 0.80)',
        height: hp(6),
        width: wp(12),
        borderRadius: 8,
        justifyContent: 'center',
        alignItems: 'center'
    },
    Icon: {
        resizeMode: 'contain',
        height: hp(3),
        width: wp(6)
    },
    Info_Container: {
        flex: 1,
        backgroundColor: '#7A7878',
        marginHorizontal: 20,
        marginTop: 100,
        marginBottom: 50,
        borderRadius: 20,
        paddingHorizontal: 30,
        paddingVertical: 50
    },
    Heading: {
        color: 'white',
        fontSize: hp(2.5),
        fontWeight: '400'
    },
    Pass_Container: {
        marginTop: 50
    },
    Password: {
        height: hp(6),
        width: '100%',
        borderWidth: 1,
        borderRadius: 30,
        alignSelf: 'center',
        borderColor: 'black',
        marginVertical: 10,
        padding: 14,
        color: 'gray',
        fontSize: 16,
        backgroundColor: '#F8F0F0'
    },
    Password_Text: {
        color: 'white',
        fontSize: hp(2)
    },
    Button_Container: {
        marginTop: 20,
        width: '80%',
        alignSelf: 'center'
    },
    Profile_Button: {
        backgroundColor: '#F8F0F0',
        marginVertical: 20,
        borderRadius: 20,
        flexDirection: 'row',
        alignContent: 'center',
        justifyContent: 'center',
        alignItems: 'center'
    },
    Button_Text: {
        fontSize: hp(2.5),
        padding: 16,
        color: 'black',
        fontWeight: '600',
        textAlign: 'center'
    }
})

export default Change_Pass;
