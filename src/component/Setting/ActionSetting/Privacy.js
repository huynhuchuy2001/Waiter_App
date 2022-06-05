import * as React from 'react';
import AntDesign from 'react-native-vector-icons/AntDesign';
import { Text, View, StyleSheet, Pressable, TextInput ,Switch} from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { ScrollView } from 'react-native-gesture-handler';
import Octicons from 'react-native-vector-icons/Octicons';
import Feather from 'react-native-vector-icons/Feather';
import Fontisto from 'react-native-vector-icons/Fontisto';
import Entypo from 'react-native-vector-icons/Entypo';
import Ionicons from 'react-native-vector-icons/Ionicons';
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
export default function Privacy() {
    const [isEnabled, setIsEnabled] = React.useState(false);
    const toggleSwitch = () => setIsEnabled(previousState => !previousState);
    const navigation = useNavigation();
    return( 
        <View style = {styles.Privacy}>
            <View style = {styles.HeaderPrivacy}>
                <AntDesign name = "arrowleft" size={30} color = "rgb(248, 248, 242)" style ={styles.IconBack} onPress = {(e) =>{navigation.goBack()}}></AntDesign>
                <Text style = {styles.textPrivacy}>Privacy</Text>
            </View>
            <ScrollView showsVerticalScrollIndicator = {false}>
                {/* Account */}
                <View style = {styles.PrivacyContent}>
                    <Text style = {styles.textPrivacyAction}>Account privacy</Text>
                    <View style = {styles.PrivateAcount}>
                        <Feather name = "lock" size={25} color = "rgb(248, 248, 242)" style ={styles.IconLock}></Feather>
                        <Text style = {styles.textPrivate}>Private account</Text>
                        <Switch
                            trackColor={{ false: "#767577", true: "#81b0ff" }}
                            thumbColor={isEnabled ? "#f5dd4b" : "#f4f3f4"}
                            ios_backgroundColor="#3e3e3e"
                            onValueChange={toggleSwitch}
                            value={isEnabled}
                            style = {{marginLeft : '40%'}}
                        />
                    </View>
                </View>
                {/* Interactions */}
                <View style = {styles.Interactions}>
                    <Text style = {styles.textInteractions}>Interactions</Text>
                    {/* Limits */}
                    <Pressable style = {styles.Limits} onPress = {() => navigation.navigate('Limits')}>
                        <MaterialCommunityIcons name = "message-alert-outline" size={25} color = "rgb(248, 248, 242)" style ={{marginTop : 2}}></MaterialCommunityIcons>
                        <Text style = {styles.textLimit}>Limits</Text>
                        <Text style = {styles.textOff}>Off</Text>
                    </Pressable>
                    {/* HidenWords */}
                    <View style = {styles.HidenWords}>
                        <Ionicons name = "eye-off-outline" size={25} color = "rgb(248, 248, 242)" style ={{marginTop : 1}}></Ionicons>
                        <Text style = {styles.textHidenWords}>Hiden words</Text>
                    </View>
                    {/* Comment */}
                    <View style = {styles.InteractionsActions}>
                        <Feather name = "message-circle" size={25} color = "rgb(248, 248, 242)" style ={{marginTop : 1}}></Feather>
                        <Text style = {styles.textInteractionsActions}>Comments</Text>
                    </View>
                    {/* Post */}
                    <View style = {styles.InteractionsActions}>
                        <Octicons name = "diff-added" size={25} color = "rgb(248, 248, 242)" style ={{marginTop : 1}}></Octicons>
                        <Text style = {styles.textInteractionsActions}>Post</Text>
                    </View>
                    {/* Mentions */}
                    <View style = {styles.InteractionsActions}>
                        <Entypo name = "email" size={25} color = "rgb(248, 248, 242)" style ={{marginTop : 2}}></Entypo>
                        <Text style = {styles.textInteractionsActions}>Mentions</Text>
                        <Text style = {styles.textOff}>Everyone</Text>
                    </View>
                    {/* Story */}
                    <View style = {styles.InteractionsActions}>
                        <Ionicons name = "add-circle-outline" size={25} color = "rgb(248, 248, 242)" ></Ionicons>
                        <Text style = {styles.textInteractionsActions}>Story</Text>
                    </View>
                    {/* Live */}
                    <View style = {styles.InteractionsActions}>
                        <MaterialIcons name = "live-tv" size={25} color = "rgb(248, 248, 242)" ></MaterialIcons>
                        <Text style = {styles.textInteractionsActions}>Live</Text>
                    </View>
                    {/* Guides */}
                    <View style = {styles.InteractionsActions}>
                        <MaterialIcons name = "menu-book" size={25} color = "rgb(248, 248, 242)" ></MaterialIcons>
                        <Text style = {styles.textInteractionsActions}>Guides</Text>
                    </View>
                    {/* Activity Status */}
                    <View style = {styles.InteractionsActions}>
                        <MaterialCommunityIcons name = "account-star-outline" size={25} color = "rgb(248, 248, 242)" ></MaterialCommunityIcons>
                        <Text style = {styles.textInteractionsActions}>Activity Status</Text>
                    </View>
                     {/* Message */}
                     <View style = {styles.InteractionsActions}>
                        <MaterialCommunityIcons name = "facebook-messenger" size={25} color = "rgb(248, 248, 242)" ></MaterialCommunityIcons>
                        <Text style = {styles.textInteractionsActions}>Messages</Text>
                    </View>
                </View>
                {/* Connections */}
                <View style = {styles.Connections}>
                    <Text style = {styles.textConnections}>Connections</Text>
                    {/* Restricted*/}
                    <View style = {styles.ConnectionsActions}>
                        <FontAwesome5 name = "user-alt-slash" size={20} color = "rgb(248, 248, 242)" style ={{marginTop : 1}}></FontAwesome5>
                        <Text style = {styles.textConnectionsActions}>Restricted accounts</Text>
                    </View>
                    {/* Blocked */}
                    <View style = {styles.ConnectionsActions}>
                        <Fontisto name = "close" size={25} color = "rgb(248, 248, 242)" ></Fontisto>
                        <Text style = {styles.textConnectionsActions}>Blocked accounts</Text>
                    </View>
                    {/* Muted */}
                    <View style = {styles.ConnectionsActions}>
                        <Feather name = "bell-off" size={25} color = "rgb(248, 248, 242)" ></Feather>
                        <Text style = {styles.textConnectionsActions}>Muted accounts</Text>
                    </View>
                    {/* Followers */}
                    <View style = {styles.ConnectionsActions}>
                        <Feather name = "users" size={25} color = "rgb(248, 248, 242)"></Feather>
                        <Text style = {styles.textConnectionsActions}>Accounts you follow</Text>
                    </View>
                </View>
            </ScrollView>
        </View>
    );
}
const styles = StyleSheet.create({
    Privacy: {
        flex: 1,
        backgroundColor: 'black',
    },
    HeaderPrivacy: {
        flexDirection : 'row',
        height : 40,
        marginTop : '2%',
    },
    IconBack: {
        marginLeft : '3%',
        marginTop : '1%',
    },
    textPrivacy : {
        color : 'white',
        fontSize : 22,
        marginLeft : '3%',
        marginTop : '1%',
        fontWeight : 'bold',
    },
    PrivacyContent : {
        borderBottomColor : '#8e8e8e',
        borderBottomWidth : 1,
        marginTop : '2%',
        marginLeft : '3%',
    },
    textPrivacyAction : {
        color : 'white',
        fontSize : 18,
        marginLeft : '3%',
        marginTop : '2%',
        fontWeight : 'bold',
    },
    PrivateAcount : {
        flexDirection : 'row',
        marginTop : '2%',
        marginLeft : '3%',
        marginBottom : '5%',
    },
    textPrivate : {
        color : 'white',
        fontSize : 18,
        marginLeft : '3%',
        marginTop : '2%',
        fontWeight : 'bold',
    },  
    IconLock : {
        marginTop : '2%',
    },
    Interactions : {
        marginTop : '2%',
        marginLeft : '3%',
        borderBottomColor : '#8e8e8e',
        borderBottomWidth : 1,
    },
    textInteractions : {
        color : 'white',
        fontSize : 18,
        marginLeft : '3%',
        marginTop : '2%',
        fontWeight : 'bold',
    },
    Limits : {
        flexDirection : 'row',
        marginTop : '2%',
        marginLeft : '3%',
        marginBottom : '5%',
    },
    textLimit : {
        width : '65%',
        color : 'white',
        fontSize : 18,
        marginLeft : '3%',
    },
    textOff : {
        color : '#8e8e8e',
        fontSize : 18,
        marginLeft : '10%',
    },
    HidenWords : {
        flexDirection : 'row',
        marginLeft : '3%',
        marginBottom : '5%'
    },
    textHidenWords : {
        color : 'white',
        fontSize : 18,
        marginLeft : '3%',
    },
    InteractionsActions : {
        flexDirection : 'row',
        marginLeft : '3%',
        marginBottom : '5%',
    },
    textInteractionsActions : {
        width : '55%',
        color : 'white',
        fontSize : 18,
        marginLeft : '3%',
    },
    Connections : {
        marginTop : '2%',
        marginLeft : '3%',
    },
    textConnections : {
        color : 'white',
        fontSize : 18,
        marginLeft : '3%',
        marginTop : '2%',
        fontWeight : 'bold',
    },
    ConnectionsActions : {
        flexDirection : 'row',
        marginLeft : '3%',
        marginTop : '5%',
    },
    textConnectionsActions : {
        width : '55%',
        color : 'white',
        fontSize : 18,
        marginLeft : '3%',
    }
});