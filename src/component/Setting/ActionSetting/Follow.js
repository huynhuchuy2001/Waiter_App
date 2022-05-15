import * as React from 'react';
import AntDesign from 'react-native-vector-icons/AntDesign';
import { Text, View, StyleSheet, Pressable, TextInput } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { ScrollView } from 'react-native-gesture-handler';
import Fontisto from 'react-native-vector-icons/Fontisto';
import Feather from 'react-native-vector-icons/Feather';
import Ionicons from 'react-native-vector-icons/Ionicons';
export default function Follow() {
    const navigation = useNavigation();
    return( 
        <View style = {styles.Follow}>
            <View style = {styles.HeaderFollow}>
                <AntDesign name = "arrowleft" size={30} color = "rgb(248, 248, 242)" style ={styles.IconBack} onPress = {(e) =>{navigation.goBack()}}></AntDesign>
                <Text style = {styles.textFollow}>Follows and invite friends</Text>
            </View>
            {/* Invite Friend Email */}
            <View style = {styles.InviteFriend}>
                <Feather name="mail" size={25} color="white" />
                <Text style = {styles.textInviteFriend}>Invite friends by email</Text>
            </View>
            {/* Invite friend SMS */}
            <View style = {styles.InviteFriendSMS}>
                <AntDesign name="message1" size={25} color="white" />
                <Text style = {styles.textInviteFriend}>Invite friends by SMS</Text>
            </View>
            {/* Invite More */}
            <View style = {styles.InviteMore}>
                <AntDesign name="sharealt" size={25} color="white" />
                <Text style = {styles.textInviteMore}>Invite friends by...</Text>
            </View>
        </View>
    );
}
const styles = StyleSheet.create({
    Follow: {
        flex: 1,
        backgroundColor: 'black',
    },
    HeaderFollow: {
        flexDirection : 'row',
        height : 40,
        marginTop : '2%',
    },
    IconBack: {
        marginLeft : '2%',
        marginTop : '1%',
    },
    textFollow: {
        fontSize : 22,
        color : 'white',
        fontWeight : 'bold',
        marginLeft : '10%',
        marginTop : '1%',
    },
    InviteFriend: {
        flexDirection : 'row',
        height : 50,
        marginTop : '5%',
        marginLeft : '4%',
    },
    textInviteFriend: {
        fontSize : 18,
        color : 'white',
        marginLeft : '3%',
    },
    InviteFriendSMS: {
        flexDirection : 'row',
        height : 50,
        marginLeft : '4%',
    },
    InviteMore: {
        flexDirection : 'row',
        height : 50,
        marginLeft : '4%',
    },
    textInviteMore: {
        fontSize : 18,
        color : 'white',
        marginLeft : '3%',
    }
});