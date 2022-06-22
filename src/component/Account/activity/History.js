import * as React from 'react';
import AntDesign from 'react-native-vector-icons/AntDesign';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import Entypo from 'react-native-vector-icons/Entypo';
import Ionicons from 'react-native-vector-icons/Ionicons'
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import Feather  from 'react-native-vector-icons/Feather';
import { Text, View, StyleSheet, Pressable,ScrollView} from 'react-native';
import { useNavigation } from '@react-navigation/native';
export default function AccountHistory(){
    const navigation = useNavigation();
    return(
        <View style = {styles.HeaderHistory}>
            <View style = {styles.HeaderAccountHistory}>
                <AntDesign name = "arrowleft" size={30} color = "rgb(248, 248, 242)" style ={styles.IconBack} onPress = {(e) =>{navigation.goBack()}}></AntDesign>
                <Text style = {styles.textAccountHistory}>Account history</Text>
            </View>
            {/* Body Account History */}
            <ScrollView showsVerticalScrollIndicator = {false}>
                <View style = {styles.NewestOldest}>
                    <Text style = {styles.TitleNewest}>Newest to oldest</Text>
                    <Text style = {styles.SortFillter}>Sort and fillter</Text>
                </View>
                {/* About Account */}
                <View style = {{borderBottomColor : '#8e8e8e' , borderBottomWidth : 1}}>
                    <Text style = {styles.About}>About Account History</Text>
                    {/* Review */}
                    <Text style = {styles.textReview}>Review changes you've made your account since your created it.</Text>
                </View>
                {/* This Year */}
                <View style = {styles.Thisyear}>
                    <Text style = {styles.textThisyear}>This year</Text>
                    {/* Password */}
                    <View style = {styles.Password}>
                        <Feather name = "key" size = {25} color = "white" style = {styles.Icon}/>
                        {/* text password */}
                        <Pressable style = {{width : '80%'}}>
                            <Text style = {styles.textTitlePassword}>Password</Text>
                            <Text style = {styles.textPassword}>You changed your password 17w</Text>
                            <Text style = {styles.textPassword}>17w</Text>
                        </Pressable>
                        <AntDesign name = "right" size={15} color = "#8e8e8e" style = {styles.IconRight}/>
                    </View>
                    {/* Phone */}
                    <View style = {styles.Phone}>
                        <Feather name = "phone" size = {25} color = "white" style = {styles.Icon}/>
                        {/* text phone */}
                        <Pressable style = {{width : '80%'}}>
                            <Text style = {styles.textTitlePhone}>Phone</Text>
                            <Text style = {styles.textPhone}>You changed your phone number to</Text>
                            <Text style = {styles.textPhone}>+84336755506</Text>
                            <Text style = {styles.textPhone}>36w</Text>
                        </Pressable>
                        <AntDesign name = "right" size={15} color = "#8e8e8e" style = {styles.IconRight}/>
                    </View>
                    {/* Email */}
                    <View style = {styles.Email}>
                        <Feather name = "mail" size = {25} color = "white" style = {styles.Icon}/>
                        {/* text email */}
                        <Pressable style = {{width : '80%'}}>
                            <Text style = {styles.textTitleEmail}>Email</Text>
                            <Text style = {styles.textEmail}>You changed your email address to</Text>
                            <Text style = {styles.textEmail}>huynhduchuy2001@gmail.com</Text>
                            <Text style = {styles.textEmail}>36w</Text>
                        </Pressable>
                        <AntDesign name = "right" size={15} color = "#8e8e8e" style = {styles.IconRight}/>
                    </View>
                    {/* Phone */}
                    <View style = {styles.Phone}>
                        <Feather name = "phone" size = {25} color = "white" style = {styles.Icon}/>
                        {/* text phone */}
                        <Pressable style = {{width : '80%'}}>
                            <Text style = {styles.textTitlePhone}>Phone</Text>
                            <Text style = {styles.textPhone}>You remove your phone number</Text>
                            <Text style = {styles.textPhone}>36w</Text>
                        </Pressable>
                        <AntDesign name = "right" size={15} color = "#8e8e8e" style = {styles.IconRight}/>
                    </View>
                    {/* Email */}
                    <View style = {styles.Email}>
                        <Feather name = "mail" size = {25} color = "white" style = {styles.Icon}/>
                        {/* text email */}
                        <Pressable style = {{width : '80%'}}>
                            <Text style = {styles.textTitleEmail}>Email</Text>
                            <Text style = {styles.textEmail}>You changed your email address to</Text>
                            <Text style = {styles.textEmail}>huynhduchuy26062001@gmail.com</Text>
                            <Text style = {styles.textEmail}>36w</Text>
                        </Pressable>
                        <AntDesign name = "right" size={15} color = "#8e8e8e" style = {styles.IconRight}/>
                    </View>
                    {/* Email */}
                    <View style = {styles.Email}>
                        <Feather name = "mail" size = {25} color = "white" style = {styles.Icon}/>
                        {/* text email */}
                        <Pressable style = {{width : '80%'}}>
                            <Text style = {styles.textTitleEmail}>Email</Text>
                            <Text style = {styles.textEmail}>You remove your email address to</Text>
                            <Text style = {styles.textEmail}>huynhduchuy2001@gmail.com</Text>
                            <Text style = {styles.textEmailTime}>36w</Text>
                        </Pressable>
                        <AntDesign name = "right" size={15} color = "#8e8e8e" style = {styles.IconRight}/>
                    </View>
                </View>
                {/* Earlier */}
                <View style = { styles.Earlier}>
                    <Text style = {styles.textEarlier}>Earlier</Text>
                    {/* User name */}
                    <View style = {styles.UserName}>
                        <Entypo name = "email" size = {25} color = "white" style = {styles.Icon}/>
                        {/* text User Name */}
                        <Pressable style = {{width : '80%'}}>
                            <Text style = {styles.textTitleUserName}>UserName</Text>
                            <Text style = {styles.textUserName}>You change your username to</Text>
                            <Text style = {styles.textUserName}>hdh.huyyyy</Text>
                            <Text style = {styles.textUserName}>1y</Text>
                        </Pressable>
                        <AntDesign name = "right" size={15} color = "#8e8e8e" style = {styles.IconRight}/>
                    </View>
                    {/* Messaging */}
                    <View style = {styles.Messaging}>
                        <Feather name = "message-circle" size = {25} color = "white" style = {styles.Icon}/>
                        {/* text User Name */}
                        <Pressable style = {{width : '80%'}}>
                            <Text style = {styles.textTitleMessaging}>Messaging</Text>
                            <Text style = {styles.textMessaging}>You started using Messenger on Waiter to</Text>
                            <Text style = {styles.textMessaging}>1y</Text>
                        </Pressable>
                        <AntDesign name = "right" size={15} color = "#8e8e8e" style = {styles.IconRight}/>
                    </View>
                    {/* Privacy */}
                    <View style = {styles.Privacy}>
                        <Feather name = "eye-off" size = {25} color = "white" style = {styles.Icon}/>
                        {/* text User Name */}
                        <Pressable style = {{width : '80%'}}>
                            <Text style = {styles.textTitlePrivacy}>Privacy</Text>
                            <Text style = {styles.textPrivacy}>You made your account private</Text>
                            <Text style = {styles.textPrivacy}>2y</Text>
                        </Pressable>
                        <AntDesign name = "right" size={15} color = "#8e8e8e" style = {styles.IconRight}/>
                    </View>
                    {/* User Name */}
                    <View style = {styles.UserName}>
                        <Entypo name = "email" size = {25} color = "white" style = {styles.Icon}/>
                        {/* text User Name */}
                        <Pressable style = {{width : '80%'}}>
                            <Text style = {styles.textTitleUserName}>UserName</Text>
                            <Text style = {styles.textUserName}>You change your username to</Text>
                            <Text style = {styles.textUserName}>hdh.huyyyy</Text>
                            <Text style = {styles.textUserName}>1y</Text>
                        </Pressable>
                        <AntDesign name = "right" size={15} color = "#8e8e8e" style = {styles.IconRight}/>
                    </View>
                    {/* Email */}
                    <View style = {styles.Email}>
                        <Feather name = "mail" size = {25} color = "white" style = {styles.Icon}/>
                        {/* text email */}
                        <Pressable style = {{width : '80%'}}>
                            <Text style = {styles.textTitleEmail}>Email</Text>
                            <Text style = {styles.textEmail}>You remove your email address to</Text>
                            <Text style = {styles.textEmail}>huynhduchuy2001@gmail.com</Text>
                            <Text style = {styles.textEmailTime}>36w</Text>
                        </Pressable>
                        <AntDesign name = "right" size={15} color = "#8e8e8e" style = {styles.IconRight}/>
                    </View>
                    {/* Create */}
                    <View style = {styles.Create}>
                        <Ionicons name = "information-circle-outline" size = {28} color = "white" style = {styles.Icon}/>
                        {/* text email */}
                        <Pressable style = {{width : '80%'}}>
                            <Text style = {styles.textTitleCreate}>Accout created</Text>
                            <Text style = {styles.textCreate}>You created your account on May 10, 2017</Text>
                            <Text style = {styles.textCreateTime}>5y</Text>
                        </Pressable>
                        <AntDesign name = "right" size={15} color = "#8e8e8e" style = {styles.IconRight}/>
                    </View>
                </View>
            </ScrollView>
        </View>
    );
}
const styles = StyleSheet.create({
    HeaderHistory : {
        flex : 1,
        backgroundColor : "black"
    },
    HeaderAccountHistory : {
        flexDirection : 'row',
        marginLeft : '2%',
        marginTop : "1%"
    },
    IconBack : {
        marginTop : '2%'
    },
    textAccountHistory : {
        color : 'white',
        fontSize : 22,
        fontWeight : 'bold',
        marginLeft : '10%',
        marginTop : '2%'
    },
    NewestOldest : {
        flexDirection : 'row',
        borderBottomColor : '#8e8e8e',
        borderBottomWidth : 1
    },
    TitleNewest : {
        width : '60%',
        color : 'white',
        fontSize : 20,
        marginLeft : '3%',
        marginTop : '5%',
        fontWeight : 'bold'
    },
    SortFillter : {
        color : '#8e8e8e',
        fontSize : 18,
        marginLeft : '5%',
        marginTop : '5%',
        marginBottom : '2%'
    },
    About : {
        marginTop : '5%',
        color : 'white',
        fontSize : 24,
        fontWeight : 'bold',
        textAlign : 'center'
    },
    textReview : {
        fontSize : 18,
        color : '#8e8e8e',
        textAlign : 'center',
        marginBottom : '3%'
    },
    Thisyear :{
        borderBottomColor : '#8e8e8e',
        borderBottomWidth : 1
    },
    Password : {
        marginTop : '5%',
        flexDirection : 'row'
    },
    Icon : {
        marginLeft : '5%',
        marginTop : '5%'
    },
    textTitlePassword : {
        fontSize : 18,
        color : 'white',
        fontWeight : 'bold',
        marginLeft : '5%'
    },
    textPassword : {
        fontSize : 15,
        color : '#8e8e8e',
        marginLeft : '5%'
    },
    IconRight : {
        marginTop : '5%'
    },
    Phone : {
        marginTop : '5%',
        flexDirection : 'row'
    },
    textTitlePhone : {
        fontSize : 18,
        color : 'white',
        fontWeight : 'bold',
        marginLeft : '5%'
    },
    textPhone : {
        fontSize : 15,
        color : '#8e8e8e',
        marginLeft : '5%'
    },
    Email : {
        marginTop : '5%',
        flexDirection : 'row'
    },
    textTitleEmail : {
        fontSize : 18,
        color : 'white',
        fontWeight : 'bold',
        marginLeft : '5%'
    },
    textEmail : {
        fontSize : 15,
        color : '#8e8e8e',
        marginLeft : '5%'
    },
    textEmailTime : {
        fontSize : 15,
        color : '#8e8e8e',
        marginLeft : '5%',
        marginBottom : '3%'
    },
    textEarlier : {
        color : 'white',
        fontSize : 20,
        marginTop : '3%',
        marginLeft : '5%',
        fontWeight : 'bold'
    },
    UserName : {
        marginTop : '5%',
        flexDirection : 'row'
    },
    textTitleUserName : {
        fontSize : 18,
        color : 'white',
        fontWeight : 'bold',
        marginLeft : '5%'
    },
    textUserName : {
        fontSize : 15,
        color : '#8e8e8e',
        marginLeft : '5%'
    },
    textThisyear : {
        fontSize : 20,
        color : 'white',
        marginLeft : '5%',
        fontWeight : 'bold',
        marginTop : '3%'
    },
    Messaging : {
        marginTop : '5%',
        flexDirection : 'row'
    },
    textTitleMessaging : {
        fontSize : 18,
        color : 'white',
        fontWeight : 'bold',
        marginLeft : '5%'
    },
    textMessaging : {
        fontSize : 15,
        color : '#8e8e8e',
        marginLeft : '5%'
    },
    Privacy : {
        marginTop : '5%',
        flexDirection : 'row'
    },
    textTitlePrivacy : {
        fontSize : 18,
        color : 'white',
        fontWeight : 'bold',
        marginLeft : '5%'
    },
    textPrivacy : {
        fontSize : 15,
        color : '#8e8e8e',
        marginLeft : '5%'
    },
    Create : {
        marginTop : '5%',
        flexDirection : 'row'
    },
    textTitleCreate : {
        fontSize : 18,
        color : 'white',
        fontWeight : 'bold',
        marginLeft : '5%'
    },
    textCreate : {
        fontSize : 15,
        color : '#8e8e8e',
        marginLeft : '5%'
    },
    textCreateTime : {
        fontSize : 15,
        color : '#8e8e8e',
        marginLeft : '5%'
    }
})
