import React,{useState} from 'react';
import AntDesign from 'react-native-vector-icons/AntDesign';
import Entypo from 'react-native-vector-icons/Entypo';
import { Text, View, StyleSheet, Pressable, TextInput ,Image,Switch} from 'react-native';
import { useNavigation } from '@react-navigation/native';
export default function Sensitive() {
    const navigation = useNavigation();
    return( 
        <View style = {styles.Sensitive}>
            <View style = {styles.HeaderSensitive}>
                <AntDesign name = "arrowleft" size={25} color = "rgb(248, 248, 242)" style ={styles.IconBack} onPress = {(e) =>{navigation.goBack()}}></AntDesign>
                <Text style = {styles.textSensitive}>Sensitive content control</Text>
            </View>
            <Text style = {styles.textTitleSensitive}>This setting can help you control the amount of photos and video thay you may find upseting or offensive on your Explore page. It does not control what you see in Direct Messages, Reels, Stories, Feed, or Account Recommendations.</Text>
            <Text style = {styles.Work}>How does this work?</Text>
            <View style = {styles.SensitiveAction}>
                <View style = {styles.SensitiveActionLeft}>
                    <Text style = {styles.textSensitiveAction}>Allow</Text>
                    <Text style = {styles.textSensitiveActionTitle}>You may see more photos and videos that could be upsetting or offensive.</Text>
                </View>
                <View style = {styles.SensitiveActionRight}/>
            </View>
            <View style = {styles.SensitiveAction}>
                <View style = {styles.SensitiveActionLeft}>
                    <Text style = {styles.textSensitiveAction}>Limit (Default)</Text>
                    <Text style = {styles.textSensitiveActionTitle}>You may see some photos and videos that could be upsetting or offensive. Content in Explore has always been filtered at this level.</Text>
                </View>
                <View style = {styles.SensitiveActionRight}/>
            </View>
            <View style = {styles.SensitiveAction}>
                <View style = {styles.SensitiveActionLeft}>
                    <Text style = {styles.textSensitiveAction}>Limit Event More</Text>
                    <Text style = {styles.textSensitiveActionTitle}>You may see photos and videos that could be upsetting or offensive.</Text>
                </View>
                <View style = {styles.SensitiveActionRight}/>
            </View>
        </View>
    );
}
const styles = StyleSheet.create({
    Sensitive: {
        flex: 1,
        backgroundColor: 'black',
    },
    HeaderSensitive: {
        flexDirection: 'row',
        marginTop : '2%',
        marginLeft : '2%',
    },
    textSensitive: {
        color : 'white',
        fontSize : 22,
        fontWeight : 'bold',
        marginLeft : '5%',
    },
    IconBack: {
        marginTop : '1%',
        marginLeft : '2%',
    },
    textTitleSensitive: {
        width : '96%',
        marginTop : '5%',
        marginLeft : '5%',
        color : '#8e8e8e',
        fontSize : 15,
    },
    Work: {
        marginTop : '3%',
        marginLeft : '5%',
        color : '#3b64e9',
        fontSize : 15,
    },
    SensitiveAction: {
        flexDirection: 'row',
        marginTop : '5%',
        marginLeft : '5%',
    },
    SensitiveActionLeft: {
        flexDirection: 'column',
        width : '90%',
    },
    textSensitiveAction: {
        color : 'white',
        fontSize : 15,
    },
    textSensitiveActionTitle: {
        color : '#8e8e8e',
        fontSize : 15,
    },
    SensitiveActionRight: {
        width : 25,
        height : 25,
        borderRadius: 25/2,
        backgroundColor: '#8e8e8e',
        borderWidth: 2,
        borderColor: '#c3c5ca',
        marginTop : '5%',
        marginLeft : '1%',
    },
});