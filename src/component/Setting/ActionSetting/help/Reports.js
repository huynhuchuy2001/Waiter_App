import * as React from 'react';
import AntDesign from 'react-native-vector-icons/AntDesign';
import { Text, View, StyleSheet, Pressable} from 'react-native';
import { useNavigation } from '@react-navigation/native';
export default function Reports() {
    const navigation = useNavigation();
    return( 
        <View style = {styles.Reports}>
            <View style = {styles.HeaderReports}>
                <AntDesign name = "arrowleft" size={30} color = "rgb(248, 248, 242)" style ={styles.IconBack} onPress = {(e) =>{navigation.goBack()}}></AntDesign>
                <Text style = {styles.textReports}>Reports</Text>
            </View>
            <Text style = {styles.textReportsTitle}>You haven't reported anything</Text>
            <Text style = {styles.textReportsContent}>Read our Community Guidelines to learn what we allow on Waiter and how you can help us report and remove what we don't.</Text>
            <Text style = {styles.textSeeMore}>See Community Guidelines</Text>
        </View>
    );
}
const styles = StyleSheet.create({
    Reports: {
        flex: 1,
        backgroundColor: 'black',
    },
    HeaderReports: {
        flexDirection : 'row',
        height : 40,
        marginTop : '2%',
    },
    IconBack: {
        marginLeft : '2%',
    },
    textReports: {
        color : 'white',
        fontSize : 20,
        fontWeight : 'bold',
        marginLeft : '10%',
    },
    textReportsTitle: {
        color : 'white',
        fontSize : 23,
        fontWeight : 'bold',
        textAlign : 'center',
        marginTop : '50%',
    },
    textReportsContent: {
        width : '90%',
        color : '#8e8e8e',
        fontSize : 15,
        marginLeft : '5%',
        textAlign : 'center',
        marginTop : '3%',
    },
    textSeeMore: {
        color : 'white',
        fontSize : 15,
        textAlign : 'center',
        marginTop : '3%',
    }
});