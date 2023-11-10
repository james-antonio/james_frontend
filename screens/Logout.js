import { useState } from 'react';
import { ImageBackground, Image, TouchableOpacity, TextInput, StyleSheet, Text, View, ImageComponent } from 'react-native';
import { widthPercentageToDP as wp, heightPercentageToDP as hp } from 'react-native-responsive-screen';
import { Avatar, Icon } from 'react-native-elements';

const Logout = () => {
    return (
        <View style={styles.Container}>
            <ImageBackground style={styles.Background_Style} source={require('./../assets/bg-image.png')}>
                <View style={styles.Top_Navigator}>
                    <TouchableOpacity style={styles.Back_Button}>
                        <Image style={styles.Icon} source={require('./../assets/angle-left.png')}/>
                    </TouchableOpacity>
                </View>

                <View style={styles.Profile_Container}>
                    <Avatar
                        containerStyle={styles.Profile_Style}
                        title='JW'
                        titleStyle={{color: 'gray'}}/>

                    <View style={styles.Name_Container}>
                        <Text style={styles.Name_Text}>JUAN DELA CRUZ</Text>
                        <Text style={styles.Email_Text}>juandelacruz@gmail.com</Text>
                    </View>

                    <Text style={styles.Question}>Are you sure leaving?</Text>
                    <View style={styles.Button_Container}>
                        <TouchableOpacity style={styles.Logout_Button}>
                            <Text style={styles.Button_Text}>Confirm</Text>
                        </TouchableOpacity>
                        <TouchableOpacity style={styles.Logout_Button}>
                            <Text style={styles.Button_Text}>Cancel</Text>
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
    Profile_Container: {
        flex: 1,
        backgroundColor: '#7A7878',
        marginHorizontal: 20,
        marginTop: 100,
        marginBottom: 50,
        borderRadius: 20,
        alignItems: 'center'
    },
    Profile_Style: {
        backgroundColor: 'white',
        height: hp(14),
        width: wp(30),
        borderRadius: 20,
        position: 'absolute',
        alignSelf: 'center',
        top: hp(-7)
    },
    Name_Container: {
        paddingTop: hp(10)
    },
    Name_Text: {
        fontSize: hp(2),
        color: 'white',
        textAlign: 'center',
        paddingTop: 5
    },
    Email_Text: {
        paddingTop: 10,
        color: 'white',
        textAlign: 'center',
    },
    Question: {
        color: 'white',
        fontSize: hp(2.5),
        marginTop: hp(15)
    },
    Button_Container: {
        marginTop: 20,
        width: '80%',
        flexDirection: 'row',
        justifyContent: 'space-between'
    },
    Logout_Button: {
        backgroundColor: '#F8F0F0',
        marginVertical: 20,
        borderRadius: 30,
        flexDirection: 'row',
        alignContent: 'center',
        justifyContent: 'center',
        alignItems: 'center',
    },
    Button_Text: {
        fontSize: hp(2.5),
        paddingVertical: 10,
        paddingHorizontal: 30,
        color: 'black',
        fontWeight: '400',
        textAlign: 'center'
    }
})

export default Logout;