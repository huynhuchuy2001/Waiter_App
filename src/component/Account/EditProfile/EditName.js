import * as React from 'react';
import AntDesign from 'react-native-vector-icons/AntDesign';
import { Text, View, StyleSheet, TextInput } from 'react-native';
import { useNavigation } from "@react-navigation/native";
export default function EditName() {
    const navigation = useNavigation();
    return(
        <View style={styles.EditProfilecontainer}>
            {/* Header Edit Profile */}
            <View style={styles.HeaderEditProfile}>
                <AntDesign name="close" size={30} color="white" onPress={() => navigation.goBack()} style ={{marginTop : '2%',marginLeft : '2%'}}/>
                <Text style={styles.HeaderEditProfileText}>Name</Text>
                <AntDesign name="check" size={30} color="#087cbf" style ={{marginTop : '2%',marginLeft : '60%'}}/>
            </View>
            <View style={styles.EditProfileBody}>
                {/* Edit Name */}
                <View style={styles.EditName}>
                    <Text style={styles.EditNameText}>Name</Text>
                    <TextInput style={styles.EditNameInput} placeholder="Enter your name" placeholderTextColor="#8e8e8e" value="Huy Huỳnh" />
                </View>
                <Text style={styles.FormatEditName}>Help people discover your account by using the name you've know by : either your full name, nickname, or business name.</Text>
                <Text style={styles.WarningEditName}>You can only change your name twice within 14 days.</Text>
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
    EditName: {
        marginTop: '2.5%',
        marginLeft: '5%',
    },
    EditNameText: {
        color: '#8e8e8e',
        fontSize: 15,
    },
    EditNameInput: {
        color: 'white',
        fontSize: 18,
        width: '95%',
        borderBottomColor: "white",
        borderBottomWidth: 1,
    },
    FormatEditName: {
        color: '#8e8e8e',
        fontSize: 15,
        marginTop: '2.5%',
        marginLeft: '5%',
    },
    WarningEditName: {
        color: '#8e8e8e',
        fontSize: 15,
        marginTop: '2.5%',
        marginLeft: '5%',
    }
});