import * as React from 'react';
import AntDesign from 'react-native-vector-icons/AntDesign';
import { Text, View, StyleSheet, Pressable} from 'react-native';
import { useNavigation } from '@react-navigation/native';
export default function Abouts() {
    const navigation = useNavigation();
    return( 
        <View style = {styles.Abouts}>
            <View style = {styles.HeaderAbouts}>
                <AntDesign name = "arrowleft" size={30} color = "rgb(248, 248, 242)" style ={styles.IconBack} onPress = {(e) =>{navigation.goBack()}}></AntDesign>
                <Text style = {styles.textAbouts}>About</Text>
            </View>
            {/* Data Policy */}
            <Text style = {styles.textDataPolicy}>Data Policy</Text>
            {/* Terms */}
            <Text style = {styles.textTerms}>Terms of Use</Text>
            {/* Open source libraries */}
            <Text style = {styles.textOpenSource}>Open Source Libraries</Text>
        </View>
    );
}
const styles = StyleSheet.create({
    Abouts: {
        flex: 1,
        backgroundColor: 'black',
    },
    HeaderAbouts: {
        flexDirection : 'row',
        height : 40,
        marginTop : '2%',
    },
    IconBack: {
        marginLeft : '2%',
    },
    textAbouts: {
        color : 'white',
        fontSize : 20,
        fontWeight : 'bold',
        marginLeft : '10%',
    },
    textDataPolicy: {
        color : 'white',
        fontSize : 18,
        marginTop : '5%',
        marginLeft : '5%',
    },
    textTerms: {
        color : 'white',
        fontSize : 18,
        marginTop : '5%',
        marginLeft : '5%',
    },
    textOpenSource: {
        color : 'white',
        fontSize : 18,
        marginTop : '5%',
        marginLeft : '5%',
    }
});