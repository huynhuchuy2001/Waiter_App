import * as React from 'react';
import AntDesign from 'react-native-vector-icons/AntDesign';
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import { Text, View, StyleSheet, Pressable,ScrollView} from 'react-native';
import { useNavigation } from '@react-navigation/native';
export default function YourActivity() {
    const navigation = useNavigation();
    return( 
        <View style = {styles.YourActivity}>
            <View style = {styles.HeaderYourActivity}>
                <AntDesign name = "arrowleft" size={30} color = "rgb(248, 248, 242)" style ={styles.IconBack} onPress = {(e) =>{navigation.goBack()}}></AntDesign>
                <Text style = {styles.textYourActivity}>Your activity</Text>
            </View>
            {/* body your activity */}
            <ScrollView showsVerticalScrollIndicator = {false}>
                <View style = {styles.TitleYourActivity}>
                    <Text style = {styles.textTitleYourActivity}>One place to manage your activity</Text>
                    <Text style = {styles.textTitleBottomYourActivity}>We've added more tools for you to review and manage your photos, videos, account, and activity on Waiter.</Text>
                </View>
                {/* Time spent */}
                <Pressable style = {styles.TimeSpent}>
                    <MaterialCommunityIcons name = "clock-time-nine-outline" size={30} color = "rgb(248, 248, 242)" style ={styles.IconTimeSpent}></MaterialCommunityIcons>
                    <View style = {styles.TextTimeSpent}>
                        <Text style = {styles.textTimeSpent}>Time spent</Text>
                        <Text style = {styles.textTimeSpentBottom}>See how much time you usually spend on Waiter each day.</Text>
                    </View>
                    <AntDesign name = "right" size={15} color = "#8e8e8e" style ={styles.IconRight}></AntDesign>
                </Pressable>
                {/* Photo and video */}
                <Pressable style = {styles.PhotoVideo} onPress = {() => {navigation.navigate('PhotoAndVideo')}}>
                    <FontAwesome5 name = "photo-video" size={25} color = "rgb(248, 248, 242)" style ={styles.IconPhotoVideo}></FontAwesome5>
                    <View style = {styles.TextPhotoVideo}>
                        <Text style = {styles.textPhotoVideo}>Photos and videos</Text>
                        <Text style = {styles.textPhotoVideoBottom}>View, archive or delete photos and videos you've each day.</Text>
                    </View>
                    <AntDesign name = "right" size={15} color = "#8e8e8e" style ={styles.IconRight}></AntDesign>
                </Pressable>
                {/* Interactions */}
                <Pressable style = {styles.Interactions} onPressOut = {() => {navigation.navigate('Interactions')}}>
                    <FontAwesome5 name = "exchange-alt" size={25} color = "rgb(248, 248, 242)" style ={styles.IconInteractions}></FontAwesome5>
                    <View style = {styles.TextInteractions}>
                        <Text style = {styles.textInteractions}>Interactions</Text>
                        <Text style = {styles.textInteractionsBottom}>Review and delete likes, comments, and your other interactions.</Text>
                    </View>
                    <AntDesign name = "right" size={15} color = "#8e8e8e" style ={styles.IconRight}></AntDesign>
                </Pressable>
                {/* Account history */}
                <Pressable style = {styles.AccountHistory}>
                    <AntDesign name = "calendar" size={25} color = "rgb(248, 248, 242)" style ={styles.IconAccountHistory}></AntDesign>
                    <View style = {styles.TextAccountHistory}>
                        <Text style = {styles.textAccountHistory}>Account history</Text>
                        <Text style = {styles.textAccountHistoryBottom}>View your account history and see what you've done each day.</Text>
                    </View>
                    <AntDesign name = "right" size={15} color = "#8e8e8e" style ={styles.IconRight}></AntDesign>
                </Pressable>
                {/* Recent searchs */}
                <Pressable style = {styles.RecentSearchs}>
                    <FontAwesome5 name = "search" size={25} color = "rgb(248, 248, 242)" style ={styles.IconRecentSearchs}></FontAwesome5>
                    <View style = {styles.TextRecentSearchs}>
                        <Text style = {styles.textRecentSearchs}>Recent searches</Text>
                        <Text style = {styles.textRecentSearchsBottom}>View your recent searches and see what you've searched for.</Text>
                    </View>
                    <AntDesign name = "right" size={15} color = "#8e8e8e" style ={styles.IconRight}></AntDesign>
                </Pressable>
                {/* Link your visited */}
                <Pressable style = {styles.LinkVisited}>
                    <FontAwesome5 name = "link" size={25} color = "rgb(248, 248, 242)" style ={styles.IconLinkVisited}></FontAwesome5>
                    <View style = {styles.TextLinkVisited}>
                        <Text style = {styles.textLinkVisited}>Link your visited</Text>
                        <Text style = {styles.textLinkVisitedBottom}>Link your visited places to your Waiter account.</Text>
                    </View>
                    <AntDesign name = "right" size={15} color = "#8e8e8e" style ={styles.IconRight}></AntDesign>
                </Pressable>
                {/* Achived */}
                <Pressable style = {styles.Achived}>
                    <MaterialCommunityIcons name = "cog-counterclockwise" size={30} color = "rgb(248, 248, 242)" style ={styles.IconAchived}></MaterialCommunityIcons>
                    <View style = {styles.TextAchived}>
                        <Text style = {styles.textAchived}>Achived</Text>
                        <Text style = {styles.textAchivedBottom}>View your achived badges and see what you've achieved.</Text>
                    </View>
                    <AntDesign name = "right" size={15} color = "#8e8e8e" style ={styles.IconRight}></AntDesign>
                </Pressable>
                {/* Recently delete */}
                <Pressable style = {styles.RecentlyDelete}>
                    <FontAwesome5 name = "trash-alt" size={25} color = "rgb(248, 248, 242)" style ={styles.IconRecentlyDelete}></FontAwesome5>
                    <View style = {styles.TextRecentlyDelete}>
                        <Text style = {styles.textRecentlyDelete}>Recently deleted</Text>
                        <Text style = {styles.textRecentlyDeleteBottom}>View your recently deleted photos and videos.</Text>
                    </View>
                    <AntDesign name = "right" size={15} color = "#8e8e8e" style ={styles.IconRight}></AntDesign>
                </Pressable>
                {/* Download your informations */}
                <Pressable style = {styles.DownloadYourInformations}>
                    <FontAwesome5 name = "download" size={25} color = "rgb(248, 248, 242)" style ={styles.IconDownloadYourInformations}></FontAwesome5>
                    <View style = {styles.TextDownloadYourInformations}>
                        <Text style = {styles.textDownloadYourInformations}>Download your informations</Text>
                        <Text style = {styles.textDownloadYourInformationsBottom}>Download your Waiter account informations.</Text>
                    </View>
                    <AntDesign name = "right" size={15} color = "#8e8e8e" style ={styles.IconRight}></AntDesign>
                </Pressable>
            </ScrollView>
        </View>
    );
}
const styles = StyleSheet.create({
    YourActivity: {
        flex: 1,
        backgroundColor: 'black',
    },
    HeaderYourActivity: {
        flexDirection : 'row',
        height : 40,
        marginTop : '2%',
    },
    IconBack: {
        marginLeft : '2%',
    },
    textYourActivity: {
        color : 'white',
        fontSize : 22,
        fontWeight : 'bold',
        marginLeft : '10%',
    },
    TitleYourActivity: {
        marginTop : '5%',
        borderBottomColor : '#8e8e8e',
        borderBottomWidth : 1,
        borderTopColor : '#8e8e8e',
        borderTopWidth : 1/2,
    },
    textTitleYourActivity: {
        width : '96%',
        textAlign : 'center',
        color : 'white',
        fontWeight : 'bold',
        fontSize : 25,
        marginTop : '5%',
    },
    textTitleBottomYourActivity: {
        width : '80%',
        textAlign : 'center',
        color : '#8e8e8e',
        fontSize : 15,
        marginTop : '5%',
        marginLeft : '10%',
        marginBottom : '5%',
    },
    TimeSpent: {
        flexDirection : 'row',
        borderBottomColor : '#8e8e8e',
        borderBottomWidth : 1,
    },
    IconTimeSpent: {
        width : '10%',
        marginLeft : '5%',
        marginTop : '7%',
    },
    TextTimeSpent: {
        width : '70%',
        marginLeft : '5%',
        marginTop : '2%',
    },
    textTimeSpent: {
        color : 'white',
        fontSize : 20,
        fontWeight : 'bold',
    },
    textTimeSpentBottom: {
        color : '#8e8e8e',
        fontSize : 15,
        marginBottom : '5%',
    },
    IconRight: {
        marginLeft : '3%',
        marginTop : '10%',
    },
    PhotoVideo: {
        flexDirection : 'row',
        borderBottomColor : '#8e8e8e',
        borderBottomWidth : 1,
    },
    IconPhotoVideo: {
        width : '10%',
        marginLeft : '5%',
        marginTop : '7%',
    },
    TextPhotoVideo: {
        width : '70%',
        marginLeft : '5%',
        marginTop : '2%',
    },
    textPhotoVideo: {
        color : 'white',
        fontSize : 20,
        fontWeight : 'bold',
    },
    textPhotoVideoBottom: {
        color : '#8e8e8e',
        fontSize : 15,
        marginBottom : '5%',
    },
    Interactions: {
        flexDirection : 'row',
        borderBottomColor : '#8e8e8e',
        borderBottomWidth : 1,
    },
    IconInteractions: {
        width : '10%',
        marginLeft : '5%',
        marginTop : '7%',
    },
    TextInteractions: {
        width : '70%',
        marginLeft : '5%',
        marginTop : '2%',
    },
    textInteractions: {
        color : 'white',
        fontSize : 20,
        fontWeight : 'bold',
    },
    textInteractionsBottom: {
        color : '#8e8e8e',
        fontSize : 15,
        marginBottom : '5%',
    },
    AccountHistory: {
        flexDirection : 'row',
        borderBottomColor : '#8e8e8e',
        borderBottomWidth : 1,
    },
    IconAccountHistory: {
        width : '10%',
        marginLeft : '5%',
        marginTop : '7%',
    },
    TextAccountHistory: {
        width : '70%',
        marginLeft : '5%',
        marginTop : '2%',
    },
    textAccountHistory: {
        color : 'white',
        fontSize : 20,
        fontWeight : 'bold',
    },
    textAccountHistoryBottom: {
        color : '#8e8e8e',
        fontSize : 15,
        marginBottom : '5%',
    },
    RecentSearchs: {
        flexDirection : 'row',
        borderBottomColor : '#8e8e8e',
        borderBottomWidth : 1,
    },
    IconRecentSearchs: {
        width : '10%',
        marginLeft : '5%',
        marginTop : '7%',
    },
    TextRecentSearchs: {
        width : '70%',
        marginLeft : '5%',
        marginTop : '2%',
    },
    textRecentSearchs: {
        color : 'white',
        fontSize : 20,
        fontWeight : 'bold',
    },
    textRecentSearchsBottom: {
        color : '#8e8e8e',
        fontSize : 15,
        marginBottom : '5%',
    },
    LinkVisited: {
        flexDirection : 'row',
        borderBottomColor : '#8e8e8e',
        borderBottomWidth : 1,
    },
    IconLinkVisited: {
        width : '10%',
        marginLeft : '5%',
        marginTop : '7%',
    },
    TextLinkVisited: {
        width : '70%',
        marginLeft : '5%',
        marginTop : '2%',
    },
    textLinkVisited: {
        color : 'white',
        fontSize : 20,
        fontWeight : 'bold',
    },
    textLinkVisitedBottom: {
        color : '#8e8e8e',
        fontSize : 15,
        marginBottom : '5%',
    },
    Achived : {
        flexDirection : 'row',
        borderBottomColor : '#8e8e8e',
        borderBottomWidth : 1,
    },
    IconAchived : {
        width : '10%',
        marginLeft : '5%',
        marginTop : '7%',
    },
    TextAchived : {
        width : '70%',
        marginLeft : '5%',
        marginTop : '2%',
    },
    textAchived : {
        color : 'white',
        fontSize : 20,
        fontWeight : 'bold',
    },
    textAchivedBottom : {
        color : '#8e8e8e',
        fontSize : 15,
        marginBottom : '5%',
    },
    RecentlyDelete : {
        flexDirection : 'row',
        borderBottomColor : '#8e8e8e',
        borderBottomWidth : 1,
    },
    IconRecentlyDelete : {
        width : '10%',
        marginLeft : '5%',
        marginTop : '7%',
    },
    TextRecentlyDelete : {
        width : '70%',
        marginLeft : '5%',
        marginTop : '2%',
    },
    textRecentlyDelete : {
        color : 'white',
        fontSize : 20,
        fontWeight : 'bold',
    },
    textRecentlyDeleteBottom : {
        color : '#8e8e8e',
        fontSize : 15,
        marginBottom : '5%',
    },
    DownloadYourInformations : {
        flexDirection : 'row',
        borderBottomColor : '#8e8e8e',
        borderBottomWidth : 1,
    },
    IconDownloadYourInformations : {
        width : '10%',
        marginLeft : '5%',
        marginTop : '7%',
    },
    TextDownloadYourInformations : {
        width : '70%',
        marginLeft : '5%',
        marginTop : '2%',
    },
    textDownloadYourInformations : {
        color : 'white',
        fontSize : 20,
        fontWeight : 'bold',
    },
    textDownloadYourInformationsBottom : {
        color : '#8e8e8e',
        fontSize : 15,
        marginBottom : '5%',
    },
});