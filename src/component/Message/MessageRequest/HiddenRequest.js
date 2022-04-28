import * as React from 'react';
import AntDesign from 'react-native-vector-icons/AntDesign';
import Ionicons from 'react-native-vector-icons/Ionicons';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import Feather from 'react-native-vector-icons/Feather';
import Fontisto from 'react-native-vector-icons/Fontisto';
import { Text,Button, View, StyleSheet, TextInput,Image,ScrollView,ImageBackground } from 'react-native';
import { useNavigation } from "@react-navigation/native";
export default function HiddenRequest() {
    const navigation = useNavigation();
    return(
        <View style = {styles.HiddenRequest}>
            <View style = {styles.HeaderHiddenRequest}>
                <AntDesign name = "arrowleft" size={25} color = "rgb(248, 248, 242)" style ={styles.IconBack} onPress = {(e) =>{navigation.goBack()}}></AntDesign>
                <Text style = {styles.textHiddenRequest}>Hidden requests</Text>
            </View>
            {/* Message */}
            <ScrollView showsHorizontalScrollIndicator={false}>
                <View style = {styles.TitleMessage}>
                    <Text style = {styles.TextTitleMessage}>Request containing messages that may be offensive or unwanted are moved to this folder.</Text>
                </View>
                {/* Message hidden requests */}
                <View style = {styles.ConfirmMessage}>
                    <Text style = {styles.textConfirmMessage}>No hidden requests</Text>
                    <Text style = {styles.textConfirmMessageAgain}>Message requests that may be offesive or unwanted will appear here.</Text>
                    <Text style = {styles.ManagerMessage} onPress = {() => {navigation.navigate('HidenWord')}}>Manage Hidden Words preferences</Text>
                </View>
            </ScrollView>
        </View>
    )
};
const styles = StyleSheet.create({
    HiddenRequest: {
        flex: 1,
        backgroundColor: 'black',
    },
    HeaderHiddenRequest: {
        flexDirection: 'row',
        height: 50,
    },
    textHiddenRequest: {
        fontSize: 22,
        marginLeft: 25,
        marginTop: 8,
        color: 'rgb(248, 248, 242)',
        fontWeight: 'bold',
    },
    IconBack: {
        marginLeft: '2%',
        marginTop: 12,
    },
    TitleMessage: {
        backgroundColor : '#1F2739',
        width: '100%',
        height: 50,
    },
    TextTitleMessage: {
        width: '90%',
        color: '#8e8e8e',
        textAlign: 'center',
        marginTop: '2%',
        marginLeft: '5%',
        fontSize: 14,
    },
    ConfirmMessage : {
        marginTop : '40%',
        width : '65%',
        marginLeft : '20%',
    },
    textConfirmMessage : {
        color : 'white',
        fontSize : 22,
        marginTop : '5%',
        fontWeight : 'bold',
        textAlign : 'center',
    },
    textConfirmMessageAgain : {
        color : '#8e8e8e',
        fontSize : 15,
        marginTop : '2%',
        textAlign : 'center',
    },
    ManagerMessage : {
        color : '#5ccfe6',
        fontSize : 15,
    }
});