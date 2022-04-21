import * as React from 'react';
import AntDesign from 'react-native-vector-icons/AntDesign';
import Ionicons from 'react-native-vector-icons/Ionicons';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import Octicons from 'react-native-vector-icons/Octicons';
import Feather from 'react-native-vector-icons/Feather';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import Fontisto from 'react-native-vector-icons/Fontisto';
import { Text,Button, View, StyleSheet, TextInput,Image,ScrollView,ImageBackground,Pressable } from 'react-native';
import { useNavigation } from "@react-navigation/native";
export default function Follower() {
    const navigation = useNavigation();
    let name = 'hdh.huyyyy';
    var friend = {
        name: 'hdh.huyyyy',
        name1 : 'hyuezhu'
    }
    var story =  [
        {
            name : 'tuổi trẻ',
            image : 'https://scontent.fsgn8-1.fna.fbcdn.net/v/t39.30808-6/218314327_2670798459880193_1753066056267794964_n.jpg?_nc_cat=110&ccb=1-5&_nc_sid=174925&_nc_ohc=whpw84OV5OMAX8hTvCg&_nc_ht=scontent.fsgn8-1.fna&oh=00_AT_v4ihHZH6FD_9-9l8RQuQSIrGOuTe9wBHCunAWfYN9xw&oe=626624CF'
        },
        {
            name : 'thanh xuân',
            image : 'https://scontent.fsgn13-1.fna.fbcdn.net/v/t1.6435-9/48413416_2005537883072924_6727718849279426560_n.jpg?_nc_cat=107&ccb=1-5&_nc_sid=174925&_nc_ohc=5YRnW2zPk3gAX_tCpbz&_nc_ht=scontent.fsgn13-1.fna&oh=00_AT_eol3jETZKyYE7ilblzaU5RmWb66PxfhdyLx_jnAf8wA&oe=62867E05'
        },
        {
            name : 'đà nẵng',
            image : 'https://scontent.fsgn4-1.fna.fbcdn.net/v/t1.6435-9/67321730_2123799624580082_5696296506278019072_n.jpg?_nc_cat=101&ccb=1-5&_nc_sid=8bfeb9&_nc_ohc=sfpIsH4_ay4AX_e-dro&_nc_ht=scontent.fsgn4-1.fna&oh=00_AT-pqEwAD3OaP2qS9Kweka_SwWTeajHVlGwttdARQuawqw&oe=62825FF3'
        },
        {
            name : 'họp lớp',
            image : 'https://scontent.fsgn8-2.fna.fbcdn.net/v/t1.6435-9/83756523_1369587623248173_1039473847608279040_n.jpg?_nc_cat=100&ccb=1-5&_nc_sid=19026a&_nc_ohc=UIctjvc4EccAX-YBGF4&tn=98Qe8qL2dr5GlQT0&_nc_ht=scontent.fsgn8-2.fna&oh=00_AT8tikMxZbwiR7kMxVcCAW-kbG9aq42VlXaPTzSv4yLz2w&oe=62845B73'
        },
        {
            name : '<3',
            image : 'https://scontent.fsgn13-1.fna.fbcdn.net/v/t39.30808-6/247590695_2739368196356552_4837848715300811541_n.jpg?_nc_cat=107&ccb=1-5&_nc_sid=ad2b24&_nc_ohc=KUVojC0nilEAX8atSM9&_nc_ht=scontent.fsgn13-1.fna&oh=00_AT8FWyCD63i4BrUPSG1qGydFxRZJz5SOIzb0VQQ3jGEl-Q&oe=6262D3C9'
        },
        {
            name : 'xe đẹp hihi',
            image : 'https://scontent.fsgn4-1.fna.fbcdn.net/v/t1.6435-9/91287930_2327614187531957_8274294280026062848_n.jpg?_nc_cat=101&ccb=1-5&_nc_sid=8bfeb9&_nc_ohc=N4C3rzSOpiQAX-RIjxk&_nc_ht=scontent.fsgn4-1.fna&oh=00_AT9e8W_1PeTTW1TgsdvXLrunnR2gNEizHfj95yIkg3RYHQ&oe=628265A4'
        },

    ]
    var arrayImage = [
        {
            image1 : 'https://scontent.fsgn4-1.fna.fbcdn.net/v/t39.30808-6/274876629_2826541607639210_363529317853290439_n.jpg?_nc_cat=101&ccb=1-5&_nc_sid=09cbfe&_nc_ohc=zhn6GxH97wsAX9igMrU&_nc_ht=scontent.fsgn4-1.fna&oh=00_AT8CV-QY77nPfLu8se8Ba5bfAa8KH96jrUmxQJa0CXTW2A&oe=625BCEB5',
            image2 : 'https://scontent.fsgn13-1.fna.fbcdn.net/v/t1.6435-9/48413416_2005537883072924_6727718849279426560_n.jpg?_nc_cat=107&ccb=1-5&_nc_sid=174925&_nc_ohc=5YRnW2zPk3gAX_tCpbz&_nc_ht=scontent.fsgn13-1.fna&oh=00_AT_eol3jETZKyYE7ilblzaU5RmWb66PxfhdyLx_jnAf8wA&oe=62867E05',
            image3 : 'https://scontent.fsgn8-1.fna.fbcdn.net/v/t39.30808-6/218314327_2670798459880193_1753066056267794964_n.jpg?_nc_cat=110&ccb=1-5&_nc_sid=174925&_nc_ohc=whpw84OV5OMAX8hTvCg&_nc_ht=scontent.fsgn8-1.fna&oh=00_AT_v4ihHZH6FD_9-9l8RQuQSIrGOuTe9wBHCunAWfYN9xw&oe=626624CF'
        },
        {
            image1 : 'https://scontent.fsgn3-1.fna.fbcdn.net/v/t1.18169-9/30264977_585959628436368_7848909215084726270_n.jpg?_nc_cat=104&ccb=1-5&_nc_sid=8bfeb9&_nc_ohc=J8c9eFqeC5sAX8P9t4Q&_nc_ht=scontent.fsgn3-1.fna&oh=00_AT_aV4aDxzgwfQd92SGOhG1367VVPQ6SHCNBJZMM1eIQfw&oe=62880FF4',
            image2 : 'https://scontent.fsgn8-1.fna.fbcdn.net/v/t1.18169-9/11063811_1431919687101416_4216505908966877621_n.jpg?_nc_cat=102&ccb=1-5&_nc_sid=174925&_nc_ohc=3H49bisXLw0AX_PFkAh&_nc_ht=scontent.fsgn8-1.fna&oh=00_AT_h46erjJ1ZyFehw_NQfuEyqLPw7dSP4bWATaH4D_b1gg&oe=6287B16D',
            image3 : 'https://scontent.fsgn13-1.fna.fbcdn.net/v/t39.30808-6/247590695_2739368196356552_4837848715300811541_n.jpg?_nc_cat=107&ccb=1-5&_nc_sid=ad2b24&_nc_ohc=KUVojC0nilEAX-YgsO3&_nc_ht=scontent.fsgn13-1.fna&oh=00_AT88WHoBMpUpf7_0dFqRDeGfeScVtlg-neGXbqfU4Sco-w&oe=6266C849'

        },
        {
            image1 : 'https://scontent.fsgn8-1.fna.fbcdn.net/v/t1.6435-9/109455554_2413659618927413_1815493526624920621_n.jpg?_nc_cat=102&ccb=1-5&_nc_sid=8bfeb9&_nc_ohc=1gv2Q45ZetgAX8cwQrG&tn=98Qe8qL2dr5GlQT0&_nc_ht=scontent.fsgn8-1.fna&oh=00_AT-cLPJTeU0MGwNderR9im0ZKbeSg4xVm0IumK9rQ5TYlQ&oe=62875AFE',
            image2 : 'https://scontent.fsgn13-2.fna.fbcdn.net/v/t1.6435-9/149743843_1687058798167719_8691916275723497927_n.jpg?_nc_cat=106&ccb=1-5&_nc_sid=19026a&_nc_ohc=rsfPPZPuGnIAX9DwCbV&_nc_ht=scontent.fsgn13-2.fna&oh=00_AT_Ua7WyGnqDM3Z_oD0nx9IN_zDXa2xYmUxgdrlogzVxlA&oe=628835E2',
            image3 : 'https://scontent.fsgn13-2.fna.fbcdn.net/v/t1.6435-9/203169376_2655017111458328_3182768188753841648_n.jpg?_nc_cat=109&ccb=1-5&_nc_sid=e3f864&_nc_ohc=7UW2vwziuJ8AX9DahTm&_nc_ht=scontent.fsgn13-2.fna&oh=00_AT9LOeKB4nHxwyHmS5NGO-3p3noYky23jK3f7JG3AGtXRA&oe=6284937D'
        },
    ];
    var summary = [
        {
            text : 'Full stack Developer',
        },
        {
            text : 'Web Developer',
        },
        {
            text : 'Mobile Developer',
        }
    ];
    return (
        <View style = {styles.ProfileScreen}>
            {/* Header Profile */}
            <View style = {styles.HeaderProfile}>
                <AntDesign name = "arrowleft" size={30} color = "rgb(248, 248, 242)" style ={styles.IconLock} onPress = {() =>{navigation.goBack()}}/>
                <Text style = {styles.textProfile}>{name}</Text>
                <Ionicons name = "ellipsis-vertical" size={20} color = "white" style ={styles.IconMenu} />
            </View>
            {/* Profile */}
            <ScrollView showsVerticalScrollIndicator={false}>
                <View style = {styles.Profile}>
                    <View style = {{flexDirection : 'row'}}>
                        <Image source={{uri : 'https://scontent.fsgn8-1.fna.fbcdn.net/v/t39.30808-6/218314327_2670798459880193_1753066056267794964_n.jpg?_nc_cat=110&ccb=1-5&_nc_sid=174925&_nc_ohc=whpw84OV5OMAX8hTvCg&_nc_ht=scontent.fsgn8-1.fna&oh=00_AT_v4ihHZH6FD_9-9l8RQuQSIrGOuTe9wBHCunAWfYN9xw&oe=626624CF'}} style = {styles.ProfileImage}/>
                        <View style = {styles.Posted}>
                            <Text style = {styles.NumberPost}>0</Text>
                            <Text style = {styles.TextPost}>Posts</Text>
                        </View>
                        <View style = {styles.Follower}>
                            <Text style = {styles.NumberFollower}>109</Text>
                            <Text style = {styles.TextFollower}>Followers</Text>
                        </View>
                        <View style = {styles.Following}>
                            <Text style = {styles.NumberFollowing}>355</Text>
                            <Text style = {styles.TextFollowing}>Following</Text>
                        </View>
                    </View>
                    <Text style = {styles.TextName}>Huy Huỳnh</Text>
                    {summary.map(item => (
                        <Text style = {styles.TextSummary}>{item.text}</Text>
                    ))}
                    <View style = {{flexDirection : 'row'}}>
                        <Image source={{uri : 'https://scontent.fsgn8-1.fna.fbcdn.net/v/t39.30808-6/218314327_2670798459880193_1753066056267794964_n.jpg?_nc_cat=110&ccb=1-5&_nc_sid=174925&_nc_ohc=whpw84OV5OMAX8hTvCg&_nc_ht=scontent.fsgn8-1.fna&oh=00_AT_v4ihHZH6FD_9-9l8RQuQSIrGOuTe9wBHCunAWfYN9xw&oe=626624CF'}} style = {styles.Image}/>
                        <Image source={{uri : 'https://scontent.fsgn4-1.fna.fbcdn.net/v/t39.30808-6/274876629_2826541607639210_363529317853290439_n.jpg?_nc_cat=101&ccb=1-5&_nc_sid=09cbfe&_nc_ohc=zhn6GxH97wsAX9igMrU&_nc_ht=scontent.fsgn4-1.fna&oh=00_AT8CV-QY77nPfLu8se8Ba5bfAa8KH96jrUmxQJa0CXTW2A&oe=625BCEB5'}} style = {styles.ImageFriend}/>
                        <Image source={{uri : 'https://scontent.fsgn13-1.fna.fbcdn.net/v/t1.6435-9/48413416_2005537883072924_6727718849279426560_n.jpg?_nc_cat=107&ccb=1-5&_nc_sid=174925&_nc_ohc=5YRnW2zPk3gAX_tCpbz&_nc_ht=scontent.fsgn13-1.fna&oh=00_AT_eol3jETZKyYE7ilblzaU5RmWb66PxfhdyLx_jnAf8wA&oe=62867E05'}} style = {styles.ImageFriend}/>
                        <Text style = {styles.TextNonFriend}>Followed by </Text>
                        <Text style = {styles.TextFriend}>{friend.name}</Text>
                        <Text style = {{color : 'white', fontSize : 14, marginTop : '4%'}}> and</Text>
                        <Text style = {styles.TextFriend}>{friend.name1}</Text>
                    </View>
                </View>
                {/* Edit Profile */}
                <View style = {{flexDirection : 'row'}}>
                        <View style = {{width : 150, height : 28, backgroundColor : '#1d94d8',borderRadius : 5,marginTop : '5%',marginLeft : '5%'}}>
                                <Text style = {styles.FollowRequest}>Follow</Text>
                        </View>
                        <View style = {{width : 150, height : 28, backgroundColor : 'white',borderRadius : 5,marginTop : '5%', marginLeft : '2%'}}>
                            <View style = {{width : 148, height : 25, backgroundColor : 'black',borderRadius : 5,marginTop : '1%',marginLeft : '1%'}}>
                                <Text style = {styles.MessageRequest} onPress = {() => {navigation.navigate('ChatMessage')}}>Message</Text>
                            </View>
                        </View>
                    <View style = {styles.Add}>
                        <View style = {styles.BoderAdd}>
                            <Ionicons name = "md-person-add-sharp" size={20} color = "rgb(248, 248, 242)" style ={styles.IconAddUser}/>
                        </View>
                    </View>
                </View>
                {/* Story */}
                <View style = {styles.Story}>
                    <View style = {styles.TitleStory}>
                        <Text style = {styles.TextTitleStory}>Story highlight</Text>
                        <AntDesign name = "up" size={10} color = "white" style ={styles.IconUpStory}/>
                    </View>
                    <Text style = {styles.TextStory}>Keep your favorite stories on your profile.</Text>
                    <ScrollView horizontal showsHorizontalScrollIndicator={false}>
                            <View style = {styles.ListNewStory}>
                                <View style = {styles.ListStoryBorder}>
                                    <View style = {styles.ListStoryBorder1}>
                                        <Image source={{uri : 'https://scontent.fsgn4-1.fna.fbcdn.net/v/t39.30808-6/274876629_2826541607639210_363529317853290439_n.jpg?_nc_cat=101&ccb=1-5&_nc_sid=09cbfe&_nc_ohc=zhn6GxH97wsAX9igMrU&_nc_ht=scontent.fsgn4-1.fna&oh=00_AT8CV-QY77nPfLu8se8Ba5bfAa8KH96jrUmxQJa0CXTW2A&oe=625BCEB5'}} style = {styles.StoryImage}/>
                                    </View>
                                </View>
                                <Text style = {styles.TextStoryUser}>Vũng tàu</Text>
                            </View>
                            {story.map(item => (
                                <View style = {styles.ListStory}>
                                    <View style = {styles.ListStoryBorder}>
                                        <View style = {styles.ListStoryBorder1}>
                                            <Image source={{uri : item.image}} style = {styles.StoryImage}/>
                                        </View>
                                    </View>
                                    <Text style = {styles.TextStoryUser}>{item.name}</Text>
                                </View>
                            ))}
                            
                    </ScrollView>
                </View>
                {/* Post */}
                <View style = {styles.Post}>
                    <View style = {styles.TitlePost}>
                        <FontAwesome name='table' size={30} color = "rgb(248, 248, 242)" style ={styles.IconTable}/>
                        <Ionicons name='videocam-outline' size={35} color = "rgb(248, 248, 242)" style ={styles.Iconvideo}/>
                        <MaterialCommunityIcons name='card-account-details-star-outline' size={30} color = "rgb(248, 248, 242)" style ={styles.IconAccount}/>
                    </View>
                </View>
                {/* List Photo */}
                {arrayImage.map(item => (
                    <View style={styles.ListPhoto}>
                        <Image source = {{uri : item.image1}} style = {styles.ImageShow}/>
                        <Image source = {{uri : item.image2}} style = {styles.ImageShow}/>
                        <Image source = {{uri : item.image3}} style = {styles.ImageShow}/> 
                    </View>
                ))}
            </ScrollView>
        </View>
    )
};
const styles = StyleSheet.create({
    ProfileScreen: {
        flex: 1,
        backgroundColor: 'black',
    },
    HeaderProfile: {
        flexDirection: 'row',
        height: 60,
    },
    textProfile: {
        fontSize: 22,
        marginLeft: '3%',
        marginTop: '3%',
        color: 'rgb(248, 248, 242)',
        fontWeight: 'bold',
    },
    Request: {
        color : 'white',
        fontSize : 18,
        textAlign : 'center',
    },
    IconLock: {
        marginLeft: '2%',
        marginTop: '4%',
    },
    IconMenu: {
        marginTop : '4%',
        marginLeft : '50%',
    },
    Profile: {
        marginTop : '5%',
    },
    ProfileImage: {
        width : 80,
        height : 80,
        borderRadius : 80/2,
        marginLeft : '5%',
    },
    Image : {
        width : 30,
        height : 30,
        borderRadius : 30/2,
        marginLeft : '5%',
        marginTop : '2%',
    },
    ImageFriend : {
        width : 30,
        height : 30,
        borderRadius : 30/2,
        marginLeft : -8,
        marginTop : '2%',
    },
    Posted : {
        marginLeft : '10%',
        marginTop : '5%',
    },
    TextNonFriend : {
        color : 'white',
        fontSize : 14,
        marginLeft : '3%',
        marginTop : '4%',
    },
    TextFriend : {
        color : 'white',
        fontSize : 14,
        fontWeight : 'bold',
        marginLeft : '1%',
        marginTop : '4%',
    },
    NumberPost: {
        color : 'white',
        fontSize : 18,
        textAlign : 'center',
        fontWeight : 'bold',
    },
    TextPost: {
        color : 'white',
        fontSize : 15,
    },
    Follower : {
        marginLeft : '8%',
        marginTop : '5%',
    },
    NumberFollower: {
        color : 'white',
        fontSize : 18   ,
        textAlign : 'center',
        fontWeight : 'bold',
    },
    TextFollower: {
        color : 'white',
        fontSize : 15,
    },
    Following : {
        marginLeft : '8%',
        marginTop : '5%',
    },
    NumberFollowing: {
        color : 'white',
        fontSize : 18,
        textAlign : 'center',
        fontWeight : 'bold',
    },
    TextFollowing: {
        color : 'white',
        fontSize : 15,
    },
    TextName: {
        color : 'white',
        fontSize : 18,
        marginLeft : '5%',
        marginTop : '3%',
    },
    TextSummary : {
        color : 'white',
        fontSize : 16,
        marginLeft : '5%',
    },
    EditProfile: {
        backgroundColor : '#8e8e8e',
        height : 30,
        width : '80%',
        borderRadius : 5,
        marginLeft : '5%',
        marginTop : '5%',
    },
    BoderEditProfile: {
        width : '99%',
        height : '92%',
        backgroundColor : 'black',
        borderRadius : 5,
        marginLeft : 1,
        marginTop : 1,
    },
    TextEditProfile: {
        color : 'white',
        fontSize : 18,
        textAlign : 'center',
    },
    Add: {  
        backgroundColor : '#8e8e8e',
        height : 30,
        width : 34,
        borderRadius : 5,
        marginLeft : '3%',
        marginTop : '5%',
    },
    BoderAdd: {
        width : 32,
        height : 28,
        backgroundColor : 'black',
        borderRadius : 5,
        marginLeft : 1,
        marginTop : 1,
    },
    IconAddUser: {
        marginTop : '10%',
        marginLeft : '15%',
    },
    FollowRequest: {
        color: 'white',
        fontSize: 15,
        textAlign: 'center',
        marginTop: '2%',
        fontWeight: 'bold',
    },
    MessageRequest: {
        color: 'white',
        fontSize: 15,
        textAlign: 'center',
        marginTop: '1%',
        fontWeight: 'bold',
    },
    Story: {
        marginTop : '5%',
        marginLeft : '5%',
    },
    TitleStory: {
        flexDirection : 'row',
    },
    TextTitleStory: {
        color : 'white',
        fontSize : 18,
    },
    IconUpStory : {
        marginLeft : '60%',
        marginTop : '2%',
    },
    TextStory: {
        color : 'white',
        fontSize : 15,
    },
    ListNewStory: {
        marginTop : '2%',
    },
    IconComplete : {
        marginTop : '25%',
        marginLeft : '25%',
    },
    TextNewStory: {
        color: 'white',
        textAlign : 'center',
    },
    ListStory: {
        marginLeft : 30,
        marginTop : '2%',
    },
    ListStoryBorder: {
        width : 62,
        height : 62,
        borderRadius : 62/2,
        backgroundColor : 'white',
    },
    ListStoryBorder1 : {
        width : 60,
        height : 60,
        borderRadius : 60/2,
        backgroundColor : 'black',
        marginLeft : 1,
        marginTop : 1,
    },
    StoryImage : {
        width : 54,
        height : 54,
        borderRadius : 54/2,
        marginLeft : 3,
        marginTop : 3,
    },
    TextStoryUser : {
        color : 'white',
        textAlign : 'center',
    },
    Post : {
        marginTop : '5%',
    },
    TitlePost : {
        flexDirection : 'row',
        borderBottomColor: "#414360",
        borderBottomWidth: 1,
    },
    IconTable : {
        marginLeft : '19%',
        marginBottom : '2%',
        marginTop : '0.5%',
    },
    IconAccount : {
        marginLeft : '19%',
        marginBottom : '2%',
        marginTop : '0.5%',
    },
    Iconvideo : {
        marginLeft : '19%',
    },
    ListPhoto: {
        flexDirection : 'row',
        marginTop : '1%',
        width: '96%',
        marginLeft: '1%',
    },
    ImageShow: {
        width : '33.333333%',
        height : 120,
        marginLeft : 3
    }
});