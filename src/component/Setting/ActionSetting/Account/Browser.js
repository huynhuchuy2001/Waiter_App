import React,{useState} from 'react';
import AntDesign from 'react-native-vector-icons/AntDesign';
import Entypo from 'react-native-vector-icons/Entypo';
import { Text, View, StyleSheet, Pressable, TextInput ,Image,Switch} from 'react-native';
import { useNavigation } from '@react-navigation/native';
export default function Browser() {
    const [isEnabled, setIsEnabled] = useState(false);
    const toggleSwitch = () => setIsEnabled(previousState => !previousState);
    const [isEnabled1, setIsEnabled1] = useState(false);
    const toggleSwitch1 = () => setIsEnabled1(previousState => !previousState);
    const navigation = useNavigation();
    return( 
        <View style = {styles.Browser}>
            <View style = {styles.HeaderBrowser}>
                <AntDesign name = "arrowleft" size={25} color = "rgb(248, 248, 242)" style ={styles.IconBack} onPress = {(e) =>{navigation.goBack()}}></AntDesign>
                <Text style = {styles.textBrowser}>Browser settings</Text>
            </View>
            <View style = {styles.BrowserAction}>
                <View style = {styles.BrowserData}>
                    <Text style = {styles.textBrowserAction}>Browser data</Text>
                    <Text style = {styles.textClearBrowser}>Clear</Text>
                </View>
                <Text style = {styles.textTitleBrowser}>Clear your cookies and cache from the websites you've visited while using waiter.</Text>
            </View>
            <Text style = {styles.Autofill}>Autofill</Text>
            <Text style = {styles.textTitleAutofill}>Quickly fill in forms with your saved contact and payment info. Your autofill activity is used to improve ads and other parts of your Waiter experience.</Text>
            <Text style = {styles.More}>Learn More</Text>
            <View style = {{flexDirection : 'row'}}>
                <Text style = {styles.Autofill}>Autofill contact forms</Text>
                <Switch 
                    trackColor={{ false: "#767577", true: "#81b0ff" }}
                    thumbColor={isEnabled ? "#f5dd4b" : "#f4f3f4"}
                    ios_backgroundColor="#3e3e3e"
                    onValueChange={toggleSwitch}
                    value={isEnabled}
                    style = {{marginLeft : '38%', marginTop : '5%'}}
                />
            </View>
            <Text style = {styles.Add}>Add contact info</Text>
            <View style = {{flexDirection : 'row'}}>
                <Text style = {styles.Autofill}>Autofill payments forms</Text>
                <Switch 
                    trackColor={{ false: "#767577", true: "#81b0ff" }}
                    thumbColor={isEnabled1 ? "#f5dd4b" : "#f4f3f4"}
                    ios_backgroundColor="#3e3e3e"
                    onValueChange={toggleSwitch1}
                    value={isEnabled1}
                    style = {{marginLeft : '34%', marginTop : '5%'}}
                />
            </View>
            <Text style = {styles.Add}>Add payment info</Text>
        </View>
    );
}
const styles = StyleSheet.create({
    Browser: {
        flex: 1,
        backgroundColor: 'black',
    },
    HeaderBrowser: {
        flexDirection: 'row',
        marginTop : '2%',
        marginLeft : '2%',
    },
    textBrowser: {
        color : 'white',
        fontSize : 22,
        fontWeight : 'bold',
        marginLeft : '5%',
    },
    IconBack: {
        marginTop : '1%',
        marginLeft : '2%',
    },
    BrowserData: {
        flexDirection: 'row',
        marginTop : '5%',
        marginLeft : '2%',
    },
    BrowserAction: {
        borderBottomWidth: 1,
        borderBottomColor: '#8e8e8e',
    },
    textBrowserAction: {
        color : 'white',
        fontSize : 18,
        marginLeft : '3%',
        width : '80%',
    },
    textClearBrowser: {
        color : '#3b64e9',
        fontSize : 18,
        marginLeft : '3%',
        width : '15%',
    },
    textTitleBrowser: {
        color : '#8e8e8e',
        fontSize : 17,
        marginLeft : '5%',
        marginTop : '3%',
        marginBottom : '5%',
    },
    Autofill: {
        color : 'white',
        fontSize : 18,
        marginLeft : '5%',
        marginTop : '5%',
    },
    textTitleAutofill: {
        color : '#8e8e8e',
        fontSize : 17,
        marginLeft : '5%',
        marginTop : '3%',
    },
    More: {
        color : 'white',
        fontSize : 17,
        marginLeft : '5%',
    },
    Add: {
        color : '#3b64e9',
        fontSize : 18,
        marginLeft : '5%',
        marginTop : '5%',
    }
});