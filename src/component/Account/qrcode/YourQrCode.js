import * as React from 'react';
import AntDesign from 'react-native-vector-icons/AntDesign';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import Entypo from 'react-native-vector-icons/Entypo';
import Ionicons from 'react-native-vector-icons/Ionicons'
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import Feather  from 'react-native-vector-icons/Feather';
import { Text, View, StyleSheet, Pressable,ScrollView,Image} from 'react-native';
import LinearGradient from 'react-native-linear-gradient';
import { useNavigation } from '@react-navigation/native';
export default function YourQrCode(){
    const navigation = useNavigation();
    return(
        <LinearGradient colors={['rgb(253, 141, 50)', 'rgb(163, 7, 186)']} style={styles.container}>
            <View style = {styles.HeaderYourQrCode}>
                <AntDesign name = "close" size={30} color = "white" style ={styles.IconBack} onPress = {(e) =>{navigation.goBack()}}></AntDesign>
                <View style = {{width : 80, height : 30, borderColor : 'white', borderRadius : 20, backgroundColor : '#00000000',borderWidth : 1,marginTop : '2%', marginLeft : '30%'}}>
                    <Text style = {styles.textYourQrCode}>COLOR</Text>
                </View>
                <AntDesign name = "sharealt" size={30} color = "white" style ={{marginTop : '2%', marginLeft : '30%'}}/>
            </View>
            <View style = {styles.YourQrCode}>
                <Image source = {require('../../../assets/Images/QrCode_hdh.huyyyy.png')}/>
            </View>
            {/* Scan QR code */}
            <Pressable style = {styles.ScanQrCode} onPress = {() =>{navigation.navigate('ScanQrCode')}}>
                <Feather name = "camera" size={30} color = "white" style ={styles.IconCamera}></Feather>
                <Text style = {styles.textScanQrCode}>Scan QR code</Text>
            </Pressable>
        </LinearGradient>
    )
};
const styles = StyleSheet.create({
    container : {
        flex : 1,
    },
    HeaderYourQrCode : {
        flexDirection : 'row',
        marginLeft : '2%',
        marginTop : "1%"
    },
    IconBack : {
        marginTop : '2%'
    },
    textYourQrCode : {
        color : 'white',
        fontSize : 18,
        marginTop : '1%',
        textAlign : 'center',
    },
    YourQrCode : {
        width : '76%',
        marginTop : '40%',
        marginLeft : '12%',
        borderRadius : 15,
        backgroundColor : 'white'
    },
    ScanQrCode : {
        flexDirection : 'row',
        marginTop : '37%',
        marginLeft : '30%',
    },
    IconCamera : {
        marginLeft : '2%'
    },
    textScanQrCode : {
        color : 'white',
        fontSize : 18,
        marginLeft : '5%',
        textAlign : 'center',
        marginTop : '1%'
    }
});