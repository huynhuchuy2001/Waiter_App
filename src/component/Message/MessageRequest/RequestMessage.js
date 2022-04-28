import * as React from 'react';
import AntDesign from 'react-native-vector-icons/AntDesign';
import Feather from 'react-native-vector-icons/Feather';
import { Text,Button, View, StyleSheet, TextInput,Image,ScrollView,ImageBackground } from 'react-native';
import { useNavigation } from "@react-navigation/native";
export default function RequestMessage() {
    const navigation = useNavigation();
    return(
        <View style = {styles.RequestMessage}>
            <View style = {styles.HeaderRequestMessage}>
                <AntDesign name = "arrowleft" size={25} color = "rgb(248, 248, 242)" style ={styles.IconBack} onPress = {(e) =>{navigation.goBack()}}></AntDesign>
                <Text style = {styles.textRequestMessage}>Message requests</Text>
            </View>
            {/* Message */}
            <ScrollView showsHorizontalScrollIndicator={false}>
                <View style = {{borderBottomColor: "#414360",borderBottomWidth: 1}}>
                    <View style = {styles.TitleMessage}>
                        <Text style = {styles.textTitleMessage}>Open a chat to get more info about who's messaging you. They won't know you've seen it util you accept.</Text>
                        <Text style = {styles.ManagerMessage} onPress = {() => {navigation.navigate('MessageControl')}}>Decide who can message you.</Text>
                    </View>
                </View>
                {/* Show hidden Requests here */}
                <View style = {styles.MangerRequest} >
                    <View style = {styles.boderItemHidden}>
                        <View style = {styles.boderItem}>
                            <Feather name='eye-off' color='white' size={25} style = {styles.ItemHidden} onPress = {() => {navigation.navigate('HiddenRequest')}}></Feather>
                        </View>
                    </View>
                    <Text style = {styles.textMangerRequest} onPress = {() => {navigation.navigate('HiddenRequest')}}>Hidden Requests</Text>
                    <Text style = {styles.NumberRequest} onPress = {() => {navigation.navigate('HiddenRequest')}}>0</Text>
                    <AntDesign name = "right" size={15} color = "rgb(248, 248, 242)" style ={styles.IconNext} onPress = {() => {navigation.navigate('HiddenRequest')}}></AntDesign>
                </View>
                {/* Show if don't have hidden Requests */}
                <View style = {styles.ConfirmMessage}>
                    <Text style = {styles.textConfirmMessage}>No message requests</Text>
                    <Text style = {styles.textConfirmMessageAgain}>You don't have any message requests.</Text>
                </View>
            </ScrollView>
        </View>
    )
};
const styles = StyleSheet.create({
    RequestMessage: {
        flex: 1,
        backgroundColor: 'black',
    },
    HeaderRequestMessage: {
        flexDirection: 'row',
        height: 50,
    },
    textRequestMessage: {
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
        marginTop: '2%',
        marginLeft: '10%',
        width: '80%',
        marginBottom: '4%',
    },
    textTitleMessage: {
        color: 'white',
        fontSize: 15,
        textAlign: 'center',
    },
    ManagerMessage: {
        color: '#5ccfe6',
        fontSize: 15,
        textAlign: 'center',
        marginTop: '2%',
    },
    MangerRequest : {
        flexDirection : 'row',
    },
    boderItemHidden : {
        width : 50,
        height : 50,
        borderRadius : 50/2,
        backgroundColor : '#8e8e8e',
        marginLeft : '5%',
        marginTop : '2%',
    },
    boderItem : {
        width : 48,
        height : 48,
        borderRadius : 48/2,
        backgroundColor : 'black',
        marginLeft : '2%',
        marginTop : '2%',
    },
    ItemHidden : {
        marginTop : '22%',
        marginLeft : '22%',
    },
    textMangerRequest : {
        width : '65%',
        color : 'white',
        fontSize : 16,
        marginLeft : '5%',
        marginTop : '5%',
    },
    NumberRequest : {
        color : 'white',
        fontSize : 16,
        marginTop : '5%',
    },
    IconNext : {
        marginLeft : '3%',
        marginTop : '6%',
    },
    ConfirmMessage : {
        marginTop : '35%',
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
    }
});