import * as React from 'react';
import AntDesign from 'react-native-vector-icons/AntDesign';
import EvilIcons from 'react-native-vector-icons/EvilIcons';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5';
import Fontisto from 'react-native-vector-icons/Fontisto';
import { Text,Button, View, StyleSheet, TextInput,Image,ScrollView} from 'react-native';
import { useNavigation } from "@react-navigation/native";
export default function SearchResult() {
    const navigation = useNavigation();
    let textSearch = 'HuyHuy';
    var arrayRecentUserSearch = [
        {
            name : 'HuyHuy',
            nameFB : 'Huy Huỳnh',
            image : 'https://scontent.fsgn4-1.fna.fbcdn.net/v/t39.30808-6/274876629_2826541607639210_363529317853290439_n.jpg?_nc_cat=101&ccb=1-5&_nc_sid=09cbfe&_nc_ohc=zhn6GxH97wsAX9igMrU&_nc_ht=scontent.fsgn4-1.fna&oh=00_AT8CV-QY77nPfLu8se8Ba5bfAa8KH96jrUmxQJa0CXTW2A&oe=625BCEB5',
            follower : '1.2k'
        },
        {
            name : 'DucHoan',
            nameFB : 'Huỳnh Đức Hoan',
            image : 'https://scontent.fsgn8-1.fna.fbcdn.net/v/t1.30497-1/143086968_2856368904622192_1959732218791162458_n.png?stp=cp0_dst-png_p80x80&_nc_cat=1&ccb=1-5&_nc_sid=7206a8&_nc_ohc=iuMIcxiCMkcAX_TVYh4&_nc_oc=AQnCMwFO0ikM1T3PNmT6hLfYsZgH-UFncWKfNhVaUwjq4DeJjL3Zz5o9N1VoxVT46V_F5s1RY-Ndwrkb3kv6fw1r&_nc_ht=scontent.fsgn8-1.fna&oh=00_AT8o3TOeWVcpPpS4Gy7NagZtopzLFPdCkkGCAzsGaaMdEQ&oe=627B5DF8',
            follower : '108'
        },
        {
            name : 'CamVan',
            nameFB : 'Phan Thị Cẩm Vân',
            image : 'https://scontent.fsgn13-2.fna.fbcdn.net/v/t39.30808-6/273154334_1123664431736763_6121942889354663811_n.jpg?_nc_cat=108&ccb=1-5&_nc_sid=09cbfe&_nc_ohc=BoFOVA5QuwIAX-KiXcQ&tn=98Qe8qL2dr5GlQT0&_nc_ht=scontent.fsgn13-2.fna&oh=00_AT8FeFwFTaLe6n_2eXdstYnWoCRVcEtpZZNsA2y4eGBazw&oe=625CDBAA',
            follower : '145'
        },
        {
            name : 'Tường Vi',
            nameFB : 'Tường Vi',
            image : 'https://scontent-sin6-1.xx.fbcdn.net/v/t39.30808-6/272152926_1240913986401147_8867493523089750699_n.jpg?_nc_cat=111&ccb=1-5&_nc_sid=09cbfe&_nc_ohc=9Nz4bVKM5joAX8fhbRi&_nc_ht=scontent-sin6-1.xx&oh=00_AT_PmiSFopbNLfgeXZxQVCC1nETPN56gDmF5MNinf4vlsQ&oe=625C53AC',
            follower : '1.5k'
        },
        {
            name : 'DucHung',
            nameFB : 'Huỳnh Đức Hùng',
            image : 'https://scontent-sin6-4.xx.fbcdn.net/v/t1.6435-9/52696062_101541554333212_6443151805353295872_n.jpg?_nc_cat=103&ccb=1-5&_nc_sid=09cbfe&_nc_ohc=iVYxj2aTG4MAX9KnVR1&_nc_ht=scontent-sin6-4.xx&oh=00_AT91XhpTsxpNb7NguhkEdM6FjBuqzXxj45JWgs4OlLsxbQ&oe=627DBD8C',
            follower : '500'
        },
        {
            name : 'HuyHuy',
            nameFB : 'Huy Huỳnh',
            image : 'https://scontent.fsgn4-1.fna.fbcdn.net/v/t39.30808-6/274876629_2826541607639210_363529317853290439_n.jpg?_nc_cat=101&ccb=1-5&_nc_sid=09cbfe&_nc_ohc=zhn6GxH97wsAX9igMrU&_nc_ht=scontent.fsgn4-1.fna&oh=00_AT8CV-QY77nPfLu8se8Ba5bfAa8KH96jrUmxQJa0CXTW2A&oe=625BCEB5',
            follower : '1.2k'
        },
        {
            name : 'DucHoan',
            nameFB : 'Huỳnh Đức Hoan',
            image : 'https://scontent.fsgn8-1.fna.fbcdn.net/v/t1.30497-1/143086968_2856368904622192_1959732218791162458_n.png?stp=cp0_dst-png_p80x80&_nc_cat=1&ccb=1-5&_nc_sid=7206a8&_nc_ohc=iuMIcxiCMkcAX_TVYh4&_nc_oc=AQnCMwFO0ikM1T3PNmT6hLfYsZgH-UFncWKfNhVaUwjq4DeJjL3Zz5o9N1VoxVT46V_F5s1RY-Ndwrkb3kv6fw1r&_nc_ht=scontent.fsgn8-1.fna&oh=00_AT8o3TOeWVcpPpS4Gy7NagZtopzLFPdCkkGCAzsGaaMdEQ&oe=627B5DF8',
            follower : '108'
        },
        {
            name : 'CamVan',
            nameFB : 'Phan Thị Cẩm Vân',
            image : 'https://scontent.fsgn13-2.fna.fbcdn.net/v/t39.30808-6/273154334_1123664431736763_6121942889354663811_n.jpg?_nc_cat=108&ccb=1-5&_nc_sid=09cbfe&_nc_ohc=BoFOVA5QuwIAX-KiXcQ&tn=98Qe8qL2dr5GlQT0&_nc_ht=scontent.fsgn13-2.fna&oh=00_AT8FeFwFTaLe6n_2eXdstYnWoCRVcEtpZZNsA2y4eGBazw&oe=625CDBAA',
            follower : '145'
        },
        {
            name : 'Tường Vi',
            nameFB : 'Tường Vi',
            image : 'https://scontent-sin6-1.xx.fbcdn.net/v/t39.30808-6/272152926_1240913986401147_8867493523089750699_n.jpg?_nc_cat=111&ccb=1-5&_nc_sid=09cbfe&_nc_ohc=9Nz4bVKM5joAX8fhbRi&_nc_ht=scontent-sin6-1.xx&oh=00_AT_PmiSFopbNLfgeXZxQVCC1nETPN56gDmF5MNinf4vlsQ&oe=625C53AC',
            follower : '1.5k'
        },
        {
            name : 'DucHung',
            nameFB : 'Huỳnh Đức Hùng',
            image : 'https://scontent-sin6-4.xx.fbcdn.net/v/t1.6435-9/52696062_101541554333212_6443151805353295872_n.jpg?_nc_cat=103&ccb=1-5&_nc_sid=09cbfe&_nc_ohc=iVYxj2aTG4MAX9KnVR1&_nc_ht=scontent-sin6-4.xx&oh=00_AT91XhpTsxpNb7NguhkEdM6FjBuqzXxj45JWgs4OlLsxbQ&oe=627DBD8C',
            follower : '500'
        },
        {
            name : 'Tường Vi',
            nameFB : 'Tường Vi',
            image : 'https://scontent-sin6-1.xx.fbcdn.net/v/t39.30808-6/272152926_1240913986401147_8867493523089750699_n.jpg?_nc_cat=111&ccb=1-5&_nc_sid=09cbfe&_nc_ohc=9Nz4bVKM5joAX8fhbRi&_nc_ht=scontent-sin6-1.xx&oh=00_AT_PmiSFopbNLfgeXZxQVCC1nETPN56gDmF5MNinf4vlsQ&oe=625C53AC',
            follower : '1.5k'
        },
        {
            name : 'DucHung',
            nameFB : 'Huỳnh Đức Hùng',
            image : 'https://scontent-sin6-4.xx.fbcdn.net/v/t1.6435-9/52696062_101541554333212_6443151805353295872_n.jpg?_nc_cat=103&ccb=1-5&_nc_sid=09cbfe&_nc_ohc=iVYxj2aTG4MAX9KnVR1&_nc_ht=scontent-sin6-4.xx&oh=00_AT91XhpTsxpNb7NguhkEdM6FjBuqzXxj45JWgs4OlLsxbQ&oe=627DBD8C',
            follower : '500'
        }
    ]
    return(
        <View style = {styles.SearchDetails}>
            {/* Header Search */}
            <View style = {styles.HeaderSearch}>
                <View style = {styles.Search}>
                    <AntDesign name = "arrowleft" size={25} color = "rgb(248, 248, 242)" style ={styles.IconBack} onPress = {() =>{navigation.goBack()}}/>
                    <View style = {styles.SearchForm}>
                        <AntDesign name = "search1" size={20} color = "#8e8e8e" style = {{marginTop : 5, marginLeft : 10}}/>
                        <TextInput value={textSearch} style = {styles.SearchText}/>
                    </View>
                </View>
                <View style = {styles.TitleSearch}>
                    <Text style = {styles.Top}>Top</Text>
                    <Text style = {styles.Account}>Account</Text>
                    <Text style = {styles.Account}>Audio</Text>
                    <Text style = {styles.Account}>Tags</Text>
                    <Text style = {styles.Account}>Places</Text>
                </View>
            </View>
            {/* Recent User Search */}
            <ScrollView style = {{backgroundColor : 'black', height : 'auto', marginBottom : 20}} showsVerticalScrollIndicator={false}>
                <View style = {styles.IconSearchResult}>
                    <View style = {styles.Recent}>
                        <View style = {styles.BorderIconSearchWidth}>
                            <View style = {styles.BorderIconSearch}>
                                <EvilIcons name = "location" size={30} color = "rgb(248, 248, 242)" style ={styles.IconSearch} />
                            </View>
                        </View>
                        <Text style = {styles.RecentSearch}>Thị xã Bình Long, tỉnh Bình Phước, Việt Nam</Text>
                    </View>
                </View>
                {/* List Recent User Search */}
                {arrayRecentUserSearch.map(item => (
                    <View style = {styles.IconSearchUserResult}>
                        <View style = {styles.RecentUserSearch}>
                            <Image  source = {{uri : item.image}} style = {styles.ImageUserSearch}/>
                            <View style = {styles.UserSearch}>
                                <Text style = {styles.NameUser}>{item.name}</Text>
                                <Text style = {styles.NameFB}>{item.nameFB}</Text>
                                <Text style = {styles.NameFB}>Have {item.follower} followers</Text>
                            </View>
                        </View>
                    </View>
                ))}
            </ScrollView>
        </View>
    )
};
const styles = StyleSheet.create({
    SearchDetails : {
        backgroundColor : 'black',
    },
    HeaderSearch : {
        height : 100,
        borderBottomColor: "#414360",
        borderBottomWidth: 1,
    },
    Search : {
        flexDirection : 'row',
        height: 50,
    },
    IconBack: {
        marginLeft: '2%',
        marginTop: 12,
    },
    SearchForm : {
        flexDirection : 'row',
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
    TitleSearch : {
        flexDirection : 'row',
    },
    Top : {
        color : '#8e8e8e',
        fontSize : 18,
        marginLeft : '5%',
        marginTop : '2%',
    },
    Account : {
        color : '#8e8e8e',
        fontSize : 18,
        marginLeft : '8%',
        marginTop : '2%',
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
        width : 55,
        height : 55,
        borderRadius : 55/2,
        backgroundColor : '#1F2739',
        marginTop : '4%',
        marginLeft : '5%',
    },
    BorderIconSearch : {
        width : 52,
        height : 52,
        borderRadius : 52/2,
        backgroundColor : 'black',
        marginTop : '2%',
        marginLeft : '2%',

    },
    IconSearch : {
        marginLeft : '20%',
        marginTop : '25%',
    },
    RecentSearch : {
        width : '90%',
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
        width : '90%',
    },
    ImageUserSearch : {
        width : 55,
        height : 55,
        borderRadius : 55/2,
        backgroundColor : '#1F2739',
        marginTop : '4%',
        marginLeft : '5%',
    },
    UserSearch : {
        width : '60%',
        marginLeft : '10%',
        marginTop : '5%',
    },
    NameUser : {
        color : 'white',
        fontSize : 14,
    },
    NameFB : {
        color : '#8e8e8e',
        fontSize : 13,
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