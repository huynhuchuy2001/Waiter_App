import * as React from 'react';
import AntDesign from 'react-native-vector-icons/AntDesign';
import { Text, View, StyleSheet, Pressable, TextInput ,Switch} from 'react-native';
import { useNavigation } from '@react-navigation/native';
export default function Ads() {
    const navigation = useNavigation();
    return( 
        <View style = {styles.Ads}>
            <View style = {styles.HeaderAds}>
                <AntDesign name = "arrowleft" size={30} color = "rgb(248, 248, 242)" style ={styles.IconBack} onPress = {(e) =>{navigation.goBack()}}></AntDesign>
                <Text style = {styles.textAds}>Ads</Text>
            </View>
            <View style = {styles.AdsContent}>
                <Text style = {styles.textAdsContent}>Ad preferences</Text>
                <Text style = {styles.textAdsContent}>Ad topics</Text>
                <Text style = {styles.textAdsContent}>Data about your activity from partners</Text>
            </View>
            <Text style = {styles.textAdsBottom}>General info</Text>
            <Text style = {styles.textAdsBottom}>Ad interests</Text>
            <Text style = {styles.textAdsBottom}>Ad activity</Text>
            <Text style = {styles.textAdsBottom}>About Ads</Text>
        </View>
    );
}
const styles = StyleSheet.create({
    Ads: {
        flex: 1,
        backgroundColor: 'black',
    },
    HeaderAds: {
        flexDirection : 'row',
        height : 40,
        marginTop : '2%',
        borderBottomColor : '#8e8e8e',
        borderBottomWidth : 1,
    },
    IconBack: {
        marginLeft : '2%',
    },
    textAds: {
        color : 'white',
        fontSize : 20,
        fontWeight : 'bold',
        marginLeft : '10%',
    },
    AdsContent : {
        borderBottomColor : '#8e8e8e',
        borderBottomWidth : 1,
        marginTop : '5%',
    },
    textAdsContent: {
        color : 'white',
        fontSize : 18,
        marginTop : '2%',
        marginLeft : '5%',
        marginBottom : '3%',
    },
    textAdsBottom: {
        color : 'white',
        fontSize : 18,
        marginLeft : '5%',
        marginTop : '5%',
    }
});
