import * as React from 'react';
import AntDesign from 'react-native-vector-icons/AntDesign';
import { Text, View, StyleSheet, TextInput } from 'react-native';
import { useNavigation } from "@react-navigation/native";
export default function EditBio() {
    const navigation = useNavigation();
    return(
        <View style={styles.EditProfilecontainer}>
            {/* Header Edit Profile */}
            <View style={styles.HeaderEditProfile}>
                <AntDesign name="close" size={30} color="white" onPress={() => navigation.goBack()} style ={{marginTop : '2%',marginLeft : '2%'}}/>
                <Text style={styles.HeaderEditProfileText}>Bio</Text>
                <AntDesign name="check" size={30} color="#087cbf" style ={{marginTop : '2%',marginLeft : '65%'}}/>
            </View>
            <View style={styles.EditProfileBody}>
                {/* Edit Bio */}
                <View style = {{borderBottomColor: "#087cbf", borderBottomWidth: 1}}>
                    <View style={styles.EditBio}>
                        <Text style={styles.EditBioText}>Bio</Text>
                        <TextInput style={styles.EditBioInput} placeholder="Enter your Bio" placeholderTextColor="#8e8e8e" />
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
    EditBio: {
        marginTop: '2.5%',
        marginLeft: '5%',
    },
    EditBioText: {
        color: '#8e8e8e',
        fontSize: 15,
    },
    EditBioInput: {
        color: 'white',
        fontSize: 18,
    }
});