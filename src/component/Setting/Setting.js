import * as React from 'react';
import AntDesign from 'react-native-vector-icons/AntDesign';
import { Text, View, StyleSheet, Pressable, TextInput } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { ScrollView } from 'react-native-gesture-handler';
import Fontisto from 'react-native-vector-icons/Fontisto';
import Feather from 'react-native-vector-icons/Feather';
import Ionicons from 'react-native-vector-icons/Ionicons';
export default function Setting() {
    const navigation = useNavigation();
    return( 
        <View style = {styles.Setting}>
            <View style = {styles.HeaderSetting}>
                <AntDesign name = "arrowleft" size={25} color = "rgb(248, 248, 242)" style ={styles.IconBack} onPress = {(e) =>{navigation.goBack()}}></AntDesign>
                <Text style = {styles.textSetting}>Settings</Text>
            </View>
            <ScrollView showsVerticalScrollIndicator = {false}>
                <View style = {styles.bodySetting}>
                    {/* Search */}
                    <View style = {styles.Search}>
                        <Fontisto name="search" size={20} color="#8e8e8e" style = {styles.IconSearch}/>
                        <TextInput placeholder='Search' placeholderTextColor="#8e8e8e" style = {styles.SearchText}/>
                    </View>
                    <View style = {styles.Action}>
                        {/* Follow request */}
                        <Pressable  onPress = {() =>{navigation.navigate('Follow')}}>
                            <View style = {styles.FollowRequest}>
                                <Feather name="user-plus" size={25} color="white" style = {styles.IconBell}/>
                                <Text style = {styles.FollowRequestText}>Follow and invie friends</Text>
                            </View>
                        </Pressable>
                        {/* Notification */}
                        <Pressable  onPress = {() =>{navigation.navigate('Notifications')}}>
                            <View style = {styles.Notification}>
                                <Feather name="bell" size={25} color="white" style = {styles.IconBell}/>
                                <Text style = {styles.NotificationText}>Notification</Text>
                            </View>
                        </Pressable>
                        {/* Privacy */}
                        <View style = {styles.Privacy}>
                            <Feather name="lock" size={25} color="white" style = {styles.IconLock}/>
                            <Text style = {styles.PrivacyText}>Privacy</Text>
                        </View>
                        {/* Security */}
                        <View style = {styles.Security}>
                            <Ionicons name="shield-checkmark-outline" size={25} color="white" style = {styles.IconSecure}/>
                            <Text style = {styles.SecurityText}>Security</Text>
                        </View>
                        {/* Ads */}
                        <View style = {styles.Ads}>
                            <AntDesign name="notification" size={25} color="white" style = {styles.IconAds}/>
                            <Text style = {styles.AdsText}>Ads</Text>
                        </View>
                        {/* Account */}
                        <View style = {styles.Account}>
                            <AntDesign name="user" size={25} color="white" style = {styles.IconAccount}/>
                            <Text style = {styles.AccountText}>Account</Text>
                        </View>
                        {/* Help */}
                        <View style = {styles.Help}>
                            <Ionicons name="help-buoy" size={25} color="white" style = {styles.IconHelp}/>
                            <Text style = {styles.HelpText}>Help</Text>
                        </View>
                        {/* About */}
                        <View style = {styles.About}>
                            <Ionicons name="information-circle-outline" size={25} color="white" style = {styles.IconAbout}/>
                            <Text style = {styles.AboutText}>About</Text>
                        </View>
                        {/* Theme */}
                        <View style = {styles.Theme}>
                            <Ionicons name="color-palette-outline" size={25} color="white" style = {styles.IconTheme}/>
                            <Text style = {styles.ThemeText}>Theme</Text>
                        </View>
                        {/* Account Center */}
                        <View style = {styles.AccountCenter}>
                            <Feather name="facebook" size={25} color="white" style = {styles.IconAccountCenter}/>
                            <Text style = {styles.AccountCenterText}>Facebook</Text>
                        </View>
                        <Text style = {styles.textAccCenter}>Account Center</Text>
                        <Text style = {styles.textAccCenterStatus}>Control settings for connected experiences across Waiter, The Facebook app an Messenger, including story and post sharing and loggin in.</Text>
                        {/* Logins */}
                        <Text style = {styles.textLogins}>Logins</Text>
                        {/* Add account */}
                        <Text style = {styles.AddAccount}>Add account</Text>
                        {/* Logout */}
                        <Text style = {styles.Logout}>Logout</Text>
                    </View>
                </View>
            </ScrollView>
        </View>
    )
};
const styles = StyleSheet.create({
    Setting : {
        flex : 1,
        backgroundColor : 'black',
    },
    HeaderSetting : {
        flexDirection : 'row',
        height : 40,
        marginTop : '2%',
    },
    IconBack : {
        marginLeft : '2%',
        marginTop : '2%',
    },
    textSetting : {
        fontSize : 22,
        color : 'white',
        fontWeight : 'bold',
        marginLeft : '5%',
        marginTop : '1%',
    },
    bodySetting : {
        marginTop : '2%',
    },
    Search : {
        flexDirection : 'row',
        marginTop : '2%',
        marginLeft : '5%',
        marginRight : '5%',
        borderRadius : 10,
        height : 40,
        backgroundColor : '#1F2739',
    },
    IconSearch : {
        marginLeft : '2%',
        marginTop : '3%',
    },
    SearchText : {
        color : 'white',
        width : '85%',
        marginLeft : '2%',
        fontSize : 17,
    },
    Action : {
        marginTop : '2%',
        marginLeft : '5%',
    },
    FollowRequest : {
        flexDirection : 'row',
        marginTop : '2%',
    },
    FollowRequestText : {
        color : 'white',
        fontSize : 18,
        marginLeft : '3%',
    },
    IconBell : {
        marginLeft : '2%',
    },
    Notification : {
        flexDirection : 'row',
        marginTop : '5%',
    },
    NotificationText : {
        color : 'white',
        fontSize : 18,
        marginLeft : '3%',
    },
    Privacy : {
        flexDirection : 'row',
        marginTop : '5%',
    },
    PrivacyText : {
        color : 'white',
        fontSize : 18,
        marginLeft : '3%',
    },
    IconLock : {
        marginLeft : '2%',
    },
    Security : {
        flexDirection : 'row',
        marginTop : '5%',
    },
    SecurityText : {
        color : 'white',
        fontSize : 18,
        marginLeft : '3%',
    },
    IconSecure : {
        marginLeft : '2%',
    },
    Ads : {
        flexDirection : 'row',
        marginTop : '5%',
    },
    AdsText : {
        color : 'white',
        fontSize : 18,
        marginLeft : '3%',
    },
    IconAds : {
        marginLeft : '2%',
    },
    Account : {
        flexDirection : 'row',
        marginTop : '5%',
    },
    AccountText : {
        color : 'white',
        fontSize : 18,
        marginLeft : '3%',
    },
    IconAccount : {
        marginLeft : '2%',
    },
    Help : {
        flexDirection : 'row',
        marginTop : '5%',
    },
    HelpText : {
        color : 'white',
        fontSize : 18,
        marginLeft : '3%',
    },
    IconHelp : {
        marginLeft : '2%',
    },
    About : {
        flexDirection : 'row',
        marginTop : '5%',
    },
    AboutText : {
        color : 'white',
        fontSize : 18,
        marginLeft : '3%',
    },
    IconAbout : {
        marginLeft : '2%',
    },
    Theme : {
        flexDirection : 'row',
        marginTop : '5%',
    },
    ThemeText : {
        color : 'white',
        fontSize : 18,
        marginLeft : '3%',
    },
    IconTheme : {
        marginLeft : '2%',
    },
    AccountCenter : {
        flexDirection : 'row',
        marginTop : '8%',
    },
    AccountCenterText : {
        color : 'white',
        fontSize : 18,
        marginLeft : '1%',
        marginTop : 1,
    },
    IconAccountCenter : {
        marginLeft : '1%',
    },
    textAccCenter : {
        color : '#5ccfe6',
        fontSize : 18,
        marginLeft : '3%',
        marginTop : '1%',
    },
    textAccCenterStatus : {
        width : '95%',
        color : '#8e8e8e',
        fontSize : 16,
        marginLeft : '3%',
        marginTop : '1%',
    },
    textLogins : {
        color : 'white',
        fontSize : 18,
        marginLeft : '3%',
        marginTop : '3%',
        fontWeight : 'bold',
    },
    AddAccount : {
        color : '#5ccfe6',
        fontSize : 18,
        marginLeft : '3%',
        marginTop : '2%',
        fontWeight : 'bold',
    },
    Logout : {
        color : '#5ccfe6',
        fontSize : 18,
        marginLeft : '3%',
        marginTop : '2%',
        fontWeight : 'bold',
    }
});
