import * as React from 'react';
import AntDesign from 'react-native-vector-icons/AntDesign';
import { Text, View, StyleSheet, Pressable, TextInput ,Switch} from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { ScrollView } from 'react-native-gesture-handler';
export default function Account() {
    const navigation = useNavigation();
    return( 
        <View style = {styles.Account}>
            <View style = {styles.HeaderAccount}>
                <AntDesign name = "arrowleft" size={30} color = "rgb(248, 248, 242)" style ={styles.IconBack} onPress = {(e) =>{navigation.goBack()}}></AntDesign>
                <Text style = {styles.textAccount}>Account</Text>
            </View>
            <ScrollView style = {{marginTop : '2%'}} showsVerticalScrollIndicator = {false}>
                {/* Personal */}
                <Text style = {styles.textAction} onPress = {() => {navigation.navigate('EditInformations')}}>Personal information</Text>
                {/* Saved */}
                <Text style = {styles.textAction} onPress = {() => {navigation.navigate('Saved')}}>Saved</Text>
                {/* Close friend */}
                <Text style = {styles.textAction} onPress = {() => {navigation.navigate('CloseFriend')}}>Close Friends</Text>
                {/* Account Status */}
                <Text style = {styles.textAction} onPress = {() => {navigation.navigate('AccountStatus')}}>Account Status</Text>
                {/* Avatar */}
                <Text style = {styles.textAction}>Avatar</Text>
                {/* Language */}
                <Text style = {styles.textAction}>Language</Text>
                {/* Captions */}
                <Text style = {styles.textAction} onPress = {() => {navigation.navigate('Captions')}}>Captions</Text>
                {/* Browser setting */}
                <Text style = {styles.textAction} onPress = {() => {navigation.navigate('BrowserSettings')}}>Browser settings</Text>
                {/* Sensitive content control */}
                <Text style = {styles.textAction} onPress = {() => {navigation.navigate('SensitiveContent')}}>Sensitive content control</Text>
                {/* Contacts syncing */}
                <Text style = {styles.textAction} onPress = {() => {navigation.navigate('Syncing')}}>Contacts syncing</Text>
                {/* Sharing to other apps */}
                <Text style = {styles.textAction}>Sharing to other apps</Text>
                {/* Cellular data use */}
                <Text style = {styles.textAction}>Cellular data use</Text>
                {/* Original posts */}
                <Text style = {styles.textAction}>Original posts</Text>
                {/* Request verificaion */}
                <Text style = {styles.textAction}>Request verificaion</Text>
                {/* Review activity */}
                <Text style = {styles.textAction}>Review activity</Text>
                {/* Branded content */}
                <Text style = {styles.textAction}>Branded content</Text>
                {/* Switch to professional account */}
                <Text style = {styles.textActionAccount}>Switch to professional account</Text>
                {/* Add new professional account */}
                <Text style = {styles.textActionAccount}>Add new professional account</Text>
            </ScrollView>
        </View>
    );
}
const styles = StyleSheet.create({
    Account: {
        flex: 1,
        backgroundColor: 'black',
    },
    HeaderAccount: {
        flexDirection : 'row',
        height : 40,
        marginTop : '2%',
    },
    IconBack: {
        marginLeft : '2%',
    },
    textAccount: {
        color : 'white',
        fontSize : 22,
        fontWeight : 'bold',
        marginLeft : '5%',
    },
    textAction: {
        width : '90%',
        color : 'white',
        fontSize : 18,
        marginTop : '5%',
        marginLeft : '5%',
    },
    textActionAccount: {
        width : '90%',
        color : '#5ccfe6',
        fontSize : 18,
        marginTop : '5%',
        marginLeft : '5%',
    }
});
