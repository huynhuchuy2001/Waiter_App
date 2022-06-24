import * as React from 'react';
import AntDesign from 'react-native-vector-icons/AntDesign';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import Entypo from 'react-native-vector-icons/Entypo';
import Ionicons from 'react-native-vector-icons/Ionicons'
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import Feather  from 'react-native-vector-icons/Feather';
import { Text, View, StyleSheet, Pressable,ScrollView,Image,TouchableOpacity,Linking} from 'react-native';
import LinearGradient from 'react-native-linear-gradient';
import { useNavigation } from '@react-navigation/native';
import QRCodeScanner from 'react-native-qrcode-scanner';
import { RNCamera } from 'react-native-camera';
export default function ScanQrCode(){
    const onSuccess = e => {
        Linking.openURL(e.data).catch(err =>
          console.error('An error occured', err)
        );
    };
    const navigation = useNavigation();
    return(
        <LinearGradient colors={['rgb(253, 141, 50)', 'rgb(163, 7, 186)']} style={styles.container}>
            <QRCodeScanner
            onRead={onSuccess}
            flashMode={RNCamera.Constants.FlashMode.torch}
            topContent={
            <View style = {styles.HeaderScanQrCode}>
                <AntDesign name = "close" size={30} color = "white" style ={styles.IconBack} onPress = {(e) =>{navigation.goBack()}}></AntDesign>
                <View style = {{width : 180, height : 30, borderColor : 'white', borderRadius : 20, backgroundColor : '#00000000',borderWidth : 1,marginTop : '2%', marginLeft : '15%'}}>
                    <Text style = {styles.textScanQrCode}>Scanner QR Code</Text>
                </View>
                <AntDesign name = "sharealt" size={30} color = "white" style ={{marginTop : '2%', marginLeft : '15%'}}/>
            </View>
            }
            bottomContent={
            <TouchableOpacity style = {styles.ScanQrCode} onPress = {() =>{navigation.navigate('YourQrCode')}}>
                    <AntDesign name = "scan1" size={30} color = "white" style ={styles.IconCamera}></AntDesign>
                    <Text style = {styles.textYourQrCode}>Back to your QR code</Text>
            </TouchableOpacity>
            }
        />
        </LinearGradient>
    )
};
const styles = StyleSheet.create({
    container : {
        flex : 1,
    },
    HeaderScanQrCode : {
        flex : 1,
        marginLeft : '2%',
        marginTop : '2%',
        flexDirection : 'row',
    },
    IconBack : {
        marginTop : '2%'
    },
    textScanQrCode : {
        color : 'white',
        fontSize : 18,
        marginTop : '1%',
        textAlign : 'center',
    },
    ScanQrCode : {
        flexDirection : 'row',
        marginTop : '20%',
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
    },
    textYourQrCode : {
        color : 'white',
        fontSize : 18,
        marginTop : '1%',
        marginLeft : '3%',
        textAlign : 'center',
    },
});