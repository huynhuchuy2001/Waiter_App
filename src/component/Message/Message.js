import * as React from 'react';
import AntDesign from 'react-native-vector-icons/AntDesign';
import Ionicons from 'react-native-vector-icons/Ionicons';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import Fontisto from 'react-native-vector-icons/Fontisto';
import { Text,Button, View, StyleSheet, TextInput,Image,ScrollView,ImageBackground } from 'react-native';
import { useNavigation } from "@react-navigation/native";
export default function Message() {
    const navigation = useNavigation();
    let name = 'hdh.huyyyy';
    var arrayUserActive = [
        {
            name : 'Đức Trường',
            status : 'online',
            message : 'Sent you a message',
            image : 'https://scontent.fsgn3-1.fna.fbcdn.net/v/t39.30808-6/247590695_2739368196356552_4837848715300811541_n.jpg?_nc_cat=107&ccb=1-7&_nc_sid=ad2b24&_nc_ohc=O5rdqerkV1kAX99U6eW&_nc_ht=scontent.fsgn3-1.fna&oh=00_AT_iyTSO0llTavFLmLYHK5pazeQvZpoqgkex2o_kLqDfkw&oe=62BDCB49'
        },
        {
            name : 'Trường Sinh',
            status : 'offline',
            message : 'Liked a message',
            image : 'https://scontent.fsgn3-1.fna.fbcdn.net/v/t39.30808-1/185526923_1334442560290882_6475410094091613892_n.jpg?stp=dst-jpg_p320x320&_nc_cat=104&ccb=1-7&_nc_sid=7206a8&_nc_ohc=cDZxSfWtgPMAX9xiDIv&_nc_ht=scontent.fsgn3-1.fna&oh=00_AT8oX8iMQ8Gb8SdWphHsIknHNrAMjzM_zpVq8LgvZgRG6Q&oe=62BD68A4'
        },
        {
            name : 'Trường Mai',
            status : 'online',
            message : 'Sent you a message',
            image : 'https://scontent.fsgn2-5.fna.fbcdn.net/v/t39.30808-6/274723232_2095406903969072_7504427080082865401_n.jpg?_nc_cat=106&ccb=1-7&_nc_sid=09cbfe&_nc_ohc=5dA0oNbONT8AX-9GLC-&_nc_ht=scontent.fsgn2-5.fna&oh=00_AT8YJCdvyyl6Bd-tmvO-ak3JVkC68PLT7p1LrYLiMbAaSw&oe=62BB2397'
        },
        {
            name : 'Đức Hùng',
            status : 'online',
            message : 'Active 1h ago',
            image : 'https://scontent.fsgn4-1.fna.fbcdn.net/v/t1.6435-9/52696062_101541554333212_6443151805353295872_n.jpg?_nc_cat=103&ccb=1-7&_nc_sid=09cbfe&_nc_ohc=nsE_roCBRuAAX8lqdK2&_nc_ht=scontent.fsgn4-1.fna&oh=00_AT8XQ_z2rvZocGfVa2CI2E9PB4Tu5dAmJhe0gSGVVPFr9w&oe=62DCA98C'
        },
        {
            name : 'Tường Vi',
            status : 'online',
            message : 'Active now',
            image : 'https://scontent.fsgn8-2.fna.fbcdn.net/v/t39.30808-6/272152926_1240913986401147_8867493523089750699_n.jpg?_nc_cat=111&ccb=1-7&_nc_sid=174925&_nc_ohc=k4tjE6AyONAAX_oXSSb&_nc_ht=scontent.fsgn8-2.fna&oh=00_AT-mS1KADc7rqebiYp9MmKyhmMvZ5YSDf62ZBPSaIILbng&oe=62BD39EC'
        },
        {
            name : 'Huy Huỳnh',
            status : 'online',
            message : 'Cảm ơn bạn.',
            image : 'https://scontent.fsgn4-1.fna.fbcdn.net/v/t39.30808-6/274876629_2826541607639210_363529317853290439_n.jpg?_nc_cat=101&ccb=1-7&_nc_sid=09cbfe&_nc_ohc=HdI0cCt0Q3wAX_5XJCE&_nc_ht=scontent.fsgn4-1.fna&oh=00_AT-EuusFTe6O_0EhmxL3lfl3fe-vR-9i-UVqvuXBFrKYiw&oe=62BCB4F5'
        },
        {
            name : 'Đức Hoan',
            status : 'online',
            message : 'Anh hai về chưa.',
            image : 'https://scontent.fsgn3-1.fna.fbcdn.net/v/t1.6435-9/122192711_697566607532271_2285775074524737085_n.jpg?_nc_cat=104&ccb=1-7&_nc_sid=19026a&_nc_ohc=uS9n3QsAXAcAX9uqsmo&_nc_ht=scontent.fsgn3-1.fna&oh=00_AT804VS0UCyuZTH3AvDE4obV508Dux8mw4OLEZKZGcW0IA&oe=62DB90C0'
        },
        {
            name : 'Cẩm Vân',
            status : 'offline',
            message : 'Sent you a message',
            image : 'https://scontent.fsgn13-3.fna.fbcdn.net/v/t39.30808-6/273154334_1123664431736763_6121942889354663811_n.jpg?_nc_cat=108&ccb=1-7&_nc_sid=09cbfe&_nc_ohc=5JKUGavtKnEAX87SRXD&tn=98Qe8qL2dr5GlQT0&_nc_ht=scontent.fsgn13-3.fna&oh=00_AT9dhMs9opTKaEEDkuZ5Xcc4gZ-fN_TTOrSyjwizQor48w&oe=62BDC1EA'
        }
    ]
    return(
        <View style = {styles.MessageScreen}>
            {/* Header Message */}
            <View style = {styles.HeaderMessage}>
                <AntDesign name = "arrowleft" size={25} color = "rgb(248, 248, 242)" style ={styles.IconBack} onPress = {() =>{navigation.goBack()}}/>
                <Text style = {styles.textMessage}>{name}</Text>
                <AntDesign name = "down" size={15} color = "rgb(248, 248, 242)" style ={styles.IconDown}/>
                <MaterialCommunityIcons name = "video-plus-outline" size={35} color = "rgb(248, 248, 242)" style ={styles.IconVideo} onPress = {() => {navigation.navigate('Calls')}}/>
                <Ionicons name = "add-outline" size={35} color = "rgb(248, 248, 242)" style ={styles.IconAdd} onPress = {() =>{navigation.navigate('NewMessage')}}/>
            </View>
            {/* List Message */}
            <ScrollView style = {{ height : '100%'}} showsVerticalScrollIndicator={false}>
                {/* Search Result */}
                <View style = {styles.SearchResult}>
                    <Fontisto name="search" size={20} color="#8e8e8e" style = {{marginLeft : 10,marginTop : 10}} onPress = {(e) =>{navigation.navigate('SearchMessage')}}/>
                    <Text style={styles.TextSearch} onPress = {(e) =>{navigation.navigate('SearchMessage')}}>Search</Text>
                </View>
                {/* Status User Active Now */}
                <ScrollView horizontal
                    showsHorizontalScrollIndicator={false}>
                    <View style = {styles.UserActive}>
                        <View>
                            <ImageBackground style={styles.tinyLogo} source = {{uri: 'https://scontent.fsgn4-1.fna.fbcdn.net/v/t39.30808-6/274876629_2826541607639210_363529317853290439_n.jpg?_nc_cat=101&ccb=1-7&_nc_sid=09cbfe&_nc_ohc=HdI0cCt0Q3wAX_5XJCE&_nc_ht=scontent.fsgn4-1.fna&oh=00_AT-EuusFTe6O_0EhmxL3lfl3fe-vR-9i-UVqvuXBFrKYiw&oe=62BCB4F5'}} imageStyle={{ borderRadius: 60/2 }}>
                                <View style = {{width: 18, height: 18, borderRadius: 18/2, backgroundColor: 'black',marginLeft : '70%', marginTop : '70%'}}>
                                    <View style = {styles.AcctiveNow}/>
                                </View>
                            </ImageBackground>
                            <Text style = {styles.ActiveUserText}>{name}</Text>
                        </View>
                        {arrayUserActive.map(item=>(
                            <View>
                                <ImageBackground style={styles.tinyLogoFriend} source = {{uri: item.image}} imageStyle={{ borderRadius: 60/2 }}>
                                    <View style = {{width: 18, height: 18, borderRadius: 18/2, backgroundColor: 'black',marginLeft : '70%', marginTop : '70%'}}>
                                        {
                                            item.status === 'online' ?
                                            <View style = {styles.AcctiveNow}/> : 
                                            <View style = {styles.InAcctive}/>
                                        }
                                    </View>
                                </ImageBackground>
                                <Text style = {styles.NameFriend}>{item.name}</Text>
                            </View>
                        ))}
                    </View>
                </ScrollView >
                {/* Message */}
                <View style = {styles.UserMessage}>
                    <View style = {styles.TitleMessage}>
                        <Text style = {styles.textTitleMessage}>Messages</Text>
                        <Text style = {styles.RequestMessage} onPress = {() => {navigation.navigate('RequestMessages')}}>Requests</Text>
                    </View>
                    {arrayUserActive.map(item =>(
                            <View style = {styles.MessageBody}>
                                    <Image source={{uri : item.image}} style = {styles.AvartarMessage} imageStyle={{ borderRadius: 50/2 }} />
                                    <View style = {styles.UserMessageInfor}>
                                        <Text style = {styles.NameUser} onPress = {() => {navigation.navigate('ChatMessage')}}>{item.name}</Text>
                                        <Text style = {styles.MessageText} onPress = {() => {navigation.navigate('ChatMessage')}}>{item.message}</Text>
                                    </View>
                                    <MaterialIcons name = "photo-camera" size={30} color = "rgb(248, 248, 242)" style ={styles.IconSendPhoto} />
                            </View>
                    ))}
                </View>
            </ScrollView>
        </View>
    )
};
const styles = StyleSheet.create({
    MessageScreen: {
        flex: 1,
        backgroundColor: 'black',
    },
    HeaderMessage: {
        flexDirection: 'row',
        height: 50,
        borderBottomColor: "#414360",
        borderBottomWidth: 1,
    },
    textMessage: {
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
    IconDown: {
        marginLeft : '1%',
        marginTop : '4%',
    },
    IconVideo: {
        marginTop : '2%',
        marginLeft : '30%',
    },
    IconAdd: {
        marginTop : '2%',
        marginLeft : '2%',
    },
    SearchResult: {
        flexDirection : 'row',
        marginTop : '2%',
        width: '92%',
        height: 40,
        marginLeft: '4%',
        backgroundColor: '#1F2739',
        borderRadius: 10,
    },
    TextSearch: {
        width : '100%',
        color: '#8e8e8e',
        fontSize: 15,
        marginLeft: 10,
        marginTop: 10,
    },
    UserActive: {
        paddingTop: '2%',
        backgroundColor: 'black',
        height : 100,
        flexDirection : 'row',
    },
    AcctiveNow : {
        backgroundColor : 'rgb(0, 168, 42)',
        width : 15,
        height : 15,
        borderRadius : 15/2,
        marginLeft : '8%',
        marginTop : '8%',
    },
    InAcctive : {
        backgroundColor : 'rgb(205, 10, 38)',
        width : 15,
        height : 15,
        borderRadius : 15/2,
        marginLeft : '8%',
        marginTop : '8%',
    },
    tinyLogo: {
        marginLeft: 12,
        width: 60,
        height: 60,
        borderRadius: 60/2,
    },
    tinyLogoFriend: {
        marginLeft: 15,
        width: 60,
        height: 60,
        borderRadius: 60/2,
    },
    UserMessage : {
        marginTop : '4%',
    },
    TitleMessage: {
        flexDirection: 'row',
    },
    textTitleMessage: {
        color: 'rgb(248, 248, 242)',
        fontSize: 18,
        marginLeft: '5%',
    },
    RequestMessage: {
        color: '#5ccfe6',
        fontSize: 18,
        marginLeft: '50%',
    },
    ActiveUserText: {
        marginTop: 5,
        marginLeft: 12,
        color: 'white',
    },
    NameFriend: {
        marginTop: 5,
        marginLeft: 18,
        color: 'white',
    },
    MessageBody: {
        flexDirection : 'row',
        marginLeft: '5%',
    },
    AvartarMessage: {
        height: 50,
        width: 50,
        borderRadius: 50/2,
        marginTop: '5%',
    },
    UserMessageInfor : {
        width : '60%',
        marginLeft : '8%',
        marginTop : '7%',
    },
    NameUser : {
        color : 'white',
        fontSize : 14,
    },
    MessageText : {
        color : '#8e8e8e',
        fontSize : 13,
    },
    IconSendPhoto : {
        marginLeft : '5%',
        marginTop : '8%',
    }
});