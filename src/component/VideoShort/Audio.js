import React from "react";
import MaterialIcons from "react-native-vector-icons/MaterialIcons";
import MaterialCommunityIcons from "react-native-vector-icons/MaterialCommunityIcons";
import FontAwesome from "react-native-vector-icons/FontAwesome";
import Feather from "react-native-vector-icons/Feather";
import Ionicons from "react-native-vector-icons/Ionicons";
import AntDesign from "react-native-vector-icons/AntDesign";
import { Text,Button, View, StyleSheet, TextInput,Image,ScrollView,Pressable,ImageBackground} from 'react-native';
import Video from 'react-native-video';
import { useNavigation } from "@react-navigation/native";
export default function Audios(){
    const navigation = useNavigation();
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
    return(
        <View style = {styles.AudioScreen}>
            {/* Header Audio */}
            <View style = {styles.HeaderAudio}>
                <AntDesign name = "arrowleft" size={25} color = "rgb(248, 248, 242)" style ={styles.IconBack} onPress = {() =>{navigation.goBack()}}/>
                <Text style = {styles.textAudio}>Audio</Text>
                <Feather name = "send" size={25} color = "rgb(248, 248, 242)" style ={styles.IconSend} />
                <Ionicons name = "ellipsis-vertical" size={25} color = "rgb(248, 248, 242)" style ={styles.IconMore} />
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
    }
});