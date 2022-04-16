import * as React from 'react';
import AntDesign from 'react-native-vector-icons/AntDesign';
import EvilIcons from 'react-native-vector-icons/EvilIcons';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5';
import Fontisto from 'react-native-vector-icons/Fontisto';
import { Text,Button, View, StyleSheet, TextInput,Image,ScrollView} from 'react-native';
import { useNavigation } from "@react-navigation/native";
export default function SearchDetails() {
    const navigation = useNavigation();
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
        <View style = {styles.SearchDetails}>
            {/* Header Search */}
            <View style = {styles.Search}>
                <AntDesign name = "arrowleft" size={25} color = "rgb(248, 248, 242)" style ={styles.IconBack} onPress = {(e) =>{navigation.navigate('Search')}}/>
                <View style = {styles.SearchForm}>
                    <TextInput placeholder='Search' placeholderTextColor="white" style = {styles.SearchText}/>
                </View>
            </View>
            {/* Recent User Search */}
            <ScrollView style = {{backgroundColor : 'black', height : '100%'}}>
                <View style = {styles.SearchResult}>
                    <View style = {styles.SearchResultItem}>
                        <Text style = {styles.SearchResultItemText}>Recent</Text>
                        <Text style = {styles.SearchSeeAllText}>See All</Text>
                    </View>
                </View>
                <View style = {styles.IconSearchResult}>
                    <View style = {styles.Recent}>
                        <View style = {styles.BorderIconSearchWidth}>
                            <View style = {styles.BorderIconSearch}>
                                <AntDesign name = "search1" size={25} color = "rgb(248, 248, 242)" style ={styles.IconSearch} />
                            </View>
                        </View>
                        <Text style = {styles.RecentSearch}>Huy Huy</Text>
                    </View>
                    <AntDesign name = "close" size={15} color = "rgb(248, 248, 242)" style ={styles.IconClose} />
                </View>
                {/* List Recent User Search */}
                {arrayRecentUserSearch.map(item => (
                    <View style = {styles.IconSearchUserResult}>
                        <View style = {styles.RecentUserSearch}>
                            <Image  source = {{uri : item.image}} style = {styles.ImageUserSearch}/>
                            <Text style = {styles.UserSearch}>{item.name}</Text>
                        </View>
                        <AntDesign name = "close" size={15} color = "rgb(248, 248, 242)" style ={styles.IconClose} />
                    </View>
                ))}
                <View style = {styles.SeeMore}>
                    <Text style = {styles.TextSeeMore}>See all result</Text>
                </View>
            </ScrollView>
        </View>
    )
};
const styles = StyleSheet.create({
    SearchDetails : {
        backgroundColor : 'black',
    },
    Search : {
        flexDirection : 'row',
        height: 50,
        borderBottomColor: "#414360",
        borderBottomWidth: 1,

    },
    IconBack: {
        marginLeft: '2%',
        marginTop: 12,
    },
    SearchForm : {
        backgroundColor : '#1F2739',
        width : '85%',
        height : '70%',
        borderRadius : 10,
        marginLeft : '3%',
        marginTop : '2%',
    },
    SearchText : {
        color : 'white',
        marginLeft : '5%',
    },
    SearchResult : {
        
    },
    SearchResultItem : {
        flexDirection : 'row',
        marginTop : '2%',
    },
    SearchResultItemText : {
        color : 'white',
        fontSize : 18,
        fontWeight : 'bold',
        marginLeft : '5%',

    },
    SearchSeeAllText : {
        color : '#5ccfe6',
        fontSize : 17,
        marginLeft : '65%',
        fontWeight : 'normal',
    },
    IconSearchResult : {
        flexDirection : 'row',
    },
    Recent : {
        flexDirection : 'row',
        width : '80%',
    },
    BorderIconSearchWidth : {
        width : 42,
        height : 42,
        borderRadius : 42/2,
        backgroundColor : '#1F2739',
        marginTop : '4%',
        marginLeft : '5%',
    },
    BorderIconSearch : {
        width : 40,
        height : 40,
        borderRadius : 40/2,
        backgroundColor : 'black',
        marginTop : '2%',
        marginLeft : '3%',

    },
    IconSearch : {
        marginLeft : '20%',
        marginTop : '20%',
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
    IconSearchUserResult : {
        flexDirection : 'row',
        marginTop : '2%',
    },
    RecentUserSearch : {
        flexDirection : 'row',
        width : '80%',
    },
    ImageUserSearch : {
        width : 42,
        height : 42,
        borderRadius : 42/2,
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