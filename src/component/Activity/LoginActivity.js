import React from 'react';
import AntDesign from 'react-native-vector-icons/AntDesign';
import EvilIcons from 'react-native-vector-icons/EvilIcons';
import Entypo from 'react-native-vector-icons/Entypo';
import { Text, View, StyleSheet, ScrollView,Image,Pressable} from 'react-native';
import { useNavigation } from "@react-navigation/native";
export default function LoginActivity(){
    const navigation = useNavigation();
    var location = [
        {
            location : 'Bình long, Bình Phước, Vietnam',
            address : 'This M2012K11AC',
            status : 'Active now',
        },
        {
            location : 'London, United Kingdom',
            address : 'Windows 11',
            status : '1 day ago',
        },
        {
            location : 'Đồng Xoài, Bình Phước, Vietnam',
            address : 'M2012K11AC',
            status : 'April 13, 2021',
        },
        {
            location : 'Bình long, Bình Phước, Vietnam',
            address : 'Xiaomi Redmi K40',
            status : '2 hours ago',
        },
        {
            location : 'Đồng Xoài, Bình Phước, Vietnam',
            address : 'Xiaomi Redmi Note 7',
            status : 'February 27',
        },
        ,
        {
            location : 'London, United Kingdom',
            address : 'Windows 11',
            status : '1 day ago',
        },
        {
            location : 'Đồng Xoài, Bình Phước, Vietnam',
            address : 'M2012K11AC',
            status : 'April 13, 2021',
        },
        {
            location : 'Bình long, Bình Phước, Vietnam',
            address : 'Xiaomi Redmi K40',
            status : '2 hours ago',
        },
        {
            location : 'Đồng Xoài, Bình Phước, Vietnam',
            address : 'Xiaomi Redmi Note 7',
            status : 'February 27',
        }
    ]
    return(
        <View style={styles.LoginActivitycontainer}>
            {/* Header Edit Profile */}
            <View style={styles.HeaderLoginActivity}>
                <AntDesign name="arrowleft" size={30} color="white" onPress={() => navigation.goBack()} style ={{marginTop : '2%',marginLeft : '2%'}}/>
                <Text style={styles.HeaderLoginActivityText}>Login activity</Text>
            </View>
            {/* Location */}
            <ScrollView showsVerticalScrollIndicator={false} style={styles.Location}>
                <View style = {styles.mylocation}>
                    <Text style={styles.LocationText}>Was this you?</Text>
                    <View style={styles.LocationBackground}>
                        <Image source={require('../../assets/Images/location.png')} style={styles.LocationImage}/>
                        <View style = {styles.TitleLocation}>
                            <Text style={styles.TitleLocationText}>This was me</Text>
                            <Text style={styles.NoTitleLocationText} onPress = {() =>{navigation.navigate('EditPassword')}}>This wasn't me</Text>
                        </View>
                    </View>
                </View>
                <View style = {styles.Loginlocation}>
                    <Text style={styles.LoginLocationText}>Where you're logged in</Text>
                    {/* Logged in with location */}
                    {location.map(item => (
                        <View style = {styles.ThisMyLocation}>
                            <EvilIcons name="location" size={30} color="white" style = {{marginTop : '3%'}}/>
                            <View style = {styles.DetailsLocation}>
                                <Text style={styles.DetailsLocationText}>{item.location}</Text>
                                {item.status === 'Active now' ?
                                    <Text style={styles.ActiveLocationText}>{item.status} 
                                        <Text> </Text><Entypo name="dot-single" size={15} color="#8e8e8e"/> <Text style={styles.ActiveLocationAddress}>{item.address}</Text>
                                    </Text> 
                                    :
                                    <Text style={styles.InActiveLocationText}>{item.status} 
                                        <Text> </Text><Entypo name="dot-single" size={15} color="#8e8e8e"/> <Text style={styles.ActiveLocationAddress}>{item.address}</Text>
                                    </Text> 
                                }
                            </View>
                            <Entypo name="dots-three-horizontal" size={20} color="white" style = {styles.Icondot}/>
                        </View>
                    ))}
                </View>
            </ScrollView>
        </View>
    )
};
const styles = StyleSheet.create({
    LoginActivitycontainer: {
        backgroundColor: 'black',
    },
    HeaderLoginActivity: {
        backgroundColor: 'black',
        flexDirection: 'row',
        height: 50,
    },
    HeaderLoginActivityText: {
        color: 'white',
        fontWeight: 'bold',
        fontSize: 22,
        marginTop: '2%',
        marginLeft: '5%',
    },
    Location: {
        backgroundColor: 'black',
        marginTop: '2%',
        height : '100%',
        marginLeft: '5%',
    },
    LocationText: {
        color: 'white',
        fontSize: 18,
    },
    LocationBackground: {
        marginTop: '2%',
        marginEnd: '4%',
        borderColor: '#8e8e8e',
        borderWidth: 1,
        height : 240
    },
    LocationImage: {
        width: '100%',
        height: 170,
    },
    TitleLocation: {
        flexDirection: 'row',
        marginTop: '6%',
        marginLeft: '5%',
    },
    TitleLocationText: {
        color: 'white',
        fontSize: 18,
        textAlign: 'center',
        width: '50%',
        borderRightColor: '#8e8e8e',
        borderRightWidth: 1,
    },
    NoTitleLocationText: {
        color: 'white',
        fontSize: 18,
        textAlign: 'center',
        width: '50%',
    },
    mylocation: {},
    Loginlocation: {
        marginTop: '5%',
    },
    LoginLocationText: {
        color: 'white',
        fontSize: 18,
    },
    ThisMyLocation: {
        flexDirection: 'row',
        marginTop: '5%',
    },
    DetailsLocation: {
        marginLeft: '5%',
        width: '70%',
    },
    DetailsLocationText: {
        color: 'white',
        fontSize: 16,
    },
    ActiveLocationText: {
        color: 'rgb(80, 250, 123)',
        fontSize: 16,
        marginTop: '2%',
    },
    InActiveLocationText: {
        color: '#8e8e8e',
        fontSize: 16,
        marginTop: '2%',
    },
    ActiveLocationAddress: {
        color: '#8e8e8e',
        fontSize: 16,
    },
    Icondot: {
        marginTop: '4%',
        marginLeft: '5%',
    },
});