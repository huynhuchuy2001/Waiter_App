import React,{useState} from 'react';
import AntDesign from 'react-native-vector-icons/AntDesign';
import Entypo from 'react-native-vector-icons/Entypo';
import { Text, View, StyleSheet, Pressable, TextInput } from 'react-native';
import { useNavigation } from '@react-navigation/native';
export default function Theme() {
    const navigation = useNavigation();
    const [Theme,setTheme] = useState({
        light : false,
        dark : false,
        sytem : false,
    });
    return( 
        <View style = {styles.Theme}>
            <View style = {styles.HeaderTheme}>
                <AntDesign name = "arrowleft" size={25} color = "rgb(248, 248, 242)" style ={styles.IconBack} onPress = {(e) =>{navigation.goBack()}}></AntDesign>
                <Text style = {styles.textTheme}>Set Theme</Text>
            </View>
            {/* Light */}
            <View style = {styles.ThemeLight}>
                <Text style = {styles.textThemeLight}>Light</Text>
                {Theme?.light === false ? 
                    <Entypo name = "circle" size={25} color = "#8e8e8e" style ={styles.IconDot} onPress = {() =>{setTheme({...Theme,light : true,dark : false,sytem : false})}}></Entypo>
                    :
                    <AntDesign name = "checkcircle" size={25} color = "rgb(70, 81, 210)" style ={styles.IconCheck} ></AntDesign>
                }
            </View>
            {/* Dark */}
            <View style = {styles.ThemeDark}>
                <Text style = {styles.textThemeDark}>Dark</Text>
                {Theme?.dark === false ?
                    <Entypo name = "circle" size={25} color = "#8e8e8e" style ={styles.IconDot} onPress = {() =>{setTheme({...Theme,light : false,dark : true,sytem : false})}}></Entypo>
                    :
                    <AntDesign name = "checkcircle" size={25} color = "rgb(70, 81, 210)" style ={styles.IconCheck} ></AntDesign>
                }
            </View>
            {/* System default */}
            <View style = {styles.ThemeSystem}>
                <Text style = {styles.textThemeSystem}>System default</Text>
                {Theme?.sytem === false ?
                    <Entypo name = "circle" size={25} color = "#8e8e8e" style ={styles.IconDot} onPress = {() =>{setTheme({...Theme,light : false,dark : false,sytem : true})}}></Entypo>
                    :
                    <AntDesign name = "checkcircle" size={25} color = "rgb(70, 81, 210)" style ={styles.IconCheck} ></AntDesign>
                }
            </View>
        </View>
    );
}
const styles = StyleSheet.create({
    Theme: {
        flex: 1,
        backgroundColor: 'black',
    },
    HeaderTheme: {
        flexDirection: 'row',
        marginTop : '2%',
        marginLeft : '2%',
    },
    textTheme: {
        color : 'white',
        fontSize : 22,
        fontWeight : 'bold',
        marginLeft : '5%',
    },
    IconBack: {
        marginTop : '1%',
    },
    ThemeLight: {
        flexDirection : 'row',
        marginLeft : '2%',
        marginTop : '5%',
    },
    textThemeLight: {
        color : 'white',
        fontSize : 20,
        marginLeft : '3%',
        width : '50%',
    },
    IconDot: {
        marginLeft : '35%',
    },
    IconCheck : {
        marginLeft : '35%',
    },
    ThemeDark: {
        flexDirection : 'row',
        marginLeft : '2%',
        marginTop : '5%',
    },
    textThemeDark: {
        color : 'white',
        fontSize : 20,
        marginLeft : '3%',
        width : '50%',
    },
    ThemeSystem: {
        flexDirection : 'row',
        marginLeft : '2%',
        marginTop : '5%',
    },
    textThemeSystem: {
        color : 'white',
        fontSize : 20,
        marginLeft : '3%',
        width : '50%',
    },
});