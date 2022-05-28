import React,{useState} from 'react';
import AntDesign from 'react-native-vector-icons/AntDesign';
import Entypo from 'react-native-vector-icons/Entypo';
import { Text, View, StyleSheet, Pressable, TextInput ,Image} from 'react-native';
import { useNavigation } from '@react-navigation/native';
export default function AccountStatus() {
    const navigation = useNavigation();
    return( 
        <View style = {styles.AccountStatus}>
            <View style = {styles.HeaderAccountStatus}>
                <AntDesign name = "arrowleft" size={25} color = "rgb(248, 248, 242)" style ={styles.IconBack} onPress = {(e) =>{navigation.goBack()}}></AntDesign>
                <Text style = {styles.textAccountStatus}>Account Status</Text>
                <AntDesign name = "infocirlceo" size={25} color = "rgb(248, 248, 242)" style ={{marginLeft : '37%', marginTop : '1%'}} onPress = {(e) =>{navigation.navigate('AccountStatusEdit')}}></AntDesign>
            </View>
            <View style = {{borderBottomColor: '#8e8e8e', borderBottomWidth :1}}>
                <Image source={{uri : 'https://scontent.fsgn4-1.fna.fbcdn.net/v/t39.30808-6/274876629_2826541607639210_363529317853290439_n.jpg?_nc_cat=101&ccb=1-5&_nc_sid=09cbfe&_nc_ohc=zhn6GxH97wsAX9igMrU&_nc_ht=scontent.fsgn4-1.fna&oh=00_AT8CV-QY77nPfLu8se8Ba5bfAa8KH96jrUmxQJa0CXTW2A&oe=625BCEB5'}} style = {styles.ProfileImage}/>
                <Text style = {styles.textTitle}>You haven't posted anything that is affecting your account status</Text>
                <Text style = {styles.textMore}>Thank you for following our <Text style = {styles.Community}>Community Guidelines.</Text></Text>
            </View>
            <View style = {styles.AccountStatusQuestions}>
                <Text style = {styles.textAccountStatusQuestions}>What is Account Status?</Text>
                <View style = {styles.Questions}>
                    <AntDesign name = "warning" size={25} color = "rgb(248, 248, 242)" ></AntDesign>
                    <Text style = {styles.textQuestions}>Find out ifyou post something that should't be on Waiter, and what it could mean for your account.</Text>
                </View>
                <View style = {styles.Questions}>
                    <AntDesign name = "filetext1" size={25} color = "rgb(248, 248, 242)" ></AntDesign>
                    <Text style = {styles.textQuestions}>Learn what you can do if something you post is taken down or if you don't agree with our decision.</Text>
                </View>
                <View style = {styles.Questions}>
                    <AntDesign name = "closecircleo" size={25} color = "rgb(248, 248, 242)" ></AntDesign>
                    <Text style = {styles.textQuestions}>We may still take down your account without warning if something you post is a risk to the Waiter community.</Text>
                </View>
            </View>
        </View>
    );
}
const styles = StyleSheet.create({
    AccountStatus: {
        flex: 1,
        backgroundColor: 'black',
    },
    HeaderAccountStatus: {
        flexDirection: 'row',
        marginTop : '2%',
        marginLeft : '2%',
    },
    textAccountStatus: {
        color : 'white',
        fontSize : 22,
        fontWeight : 'bold',
        marginLeft : '5%',
    },
    IconBack: {
        marginRight : '2%',
        marginTop : '1%',
    },
    ProfileImage: {
        height: 100,
        width: 100,
        borderRadius: 50,
        marginLeft: '40%',
        marginTop: '8%',
    },
    textTitle: {
        color : 'white',
        fontSize : 25,
        fontWeight : 'bold',
        width : '90%',
        marginLeft : '5%',
        textAlign : 'center',
        marginTop : '5%',
    },
    textMore: {
        color : '#8e8e8e',
        fontSize : 15,
        textAlign : 'center',
        marginTop : '2%',
        marginBottom : '5%',
    },
    Community: {
        color : 'white',
        fontSize : 15,
    },
    AccountStatusQuestions: {
        marginLeft : '5%',
        marginTop : '3%',
    },
    textAccountStatusQuestions: {
        color : 'white',
        fontSize : 18,
        fontWeight : 'bold',
    },
    Questions: {
        flexDirection : 'row',
        marginLeft : '5%',
        marginTop : '5%',
    },
    textQuestions: {
        width : '85%',
        color : 'white',
        fontSize : 15,
        marginLeft : '5%',
    },
});
