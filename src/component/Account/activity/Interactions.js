import * as React from 'react';
import AntDesign from 'react-native-vector-icons/AntDesign';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import Entypo from 'react-native-vector-icons/Entypo';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import { Text, View, StyleSheet, Pressable,ScrollView} from 'react-native';
import { useNavigation } from '@react-navigation/native';
export default function Interactions() {
    const navigation = useNavigation();
    return( 
        <View style = {styles.Interactions}>
            <View style = {styles.HeaderInteractions}>
                <AntDesign name = "arrowleft" size={30} color = "rgb(248, 248, 242)" style ={styles.IconBack} onPress = {(e) =>{navigation.goBack()}}></AntDesign>
                <Text style = {styles.textInteractions}>Interactions</Text>
            </View>
            {/* Comments */}
            <Pressable style = {styles.Comments}>
                <FontAwesome name = "comment-o" size={25} color = "rgb(248, 248, 242)" style ={styles.IconComments}/>
                <Text style = {styles.textComments}>Comments</Text>
                <AntDesign name = "right" size={15} color = "#8e8e8e" style ={styles.IconRight}/>
            </Pressable>
            {/* Likes */}
            <Pressable style = {styles.Likes}>
                <AntDesign name = "hearto" size={25} color = "rgb(248, 248, 242)" style ={styles.IconLikes}/>
                <Text style = {styles.textLikes}>Likes</Text>
                <AntDesign name = "right" size={15} color = "#8e8e8e" style ={styles.IconRight}/>
            </Pressable>
            {/* Story Reply */}
            <Pressable style = {styles.StoryReply}>
                <AntDesign name = "back" size={25} color = "rgb(248, 248, 242)" style ={styles.IconStoryReply}/>
                <Text style = {styles.textStoryReply}>Story replies</Text>
                <AntDesign name = "right" size={15} color = "#8e8e8e" style ={styles.IconRight}/>
            </Pressable>
            {/* Reviews */}
            <Pressable style = {styles.Reviews}>
                <MaterialCommunityIcons name = "tag-heart-outline" size={25} color = "rgb(248, 248, 242)" style ={styles.IconReviews}/>
                <Text style = {styles.textReviews}>Reviews</Text>
                <AntDesign name = "right" size={15} color = "#8e8e8e" style ={styles.IconRight}/>
            </Pressable>

        </View>
    );
}
const styles = StyleSheet.create({
    Interactions: {
        flex: 1,
        backgroundColor: 'black',
    },
    HeaderInteractions: {
        flexDirection : 'row',
        height : 40,
        marginTop : '2%',
    },
    IconBack: {
        marginLeft : '2%',
    },
    textInteractions: {
        color : 'white',
        fontSize : 22,
        fontWeight : 'bold',
        marginLeft : '10%',
    },
    Comments: {
        flexDirection : 'row',
        marginTop : '5%',
    },
    IconComments: {
        marginLeft : '5%',
    },
    textComments: {
        width : '70%',
        color : 'white',
        fontSize : 18,
        marginLeft : '10%',
    },
    IconRight: {
        marginTop : '2%',
    },
    Likes: {
        flexDirection : 'row',
        marginTop : '5%',
    },
    IconLikes: {
        marginLeft : '5%',
    },
    textLikes: {
        width : '70%',
        color : 'white',
        fontSize : 18,
        marginLeft : '10%',
    },
    IconRight: {
        marginTop : '2%',
    },
    StoryReply: {
        flexDirection : 'row',
        marginTop : '5%',
    },
    IconStoryReply: {
        marginLeft : '5%',
    },
    textStoryReply: {
        width : '70%',
        color : 'white',
        fontSize : 18,
        marginLeft : '10%',
    },
    Reviews: {
        flexDirection : 'row',
        marginTop : '5%',
    },
    IconReviews: {
        marginLeft : '5%',
    },
    textReviews: {
        width : '70%',
        color : 'white',
        fontSize : 18,
        marginLeft : '10%',
    }

});