import React,{useState} from 'react';
import AntDesign from 'react-native-vector-icons/AntDesign';
import Entypo from 'react-native-vector-icons/Entypo';
import { Text, View, StyleSheet, Pressable, TextInput ,Image,Switch} from 'react-native';
import { useNavigation } from '@react-navigation/native';
export default function OriginalPost() {
    const [isEnabled, setIsEnabled] = useState(true);
    const toggleSwitch = () => setIsEnabled(previousState => !previousState);
    const [isEnabledPhoto, setIsEnabledPhoto] = useState(true);
    const toggleSwitchPhoto = () => setIsEnabledPhoto(previousState => !previousState);
    const [isEnabledVideo, setIsEnabledVideo] = useState(true);
    const toggleSwitchVideo = () => setIsEnabledVideo(previousState => !previousState);
    const navigation = useNavigation();
    return( 
        <View style = {styles.OriginalPost}>
            <View style = {styles.HeaderOriginalPost}>
                <AntDesign name = "arrowleft" size={25} color = "rgb(248, 248, 242)" style ={styles.IconBack} onPress = {(e) =>{navigation.goBack()}}></AntDesign>
                <Text style = {styles.textOriginalPost}>Original Posts</Text>
            </View>
            <View style = {{flexDirection : 'row'}}>
                <Text style = {styles.textDataSave}>Save original posts</Text>
                <Switch 
                    trackColor={{ false: "#767577", true: "#81b0ff" }}
                    thumbColor={isEnabled ? "#f5dd4b" : "#f4f3f4"}
                    ios_backgroundColor="#3e3e3e"
                    onValueChange={toggleSwitch}
                    value={isEnabled}
                    style = {{marginLeft : '15%', marginTop : '5%'}}
                />
            </View>
            <Text style = {styles.textMore}>Automatically save the unedited photos and videos taken with Waiter feed camera to your camera roll.</Text>
            <View style = {{flexDirection : 'row'}}>
                <Text style = {styles.textDataSave}>Save posted photos</Text>
                <Switch 
                    trackColor={{ false: "#767577", true: "#81b0ff" }}
                    thumbColor={isEnabledPhoto ? "#f5dd4b" : "#f4f3f4"}
                    ios_backgroundColor="#3e3e3e"
                    onValueChange={toggleSwitchPhoto}
                    value={isEnabledPhoto}
                    style = {{marginLeft : '15%', marginTop : '5%'}}
                />
            </View>
            <View style = {{flexDirection : 'row'}}>
                <Text style = {styles.textDataSave}>Save posted videos</Text>
                <Switch 
                    trackColor={{ false: "#767577", true: "#81b0ff" }}
                    thumbColor={isEnabledVideo ? "#f5dd4b" : "#f4f3f4"}
                    ios_backgroundColor="#3e3e3e"
                    onValueChange={toggleSwitchVideo}
                    value={isEnabledVideo}
                    style = {{marginLeft : '15%', marginTop : '5%'}}
                />
            </View>
            <Text style = {styles.textMore}>Saving videos to your phone uses more storage space.</Text>
        </View>
    );
}
const styles = StyleSheet.create({
    OriginalPost: {
        flex: 1,
        backgroundColor: 'black',
    },
    HeaderOriginalPost: {
        flexDirection: 'row',
        marginTop : '2%',
        marginLeft : '2%',
    },
    textOriginalPost: {
        color : 'white',
        fontSize : 22,
        fontWeight : 'bold',
        marginLeft : '5%',
    },
    IconBack: {
        marginTop : '1%',
        marginLeft : '2%',
    },
    textDataSave: {
        width : '65%',
        marginTop : '5%',
        marginLeft : '5%',
        color : 'white',
        fontSize : 18,
    },
    textMore: {
        width : '90%',
        marginTop : '5%',
        marginLeft : '5%',
        color : '#8e8e8e',
        fontSize : 15,
    },
});