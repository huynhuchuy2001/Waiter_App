import React,{useState} from 'react';
import AntDesign from 'react-native-vector-icons/AntDesign';
import Entypo from 'react-native-vector-icons/Entypo';
import { Text, View, StyleSheet, Pressable, TextInput ,Image,Switch} from 'react-native';
import { useNavigation } from '@react-navigation/native';
export default function ReviewActivity() {
    const navigation = useNavigation();
    return( 
        <View style = {styles.ReviewActivity}>
            <View style = {styles.HeaderReviewActivity}>
                <AntDesign name = "arrowleft" size={25} color = "rgb(248, 248, 242)" style ={styles.IconBack} onPress = {(e) =>{navigation.goBack()}}></AntDesign>
                <Text style = {styles.textReviewActivity}>Review activity</Text>
            </View>
            {/* Star */}
            <View style = {styles.Star}> 
                <AntDesign name = "staro" size={55} color = "rgb(248, 248, 242)" style ={styles.IconStar}></AntDesign>
            </View>
            {/* Text */}
            <Text style = {styles.TextReview}>No reviews</Text>
            <Text style = {styles.TextTitleReview}>Your reviews will appear here once they're created.</Text>
        </View>
    );
}
const styles = StyleSheet.create({
    ReviewActivity: {
        flex: 1,
        backgroundColor: 'black',
    },
    HeaderReviewActivity: {
        flexDirection: 'row',
        marginTop : '2%',
        marginLeft : '2%',
    },
    textReviewActivity: {
        color : 'white',
        fontSize : 22,
        fontWeight : 'bold',
        marginLeft : '5%',
    },
    IconBack: {
        marginTop : '1%',
        marginLeft : '2%',
    },
    Star: {
        width : 100,
        height : 100,
        marginTop : '75%',
        marginLeft : '37%',
        borderRadius : 50,
        borderColor : 'white',
        borderWidth : 2,
    },
    IconStar: {
        marginTop : '20%',
        marginLeft : '20%',
    },
    TextReview: {
        color : 'white',
        fontSize : 20,
        fontWeight : 'bold',
        textAlign : 'center',
        marginTop : '3%',
    },
    TextTitleReview: {
        color : '#8e8e8e',
        fontSize : 18,
        textAlign : 'center',
        marginTop : '3%',
    }
});