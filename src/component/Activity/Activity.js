import * as React from 'react';
import AntDesign from 'react-native-vector-icons/AntDesign';
// import EvilIcons from 'react-native-vector-icons/EvilIcons';
// import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
// import FontAwesome5 from 'react-native-vector-icons/FontAwesome5';
// import Fontisto from 'react-native-vector-icons/Fontisto';
import { Text,Button, View, StyleSheet, TextInput,Image,ScrollView,ImageBackground,Pressable } from 'react-native';
import { useNavigation } from "@react-navigation/native";
export default function Activitys() {
    const navigation = useNavigation();
    var arrayActivityMonth = [
        {
            image : 'https://scontent.fsgn4-1.fna.fbcdn.net/v/t39.30808-6/274876629_2826541607639210_363529317853290439_n.jpg?_nc_cat=101&ccb=1-5&_nc_sid=09cbfe&_nc_ohc=zhn6GxH97wsAX9igMrU&_nc_ht=scontent.fsgn4-1.fna&oh=00_AT8CV-QY77nPfLu8se8Ba5bfAa8KH96jrUmxQJa0CXTW2A&oe=625BCEB5',
            content : 'Hạnh phúc là không phải một người đàn ông bỏ cả thế giới để yêu em.',
            status : 'post',
            time : '5m',
        },
        {
            image : 'https://scontent.fsgn8-1.fna.fbcdn.net/v/t1.30497-1/143086968_2856368904622192_1959732218791162458_n.png?stp=cp0_dst-png_p80x80&_nc_cat=1&ccb=1-5&_nc_sid=7206a8&_nc_ohc=iuMIcxiCMkcAX_TVYh4&_nc_oc=AQnCMwFO0ikM1T3PNmT6hLfYsZgH-UFncWKfNhVaUwjq4DeJjL3Zz5o9N1VoxVT46V_F5s1RY-Ndwrkb3kv6fw1r&_nc_ht=scontent.fsgn8-1.fna&oh=00_AT8o3TOeWVcpPpS4Gy7NagZtopzLFPdCkkGCAzsGaaMdEQ&oe=627B5DF8',
            content : 'Phải dị hong hihi.',
            status : 'follow',
            time : '2h',
        },
        {
            image : 'https://scontent.fsgn13-2.fna.fbcdn.net/v/t39.30808-6/273154334_1123664431736763_6121942889354663811_n.jpg?_nc_cat=108&ccb=1-5&_nc_sid=09cbfe&_nc_ohc=BoFOVA5QuwIAX-KiXcQ&tn=98Qe8qL2dr5GlQT0&_nc_ht=scontent.fsgn13-2.fna&oh=00_AT8FeFwFTaLe6n_2eXdstYnWoCRVcEtpZZNsA2y4eGBazw&oe=625CDBAA',
            content : 'Cứ văn với thơ thôi kkk.',
            status : 'add',
            time : '10h',
        },
        {
            image : 'https://scontent-sin6-1.xx.fbcdn.net/v/t39.30808-6/272152926_1240913986401147_8867493523089750699_n.jpg?_nc_cat=111&ccb=1-5&_nc_sid=09cbfe&_nc_ohc=9Nz4bVKM5joAX8fhbRi&_nc_ht=scontent-sin6-1.xx&oh=00_AT_PmiSFopbNLfgeXZxQVCC1nETPN56gDmF5MNinf4vlsQ&oe=625C53AC',
            content : 'Quào quá đỉnh em ơi.',
            status : 'post',
            time : '1h',
        },
        {
            image : 'https://scontent-sin6-4.xx.fbcdn.net/v/t1.6435-9/52696062_101541554333212_6443151805353295872_n.jpg?_nc_cat=103&ccb=1-5&_nc_sid=09cbfe&_nc_ohc=iVYxj2aTG4MAX9KnVR1&_nc_ht=scontent-sin6-4.xx&oh=00_AT91XhpTsxpNb7NguhkEdM6FjBuqzXxj45JWgs4OlLsxbQ&oe=627DBD8C',
            content : 'Hạnh phúc là không phải một người đàn ông bỏ cả thế giới để yêu em.',
            status : 'add',
            time : '1h',
        },
        {
            image : 'https://scontent.fsgn4-1.fna.fbcdn.net/v/t39.30808-6/274876629_2826541607639210_363529317853290439_n.jpg?_nc_cat=101&ccb=1-5&_nc_sid=09cbfe&_nc_ohc=zhn6GxH97wsAX9igMrU&_nc_ht=scontent.fsgn4-1.fna&oh=00_AT8CV-QY77nPfLu8se8Ba5bfAa8KH96jrUmxQJa0CXTW2A&oe=625BCEB5',
            content : 'Hay quá bạn ơi.',
            status : 'follow',
            time : '5h',
        },
        {
            image : 'https://scontent.fsgn8-1.fna.fbcdn.net/v/t1.30497-1/143086968_2856368904622192_1959732218791162458_n.png?stp=cp0_dst-png_p80x80&_nc_cat=1&ccb=1-5&_nc_sid=7206a8&_nc_ohc=iuMIcxiCMkcAX_TVYh4&_nc_oc=AQnCMwFO0ikM1T3PNmT6hLfYsZgH-UFncWKfNhVaUwjq4DeJjL3Zz5o9N1VoxVT46V_F5s1RY-Ndwrkb3kv6fw1r&_nc_ht=scontent.fsgn8-1.fna&oh=00_AT8o3TOeWVcpPpS4Gy7NagZtopzLFPdCkkGCAzsGaaMdEQ&oe=627B5DF8',
            content : 'Phải dị hong hihi.',
            reply : 'post',
            time : '2h',
        },
        {
            image : 'https://scontent.fsgn4-1.fna.fbcdn.net/v/t39.30808-6/274876629_2826541607639210_363529317853290439_n.jpg?_nc_cat=101&ccb=1-5&_nc_sid=09cbfe&_nc_ohc=zhn6GxH97wsAX9igMrU&_nc_ht=scontent.fsgn4-1.fna&oh=00_AT8CV-QY77nPfLu8se8Ba5bfAa8KH96jrUmxQJa0CXTW2A&oe=625BCEB5',
            content : 'Bỏ cả thế giới để yêu em.',
            status : 'follow',
            time : '5m',
        },
        {
            image : 'https://scontent.fsgn13-2.fna.fbcdn.net/v/t39.30808-6/273154334_1123664431736763_6121942889354663811_n.jpg?_nc_cat=108&ccb=1-5&_nc_sid=09cbfe&_nc_ohc=BoFOVA5QuwIAX-KiXcQ&tn=98Qe8qL2dr5GlQT0&_nc_ht=scontent.fsgn13-2.fna&oh=00_AT8FeFwFTaLe6n_2eXdstYnWoCRVcEtpZZNsA2y4eGBazw&oe=625CDBAA',
            content : 'Cứ văn với thơ thôi kkk.',
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
    return (
        <View style = {styles.ActivityScreen}>
            <View style = {styles.HeaderActivity}>
                <Text style = {styles.TextHeader}>Activity</Text>
            </View>
            <ScrollView showsVerticalScrollIndicator={false}>
                {/* follow request */}
                <Pressable onPress={() => {navigation.navigate('RequestFollows')}}>
                    <View style = {styles.FollowRequest}>
                        <View style = {styles.RequestBody}>
                            <ImageBackground source={{uri : 'https://scontent.fsgn4-1.fna.fbcdn.net/v/t39.30808-6/274876629_2826541607639210_363529317853290439_n.jpg?_nc_cat=101&ccb=1-5&_nc_sid=09cbfe&_nc_ohc=zhn6GxH97wsAX9igMrU&_nc_ht=scontent.fsgn4-1.fna&oh=00_AT8CV-QY77nPfLu8se8Ba5bfAa8KH96jrUmxQJa0CXTW2A&oe=625BCEB5'}} style = {styles.AvartarRequest} imageStyle={{ borderRadius: 50/2 }}>
                                <View style = {styles.BackgroundRequest}>
                                    <Text style = {styles.NumberRequest}>68</Text>
                                </View>
                            </ImageBackground>
                            <View>
                                <Text style = {styles.TextRequest}>Follow request</Text>
                                <Text style = {styles.TextActivity}>Approve or ignore requests</Text>
                            </View>
                        </View>
                    </View>
                </Pressable>
                {/* Activity This Week */}
                <View style = {styles.ActivityWeek}>
                    <Pressable onPress={() => {navigation.navigate('LoginActivity')}}>
                        <Text style = {styles.TextWeek}>This Week</Text>
                        <View style = {styles.WeekBody}>
                            <View style = {styles.BackgroundMap}>
                                <AntDesign name="exclamationcircleo" size={25} color="red" style = {{marginLeft : '25%',marginTop : '23%'}}/>
                            </View>
                            <Text style = {styles.TextActivityWeek}>An unrecognized Windows PC just logged in near Bình Long, Bình Phước, Việt Nam, VN
                                <Text style = {styles.TextTime}> 1h</Text>
                            </Text>
                            <Image source = {{uri : 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRu7nUfa8q8sGXEKRycMfPbHnVTOIeqK7Ix0w&usqp=CAU'}} style = {styles.ImageMap}/>
                        </View>
                    </Pressable>
                </View>
                {/* Activity This Month */}
                <View style = {styles.ActivityMonth}>
                    <Text style = {styles.TextMonth}>This Month</Text>
                    {arrayActivityMonth.map(item =>(
                        item.status === 'follow' ?
                        // If Status follow
                        <Pressable onPress={() => {navigation.navigate('Follower')}}>
                            <View style = {styles.MonthBody}>
                                <Image source={{uri : item.image}} style = {styles.AvartarMonth} imageStyle={{ borderRadius: 50/2 }}/>
                                <Text style = {styles.TextActivityMonth}>{item.content}
                                    <Text style = {styles.TextTimeMonth}> {item.time}</Text>
                                </Text>
                                <View style = {{width : 70, height : 28, backgroundColor : '#1d94d8',borderRadius : 5,marginTop : '8%',marginLeft : '5%'}}>
                                    <Text style = {styles.Follow}>Follow</Text>
                                </View>
                            </View> 
                        </Pressable>
                        : item.status === 'add' ?
                        // If status add
                        <Pressable onPress={() => {navigation.navigate('RequestFollowDetails')}}>
                            <View style = {styles.MonthBody}>
                                <Image source={{uri : item.image}} style = {styles.AvartarMonth} imageStyle={{ borderRadius: 50/2 }}/>
                                <Text style = {styles.TextActivityMonthRequest}>{item.content}
                                    <Text style = {styles.TextTimeMonthRequest}> {item.time}</Text>
                                </Text>
                                <View style = {{width : 70, height : 28, backgroundColor : '#1d94d8',borderRadius : 5,marginTop : '8%'}}>
                                    <Text style = {styles.ConfirmRequest}>Confirm</Text>
                                </View>
                                <View style = {{width : 70, height : 28, backgroundColor : 'white',borderRadius : 5,marginTop : '8%', marginLeft : '2%'}}>
                                    <View style = {{width : 68, height : 25, backgroundColor : 'black',borderRadius : 5,marginTop : '2%',marginLeft : '1%'}}>
                                        <Text style = {styles.DeleteRequest}>Delete</Text>
                                    </View>
                                </View>
                            </View>
                        </Pressable>
                        :
                        // If status post
                        <View style = {styles.MonthBody}>
                            <Image source={{uri : item.image}} style = {styles.AvartarMonth} imageStyle={{ borderRadius: 50/2 }}/>
                            <Text style = {styles.TextActivityMonth}>{item.content}
                                <Text style = {styles.TextTimeMonth}> {item.time}</Text>
                            </Text>
                            <Image source = {{uri : item.image}} style = {styles.ImageRespone}/>
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
                {/* See all suggestions */}
                <View style = {styles.SeeAll}>
                    <Text style = {styles.TextSeeAll} onPress = {() => {navigation.navigate('Discovers')}}>See all suggestions</Text>
                </View>
            </ScrollView>
            
        </View>
    );
};
const styles = StyleSheet.create({
    ActivityScreen: {
        flex: 1,
        backgroundColor: 'black',
    },
    HeaderActivity: {
        flexDirection: 'row',
        height: 50,
        borderBottomColor: "#414360",
        borderBottomWidth: 1,
    },
    TextHeader: {
        fontSize: 22,
        marginLeft: '4%',
        marginTop: 8,
        color: 'rgb(248, 248, 242)',
        fontWeight: 'bold',
    },
    IconBack: {
        marginLeft: '2%',
        marginTop: 12,
    },
    IconChat: {
        marginLeft:'50%',
        marginTop: 10,
    },
    FollowRequest: {
        marginLeft: '2%',
    },
    RequestBody: {
        flexDirection: 'row',
        marginTop: 10,
        marginLeft: '2%',
        width: '83%',
    },
    AvartarRequest: {
        height: 50,
        width: 50,
        borderRadius: 50/2,
    },
    TextRequest: {
        color: 'rgb(248, 248, 242)',
        marginLeft: 10,
        marginTop: 3,
        fontSize: 15,
        fontWeight: 'bold',
    },
    TextActivity: {
        color: '#8e8e8e',
        marginLeft: '5%',
    },
    BackgroundRequest : {
        backgroundColor: 'red',
        width: 20,
        height: 20,
        borderRadius: 20/2,
        marginLeft: '65%',
        marginTop: '10%',
    },
    NumberRequest: {
        color: 'rgb(248, 248, 242)',
        marginLeft: '8%',
    },
    ActivityWeek: {
        marginTop: '5%',
        marginLeft: '5%',
    },
    TextWeek: {
        color: 'white',
        fontSize: 18,
        fontWeight: 'bold',
    },
    WeekBody: {
        flexDirection : 'row',
    },
    BackgroundMap: {
        marginTop: '5%',
        backgroundColor : 'white',
        width : 50,
        height : 50,
        borderRadius : 50/2,
    },
    TextActivityWeek: {
        color: 'white',
        width: '60%',
        marginLeft: '5%',
        marginTop: '4%',
    },
    TextTime: {
        color: '#8e8e8e',
    },
    ImageMap: {
        width : 50,
        height : 50,
        marginLeft: '5%',
        marginTop: '5%',
    },
    ActivityMonth: {
        marginTop: '5%',
        marginLeft: '5%',
    },
    TextMonth: {
        color: 'white',
        fontSize: 18,
        fontWeight: 'bold',
    },
    MonthBody: {
        flexDirection : 'row',
    },
    TextActivityMonth: {
        color: 'white',
        width: '55%',
        marginLeft: '5%',
        marginTop: '7%',
    },
    AvartarMonth: {
        height: 50,
        width: 50,
        borderRadius: 50/2,
        marginTop: '5%',
    },
    TextTimeMonth: {
        color: '#8e8e8e',
    },
    Follow: {
        color: 'white',
        fontSize: 15,
        marginLeft: '18%',
        marginTop: '4%',
    },
    TextActivityMonthRequest: {
        color: 'white',
        width: '39%',
        marginLeft: '5%',
        marginTop: '7%',
    },
    TextTimeMonthRequest: {
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
    ImageRespone: {
        width : 50,
        height : 50,
        marginLeft: '9%',
        marginTop: '5%',
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
        marginTop: '8%',
    },
    FollowSuggest: {
        color: 'white',
        fontSize: 15,
        marginLeft: '18%',
        marginTop: '4%',
    },
    IconClose: {
        marginLeft : '8%',
        marginTop : '10%',
    },
    UserSearch : {
        width : '45%',
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
    SeeAll : {
        marginTop : '5%',
        marginLeft : '5%',
        marginBottom : '10%',
    },
    TextSeeAll : {
        color : '#5ccfe6',
        fontSize : 16,
    }
});