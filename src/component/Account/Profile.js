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
export default function Profile() {
    const navigation = useNavigation();
    let name = 'hdh.huyyyy';
    var arrayDiscover = [
        {
            name : 'Đức Trường',
            follow : 'Follow you',
            image : 'https://scontent.fsgn4-1.fna.fbcdn.net/v/t39.30808-6/272991438_1571607939871527_6579089651911998367_n.jpg?_nc_cat=103&ccb=1-5&_nc_sid=09cbfe&_nc_ohc=0yrT4Ddm2MEAX-BaOkp&_nc_ht=scontent.fsgn4-1.fna&oh=00_AT_t-lukzFdRL8IOBAJ_ihyv62ElheSLCGkGcsXQtNP0cw&oe=625FA506'
        },
        {
            name : 'Trường Sinh',
            follow : 'Follow by hdh.huyyyy + 2 more',
            image : 'https://scontent.fsgn3-1.fna.fbcdn.net/v/t39.30808-1/185526923_1334442560290882_6475410094091613892_n.jpg?stp=dst-jpg_p320x320&_nc_cat=104&ccb=1-5&_nc_sid=7206a8&_nc_ohc=vh-1deZnVFMAX-CL9Rq&_nc_ht=scontent.fsgn3-1.fna&oh=00_AT-tUjdRuwBIzRTh5a6EpMZUvZ7ZX1DykLCmSP9J1TROCw&oe=626076E4'
        },
        {
            name : 'Trường Mai',
            follow : 'Follow you',
            image : 'https://scontent.fsgn13-2.fna.fbcdn.net/v/t39.30808-1/274723232_2095406903969072_7504427080082865401_n.jpg?stp=dst-jpg_p320x320&_nc_cat=106&ccb=1-5&_nc_sid=7206a8&_nc_ohc=mF8bPnwU1TwAX_TZXOy&_nc_ht=scontent.fsgn13-2.fna&oh=00_AT_fPpbhcpaFDxDX31d_ZQp0YtkBgupf58VrAqWoqi8CnA&oe=6260E6D5'
        },
        {
            name : 'Đức Hùng',
            follow : 'Follow you',
            image : 'https://scontent-sin6-4.xx.fbcdn.net/v/t1.6435-9/52696062_101541554333212_6443151805353295872_n.jpg?_nc_cat=103&ccb=1-5&_nc_sid=09cbfe&_nc_ohc=iVYxj2aTG4MAX9KnVR1&_nc_ht=scontent-sin6-4.xx&oh=00_AT91XhpTsxpNb7NguhkEdM6FjBuqzXxj45JWgs4OlLsxbQ&oe=627DBD8C'
        },
        {
            name : 'Tường Vi',
            follow : 'Follow by hdh.huyyyy + 10 more',
            image : 'https://scontent-sin6-1.xx.fbcdn.net/v/t39.30808-6/272152926_1240913986401147_8867493523089750699_n.jpg?_nc_cat=111&ccb=1-5&_nc_sid=09cbfe&_nc_ohc=9Nz4bVKM5joAX8fhbRi&_nc_ht=scontent-sin6-1.xx&oh=00_AT_PmiSFopbNLfgeXZxQVCC1nETPN56gDmF5MNinf4vlsQ&oe=625C53AC'
        },
        {
            name : 'Huy Huỳnh',
            follow : 'Follow by hdh.huyyyy + 15 more',
            image : 'https://scontent.fsgn4-1.fna.fbcdn.net/v/t39.30808-6/274876629_2826541607639210_363529317853290439_n.jpg?_nc_cat=101&ccb=1-5&_nc_sid=09cbfe&_nc_ohc=zhn6GxH97wsAX9igMrU&_nc_ht=scontent.fsgn4-1.fna&oh=00_AT8CV-QY77nPfLu8se8Ba5bfAa8KH96jrUmxQJa0CXTW2A&oe=625BCEB5'
        },
        {
            name : 'Đức Hoan',
            follow : 'Follow by hdh.huyyyy + 99 more',
            image : 'https://scontent.fsgn8-1.fna.fbcdn.net/v/t1.30497-1/143086968_2856368904622192_1959732218791162458_n.png?stp=cp0_dst-png_p80x80&_nc_cat=1&ccb=1-5&_nc_sid=7206a8&_nc_ohc=iuMIcxiCMkcAX_TVYh4&_nc_oc=AQnCMwFO0ikM1T3PNmT6hLfYsZgH-UFncWKfNhVaUwjq4DeJjL3Zz5o9N1VoxVT46V_F5s1RY-Ndwrkb3kv6fw1r&_nc_ht=scontent.fsgn8-1.fna&oh=00_AT8o3TOeWVcpPpS4Gy7NagZtopzLFPdCkkGCAzsGaaMdEQ&oe=627B5DF8'
        },
        {
            name : 'Cẩm Vân',
            follow : 'Follow you',
            image : 'https://scontent.fsgn13-2.fna.fbcdn.net/v/t39.30808-6/273154334_1123664431736763_6121942889354663811_n.jpg?_nc_cat=108&ccb=1-5&_nc_sid=09cbfe&_nc_ohc=BoFOVA5QuwIAX-KiXcQ&tn=98Qe8qL2dr5GlQT0&_nc_ht=scontent.fsgn13-2.fna&oh=00_AT8FeFwFTaLe6n_2eXdstYnWoCRVcEtpZZNsA2y4eGBazw&oe=625CDBAA'
        }
    ]
    var story =  [
        {
            name : 'sinh nhật',
            image : 'https://scontent-hkg4-2.xx.fbcdn.net/v/t1.6435-9/203169376_2655017111458328_3182768188753841648_n.jpg?_nc_cat=109&ccb=1-5&_nc_sid=e3f864&_nc_ohc=7UW2vwziuJ8AX9ly0xq&_nc_ht=scontent-hkg4-2.xx&oh=00_AT_H7X0LPh0nxGEArZoHlqMQuJVDW4WmtKLldXAqznvPag&oe=6284937D'
        },
        {
            name : 'họp lớp 2021',
            image : 'https://scontent.fsgn13-2.fna.fbcdn.net/v/t1.6435-9/149743843_1687058798167719_8691916275723497927_n.jpg?_nc_cat=106&ccb=1-5&_nc_sid=19026a&_nc_ohc=rsfPPZPuGnIAX8S8uG_&_nc_ht=scontent.fsgn13-2.fna&oh=00_AT8qD4BarpjKQpNSxekumcfye3op14oSeNI_ggIZcBk3sg&oe=62844162'
        },
        {
            name : 'đà nẵng',
            image : 'https://scontent.fsgn4-1.fna.fbcdn.net/v/t1.6435-9/67321730_2123799624580082_5696296506278019072_n.jpg?_nc_cat=101&ccb=1-5&_nc_sid=8bfeb9&_nc_ohc=sfpIsH4_ay4AX_e-dro&_nc_ht=scontent.fsgn4-1.fna&oh=00_AT-pqEwAD3OaP2qS9Kweka_SwWTeajHVlGwttdARQuawqw&oe=62825FF3'
        },
        {
            name : 'họp lớp 2020',
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
    var arrayComplete = [
        {
            icon : 'user',
            name : 'Add your name',
            text : 'Add your full name so your friends know it is you.',
            textbutton : 'Edit name',
            link : 'EditProfile'

        },
        {
            icon : 'user-check',
            name : 'Add profile photo',
            text : 'Choose a profile photo to make your profile stand out.',
            textbutton : 'Edit photo',
            link : 'EditProfile'
        },
        {
            icon : 'users',
            name : 'Find people to follow',
            text : 'Follow people to get updates from them.',
            textbutton : 'Find more',
            link : 'Discovers'
        }
    ]
    return (
        <View style = {styles.ProfileScreen}>
            {/* Header Profile */}
            <View style = {styles.HeaderProfile}>
                <Fontisto name = "locked" size={20} color = "rgb(248, 248, 242)" style ={styles.IconLock} onPress = {() =>{navigation.navigate('Home')}}/>
                <Text style = {styles.textProfile}>{name}</Text>
                <AntDesign name = "down" size={15} color = "rgb(248, 248, 242)" style ={styles.IconDown}/>
                <Octicons name = "diff-added" size={27} color = "rgb(248, 248, 242)" style ={styles.IconAdd} onPress = {() =>{navigation.navigate('NewProfile')}}/>
                <Ionicons name = "menu" size={35} color = "rgb(248, 248, 242)" style ={styles.IconMenu} onPress = {() => {navigation.navigate('Calls')}}/>
            </View>
            {/* Profile */}
            <ScrollView showsVerticalScrollIndicator={false}>
                <View style = {styles.Profile}>
                    <View style = {{flexDirection : 'row'}}>
                        <Image source={{uri : 'https://scontent.fsgn4-1.fna.fbcdn.net/v/t39.30808-6/274876629_2826541607639210_363529317853290439_n.jpg?_nc_cat=101&ccb=1-5&_nc_sid=09cbfe&_nc_ohc=zhn6GxH97wsAX9igMrU&_nc_ht=scontent.fsgn4-1.fna&oh=00_AT8CV-QY77nPfLu8se8Ba5bfAa8KH96jrUmxQJa0CXTW2A&oe=625BCEB5'}} style = {styles.ProfileImage}/>
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
                </View>
                {/* Edit Profile */}
                <View style = {{flexDirection : 'row'}}>
                    <View style = {styles.EditProfile}>
                        <View style = {styles.BoderEditProfile}>
                            <Text style = {styles.TextEditProfile} onPress = {() => {navigation.navigate('EditProfile')}}>Edit Profile</Text>
                        </View>
                    </View>
                    <View style = {styles.Add}>
                        <View style = {styles.BoderAdd}>
                            <Ionicons name = "md-person-add-sharp" size={20} color = "rgb(248, 248, 242)" style ={styles.IconAddUser}/>
                        </View>
                    </View>
                </View>
                {/* Discover People */}
                <View style = {styles.Discover}>
                    <View style = {styles.TitleDiscover}>
                        <Text style = {styles.TextTitleDiscover}>Discover People</Text>
                        <Text style = {styles.TextSeeAllDiscover} onPress = {() => {navigation.navigate('Discovers')}}>See all</Text>
                    </View>
                    <View style = {styles.ListDiscover}>
                        <ScrollView horizontal showsHorizontalScrollIndicator={false}>
                            {arrayDiscover.map(item => (
                                <View style = {styles.ListDiscoverItem}>
                                    <View style = {styles.ListDiscoverItemBorder}>
                                        <Pressable onPress = {() => {navigation.navigate('Follower')}}>
                                            <View style = {{flexDirection : 'row'}}>
                                                <Image source={{uri : item.image}} style = {styles.DiscoverImage}/>
                                                <AntDesign name = "close" size={20} color = "#8e8e8e" style ={styles.IconClose} />
                                            </View>
                                            <Text style = {styles.TextNameDiscover}>{item.name}</Text>
                                            <Text style = {styles.TextStatusDiscover}>{item.follow}</Text>
                                        </Pressable>
                                        <View style = {styles.FollowDiscover}>
                                            <Text style = {styles.TextFollowDiscover}>Follow</Text>
                                        </View>
                                    </View>
                                </View>
                            ))}
                        </ScrollView>
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
                                <View style = {styles.borderOver}>
                                    <View style = {styles.ListNewStoryBorder}>
                                        <Ionicons name = "add" size={40} color = "rgb(248, 248, 242)" style ={styles.IconNewStory}/>
                                    </View>
                                </View>
                                <Text style = {styles.TextNewStory}>New Story</Text>
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
                        <MaterialCommunityIcons name='card-account-details-star-outline' size={30} color = "rgb(248, 248, 242)" style ={styles.IconAccount}/>
                    </View>
                    <Text style = {styles.TextTitleProfile}>Profile</Text>
                    <Text style = {styles.TextMessagePost}>When you share photo and videos, they'll appear on your profile.</Text>
                    <Text style = {styles.TextfirstPost}>Share your first photo or video</Text>
                </View>
                {/* Complete your profile */}
                <View style = {styles.CompleteProfile}>
                    <Text style = {styles.TextCompleteProfile}>Complete your profile</Text>
                    <Text style = {styles.numberCompleteProfile}>3 of 4 <Text style ={{color : '#8e8e8e'}}> Complete</Text></Text>
                    {/* Do not Complete */}
                    <View style = {styles.ListComplete}>
                        <ScrollView horizontal showsHorizontalScrollIndicator={false}>
                            <View style = {styles.ListCompleteItem}>
                                <View style = {styles.ListCompleteItemBorder}>
                                    <View style = {styles.borderComplete}>
                                        <View style = {styles.CompleteBorder}>
                                            <Feather name = "message-circle" size={30} color = "rgb(248, 248, 242)" style ={styles.IconComplete}/>
                                        </View>
                                    </View>
                                    <Text style = {styles.TextNameComplete}>Add bio</Text>
                                    <Text style = {styles.TextStatusComplete}>Tell your follower a little bit about yourself.</Text>
                                    <Pressable onPress = {() => {navigation.navigate('EditBio')}}>
                                        <View style = {styles.FollowComplete}>
                                            <Text style = {styles.TextFollowComplete}>Add bio</Text>
                                        </View>
                                    </Pressable>
                                </View>
                            </View>
                            {/* Do Complete */}
                            {arrayComplete.map(item => (
                                <View style = {styles.ListCompleteItem}>
                                    <View style = {styles.ListCompleteItemBorder}>
                                        <View style = {styles.borderComplete}>
                                            <View style = {styles.CompleteBorder}>
                                                <Feather name = {item.icon} size={30} color = "rgb(248, 248, 242)" style ={styles.IconComplete}/>
                                                <View style = {{width: 18, height: 18, borderRadius: 18/2, backgroundColor: 'black',marginLeft : '70%'}}>
                                                    <View style = {styles.AcctiveNow}>
                                                        <AntDesign name = "check" size={15} color = "black" style ={{marginLeft : '15%', marginTop : '15%'}}/>
                                                    </View>
                                                </View>
                                            </View>
                                        </View>
                                        <Text style = {styles.TextNameComplete}>{item.name}</Text>
                                        <Text style = {styles.TextStatusComplete}>{item.text}</Text>
                                        <Pressable onPress = {() => {navigation.navigate(item.link)}}>
                                            <View style = {{width : 100, height : 28, backgroundColor : 'white',borderRadius : 5,marginTop : '2%', marginLeft : '25%',}}>
                                                <View style = {{width : 98, height : 26, backgroundColor : 'black',borderRadius : 5,marginTop : 1,marginLeft : 1}}>
                                                    <Text style = {styles.Request}>{item.textbutton}</Text>
                                                </View>
                                            </View>
                                        </Pressable>
                                    </View>
                                </View>
                            ))}
                        </ScrollView>
                    </View>
                    
                </View>
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
        height: 50,
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
    IconDown: {
        marginLeft : '1%',
        marginTop : '5%',
    },
    IconMenu: {
        marginTop : '2%',
        marginLeft : '5%',
    },
    IconAdd: {
        marginTop : '3%',
        marginLeft : '35%',
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
    Posted : {
        marginLeft : '10%',
        marginTop : '5%',
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
        backgroundColor : '#474748',
        borderRadius : 5,
        marginLeft : 1,
        marginTop : 1,
    },
    IconAddUser: {
        marginTop : '10%',
        marginLeft : '15%',
    },
    Discover: {
        marginTop : '5%',
        marginLeft : '5%',
    },
    TitleDiscover: {
        flexDirection : 'row',
    },
    TextTitleDiscover: {
        color : 'white',
        fontSize : 18,
    },
    TextSeeAllDiscover: {
        color : '#5ccfe6',
        fontSize : 18,
        marginLeft : '45%',
    },
    ListDiscover: {
        marginTop : '5%',
    },
    ListDiscoverItem: {
        backgroundColor : '#8e8e8e',
        width : 150,
        height : 220,
        borderRadius : 4,
        marginEnd : 4,
    },
    ListDiscoverItemBorder: {
        width : 148,
        height : 218,
        borderRadius : 4,
        backgroundColor : 'black',
        marginTop : 1,
        marginLeft : 1,
    },
    DiscoverImage: {
        width : 80,
        height : 80,
        borderRadius : 80/2,
        marginLeft : '20%',
        marginTop : '10%',
    },
    IconClose: {
        marginTop : '5%',
        marginLeft : '5%',
    },
    TextNameDiscover: {
        color : 'white',
        fontSize : 18,
        textAlign : 'center',
        marginTop : '5%',
        
    },
    TextStatusDiscover: {
        color : 'white',
        fontSize : 15,
        textAlign : 'center',
        height : '20%',
    },
    FollowDiscover: {
        backgroundColor : '#087cbf',
        width : '90%',
        height : 30,
        borderRadius : 5,
        marginLeft : '5%',
        marginTop : '2%',
    },
    TextFollowDiscover: {
        color : 'white',
        fontSize : 18,
        textAlign : 'center',
        marginTop : '2%',
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
    borderOver : {
        width : 62,
        height : 62,
        borderRadius : 62/2,
        backgroundColor : 'white',
    },
    ListNewStoryBorder: {
        width : 60,
        height : 60,
        borderRadius : 60/2,
        marginLeft : 1,
        marginTop : 1,
        backgroundColor : 'black',
    },
    IconNewStory: {
        marginTop : '15%',
        marginLeft : '20%',
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
        marginLeft : '25%',
        marginBottom : '2%',
    },
    IconAccount : {
        marginLeft : '35%',
        marginBottom : '2%',
    },
    TextTitleProfile : {
        color : 'white',
        fontSize : 24,
        fontWeight : 'bold',
        marginTop : '10%',
        textAlign : 'center',
    },
    TextMessagePost : {
        color : '#8e8e8e',
        fontSize : 18,
        marginTop : '2%',
        width : '80%',
        textAlign : 'center',
        marginLeft : '10%',
    },
    TextfirstPost : {
        color : '#087cbf',
        fontSize : 18,
        width : '80%',
        textAlign : 'center',
        marginLeft : '10%',
    },
    CompleteProfile : {
        marginTop : '10%',
        marginLeft : '5%',
        marginBottom : '5%',
    },
    TextCompleteProfile : {
        color : 'white',
        fontSize : 18,
        fontWeight : 'bold',
    },
    numberCompleteProfile: {
        color : 'rgb(80, 250, 123)',
    },
    ListComplete: {
        marginTop : '5%',
    },
    ListCompleteItem: {
        backgroundColor : '#8e8e8e',
        width : 200,
        height : 220,
        borderRadius : 4,
        marginEnd : 4,
        marginLeft : 8
    },
    ListCompleteItemBorder: {
        width : 198,
        height : 218,
        borderRadius : 4,
        backgroundColor : 'black',
        marginTop : 1,
        marginLeft : 1,
    },
    CompleteImage: {
        width : 80,
        height : 80,
        borderRadius : 80/2,
        marginLeft : '20%',
        marginTop : '10%',
    },
    TextNameComplete: {
        color : 'white',
        fontSize : 18,
        textAlign : 'center',
        marginTop : '5%',
        
    },
    TextStatusComplete: {
        color : '#8e8e8e',
        fontSize : 15,
        textAlign : 'center',
        height : '20%',
        width : '90%',
        marginLeft : '5%',
    },
    FollowComplete: {
        backgroundColor : '#087cbf',
        width : '50%',
        height : 30,
        borderRadius : 5,
        marginLeft : '25%',
        marginTop : '2%',
    },
    TextFollowComplete: {
        color : 'white',
        fontSize : 18,
        textAlign : 'center',
        marginTop : '2%',
    },
    borderComplete : {
        width : 62,
        height : 62,
        borderRadius : 62/2,
        backgroundColor : 'white',
        marginTop : '15%',
        marginLeft : '35%',
    },
    CompleteBorder: {
        width : 60,
        height : 60,
        borderRadius : 60/2,
        marginLeft : 1,
        marginTop : 1,
        backgroundColor : 'black',
    },
    AcctiveNow : {
        backgroundColor : 'rgb(0, 168, 42)',
        width : 20,
        height : 20,
        borderRadius : 20/2,
    }
});