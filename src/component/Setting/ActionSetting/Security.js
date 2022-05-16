import * as React from 'react';
import AntDesign from 'react-native-vector-icons/AntDesign';
import { Text, View, StyleSheet, Pressable, TextInput ,Switch} from 'react-native';
import { useNavigation } from '@react-navigation/native';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import Feather from 'react-native-vector-icons/Feather';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import Ionicons from 'react-native-vector-icons/Ionicons';
import Octicons from 'react-native-vector-icons/Octicons';
export default function Security() {
    const navigation = useNavigation();
    return( 
        <View style = {styles.Security}>
            <View style = {styles.HeaderSecurity}>
                <AntDesign name = "arrowleft" size={30} color = "rgb(248, 248, 242)" style ={styles.IconBack} onPress = {(e) =>{navigation.goBack()}}></AntDesign>
                <Text style = {styles.textSecurity}>Security</Text>
            </View>
            {/* Login Security*/}
            <View style = {styles.LoginSecurity}>
                <Text style = {styles.textLoginSecurity}>Login Security</Text>
                <View style = {styles.Actions}>
                    <Octicons name = "key" size={25} color = "rgb(248, 248, 242)" style ={{marginTop : 1, marginLeft : 10}}></Octicons>
                    <Text style = {styles.textActions}>Password</Text>
                </View>
                <View style = {styles.Actions}>
                    <Ionicons name = "location-outline" size={25} color = "rgb(248, 248, 242)" style ={{marginTop : 1, marginLeft : 7}}></Ionicons>
                    <Text style = {styles.textActions}>Login activity</Text>
                </View>
                <View style = {styles.Actions}>
                    <Ionicons name = "bookmark-outline" size={25} color = "rgb(248, 248, 242)" style ={{marginTop : 1, marginLeft : 7}}></Ionicons>
                    <Text style = {styles.textActions}>Save login infor</Text>
                </View>
                <View style = {styles.Actions}>
                    <MaterialCommunityIcons name = "clipboard-check-outline" size={25} color = "rgb(248, 248, 242)" style ={{marginTop : 1, marginLeft : 7}}></MaterialCommunityIcons>
                    <Text style = {styles.textActions}>Two-factor authentication</Text>
                </View>
                <View style = {styles.Actions}>
                    <Feather name = "mail" size={25} color = "rgb(248, 248, 242)" style ={{marginTop : 1, marginLeft : 7}}></Feather>
                    <Text style = {styles.textActions}>Email from Waiter</Text>
                </View>
                <View style = {styles.Actions}>
                    <MaterialCommunityIcons name = "shield-check-outline" size={25} color = "rgb(248, 248, 242)" style ={{marginTop : 1, marginLeft : 7}}></MaterialCommunityIcons>
                    <Text style = {styles.textActions}>Securty Checkup</Text>
                </View>
            </View>
            <Text style = {styles.Data}>Data and history</Text>
            <View style = {styles.Actions}>
                <MaterialIcons name = "computer" size={25} color = "rgb(248, 248, 242)" style ={{marginTop : 1, marginLeft : 7}}></MaterialIcons>
                <Text style = {styles.textActions}>Apps and websites</Text>
            </View>
        </View>
    );
}
const styles = StyleSheet.create({
    Security: {
        flex: 1,
        backgroundColor: 'black',
    },
    HeaderSecurity: {
        flexDirection : 'row',
        height : 40,
        marginTop : '2%',
    },
    IconBack: {
        marginLeft : '3%',
        marginTop : '1%',
    },
    textSecurity : {
        color : 'white',
        fontSize : 22,
        marginLeft : '10%',
        marginTop : '1%',
        fontWeight : 'bold',
    },
    LoginSecurity : {
        borderBottomColor : '#8e8e8e',
        borderBottomWidth : 1,
        marginTop : '2%',
    },
    textLoginSecurity : {
        color : 'white',
        fontSize : 18,
        marginLeft : '5%',
        marginTop : '3%',
        marginBottom : '5%',
    },
    Actions : {
        flexDirection : 'row',
        marginLeft : '3%',
        marginBottom : '5%',
    },
    textActions : {
        width : '55%',
        color : 'white',
        fontSize : 18,
        marginLeft : '3%',
    },
    Data : {
        color : 'white',
        fontSize : 18,
        marginLeft : '5%',
        marginTop : '3%',
        marginBottom : '5%',
    }
});