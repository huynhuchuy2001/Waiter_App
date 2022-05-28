import React,{useState} from 'react';
import AntDesign from 'react-native-vector-icons/AntDesign';
import Entypo from 'react-native-vector-icons/Entypo';
import { Text, View, StyleSheet, Pressable, TextInput ,Image,Switch} from 'react-native';
import { useNavigation } from '@react-navigation/native';
export default function Captions() {
    const [isEnabled, setIsEnabled] = useState(false);
    const toggleSwitch = () => setIsEnabled(previousState => !previousState);
    const navigation = useNavigation();
    return( 
        <View style = {styles.Captions}>
            <View style = {styles.HeaderCaptions}>
                <AntDesign name = "arrowleft" size={25} color = "rgb(248, 248, 242)" style ={styles.IconBack} onPress = {(e) =>{navigation.goBack()}}></AntDesign>
                <Text style = {styles.textCaptions}>Captions</Text>
            </View>
            <View style = {styles.CaptionsAction}>
                <Text style = {styles.textCaptionsAction}>Captions</Text>
                <Switch
                    trackColor={{ false: "#767577", true: "#81b0ff" }}
                    thumbColor={isEnabled ? "#f5dd4b" : "#f4f3f4"}
                    ios_backgroundColor="#3e3e3e"
                    onValueChange={toggleSwitch}
                    value={isEnabled}
                />
            </View>
            <Text style = {styles.textTitleCaptions}>Video post you watch will show auto-generated captions.<Text style = {{color : 'white'}}> Learn more.</Text></Text>
            <View style = {styles.CaptionsAction}>
                <Text style = {styles.Language}>Language</Text>
                <Text style = {styles.textLanguage}>English auto-generated.</Text>
            </View>
        </View>
    );
}
const styles = StyleSheet.create({
    Captions: {
        flex: 1,
        backgroundColor: 'black',
    },
    HeaderCaptions: {
        flexDirection: 'row',
        marginTop : '2%',
        marginLeft : '2%',
    },
    textCaptions: {
        color : 'white',
        fontSize : 22,
        fontWeight : 'bold',
        marginLeft : '5%',
    },
    IconBack: {
        marginTop : '1%',
        marginLeft : '2%',
    },
    CaptionsAction: {
        flexDirection: 'row',
        marginTop : '5%',
        marginLeft : '2%',
    },
    textCaptionsAction: {
        width : '85%',
        color : 'white',
        fontSize : 18,
        marginLeft : '3%',
    },
    textTitleCaptions: {
        width : '100%',
        marginTop : '3%',
        marginLeft : '5%',
        color : '#8e8e8e',
        fontSize : 17,
    },
    Language: {
        color : 'white',
        fontSize : 17,
        marginLeft : '3%',
    },
    textLanguage: {
        color : '#8e8e8e',
        fontSize : 17,
        marginLeft : '30%',
    },
});