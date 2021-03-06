import * as React from 'react';
import AntDesign from 'react-native-vector-icons/AntDesign';
import Feather from 'react-native-vector-icons/Feather';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5';
import Fontisto from 'react-native-vector-icons/Fontisto';
import { Text,Button, View, StyleSheet, TextInput,Image,ScrollView } from 'react-native';
import { useNavigation } from "@react-navigation/native";
export default function Comment() {
    const navigation = useNavigation();
    var arrayFriendComment = [
        {
            name : 'HuyHuy',
            image : 'https://scontent.fsgn4-1.fna.fbcdn.net/v/t39.30808-6/274876629_2826541607639210_363529317853290439_n.jpg?_nc_cat=101&ccb=1-7&_nc_sid=09cbfe&_nc_ohc=HdI0cCt0Q3wAX_5XJCE&_nc_ht=scontent.fsgn4-1.fna&oh=00_AT-EuusFTe6O_0EhmxL3lfl3fe-vR-9i-UVqvuXBFrKYiw&oe=62BCB4F5',
            content : 'Hay quá bạn ơi.',
            reply : 10,
            time : '5 phút trước',
        },
        {
            name : 'DucHoan',
            image : 'https://scontent.fsgn3-1.fna.fbcdn.net/v/t1.6435-9/122192711_697566607532271_2285775074524737085_n.jpg?_nc_cat=104&ccb=1-7&_nc_sid=19026a&_nc_ohc=uS9n3QsAXAcAX9uqsmo&_nc_ht=scontent.fsgn3-1.fna&oh=00_AT804VS0UCyuZTH3AvDE4obV508Dux8mw4OLEZKZGcW0IA&oe=62DB90C0',
            content : 'Phải dị hong hihi.',
            reply : 3,
            time : '2 giờ trước',
        },
        {
            name : 'CamVan',
            image : 'https://scontent.fsgn13-3.fna.fbcdn.net/v/t39.30808-6/273154334_1123664431736763_6121942889354663811_n.jpg?_nc_cat=108&ccb=1-7&_nc_sid=09cbfe&_nc_ohc=5JKUGavtKnEAX87SRXD&tn=98Qe8qL2dr5GlQT0&_nc_ht=scontent.fsgn13-3.fna&oh=00_AT9dhMs9opTKaEEDkuZ5Xcc4gZ-fN_TTOrSyjwizQor48w&oe=62BDC1EA',
            content : 'Cứ văn với thơ thôi kkk.',
            reply : 1,
            time : '10 giờ trước',
        },
        {
            name : 'Tường Vi',
            image : 'https://scontent.fsgn8-2.fna.fbcdn.net/v/t39.30808-6/272152926_1240913986401147_8867493523089750699_n.jpg?_nc_cat=111&ccb=1-7&_nc_sid=174925&_nc_ohc=k4tjE6AyONAAX_oXSSb&_nc_ht=scontent.fsgn8-2.fna&oh=00_AT-mS1KADc7rqebiYp9MmKyhmMvZ5YSDf62ZBPSaIILbng&oe=62BD39EC',
            content : 'Quào quá đỉnh em ơi.',
            reply : 7,
            time : '1 giờ trước',
        },
        {
            name : 'DucHung',
            image : 'https://scontent.fsgn4-1.fna.fbcdn.net/v/t1.6435-9/52696062_101541554333212_6443151805353295872_n.jpg?_nc_cat=103&ccb=1-7&_nc_sid=09cbfe&_nc_ohc=nsE_roCBRuAAX8lqdK2&_nc_ht=scontent.fsgn4-1.fna&oh=00_AT8XQ_z2rvZocGfVa2CI2E9PB4Tu5dAmJhe0gSGVVPFr9w&oe=62DCA98C',
            content : 'Hạnh phúc là không phải một người đàn ông bỏ cả thế giới để yêu em.',
            reply : 10,
            time : '1 giờ trước',
        },
        {
            name : 'HuyHuy',
            image : 'https://scontent.fsgn4-1.fna.fbcdn.net/v/t39.30808-6/274876629_2826541607639210_363529317853290439_n.jpg?_nc_cat=101&ccb=1-7&_nc_sid=09cbfe&_nc_ohc=HdI0cCt0Q3wAX_5XJCE&_nc_ht=scontent.fsgn4-1.fna&oh=00_AT-EuusFTe6O_0EhmxL3lfl3fe-vR-9i-UVqvuXBFrKYiw&oe=62BCB4F5',
            content : 'Hay quá bạn ơi.',
            reply : 10,
            time : '5 phút trước',
        },
        {
            name : 'DucHoan',
            image : 'https://scontent.fsgn3-1.fna.fbcdn.net/v/t1.6435-9/122192711_697566607532271_2285775074524737085_n.jpg?_nc_cat=104&ccb=1-7&_nc_sid=19026a&_nc_ohc=uS9n3QsAXAcAX9uqsmo&_nc_ht=scontent.fsgn3-1.fna&oh=00_AT804VS0UCyuZTH3AvDE4obV508Dux8mw4OLEZKZGcW0IA&oe=62DB90C0',
            content : 'Phải dị hong hihi.',
            reply : 3,
            time : '2 giờ trước',
        },
        {
            name : 'CamVan',
            image : 'https://scontent.fsgn13-3.fna.fbcdn.net/v/t39.30808-6/273154334_1123664431736763_6121942889354663811_n.jpg?_nc_cat=108&ccb=1-7&_nc_sid=09cbfe&_nc_ohc=5JKUGavtKnEAX87SRXD&tn=98Qe8qL2dr5GlQT0&_nc_ht=scontent.fsgn13-3.fna&oh=00_AT9dhMs9opTKaEEDkuZ5Xcc4gZ-fN_TTOrSyjwizQor48w&oe=62BDC1EA',
            content : 'Cứ văn với thơ thôi kkk.',
            reply : 1,
            time : '10 giờ trước',
        }
    ]
    return (
        <View style = {styles.CommentScreen}>
            <View style = {styles.HeaderComment}>
                <AntDesign name = "arrowleft" size={25} color = "rgb(248, 248, 242)" style ={styles.IconBack} onPress = {(e) =>{navigation.goBack()}}></AntDesign>
                <Text style = {styles.textComment}>Comment</Text>
                <Feather name = "send" size={25} color = "rgb(248, 248, 242)" style ={styles.IconChat}></Feather>
            </View>
            {/* User Infor Post */}
            <ScrollView showsVerticalScrollIndicator={false}>
                <View style = {styles.BodyUserComment}>
                    <View style = {styles.UserInforComment}>
                        <Image source={{uri : 'https://scontent.fsgn4-1.fna.fbcdn.net/v/t39.30808-6/274876629_2826541607639210_363529317853290439_n.jpg?_nc_cat=101&ccb=1-7&_nc_sid=09cbfe&_nc_ohc=HdI0cCt0Q3wAX_5XJCE&_nc_ht=scontent.fsgn4-1.fna&oh=00_AT-EuusFTe6O_0EhmxL3lfl3fe-vR-9i-UVqvuXBFrKYiw&oe=62BCB4F5'}} style = {styles.AvatarComment}/>
                        <Text style = {styles.NameUserComment}>HuyHuy
                            <Text> </Text>
                            <Text style = {styles.TextContentComent}>
                                Hạnh phúc là không phải một người đàn ông bỏ cả thế giới để yêu em, mà là anh ta vì yêu em mà sắp xếp lại thế giới của mình.
                            </Text>
                        </Text>
                    </View>
                    <Text style = {styles.TimeComment}>2 ngày trước</Text>
                </View>
                {/* Friend Comment */}
                {arrayFriendComment.map((item) => (
                    <View style = {styles.FriendComment}>
                        <View style = {styles.FriendInforComment}>
                            <View style = {styles.FriendWidth}>
                                <Image source={{uri : item.image}} style = {styles.AvatarFriendComment}/>
                                <Text style = {styles.NameFriendComment}>{item.name}
                                    <Text> </Text>
                                    <Text style = {styles.TextFriendContentComent}>
                                        {item.content}
                                    </Text>
                                </Text>
                            </View>
                            <AntDesign name="hearto" size={15} color="rgb(248, 248, 242)" style = {styles.IconLike}/>
                        </View>
                        <View style = {styles.FriendReplyComment}>
                            <Text style = {styles.TimeFriendComment}>{item.time}</Text>
                            <Text style = {styles.ReplyComment}>Reply</Text>
                        </View>
                        <View style = {styles.ViewMoreReplyComment}>
                            <View style = {styles.LineComment}/>
                            <Text style = {styles.ViewMoreComment}>Xem thêm {item.reply} bình luận</Text>
                        </View>
                    </View>
                ))}
            </ScrollView>
            {/* Input Comment */}
            <View style = {styles.FooterComment}>
                <View style = {styles.FooterIconComment}>
                    <AntDesign name="heart" size={25} color="red"/>
                    <MaterialCommunityIcons name="hand-peace" size={25} color="yellow" style = {{marginLeft : 15}}/>
                    <Fontisto name="fire" size={25} color="red" style = {{marginLeft : 15}}/>
                    <FontAwesome5 name="handshake" size={25} color="yellow" style = {{marginLeft : 15}}/>
                    <FontAwesome5 name="sad-tear" size={25} color="red" style = {{marginLeft : 15}}/>
                    <MaterialCommunityIcons name="emoticon-happy" size={25} color="yellow" style = {{marginLeft : 15}}/>
                    <FontAwesome5 name="sad-cry" size={25} color="yellow" style = {{marginLeft : 15}}/>
                    <MaterialCommunityIcons name="emoticon-cry-outline" size={25} color="yellow" style = {{marginLeft : 15}}/>
                    <AntDesign name="meho" size={25} color="red" style = {{marginLeft : 15}}/>
                    <AntDesign name="clockcircle" size={25} color="yellow" style = {{marginLeft : 10}}/>
                </View>
                <View style = {styles.FooterTextComment}>
                    <View style = {styles.FooterWidth}>
                        <Image source={{uri : 'https://scontent.fsgn4-1.fna.fbcdn.net/v/t39.30808-6/274876629_2826541607639210_363529317853290439_n.jpg?_nc_cat=101&ccb=1-5&_nc_sid=09cbfe&_nc_ohc=zhn6GxH97wsAX9igMrU&_nc_ht=scontent.fsgn4-1.fna&oh=00_AT8CV-QY77nPfLu8se8Ba5bfAa8KH96jrUmxQJa0CXTW2A&oe=625BCEB5'}} style = {styles.AvatarTextComment}/>
                        <TextInput style = {styles.TextInputComment} placeholder = "Add a comment..." placeholderTextColor="white"/>
                    </View>
                    <Text style = {styles.TextSendComment}>Post</Text>
                </View>
            </View>
        </View>
    );
};
const styles = StyleSheet.create({
    CommentScreen: {
        flex: 1,
        backgroundColor: 'black',
    },
    HeaderComment: {
        flexDirection: 'row',
        height: 50,
    },
    textComment: {
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
    IconChat: {
        marginLeft:'50%',
        marginTop: 10,
    },
    BodyUserComment: {
        borderBottomColor: "#414360",
        borderBottomWidth: 1,
        marginLeft: '2%',
    },
    UserInforComment: {
        flexDirection: 'row',
        marginTop: 10,
        marginLeft: '2%',
        width: '83%',
    },
    AvatarComment: {
        height: 40,
        width: 40,
        borderRadius: 40/2,
    },
    NameUserComment: {
        color: 'rgb(248, 248, 242)',
        marginLeft: 10,
        marginTop: 3,
        fontSize: 15,
        fontWeight: 'bold',
    },
    TextContentComent: {
        color: 'rgb(248, 248, 242)',
        fontWeight : 'normal',
        textAlign: 'justify',
    },
    TimeComment: {
        color: '#8e8e8e',
        fontSize: 14,
        marginLeft: '15%',
        marginTop: '2%',
        marginBottom: '2%',
    },
    FriendComment: {
        marginTop: '2%',
        marginLeft: '2%',
    },
    FriendWidth : {
        width: '85%',
        flexDirection: 'row',
    },
    FriendInforComment: {
        flexDirection: 'row',
        marginTop: 10,
        marginLeft: '2%',
        width: '85%',
    },
    AvatarFriendComment: {
        height: 40,
        width: 40,
        borderRadius: 40/2,
    },
    NameFriendComment: {
        color: 'rgb(248, 248, 242)',
        marginLeft: 10,
        marginTop: 3,
        fontSize: 15,
        fontWeight: 'bold',
    },
    TextFriendContentComent: {
        color: 'rgb(248, 248, 242)',
        fontWeight : 'normal',
        textAlign: 'justify',
    },
    IconLike: {
        width: '20%',
        marginLeft: '20%',
        marginTop: '5%',
    },
    FriendReplyComment : {
        flexDirection: 'row',
        marginBottom: '2%',
    },
    TimeFriendComment: {
        color: '#8e8e8e',
        fontSize: 14,
        marginLeft: '15%',
        marginTop: '2%',
    },
    ReplyComment: {
        color: '#8e8e8e',
        fontSize: 14,
        marginLeft: '8%',
        marginTop: '2%',
        marginBottom: '2%',
    },
    ViewMoreReplyComment: {
        marginBottom: '2%',
        flexDirection: 'row',
    },
    LineComment: {
        width: 24,
        height: 11,
        borderBottomColor: "#414360",
        borderBottomWidth: 1,
        marginLeft: '15%',
    },
    ViewMoreComment: {
        color: '#8e8e8e',
        fontSize: 14,
        marginLeft: '2%',
    },
    FooterComment: {
        backgroundColor: 'rgb(51, 51, 48)',
        height: 80,
    },
    FooterIconComment: {
        flexDirection: 'row',
        marginTop: '2%',
        marginLeft: '2%',
    },
    TextInputComment: {
        color: 'white',
        marginLeft: '2%',
    },
    FooterTextComment: {
        flexDirection: 'row',
        height : 'auto',
    },
    FooterWidth: {
        flexDirection: 'row',
        marginTop: '2%',
        marginLeft: '1%',
        textAlign: 'justify',
        width: '70%',
        height : 'auto',
    },
    AvatarTextComment: {
        height: 35,
        width: 35,
        borderRadius: 35/2,
    },
    TextSendComment: {
        color: '#5b82a8',
        marginLeft: '18%',
        marginTop: '5.5%',
    },
});