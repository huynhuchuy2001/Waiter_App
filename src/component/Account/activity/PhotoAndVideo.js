import * as React from 'react';
import AntDesign from 'react-native-vector-icons/AntDesign';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import Entypo from 'react-native-vector-icons/Entypo';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import { Text, View, StyleSheet, Pressable,ScrollView} from 'react-native';
import { useNavigation } from '@react-navigation/native';
export default function PhotoAndVideo() {
    const navigation = useNavigation();
    return( 
        <View style = {styles.PhotoAndVideo}>
            <View style = {styles.HeaderPhotoAndVideo}>
                <AntDesign name = "arrowleft" size={30} color = "rgb(248, 248, 242)" style ={styles.IconBack} onPress = {(e) =>{navigation.goBack()}}></AntDesign>
                <Text style = {styles.textPhotoAndVideo}>Photos and videos</Text>
            </View>
            {/* Post */}
            <Pressable style = {styles.Post}>
                <FontAwesome name = "table" size={25} color = "rgb(248, 248, 242)" style ={styles.IconPost}/>
                <Text style = {styles.textPost}>Posts</Text>
                <AntDesign name = "right" size={15} color = "#8e8e8e" style ={styles.IconRight}/>
            </Pressable>
            {/* Reels */}
            <Pressable style = {styles.Reels}>
                <Entypo name = "video" size={25} color = "rgb(248, 248, 242)" style ={styles.IconReels}/>
                <Text style = {styles.textReels}>Reels</Text>
                <AntDesign name = "right" size={15} color = "#8e8e8e" style ={styles.IconRight}/>
            </Pressable>
            {/* Videos */}
            <Pressable style = {styles.Videos}>
                <Entypo name = "video-camera" size={25} color = "rgb(248, 248, 242)" style ={styles.IconVideos}/>
                <Text style = {styles.textVideos}>Videos</Text>
                <AntDesign name = "right" size={15} color = "#8e8e8e" style ={styles.IconRight}/>
            </Pressable>
            {/* Highlights */}
            <Pressable style = {styles.Highlights}>
                <MaterialCommunityIcons name = "progress-wrench" size={27} color = "rgb(248, 248, 242)" style ={styles.IconHighlights}/>
                <Text style = {styles.textHighlights}>Highlights</Text>
                <AntDesign name = "right" size={15} color = "#8e8e8e" style ={styles.IconRight}/>
            </Pressable>

        </View>
    );
}
const styles = StyleSheet.create({
    PhotoAndVideo: {
        flex: 1,
        backgroundColor: 'black',
    },
    HeaderPhotoAndVideo: {
        flexDirection : 'row',
        height : 40,
        marginTop : '2%',
    },
    IconBack: {
        marginLeft : '2%',
    },
    textPhotoAndVideo: {
        color : 'white',
        fontSize : 22,
        fontWeight : 'bold',
        marginLeft : '10%',
    },
    Post: {
        flexDirection : 'row',
        marginTop : '5%',
    },
    IconPost: {
        marginLeft : '5%',
    },
    textPost: {
        width : '70%',
        color : 'white',
        fontSize : 18,
        marginLeft : '10%',
    },
    IconRight: {
        marginTop : '2%',
    },
    Reels: {
        flexDirection : 'row',
        marginTop : '5%',
    },
    IconReels: {
        marginLeft : '5%',
    },
    textReels: {
        width : '70%',
        color : 'white',
        fontSize : 18,
        marginLeft : '10%',
    },
    IconRight: {
        marginTop : '2%',
    },
    Videos: {
        flexDirection : 'row',
        marginTop : '5%',
    },
    IconVideos: {
        marginLeft : '5%',
    },
    textVideos: {
        width : '70%',
        color : 'white',
        fontSize : 18,
        marginLeft : '10%',
    },
    Highlights: {
        flexDirection : 'row',
        marginTop : '5%',
    },
    IconHighlights: {
        marginLeft : '5%',
    },
    textHighlights: {
        width : '70%',
        color : 'white',
        fontSize : 18,
        marginLeft : '10%',
    }

});