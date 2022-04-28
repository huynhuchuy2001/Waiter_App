import * as React from 'react';
import AntDesign from 'react-native-vector-icons/AntDesign';
import { Text, View, StyleSheet } from 'react-native';
import { useNavigation } from "@react-navigation/native";
export default function OrthersOnWaiter() {
    const navigation = useNavigation();
    return(
        <View style = {styles.OrthersOnWaiter}>
            {/* Header Message Control */}
            <View style = {styles.HeaderOrthersOnWaiter}>
                <AntDesign name = "arrowleft" size={25} color = "rgb(248, 248, 242)" style ={styles.IconBack} onPress = {(e) =>{navigation.goBack()}}></AntDesign>
                <Text style = {styles.textOrthersOnWaiter}>Orthers on Waiter</Text>
            </View>
            {/* Title */}
            <Text style = {styles.textTitleOrthersOnWaiter}>Deliver request to</Text>
            <View style = {styles.RequestMessage}>
                <Text style = {styles.textMessageRequest}>Message requests</Text>
                <View style = {styles.boderMessageRequest}>
                    <AntDesign name = "check" size={20} color = "black" style ={styles.IconCheck}></AntDesign>
                </View>
            </View>
            <View style = {styles.RequestMessage}>
                <Text style = {styles.textMessageRequest}>Don't receive requests</Text>
                <View style = {styles.boderDontMessageRequest}>
                </View>
            </View>
            <Text style = {styles.textMessage}>Message requests from people who follow you on Instagram will be delivered to your Message Requests folder unless you choose not to receive them.</Text>
        </View>
    )
};
const styles = StyleSheet.create({
    OrthersOnWaiter: {
        flex: 1,
        backgroundColor: 'black',
    },
    HeaderOrthersOnWaiter: {
        flexDirection: 'row',
        height: 40,
    },
    textOrthersOnWaiter: {
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
    textTitleOrthersOnWaiter: {
        fontSize: 20,
        color: 'white',
        marginTop: '5%',
        marginLeft: '5%',
        fontWeight: 'bold',
    },
    RequestMessage: {
        flexDirection: 'row',
        marginTop: '2%',
        marginLeft: '5%',
    },
    textMessageRequest: {
        fontSize: 20,
        width: '90%',
        color: 'white',
        marginTop: '3%',
        fontWeight: 'bold',
    },
    boderMessageRequest: {
        width: 25,
        height: 25,
        borderRadius: 25/2,
        backgroundColor: 'rgb(54, 78, 183)',
        marginTop: '3%',
    },
    IconCheck: {
        marginLeft: '15%',
        marginTop: '10%',
    },
    boderDontMessageRequest: {
        width: 25,
        height: 25,
        borderRadius: 25/2,
        borderWidth: 3,
        borderColor: '#8e8e8e',
        backgroundColor: 'black',
        marginTop: '3%',
    },
    textMessage: {
        width: '94%',
        marginLeft: '5%',
        fontSize: 15,
        color: '#8e8e8e',
        marginTop: '4%',
    }
});