import * as React from 'react';
import AntDesign from 'react-native-vector-icons/AntDesign';
import { Text, View, StyleSheet, TextInput } from 'react-native';
import { useNavigation } from "@react-navigation/native";
export default function EditPassword() {
    const navigation = useNavigation();
    return(
        <View style={styles.EditPasswordcontainer}>
            {/* Header Edit Password */}
            <View style={styles.HeaderEditPassword}>
                <AntDesign name="close" size={30} color="white" onPress={() => navigation.goBack()} style ={{marginTop : '2%',marginLeft : '2%'}}/>
                <Text style={styles.HeaderEditPasswordText}>Secure account</Text>
                <AntDesign name="check" size={30} color="#087cbf" style ={{marginTop : '2%',marginLeft : '35%'}}/>
            </View>
            <View style={styles.EditPasswordBody}>
                {/* Edit Password */}
                <Text style = {styles.Title}>Change your password to secure your account</Text>
                <Text style = {styles.SubTitle}>Since you said this wasn't you, please update your password to help us keep your account safe. You'll be logged out of all sessions except this one, so anyone trying to get into your account will no longer have access.</Text>
                <View style={styles.EditCurrentPassword}>
                    <Text style={styles.EditCurrentPasswordText}>Current Password (update on 02/19/22)</Text>
                    <TextInput style={styles.EditCurrentPasswordInput} placeholder="Enter your current password" placeholderTextColor="#8e8e8e" />
                </View>
                <View style={styles.NewPassword}>
                    <Text style={styles.NewPasswordText}>New Password</Text>
                    <TextInput style={styles.NewPasswordInput} placeholder="Enter new password" placeholderTextColor="#8e8e8e" />
                </View>
                <View style={styles.NewPasswordAgain}>
                    <Text style={styles.NewPasswordAgainText}>New Password Again</Text>
                    <TextInput style={styles.NewPasswordAgainInput} placeholder="Enter new password, again" placeholderTextColor="#8e8e8e" />
                </View>
                <Text style = {styles.ForgotPassword}>If you forgot your password, you can <Text style = {{color : 'white'}}>reset it with Facebook.</Text></Text>
            </View>
        </View>
    )
};
const styles = StyleSheet.create({
    EditPasswordcontainer: {
        backgroundColor: 'black',
    },
    HeaderEditPassword: {
        backgroundColor: 'black',
        flexDirection: 'row',
        height: 50,
    },
    HeaderEditPasswordText: {
        color: 'white',
        fontSize: 22,
        marginTop: '2%',
        marginLeft: '5%',
    },
    EditPasswordBody: {
        backgroundColor: 'black',
        height: '100%',
    },
    Title: {
        color: 'white',
        width: '80%',
        fontSize: 22,
        marginTop: '5%',
        marginLeft: '10%',
        textAlign: 'center',
    },
    SubTitle: {
        color: '#8e8e8e',
        width: '90%',
        fontSize: 15,
        marginTop: '2%',
        marginLeft: '5%',
        textAlign: 'center',
    },
    EditCurrentPassword: {
        marginTop: '5%',
        marginLeft: '5%',
    },
    EditCurrentPasswordText: {
        color: '#8e8e8e',
        fontSize: 15,
    },
    EditCurrentPasswordInput: {
        color: 'white',
        fontSize: 18,
        width: '95%',
        borderBottomColor: "white",
        borderBottomWidth: 1,
    },
    NewPassword: {
        marginTop: '5%',
        marginLeft: '5%',
    },
    NewPasswordText: {
        color: '#8e8e8e',
        fontSize: 15,
    },
    NewPasswordInput: {
        color: 'white',
        fontSize: 18,
        width: '95%',
        borderBottomColor: "white",
        borderBottomWidth: 1,
    },
    NewPasswordAgain: {
        marginTop: '5%',
        marginLeft: '5%',
    },
    NewPasswordAgainText: {
        color: '#8e8e8e',
        fontSize: 15,
    },
    NewPasswordAgainInput: {
        color: 'white',
        fontSize: 18,
        width: '95%',
        borderBottomColor: "white",
        borderBottomWidth: 1,
    },
    ForgotPassword: {
        marginLeft: '5%',
        color: '#8e8e8e',
        fontSize: 15,
    },
});