import * as React from 'react';
import AntDesign from 'react-native-vector-icons/AntDesign';
import { Text, View, StyleSheet, TextInput } from 'react-native';
import { useNavigation } from "@react-navigation/native";
export default function EditUserName() {
    const navigation = useNavigation();
    return(
        <View style={styles.EditProfilecontainer}>
            {/* Header Edit Profile */}
            <View style={styles.HeaderEditProfile}>
                <AntDesign name="close" size={30} color="white" onPress={() => navigation.goBack()} style ={{marginTop : '2%',marginLeft : '2%'}}/>
                <Text style={styles.HeaderEditProfileText}>UserName</Text>
                <AntDesign name="check" size={30} color="#087cbf" style ={{marginTop : '2%',marginLeft : '45%'}}/>
            </View>
            <View style={styles.EditProfileBody}>
                {/* Edit UserName */}
                <View style={styles.EditUserName}>
                    <Text style={styles.EditUserNameText}>UserName</Text>
                    <TextInput style={styles.EditUserNameInput} placeholder="Enter your name" placeholderTextColor="#8e8e8e" value="hdh.huyyyy" />
                </View>
                <Text style={styles.FormatEditUserName}>You be able to change your username back to hdh.huyyyy for anotjer 14 days.</Text>
                <Text style={styles.WarningEditUserName}>Learn More</Text>
            </View>
        </View>
    )
};
const styles = StyleSheet.create({
    EditProfilecontainer: {
        backgroundColor: 'black',
    },
    HeaderEditProfile: {
        backgroundColor: 'black',
        flexDirection: 'row',
        height: 50,
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
    EditUserName: {
        marginTop: '2.5%',
        marginLeft: '5%',
    },
    EditUserNameText: {
        color: '#8e8e8e',
        fontSize: 15,
    },
    EditUserNameInput: {
        color: 'white',
        fontSize: 18,
        width: '95%',
        borderBottomColor: "#087cbf",
        borderBottomWidth: 1,
    },
    FormatEditUserName: {
        color: '#8e8e8e',
        fontSize: 15,
        marginTop: '2.5%',
        marginLeft: '5%',
    },
    WarningEditUserName: {
        color: '#087cbf',
        fontSize: 15,
        marginTop: '2.5%',
        marginLeft: '5%',
    }
});