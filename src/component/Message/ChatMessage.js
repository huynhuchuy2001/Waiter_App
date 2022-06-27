import * as React from 'react';
import AntDesign from 'react-native-vector-icons/AntDesign';
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import Entypo from 'react-native-vector-icons/Entypo';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import Feather from 'react-native-vector-icons/Feather';
import { Text,Button, View, StyleSheet, TextInput,Image,ScrollView,ImageBackground } from 'react-native';
import { useNavigation } from "@react-navigation/native";
export default function ChatMessage() {
    const navigation = useNavigation();
    let name = 'hdh.huyyyy';
    var arrayFriendChat = [
        {
            image : 'https://scontent.fsgn4-1.fna.fbcdn.net/v/t39.30808-6/274876629_2826541607639210_363529317853290439_n.jpg?_nc_cat=101&ccb=1-5&_nc_sid=09cbfe&_nc_ohc=zhn6GxH97wsAX9igMrU&_nc_ht=scontent.fsgn4-1.fna&oh=00_AT8CV-QY77nPfLu8se8Ba5bfAa8KH96jrUmxQJa0CXTW2A&oe=625BCEB5',
            content : [
                {
                    messageSend : 'Đang ở đâu á.',
                    messageReply : 'Đang ở nhà nè m.'
                },
                {
                    messageSend : 'Xíu đi chơi không tao ghé chở đi chơi nè. Đi tầm 5h về á. Có gì đi thì nhắn lại cho tao nha.',
                    messageReply : 'Oke luôn. Có gì đi qua chở tao nha.'
                },
            ],
            timeChat : 'April 19, 2022',
        },
        {
            image : 'https://scontent.fsgn4-1.fna.fbcdn.net/v/t39.30808-6/274876629_2826541607639210_363529317853290439_n.jpg?_nc_cat=101&ccb=1-5&_nc_sid=09cbfe&_nc_ohc=zhn6GxH97wsAX9igMrU&_nc_ht=scontent.fsgn4-1.fna&oh=00_AT8CV-QY77nPfLu8se8Ba5bfAa8KH96jrUmxQJa0CXTW2A&oe=625BCEB5',
            content : [
                {
                    messageSend : 'tao tới rồi nè m.',
                    messageReply : 'Oke để tao xuống liền á.'
                },
                {
                    messageSend : '',
                    messageReply : 'Có mang nón bảo hiểm cho t không m.'
                },
            ],
            timeChat : 'April 19, 2022',
        }
    ];
    return(
        <View style = {styles.ChatMessageScreen}>
            {/* Header Message */}
            <View style = {styles.HeaderChatMessage}>
                <AntDesign name = "arrowleft" size={25} color = "rgb(248, 248, 242)" style ={styles.IconBack} onPress = {() =>{navigation.goBack()}}/>
                <Image source = {{uri: 'https://scontent.fsgn4-1.fna.fbcdn.net/v/t39.30808-6/274876629_2826541607639210_363529317853290439_n.jpg?_nc_cat=101&ccb=1-7&_nc_sid=09cbfe&_nc_ohc=HdI0cCt0Q3wAX_5XJCE&_nc_ht=scontent.fsgn4-1.fna&oh=00_AT-EuusFTe6O_0EhmxL3lfl3fe-vR-9i-UVqvuXBFrKYiw&oe=62BCB4F5'}} style = {styles.Avatar}/>
                <View style = {{marginLeft : '5%',width : '50%'}}>
                    <Text style = {styles.textChatMessage}>{name}</Text>
                    <Text style = {styles.textActive}>Active 2h ago</Text>
                </View>
                <Feather name = "phone" size={25} color = "rgb(248, 248, 242)" style ={styles.IconPhone} />
                <AntDesign name = "videocamera" size={25} color = "rgb(248, 248, 242)" style ={styles.IconVideo} />
            </View>
            {/* Infor Chat With Friend */}
            <ScrollView showsVerticalScrollIndicator={false}>
                <View style = {styles.InforUser}>
                <Image source = {{uri: 'https://scontent.fsgn4-1.fna.fbcdn.net/v/t39.30808-6/274876629_2826541607639210_363529317853290439_n.jpg?_nc_cat=101&ccb=1-7&_nc_sid=09cbfe&_nc_ohc=HdI0cCt0Q3wAX_5XJCE&_nc_ht=scontent.fsgn4-1.fna&oh=00_AT-EuusFTe6O_0EhmxL3lfl3fe-vR-9i-UVqvuXBFrKYiw&oe=62BCB4F5'}} style = {styles.AvatarFriend}/>
                    <Text style = {styles.textNameFb}>Huy Huỳnh</Text>
                    <Text style = {styles.textName}>hdh.huyyyy 
                        <Entypo name='dot-single' size={15} color='white' style = {{marginLeft : '10%'}}/> Waiter
                    </Text>
                    <Text style = {styles.textFollows}>5k followers 
                        <Entypo name='dot-single' size={15} color='white' style = {{marginLeft : '10%'}}/>
                        0 posts
                    </Text>
                    <Text style = {styles.textFollowSince}>You've followed this Waiter account since 2021</Text>
                    <Text style = {styles.textBothFollow}>You both follow ronaldo and 10 other</Text>
                    <View style = {{width : 120, height : 28, backgroundColor : 'white',borderRadius : 5,marginTop : '5%', marginLeft : '35%'}}>
                        <View style = {{width : 117, height : 25, backgroundColor : 'black',borderRadius : 5,marginTop : '1%',marginLeft : '1%'}}>
                            <Text style = {styles.ViewProfile}>View Profile</Text>
                        </View>
                    </View>
                </View>
                {/* Chat With Friend */}
                { arrayFriendChat.map(item => (
                    <View style = {styles.ChatMessage}>
                    <Text style = {styles.TimeChat}>{item.timeChat}</Text>
                    {
                        item.content.map(content => (
                            <View>
                                {/* Message of friend */}
                                {content.messageSend !== '' ?
                                    <View style = {styles.ChatMessageLeft}>
                                        <Image source = {{uri: item.image}} style = {styles.Avatar}/>
                                        <View style = {styles.CoverFriendMessage}>
                                            <View style = {{width : '90%',marginLeft : '5%'}}>
                                                <Text style = {styles.TextFriendMessage}>{content.messageSend}</Text>
                                            </View>
                                        </View>
                                    </View> : null
                                }
                                {/* Message of user */}
                                {content.messageReply !== '' ?
                                    <View style = {styles.ChatMessageRight}>
                                        <View style = {styles.CoverFriendMessageRight}>
                                            <View style = {{width : '90%',marginLeft : '5%'}}>
                                                <Text style = {styles.TextFriendMessageRight}>{content.messageReply}</Text>
                                            </View>
                                        </View>
                                    </View> : null
                                }
                            </View>
                        ))
                    }
                </View>
                )) }
            </ScrollView>
            {/* Input Chat */}
            <View style = {styles.FooterChat}>
                <View style = {styles.FooterTextChat}>
                    <View style = {styles.FooterWidth}>
                        <View style = {styles.BackgroundPhoto}>
                            <MaterialIcons name='photo-camera' size={25} color='white' style = {styles.IconCamera}/>
                        </View>
                        <TextInput style = {styles.TextInputChat} placeholder = "Message..." placeholderTextColor="#8e8e8e"/>
                    </View>
                    <FontAwesome5 name='microphone' size={25} color='white' style = {styles.IconMic}/>
                    <FontAwesome name='photo' size={30} color='white' style = {styles.IconPhoto}/>
                    <MaterialCommunityIcons name='emoticon-kiss-outline' size={30} color='white' style = {styles.IconEmotion}/>
                </View>
            </View>
        </View>
    )
};
const styles = StyleSheet.create({
    ChatMessageScreen: {
        flex: 1,
        backgroundColor: 'black',
    },
    HeaderChatMessage: {
        flexDirection: 'row',
        height: 60,
    },
    textChatMessage: {
        fontSize: 20,
        marginTop: 8,
        color: 'rgb(248, 248, 242)',
    },
    IconBack: {
        marginLeft: '2%',
        marginTop: 12,
    },
    IconPhone: {
        marginTop : '4%',
        marginLeft : '1%',
    },
    IconVideo: {
        marginTop : '4%',
        marginLeft : '5%',
    },
    Avatar: {
        width: 30,
        height: 30,
        borderRadius: 30/2,
        marginTop : '3%',
        marginLeft : '5%',
    },
    textActive: {
        fontSize: 12,
        color : '#8e8e8e',
    },
    InforUser: {
        width: '90%',
        marginLeft : '5%',
    },
    AvatarFriend: {
        width: 100,
        height: 100,
        borderRadius: 100/2,
        marginLeft : '35%',
        marginTop : '10%',
    },
    textNameFb: {
        fontSize: 20,
        marginTop: 8,
        color: 'white',
        fontWeight: 'bold',
        marginLeft : '35%',
        marginTop : '3%',
    },
    textName: {
        fontSize: 18,
        color: 'white',
        marginLeft : '25%',
    },
    textFollows: {
        fontSize: 18,
        color: '#8e8e8e',
        marginLeft : '25%',
    },
    textFollowSince: {
        color: '#8e8e8e',
        fontSize: 18,
        textAlign: 'center',
    },
    textBothFollow: {
        color: '#8e8e8e',
        fontSize: 18,
        textAlign: 'center',
    },
    ViewProfile: {
        color: 'white',
        fontSize: 18,
        textAlign: 'center',
    },
    ChatMessage: {
        marginTop : '5%',
    },
    TimeChat: {
        color: '#8e8e8e',
        fontSize: 13,
        textAlign: 'center',
    },
    ChatMessageLeft: {
        flexDirection: 'row',
        marginTop : '5%',
        alignSelf: 'flex-start',
        width: '70%',
        marginBottom : '5%',
    },
    TextFriendMessage : {
        fontSize: 15,
        color: 'white',
        textAlign: 'center',
        marginTop : '8%',
        marginBottom : '8%',
    },
    CoverFriendMessage: {
        marginLeft : '5%',
        width: 'auto',
        borderRadius: 25,
        backgroundColor: '#8e8e8e',
    },
    ChatMessageRight: {
        marginTop : '1%', 
        width: '70%',
        alignSelf : 'flex-end',
        marginEnd : '2%',
    },
    CoverFriendMessageRight: {
        alignSelf : 'flex-end',
        height: 'auto',
        width: 'auto',
        borderRadius: 25,
        backgroundColor: 'rgb(90, 105, 236)',
        marginBottom : '5%',
    },
    TextFriendMessageRight : {
        fontSize: 15,
        color: 'white',
        textAlign: 'center',
        marginTop : '5%',
        marginBottom : '5%',
        marginEnd : '5%',
    },
    FooterChat: {
        backgroundColor: 'rgb(51, 51, 48)',
        height: 50,
        borderRadius: 25,
        width: '94%',
        marginLeft : '3%',
    },
    TextInputChat: {
        color: 'white',
        marginLeft: '2%',
        fontSize: 20,
        width: '70%',
    },
    FooterTextChat: {
        flexDirection: 'row',
    },
    BackgroundPhoto : {
        width: 35,
        height: 35,
        borderRadius: 35/2,
        backgroundColor: 'rgb(90, 105, 236)',
        marginLeft : '2%',
    },
    FooterWidth: {
        flexDirection: 'row',
        marginTop: '2%',
        marginLeft: '1%',
        textAlign: 'justify',
        width: '70%',
    },
    IconCamera: {
        marginLeft: '15%',
        marginTop: '15%',
    },
    IconMic: {
        marginTop: '3%',
    },
    IconPhoto : {
        marginTop: '3%',
        marginLeft: '3%',
    },
    IconEmotion : {
        marginTop: '3%',
        marginLeft: '3%',
    }
});