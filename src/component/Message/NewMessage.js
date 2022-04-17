import * as React from 'react';
import AntDesign from 'react-native-vector-icons/AntDesign';
import Ionicons from 'react-native-vector-icons/Ionicons';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import Fontisto from 'react-native-vector-icons/Fontisto';
import { Text,Button, View, StyleSheet, TextInput,Image,ScrollView,ImageBackground } from 'react-native';
import { useNavigation } from "@react-navigation/native";
export default function NewMessage() {
    const navigation = useNavigation();
    var arraySuggestSearch = [
        {
            nameFB : 'Đức Trường',
            name : 'hdhtruong1985',
            status : 'online',
            image : 'https://scontent.fsgn4-1.fna.fbcdn.net/v/t39.30808-6/272991438_1571607939871527_6579089651911998367_n.jpg?_nc_cat=103&ccb=1-5&_nc_sid=09cbfe&_nc_ohc=0yrT4Ddm2MEAX-BaOkp&_nc_ht=scontent.fsgn4-1.fna&oh=00_AT_t-lukzFdRL8IOBAJ_ihyv62ElheSLCGkGcsXQtNP0cw&oe=625FA506'
        },
        {
            nameFB : 'Trường Sinh',
            name : 'truonsinh.ben',
            status : 'offline',
            image : 'https://scontent.fsgn3-1.fna.fbcdn.net/v/t39.30808-1/185526923_1334442560290882_6475410094091613892_n.jpg?stp=dst-jpg_p320x320&_nc_cat=104&ccb=1-5&_nc_sid=7206a8&_nc_ohc=vh-1deZnVFMAX-CL9Rq&_nc_ht=scontent.fsgn3-1.fna&oh=00_AT-tUjdRuwBIzRTh5a6EpMZUvZ7ZX1DykLCmSP9J1TROCw&oe=626076E4'
        },
        {
            nameFB : 'Trường Mai',
            name : 'truongmai1982',
            status : 'online',
            image : 'https://scontent.fsgn13-2.fna.fbcdn.net/v/t39.30808-1/274723232_2095406903969072_7504427080082865401_n.jpg?stp=dst-jpg_p320x320&_nc_cat=106&ccb=1-5&_nc_sid=7206a8&_nc_ohc=mF8bPnwU1TwAX_TZXOy&_nc_ht=scontent.fsgn13-2.fna&oh=00_AT_fPpbhcpaFDxDX31d_ZQp0YtkBgupf58VrAqWoqi8CnA&oe=6260E6D5'
        },
        {
            nameFB : 'Đức Hùng',
            name : 'hdhhung.73',
            status : 'online',
            image : 'https://scontent-sin6-4.xx.fbcdn.net/v/t1.6435-9/52696062_101541554333212_6443151805353295872_n.jpg?_nc_cat=103&ccb=1-5&_nc_sid=09cbfe&_nc_ohc=iVYxj2aTG4MAX9KnVR1&_nc_ht=scontent-sin6-4.xx&oh=00_AT91XhpTsxpNb7NguhkEdM6FjBuqzXxj45JWgs4OlLsxbQ&oe=627DBD8C'
        },
        {
            nameFB : 'Tường Vi',
            name : 'vituong.vi91',
            status : 'offline',
            image : 'https://scontent-sin6-1.xx.fbcdn.net/v/t39.30808-6/272152926_1240913986401147_8867493523089750699_n.jpg?_nc_cat=111&ccb=1-5&_nc_sid=09cbfe&_nc_ohc=9Nz4bVKM5joAX8fhbRi&_nc_ht=scontent-sin6-1.xx&oh=00_AT_PmiSFopbNLfgeXZxQVCC1nETPN56gDmF5MNinf4vlsQ&oe=625C53AC'
        },
        {
            nameFB : 'Huy Huỳnh',
            name : 'hdh.huyyyy',
            status : 'online',
            image : 'https://scontent.fsgn4-1.fna.fbcdn.net/v/t39.30808-6/274876629_2826541607639210_363529317853290439_n.jpg?_nc_cat=101&ccb=1-5&_nc_sid=09cbfe&_nc_ohc=zhn6GxH97wsAX9igMrU&_nc_ht=scontent.fsgn4-1.fna&oh=00_AT8CV-QY77nPfLu8se8Ba5bfAa8KH96jrUmxQJa0CXTW2A&oe=625BCEB5'
        },
        {
            nameFB : 'Đức Hoan',
            name : 'hoanhd.2005',
            status : 'online',
            image : 'https://scontent.fsgn8-1.fna.fbcdn.net/v/t1.30497-1/143086968_2856368904622192_1959732218791162458_n.png?stp=cp0_dst-png_p80x80&_nc_cat=1&ccb=1-5&_nc_sid=7206a8&_nc_ohc=iuMIcxiCMkcAX_TVYh4&_nc_oc=AQnCMwFO0ikM1T3PNmT6hLfYsZgH-UFncWKfNhVaUwjq4DeJjL3Zz5o9N1VoxVT46V_F5s1RY-Ndwrkb3kv6fw1r&_nc_ht=scontent.fsgn8-1.fna&oh=00_AT8o3TOeWVcpPpS4Gy7NagZtopzLFPdCkkGCAzsGaaMdEQ&oe=627B5DF8'
        },
        {
            nameFB : 'Cẩm Vân',
            name : 'camvan77',
            status : 'offline',
            image : 'https://scontent.fsgn13-2.fna.fbcdn.net/v/t39.30808-6/273154334_1123664431736763_6121942889354663811_n.jpg?_nc_cat=108&ccb=1-5&_nc_sid=09cbfe&_nc_ohc=BoFOVA5QuwIAX-KiXcQ&tn=98Qe8qL2dr5GlQT0&_nc_ht=scontent.fsgn13-2.fna&oh=00_AT8FeFwFTaLe6n_2eXdstYnWoCRVcEtpZZNsA2y4eGBazw&oe=625CDBAA'
        },
        {
            nameFB : 'Đức Trường',
            name : 'hdhtruong1985',
            status : 'offline',
            image : 'https://scontent.fsgn4-1.fna.fbcdn.net/v/t39.30808-6/272991438_1571607939871527_6579089651911998367_n.jpg?_nc_cat=103&ccb=1-5&_nc_sid=09cbfe&_nc_ohc=0yrT4Ddm2MEAX-BaOkp&_nc_ht=scontent.fsgn4-1.fna&oh=00_AT_t-lukzFdRL8IOBAJ_ihyv62ElheSLCGkGcsXQtNP0cw&oe=625FA506'
        },
        {
            nameFB : 'Trường Sinh',
            name : 'truonsinh.ben',
            status : 'online',
            image : 'https://scontent.fsgn3-1.fna.fbcdn.net/v/t39.30808-1/185526923_1334442560290882_6475410094091613892_n.jpg?stp=dst-jpg_p320x320&_nc_cat=104&ccb=1-5&_nc_sid=7206a8&_nc_ohc=vh-1deZnVFMAX-CL9Rq&_nc_ht=scontent.fsgn3-1.fna&oh=00_AT-tUjdRuwBIzRTh5a6EpMZUvZ7ZX1DykLCmSP9J1TROCw&oe=626076E4'
        },
        {
            nameFB : 'Trường Mai',
            name : 'truongmai1982',
            status : 'offline',
            image : 'https://scontent.fsgn13-2.fna.fbcdn.net/v/t39.30808-1/274723232_2095406903969072_7504427080082865401_n.jpg?stp=dst-jpg_p320x320&_nc_cat=106&ccb=1-5&_nc_sid=7206a8&_nc_ohc=mF8bPnwU1TwAX_TZXOy&_nc_ht=scontent.fsgn13-2.fna&oh=00_AT_fPpbhcpaFDxDX31d_ZQp0YtkBgupf58VrAqWoqi8CnA&oe=6260E6D5'
        },
        {
            nameFB : 'Đức Hùng',
            name : 'hdhhung.73',
            status : 'online',
            image : 'https://scontent-sin6-4.xx.fbcdn.net/v/t1.6435-9/52696062_101541554333212_6443151805353295872_n.jpg?_nc_cat=103&ccb=1-5&_nc_sid=09cbfe&_nc_ohc=iVYxj2aTG4MAX9KnVR1&_nc_ht=scontent-sin6-4.xx&oh=00_AT91XhpTsxpNb7NguhkEdM6FjBuqzXxj45JWgs4OlLsxbQ&oe=627DBD8C'
        },
        {
            nameFB : 'Tường Vi',
            name : 'vituong.vi91',
            status : 'offline',
            image : 'https://scontent-sin6-1.xx.fbcdn.net/v/t39.30808-6/272152926_1240913986401147_8867493523089750699_n.jpg?_nc_cat=111&ccb=1-5&_nc_sid=09cbfe&_nc_ohc=9Nz4bVKM5joAX8fhbRi&_nc_ht=scontent-sin6-1.xx&oh=00_AT_PmiSFopbNLfgeXZxQVCC1nETPN56gDmF5MNinf4vlsQ&oe=625C53AC'
        },
        {
            nameFB : 'Huy Huỳnh',
            name : 'hdh.huyyyy',
            status : 'offline',
            image : 'https://scontent.fsgn4-1.fna.fbcdn.net/v/t39.30808-6/274876629_2826541607639210_363529317853290439_n.jpg?_nc_cat=101&ccb=1-5&_nc_sid=09cbfe&_nc_ohc=zhn6GxH97wsAX9igMrU&_nc_ht=scontent.fsgn4-1.fna&oh=00_AT8CV-QY77nPfLu8se8Ba5bfAa8KH96jrUmxQJa0CXTW2A&oe=625BCEB5'
        },
        {
            nameFB : 'Đức Hoan',
            name : 'hoanhd.2005',
            status : 'online',
            image : 'https://scontent.fsgn8-1.fna.fbcdn.net/v/t1.30497-1/143086968_2856368904622192_1959732218791162458_n.png?stp=cp0_dst-png_p80x80&_nc_cat=1&ccb=1-5&_nc_sid=7206a8&_nc_ohc=iuMIcxiCMkcAX_TVYh4&_nc_oc=AQnCMwFO0ikM1T3PNmT6hLfYsZgH-UFncWKfNhVaUwjq4DeJjL3Zz5o9N1VoxVT46V_F5s1RY-Ndwrkb3kv6fw1r&_nc_ht=scontent.fsgn8-1.fna&oh=00_AT8o3TOeWVcpPpS4Gy7NagZtopzLFPdCkkGCAzsGaaMdEQ&oe=627B5DF8'
        },
        {
            nameFB : 'Cẩm Vân',
            name : 'camvan77',
            status : 'online',
            image : 'https://scontent.fsgn13-2.fna.fbcdn.net/v/t39.30808-6/273154334_1123664431736763_6121942889354663811_n.jpg?_nc_cat=108&ccb=1-5&_nc_sid=09cbfe&_nc_ohc=BoFOVA5QuwIAX-KiXcQ&tn=98Qe8qL2dr5GlQT0&_nc_ht=scontent.fsgn13-2.fna&oh=00_AT8FeFwFTaLe6n_2eXdstYnWoCRVcEtpZZNsA2y4eGBazw&oe=625CDBAA'
        }
    ]
    return(
        <View style = {styles.MessageScreen}>
            {/* Header Message */}
            <View style = {styles.HeaderNewMessage}>
                <View style = {styles.HeaderMessage}>
                    <AntDesign name = "arrowleft" size={25} color = "rgb(248, 248, 242)" style ={styles.IconBack} onPress = {() =>{navigation.navigate('Messages')}}/>
                    <Text style = {styles.textMessage}>New message</Text>
                    <Text style = {styles.textChat}>Chat</Text>
                </View>
                <Text style = {styles.textTitle}>To</Text>
                <TextInput style = {styles.textInput} placeholder = "Search" placeholderTextColor="#8e8e8e"/>
            </View>
            {/* List User add to send Message */}
            <ScrollView showsVerticalScrollIndicator={false} style = {{backgroundColor : 'black',height : '100%'}}>
                <Text style = {styles.Title}>Suggested</Text>
                {/* List User */}
                {arraySuggestSearch.map(item =>(
                    <View style = {styles.MessageBody}>
                        <ImageBackground style={styles.tinyLogoFriend} source = {{uri: item.image}} imageStyle={{ borderRadius: 50/2 }}>
                            <View style = {{width: 18, height: 18, borderRadius: 18/2, backgroundColor: 'black',marginLeft : '70%', marginTop : '70%'}}>
                                {
                                    item.status === 'online' ?
                                    <View style = {styles.AcctiveNow}/> : 
                                    <View style = {styles.InAcctive}/>
                                }
                            </View>
                        </ImageBackground>
                        <View style = {styles.UserMessageInfor}>
                            <Text style = {styles.NameUser}>{item.nameFB}</Text>
                            <Text style = {styles.MessageText}>{item.name}</Text>
                        </View>
                        <MaterialCommunityIcons name = "checkbox-blank-circle-outline" size={25} color = "#8e8e8e" style ={styles.IconRight}/>
                    </View>
                ))}
            </ScrollView>
        </View>
    )
};
const styles = StyleSheet.create({
    MessageScreen: {
        flex: 1,
        backgroundColor: 'black',
    },
    HeaderNewMessage: {
        height: 120,
    },
    HeaderMessage: {
        flexDirection: 'row',
    },
    textMessage: {
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
    textChat : {
        color: '#8e8e8e',
        fontSize: 20,
        fontWeight: 'bold',
        marginTop : '3%',
        marginLeft: '35%',
    },
    textTitle: {
        color : 'white',
        fontSize: 20,
        marginLeft: '2%',
        marginTop : '2%',
        fontWeight: 'bold',
    },
    textInput: {
        fontSize: 20,
        marginLeft: '3%',
        color: 'white',
    }
    ,
    Title : {
        color : 'white',
        fontSize : 18,
        marginTop : '2%',
        marginLeft : '5%',
    },
    MessageBody: {
        flexDirection : 'row',
        marginLeft: '5%',
    },
    UserMessageInfor : {
        width : '45%',
        marginLeft : '8%',
        marginTop : '7%',
    },
    NameUser : {
        color : 'white',
        fontSize : 14,
    },
    MessageText : {
        color : '#8e8e8e',
        fontSize : 13,
    },
    tinyLogoFriend: {
        marginLeft: 15,
        width: 50,
        height: 50,
        borderRadius: 50/2,
        marginTop: '5%',
    },
    AcctiveNow : {
        backgroundColor : 'rgb(0, 168, 42)',
        width : 15,
        height : 15,
        borderRadius : 15/2,
        marginLeft : '8%',
        marginTop : '8%',
    },
    InAcctive : {
        backgroundColor : 'rgb(205, 10, 38)',
        width : 15,
        height : 15,
        borderRadius : 15/2,
        marginLeft : '8%',
        marginTop : '8%',
    },
    IconRight : {
        marginLeft : '18%',
        marginTop : '7%',
    }
});