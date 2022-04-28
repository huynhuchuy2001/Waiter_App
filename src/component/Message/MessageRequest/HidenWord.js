import * as React from 'react';
import AntDesign from 'react-native-vector-icons/AntDesign';
import { Text, View, StyleSheet, Pressable,Switch } from 'react-native';
import { useNavigation } from "@react-navigation/native";
export default function HidenWord() {
    const navigation = useNavigation();
    // switch hidden word
    const [isEnabledHiddenComment, setIsEnabledHiddenComment] = React.useState(true);
    const toggleSwitch = () => setIsEnabledHiddenComment(previousState => !previousState);
    // switch filter word
    const [isEnabledFiltering, setIsEnabledFiltering] = React.useState(false);
    const toggleSwitchFiltering = () => setIsEnabledFiltering(previousState => !previousState);
    // switch message request
    const [isEnabledMessageRequest, setIsEnabledMessageRequest] = React.useState(false);
    const toggleSwitchMessageRequest = () => setIsEnabledMessageRequest(previousState => !previousState);
    // custom hidden word
    const [isEnabledCustomHiddenWord, setIsEnabledCustomHiddenWord] = React.useState(false);
    const toggleSwitchCustomHiddenWord = () => setIsEnabledCustomHiddenWord(previousState => !previousState);
    // custom message request
    const [isEnabledCustomMessageRequest, setIsEnabledCustomMessageRequest] = React.useState(false);
    const toggleSwitchCustomMessageRequest = () => setIsEnabledCustomMessageRequest(previousState => !previousState);
    return(
        <View style = {styles.HidenWord}>
            {/* Header Message Control */}
            <View style = {styles.HeaderHidenWord}>
                <AntDesign name = "arrowleft" size={25} color = "rgb(248, 248, 242)" style ={styles.IconBack} onPress = {(e) =>{navigation.goBack()}}></AntDesign>
                <Text style = {styles.textHidenWord}>Hidden Words</Text>
            </View>
            {/* Message */}
            <View style = {styles.bodyHidenWord}>
                <View style = {{borderBottomColor: '#8e8e8e', borderBottomWidth: 1}}>
                    <View style = {styles.TitleMessage}>
                        <Text style = {styles.textTitleMessage}>Offensive words and phrases</Text>
                    </View>
                    <Text style = {styles.textTitleMessageAction}>Protect yourself from comments abd message requests that contain offensive words, phrases or emojis.</Text>
                    <View style = {{marginBottom : '3%'}}>
                        <View style = {styles.HideComment}>
                            <Text style = {styles.textHideComment}>Hiden comments</Text>
                            <Switch
                                trackColor={{ false: "#767577", true: "#81b0ff" }}
                                thumbColor={isEnabledHiddenComment ? "#f5dd4b" : "#f4f3f4"}
                                ios_backgroundColor="#3e3e3e"
                                onValueChange={toggleSwitch}
                                value={isEnabledHiddenComment}
                                style = {{marginTop : '2%'}}
                            />
                        </View>
                        <Text style = {styles.textTitleMessageAction}>Comments that may be offensive will be hidden in a separate section of your post, reel, lives abd IGTV.</Text>
                        <View style = {styles.HideComment}>
                            <Text style = {styles.textHideComment}>Advanced comment filtering</Text>
                            <Switch
                                trackColor={{ false: "#767577", true: "#81b0ff" }}
                                thumbColor={isEnabledFiltering ? "#f5dd4b" : "#f4f3f4"}
                                ios_backgroundColor="#3e3e3e"
                                onValueChange={toggleSwitchFiltering}
                                value={isEnabledFiltering}
                                style = {{marginTop : '2%'}}
                            />
                        </View>
                        <Text style = {styles.textTitleMessageAction}>Additional comments that may contain offensive words and phrases will be hidden. You can always review and unhide individuak comments</Text>
                        <View style = {styles.HideComment}>
                            <Text style = {styles.textHideComment}>Hide message requests</Text>
                            <Switch
                                trackColor={{ false: "#767577", true: "#81b0ff" }}
                                thumbColor={isEnabledMessageRequest ? "#f5dd4b" : "#f4f3f4"}
                                ios_backgroundColor="#3e3e3e"
                                onValueChange={toggleSwitchMessageRequest}
                                value={isEnabledMessageRequest}
                                style = {{marginTop : '2%'}}
                            />
                        </View>
                        <Text style = {styles.textTitleMessageAction}>Message request thay may be offensive will be moved to the hidden request folder. We'll also filter notifications for these messages.</Text>
                    </View>
                </View>
                <View style = {styles.CustomWord}>
                    <Text style = {styles.textCustomWord}>Custom words and phrases</Text>
                    <Text style = {styles.textCustomWordAction}>Hide other comments and messages you don't want to see by creating a custom list of words, phrases and emojis.</Text>
                    <Pressable onPress = {() => {navigation.navigate('ManageList')}}>
                        <View style = {styles.Managelist}>
                            <Text style = {styles.textManagelist} >Manage list</Text>
                            <AntDesign name = "right" size={20} color = "#8e8e8e" style ={styles.IconManagelist}></AntDesign>
                        </View>
                    </Pressable>
                    <View style = {styles.CustomHideComment}>
                        <Text style = {styles.textCustomHideComment}>Hide comments</Text>
                            <Switch
                                trackColor={{ false: "#767577", true: "#81b0ff" }}
                                thumbColor={isEnabledCustomHiddenWord ? "#f5dd4b" : "#f4f3f4"}
                                ios_backgroundColor="#3e3e3e"
                                onValueChange={toggleSwitchCustomHiddenWord}
                                value={isEnabledCustomHiddenWord}
                                style = {{marginTop : '2%'}}
                            />
                    </View>
                    <Text style = {styles.textTitleMessageCustom}>Comments that contain woeds on your list and similar misspellings will be hidden.</Text>
                    <View style = {styles.CustomHideComment}>
                        <Text style = {styles.textCustomHideComment}>Hide message requests</Text>
                            <Switch
                                trackColor={{ false: "#767577", true: "#81b0ff" }}
                                thumbColor={isEnabledCustomMessageRequest ? "#f5dd4b" : "#f4f3f4"}
                                ios_backgroundColor="#3e3e3e"
                                onValueChange={toggleSwitchCustomMessageRequest}
                                value={isEnabledCustomMessageRequest}
                                style = {{marginTop : '2%'}}
                            />
                    </View>
                    <Text style = {styles.textTitleMessageCustom}>Message requests that contain words, phrases and emjis on your custom will be hidden.</Text>
                </View>
            </View>
        </View>
    )
};
const styles = StyleSheet.create({
    HidenWord: {
        flex: 1,
        backgroundColor: 'black',
    },
    HeaderHidenWord: {
        flexDirection: 'row',
        height: 40,
    },
    textHidenWord: {
        fontSize: 22,
        marginLeft: 25,
        marginTop: 8,
        color: 'rgb(248, 248, 242)',
        fontWeight: 'bold',
    },
    IconBack: {
        marginLeft: '2%',
        marginTop: 12,
    },
    bodyHidenWord: {
        marginTop: '2%',
    },
    TitleMessage: {
        width: '90%',
        marginLeft: '5%',
    },
    textTitleMessage: {
        fontSize: 17,
        color: 'white',
        marginTop: '2%',
        fontWeight: 'bold',
    },
    HideComment: {
        flexDirection: 'row',
        marginLeft: '5%',
    },
    textHideComment: {
        width: '85%',
        fontSize: 17,
        color: 'white',
        marginTop: '3%',
        fontWeight: 'bold',
    },
    textRequestHideComment: {
        fontSize: 17,
        color: '#8e8e8e',
        marginTop: '3%',
        marginLeft: '28%',
    },
    textTitleMessageAction : {
        fontSize: 15,
        color: '#8e8e8e',
        marginTop: '3%',
        marginLeft: '5%',
    },
    CustomWord: {
        marginTop: '3%',
        marginLeft: '5%',
    },
    textCustomWord: {
        fontSize: 17,
        color: 'white',
        fontWeight: 'bold',
    },
    textCustomWordAction: {
        fontSize: 15,
        color: '#8e8e8e',
        marginTop: '3%',
    },
    Managelist: {
        flexDirection: 'row',
    },
    textManagelist: {
        width: '85%',
        fontSize: 17,
        color: 'white',
        marginTop: '3%',
        fontWeight: 'bold',
    },
    IconManagelist: {
        marginLeft: '3%',
        marginTop: '3%',
    },
    CustomHideComment: {
        flexDirection: 'row',
    },
    textCustomHideComment: {
        width: '85%',
        fontSize: 17,
        color: 'white',
        marginTop: '3%',
        fontWeight: 'bold',
    },
    textRequestHideComment: {
        fontSize: 17,
        color: '#8e8e8e',
        marginTop: '3%',
        marginLeft: '28%',
    },
    textTitleMessageCustom : {
        fontSize: 15,
        color: '#8e8e8e',
        marginTop: '3%',
    },
});