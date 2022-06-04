import React,{useState} from 'react';
import AntDesign from 'react-native-vector-icons/AntDesign';
import Entypo from 'react-native-vector-icons/Entypo';
import { Text, View, StyleSheet, Pressable, TextInput ,Image,Switch} from 'react-native';
import { useNavigation } from '@react-navigation/native';
export default function BrandContent() {
    const [isEnabled, setIsEnabled] = useState(false);
    const toggleSwitch = () => setIsEnabled(previousState => !previousState);
    const navigation = useNavigation();
    return( 
        <View style = {styles.BrandContent}>
            <View style = {styles.HeaderBrandContent}>
                <AntDesign name = "arrowleft" size={25} color = "rgb(248, 248, 242)" style ={styles.IconBack} onPress = {(e) =>{navigation.goBack()}}></AntDesign>
                <Text style = {styles.textBrandContent}>Branded content</Text>
            </View>
            <View style = {{borderBottomColor : '#8e8e8e', borderBottomWidth : 1}}>
                <Text style = {styles.Status}>Status</Text>
                <View style = {{flexDirection : 'row'}}>
                    <Text style = {styles.textStatus}>Set up branded content tools</Text>
                    <AntDesign name = "right" size={20} color = "#8e8e8e" style ={styles.IconRight}/>
                </View>
                <Text style = {styles.textMore}>Set up branded content tools to start using paid parnership label.</Text>
            </View>
            <Text style = {styles.Support}>Support</Text>
            <View style = {{flexDirection : 'row'}}>
                <Text style = {styles.textStatus}>Learn more</Text>
                <AntDesign name = "right" size={20} color = "#8e8e8e" style ={styles.IconRight}/>
            </View>
        </View>
    );
}
const styles = StyleSheet.create({
    BrandContent: {
        flex: 1,
        backgroundColor: 'black',
    },
    HeaderBrandContent: {
        flexDirection: 'row',
        marginTop : '2%',
        marginLeft : '2%',
    },
    textBrandContent: {
        color : 'white',
        fontSize : 22,
        fontWeight : 'bold',
        marginLeft : '5%',
    },
    IconBack: {
        marginTop : '1%',
        marginLeft : '2%',
    },
    Status: {
        marginTop : '5%',
        marginLeft : '5%',
        color : 'white',
        fontSize : 18,
    },
    textStatus: {
        width : '85%',
        marginTop : '5%',
        marginLeft : '5%',
        color : 'white',
        fontSize : 18,
    },
    textMore: {
        marginTop : '5%',
        marginLeft : '5%',
        color : '#8e8e8e',
        fontSize : 15,
        marginBottom : '5%',
    },
    textResolution: {
        marginTop : '5%',
        marginLeft : '5%',
        color : '#404040',
        fontSize : 18,
    },
    textResolutionNetwork: {
        marginTop : '5%',
        marginLeft : '25%',
        color : '#404040',
        fontSize : 18,
    },
    IconRight: {
        marginTop : '6%',
        marginLeft : '2%',
    },
    Support: {
        marginTop : '5%',
        marginLeft : '5%',
        color : 'white',
        fontSize : 18,
    },
});