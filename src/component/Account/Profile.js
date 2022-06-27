import React, {useState} from 'react';
import AntDesign from 'react-native-vector-icons/AntDesign';
import Ionicons from 'react-native-vector-icons/Ionicons';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import Octicons from 'react-native-vector-icons/Octicons';
import Feather from 'react-native-vector-icons/Feather';
import Entypo from 'react-native-vector-icons/Entypo';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import Fontisto from 'react-native-vector-icons/Fontisto';
import { Text,Button, View, StyleSheet, TextInput,Image,ScrollView,ImageBackground,Pressable,Modal } from 'react-native';
import { useNavigation } from "@react-navigation/native";
export default function Profile() {
    const [modalAddVisible, setModalAddVisible] = useState(false);
    const [modalEditVisible, setModalEditVisible] = useState(false);
    const [modalSettingVisible, setModalSettingVisible] = useState(false);
    const navigation = useNavigation();
    let name = 'hdh.huyyyy';
    var arrayDiscover = [
        {
            name : 'Đức Trường',
            follow : 'Follow you',
            image : 'https://scontent.fsgn3-1.fna.fbcdn.net/v/t39.30808-6/247590695_2739368196356552_4837848715300811541_n.jpg?_nc_cat=107&ccb=1-7&_nc_sid=ad2b24&_nc_ohc=O5rdqerkV1kAX99U6eW&_nc_ht=scontent.fsgn3-1.fna&oh=00_AT_iyTSO0llTavFLmLYHK5pazeQvZpoqgkex2o_kLqDfkw&oe=62BDCB49'
        },
        {
            name : 'Trường Sinh',
            follow : 'Follow by hdh.huyyyy + 2 more',
            image : 'https://scontent.fsgn3-1.fna.fbcdn.net/v/t39.30808-1/185526923_1334442560290882_6475410094091613892_n.jpg?stp=dst-jpg_p320x320&_nc_cat=104&ccb=1-7&_nc_sid=7206a8&_nc_ohc=cDZxSfWtgPMAX9xiDIv&_nc_ht=scontent.fsgn3-1.fna&oh=00_AT8oX8iMQ8Gb8SdWphHsIknHNrAMjzM_zpVq8LgvZgRG6Q&oe=62BD68A4'
        },
        {
            name : 'Trường Mai',
            follow : 'Follow you',
            image : 'https://scontent.fsgn2-5.fna.fbcdn.net/v/t39.30808-6/274723232_2095406903969072_7504427080082865401_n.jpg?_nc_cat=106&ccb=1-7&_nc_sid=09cbfe&_nc_ohc=5dA0oNbONT8AX-9GLC-&_nc_ht=scontent.fsgn2-5.fna&oh=00_AT8YJCdvyyl6Bd-tmvO-ak3JVkC68PLT7p1LrYLiMbAaSw&oe=62BB2397'
        },
        {
            name : 'Đức Hùng',
            follow : 'Follow you',
            image : 'https://scontent.fsgn4-1.fna.fbcdn.net/v/t1.6435-9/52696062_101541554333212_6443151805353295872_n.jpg?_nc_cat=103&ccb=1-7&_nc_sid=09cbfe&_nc_ohc=nsE_roCBRuAAX8lqdK2&_nc_ht=scontent.fsgn4-1.fna&oh=00_AT8XQ_z2rvZocGfVa2CI2E9PB4Tu5dAmJhe0gSGVVPFr9w&oe=62DCA98C'
        },
        {
            name : 'Tường Vi',
            follow : 'Follow by hdh.huyyyy + 10 more',
            image : 'https://scontent.fsgn8-2.fna.fbcdn.net/v/t39.30808-6/272152926_1240913986401147_8867493523089750699_n.jpg?_nc_cat=111&ccb=1-7&_nc_sid=174925&_nc_ohc=k4tjE6AyONAAX_oXSSb&_nc_ht=scontent.fsgn8-2.fna&oh=00_AT-mS1KADc7rqebiYp9MmKyhmMvZ5YSDf62ZBPSaIILbng&oe=62BD39EC'
        },
        {
            name : 'Huy Huỳnh',
            follow : 'Follow by hdh.huyyyy + 15 more',
            image : 'https://scontent.fsgn4-1.fna.fbcdn.net/v/t39.30808-6/274876629_2826541607639210_363529317853290439_n.jpg?_nc_cat=101&ccb=1-7&_nc_sid=09cbfe&_nc_ohc=HdI0cCt0Q3wAX_5XJCE&_nc_ht=scontent.fsgn4-1.fna&oh=00_AT-EuusFTe6O_0EhmxL3lfl3fe-vR-9i-UVqvuXBFrKYiw&oe=62BCB4F5'
        },
        {
            name : 'Đức Hoan',
            follow : 'Follow by hdh.huyyyy + 99 more',
            image : 'https://scontent.fsgn3-1.fna.fbcdn.net/v/t1.6435-9/122192711_697566607532271_2285775074524737085_n.jpg?_nc_cat=104&ccb=1-7&_nc_sid=19026a&_nc_ohc=uS9n3QsAXAcAX9uqsmo&_nc_ht=scontent.fsgn3-1.fna&oh=00_AT804VS0UCyuZTH3AvDE4obV508Dux8mw4OLEZKZGcW0IA&oe=62DB90C0'
        },
        {
            name : 'Cẩm Vân',
            follow : 'Follow you',
            image : 'https://scontent.fsgn13-3.fna.fbcdn.net/v/t39.30808-6/273154334_1123664431736763_6121942889354663811_n.jpg?_nc_cat=108&ccb=1-7&_nc_sid=09cbfe&_nc_ohc=5JKUGavtKnEAX87SRXD&tn=98Qe8qL2dr5GlQT0&_nc_ht=scontent.fsgn13-3.fna&oh=00_AT9dhMs9opTKaEEDkuZ5Xcc4gZ-fN_TTOrSyjwizQor48w&oe=62BDC1EA'
        }
    ]
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
            {/* Modal Account */}
            <Modal
                animationType="slide"
                transparent={true}
                visible={modalAddVisible}
                onRequestClose={() => {
                setModalVisible(!modalAddVisible);
                }}
            >
                <View style={styles.BottomView}>
                    <View style={styles.modalBottomView}>
                        <View style = {styles.modalBottomBoder}/>
                        {/* Account */}
                        <View style = {styles.modalBottomActionAccount}>
                            <View style = {styles.modalBottomAccount}>
                                <Image style = {styles.modalBottomAccountImage} source={{uri : 'https://scontent.fsgn4-1.fna.fbcdn.net/v/t39.30808-6/274876629_2826541607639210_363529317853290439_n.jpg?_nc_cat=101&ccb=1-5&_nc_sid=09cbfe&_nc_ohc=zhn6GxH97wsAX9igMrU&_nc_ht=scontent.fsgn4-1.fna&oh=00_AT8CV-QY77nPfLu8se8Ba5bfAa8KH96jrUmxQJa0CXTW2A&oe=625BCEB5'}}/>
                                <Text style = {styles.modalBottomAccountName}>hdh.huyyyy</Text>
                                <View style = {styles.modalBottomAccountAction}>
                                    <View style = {styles.IconDot}/>
                                </View>
                            </View>
                        </View>
                        {/* Add Account */}
                        <View style = {styles.modalBottomActionAddAccount}>
                            <View style = {styles.modalBottomAddAccount}>
                                <View style = {styles.modalBottomAccountBorder}>
                                    <AntDesign style = {styles.modalBottomAccountIcon} name="plus" size={30} color="white"/>
                                </View>
                                <Text style = {styles.modalBottomAddAccountName}>Add account</Text>
                            </View>
                        </View>
                        {/* Close */}
                        <Pressable onPress={() => {setModalAddVisible(!modalAddVisible)}}>
                            <View style = {styles.modalBottomActionClose}>
                                <View style = {styles.modalBottomCloseView}>
                                    <View style = {styles.modalBottomCloseBorder}>
                                        <AntDesign style = {styles.modalBottomCloseIcon} name="close" size={30} color="white"/>
                                    </View>
                                    <Text style = {styles.modalBottomClose}>Close</Text>
                                </View>
                            </View>
                        </Pressable>
                    </View>
                </View>
            </Modal>
            {/* Modal Add Post */}
            <Modal
                animationType="slide"
                transparent={true}
                visible={modalEditVisible}
                onRequestClose={() => {
                setModalVisible(!modalEditVisible);
                }}
            >
                <View style={styles.BottomViewCreate}>
                    <View style={styles.modalBottomViewCreate}>
                        <View style = {styles.modalBottomBoder}/>
                        {/* Title */}
                        <View style = {styles.modalBottomActionCreatePost}>
                            <Text style = {styles.modalBottomActionCreatePostText}>Create</Text>
                        </View>
                        <View style = {styles.modalBottomTitle}>
                            <View style = {{flexDirection : 'row', marginLeft : '3%'}}>
                                <AntDesign name="table" size={30} color="white" style = {{width : '10%'}}/>
                                <Text style = {styles.modalBottomTitlePost}>Post</Text>
                            </View>
                            <View style = {{flexDirection : 'row', marginLeft : '2%', marginTop : '3%'}}>
                                <MaterialCommunityIcons name="video-plus" size={40} color="white" style = {{width : '11%'}}/>
                                <Text style = {styles.modalBottomTitleReel}>Reel</Text>
                            </View>
                            <View style = {{flexDirection : 'row', marginLeft : '3%', marginTop : '3%'}}>
                                <MaterialIcons name='add-to-queue' size={35} color="white" style = {{width : '10%'}}/>
                                <Text style = {styles.modalBottomTitleStory}>Story</Text>
                            </View>
                            <View style = {{flexDirection : 'row', marginLeft : '2%', marginTop : '3%'}}>
                                <MaterialIcons name='add-circle-outline' size={40} color="white" style = {{width : '11%'}}/>
                                <Text style = {styles.modalBottomTitleStoryHighlight}>Story Highlight</Text>
                            </View>
                            <View style = {{flexDirection : 'row', marginLeft : '3%', marginTop : '3%'}}>
                                <MaterialIcons name='live-tv' size={35} color="white" style = {{width : '10%'}}/>
                                <Text style = {styles.modalBottomTitleLive}>Live</Text>
                            </View>
                            <View style = {{flexDirection : 'row', marginLeft : '3%', marginTop : '3%'}}>
                                <MaterialIcons name='menu-book' size={35} color="white" style = {{width : '10%'}}/>
                                <Text style = {styles.modalBottomTitleGuide}>Guide</Text>
                            </View>
                            <Pressable onPress={() => {setModalEditVisible(!modalEditVisible)}}>
                                <View style = {{flexDirection : 'row', marginLeft : '3%', marginTop : '3%'}}>
                                    <AntDesign name="closecircleo" size={35} color="white" style = {{width : '10%'}}/>
                                    <Text style = {styles.modalBottomTitleClose}>Close</Text>
                                </View>
                            </Pressable>
                        </View>
                    </View>
                </View>
            </Modal>
            {/* Modal Setting */}
            <Modal
                animationType="slide"
                transparent={true}
                visible={modalSettingVisible}
                onRequestClose={() => {
                setModalVisible(!modalSettingVisible);
                }}
            >
                <View style={styles.BottomViewCreate}>
                    <View style={styles.modalBottomViewCreate}>
                        <View style = {styles.modalBottomBoder}/>
                        <View style = {styles.modalBottomTitle}>
                            <Pressable onPress={() => {navigation.navigate('Setting')}}>
                                <View style = {{flexDirection : 'row', marginLeft : '3%'}}>
                                    <AntDesign name="setting" size={30} color="white" style = {{width : '10%'}}/>
                                    <Text style = {styles.modalBottomTitlePost}>Settings</Text>
                                </View>
                            </Pressable>
                            <Pressable onPress={() => {navigation.navigate('ArchiveStory')}}>
                                <View style = {{flexDirection : 'row', marginLeft : '3%', marginTop : '3%'}}>
                                    <FontAwesome name="history" size={30} color="white" style = {{width : '10%'}}/>
                                    <Text style = {styles.modalBottomTitleReel}>Archive</Text>
                                </View>
                            </Pressable>
                            <Pressable onPress={() => {navigation.navigate('YourActivity')}}>
                                <View style = {{flexDirection : 'row', marginLeft : '3%', marginTop : '3%'}}>
                                    <MaterialCommunityIcons name='progress-clock' size={30} color="white" style = {{width : '10%'}}/>
                                    <Text style = {styles.modalBottomTitleStory}>Your activity</Text>
                                </View>
                            </Pressable>
                            <Pressable onPress={() => {navigation.navigate('YourQrCode')}}>
                                <View style = {{flexDirection : 'row', marginLeft : '3%', marginTop : '3%'}}>
                                    <MaterialCommunityIcons name='qrcode-scan' size={30} color="white" style = {{width : '10%'}}/>
                                    <Text style = {styles.modalBottomTitleStoryHighlight}>QR code</Text>
                                </View>
                            </Pressable>
                            <View style = {{flexDirection : 'row', marginLeft : '4%', marginTop : '4%'}}>
                                <FontAwesome name='bookmark-o' size={30} color="white" style = {{width : '9%'}}/>
                                <Text style = {styles.modalBottomTitleLive}>Saved</Text>
                            </View>
                            <View style = {{flexDirection : 'row', marginLeft : '3%', marginTop : '3%'}}>
                                <MaterialCommunityIcons name='format-list-bulleted-triangle' size={30} color="white" style = {{width : '10%'}}/>
                                <Text style = {styles.modalBottomTitleGuide}>Close Friends</Text>
                            </View>
                            <View style = {{flexDirection : 'row', marginLeft : '3%', marginTop : '3%'}}>
                                <FontAwesome name='star-o' size={30} color="white" style = {{width : '10%'}}/>
                                <Text style = {styles.modalBottomTitleFavorite}>Favorite</Text>
                            </View>
                            <View style = {{flexDirection : 'row', marginLeft : '3%', marginTop : '3%'}}>
                                <MaterialCommunityIcons name='hand-heart' size={30} color="white" style = {{width : '10%'}}/>
                                <Text style = {styles.modalBottomTitleCovid}>COVID-19 Information Center</Text>
                            </View>
                            <Pressable onPress={() => {setModalSettingVisible(!modalSettingVisible)}}>
                                <View style = {{flexDirection : 'row', marginLeft : '3%', marginTop : '3%'}}>
                                    <AntDesign name="closecircleo" size={30} color="white" style = {{width : '10%'}}/>
                                    <Text style = {styles.modalBottomTitleClose}>Close</Text>
                                </View>
                            </Pressable>
                        </View>
                    </View>
                </View>
            </Modal>
            {/* Header Profile */}
            <View style = {styles.HeaderProfile}>
                <Pressable  onPress={() => {setModalAddVisible(true)}} style = {{flexDirection : 'row' ,marginTop : '1%' , marginLeft : '2%', width : '70%'}}>
                    <Fontisto name = "locked" size={20} color = "rgb(248, 248, 242)" style ={styles.IconLock} onPress = {() =>{navigation.navigate('Home')}}/>
                    <Text style = {styles.textProfile}>{name}</Text>
                    <AntDesign name = "down" size={15} color = "rgb(248, 248, 242)" style ={styles.IconDown}/>
                </Pressable>
                <Octicons name = "diff-added" size={27} color = "rgb(248, 248, 242)" style ={styles.IconAdd} onPress = {() =>{setModalEditVisible(true)}}/>
                <Ionicons name = "menu" size={35} color = "rgb(248, 248, 242)" style ={styles.IconMenu} onPress = {() => {setModalSettingVisible(true)}}/>
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
                    <Text style = {styles.TextMessagePost}>When you Guide photo and videos, they'll appear on your profile.</Text>
                    <Text style = {styles.TextfirstPost}>Guide your first photo or video</Text>
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
        marginLeft: '5%',
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
        marginLeft: '5%',
        marginTop: '5%',
    },
    IconDown: {
        marginLeft : '1%',
        marginTop : '6%',
    },
    IconMenu: {
        marginTop : '3%',
        marginLeft : '5%',
    },
    IconAdd: {
        marginTop : '4%',
        marginLeft : '5%',
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
    },
    BottomView : {
        top: '70%', 
    },
    modalBottomView: {
        backgroundColor: "#272c33",
        borderRadius: 20,
        height : 225,
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
    modalBottomActionAccount : {
        marginTop : '2%',
        marginLeft : '2%',
    },
    modalBottomAccount : {
        flexDirection : 'row',
    },
    modalBottomAccountImage : {
        width : 50,
        height : 50,
        borderRadius: 50/2,
    },
    modalBottomAccountName : {
        width : '70%',
        marginLeft : '5%',
        color : 'white',
        fontSize : 18,
        marginTop : '4%',
    },
    modalBottomAccountAction : {
        width : 25,
        height : 25,
        borderRadius: 25/2,
        backgroundColor : '#087cbf',
        marginTop : '4%',
    },
    IconDot : {
        width : 10,
        height : 10,
        borderRadius : 10/2,
        backgroundColor : 'black',
        marginTop : '30%',
        marginLeft : '30%',
    },
    modalBottomAddAccountName : {
        marginLeft : '5%',
        color : 'white',
        fontSize : 18,
        marginTop : '4%',
    },
    modalBottomActionAddAccount : {
        marginTop : '2%',
        marginLeft : '2%',
    },
    modalBottomAddAccount : {
        flexDirection : 'row',
        marginTop : '2%',
    },
    modalBottomAccountBorder : {
        width : 50,
        height : 50,
        borderRadius: 50/2,
        borderColor: '#8e8e8e',
        borderWidth: 1,
    },
    modalBottomAccountIcon : {
        marginLeft : '18%',
        marginTop : '18%',
    },
    modalBottomActionClose: {
        marginTop : '2%',
        marginLeft : '2%',
    },
    modalBottomCloseView: {
        flexDirection : 'row',
        marginTop : '2%',
    },
    modalBottomCloseBorder : {
        width : 50,
        height : 50,
        borderRadius: 50/2,
        borderColor: '#8e8e8e',
        borderWidth: 1,
    },
    modalBottomCloseIcon : {
        marginLeft : '18%',
        marginTop : '18%',
    },
    modalBottomClose : {
        marginLeft : '5%',
        color : 'white',
        fontSize : 18,
        marginTop : '4%',
    },
    BottomViewCreate : {
        top: '45%', 
    },
    modalBottomViewCreate: {
        backgroundColor: "#272c33",
        borderRadius: 20,
        height : 420,
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
    modalBottomTitlePost : {
        color : 'white',
        fontSize : 18,
        marginLeft : '5%',
        marginTop : '1%',
    },
    modalBottomTitleReel: {
        marginTop : '1%',
        color : 'white',
        fontSize : 18,
        marginLeft : '5%',
    },
    modalBottomTitleStory: {
        marginTop : '1%',
        color : 'white',
        fontSize : 18,
        marginLeft : '5%',
    },
    modalBottomTitleStoryHighlight: {
        marginTop : '1%',
        color : 'white',
        fontSize : 18,
        marginLeft : '5%',
    },
    modalBottomTitleLive: {
        marginTop : '1%',
        color : 'white',
        fontSize : 18,
        marginLeft : '5%',
    },
    modalBottomTitleGuide : {
        marginTop : '1%',
        color : 'white',
        fontSize : 18,
        marginLeft : '5%',
    },
    modalBottomTitleFavorite : {
        marginTop : '1%',
        color : 'white',
        fontSize : 18,
        marginLeft : '5%',
    },
    modalBottomTitleCovid : {
        marginTop : '1%',
        color : 'white',
        fontSize : 18,
        marginLeft : '5%',
    },
    modalBottomTitleClose : {
        marginTop : '1%',
        color : 'white',
        fontSize : 18,
        marginLeft : '5%',
    },
    modalBottomActionCreatePost: {
        flexDirection : 'row',
        marginTop : '3%',
        borderBottomColor: "#8e8e8e",
        borderBottomWidth: 1,
    },
    modalBottomActionCreatePostText : {
        width : '20%',
        marginLeft : '40%',
        color : 'white',
        fontSize : 20,
        marginBottom : '2%',
    },
});