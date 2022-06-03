import React,{useState} from 'react';
import AntDesign from 'react-native-vector-icons/AntDesign';
import Entypo from 'react-native-vector-icons/Entypo';
import { Text, View, StyleSheet, Pressable, TextInput ,Image,Switch,ScrollView} from 'react-native';
import { useNavigation } from '@react-navigation/native';
export default function RequestVerification() {
    var name = 'hdh.huyyyy';
    const navigation = useNavigation();
    return( 
        <View style = {styles.RequestVerification}>
            <View style = {styles.HeaderRequestVerification}>
                <AntDesign name = "arrowleft" size={25} color = "rgb(248, 248, 242)" style ={styles.IconBack} onPress = {(e) =>{navigation.goBack()}}></AntDesign>
                <Text style = {styles.textRequestVerification}>Request Verification</Text>
            </View>
            {/* Body Request verification */}
            <ScrollView style = {styles.BodyRequestVerification} showsVerticalScrollIndicator = {false}>
                <Text style = {styles.textBodyRequestVerification}>Apply for Waiter Verification</Text>
                <Text style = {styles.textTittleRequestVerification}>Verified accounts have blue checkmark next to their names to show that Waiter has confirmed they're the real presence of the public figures celebrities, and brands they represent.</Text>
                {/* Step 1 */}
                <View style = {styles.Step1}>
                    {/* Confirm authenticity */}
                    <Text style = {styles.textConfirmAuthenticity}>Step 1: Confirm authenticity</Text>
                    <Text style = {styles.textConfirm}>Add an official identification document for yourself or your business.</Text>
                    {/* Username */}
                    <View style = {styles.Username}>
                        <Text style = {styles.textUsername}>Username</Text>
                        <TextInput style = {styles.textInputUsername} value = {name} placeholder = {name} placeholderTextColor = '#8e8e8e'/>
                    </View>
                    {/* Fullname */}
                    <View style = {styles.Fullname}>
                        <Text style = {styles.textFullname}>Full name</Text>
                        <TextInput style = {styles.textInputFullname} value = {name} placeholder = {name} placeholderTextColor = '#8e8e8e'/>
                    </View>
                    {/* Document */}
                    <View style = {styles.Document}>
                        <Text style = {styles.textDocument}>Document</Text>
                        <AntDesign name = "right" size={20} color = "#8e8e8e" style ={{marginLeft : '12%'}}></AntDesign>
                    </View>
                    {/* Choose file */}
                    <View style = {styles.ChooseFile}>
                        <Text style = {styles.textChooseFile}>Choose file</Text>
                    </View>
                </View>
                {/* Step 2 */}
                <View style = {styles.Step2}>
                    {/* Confirm notability */}
                    <Text style = {styles.textConfirmNotability}>Step 2: Confirm notability</Text>
                    <Text style = {styles.textConfirm}>Show that the figure, celebrity, or brand your acccount repressents is in the public interest.</Text>
                    {/* Category */}
                    <View style = {styles.Category}>
                        <Text style = {styles.textCategory}>Category</Text>
                        <AntDesign name = "right" size={20} color = "#8e8e8e" style ={{marginLeft : '12%'}}></AntDesign>
                    </View>
                    {/* Contry/region */}
                    <View style = {styles.ContryRegion}>
                        <Text style = {styles.textContryRegion}>Contry/region</Text>
                        <AntDesign name = "right" size={20} color = "#8e8e8e" style ={{marginLeft : '12%'}}></AntDesign>
                    </View>
                    {/* Audience (Optinal) */}
                    <View style = {styles.Audience}>
                        <Text style = {styles.textAudience}>Audience (Optional)</Text>
                    </View>
                    <Text style = {styles.textConfirm}>Describe the people who follow your account. Include who they are, what ther're interested in and why they follow you.</Text>
                    {/* Also know as (Optional) */}
                    <View style = {styles.AlsoKnowAs}>
                        <Text style = {styles.textAlsoKnowAs}>Also know as (Optional)</Text>
                    </View>
                    <Text style = {styles.textConfirm}>List all the names the person or organization your account represents os know by. Include different names and the same name in other languages.</Text>
                </View>
                {/* Link Optional */}
                <View style = {{borderBottomColor: "#8e8e8e",borderBottomWidth: 1}}>
                    <View style = {styles.LinkOptional}>
                        <Text style = {styles.textLinkOptional}>Link (Optional)</Text>
                        <Text style = {styles.textConfirm}>Add article, social media accounts, and other links that show your account is in the public interest. Paid or promotional content won't be considered.</Text>
                        {/* Link 1 */}
                        <View style = {styles.Link}>
                            <Text style = {styles.textLinkOptional}>Link 1</Text>
                            <View style = {styles.Type}>
                                <Text style = {styles.textLink}>Type</Text>
                                <AntDesign name = "right" size={20} color = "#8e8e8e" style ={{marginLeft : '12%'}}></AntDesign>
                            </View>
                            <View style = {styles.URL}>
                                <Text style = {styles.textLink}>URL</Text>
                            </View>
                        </View>
                        {/* Link 2 */}
                        <View style = {styles.Link}>
                            <Text style = {styles.textLinkOptional}>Link 2</Text>
                            <View style = {styles.Type}>
                                <Text style = {styles.textLink}>Type</Text>
                                <AntDesign name = "right" size={20} color = "#8e8e8e" style ={{marginLeft : '12%'}}></AntDesign>
                            </View>
                            <View style = {styles.URL}>
                                <Text style = {styles.textLink}>URL</Text>
                            </View>
                        </View>
                        {/* Link 3 */}
                        <View style = {styles.Link}>
                            <Text style = {styles.textLinkOptional}>Link 3</Text>
                            <View style = {styles.Type}>
                                <Text style = {styles.textLink}>Type</Text>
                                <AntDesign name = "right" size={20} color = "#8e8e8e" style ={{marginLeft : '12%'}}></AntDesign>
                            </View>
                            <View style = {styles.URL}>
                                <Text style = {styles.textLink}>URL</Text>
                            </View>
                        </View>
                        {/* Add link */}
                        <View style = {styles.Addlink}>
                            <Text style = {styles.textAddlink}>Add link</Text>
                        </View>
                    </View>
                </View>
                {/* Submit */}
                <View style = {styles.Submit}>
                    <Text style = {styles.textSubmit}>Submit</Text>
                </View>
                <Text style = {styles.textSubmitBottom}>We'll only use the information you submit to determine if your account meets our verification critera.</Text>
            </ScrollView>
        </View>
    );
}
const styles = StyleSheet.create({
    RequestVerification: {
        flex: 1,
        backgroundColor: 'black',
    },
    HeaderRequestVerification: {
        flexDirection: 'row',
        marginTop : '2%',
        marginLeft : '2%',
    },
    textRequestVerification: {
        color : 'white',
        fontSize : 22,
        fontWeight : 'bold',
        marginLeft : '5%',
    },
    IconBack: {
        marginTop : '1%',
        marginLeft : '2%',
    },
    BodyRequestVerification: {
        marginTop : '5%',
    },
    textBodyRequestVerification: {
        width : '70%',
        color : 'white',
        fontSize : 23,
        fontWeight : 'bold',
        textAlign : 'center',
        marginLeft : '15%',
    },
    textTittleRequestVerification: {
        width : '90%',
        color : '#8e8e8e',
        fontSize : 15,
        textAlign : 'center',
        marginLeft : '5%',
        marginTop : '2%',
    },
    textConfirmAuthenticity: {
        color : 'white',
        fontSize : 18,
        marginTop : '5%',
    },
    textConfirm: {
        width : '95%',
        color : '#8e8e8e',
        fontSize : 15,
        marginTop : '2%',
    },
    Username: {
        marginTop : '5%',
    },
    textUsername: {
        color : '#8e8e8e',
        fontSize : 18,
    },
    textInputUsername: {
        color: '#8e8e8e',
        fontSize: 18,
        width: '95%',
        borderBottomColor: "#8e8e8e",
        borderBottomWidth: 1,
    },
    Fullname: {
        marginTop : '5%',
    },
    textFullname: {
        color : '#8e8e8e',
        fontSize : 18,
    },
    Step1 : {
        marginLeft : '5%',
    },
    Step2 : {
        marginLeft : '5%',
    },
    textInputFullname: {
        color: '#8e8e8e',
        fontSize: 18,
        width: '95%',
        borderBottomColor: "#8e8e8e",
        borderBottomWidth: 1,
    },
    Document: {
        width : '95%',
        marginTop : '5%',
        borderBottomColor: "#8e8e8e",
        borderBottomWidth: 1,
        flexDirection: 'row',
    },
    textDocument: {
        width : '80%',
        color : '#8e8e8e',
        fontSize : 18,
        marginBottom : '2%',
    },
    ChooseFile: {
        width : '95%',
        marginTop : '5%',
        borderColor: "#8e8e8e",
        borderWidth: 1,
        borderRadius: 5,
    },
    textChooseFile: {
        textAlign : 'center',
        color : '#8e8e8e',
        fontSize : 15,
        marginTop : '1%',
        marginBottom : '1%',
    },
    textConfirmNotability: {
        color : 'white',
        fontSize : 18,
        marginTop : '5%',
    },
    Category: {
        width : '95%',
        marginTop : '5%',
        borderBottomColor: "#8e8e8e",
        borderBottomWidth: 1,
        flexDirection: 'row',
    },
    textCategory: {
        width : '80%',
        color : '#8e8e8e',
        fontSize : 18,
        marginBottom : '2%',
    },
    ContryRegion: {
        width : '95%',
        marginTop : '5%',
        borderBottomColor: "#8e8e8e",
        borderBottomWidth: 1,
        flexDirection: 'row',
    },
    textContryRegion: {
        width : '80%',
        color : '#8e8e8e',
        fontSize : 18,
        marginBottom : '2%',
    },
    Audience: {
        width : '95%',
        marginTop : '5%',
        borderBottomColor: "#8e8e8e",
        borderBottomWidth: 1,
    },
    textAudience: {
        color : '#8e8e8e',
        fontSize : 18,
        marginBottom : '2%',
    },
    AlsoKnowAs: {
        width : '95%',
        marginTop : '5%',
        borderBottomColor: "#8e8e8e",
        borderBottomWidth: 1,
    },
    textAlsoKnowAs: {
        color : '#8e8e8e',
        fontSize : 18,
        marginBottom : '2%',
    },
    LinkOptional: {
        width : '100%',
        marginTop : '5%',
        marginLeft : '5%',
    },
    textLinkOptional: {
        color : 'white',
        fontSize : 18,
        marginBottom : '2%',
    },
    Link: {
        width : '90%',
        marginTop : '5%',
    },
    Type: {
        marginTop : '3%',
        flexDirection: 'row',
        borderBottomColor: "#8e8e8e",
        borderBottomWidth: 1,
    },
    textLink: {
        width : '80%',
        color : '#8e8e8e',
        fontSize : 18,
        marginBottom : '2%',
    },
    URL: {
        marginTop : '5%',
        borderBottomColor: "#8e8e8e",
        borderBottomWidth: 1,
    },
    textURL: {
        color : '#8e8e8e',
        fontSize : 18,
        marginBottom : '2%',
    },
    Addlink: {
        width : '90%',
        marginTop : '5%',
        borderColor: "#8e8e8e",
        borderWidth: 1,
        borderRadius: 5,
        marginBottom : '5%',
    },
    textAddlink: {
        textAlign : 'center',
        color : 'white',
        fontSize : 18,
        marginTop : '1%',
        marginBottom : '1%',
    },
    Submit: {
        width : '90%',
        marginTop : '5%',
        borderRadius: 5,
        marginBottom : '5%',
        marginLeft : '5%',
        backgroundColor : '#513ecf',
    },
    textSubmit: {
        textAlign : 'center',
        color : 'white',
        fontSize : 18,
        marginTop : '1%',
        marginBottom : '1%',
    },
    textSubmitBottom : {
        width : '90%',
        textAlign : 'center',
        color : '#8e8e8e',
        fontSize : 15,
        marginBottom : '2%',
        marginLeft : '5%',
    }
});
