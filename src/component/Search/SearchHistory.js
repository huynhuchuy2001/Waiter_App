import * as React from 'react';
import AntDesign from 'react-native-vector-icons/AntDesign';
import EvilIcons from 'react-native-vector-icons/EvilIcons';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5';
import Fontisto from 'react-native-vector-icons/Fontisto';
import { Text,Button, View, StyleSheet, TextInput,Image,ScrollView} from 'react-native';
import { useNavigation } from "@react-navigation/native";
export default function SearchHistorys() {
    const navigation = useNavigation();
    var SearchHistory = [
        {
            name : 'HuyHuy'
        },
        {
            name : 'cris'
        },
        {
            name : 'benzema'
        }
    ]
    var arrayRecentUserSearch = [
        {
            name : 'HuyHuy',
            image : 'https://scontent.fsgn4-1.fna.fbcdn.net/v/t39.30808-6/274876629_2826541607639210_363529317853290439_n.jpg?_nc_cat=101&ccb=1-5&_nc_sid=09cbfe&_nc_ohc=zhn6GxH97wsAX9igMrU&_nc_ht=scontent.fsgn4-1.fna&oh=00_AT8CV-QY77nPfLu8se8Ba5bfAa8KH96jrUmxQJa0CXTW2A&oe=625BCEB5',
        },
        {
            name : 'DucHoan',
            image : 'https://scontent.fsgn8-1.fna.fbcdn.net/v/t1.30497-1/143086968_2856368904622192_1959732218791162458_n.png?stp=cp0_dst-png_p80x80&_nc_cat=1&ccb=1-5&_nc_sid=7206a8&_nc_ohc=iuMIcxiCMkcAX_TVYh4&_nc_oc=AQnCMwFO0ikM1T3PNmT6hLfYsZgH-UFncWKfNhVaUwjq4DeJjL3Zz5o9N1VoxVT46V_F5s1RY-Ndwrkb3kv6fw1r&_nc_ht=scontent.fsgn8-1.fna&oh=00_AT8o3TOeWVcpPpS4Gy7NagZtopzLFPdCkkGCAzsGaaMdEQ&oe=627B5DF8',
        },
        {
            name : 'CamVan',
            image : 'https://scontent.fsgn13-2.fna.fbcdn.net/v/t39.30808-6/273154334_1123664431736763_6121942889354663811_n.jpg?_nc_cat=108&ccb=1-5&_nc_sid=09cbfe&_nc_ohc=BoFOVA5QuwIAX-KiXcQ&tn=98Qe8qL2dr5GlQT0&_nc_ht=scontent.fsgn13-2.fna&oh=00_AT8FeFwFTaLe6n_2eXdstYnWoCRVcEtpZZNsA2y4eGBazw&oe=625CDBAA',
        },
        {
            name : 'Tường Vi',
            image : 'https://scontent-sin6-1.xx.fbcdn.net/v/t39.30808-6/272152926_1240913986401147_8867493523089750699_n.jpg?_nc_cat=111&ccb=1-5&_nc_sid=09cbfe&_nc_ohc=9Nz4bVKM5joAX8fhbRi&_nc_ht=scontent-sin6-1.xx&oh=00_AT_PmiSFopbNLfgeXZxQVCC1nETPN56gDmF5MNinf4vlsQ&oe=625C53AC',
        },
        {
            name : 'DucHung',
            image : 'https://scontent-sin6-4.xx.fbcdn.net/v/t1.6435-9/52696062_101541554333212_6443151805353295872_n.jpg?_nc_cat=103&ccb=1-5&_nc_sid=09cbfe&_nc_ohc=iVYxj2aTG4MAX9KnVR1&_nc_ht=scontent-sin6-4.xx&oh=00_AT91XhpTsxpNb7NguhkEdM6FjBuqzXxj45JWgs4OlLsxbQ&oe=627DBD8C',
        }
    ]
    return(
        <View style = {styles.SearchHistorys}>
            {/* Header Search */}
            <View style = {styles.Search}>
                <AntDesign name = "arrowleft" size={25} color = "rgb(248, 248, 242)" style ={styles.IconBack} onPress = {() =>{navigation.goBack()}}/>
                <Text style = {styles.TextSearchHistorys}>Search history</Text>
            </View>
            {/* Recent User Search */}
            <ScrollView style = {{backgroundColor : 'black', height : '100%'}}>
                <View style = {styles.TitleSearch}>
                    <Text style = {styles.TextTitleSearch}>Only things you have searched for in the main search bar will appear here.</Text>
                </View>
                <View style = {styles.SearchHistory}>
                    <View style = {styles.SearchHistoryItem}>
                        <Text style = {styles.SearchHistoryItemText}>Recent searches</Text>
                        <Text style = {styles.SearchSeeAllText}>Clear all</Text>
                    </View>
                </View>
                {/* Recent User Search history */}
                {SearchHistory.map(item => (
                    <View style = {styles.IconSearchHistory}>
                        <View style = {styles.Recent}>
                            <View style = {styles.BorderIconSearchWidth}>
                                <View style = {styles.BorderIconSearch}>
                                    <AntDesign name = "search1" size={25} color = "rgb(248, 248, 242)" style ={styles.IconSearch} />
                                </View>
                            </View>
                            <Text style = {styles.RecentSearch}>{item.name}</Text>
                        </View>
                        <AntDesign name = "close" size={15} color = "rgb(248, 248, 242)" style ={styles.IconClose} />
                    </View>
                ))}
                {/* List Recent User Search */}
                {arrayRecentUserSearch.map(item => (
                    <View style = {styles.IconSearchUserHistory}>
                        <View style = {styles.RecentUserSearch}>
                            <Image  source = {{uri : item.image}} style = {styles.ImageUserSearch}/>
                            <Text style = {styles.UserSearch}>{item.name}</Text>
                        </View>
                        <AntDesign name = "close" size={15} color = "rgb(248, 248, 242)" style ={styles.IconClose} />
                    </View>
                ))}

            </ScrollView>
        </View>
    )
};
const styles = StyleSheet.create({
    SearchHistorys : {
        backgroundColor : 'black',
    },
    Search : {
        flexDirection : 'row',
        height: 50,

    },
    TextSearchHistorys : {
        color : 'white',
        fontSize : 22,
        fontWeight : 'bold',
        marginLeft : '10%',
        marginTop : '2%',
    },
    IconBack: {
        marginLeft: '2%',
        marginTop: 12,
    },
    TitleSearch : {
        marginTop : '2%',
        marginLeft : '5%',
    },
    TextTitleSearch : {
        color : '#8e8e8e',
        fontSize : 17,
    },
    SearchHistory : {
        marginTop : '2%',
    },
    SearchHistoryItem : {
        flexDirection : 'row',
        marginTop : '2%',
    },
    SearchHistoryItemText : {
        color : 'white',
        fontSize : 18,
        fontWeight : 'bold',
        marginLeft : '5%',

    },
    SearchSeeAllText : {
        color : '#5ccfe6',
        fontSize : 17,
        marginLeft : '40%',
        fontWeight : 'normal',
    },
    IconSearchHistory : {
        flexDirection : 'row',
    },
    Recent : {
        flexDirection : 'row',
        width : '80%',
    },
    BorderIconSearchWidth : {
        width : 50,
        height : 50,
        borderRadius : 50/2,
        backgroundColor : '#1F2739',
        marginTop : '4%',
        marginLeft : '5%',
    },
    BorderIconSearch : {
        width : 48,
        height : 48,
        borderRadius : 48/2,
        backgroundColor : 'black',
        marginTop : '2%',
        marginLeft : '2%',

    },
    IconSearch : {
        marginLeft : '25%',
        marginTop : '25%',
    },
    RecentSearch : {
        width : '60%',
        color : 'white',
        marginLeft : '10%',
        marginTop : '8%',
    },
    IconClose : {
        width : '30%',
        marginLeft : '12%',
        marginTop : '7%',
    },
    IconSearchUserHistory : {
        flexDirection : 'row',
        marginTop : '2%',
    },
    RecentUserSearch : {
        flexDirection : 'row',
        width : '80%',
    },
    ImageUserSearch : {
        width : 50,
        height : 50,
        borderRadius : 50/2,
        backgroundColor : '#1F2739',
        marginTop : '4%',
        marginLeft : '5%',
    },
    UserSearch : {
        width : '60%',
        color : 'white',
        marginLeft : '10%',
        marginTop : '8%',

    },
    SeeMore : {
        marginLeft : '40%',
        marginTop : '10%',
    },
    TextSeeMore : {
        color : '#5ccfe6',
        fontSize : 17,
    }
});