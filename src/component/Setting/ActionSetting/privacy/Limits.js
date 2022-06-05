import * as React from 'react';
import AntDesign from 'react-native-vector-icons/AntDesign';
import { Text, View, StyleSheet, Pressable, TextInput ,Switch} from 'react-native';
import { useNavigation } from '@react-navigation/native';
import Ionicons from 'react-native-vector-icons/Ionicons'; 
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import Feather from 'react-native-vector-icons/Feather';
import Fontisto from 'react-native-vector-icons/Fontisto';
export default function Limits() {
    const navigation = useNavigation();
    return( 
        <View style = {styles.Limits}>
            <View style = {styles.HeaderLimits}>
                <AntDesign name = "arrowleft" size={30} color = "rgb(248, 248, 242)" style ={styles.IconBack} onPress = {(e) =>{navigation.goBack()}}></AntDesign>
                <Text style = {styles.textLimits}>Limits</Text>
            </View>
            <View style = {styles.TitleLimit}>
                <MaterialCommunityIcons name = "message-reply-text" size={30} color = "white" style ={styles.IconMessageTop}></MaterialCommunityIcons>
                <MaterialCommunityIcons name = "message-reply" size={25} color = "#8e8e8e" style ={styles.IconMessageBottom}></MaterialCommunityIcons>
                <View style={styles.boderLimit}>
                    <Ionicons name = "person-circle-outline" size={45} color = "rgb(248, 248, 242)" style ={styles.IconUser}/>
                </View>
                <MaterialCommunityIcons name = "chat-alert-outline" size={30} color = "#8e8e8e" style ={styles.IconAlertTop}></MaterialCommunityIcons>
                <MaterialCommunityIcons name = "chat-alert-outline" size={35} color = "white" style ={styles.IconAlertBottom}></MaterialCommunityIcons>
            </View>
            <Text style = {styles.textLimit}>Limit unwanted interactions</Text>
            <Text style = {styles.textLimitTitle}>If you feel like you're being harassaed, you can temporarily limit unwanted comments and messages. Limiting is similar to restricting, but helps you message harassment from groups instead of individuals.</Text>
            {/* Limit account */}
            <View style = {styles.LimitAccount}>
                <Feather name = "users" size={25} color = "white" style = {{marginTop : '10%'}}/>
                <Text style = {styles.textLimitAccount}>We'll recommend groups or accounts you may want to limit comments and messages from.</Text>
            </View>
            {/* Limit Comment */}
            <View style = {styles.LimitComment}>
                <Fontisto name = "hipchat" size={25} color = "white" style = {{marginTop : '7%'}}/>
                <Text style = {styles.textLimitComment}>Limited comments and messages will be hidden unless you approve them.</Text>
            </View>
            {/* Compass */}
            <View style = {styles.Compass}>
                <Feather name = "compass" size={25} color = "white" style = {{marginTop : '7%'}}/>
                <Text style = {styles.textCompass}>This won't affect your feach in feed and Explore.</Text>
            </View>
            {/* Button Continue */}
            <View style = {{borderTopColor : '#8e8e8e', borderTopWidth :1}}>
                <View style = {styles.ButtonContinue}>
                    <Text style = {styles.textContinue}>Continue</Text>
                </View>
            </View>
        </View>
    );
}
const styles = StyleSheet.create({
    Limits: {
        flex: 1,
        backgroundColor: 'black',
    },
    HeaderLimits: {
        flexDirection: 'row',
    },
    IconBack : {
        marginTop : '3%',
        marginLeft : '2%',
    },
    textLimits: {
        marginTop : '3%',
        marginLeft : '10%',
        color : 'white',
        fontSize : 22,
        fontWeight : 'bold',
    },
    boderLimit : {
        height: 100,
        borderRadius : 50,
        width: 100,
        borderStyle: 'dotted',
        borderWidth: 2,
        borderColor: '#ad30d8',
    },
    TitleLimit : {
        flexDirection : 'row',
        marginTop : '5%',
        marginLeft : '30%',
    },
    IconUser : {
        marginTop : '25%',
        marginLeft : '25%',
    },
    IconAlertTop : {
        marginTop : '3%',
    },
    IconAlertBottom : {
        marginTop : '23%',
        marginLeft : '-13%',
    },
    IconMessageTop : {
        marginTop : '3%',
    },
    IconMessageBottom : {
        marginTop : '25%',
        marginLeft : '-8%',
    },
    textLimit : {
        marginTop : '5%',
        textAlign : 'center',
        color : 'white',
        fontSize : 25,
        fontWeight : 'bold',
    },
    textLimitTitle : {
        width : '90%',
        marginTop : '3%',
        marginLeft : '5%',
        textAlign : 'center',
        color : '#8e8e8e',
        fontSize : 16,
    },
    LimitAccount : {
        flexDirection : 'row',
        marginLeft : '5%',
    },
    textLimitAccount : {
        width : '84%',
        marginTop : '5%',
        marginLeft : '5%',
        color : '#8e8e8e',
        fontSize : 16,
    },
    LimitComment : {
        flexDirection : 'row',
        marginLeft : '5%',
    },
    textLimitComment : {
        width : '84%',
        marginTop : '5%',
        marginLeft : '5%',
        color : '#8e8e8e',
        fontSize : 16,
    },
    Compass : {
        flexDirection : 'row',
        marginLeft : '5%',
        marginBottom : '45%',
    },
    textCompass : {
        width : '84%',
        marginTop : '5%',
        marginLeft : '5%',
        color : '#8e8e8e',
        fontSize : 16,
    },
    ButtonContinue : {
        width : '90%',
        marginTop : '3%',
        marginLeft : '5%',
        backgroundColor : '#3490db',
        borderRadius : 10,
        height : 40,
        justifyContent : 'center',
        alignItems : 'center',
    },
    textContinue : {
        color : 'white',
        fontSize : 20,
    },
});