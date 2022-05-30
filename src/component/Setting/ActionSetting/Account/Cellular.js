import React,{useState} from 'react';
import AntDesign from 'react-native-vector-icons/AntDesign';
import Entypo from 'react-native-vector-icons/Entypo';
import { Text, View, StyleSheet, Pressable, TextInput ,Image,Switch} from 'react-native';
import { useNavigation } from '@react-navigation/native';
export default function Cellular() {
    const [isEnabled, setIsEnabled] = useState(false);
    const toggleSwitch = () => setIsEnabled(previousState => !previousState);
    const navigation = useNavigation();
    return( 
        <View style = {styles.Cellular}>
            <View style = {styles.HeaderCellular}>
                <AntDesign name = "arrowleft" size={25} color = "rgb(248, 248, 242)" style ={styles.IconBack} onPress = {(e) =>{navigation.goBack()}}></AntDesign>
                <Text style = {styles.textCellular}>Cellular data settings</Text>
            </View>
            <Text style = {styles.textUseData}>Use less data</Text>
            <View style = {{flexDirection : 'row'}}>
                <Text style = {styles.textDataSave}>Data Saver</Text>
                <Switch 
                    trackColor={{ false: "#767577", true: "#81b0ff" }}
                    thumbColor={isEnabled ? "#f5dd4b" : "#f4f3f4"}
                    ios_backgroundColor="#3e3e3e"
                    onValueChange={toggleSwitch}
                    value={isEnabled}
                    style = {{marginLeft : '60%', marginTop : '5%'}}
                />
            </View>
            <Text style = {styles.textMore}>When Data Saver is turned on, videos won't load in advance to help you use less data.</Text>
            <View style = {{flexDirection : 'row'}}>
                <Text style = {styles.textResolution}>High resolution media</Text>
                <Text style = {styles.textResolutionNetwork}>Wi-Fi only</Text>
            </View>
        </View>
    );
}
const styles = StyleSheet.create({
    Cellular: {
        flex: 1,
        backgroundColor: 'black',
    },
    HeaderCellular: {
        flexDirection: 'row',
        marginTop : '2%',
        marginLeft : '2%',
    },
    textCellular: {
        color : 'white',
        fontSize : 22,
        fontWeight : 'bold',
        marginLeft : '5%',
    },
    IconBack: {
        marginTop : '1%',
        marginLeft : '2%',
    },
    textUseData: {
        marginTop : '5%',
        marginLeft : '5%',
        color : 'white',
        fontSize : 18,
    },
    textDataSave: {
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
});