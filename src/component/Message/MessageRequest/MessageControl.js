import * as React from 'react';
import AntDesign from 'react-native-vector-icons/AntDesign';
import { Text, View, StyleSheet, Pressable } from 'react-native';
import { useNavigation } from "@react-navigation/native";
export default function MessageControl() {
    const navigation = useNavigation();
    return(
        <View style = {styles.MessageControl}>
            {/* Header Message Control */}
            <View style = {styles.HeaderMessageControl}>
                <AntDesign name = "arrowleft" size={25} color = "rgb(248, 248, 242)" style ={styles.IconBack} onPress = {(e) =>{navigation.goBack()}}></AntDesign>
                <Text style = {styles.textMessageControl}>Message control</Text>
            </View>
            {/* Message */}
            <View style = {styles.bodyMessageControl}>
                <View style = {{borderBottomColor: '#8e8e8e', borderBottomWidth: 1}}>
                    <View style = {styles.TitleMessage}>
                        <Text style = {styles.textTitleMessage}>Decide whether message requests go to your Chats list, your Message requests folder, or whether to receive them at all.</Text>
                    </View>
                    <Text style = {styles.textMessage}>Potential connections</Text>
                    <Pressable onPress={() => navigation.navigate('FollowerOnWaiter')}>
                        <View style = {styles.Follower}>
                            <Text style = {styles.textFollower}>Your followers on Waiter</Text>
                            <Text style = {styles.textRequestFollower}>Requests</Text>
                        </View>
                    </Pressable>
                    <Text style = {styles.text}>Facebook friends or people you've chatted with on Messenger</Text>
                    <Text style = {styles.text}>Friend of friends on Facebook</Text>
                    <Text style = {styles.text}>People with your phone number</Text>
                    <Text style = {styles.textAccountFacebook}>Add your Facebook account</Text>
                    <Text style = {styles.textTitleAccountFacebook}>Add your waiter and Facebook accounts to Accounts Center for more message delivery options.</Text>
                </View>
                <View style = {{borderBottomColor: '#8e8e8e', borderBottomWidth: 1}}>
                    <View style = {styles.OrtherPeople}>
                        <Text style = {styles.textOrtherPeople}>Orther people</Text>
                        <Pressable onPress={() => navigation.navigate('PeopleFacebook')}>
                            <View style = {styles.PeopleFacebook}>
                                <Text style = {styles.textPeopleFacebook}>People on Facebook</Text>
                                <Text style = {styles.textRequestPeopleFacebook}>Requests</Text>
                            </View>
                        </Pressable>
                        <Pressable onPress={() => navigation.navigate('OrthersOnWaiter')}>
                            <View style = {styles.PeopleFacebook}>
                                <Text style = {styles.textPeopleFacebook}>Orthers on Waiter</Text>
                                <Text style = {styles.textRequestPeopleFacebook}>Requests</Text>
                            </View>
                        </Pressable>
                    </View>
                </View>
                <View style = {{marginTop : '5%',marginLeft : '5%'}}>
                    <Text style = {styles.textGroupChat}>Group chats</Text>
                    <Text style = {styles.textAddGroupChat} onPress = {() => {navigation.navigate('AddGroups')}}>Who can add you to groups</Text>
                    <Text style = {styles.textTitleAddGroupChat}>Not all messages are requests: accounts you follow, for example, can send messafes to your Chats list. Learn more about
                        <Text style = {styles.textTitleMessageYou}> who can message you.</Text>
                    </Text>
                </View>
            </View>
        </View>
    )
};
const styles = StyleSheet.create({
    MessageControl: {
        flex: 1,
        backgroundColor: 'black',
    },
    HeaderMessageControl: {
        flexDirection: 'row',
        height: 40,
    },
    textMessageControl: {
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
    bodyMessageControl: {
        marginTop: '2%',
    },
    TitleMessage: {
        width: '90%',
        marginLeft: '5%',
    },
    textTitleMessage: {
        fontSize: 15,
        color: 'white',
        marginTop: '5%',
    },
    textMessage: {
        fontSize: 17,
        color: 'white',
        marginTop: '5%',
        marginLeft: '5%',
        fontWeight: 'bold',
    },
    Follower: {
        flexDirection: 'row',
        marginTop: '2%',
        marginLeft: '5%',
    },
    textFollower: {
        fontSize: 17,
        color: 'white',
        marginTop: '3%',
        fontWeight: 'bold',
    },
    textRequestFollower: {
        fontSize: 17,
        color: '#8e8e8e',
        marginTop: '3%',
        marginLeft: '28%',
    },
    text: {
        fontSize: 17,
        color: '#8e8e8e',
        marginTop: '4%',
        marginLeft: '5%',
    },
    textAccountFacebook: {
        fontSize: 17,
        color: '#5ccfe6',
        marginTop: '4%',
        marginLeft: '5%',
        fontWeight: 'bold',
    },
    textTitleAccountFacebook: {
        fontSize: 15,
        color: '#8e8e8e',
        marginTop: '3%',
        marginLeft: '5%',
        marginBottom: '5%',
    },
    OrtherPeople: {
        marginTop: '3%',
        marginLeft: '5%',
        marginBottom: '5%',
    },
    textOrtherPeople: {
        fontSize: 17,
        color: 'white',
        fontWeight: 'bold',
    },
    PeopleFacebook: {
        flexDirection: 'row',
        marginTop: '5%',
    },
    textPeopleFacebook: {
        fontSize: 17,
        color: 'white',
        fontWeight: 'bold',
        width: '70%',
    },
    textRequestPeopleFacebook: {
        fontSize: 17,
        color: '#8e8e8e',
        marginLeft: '8%',
    },
    textGroupChat: {
        fontSize: 17,
        color: 'white',
        fontWeight: 'bold',
    },
    textAddGroupChat: {
        fontSize: 17,
        color: 'white',
        fontWeight: 'bold',
        marginTop: '3%',
    },
    textTitleAddGroupChat: {
        fontSize: 15,
        color: '#8e8e8e',
        marginTop: '3%',
        width: '98%',
    },
    textTitleMessageYou : {
        fontSize: 15,
        color: 'white',
    }
});