import * as React from 'react';
import AntDesign from 'react-native-vector-icons/AntDesign';
import { Text, View, StyleSheet, Pressable} from 'react-native';
import { useNavigation } from '@react-navigation/native';
export default function Violations() {
    const navigation = useNavigation();
    return( 
        <View style = {styles.Violations}>
            <View style = {styles.HeaderViolations}>
                <AntDesign name = "arrowleft" size={30} color = "rgb(248, 248, 242)" style ={styles.IconBack} onPress = {(e) =>{navigation.goBack()}}></AntDesign>
                <Text style = {styles.textViolations}>Violiations</Text>
            </View>
            <Text style = {styles.textViolationTitle}>You haven't have any violations</Text>
            <Text style = {styles.textViolationContent}>Read our Community Guidelines to learn what we allow on Waiter and how you can help us report and remove what we don't.</Text>
            <Text style = {styles.textSeeMore}>See Community Guidelines</Text>
        </View>
    );
}
const styles = StyleSheet.create({
    Violations: {
        flex: 1,
        backgroundColor: 'black',
    },
    HeaderViolations: {
        flexDirection : 'row',
        height : 40,
        marginTop : '2%',
    },
    IconBack: {
        marginLeft : '2%',
    },
    textViolations: {
        color : 'white',
        fontSize : 20,
        fontWeight : 'bold',
        marginLeft : '10%',
    },
    textViolationTitle: {
        color : 'white',
        fontSize : 23,
        fontWeight : 'bold',
        textAlign : 'center',
        marginTop : '50%',
    },
    textViolationContent: {
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