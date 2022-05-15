import * as React from 'react';
import AntDesign from 'react-native-vector-icons/AntDesign';
import { Text, View, StyleSheet, Pressable, TextInput ,Switch} from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { ScrollView } from 'react-native-gesture-handler';
import Fontisto from 'react-native-vector-icons/Fontisto';
import Feather from 'react-native-vector-icons/Feather';
import Ionicons from 'react-native-vector-icons/Ionicons';
export default function Notification() {
    const [isEnabled, setIsEnabled] = React.useState(false);
    const toggleSwitch = () => setIsEnabled(previousState => !previousState);
    const navigation = useNavigation();
    return( 
        <View style = {styles.Notification}>
            <View style = {styles.HeaderNotification}>
                <AntDesign name = "arrowleft" size={30} color = "rgb(248, 248, 242)" style ={styles.IconBack} onPress = {(e) =>{navigation.goBack()}}></AntDesign>
                <Text style = {styles.textNotification}>Notifications</Text>
            </View>
            <View style = {styles.NotificationContent}>
                <Text style = {styles.textNotificationAction}>Push Notifications</Text>
                <View style = {styles.PauseAll}>
                    <Text style = {styles.textPauseAll}>Pause all</Text>
                    <Switch
                        trackColor={{ false: "#767577", true: "#81b0ff" }}
                        thumbColor={isEnabled ? "#f5dd4b" : "#f4f3f4"}
                        ios_backgroundColor="#3e3e3e"
                        onValueChange={toggleSwitch}
                        value={isEnabled}
                        style = {{marginLeft : '63%'}}
                    />
                </View>
                <Text style = {styles.textNotificationAction}>Post, Stories and Comments</Text>
                <Text style = {styles.textNotificationAction}>Following and Followers</Text>
                <Text style = {styles.textNotificationAction}>Messages and Calls</Text>
                <Text style = {styles.textNotificationAction}>Live and Video</Text>
                <Text style = {styles.textNotificationAction}>Fundraisers</Text>
                <Text style = {styles.textNotificationAction}>From Waiter</Text>
            </View>
            <Text style = {styles.textNotificationAction}>Other Notification Types</Text>
            <Text style = {styles.textNotificationAction}>Email notifications</Text>
            <Text style = {styles.textNotificationAction}>Shopping</Text>
        </View>
    );
}
const styles = StyleSheet.create({
    Notification: {
        flex: 1,
        backgroundColor: 'black',
    },
    HeaderNotification: {
        flexDirection : 'row',
        height : 40,
        marginTop : '2%',
    },
    IconBack: {
        marginLeft : '3%',
        marginTop : '1%',
    },
    NotificationContent : {
        borderBottomColor : '#8e8e8e',
        borderBottomWidth : 1,
    },
    textNotification: {
        fontSize : 22,
        color : 'white',
        fontWeight : 'bold',
        marginLeft : '8%',
        marginTop : '1%',
    },
    textNotificationAction: {
        fontSize : 20,
        color : 'white',
        marginLeft : '5%',
        marginTop : '2%',
        marginBottom : '3%',
    },
    PauseAll: {
        flexDirection : 'row',
        marginLeft : '2%',
    },
    textPauseAll: {
        fontSize : 20,
        color : 'white',
        marginLeft : '3%',
        marginBottom : '3%',
        marginTop : '2%',
    },

});