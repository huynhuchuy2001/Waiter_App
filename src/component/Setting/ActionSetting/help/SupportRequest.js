import * as React from 'react';
import AntDesign from 'react-native-vector-icons/AntDesign';
import { Text, View, StyleSheet, Pressable} from 'react-native';
import { useNavigation } from '@react-navigation/native';
export default function SupportRequest() {
    const navigation = useNavigation();
    return( 
        <View style = {styles.SupportRequest}>
            <View style = {styles.HeaderSupportRequest}>
                <AntDesign name = "arrowleft" size={30} color = "rgb(248, 248, 242)" style ={styles.IconBack} onPress = {(e) =>{navigation.goBack()}}></AntDesign>
                <Text style = {styles.textSupportRequest}>Support Requests</Text>
            </View>
            {/* Reports */}
            <Pressable style = {styles.Reports} onPress = {() =>{navigation.navigate('Reports')}}>
                <View style = {styles.FlexReports}>
                    <Text style = {styles.textFlexReports}>Reports</Text>
                    <AntDesign name = "right" size={15} color = "rgb(248, 248, 242)" style ={styles.IconRight}></AntDesign>
                </View>
                <Text style = {styles.textReports}>These are reports you've submitted.</Text>
            </Pressable>
            {/* Violation */}
            <Pressable style = {styles.Violations} onPress = {() =>{navigation.navigate('Violations')}}>
                <View style = {styles.FlexViolations}>
                    <Text style = {styles.textFlexViolations}>Violations</Text>
                    <AntDesign name = "right" size={15} color = "rgb(248, 248, 242)" style ={styles.IconRight}></AntDesign>
                </View>
                <Text style = {styles.textViolations}>These are posts you've shared that go against our guidelines.</Text>
            </Pressable>
        </View>
    );
}
const styles = StyleSheet.create({
    SupportRequest: {
        flex: 1,
        backgroundColor: 'black',
    },
    HeaderSupportRequest: {
        flexDirection : 'row',
        height : 40,
        marginTop : '2%',
    },
    IconBack: {
        marginLeft : '2%',
    },
    textSupportRequest: {
        color : 'white',
        fontSize : 20,
        fontWeight : 'bold',
        marginLeft : '10%',
    },
    Reports: {
        borderBottomColor : '#8e8e8e',
        borderBottomWidth : 1,
        marginTop : '5%',
        marginLeft : '5%',
    },
    FlexReports: {
        flexDirection : 'row',
    },
    textFlexReports: {
        width : '80%',
        color : 'white',
        fontSize : 18,
    },
    IconRight: {
        marginLeft : '12%',
        marginTop : '2%',
    },
    textReports: {
        color : '#8e8e8e',
        fontSize : 16,
        marginTop : '2%',
        marginBottom : '3%',
    },
    Violations: {
        borderBottomColor : '#8e8e8e',
        borderBottomWidth : 1,
        marginTop : '5%',
        marginLeft : '5%',
    },
    FlexViolations: {
        flexDirection : 'row',
    },
    textFlexViolations: {
        width : '80%',
        color : 'white',
        fontSize : 18,
    },
    textViolations: {
        width : '90%',
        color : '#8e8e8e',
        fontSize : 16,
        marginTop : '2%',
        marginBottom : '3%',
    }

});