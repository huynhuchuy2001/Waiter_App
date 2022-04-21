import React from 'react';
import AntDesign from 'react-native-vector-icons/AntDesign';
import { Text, View, StyleSheet, ScrollView,Image,Pressable} from 'react-native';
import { useNavigation } from "@react-navigation/native";
export default function RequestFollows() {
    const navigation = useNavigation();
    var arrayActivityRequestFollow = [
        {
            image : 'https://scontent.fsgn4-1.fna.fbcdn.net/v/t39.30808-6/274876629_2826541607639210_363529317853290439_n.jpg?_nc_cat=101&ccb=1-5&_nc_sid=09cbfe&_nc_ohc=zhn6GxH97wsAX9igMrU&_nc_ht=scontent.fsgn4-1.fna&oh=00_AT8CV-QY77nPfLu8se8Ba5bfAa8KH96jrUmxQJa0CXTW2A&oe=625BCEB5',
            content : 'hdh.huyyyy',
            status : 'post',
            time : '5m',
        },
        {
            image : 'https://scontent.fsgn8-1.fna.fbcdn.net/v/t1.30497-1/143086968_2856368904622192_1959732218791162458_n.png?stp=cp0_dst-png_p80x80&_nc_cat=1&ccb=1-5&_nc_sid=7206a8&_nc_ohc=iuMIcxiCMkcAX_TVYh4&_nc_oc=AQnCMwFO0ikM1T3PNmT6hLfYsZgH-UFncWKfNhVaUwjq4DeJjL3Zz5o9N1VoxVT46V_F5s1RY-Ndwrkb3kv6fw1r&_nc_ht=scontent.fsgn8-1.fna&oh=00_AT8o3TOeWVcpPpS4Gy7NagZtopzLFPdCkkGCAzsGaaMdEQ&oe=627B5DF8',
            content : 'duchoan.2005',
            status : 'follow',
            time : '2h',
        },
        {
            image : 'https://scontent.fsgn13-2.fna.fbcdn.net/v/t39.30808-6/273154334_1123664431736763_6121942889354663811_n.jpg?_nc_cat=108&ccb=1-5&_nc_sid=09cbfe&_nc_ohc=BoFOVA5QuwIAX-KiXcQ&tn=98Qe8qL2dr5GlQT0&_nc_ht=scontent.fsgn13-2.fna&oh=00_AT8FeFwFTaLe6n_2eXdstYnWoCRVcEtpZZNsA2y4eGBazw&oe=625CDBAA',
            content : 'cam.van77',
            status : 'add',
            time : '10h',
        },
        {
            image : 'https://scontent-sin6-1.xx.fbcdn.net/v/t39.30808-6/272152926_1240913986401147_8867493523089750699_n.jpg?_nc_cat=111&ccb=1-5&_nc_sid=09cbfe&_nc_ohc=9Nz4bVKM5joAX8fhbRi&_nc_ht=scontent-sin6-1.xx&oh=00_AT_PmiSFopbNLfgeXZxQVCC1nETPN56gDmF5MNinf4vlsQ&oe=625C53AC',
            content : 'vituong91',
            status : 'post',
            time : '1h',
        },
        {
            image : 'https://scontent-sin6-4.xx.fbcdn.net/v/t1.6435-9/52696062_101541554333212_6443151805353295872_n.jpg?_nc_cat=103&ccb=1-5&_nc_sid=09cbfe&_nc_ohc=iVYxj2aTG4MAX9KnVR1&_nc_ht=scontent-sin6-4.xx&oh=00_AT91XhpTsxpNb7NguhkEdM6FjBuqzXxj45JWgs4OlLsxbQ&oe=627DBD8C',
            content : 'hdh.hung',
            status : 'add',
            time : '1h',
        },
        {
            image : 'https://scontent.fsgn4-1.fna.fbcdn.net/v/t39.30808-6/274876629_2826541607639210_363529317853290439_n.jpg?_nc_cat=101&ccb=1-5&_nc_sid=09cbfe&_nc_ohc=zhn6GxH97wsAX9igMrU&_nc_ht=scontent.fsgn4-1.fna&oh=00_AT8CV-QY77nPfLu8se8Ba5bfAa8KH96jrUmxQJa0CXTW2A&oe=625BCEB5',
            content : 'huyhuy.01',
            status : 'follow',
            time : '5h',
        },
        {
            image : 'https://scontent.fsgn8-1.fna.fbcdn.net/v/t1.30497-1/143086968_2856368904622192_1959732218791162458_n.png?stp=cp0_dst-png_p80x80&_nc_cat=1&ccb=1-5&_nc_sid=7206a8&_nc_ohc=iuMIcxiCMkcAX_TVYh4&_nc_oc=AQnCMwFO0ikM1T3PNmT6hLfYsZgH-UFncWKfNhVaUwjq4DeJjL3Zz5o9N1VoxVT46V_F5s1RY-Ndwrkb3kv6fw1r&_nc_ht=scontent.fsgn8-1.fna&oh=00_AT8o3TOeWVcpPpS4Gy7NagZtopzLFPdCkkGCAzsGaaMdEQ&oe=627B5DF8',
            content : 'hdh.hoan',
            reply : 'post',
            time : '2h',
        },
        {
            image : 'https://scontent.fsgn4-1.fna.fbcdn.net/v/t39.30808-6/274876629_2826541607639210_363529317853290439_n.jpg?_nc_cat=101&ccb=1-5&_nc_sid=09cbfe&_nc_ohc=zhn6GxH97wsAX9igMrU&_nc_ht=scontent.fsgn4-1.fna&oh=00_AT8CV-QY77nPfLu8se8Ba5bfAa8KH96jrUmxQJa0CXTW2A&oe=625BCEB5',
            content : 'hyuezhu.01',
            status : 'follow',
            time : '5m',
        },
        {
            image : 'https://scontent.fsgn13-2.fna.fbcdn.net/v/t39.30808-6/273154334_1123664431736763_6121942889354663811_n.jpg?_nc_cat=108&ccb=1-5&_nc_sid=09cbfe&_nc_ohc=BoFOVA5QuwIAX-KiXcQ&tn=98Qe8qL2dr5GlQT0&_nc_ht=scontent.fsgn13-2.fna&oh=00_AT8FeFwFTaLe6n_2eXdstYnWoCRVcEtpZZNsA2y4eGBazw&oe=625CDBAA',
            content : 'vanphan',
            status : 'add',
            time : '10h',
        }
    ]
    var arraySuggestion = [
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
        <View style={styles.FollowRequestcontainer}>
            {/* Header Edit Profile */}
            <View style={styles.HeaderFollowRequest}>
                <AntDesign name="arrowleft" size={30} color="white" onPress={() => navigation.goBack()} style ={{marginTop : '2%',marginLeft : '2%'}}/>
                <Text style={styles.HeaderFollowRequestText}>Follow requests</Text>
            </View>
            {/* Follow requests */}
            <ScrollView showsVerticalScrollIndicator={false} style = {{height : '100%'}}>
                <View style = {styles.ActivityRequestFollow}>
                    {arrayActivityRequestFollow.map(item => (
                        <View style = {styles.RequestFollowBody}>
                            <Pressable onPress={() => navigation.navigate('RequestFollowDetails')} style = {{marginTop: '5%'}}>
                                <Image source={{uri : item.image}} style = {styles.AvartarRequestFollow} imageStyle={{ borderRadius: 50/2 }}/>
                            </Pressable>
                            <Pressable onPress={() => navigation.navigate('RequestFollowDetails')} style = {{ width: '39%',marginLeft: '5%',marginTop: '7%'}}>
                                <Text style = {styles.TextActivityRequestFollowRequest}>{item.content}</Text>
                                <Text style = {styles.TextTimeRequestFollowRequest}> {item.content}</Text>
                            </Pressable>
                            <View style = {{width : 70, height : 28, backgroundColor : '#1d94d8',borderRadius : 5,marginTop : '8%'}}>
                                <Text style = {styles.ConfirmRequest}>Confirm</Text>
                            </View>
                            <View style = {{width : 70, height : 28, backgroundColor : 'white',borderRadius : 5,marginTop : '8%', marginLeft : '2%'}}>
                                <View style = {{width : 68, height : 25, backgroundColor : 'black',borderRadius : 5,marginTop : '2%',marginLeft : '1%'}}>
                                    <Text style = {styles.DeleteRequest}>Delete</Text>
                                </View>
                            </View>
                        </View>
                    ))}
                </View>
                {/* Suggestions for you */}
                <View style = {styles.Suggestion}>
                    <Text style = {styles.TextSuggestion}>Suggestions for you</Text>
                    {arraySuggestion.map(item =>(
                        <View style = {styles.SuggestBody}>
                            <Pressable onPress={() => navigation.navigate('Follower')} style = {{marginTop: '5%'}}>
                                <Image source={{uri : item.image}} style = {styles.AvartarSuggest} imageStyle={{ borderRadius: 50/2 }}/>
                            </Pressable>
                                <Pressable onPress={() => navigation.navigate('Follower')} style = {{ width : '45%', marginLeft : '5%', marginTop : '5%'}}>
                                    <View style = {styles.UserSuggestions}>
                                        <Text style = {styles.NameUser}>{item.name}</Text>
                                        <Text style = {styles.NameFB}>{item.nameFB}</Text>
                                        <Text style = {styles.NameFB}>Have {item.follower} followers</Text>
                                    </View>
                                </Pressable>
                                <View style = {{flexDirection : 'row',marginTop : '5%'}}>
                                    <View style = {{width : 70, height : 28, backgroundColor : '#1d94d8',borderRadius : 5,marginTop : '8%',marginLeft : '7%'}}>
                                        <Text style = {styles.FollowSuggest}>Follow</Text>
                                    </View>
                                    <AntDesign name = "close" size={15} color = "rgb(248, 248, 242)" style ={styles.IconClose} />
                                </View>
                        </View>
                    ))}
                </View>
            </ScrollView>
        </View>
    )
};
const styles = StyleSheet.create({
    FollowRequestcontainer: {
        backgroundColor: 'black',
    },
    HeaderFollowRequest: {
        backgroundColor: 'black',
        flexDirection: 'row',
        height: 50,
    },
    HeaderFollowRequestText: {
        color: 'white',
        fontSize: 22,
        marginTop: '2%',
        marginLeft: '5%',
    },
    RequestFollowBody: {
        flexDirection : 'row',
    },
    TextActivityRequestFollow: {
        color: 'white',
        width: '55%',
        marginLeft: '5%',
        marginTop: '7%',
    },
    AvartarRequestFollow: {
        height: 50,
        width: 50,
        borderRadius: 50/2,
    },
    TextTimeRequestFollow: {
        color: '#8e8e8e',
    },
    Follow: {
        color: 'white',
        fontSize: 15,
        marginLeft: '18%',
        marginTop: '4%',
    },
    TextActivityRequestFollowRequest: {
        color: 'white',
        marginLeft: '2%',
    },
    TextTimeRequestFollowRequest: {
        color: '#8e8e8e',
    },
    ConfirmRequest: {
        color: 'white',
        fontSize: 15,
        marginLeft: '10%',
        marginTop: '4%',
    },
    DeleteRequest: {
        color: 'white',
        fontSize: 15,
        marginLeft: '18%',
        marginTop: '4%',
    },
    ActivityRequestFollow: {
        marginLeft: '5%',
    },
    Suggestion: {
        marginTop: '5%',
    },
    TextSuggestion: {
        color: 'white',
        fontSize: 18,
        fontWeight: 'bold',
        marginLeft: '5%',
    },
    SuggestBody: {
        flexDirection : 'row',
        marginLeft: '5%',
    },
    AvartarSuggest: {
        height: 50,
        width: 50,
        borderRadius: 50/2,
        marginTop: '5%',
    },
    FollowSuggest: {
        color: 'white',
        fontSize: 15,
        marginLeft: '18%',
        marginTop: '4%',
    },
    IconClose: {
        marginLeft : '10%',
        marginTop : '10%',
    },
    UserSuggestions : {
    },
    NameUser : {
        color : 'white',
        fontSize : 14,
    },
    NameFB : {
        color : '#8e8e8e',
        fontSize : 13,
    },
});