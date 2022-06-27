import React, {useState} from 'react';
import AntDesign from 'react-native-vector-icons/AntDesign';
import Ionicons from 'react-native-vector-icons/Ionicons';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import Octicons from 'react-native-vector-icons/Octicons';
import Feather from 'react-native-vector-icons/Feather';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import Fontisto from 'react-native-vector-icons/Fontisto';
import { Text,Button, View, StyleSheet, TextInput,Image,ScrollView,Modal,Pressable } from 'react-native';
import { useNavigation } from "@react-navigation/native";
export default function RequestFollowDetails() {
    const navigation = useNavigation();
    const [modalEditVisible, setModalEditVisible] = useState(false);
    let name = 'hdh.huyyyy';
    var story =  [
        {
            name : 'tuổi trẻ',
            image : 'https://scontent.fsgn13-2.fna.fbcdn.net/v/t1.6435-9/203169376_2655017111458328_3182768188753841648_n.jpg?_nc_cat=109&ccb=1-7&_nc_sid=e3f864&_nc_ohc=JAZqkH1SJbEAX9T2MBt&_nc_ht=scontent.fsgn13-2.fna&oh=00_AT-9fIClFq86OUplzgVqZxEu96nqOR9L1B-ur-wyPHsHPA&oe=62DB967D'
        },
        {
            name : 'thanh xuân',
            image : 'https://scontent.fsgn13-2.fna.fbcdn.net/v/t39.30808-6/285049384_2892974934329210_8740794401317439759_n.jpg?_nc_cat=109&ccb=1-7&_nc_sid=8bfeb9&_nc_ohc=d_mjDycqV1EAX-dCW2G&_nc_ht=scontent.fsgn13-2.fna&oh=00_AT_T4_Wz-SbKvfl0AIMiZypFPJ-v_n-ypU7DqHeJ0RauxQ&oe=62BC507D'
        },
        {
            name : 'đà nẵng',
            image : 'https://scontent.fsgn4-1.fna.fbcdn.net/v/t1.6435-9/67321730_2123799624580082_5696296506278019072_n.jpg?_nc_cat=101&ccb=1-7&_nc_sid=8bfeb9&_nc_ohc=hBx55XKjiwIAX8zt2Kd&_nc_ht=scontent.fsgn4-1.fna&oh=00_AT-RDCqy5-GF8Bp06Sus2elZX526gmeFuSe9Gpgp5NL5wg&oe=62DD5773'
        },
        {
            name : 'họp lớp',
            image : 'https://scontent.fsgn13-2.fna.fbcdn.net/v/t39.30808-6/273241477_1938622796344650_4709420617748794170_n.jpg?_nc_cat=109&ccb=1-7&_nc_sid=e3f864&_nc_ohc=fuKqPGg10iEAX91TYak&_nc_ht=scontent.fsgn13-2.fna&oh=00_AT-5DCAxNWoGpgV2neps94_8X7oZxmyWopo1lGl39qAd1A&oe=62BCD8CF'
        },
        {
            name : '<3',
            image : 'https://scontent.fsgn8-2.fna.fbcdn.net/v/t1.6435-9/195257224_2643156072644432_4935552701988663558_n.jpg?_nc_cat=105&ccb=1-7&_nc_sid=174925&_nc_ohc=lsccBL_2wRwAX9PA-r0&_nc_ht=scontent.fsgn8-2.fna&oh=00_AT_bF2bRpQrThLKDFJpCCs4g1rYze0Y18UThrnE-xtPBtA&oe=62DEB4B0'
        },
        {
            name : 'xe đẹp hihi',
            image : 'https://scontent.fsgn4-1.fna.fbcdn.net/v/t1.6435-9/91316526_2327174210909288_4269537773892927488_n.jpg?_nc_cat=101&ccb=1-7&_nc_sid=8bfeb9&_nc_ohc=A0ntQzEN-QcAX-m9xjP&_nc_ht=scontent.fsgn4-1.fna&oh=00_AT9BWK2a89MZ28QfeohyRvPD6OElMuelEmd-NsI76SvKrQ&oe=62DC8DBD'
        },

    ]
    var arrayImage = [
        {
            image1 : 'https://scontent.fsgn4-1.fna.fbcdn.net/v/t39.30808-6/274876629_2826541607639210_363529317853290439_n.jpg?_nc_cat=101&ccb=1-7&_nc_sid=09cbfe&_nc_ohc=HdI0cCt0Q3wAX_5XJCE&_nc_ht=scontent.fsgn4-1.fna&oh=00_AT-EuusFTe6O_0EhmxL3lfl3fe-vR-9i-UVqvuXBFrKYiw&oe=62BCB4F5',
            image2 : 'https://scontent.fsgn13-2.fna.fbcdn.net/v/t39.30808-6/274723232_2095406903969072_7504427080082865401_n.jpg?_nc_cat=106&ccb=1-7&_nc_sid=09cbfe&_nc_ohc=EsmoPEH_cXcAX93Nk7C&_nc_ht=scontent.fsgn13-2.fna&oh=00_AT_WQtH6UxmmJyYIrNZrOIN0p6-DnwuiGywVckLUbv7SuQ&oe=62BD1DD7',
            image3 : 'https://scontent.fsgn13-2.fna.fbcdn.net/v/t39.30808-6/269688330_2385746111566438_4170126394801980165_n.jpg?_nc_cat=106&ccb=1-7&_nc_sid=8bfeb9&_nc_ohc=y0Atite1IcEAX90zGu4&_nc_oc=AQkHB2NKoObp3yuSoV7lmesWyjeTNh0MklZp-JfuxZmX1byke2VeXvzjDmSeBWQdnaeyqzCmaeg95UjLMg4y846S&_nc_ht=scontent.fsgn13-2.fna&oh=00_AT8iGo-P-vpB1laU_1DAfq9zUxugYO7rsij2es-YCBiStQ&oe=62BD9E18'
        },
        {
            image1 : 'https://scontent.fsgn4-1.fna.fbcdn.net/v/t39.30808-6/274876629_2826541607639210_363529317853290439_n.jpg?_nc_cat=101&ccb=1-7&_nc_sid=09cbfe&_nc_ohc=HdI0cCt0Q3wAX_5XJCE&_nc_ht=scontent.fsgn4-1.fna&oh=00_AT-EuusFTe6O_0EhmxL3lfl3fe-vR-9i-UVqvuXBFrKYiw&oe=62BCB4F5',
            image2 : 'https://scontent.fsgn13-2.fna.fbcdn.net/v/t39.30808-6/274723232_2095406903969072_7504427080082865401_n.jpg?_nc_cat=106&ccb=1-7&_nc_sid=09cbfe&_nc_ohc=EsmoPEH_cXcAX93Nk7C&_nc_ht=scontent.fsgn13-2.fna&oh=00_AT_WQtH6UxmmJyYIrNZrOIN0p6-DnwuiGywVckLUbv7SuQ&oe=62BD1DD7',
            image3 : 'https://scontent.fsgn13-2.fna.fbcdn.net/v/t39.30808-6/269688330_2385746111566438_4170126394801980165_n.jpg?_nc_cat=106&ccb=1-7&_nc_sid=8bfeb9&_nc_ohc=y0Atite1IcEAX90zGu4&_nc_oc=AQkHB2NKoObp3yuSoV7lmesWyjeTNh0MklZp-JfuxZmX1byke2VeXvzjDmSeBWQdnaeyqzCmaeg95UjLMg4y846S&_nc_ht=scontent.fsgn13-2.fna&oh=00_AT8iGo-P-vpB1laU_1DAfq9zUxugYO7rsij2es-YCBiStQ&oe=62BD9E18'
        },
        {
            image1 : 'https://scontent.fsgn4-1.fna.fbcdn.net/v/t39.30808-6/274876629_2826541607639210_363529317853290439_n.jpg?_nc_cat=101&ccb=1-7&_nc_sid=09cbfe&_nc_ohc=HdI0cCt0Q3wAX_5XJCE&_nc_ht=scontent.fsgn4-1.fna&oh=00_AT-EuusFTe6O_0EhmxL3lfl3fe-vR-9i-UVqvuXBFrKYiw&oe=62BCB4F5',
            image2 : 'https://scontent.fsgn13-2.fna.fbcdn.net/v/t39.30808-6/274723232_2095406903969072_7504427080082865401_n.jpg?_nc_cat=106&ccb=1-7&_nc_sid=09cbfe&_nc_ohc=EsmoPEH_cXcAX93Nk7C&_nc_ht=scontent.fsgn13-2.fna&oh=00_AT_WQtH6UxmmJyYIrNZrOIN0p6-DnwuiGywVckLUbv7SuQ&oe=62BD1DD7',
            image3 : 'https://scontent.fsgn13-2.fna.fbcdn.net/v/t39.30808-6/269688330_2385746111566438_4170126394801980165_n.jpg?_nc_cat=106&ccb=1-7&_nc_sid=8bfeb9&_nc_ohc=y0Atite1IcEAX90zGu4&_nc_oc=AQkHB2NKoObp3yuSoV7lmesWyjeTNh0MklZp-JfuxZmX1byke2VeXvzjDmSeBWQdnaeyqzCmaeg95UjLMg4y846S&_nc_ht=scontent.fsgn13-2.fna&oh=00_AT8iGo-P-vpB1laU_1DAfq9zUxugYO7rsij2es-YCBiStQ&oe=62BD9E18'
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
            <Modal
                animationType="slide"
                transparent={true}
                visible={modalEditVisible}
                onRequestClose={() => {
                setModalVisible(!modalEditVisible);
                }}
            >
                <View style={styles.BottomView}>
                    <View style={styles.modalBottomView}>
                        <View style = {styles.modalBottomBoder}/>
                        {/* Title */}
                        <View style = {styles.modalBottomTitle}>
                            <Text style = {styles.modalBottomTitleReport}>Report...</Text>
                            <Text style = {styles.modalBottomTitleBlock}>Block</Text>
                            <Text style = {styles.modalBottomTitleRestrict}>Restrict</Text>
                            <Text style = {styles.modalBottomTitleHide}>Hide your story</Text>
                            <Text style = {styles.modalBottomTitleCopy}>Copy profile URL</Text>
                            <Text style = {styles.modalBottomTitleShare}>Share This profile</Text>
                            <Pressable onPress={() => {setModalEditVisible(!modalEditVisible)}}>
                                <Text style = {styles.modalBottomTitleClose}>Close</Text>
                            </Pressable>
                        </View>
                    </View>
                </View>
            </Modal>
            {/* Header Profile */}
            <View style = {styles.HeaderProfile}>
                <AntDesign name = "arrowleft" size={30} color = "rgb(248, 248, 242)" style ={styles.IconLock} onPress = {() =>{navigation.goBack()}}/>
                <Text style = {styles.textProfile}>{name}</Text>
                <Ionicons name = "ellipsis-vertical" size={20} color = "white" style ={styles.IconMenu} onPress = {() =>{setModalEditVisible(true)}}/>
            </View>
            {/* Profile */}
            <ScrollView showsVerticalScrollIndicator={false}>
                <View style = {styles.RequestFollow}>
                    <View style = {styles.UserRequestFollow}>
                        <Ionicons name='person-add-outline' size={18} color='white' style = {styles.IconUser}/>
                        <Text style = {styles.textUserRequestFollow}>{name}</Text>
                        <Text style = {styles.textRequestFollow}>want to follow you</Text>
                    </View>
                    <View style = {styles.ConfirmRequestFollow}>
                        <View style = {{width : 150, height : 28, backgroundColor : '#1d94d8',borderRadius : 5,marginTop : '3%'}}>
                                <Text style = {styles.ConfirmRequest}>Confirm</Text>
                        </View>
                        <View style = {{width : 150, height : 28, backgroundColor : 'white',borderRadius : 5,marginTop : '3%', marginLeft : '4%'}}>
                            <View style = {{width : 147, height : 25, backgroundColor : 'black',borderRadius : 5,marginTop : '1%',marginLeft : '1%'}}>
                                <Text style = {styles.DeleteRequest}>Delete</Text>
                            </View>
                        </View>
                    </View>
                </View>
                <View style = {styles.Profile}>
                    <View style = {{flexDirection : 'row'}}>
                        <Image source={{uri : 'https://scontent.fsgn4-1.fna.fbcdn.net/v/t39.30808-6/274876629_2826541607639210_363529317853290439_n.jpg?_nc_cat=101&ccb=1-7&_nc_sid=09cbfe&_nc_ohc=HdI0cCt0Q3wAX_5XJCE&_nc_ht=scontent.fsgn4-1.fna&oh=00_AT-EuusFTe6O_0EhmxL3lfl3fe-vR-9i-UVqvuXBFrKYiw&oe=62BCB4F5'}} style = {styles.ProfileImage}/>
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
                                        <Image source={{uri : 'https://scontent.fsgn4-1.fna.fbcdn.net/v/t39.30808-6/274876629_2826541607639210_363529317853290439_n.jpg?_nc_cat=101&ccb=1-7&_nc_sid=09cbfe&_nc_ohc=HdI0cCt0Q3wAX_5XJCE&_nc_ht=scontent.fsgn4-1.fna&oh=00_AT-EuusFTe6O_0EhmxL3lfl3fe-vR-9i-UVqvuXBFrKYiw&oe=62BCB4F5'}} style = {styles.StoryImage}/>
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
        borderBottomColor: "#414360",
        borderBottomWidth: 1,
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
    RequestFollow: {
        marginTop : '5%',
        borderBottomColor: "#414360",
        borderBottomWidth: 1,
    },
    UserRequestFollow: {
        flexDirection : 'row',
    },
    IconUser: {
        marginLeft: '15%',
    },
    textUserRequestFollow : {
        color : 'white',
        fontSize : 17,
        marginLeft : '2%',
        fontWeight : 'bold',
    },
    textRequestFollow : {
        color : 'white',
        fontSize : 17,
        marginLeft : '2%',
    },
    ConfirmRequestFollow: {
        flexDirection : 'row',
        marginBottom : '5%',
        marginLeft : '10%',
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
    ConfirmRequest: {
        color: 'white',
        fontSize: 15,
        textAlign: 'center',
        marginTop: '2%',
        fontWeight: 'bold',
    },
    DeleteRequest: {
        color: 'white',
        fontSize: 15,
        textAlign: 'center',
        marginTop: '1%',
        fontWeight: 'bold',
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
    },
    BottomView : {
        top: '57%', 
    },
    modalBottomView: {
        backgroundColor: "#272c33",
        borderRadius: 20,
        height : 330,
    },
    modalBottomBoder: {
        marginTop : '3%',
        width : '10%',
        marginLeft : '45%',
        borderBottomColor: "white",
        borderBottomWidth: 6,
        borderBottomEndRadius: 10,
        borderBottomStartRadius: 10,
        borderTopLeftRadius: 10,
        borderTopRightRadius: 10,
    },
    modalBottomTitle : {
        marginTop : '2%',
        marginLeft : '2%',
    },
    modalBottomTitleReport : {
        color : 'white',
        fontSize : 18,
        marginLeft : '2%',
    },
    modalBottomTitleBlock: {
        marginTop : '5%',
        color : 'white',
        fontSize : 18,
        marginLeft : '2%',
    },
    modalBottomTitleRestrict: {
        marginTop : '5%',
        color : 'white',
        fontSize : 18,
        marginLeft : '2%',
    },
    modalBottomTitleHide: {
        marginTop : '5%',
        color : 'white',
        fontSize : 18,
        marginLeft : '2%',
    },
    modalBottomTitleCopy: {
        marginTop : '5%',
        color : 'white',
        fontSize : 18,
        marginLeft : '2%',
    },
    modalBottomTitleShare : {
        marginTop : '5%',
        color : 'white',
        fontSize : 18,
        marginLeft : '2%',
    },
    modalBottomTitleClose : {
        marginTop : '5%',
        color : 'white',
        fontSize : 18,
        marginLeft : '2%',
    },
});