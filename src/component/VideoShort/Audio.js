import React, {useState} from "react";
import MaterialIcons from "react-native-vector-icons/MaterialIcons";
import MaterialCommunityIcons from "react-native-vector-icons/MaterialCommunityIcons";
import FontAwesome from "react-native-vector-icons/FontAwesome";
import Feather from "react-native-vector-icons/Feather";
import Ionicons from "react-native-vector-icons/Ionicons";
import AntDesign from "react-native-vector-icons/AntDesign";
import { Text,Button, View, StyleSheet, TextInput,Image,ScrollView,Pressable,Modal} from 'react-native';
import Video from 'react-native-video';
import { useNavigation } from "@react-navigation/native";
export default function Audios(){
    const navigation = useNavigation();
    const [modalSendVisible, setModalSendVisible] = useState(false);
    const [modalEditVisible, setModalEditVisible] = useState(false);
    var arrayImage = [
        {
            video1 : {
                image : 'https://i.ytimg.com/vi/rIXhXaQ8tiM/hqdefault.jpg?sqp=-oaymwEcCNACELwBSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLAN7h0atu3ZKCfP5T_sVlKgADI6Mw',
                view : '1.2M',
            },
            video2 : {
                image : 'https://i.ytimg.com/vi/eZpJdO22jZ0/hqdefault.jpg?sqp=-oaymwEcCNACELwBSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLDsnk5Fzfo3N11Z1wN_iHgrfMHaDA',
                view : '1200'
            },
            video3 : {
                image : 'https://i.ytimg.com/vi/HXkh7EOqcQ4/hqdefault.jpg?sqp=-oaymwEcCNACELwBSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLAiJoi-mfra-xzhz8_pw9MUyZyKCA',
                view : '400'
            }
        },
        {
            video1 : {
                image : 'https://i.ytimg.com/vi/vYLYQY5dMiw/hqdefault.jpg?sqp=-oaymwEjCNACELwBSFryq4qpAxUIARUAAAAAGAElAADIQj0AgKJDeAE=&rs=AOn4CLBsgRQwKlgDTtXAex2ZxkL6VVi5bQ',
                view : '900'
            },
            video2 : {
                image : 'https://i.ytimg.com/vi/FUHizjWRd48/hqdefault.jpg?sqp=-oaymwEcCNACELwBSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLB6A8OjOXLJws7DL-bXHj0NIOlDsw',
                view : '1k5'
            },
            video3 : {
                image : 'https://i.ytimg.com/vi/PKqP8NkOMHo/hqdefault.jpg?sqp=-oaymwEjCNACELwBSFryq4qpAxUIARUAAAAAGAElAADIQj0AgKJDeAE=&rs=AOn4CLDOKirHJnxYV4WBoarWzjiGio7f_Q',
                view : '15k'
            }

        },
        {
            video1 : {
                image : 'https://i.ytimg.com/vi/IGJmFQyMnC8/hqdefault.jpg?sqp=-oaymwEjCNACELwBSFryq4qpAxUIARUAAAAAGAElAADIQj0AgKJDeAE=&rs=AOn4CLCzwSief82WQqiq_LHBFRNI8Afyfg',
                view : '500k'
            },
            video2 : {
                image : 'https://i.ytimg.com/vi/DZDYZ9nRHfU/hqdefault.jpg?sqp=-oaymwEcCNACELwBSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLBXmoIBLr3oUfCzSIjLG9IYAoOnXw',
                view : '150k'
            },
            video3 : {
                image : 'https://i.ytimg.com/vi/BMtaUb-E5Uc/hqdefault.jpg?sqp=-oaymwEjCNACELwBSFryq4qpAxUIARUAAAAAGAElAADIQj0AgKJDeAE=&rs=AOn4CLCYv4FAGKxvMgD3tLrhGhn0yRkcZw',
                view : '1.5M'
            }
        },
    ];
    var arraySendMessage = [
        {
            nameFB : 'Đức Trường',
            name : 'hdhtruong1985',
            image : 'https://scontent.fsgn4-1.fna.fbcdn.net/v/t39.30808-6/272991438_1571607939871527_6579089651911998367_n.jpg?_nc_cat=103&ccb=1-5&_nc_sid=09cbfe&_nc_ohc=0yrT4Ddm2MEAX-BaOkp&_nc_ht=scontent.fsgn4-1.fna&oh=00_AT_t-lukzFdRL8IOBAJ_ihyv62ElheSLCGkGcsXQtNP0cw&oe=625FA506'
        },
        {
            nameFB : 'Trường Sinh',
            name : 'truonsinh.ben',
            image : 'https://scontent.fsgn3-1.fna.fbcdn.net/v/t39.30808-1/185526923_1334442560290882_6475410094091613892_n.jpg?stp=dst-jpg_p320x320&_nc_cat=104&ccb=1-5&_nc_sid=7206a8&_nc_ohc=vh-1deZnVFMAX-CL9Rq&_nc_ht=scontent.fsgn3-1.fna&oh=00_AT-tUjdRuwBIzRTh5a6EpMZUvZ7ZX1DykLCmSP9J1TROCw&oe=626076E4'
        },
        {
            nameFB : 'Trường Mai',
            name : 'truongmai1982',
            image : 'https://scontent.fsgn13-2.fna.fbcdn.net/v/t39.30808-1/274723232_2095406903969072_7504427080082865401_n.jpg?stp=dst-jpg_p320x320&_nc_cat=106&ccb=1-5&_nc_sid=7206a8&_nc_ohc=mF8bPnwU1TwAX_TZXOy&_nc_ht=scontent.fsgn13-2.fna&oh=00_AT_fPpbhcpaFDxDX31d_ZQp0YtkBgupf58VrAqWoqi8CnA&oe=6260E6D5'
        },
        {
            nameFB : 'Đức Hùng',
            name : 'hdhhung.73',
            image : 'https://scontent-sin6-4.xx.fbcdn.net/v/t1.6435-9/52696062_101541554333212_6443151805353295872_n.jpg?_nc_cat=103&ccb=1-5&_nc_sid=09cbfe&_nc_ohc=iVYxj2aTG4MAX9KnVR1&_nc_ht=scontent-sin6-4.xx&oh=00_AT91XhpTsxpNb7NguhkEdM6FjBuqzXxj45JWgs4OlLsxbQ&oe=627DBD8C'
        },
        {
            nameFB : 'Tường Vi',
            name : 'vituong.vi91',
            image : 'https://scontent-sin6-1.xx.fbcdn.net/v/t39.30808-6/272152926_1240913986401147_8867493523089750699_n.jpg?_nc_cat=111&ccb=1-5&_nc_sid=09cbfe&_nc_ohc=9Nz4bVKM5joAX8fhbRi&_nc_ht=scontent-sin6-1.xx&oh=00_AT_PmiSFopbNLfgeXZxQVCC1nETPN56gDmF5MNinf4vlsQ&oe=625C53AC'
        },
        {
            nameFB : 'Huy Huỳnh',
            name : 'hdh.huyyyy',
            image : 'https://scontent.fsgn4-1.fna.fbcdn.net/v/t39.30808-6/274876629_2826541607639210_363529317853290439_n.jpg?_nc_cat=101&ccb=1-5&_nc_sid=09cbfe&_nc_ohc=zhn6GxH97wsAX9igMrU&_nc_ht=scontent.fsgn4-1.fna&oh=00_AT8CV-QY77nPfLu8se8Ba5bfAa8KH96jrUmxQJa0CXTW2A&oe=625BCEB5'
        },
        {
            nameFB : 'Đức Hoan',
            name : 'hoanhd.2005',
            image : 'https://scontent.fsgn8-1.fna.fbcdn.net/v/t1.30497-1/143086968_2856368904622192_1959732218791162458_n.png?stp=cp0_dst-png_p80x80&_nc_cat=1&ccb=1-5&_nc_sid=7206a8&_nc_ohc=iuMIcxiCMkcAX_TVYh4&_nc_oc=AQnCMwFO0ikM1T3PNmT6hLfYsZgH-UFncWKfNhVaUwjq4DeJjL3Zz5o9N1VoxVT46V_F5s1RY-Ndwrkb3kv6fw1r&_nc_ht=scontent.fsgn8-1.fna&oh=00_AT8o3TOeWVcpPpS4Gy7NagZtopzLFPdCkkGCAzsGaaMdEQ&oe=627B5DF8'
        },
        {
            nameFB : 'Cẩm Vân',
            name : 'camvan77',
            image : 'https://scontent.fsgn13-2.fna.fbcdn.net/v/t39.30808-6/273154334_1123664431736763_6121942889354663811_n.jpg?_nc_cat=108&ccb=1-5&_nc_sid=09cbfe&_nc_ohc=BoFOVA5QuwIAX-KiXcQ&tn=98Qe8qL2dr5GlQT0&_nc_ht=scontent.fsgn13-2.fna&oh=00_AT8FeFwFTaLe6n_2eXdstYnWoCRVcEtpZZNsA2y4eGBazw&oe=625CDBAA'
        },
        {
            nameFB : 'Đức Trường',
            name : 'hdhtruong1985',
            image : 'https://scontent.fsgn4-1.fna.fbcdn.net/v/t39.30808-6/272991438_1571607939871527_6579089651911998367_n.jpg?_nc_cat=103&ccb=1-5&_nc_sid=09cbfe&_nc_ohc=0yrT4Ddm2MEAX-BaOkp&_nc_ht=scontent.fsgn4-1.fna&oh=00_AT_t-lukzFdRL8IOBAJ_ihyv62ElheSLCGkGcsXQtNP0cw&oe=625FA506'
        },
        {
            nameFB : 'Trường Sinh',
            name : 'truonsinh.ben',
            image : 'https://scontent.fsgn3-1.fna.fbcdn.net/v/t39.30808-1/185526923_1334442560290882_6475410094091613892_n.jpg?stp=dst-jpg_p320x320&_nc_cat=104&ccb=1-5&_nc_sid=7206a8&_nc_ohc=vh-1deZnVFMAX-CL9Rq&_nc_ht=scontent.fsgn3-1.fna&oh=00_AT-tUjdRuwBIzRTh5a6EpMZUvZ7ZX1DykLCmSP9J1TROCw&oe=626076E4'
        },
        {
            nameFB : 'Trường Mai',
            name : 'truongmai1982',
            image : 'https://scontent.fsgn13-2.fna.fbcdn.net/v/t39.30808-1/274723232_2095406903969072_7504427080082865401_n.jpg?stp=dst-jpg_p320x320&_nc_cat=106&ccb=1-5&_nc_sid=7206a8&_nc_ohc=mF8bPnwU1TwAX_TZXOy&_nc_ht=scontent.fsgn13-2.fna&oh=00_AT_fPpbhcpaFDxDX31d_ZQp0YtkBgupf58VrAqWoqi8CnA&oe=6260E6D5'
        },
        {
            nameFB : 'Đức Hùng',
            name : 'hdhhung.73',
            image : 'https://scontent-sin6-4.xx.fbcdn.net/v/t1.6435-9/52696062_101541554333212_6443151805353295872_n.jpg?_nc_cat=103&ccb=1-5&_nc_sid=09cbfe&_nc_ohc=iVYxj2aTG4MAX9KnVR1&_nc_ht=scontent-sin6-4.xx&oh=00_AT91XhpTsxpNb7NguhkEdM6FjBuqzXxj45JWgs4OlLsxbQ&oe=627DBD8C'
        },
        {
            nameFB : 'Tường Vi',
            name : 'vituong.vi91',
            image : 'https://scontent-sin6-1.xx.fbcdn.net/v/t39.30808-6/272152926_1240913986401147_8867493523089750699_n.jpg?_nc_cat=111&ccb=1-5&_nc_sid=09cbfe&_nc_ohc=9Nz4bVKM5joAX8fhbRi&_nc_ht=scontent-sin6-1.xx&oh=00_AT_PmiSFopbNLfgeXZxQVCC1nETPN56gDmF5MNinf4vlsQ&oe=625C53AC'
        },
        {
            nameFB : 'Huy Huỳnh',
            name : 'hdh.huyyyy',
            image : 'https://scontent.fsgn4-1.fna.fbcdn.net/v/t39.30808-6/274876629_2826541607639210_363529317853290439_n.jpg?_nc_cat=101&ccb=1-5&_nc_sid=09cbfe&_nc_ohc=zhn6GxH97wsAX9igMrU&_nc_ht=scontent.fsgn4-1.fna&oh=00_AT8CV-QY77nPfLu8se8Ba5bfAa8KH96jrUmxQJa0CXTW2A&oe=625BCEB5'
        },
        {
            nameFB : 'Đức Hoan',
            name : 'hoanhd.2005',
            image : 'https://scontent.fsgn8-1.fna.fbcdn.net/v/t1.30497-1/143086968_2856368904622192_1959732218791162458_n.png?stp=cp0_dst-png_p80x80&_nc_cat=1&ccb=1-5&_nc_sid=7206a8&_nc_ohc=iuMIcxiCMkcAX_TVYh4&_nc_oc=AQnCMwFO0ikM1T3PNmT6hLfYsZgH-UFncWKfNhVaUwjq4DeJjL3Zz5o9N1VoxVT46V_F5s1RY-Ndwrkb3kv6fw1r&_nc_ht=scontent.fsgn8-1.fna&oh=00_AT8o3TOeWVcpPpS4Gy7NagZtopzLFPdCkkGCAzsGaaMdEQ&oe=627B5DF8'
        },
        {
            nameFB : 'Cẩm Vân',
            name : 'camvan77',
            image : 'https://scontent.fsgn13-2.fna.fbcdn.net/v/t39.30808-6/273154334_1123664431736763_6121942889354663811_n.jpg?_nc_cat=108&ccb=1-5&_nc_sid=09cbfe&_nc_ohc=BoFOVA5QuwIAX-KiXcQ&tn=98Qe8qL2dr5GlQT0&_nc_ht=scontent.fsgn13-2.fna&oh=00_AT8FeFwFTaLe6n_2eXdstYnWoCRVcEtpZZNsA2y4eGBazw&oe=625CDBAA'
        }
    ]
    return(
        <View style = {styles.AudioScreen}>
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
                            <Text style = {styles.modalBottomTitleCopyLink}>Copy link</Text>
                            <Pressable onPress={() => {setModalEditVisible(!modalEditVisible)}}>
                                <Text style = {styles.modalBottomTitleClose}>Close</Text>
                            </Pressable>
                        </View>
                    </View>
                </View>
            </Modal>
            {/* Open Modal Send */}
            <Modal
                animationType="slide"
                transparent={true}
                visible={modalSendVisible}
                onRequestClose={() => {
                setModalVisible(!modalSendVisible);
                }}
            >
                <View style={styles.BottomSendView}>
                    <View style={styles.modalBottomSendView}>
                        <View style = {styles.modalBottomSendBoder}/>
                        {/* Action */}
                        <View style = {styles.modalBottomActionSend}>
                            <Image style = {styles.modalBottomActionImage} source={{uri : 'https://scontent.fsgn4-1.fna.fbcdn.net/v/t39.30808-6/274876629_2826541607639210_363529317853290439_n.jpg?_nc_cat=101&ccb=1-5&_nc_sid=09cbfe&_nc_ohc=zhn6GxH97wsAX9igMrU&_nc_ht=scontent.fsgn4-1.fna&oh=00_AT8CV-QY77nPfLu8se8Ba5bfAa8KH96jrUmxQJa0CXTW2A&oe=625BCEB5'}}/>
                            <TextInput style = {styles.modalBottomActionText} placeholder="Write a message..." placeholderTextColor="#8e8e8e"/>
                            <View style = {styles.modalBottomActionSendClose}>
                                <Pressable
                                    onPress={() => setModalSendVisible(!modalSendVisible)}
                                >
                                    <View style = {styles.modalBottomActionSendCloseIcon}>
                                        <AntDesign style = {styles.modalBottomActionSendCloseIconAction} name="close" size={20} color="white"/>
                                    </View>
                                </Pressable>
                            </View>
                        </View>
                        {/* Search */}
                        <View style = {styles.modalBottomSearch}>
                            <View style = {styles.modalBottomSearchView}>
                                <AntDesign style = {styles.modalBottomSearchIconAction} name="search1" size={20} color="#8e8e8e"/>
                                <TextInput style = {styles.modalBottomSearchText} placeholder="Search" placeholderTextColor="#8e8e8e"/>
                            </View>
                        </View>
                        <ScrollView showsVerticalScrollIndicator={false}>
                            {/* Add post to your story */}
                            <View style = {styles.modalBottomAddStory}>
                                <Image style = {styles.modalBottomAddStoryImage} source={{uri : 'https://scontent.fsgn4-1.fna.fbcdn.net/v/t39.30808-6/274876629_2826541607639210_363529317853290439_n.jpg?_nc_cat=101&ccb=1-5&_nc_sid=09cbfe&_nc_ohc=zhn6GxH97wsAX9igMrU&_nc_ht=scontent.fsgn4-1.fna&oh=00_AT8CV-QY77nPfLu8se8Ba5bfAa8KH96jrUmxQJa0CXTW2A&oe=625BCEB5'}}/>
                                <Text style = {styles.modalBottomAddStoryText}>Add post to your story</Text>
                            </View>
                            {/* Create group */}
                            <View style = {styles.modalBottomCreateGroup}>
                                <View style = {styles.modalBottomCreateGroupView}>
                                    <AntDesign style = {styles.modalBottomCreateGroupIconAction} name="addusergroup" size={25} color="#107ae4"/>
                                </View>
                                <Text style = {styles.modalBottomCreateGroupText}>Create group</Text>
                            </View>
                            {/* Send User */}
                            <View style = {{marginTop : '5%'}}>
                            {arraySendMessage.map(item => (
                                <View style = {styles.modalBottomSendUser}>
                                    <Image style = {styles.modalBottomSendUserImage} source={{uri : item.image}}/>
                                    <View style = {styles.modalBottomSendUserView}>
                                        <Text style = {styles.modalBottomSendUserNameFBText}>{item.nameFB}</Text>
                                        <Text style = {styles.modalBottomSendUserNameText}>{item.name}</Text>
                                    </View>
                                    <View style = {styles.modalBottomSendUserAction}>
                                        <Text style = {styles.modalBottomSendUserActionText}>Send</Text>
                                    </View>
                                </View>
                            ))}
                            </View>
                        </ScrollView>
                    </View>
                </View>
            </Modal>
            {/* Header Audio */}
            <View style = {styles.HeaderAudio}>
                <AntDesign name = "arrowleft" size={25} color = "rgb(248, 248, 242)" style ={styles.IconBack} onPress = {() =>{navigation.goBack()}}/>
                <Text style = {styles.textAudio}>Audio</Text>
                <Feather name = "send" size={25} color = "rgb(248, 248, 242)" style ={styles.IconSend} onPress = {() => {setModalSendVisible(true)}}/>
                <Ionicons name = "ellipsis-vertical" size={25} color = "rgb(248, 248, 242)" style ={styles.IconMore} onPress = {() => {setModalEditVisible(true)}}/>
            </View>
            <ScrollView style = {{backgroundColor :'black'}} showsVerticalScrollIndicator={false}>
                {/* Infor Audio */}
                <View style = {styles.AudioBodyInfor}>
                    <Image source={{uri : 'https://yt3.ggpht.com/nlDWgA4uOTybHKrOZ6wC-Vf2m1mEg9NFJqfFkDMhRVTOZVmFncgLyMAmHU2DXqdPmIOTysDi=s88-c-k-c0x00ffffff-no-nd-rj'}} style = {styles.AvartarAudio}/>
                    <View style = {styles.AudioInfor}>
                        <Text style = {styles.NameAudio}>Bước qua mùa cô đơn</Text>
                        <View style = {styles.ActorAudio}>
                            <Image source={{uri : 'https://yt3.ggpht.com/nlDWgA4uOTybHKrOZ6wC-Vf2m1mEg9NFJqfFkDMhRVTOZVmFncgLyMAmHU2DXqdPmIOTysDi=s88-c-k-c0x00ffffff-no-nd-rj'}} style = {styles.AvartarActor}/>
                            <Text style = {styles.TextActorAudio}>Vũ</Text>
                        </View>
                        <Text style = {styles.ViewAudio}>10M reels</Text>
                    </View>
                </View>
                {/* Save Audio */}
                <View style = {styles.SaveAudio}>
                    <Text style = {styles.TextSaveAudio}>Save audio</Text>
                </View>
                {/* Suggest Audio */}
                <View style = {styles.SuggestAudio}>
                    {arrayImage.map(item => (
                        <View style={styles.ListPhoto}>
                            <View style = {{width : '33.33333%', marginLeft : '1%', marginTop : '1%'}}>
                                <Pressable onPress={() => navigation.navigate('Shortcut')}>
                                    <Image source={{uri : item.video1.image}} style = {styles.ImageShow}/>
                                    <View style = {styles.ViewImage}>
                                        <Ionicons name = "play-outline" size={17} color = "rgb(248, 248, 242)" style ={styles.IconPlay} />
                                        <Text style = {styles.TextViewImage}>{item.video1.view}</Text>
                                    </View>
                                </Pressable>
                            </View>
                            <View style = {{width : '33.33333%', marginLeft : '1%', marginTop : '1%'}}>
                                <Pressable onPress={() => navigation.navigate('Shortcut')}>
                                    <Image source={{uri : item.video2.image}} style = {styles.ImageShow}/>
                                    <View style = {styles.ViewImage}>
                                        <Ionicons name = "play-outline" size={17} color = "rgb(248, 248, 242)" style ={styles.IconPlay} />
                                        <Text style = {styles.TextViewImage}>{item.video2.view}</Text>
                                    </View>
                                </Pressable>
                            </View>
                            <View style = {{width : '33.33333%', marginLeft : '1%', marginTop : '1%'}}>
                                <Pressable onPress={() => navigation.navigate('Shortcut')}>
                                    <Image source={{uri : item.video3.image}} style = {styles.ImageShow}/>
                                    <View style = {styles.ViewImage}>
                                        <Ionicons name = "play-outline" size={17} color = "rgb(248, 248, 242)" style ={styles.IconPlay} />
                                        <Text style = {styles.TextViewImage}>{item.video3.view}</Text>
                                    </View>
                                </Pressable>
                            </View>
                        </View>
                    ))}
                </View>
            </ScrollView>
            {/* Use Audio */}
            <View style = {styles.UseAudio}>
                <Feather name = "camera" size={20} color = "rgb(248, 248, 242)" style ={styles.IconUseAudio} />
            </View>
        </View>
    )
};
const styles = StyleSheet.create({
    AudioScreen: {
        flex: 1,
        backgroundColor: 'black',
    },
    HeaderAudio: {
        flexDirection: 'row',
        height: 50,
    },
    textAudio: {
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
    IconSend: {
        marginTop : '2%',
        marginLeft : '50%',
    },
    IconMore: {
        marginTop : '2%',
        marginLeft : '5%',
    },
    AudioBodyInfor: {
        flexDirection: 'row',
        marginLeft: '5%',
        marginTop: '5%',
    },
    AvartarAudio: {
        width : 80,
        height : 80,
        borderRadius: 10,
    },
    AudioInfor: {
        width : '70%',
        marginLeft : '5%',
    },
    NameAudio: {
        fontSize: 18,
        color: 'white',
        fontWeight: 'bold',
    },
    ActorAudio: {
        marginTop: '2%',
        flexDirection: 'row',
    },
    AvartarActor: {
        width : 25,
        height : 25,
        borderRadius: 25/2,
    },
    TextActorAudio: {
        fontSize: 18,
        color: 'white',
        marginLeft: '3%',
    },
    ViewAudio: {
        fontSize: 18,
        color: '#8e8e8e',
        marginTop: '2%',
    },
    SaveAudio: {
        marginTop: '5%',
        marginLeft: '5%',
        marginRight: '5%',
        borderRadius: 5,
        borderWidth: 1,
        borderColor: '#8e8e8e',
    },
    TextSaveAudio: {
        fontSize: 18,
        color: 'white',
        textAlign: 'center',
        marginBottom: '1%',
    },
    UseAudio: {
        position: 'absolute',
        bottom: '10%',
        right: '45%',
        width: 40,
        height: 40,
        borderRadius: 40/2,
        backgroundColor: 'black',
    },
    IconUseAudio: {
        alignSelf: 'center',
        marginTop: '25%',
    },
    SuggestAudio: {
        marginTop: '5%',
    },
    ListPhoto: {
        flexDirection : 'row',
        marginTop : '1%',
        marginLeft: '1%',
    },
    ImageShow: {
        width : '100%',
        height : 200,
    },
    ViewImage: {
        flexDirection: 'row',
        marginTop: -23,
        marginLeft: '5%',
    },
    TextViewImage: {
        color: 'white',
        fontWeight: 'bold',
        marginLeft: '2%',
    },
    IconPlay: {
    },
    BottomSendView : {
        top: '20%', 
    },
    modalBottomActionSend : {
        flexDirection : 'row',
        marginTop : '3%',
        borderBottomColor: "#8e8e8e",
        borderBottomWidth: 1,
    },
    modalBottomActionReel : {
        width : '30%',
        marginLeft : '35%',
        color : 'white',
        fontSize : 20,
        marginBottom : '3%',
    },
    modalBottomSendView: {
        backgroundColor: "#272c33",
        borderRadius: 20,
        height : '90%',
    },
    modalBottomSendBoder: {
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
    modalBottomActionImage : {
        width : 45,
        height : 45,
        borderRadius: 5,
        marginLeft : '5%',
        marginTop : '2%',
    },
    modalBottomActionText : {
        color : 'white',
        fontSize : 15,
        marginLeft : '2%',
        width : '65%',
        marginTop : '2%',
    },
    modalBottomActionSendClose : {
        marginLeft : '2%',
        marginTop : '3%',
        marginBottom : '3%',
    },
    modalBottomActionSendCloseIcon : {
        width : 40,
        height : 40,
        borderRadius: 40/2,
        borderWidth: 2,
        borderColor: '#8e8e8e',
    },
    modalBottomActionSendCloseIconAction : {
        marginLeft : '24%',
        marginTop : '24%',
    },
    modalBottomSearch: {
        backgroundColor: "#303846",
        borderRadius: 10,
        width : '90%',
        height : 35,
        marginTop : '3%',
        marginLeft : '5%',
        marginBottom : '3%',

    },
    modalBottomSearchView: {
        flexDirection : 'row',
    },
    modalBottomSearchIconAction: {
        marginLeft : '5%',
        marginTop : '2%',
    },
    modalBottomSearchText: {
        color : 'white',
        fontSize : 13,
        marginLeft : '2%',
    },
    modalBottomAddStory: {
        flexDirection : 'row',
        marginTop : '3%',
        marginLeft : '5%',
    },
    modalBottomAddStoryImage: {
        width : 45,
        height : 45,
        borderRadius: 45/2,
    },
    modalBottomAddStoryText: {
        color : '#127dbc',
        fontSize : 15,
        marginLeft : '5%',
        marginTop : '4%',
    },
    modalBottomCreateGroup: {
        flexDirection : 'row',
        marginTop : '3%',
        marginLeft : '5%',
    },
    modalBottomCreateGroupView : {
        width : 45,
        height : 45,
        borderRadius: 45/2,
        borderWidth: 2,
        borderColor: '#107ae4',
    },
    modalBottomCreateGroupIconAction : {
        marginLeft : '20%',
        marginTop : '20%',
    },
    modalBottomCreateGroupText: {
        color : 'white',
        fontSize : 17,
        marginLeft : '5%',
        marginTop : '4%',
        fontWeight : 'bold',
    },
    modalBottomSendUser : {
        flexDirection : 'row',
        marginLeft : '5%',
        marginBottom : '5%',
    },
    modalBottomSendUserView : {
        marginLeft : '5%',
        marginTop : '1%',
        width : '60%'
    },
    modalBottomSendUserImage: {
        width : 45,
        height : 45,
        borderRadius: 45/2,
    },
    modalBottomSendUserNameFBText: {
        color : 'white',
        fontSize : 15,
    },
    modalBottomSendUserNameText : {
        color : '#8e8e8e',
        fontSize : 15,
    },
    modalBottomSendUserAction : {
        backgroundColor: "#107ae4",
        borderRadius: 5,
        width : 70,
        height : 30,
        marginTop : '3%',
    },
    modalBottomSendUserActionText : {
        color : 'white',
        textAlign : 'center',
        fontSize : 16,
        marginTop : '5%',
        fontWeight : 'bold',
    },
    BottomView : {
        top: '80%', 
    },
    modalBottomView: {
        backgroundColor: "#272c33",
        borderRadius: 20,
        height : 160,
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
    modalBottomTitleCopyLink: {
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