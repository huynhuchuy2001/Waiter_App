import React, {useState} from 'react';
import AntDesign from 'react-native-vector-icons/AntDesign';
import { Text, View, StyleSheet, TextInput,Pressable } from 'react-native';
import { useNavigation } from "@react-navigation/native";
export default function EditInformations() {
    const navigation = useNavigation();
    var profile = {
        email : 'huynhduchuy2001@gmail.com',
        phone : '+84336755506',
        gender : 'Male',
        birthday : 'Jun 26, 2001'
    }
    return(
        <View style={styles.EditProfilecontainer}>
            {/* Header Edit Profile */}
            <View style={styles.HeaderEditProfile}>
                <AntDesign name="arrowleft" size={30} color="white" onPress={() => navigation.goBack()} style ={{marginTop : '2%',marginLeft : '2%'}}/>
                <Text style={styles.HeaderEditProfileText}> Personal information</Text>
            </View>
            {/* Edit information */}
            <View style={styles.EditProfileBody}>
                <View style = {{borderBottomColor: "#414360", borderBottomWidth: 1}}>
                    <Text style={styles.TextTitle}>Provide your personal information, even if the account is used for a business, a pet or something else. This won't be part of your public profile.</Text>
                </View>
                {/* Edit Email address */}
                <Pressable onPress = { () => {navigation.navigate('EditEmail')}}>
                    <View style={styles.EditEmail}>
                        <Text style={styles.EditEmailText} >E-mail Address</Text>
                        <View style = {styles.Line}>
                            <TextInput style={styles.EditEmailInput} placeholder="Enter your email" placeholderTextColor="#8e8e8e" value= {profile.email} editable = {false} />
                            <AntDesign name="right" size={20} color="#8e8e8e" style ={{marginTop : '2%',marginLeft : '15%'}}/>
                        </View>
                    </View>
                </Pressable>
                {/* Edit Phone number */}
                <Pressable onPress = { () => {navigation.navigate('EditPhoneNumber')}}>
                    <View style={styles.EditPhone}>
                        <Text style={styles.EditPhoneText} >Phone number</Text>
                        <View style = {styles.Line}>
                            <TextInput style={styles.EditPhoneInput} placeholder="Enter your email" placeholderTextColor="#8e8e8e" value= {profile.phone} editable = {false} />
                            <AntDesign name="right" size={20} color="#8e8e8e" style ={{marginTop : '2%',marginLeft : '15%'}}/>
                        </View>
                    </View>
                </Pressable>
                {/* Edit Gender */}
                <Pressable onPress = { () => {navigation.navigate('EditName')}}>
                    <View style={styles.EditGender}>
                        <Text style={styles.EditGenderText} >Gender</Text>
                        <View style = {styles.Line}>
                            <TextInput style={styles.EditGenderInput} placeholder="Enter your email" placeholderTextColor="#8e8e8e" value= {profile.gender} editable = {false} />
                            <AntDesign name="right" size={20} color="#8e8e8e" style ={{marginTop : '2%',marginLeft : '15%'}}/>
                        </View>
                    </View>
                </Pressable>
                {/* Edit Birthday */}
                <Pressable onPress = { () => {navigation.navigate('EditName')}}>
                    <View style={styles.EditBirthday}>
                        <Text style={styles.EditBirthdayText} onPress = { () => {navigation.navigate('EditName')}}>Birthday</Text>
                        <View style = {styles.LineBirthday}>
                            <TextInput style={styles.EditBirthdayInput} placeholder="Enter your email" placeholderTextColor="#8e8e8e" value= {profile.birthday} editable = {false} />
                            <AntDesign name="right" size={20} color="#8e8e8e" style ={{marginTop : '2%',marginLeft : '15%'}}/>
                            <Text style={styles.UpdateFb}>Update on Facebook</Text>
                        </View>
                    </View>
                </Pressable>
            </View>
        </View>
    )
}
const styles = StyleSheet.create({
    EditProfilecontainer: {
        backgroundColor: 'black',
    },
    HeaderEditProfile: {
        backgroundColor: 'black',
        flexDirection: 'row',
        height: 50,
        borderBottomColor: "#414360",
        borderBottomWidth: 1,
    },
    HeaderEditProfileText: {
        color: 'white',
        fontSize: 22,
        marginTop: '2%',
        marginLeft: '5%',
    },
    EditProfileBody: {
        backgroundColor: 'black',
        height: '100%',
    },
    Line : {
        flexDirection: 'row',
        width: '95%',
        borderBottomColor: "white",
        borderBottomWidth: 1,
    },
    LineBirthday : {
        flexDirection: 'row',
        width: '50%',
        borderBottomColor: "white",
        borderBottomWidth: 1,
    },
    TextTitle: {
        width: '80%',
        color: 'white',
        fontSize: 15,
        marginTop: '2.5%',
        marginLeft: '10%',
        marginBottom: '2.5%',
        textAlign: 'center',
    },
    EditEmail: {
        marginTop: '5%',
        marginLeft: '5%',
    },
    EditEmailText: {
        color: '#8e8e8e',
        fontSize: 15,
    },
    EditEmailInput: {
        color: '#8e8e8e',
        fontSize: 18,
        width: '80%',
    },
    EditPhone: {
        marginTop: '5%',
        marginLeft: '5%',
    },
    EditPhoneText: {
        color: '#8e8e8e',
        fontSize: 15,
    },
    EditPhoneInput: {
        color: '#8e8e8e',
        fontSize: 18,
        width: '80%',
    },
    EditGender: {
        marginTop: '5%',
        marginLeft: '5%',
    },
    EditGenderText: {
        color: '#8e8e8e',
        fontSize: 15,
    },
    EditGenderInput: {
        color: '#8e8e8e',
        fontSize: 18,
        width: '80%',
    },
    EditBirthday: {
        marginTop: '5%',
        marginLeft: '5%',
    },
    EditBirthdayText: {
        color: '#8e8e8e',
        fontSize: 15,
    },
    EditBirthdayInput: {
        color: '#8e8e8e',
        fontSize: 18,
        width: '80%',
    },
    UpdateFb: {
        color: '#087cbf',
        fontSize: 16,
        marginTop: '15%',
        marginLeft: '6%',
    }
});