import * as React from 'react';
import AntDesign from 'react-native-vector-icons/AntDesign';
import Feather from 'react-native-vector-icons/Feather';
import { Text, View, StyleSheet, TextInput } from 'react-native';
import { useNavigation } from "@react-navigation/native";
export default function EditPhoneNumber() {
    const navigation = useNavigation();
    return(
        <View style={styles.EditProfilecontainer}>
            {/* Header Edit Profile */}
            <View style={styles.HeaderEditProfile}>
                <AntDesign name="close" size={30} color="white" onPress={() => navigation.goBack()} style ={{marginTop : '2%',marginLeft : '2%'}}/>
                <Text style={styles.HeaderEditProfileText}>Change Phone Number</Text>
                <AntDesign name="check" size={30} color="#087cbf" style ={{marginTop : '2%',marginLeft : '15%'}}/>
            </View>
            <View style={styles.EditProfileBody}>
                {/* Edit PhoneNumber */}
                <View style = {{borderBottomColor: "#087cbf", borderBottomWidth: 1}}>
                    <View style={styles.EditPhoneNumber}>
                        <Text style={styles.EditPhoneNumberText}>Phone Number</Text>
                        <View style= {{flexDirection : 'row'}}>
                            <Feather name="phone" size={25} color="white" style ={{marginTop : '2%'}}/>
                            <TextInput style={styles.EditPhoneNumberInput} placeholder="Enter your PhoneNumber" placeholderTextColor="#8e8e8e" value='0336755506'/>
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
    EditPhoneNumber: {
        marginTop: '2.5%',
        marginLeft: '5%',
    },
    EditPhoneNumberText: {
        color: '#8e8e8e',
        fontSize: 15,
    },
    EditPhoneNumberInput: {
        color: 'white',
        fontSize: 18,
        marginLeft: '2%',
    }
});