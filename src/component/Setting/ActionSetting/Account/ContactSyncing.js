import React,{useState} from 'react';
import AntDesign from 'react-native-vector-icons/AntDesign';
import Entypo from 'react-native-vector-icons/Entypo';
import { Text, View, StyleSheet, Pressable, TextInput ,Image,Switch} from 'react-native';
import { useNavigation } from '@react-navigation/native';
export default function Syncing() {
    const [isEnabled, setIsEnabled] = useState(false);
    const toggleSwitch = () => setIsEnabled(previousState => !previousState);
    const navigation = useNavigation();
    return( 
        <View style = {styles.Syncing}>
            <View style = {styles.HeaderSyncing}>
                <AntDesign name = "arrowleft" size={25} color = "rgb(248, 248, 242)" style ={styles.IconBack} onPress = {(e) =>{navigation.goBack()}}></AntDesign>
                <Text style = {styles.textSyncing}>Contacts Syncing</Text>
            </View>
            <View style = {styles.SyncingAction}>
                <Text style = {styles.textSyncingAction}>Connect contacts</Text>
                <Switch
                    trackColor={{ false: "#767577", true: "#81b0ff" }}
                    thumbColor={isEnabled ? "#f5dd4b" : "#f4f3f4"}
                    ios_backgroundColor="#3e3e3e"
                    onValueChange={toggleSwitch}
                    value={isEnabled}
                />
            </View>
            <Text style = {styles.textTitleSyncing}>To help people connect on Waiter, your contacts are periodically synced and stored on our severs. You choose which ones to follow. <Text style = {{color : '#3b64e9'}}>Learn More.</Text></Text>
        </View>
    );
}
const styles = StyleSheet.create({
    Syncing: {
        flex: 1,
        backgroundColor: 'black',
    },
    HeaderSyncing: {
        flexDirection: 'row',
        marginTop : '2%',
        marginLeft : '2%',
    },
    textSyncing: {
        color : 'white',
        fontSize : 22,
        fontWeight : 'bold',
        marginLeft : '5%',
    },
    IconBack: {
        marginTop : '1%',
        marginLeft : '2%',
    },
    SyncingAction: {
        flexDirection: 'row',
        marginTop : '5%',
        marginLeft : '2%',
    },
    textSyncingAction: {
        width : '85%',
        color : 'white',
        fontSize : 18,
        marginLeft : '3%',
    },
    textTitleSyncing: {
        width : '90%',
        marginTop : '5%',
        marginLeft : '5%',
        color : '#8e8e8e',
        fontSize : 15,
    },
});