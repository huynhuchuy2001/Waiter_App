import * as React from 'react';
import AntDesign from 'react-native-vector-icons/AntDesign';
import Ionicons from 'react-native-vector-icons/Ionicons';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import Fontisto from 'react-native-vector-icons/Fontisto';
import { Text,Button, View, StyleSheet, TextInput,Image,ScrollView,ImageBackground } from 'react-native';
import { useNavigation } from "@react-navigation/native";
export default function NewMessage() {
    const navigation = useNavigation();
    var arraySuggestSearch = [
        {
            nameFB : 'Đức Trường',
            name : 'hdhtruong1985',
            status : 'online',
            image : 'https://scontent.fsgn3-1.fna.fbcdn.net/v/t39.30808-6/247590695_2739368196356552_4837848715300811541_n.jpg?_nc_cat=107&ccb=1-7&_nc_sid=ad2b24&_nc_ohc=O5rdqerkV1kAX99U6eW&_nc_ht=scontent.fsgn3-1.fna&oh=00_AT_iyTSO0llTavFLmLYHK5pazeQvZpoqgkex2o_kLqDfkw&oe=62BDCB49'
        },
        {
            nameFB : 'Trường Sinh',
            name : 'truonsinh.ben',
            status : 'offline',
            image : 'https://scontent.fsgn3-1.fna.fbcdn.net/v/t39.30808-1/185526923_1334442560290882_6475410094091613892_n.jpg?stp=dst-jpg_p320x320&_nc_cat=104&ccb=1-7&_nc_sid=7206a8&_nc_ohc=cDZxSfWtgPMAX9xiDIv&_nc_ht=scontent.fsgn3-1.fna&oh=00_AT8oX8iMQ8Gb8SdWphHsIknHNrAMjzM_zpVq8LgvZgRG6Q&oe=62BD68A4'
        },
        {
            nameFB : 'Trường Mai',
            name : 'truongmai1982',
            status : 'online',
            image : 'https://scontent.fsgn2-5.fna.fbcdn.net/v/t39.30808-6/274723232_2095406903969072_7504427080082865401_n.jpg?_nc_cat=106&ccb=1-7&_nc_sid=09cbfe&_nc_ohc=5dA0oNbONT8AX-9GLC-&_nc_ht=scontent.fsgn2-5.fna&oh=00_AT8YJCdvyyl6Bd-tmvO-ak3JVkC68PLT7p1LrYLiMbAaSw&oe=62BB2397'
        },
        {
            nameFB : 'Đức Hùng',
            name : 'hdhhung.73',
            status : 'online',
            image : 'https://scontent.fsgn4-1.fna.fbcdn.net/v/t1.6435-9/52696062_101541554333212_6443151805353295872_n.jpg?_nc_cat=103&ccb=1-7&_nc_sid=09cbfe&_nc_ohc=nsE_roCBRuAAX8lqdK2&_nc_ht=scontent.fsgn4-1.fna&oh=00_AT8XQ_z2rvZocGfVa2CI2E9PB4Tu5dAmJhe0gSGVVPFr9w&oe=62DCA98C'
        },
        {
            nameFB : 'Tường Vi',
            name : 'vituong.vi91',
            status : 'offline',
            image : 'https://scontent.fsgn8-2.fna.fbcdn.net/v/t39.30808-6/272152926_1240913986401147_8867493523089750699_n.jpg?_nc_cat=111&ccb=1-7&_nc_sid=174925&_nc_ohc=k4tjE6AyONAAX_oXSSb&_nc_ht=scontent.fsgn8-2.fna&oh=00_AT-mS1KADc7rqebiYp9MmKyhmMvZ5YSDf62ZBPSaIILbng&oe=62BD39EC'
        },
        {
            nameFB : 'Huy Huỳnh',
            name : 'hdh.huyyyy',
            status : 'online',
            image : 'https://scontent.fsgn4-1.fna.fbcdn.net/v/t39.30808-6/274876629_2826541607639210_363529317853290439_n.jpg?_nc_cat=101&ccb=1-7&_nc_sid=09cbfe&_nc_ohc=HdI0cCt0Q3wAX_5XJCE&_nc_ht=scontent.fsgn4-1.fna&oh=00_AT-EuusFTe6O_0EhmxL3lfl3fe-vR-9i-UVqvuXBFrKYiw&oe=62BCB4F5'
        },
        {
            nameFB : 'Đức Hoan',
            name : 'hoanhd.2005',
            status : 'online',
            image : 'https://scontent.fsgn3-1.fna.fbcdn.net/v/t1.6435-9/122192711_697566607532271_2285775074524737085_n.jpg?_nc_cat=104&ccb=1-7&_nc_sid=19026a&_nc_ohc=uS9n3QsAXAcAX9uqsmo&_nc_ht=scontent.fsgn3-1.fna&oh=00_AT804VS0UCyuZTH3AvDE4obV508Dux8mw4OLEZKZGcW0IA&oe=62DB90C0'
        },
        {
            nameFB : 'Cẩm Vân',
            name : 'camvan77',
            status : 'offline',
            image : 'https://scontent.fsgn13-3.fna.fbcdn.net/v/t39.30808-6/273154334_1123664431736763_6121942889354663811_n.jpg?_nc_cat=108&ccb=1-7&_nc_sid=09cbfe&_nc_ohc=5JKUGavtKnEAX87SRXD&tn=98Qe8qL2dr5GlQT0&_nc_ht=scontent.fsgn13-3.fna&oh=00_AT9dhMs9opTKaEEDkuZ5Xcc4gZ-fN_TTOrSyjwizQor48w&oe=62BDC1EA'
        },
        {
            nameFB : 'Đức Trường',
            name : 'hdhtruong1985',
            status : 'online',
            image : 'https://scontent.fsgn3-1.fna.fbcdn.net/v/t39.30808-6/247590695_2739368196356552_4837848715300811541_n.jpg?_nc_cat=107&ccb=1-7&_nc_sid=ad2b24&_nc_ohc=O5rdqerkV1kAX99U6eW&_nc_ht=scontent.fsgn3-1.fna&oh=00_AT_iyTSO0llTavFLmLYHK5pazeQvZpoqgkex2o_kLqDfkw&oe=62BDCB49'
        },
        {
            nameFB : 'Trường Sinh',
            name : 'truonsinh.ben',
            status : 'offline',
            image : 'https://scontent.fsgn3-1.fna.fbcdn.net/v/t39.30808-1/185526923_1334442560290882_6475410094091613892_n.jpg?stp=dst-jpg_p320x320&_nc_cat=104&ccb=1-7&_nc_sid=7206a8&_nc_ohc=cDZxSfWtgPMAX9xiDIv&_nc_ht=scontent.fsgn3-1.fna&oh=00_AT8oX8iMQ8Gb8SdWphHsIknHNrAMjzM_zpVq8LgvZgRG6Q&oe=62BD68A4'
        },
        {
            nameFB : 'Trường Mai',
            name : 'truongmai1982',
            status : 'online',
            image : 'https://scontent.fsgn2-5.fna.fbcdn.net/v/t39.30808-6/274723232_2095406903969072_7504427080082865401_n.jpg?_nc_cat=106&ccb=1-7&_nc_sid=09cbfe&_nc_ohc=5dA0oNbONT8AX-9GLC-&_nc_ht=scontent.fsgn2-5.fna&oh=00_AT8YJCdvyyl6Bd-tmvO-ak3JVkC68PLT7p1LrYLiMbAaSw&oe=62BB2397'
        },
        {
            nameFB : 'Đức Hùng',
            name : 'hdhhung.73',
            status : 'online',
            image : 'https://scontent.fsgn4-1.fna.fbcdn.net/v/t1.6435-9/52696062_101541554333212_6443151805353295872_n.jpg?_nc_cat=103&ccb=1-7&_nc_sid=09cbfe&_nc_ohc=nsE_roCBRuAAX8lqdK2&_nc_ht=scontent.fsgn4-1.fna&oh=00_AT8XQ_z2rvZocGfVa2CI2E9PB4Tu5dAmJhe0gSGVVPFr9w&oe=62DCA98C'
        },
        {
            nameFB : 'Tường Vi',
            name : 'vituong.vi91',
            status : 'offline',
            image : 'https://scontent.fsgn8-2.fna.fbcdn.net/v/t39.30808-6/272152926_1240913986401147_8867493523089750699_n.jpg?_nc_cat=111&ccb=1-7&_nc_sid=174925&_nc_ohc=k4tjE6AyONAAX_oXSSb&_nc_ht=scontent.fsgn8-2.fna&oh=00_AT-mS1KADc7rqebiYp9MmKyhmMvZ5YSDf62ZBPSaIILbng&oe=62BD39EC'
        },
        {
            nameFB : 'Huy Huỳnh',
            name : 'hdh.huyyyy',
            status : 'online',
            image : 'https://scontent.fsgn4-1.fna.fbcdn.net/v/t39.30808-6/274876629_2826541607639210_363529317853290439_n.jpg?_nc_cat=101&ccb=1-7&_nc_sid=09cbfe&_nc_ohc=HdI0cCt0Q3wAX_5XJCE&_nc_ht=scontent.fsgn4-1.fna&oh=00_AT-EuusFTe6O_0EhmxL3lfl3fe-vR-9i-UVqvuXBFrKYiw&oe=62BCB4F5'
        },
        {
            nameFB : 'Đức Hoan',
            name : 'hoanhd.2005',
            status : 'online',
            image : 'https://scontent.fsgn3-1.fna.fbcdn.net/v/t1.6435-9/122192711_697566607532271_2285775074524737085_n.jpg?_nc_cat=104&ccb=1-7&_nc_sid=19026a&_nc_ohc=uS9n3QsAXAcAX9uqsmo&_nc_ht=scontent.fsgn3-1.fna&oh=00_AT804VS0UCyuZTH3AvDE4obV508Dux8mw4OLEZKZGcW0IA&oe=62DB90C0'
        },
        {
            nameFB : 'Cẩm Vân',
            name : 'camvan77',
            status : 'offline',
            image : 'https://scontent.fsgn13-3.fna.fbcdn.net/v/t39.30808-6/273154334_1123664431736763_6121942889354663811_n.jpg?_nc_cat=108&ccb=1-7&_nc_sid=09cbfe&_nc_ohc=5JKUGavtKnEAX87SRXD&tn=98Qe8qL2dr5GlQT0&_nc_ht=scontent.fsgn13-3.fna&oh=00_AT9dhMs9opTKaEEDkuZ5Xcc4gZ-fN_TTOrSyjwizQor48w&oe=62BDC1EA'
        }
    ]
    return(
        <View style = {styles.MessageScreen}>
            {/* Header Message */}
            <View style = {styles.HeaderNewMessage}>
                <View style = {styles.HeaderMessage}>
                    <AntDesign name = "arrowleft" size={25} color = "rgb(248, 248, 242)" style ={styles.IconBack} onPress = {() =>{navigation.goBack()}}/>
                    <Text style = {styles.textMessage}>New message</Text>
                    <Text style = {styles.textChat}>Chat</Text>
                </View>
                <Text style = {styles.textTitle}>To</Text>
                <TextInput style = {styles.textInput} placeholder = "Search" placeholderTextColor="#8e8e8e"/>
            </View>
            {/* List User add to send Message */}
            <ScrollView showsVerticalScrollIndicator={false} style = {{backgroundColor : 'black',height : '100%'}}>
                <Text style = {styles.Title}>Suggested</Text>
                {/* List User */}
                {arraySuggestSearch.map(item =>(
                    <View style = {styles.MessageBody}>
                        <ImageBackground style={styles.tinyLogoFriend} source = {{uri: item.image}} imageStyle={{ borderRadius: 50/2 }}>
                            <View style = {{width: 18, height: 18, borderRadius: 18/2, backgroundColor: 'black',marginLeft : '70%', marginTop : '70%'}}>
                                {
                                    item.status === 'online' ?
                                    <View style = {styles.AcctiveNow}/> : 
                                    <View style = {styles.InAcctive}/>
                                }
                            </View>
                        </ImageBackground>
                        <View style = {styles.UserMessageInfor}>
                            <Text style = {styles.NameUser}>{item.nameFB}</Text>
                            <Text style = {styles.MessageText}>{item.name}</Text>
                        </View>
                        <MaterialCommunityIcons name = "checkbox-blank-circle-outline" size={25} color = "#8e8e8e" style ={styles.IconRight}/>
                    </View>
                ))}
            </ScrollView>
        </View>
    )
};
const styles = StyleSheet.create({
    MessageScreen: {
        flex: 1,
        backgroundColor: 'black',
    },
    HeaderNewMessage: {
        height: 120,
    },
    HeaderMessage: {
        flexDirection: 'row',
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
    textChat : {
        color: '#8e8e8e',
        fontSize: 20,
        fontWeight: 'bold',
        marginTop : '3%',
        marginLeft: '35%',
    },
    textTitle: {
        color : 'white',
        fontSize: 20,
        marginLeft: '2%',
        marginTop : '2%',
        fontWeight: 'bold',
    },
    textInput: {
        fontSize: 20,
        marginLeft: '3%',
        color: 'white',
    }
    ,
    Title : {
        color : 'white',
        fontSize : 18,
        marginTop : '2%',
        marginLeft : '5%',
    },
    MessageBody: {
        flexDirection : 'row',
        marginLeft: '5%',
    },
    UserMessageInfor : {
        width : '45%',
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
    tinyLogoFriend: {
        marginLeft: 15,
        width: 50,
        height: 50,
        borderRadius: 50/2,
        marginTop: '5%',
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
    IconRight : {
        marginLeft : '18%',
        marginTop : '7%',
    }
});