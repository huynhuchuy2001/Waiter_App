import * as React from 'react';
import AntDesign from 'react-native-vector-icons/AntDesign';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import { Text, View, StyleSheet, TextInput } from 'react-native';
import { useNavigation } from "@react-navigation/native";
export default function EditEmail() {
    const navigation = useNavigation();
    return(
        <View style={styles.EditProfilecontainer}>
            {/* Header Edit Profile */}
            <View style={styles.HeaderEditProfile}>
                <AntDesign name="close" size={30} color="white" onPress={() => navigation.goBack()} style ={{marginTop : '2%',marginLeft : '2%'}}/>
                <Text style={styles.HeaderEditProfileText}>Change Email</Text>
                <AntDesign name="check" size={30} color="#087cbf" style ={{marginTop : '2%',marginLeft : '40%'}}/>
            </View>
            <View style={styles.EditProfileBody}>
                {/* Edit Email */}
                <View style = {{borderBottomColor: "#087cbf", borderBottomWidth: 1}}>
                    <View style={styles.EditEmail}>
                        <Text style={styles.EditEmailText}>Email</Text>
                        <View style= {{flexDirection : 'row'}}>
                            <MaterialCommunityIcons name="email-outline" size={30} color="white" style ={{marginTop : '2%'}}/>
                            <TextInput style={styles.EditEmailInput} placeholder="Enter your Email" placeholderTextColor="#8e8e8e" value='huynhduchuy2001@gmail.com'/>
                        </View>
                    </View>
                </View>
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
    EditEmail: {
        marginTop: '2.5%',
        marginLeft: '5%',
    },
    EditEmailText: {
        color: '#8e8e8e',
        fontSize: 15,
    },
    EditEmailInput: {
        color: 'white',
        fontSize: 18,
        marginLeft: '2%',
    }
});