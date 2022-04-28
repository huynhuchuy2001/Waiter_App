import * as React from 'react';
import AntDesign from 'react-native-vector-icons/AntDesign';
import { Text, View, StyleSheet,TextInput } from 'react-native';
import { useNavigation } from "@react-navigation/native";
export default function ManageList() {
    const navigation = useNavigation();
    return(
        <View style = {styles.ManagerList}>
            {/* Header Message Control */}
            <View style = {{borderBottomColor: '#8e8e8e', borderBottomWidth: 1}}>
                <View style = {styles.HeaderManagerList}>
                    <AntDesign name = "arrowleft" size={25} color = "rgb(248, 248, 242)" style ={styles.IconBack} onPress = {(e) =>{navigation.goBack()}}></AntDesign>
                    <Text style = {styles.textManagerList}>Add word or phrases</Text>
                    <AntDesign name = "sharealt" size={25} color = "#8e8e8e" style ={styles.IconShare} ></AntDesign>
                </View>
            </View>
            <View style = {styles.ManagerListContent}>
                <View style = {styles.ManagerListContentItem}>
                    <TextInput style = {styles.textInput} placeholder = "Add word separated by commas..." placeholderTextColor="#8e8e8e"/>
                    <Text style = {styles.textAdd}>Add</Text>
                </View>
                <Text style = {styles.textManagerListContent}>You can add multiple words, phrases and emojis, Your list can be updated anytime.</Text>
            </View>
            {/* Title */}
        </View>
    )
};
const styles = StyleSheet.create({
    ManagerList: {
        flex: 1,
        backgroundColor: 'black',
    },
    HeaderManagerList: {
        flexDirection: 'row',
        height: 40,
        marginBottom: '2%',
    },
    textManagerList: {
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
    IconShare: {
        marginLeft: '23%',
        marginTop: '3%',
    },
    ManagerListContent: {
        marginTop: '2%',
        marginLeft: '5%',
        marginRight: '5%',
    },
    ManagerListContentItem: {
        flexDirection: 'row',
        borderBottomColor: '#098eda',
        borderBottomWidth: 1,
        marginBottom: '2%',
    },
    textInput: {
        width: '85%',
        height: 40,
        marginRight: '5%',
        marginTop: '2%',
        fontSize: 18,
        color: 'white',
    },
    textAdd: {
        fontSize: 17,
        color: '#098eda',
        marginTop: '3%',
    },
    textManagerListContent: {
        fontSize: 15,
        color: '#8e8e8e',
        marginTop: '2%',
    },
});