import React,{useState} from 'react';
import AntDesign from 'react-native-vector-icons/AntDesign';
import Entypo from 'react-native-vector-icons/Entypo';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import { Text, View, StyleSheet, Pressable, TextInput ,Image,Switch} from 'react-native';
import { useNavigation } from '@react-navigation/native';
export default function Sharing() {
    var nameFB = 'Huy Huynh';
    var nameInstagram = 'hdh.huyyyy';
    const navigation = useNavigation();
    return( 
        <View style = {styles.Sharing}>
            <View style = {styles.HeaderSharing}>
                <AntDesign name = "arrowleft" size={25} color = "rgb(248, 248, 242)" style ={styles.IconBack} onPress = {(e) =>{navigation.goBack()}}></AntDesign>
                <Text style = {styles.textSharing}>Sharing to other apps</Text>
            </View>
            {/* Facebook */}
            <View style = {styles.SharingApp}>
                <MaterialCommunityIcons name = "facebook" size={25} color = "#3388ed" ></MaterialCommunityIcons>
                <Text style = {styles.textSharingApp}>Facebook</Text>
                <Text style = {styles.textNameApp}>{nameFB}</Text>
                <AntDesign name = "check" size={25} color = "#3388ed" style ={{marginTop : '1%', marginLeft : '5%'}}></AntDesign>
            </View>
            {/* Instagram */}
            <View style = {styles.SharingApp}>
                <AntDesign name = "instagram" size={25} color = "#3388ed" ></AntDesign>
                <Text style = {styles.textSharingApp}>Instagram</Text>
                <Text style = {styles.textNameApp}>{nameInstagram}</Text>
                <AntDesign name = "check" size={25} color = "#3388ed" style ={{marginTop : '1%', marginLeft : '5%'}}></AntDesign>
            </View>
            {/* Twitter */}
            <View style = {styles.SharingApp}>
                <AntDesign name = "twitter" size={25} color = "white" ></AntDesign>
                <Text style = {styles.textSharingAppInactive}>Twitter</Text>
            </View>
            {/* Tumblr */}
            <View style = {styles.SharingApp}>
                <Entypo name = "tumblr-with-circle" size={25} color = "white" ></Entypo>
                <Text style = {styles.textSharingAppInactive}>Tumblr</Text>
            </View>
            {/* Github */}
            <View style = {styles.SharingApp}>
                <AntDesign name = "github" size={25} color = "white" ></AntDesign>
                <Text style = {styles.textSharingAppInactive}>Github</Text>
            </View>
            {/* Linkedin */}
            <View style = {styles.SharingApp}>
                <Entypo name = "linkedin-with-circle" size={25} color = "white" ></Entypo>
                <Text style = {styles.textSharingAppInactive}>Linkedin</Text>
            </View>
        </View>
    );
}
const styles = StyleSheet.create({
    Sharing: {
        flex: 1,
        backgroundColor: 'black',
    },
    HeaderSharing: {
        flexDirection: 'row',
        marginTop : '2%',
        marginLeft : '2%',
    },
    textSharing: {
        color : 'white',
        fontSize : 22,
        fontWeight : 'bold',
        marginLeft : '5%',
    },
    IconBack: {
        marginTop : '1%',
        marginLeft : '2%',
    },
    SharingApp: {
        flexDirection: 'row',
        marginTop : '5%',
        marginLeft : '3%',
    },
    textSharingApp: {
        width : '30%',
        color : '#3388ed',
        fontSize : 18,
        marginLeft : '5%',
    },
    textNameApp: {
        color : '#3388ed',
        fontSize : 18,
        marginLeft : '10%',
    },
    textSharingAppInactive: {
        color : 'white',
        fontSize : 18,
        marginLeft : '5%',
    },
});