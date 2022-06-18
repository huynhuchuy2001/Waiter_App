import React,{useState} from 'react';
import AntDesign from 'react-native-vector-icons/AntDesign';
import Entypo from 'react-native-vector-icons/Entypo';
import Ionicons from "react-native-vector-icons/Ionicons";
import { Text, View, StyleSheet, Pressable, TextInput,Modal, Image,ScrollView } from 'react-native';
import { useNavigation } from '@react-navigation/native';
export default function ArchiveStory() {
    const navigation = useNavigation();
    const [modalVisible, setModalVisible] = useState(false);
    const [modalVisibledown, setModalVisibledown] = useState(false);
    var arrayImage = [
        {
            video1 : {
                image : 'https://i.ytimg.com/vi/rIXhXaQ8tiM/hqdefault.jpg?sqp=-oaymwEcCNACELwBSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLAN7h0atu3ZKCfP5T_sVlKgADI6Mw',
                date : '18',
                month : 'Jan',
            },
            video2 : {
                image : 'https://i.ytimg.com/vi/eZpJdO22jZ0/hqdefault.jpg?sqp=-oaymwEcCNACELwBSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLDsnk5Fzfo3N11Z1wN_iHgrfMHaDA',
                date : '12',
                month : 'June',
            },
            video3 : {
                image : 'https://i.ytimg.com/vi/HXkh7EOqcQ4/hqdefault.jpg?sqp=-oaymwEcCNACELwBSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLAiJoi-mfra-xzhz8_pw9MUyZyKCA',
                date : '4',
                month : 'July',
            }
        },
        {
            video1 : {
                image : 'https://i.ytimg.com/vi/vYLYQY5dMiw/hqdefault.jpg?sqp=-oaymwEjCNACELwBSFryq4qpAxUIARUAAAAAGAElAADIQj0AgKJDeAE=&rs=AOn4CLBsgRQwKlgDTtXAex2ZxkL6VVi5bQ',
                date : '9',
                month : 'Jan',
            },
            video2 : {
                image : 'https://i.ytimg.com/vi/FUHizjWRd48/hqdefault.jpg?sqp=-oaymwEcCNACELwBSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLB6A8OjOXLJws7DL-bXHj0NIOlDsw',
                date : '15',
                month : 'June',
            },
            video3 : {
                image : 'https://i.ytimg.com/vi/PKqP8NkOMHo/hqdefault.jpg?sqp=-oaymwEjCNACELwBSFryq4qpAxUIARUAAAAAGAElAADIQj0AgKJDeAE=&rs=AOn4CLDOKirHJnxYV4WBoarWzjiGio7f_Q',
                date : '15',
                month : 'July',
            }

        },
        {
            video1 : {
                image : 'https://i.ytimg.com/vi/IGJmFQyMnC8/hqdefault.jpg?sqp=-oaymwEjCNACELwBSFryq4qpAxUIARUAAAAAGAElAADIQj0AgKJDeAE=&rs=AOn4CLCzwSief82WQqiq_LHBFRNI8Afyfg',
                date : '5k',
                month : 'Jan',
            },
            video2 : {
                image : 'https://i.ytimg.com/vi/DZDYZ9nRHfU/hqdefault.jpg?sqp=-oaymwEcCNACELwBSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLBXmoIBLr3oUfCzSIjLG9IYAoOnXw',
                date : '10k',
                month : 'June',
            },
            video3 : {
                image : 'https://i.ytimg.com/vi/BMtaUb-E5Uc/hqdefault.jpg?sqp=-oaymwEjCNACELwBSFryq4qpAxUIARUAAAAAGAElAADIQj0AgKJDeAE=&rs=AOn4CLCYv4FAGKxvMgD3tLrhGhn0yRkcZw',
                date : '15',
                month : 'July',
            }
        },
        {
            video1 : {
                image : 'https://i.ytimg.com/vi/rIXhXaQ8tiM/hqdefault.jpg?sqp=-oaymwEcCNACELwBSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLAN7h0atu3ZKCfP5T_sVlKgADI6Mw',
                date : '12',
                month : 'Jan',
            },
            video2 : {
                image : 'https://i.ytimg.com/vi/eZpJdO22jZ0/hqdefault.jpg?sqp=-oaymwEcCNACELwBSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLDsnk5Fzfo3N11Z1wN_iHgrfMHaDA',
                date : '10',
                month : 'June',
            },
            video3 : {
                image : 'https://i.ytimg.com/vi/HXkh7EOqcQ4/hqdefault.jpg?sqp=-oaymwEcCNACELwBSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLAiJoi-mfra-xzhz8_pw9MUyZyKCA',
                date : '4',
                month : 'July',
            }
        },
    ];
    return( 
        <View style = {styles.ArchiveStory}>
            <Modal
                animationType="slide"
                transparent={true}
                visible={modalVisibledown}
                onRequestClose={() => {
                setModalVisibledown(!modalVisibledown);
                }}
            >
                <View style={styles.BottomViewCreate}>
                    <View style={styles.modalBottomViewCreate}>
                        <View style = {styles.modalBottomBoder}/>
                        <View style = {styles.modalBottomTitle}>
                            <Text style = {styles.modalBottomStories}>Stories archive</Text>
                            <Text style = {styles.modalBottomPost}>Post archive</Text>
                            <Text style = {styles.modalBottomLive}>Live archive</Text>
                            <Pressable onPress={() => {setModalVisibledown(!modalVisibledown)}}>
                                <Text style = {styles.modalBottomTitleClose}>Close</Text>
                            </Pressable>
                        </View>
                    </View>
                </View>
            </Modal>
            <Modal
                animationType="slide"
                transparent={true}
                visible={modalVisible}
                onRequestClose={() => {
                setModalVisible(!modalVisible);
                }}
            >
                <View style={styles.BottomViewCreate}>
                    <View style={styles.modalBottomViewCreate}>
                        <View style = {styles.modalBottomBoder}/>
                        <View style = {styles.modalBottomTitle}>
                            <View style = {{borderBottomColor : '#8e8e8e', borderBottomWidth : 1}}>
                                <Text style = {styles.modalBottomMore}>More options</Text>
                            </View>
                            <Text style = {styles.modalBottomHighlight}>Create highlight</Text>
                            <Text style = {styles.modalBottomSettings}>Settings</Text>
                            <Pressable onPress={() => {setModalVisible(!modalVisible)}}>
                                <Text style = {styles.modalBottomTitleClose}>Close</Text>
                            </Pressable>
                        </View>
                    </View>
                </View>
            </Modal>
            <View style = {styles.HeaderArchiveStory}>
                <AntDesign name = "arrowleft" size={30} color = "rgb(248, 248, 242)" style ={styles.IconBack} onPress = {() =>{navigation.goBack()}}></AntDesign>
                <Text style = {styles.textArchiveStory}>Stories archive</Text>
                <AntDesign name = "down" size={15} color = "rgb(248, 248, 242)" style ={styles.IconDown} onPress = {() => {setModalVisibledown(true)}}></AntDesign>
                <Entypo name = "dots-three-vertical" size={20} color = "rgb(248, 248, 242)" style ={styles.IconDots} onPress = {() =>{setModalVisible(true)}}></Entypo>
            </View>
            <View style = {styles.ActionsArchiveStory}>
                <Entypo name = "circular-graph" size={25} color = "rgb(248, 248, 242)" style ={styles.IconStory}></Entypo>
                <AntDesign name = "calendar" size={25} color = "rgb(248, 248, 242)" style ={styles.IconCalendar}></AntDesign>
                <Entypo name = "location" size={25} color = "rgb(248, 248, 242)" style ={styles.IconLocation}></Entypo>
            </View>
            <ScrollView style = {{backgroundColor :'black'}} showsVerticalScrollIndicator={false}>
                {/* Suggest Audio */}
                <View style = {styles.StoriesArchive}>
                    {arrayImage.map(item => (
                        <View style={styles.ListPhoto}>
                            <View style = {{width : '33.33333%', marginLeft : '1%', marginTop : '1%'}}>
                                    <Image source={{uri : item.video1.image}} style = {styles.ImageShow}/>
                                    <View style = {styles.ViewTime}>
                                        <Text style = {styles.TextDate}>{item.video1.date}</Text>
                                        <Text style = {styles.TextMonth}>{item.video1.month}</Text>
                                    </View>
                            </View>
                            <View style = {{width : '33.33333%', marginLeft : '1%', marginTop : '1%'}}>
                                    <Image source={{uri : item.video2.image}} style = {styles.ImageShow}/>
                                    <View style = {styles.ViewTime}>
                                        <Text style = {styles.TextDate}>{item.video2.date}</Text>
                                        <Text style = {styles.TextMonth}>{item.video2.month}</Text>
                                    </View>
                            </View>
                            <View style = {{width : '33.33333%', marginLeft : '1%', marginTop : '1%'}}>
                                    <Image source={{uri : item.video3.image}} style = {styles.ImageShow}/>
                                    <View style = {styles.ViewTime}>
                                        <Text style = {styles.TextDate}>{item.video3.date}</Text>
                                        <Text style = {styles.TextMonth}>{item.video3.month}</Text>
                                    </View>
                            </View>
                        </View>
                    ))}
                </View>
                <Text style = {styles.TextMore}>Only you can see your memories and archived stories unless you choose to share them.</Text>
            </ScrollView>
        </View>
    );
}
const styles = StyleSheet.create({
    ArchiveStory: {
        flex: 1,
        backgroundColor: 'black',
    },
    HeaderArchiveStory: {
        flexDirection : 'row',
        height : 40,
        marginTop : '2%',
    },
    IconBack: {
        marginLeft : '2%',
        marginTop : '1%',
    },
    textArchiveStory: {
        fontSize : 22,
        color : 'white',
        fontWeight : 'bold',
        marginLeft : '10%',
        marginTop : '1%',
    },
    ArchiveStoryAction: {
        flexDirection : 'row',  
        marginTop : '5%',
        marginLeft : '4%',
    },
    textArchiveStoryAction: {
        width : '80%',
        fontSize : 18,
        color : 'white',
    },
    IconRight: {
        marginLeft : '10%',
        marginTop : '1%',
    },
    IconDown: {
        marginLeft : '2%',
        marginTop : '3%',
    },
    IconDots: {
        marginLeft : '28%',
        marginTop : '3%',
    },
    BottomViewCreate : {
        top: '73%', 
    },
    modalBottomViewCreate: {
        backgroundColor: "#272c33",
        borderRadius: 20,
        height : 220,
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
    },
    modalBottomMore : {
        color : 'white',
        fontSize : 20,
        marginLeft : '5%',
        marginTop : '1%',
        marginBottom : '2%',
    },
    modalBottomHighlight: {
        marginTop : '4%',
        color : 'white',
        fontSize : 20,
        marginLeft : '5%',
    },
    modalBottomSettings : {
        marginTop : '4%',
        color : 'white',
        fontSize : 20,
        marginLeft : '5%',
    },
    modalBottomTitleClose : {
        marginTop : '4%',
        color : 'white',
        fontSize : 20,
        marginLeft : '5%',
    },
    modalBottomStories : {
        color : 'white',
        fontSize : 20,
        marginLeft : '5%',
        marginTop : '1%',
    },
    modalBottomPost : {
        marginTop : '5%',
        color : 'white',
        fontSize : 20,
        marginLeft : '5%',
    },
    modalBottomLive : {
        marginTop : '5%',
        color : 'white',
        fontSize : 20,
        marginLeft : '5%',
    },
    ActionsArchiveStory : {
        flexDirection : 'row',
        marginTop : '5%',
        borderBottomColor : '#8e8e8e',
        borderBottomWidth : 1,
        marginLeft : '2%',
    },
    IconStory : {
        width : '30%',
        marginLeft : '18%',
        marginBottom : '3%',
    },
    IconCalendar : {
        width : '30%',
    },
    StoriesArchive: {
    },
    ListPhoto: {
        flexDirection : 'row',
        marginLeft: '1%',
        marginTop : '1%',
    },
    ImageShow: {
        width : '100%',
        height : 200,
    },
    TextViewImage: {
        color: 'white',
        fontWeight: 'bold',
        marginLeft: '2%',
    },
    TextMore: {
        textAlign: 'center',
        color: '#8e8e8e',
        fontSize: 15,
        marginLeft: '2%',
        marginTop: '3%',
    },
    ViewTime: {
        backgroundColor: 'black',
        borderRadius: 8,
        width: 40,
        height: 40,
        marginTop: -45,
        marginLeft: '5%',
    },
    TextDate: {
        color: 'white',
        fontSize: 12,
        textAlign: 'center',
        marginTop: '5%',
        fontWeight: 'bold',
    },
    TextMonth: {
        color: 'white',
        fontSize: 12,
        textAlign: 'center',
        fontWeight: 'bold',
    },
});