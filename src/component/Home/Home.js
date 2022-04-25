import React, { Fragment } from 'react';
import Icon from 'react-native-vector-icons/Ionicons';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import AntDesign from 'react-native-vector-icons/AntDesign';
import Feather from 'react-native-vector-icons/Feather';
import Octicons from 'react-native-vector-icons/Octicons';
import { Text,Button, View, StyleSheet, TextInput,Image,ScrollView,ImageBackground } from 'react-native';
import { useNavigation } from "@react-navigation/native";
export default function Home () {
    const navigation = useNavigation();
    var arrayStory = [
        {
            name : 'DucHoan',
            image : 'https://scontent.fsgn8-1.fna.fbcdn.net/v/t1.30497-1/143086968_2856368904622192_1959732218791162458_n.png?stp=cp0_dst-png_p80x80&_nc_cat=1&ccb=1-5&_nc_sid=7206a8&_nc_ohc=iuMIcxiCMkcAX_TVYh4&_nc_oc=AQnCMwFO0ikM1T3PNmT6hLfYsZgH-UFncWKfNhVaUwjq4DeJjL3Zz5o9N1VoxVT46V_F5s1RY-Ndwrkb3kv6fw1r&_nc_ht=scontent.fsgn8-1.fna&oh=00_AT8o3TOeWVcpPpS4Gy7NagZtopzLFPdCkkGCAzsGaaMdEQ&oe=627B5DF8'
        },
        {
            name : 'CamVan',
            image : 'https://scontent.fsgn13-2.fna.fbcdn.net/v/t39.30808-6/273154334_1123664431736763_6121942889354663811_n.jpg?_nc_cat=108&ccb=1-5&_nc_sid=09cbfe&_nc_ohc=BoFOVA5QuwIAX-KiXcQ&tn=98Qe8qL2dr5GlQT0&_nc_ht=scontent.fsgn13-2.fna&oh=00_AT8FeFwFTaLe6n_2eXdstYnWoCRVcEtpZZNsA2y4eGBazw&oe=625CDBAA'
        },
        {
            name : 'DucHung',
            image : 'https://scontent-sin6-4.xx.fbcdn.net/v/t1.6435-9/52696062_101541554333212_6443151805353295872_n.jpg?_nc_cat=103&ccb=1-5&_nc_sid=09cbfe&_nc_ohc=iVYxj2aTG4MAX9KnVR1&_nc_ht=scontent-sin6-4.xx&oh=00_AT91XhpTsxpNb7NguhkEdM6FjBuqzXxj45JWgs4OlLsxbQ&oe=627DBD8C'
        },
        {
            name : 'Tường Vi',
            image : 'https://scontent-sin6-1.xx.fbcdn.net/v/t39.30808-6/272152926_1240913986401147_8867493523089750699_n.jpg?_nc_cat=111&ccb=1-5&_nc_sid=09cbfe&_nc_ohc=9Nz4bVKM5joAX8fhbRi&_nc_ht=scontent-sin6-1.xx&oh=00_AT_PmiSFopbNLfgeXZxQVCC1nETPN56gDmF5MNinf4vlsQ&oe=625C53AC'
        },
        {
            name : 'HuyHuy',
            image : 'https://scontent.fsgn4-1.fna.fbcdn.net/v/t39.30808-6/274876629_2826541607639210_363529317853290439_n.jpg?_nc_cat=101&ccb=1-5&_nc_sid=09cbfe&_nc_ohc=zhn6GxH97wsAX9igMrU&_nc_ht=scontent.fsgn4-1.fna&oh=00_AT8CV-QY77nPfLu8se8Ba5bfAa8KH96jrUmxQJa0CXTW2A&oe=625BCEB5'
        }
    ]
    var arrayPost = [
        {
            name : 'HuyHuy',
            image : 'https://scontent.fsgn4-1.fna.fbcdn.net/v/t39.30808-6/274876629_2826541607639210_363529317853290439_n.jpg?_nc_cat=101&ccb=1-5&_nc_sid=09cbfe&_nc_ohc=zhn6GxH97wsAX9igMrU&_nc_ht=scontent.fsgn4-1.fna&oh=00_AT8CV-QY77nPfLu8se8Ba5bfAa8KH96jrUmxQJa0CXTW2A&oe=625BCEB5',
            imagePost : 'https://scontent.fsgn4-1.fna.fbcdn.net/v/t39.30808-6/274876629_2826541607639210_363529317853290439_n.jpg?_nc_cat=101&ccb=1-5&_nc_sid=09cbfe&_nc_ohc=zhn6GxH97wsAX9igMrU&_nc_ht=scontent.fsgn4-1.fna&oh=00_AT8CV-QY77nPfLu8se8Ba5bfAa8KH96jrUmxQJa0CXTW2A&oe=625BCEB5',
            like : 30,
            content : 'Hạnh phúc là không phải một người đàn ông bỏ cả thế giới để yêu em, mà là anh ta vì yêu em mà sắp xếp lại thế giới của mình.',
            comment : 10,
            time : '1 giờ trước',
        },
        {
            name : 'DucHoan',
            image : 'https://scontent.fsgn8-1.fna.fbcdn.net/v/t1.30497-1/143086968_2856368904622192_1959732218791162458_n.png?stp=cp0_dst-png_p80x80&_nc_cat=1&ccb=1-5&_nc_sid=7206a8&_nc_ohc=iuMIcxiCMkcAX_TVYh4&_nc_oc=AQnCMwFO0ikM1T3PNmT6hLfYsZgH-UFncWKfNhVaUwjq4DeJjL3Zz5o9N1VoxVT46V_F5s1RY-Ndwrkb3kv6fw1r&_nc_ht=scontent.fsgn8-1.fna&oh=00_AT8o3TOeWVcpPpS4Gy7NagZtopzLFPdCkkGCAzsGaaMdEQ&oe=627B5DF8',
            imagePost : 'https://scontent-sin6-3.xx.fbcdn.net/v/t1.6435-9/122192711_697566607532271_2285775074524737085_n.jpg?_nc_cat=104&ccb=1-5&_nc_sid=e3f864&_nc_ohc=v6Du3sqjqlAAX8KWskq&_nc_ht=scontent-sin6-3.xx&oh=00_AT89ENc9sj_DWyzkJzfnj2X0csGDqb9qHF3d2_s5uubmgw&oe=627CA4C0',
            like : 300,
            content : 'Hỡi thế gian có ai hiểu được mình.',
            comment : 10,
            time : '2 giờ trước',
        },
        {
            name : 'CamVan',
            image : 'https://scontent.fsgn13-2.fna.fbcdn.net/v/t39.30808-6/273154334_1123664431736763_6121942889354663811_n.jpg?_nc_cat=108&ccb=1-5&_nc_sid=09cbfe&_nc_ohc=BoFOVA5QuwIAX-KiXcQ&tn=98Qe8qL2dr5GlQT0&_nc_ht=scontent.fsgn13-2.fna&oh=00_AT8FeFwFTaLe6n_2eXdstYnWoCRVcEtpZZNsA2y4eGBazw&oe=625CDBAA',
            imagePost : 'https://scontent.fsgn13-2.fna.fbcdn.net/v/t39.30808-6/273154334_1123664431736763_6121942889354663811_n.jpg?_nc_cat=108&ccb=1-5&_nc_sid=09cbfe&_nc_ohc=BoFOVA5QuwIAX-KiXcQ&tn=98Qe8qL2dr5GlQT0&_nc_ht=scontent.fsgn13-2.fna&oh=00_AT8FeFwFTaLe6n_2eXdstYnWoCRVcEtpZZNsA2y4eGBazw&oe=625CDBAA',
            like : 100,
            content : 'Tình chỉ đẹp khi còn giang dở.',
            comment : 10,
            time : '10 giờ trước',
        },
        {
            name : 'Tường Vi',
            image : 'https://scontent-sin6-1.xx.fbcdn.net/v/t39.30808-6/272152926_1240913986401147_8867493523089750699_n.jpg?_nc_cat=111&ccb=1-5&_nc_sid=09cbfe&_nc_ohc=9Nz4bVKM5joAX8fhbRi&_nc_ht=scontent-sin6-1.xx&oh=00_AT_PmiSFopbNLfgeXZxQVCC1nETPN56gDmF5MNinf4vlsQ&oe=625C53AC',
            imagePost : 'https://scontent-sin6-1.xx.fbcdn.net/v/t39.30808-6/272152926_1240913986401147_8867493523089750699_n.jpg?_nc_cat=111&ccb=1-5&_nc_sid=09cbfe&_nc_ohc=9Nz4bVKM5joAX8fhbRi&_nc_ht=scontent-sin6-1.xx&oh=00_AT_PmiSFopbNLfgeXZxQVCC1nETPN56gDmF5MNinf4vlsQ&oe=625C53AC',
            like : 200,
            content : 'Hạnh phúc là không phải một người đàn ông bỏ cả thế giới để yêu em, mà là anh ta vì yêu em mà sắp xếp lại thế giới của mình.',
            comment : 10,
            time : '1 giờ trước',
        },
        {
            name : 'DucHung',
            image : 'https://scontent-sin6-4.xx.fbcdn.net/v/t1.6435-9/52696062_101541554333212_6443151805353295872_n.jpg?_nc_cat=103&ccb=1-5&_nc_sid=09cbfe&_nc_ohc=iVYxj2aTG4MAX9KnVR1&_nc_ht=scontent-sin6-4.xx&oh=00_AT91XhpTsxpNb7NguhkEdM6FjBuqzXxj45JWgs4OlLsxbQ&oe=627DBD8C',
            imagePost : 'https://scontent-sin6-4.xx.fbcdn.net/v/t1.6435-9/52696062_101541554333212_6443151805353295872_n.jpg?_nc_cat=103&ccb=1-5&_nc_sid=09cbfe&_nc_ohc=iVYxj2aTG4MAX9KnVR1&_nc_ht=scontent-sin6-4.xx&oh=00_AT91XhpTsxpNb7NguhkEdM6FjBuqzXxj45JWgs4OlLsxbQ&oe=627DBD8C',
            like : 600,
            content : 'Hạnh phúc là không phải một người đàn ông bỏ cả thế giới để yêu em, mà là anh ta vì yêu em mà sắp xếp lại thế giới của mình.',
            comment : 10,
            time : '1 giờ trước',
        }
    ]

    return(
        <View style = {styles.Header}>
            <View style = {styles.HeaderApp}>
                <Text style = {styles.HeaderAppText}>Waiter</Text>
                <Octicons style = {styles.HeaderAppActionAdd} name="diff-added" size={30} color="white"/>
                <AntDesign style = {styles.HeaderAppActionMessage} name="message1" size={30} color="white" onPress={() => {navigation.navigate('Messages')}} />
            </View>
            <ScrollView style = {styles.Home} 
                showsVerticalScrollIndicator={false}
                showsHorizontalScrollIndicator={false}
            >
                {/* header ScrollView story */}
                <ScrollView 
                    horizontal
                    showsHorizontalScrollIndicator={false}
                >
                    <View style = {styles.LoadingContainer}>
                        <View>
                            <ImageBackground style={styles.tinyLogo} source = {{uri: 'https://scontent.fsgn4-1.fna.fbcdn.net/v/t39.30808-6/274876629_2826541607639210_363529317853290439_n.jpg?_nc_cat=101&ccb=1-5&_nc_sid=09cbfe&_nc_ohc=zhn6GxH97wsAX9igMrU&_nc_ht=scontent.fsgn4-1.fna&oh=00_AT8CV-QY77nPfLu8se8Ba5bfAa8KH96jrUmxQJa0CXTW2A&oe=625BCEB5'}} imageStyle={{ borderRadius: 60/2 }}>
                                <View style = {{width: 18, height: 18, borderRadius: 18/2, backgroundColor: 'black',marginLeft : '70%', marginTop : '70%'}}>
                                    <View style = {styles.Add}>
                                        <MaterialIcons name='add' size={15} color='#fff'/>
                                    </View>
                                </View>
                            </ImageBackground>
                            <Text style = {styles.AddStoryText}>Your story</Text>
                        </View>
                        {arrayStory.map(item=>(
                            <View>
                                <Image style={styles.tinyLogoFriend} source = {{uri: item.image}}/>
                                <Text style = {styles.NameFriend}>{item.name}</Text>
                            </View>
                        ))}
                    </View>
                </ScrollView>
                {/* body ScrollView */}
                {
                    arrayPost.map(item=>(

                        <View style = {styles.BodyContainer}>
                            {/* Infor user post */}
                            <View style = {styles.HeaderPost}>
                                <View style = {styles.Userpost}>
                                    <Image style={styles.ImageFriendPost} source = {{uri: item.image}}/>
                                    <Text style = {styles.NameUserPost}>{item.name}</Text>
                                </View>
                                <View style = {styles.SettingPost}>
                                    <Icon name="ellipsis-vertical" size={25} color="white" />
                                </View>
                            </View>
                            <View style = {styles.ImagePost}>
                                <Image style = {styles.ImageUserPost} source = {{uri: item.imagePost}}/>
                            </View>
                        
                            {/* Action User  */}
                            <View style = {styles.ActionContainer}>
                                <View style = {styles.IconActionLike}>
                                    <Icon name="heart-outline" size={25} color="white" />
                                </View>
                                <View style = {styles.IconAction}>
                                    <FontAwesome name="comment-o" size={25} color="white" onPress={() => {navigation.navigate('Comment')}}/>
                                </View>
                                <View style = {styles.IconAction}>
                                    <Feather name="send" size={25} color="white" />
                                </View>
                                <View style = {styles.IconActionSave}>
                                    <MaterialIcons name="save-alt" size={25} color="white" />
                                </View>
                            </View>
                            {/* Like, Content and SeeMore Comment*/}
                            <View style = {styles.ContentContainer}>
                                <Text style = {styles.likeText}>Có {item.like} lượt thích</Text>
                                    <Text style = {styles.ContentText}>
                                        {item.name}
                                        <Text style = {styles.EmptyText}> </Text>
                                        <Text style = {styles.UsercontentText}>
                                        {item.content}
                                        </Text>
                                    </Text>
                                    <Text style = {styles.SeeMoreComment} onPress = {(e) =>{
                                        navigation.navigate('Comment')
                                    }}>Xem tất cả 
                                        <Text> {item.comment} </Text>
                                        bình luận.
                                    </Text>
                                    <Text style = {styles.TextTimePost}>{item.time}</Text>
                            </View>
                        </View>
                    ))}
            </ScrollView>
        </View>
    );
};
const styles = StyleSheet.create({
    Home:{
        backgroundColor : 'black',
    },
    Header:{
        flex : 1,
    },
    HeaderApp : {
        backgroundColor : 'black',
        flexDirection : 'row',
    },
    HeaderAppText : {
        fontSize : 25,
        color : 'white',
        marginLeft : 10,
        marginTop : 10,
        marginBottom : 10,
        fontStyle : 'italic',
        fontFamily : 'times new roman',
        fontWeight : 'bold',
    },
    HeaderAppActionAdd : {
        marginLeft : '55%',
        marginTop : 10,
    },
    HeaderAppActionMessage : {
        marginLeft : 15,
        marginTop : 10,
        borderRadius : 5,
    },
    LoadingContainer: {
        paddingTop: 8,
        backgroundColor: 'black',
        height : 100,
        flexDirection : 'row',
        borderBottomColor: "#414360",
        borderBottomWidth: 1,
    },
    Add : {
        backgroundColor : '#5ccfe6',
        width : 15,
        height : 15,
        borderRadius : 15/2,
        marginLeft : '8%',
        marginTop : '8%',
    },
    tinyLogo: {
        marginLeft: 12,
        width: 60,
        height: 60,
        borderRadius: 60/2,
    },
    AddStoryText: {
        marginTop: 5,
        marginLeft: 12,
        color: 'white',
    },
    tinyLogoFriend: {
        marginLeft: 15,
        width: 60,
        height: 60,
        borderRadius: 60/2,
    },
    NameFriend: {
        marginTop: 5,
        marginLeft: 18,
        color: 'white',
    },
    BodyContainer: {
        backgroundColor: 'black',
        borderBottomColor: "#414360",
        borderBottomWidth: 2,
    },
    HeaderPost: {
        flexDirection : 'row',
        marginTop : 25,
        marginLeft : 10,
    },
    Userpost: {
        flexDirection: 'row',
        width : '80%',
    },
    ImageFriendPost: {
        height: 45,
        width: 45,
        borderRadius: 45/2,
    },
    NameUserPost: {
        color: 'white',
        marginLeft: 15,
        marginTop: 15,
    },
    SettingPost: {
        width : '20%',
        marginTop : 10,
        alignItems : 'center',
        marginLeft : 8
    },
    ImagePost : {
        marginTop : 15,
    },
    ImageUserPost: {
        width : '100%',
        height : 350,
    },
    ActionContainer: {
        flexDirection: 'row',
    },
    IconAction: {
        marginLeft : 25,
        marginTop : 15,
    },
    IconActionLike: {
        marginLeft : 15,
        marginTop : 15,
        marginBottom : 10,
    },
    IconActionSave: {
        marginLeft : '55%',
        marginTop : 15,
    },
    ContentContainer: {
        marginLeft : 15,
        marginTop : 10,
    },
    likeText: {
        color: 'white',
    },
    UsercontentText: {
        color: 'white',
        fontWeight : 'normal',
    },
    ContentText: {
        marginTop : 5,
        color: 'white',
        fontWeight: 'bold',
        textAlign : 'justify',
        width : '98%',
    },
    SeeMoreComment : {
        color : '#8e8e8e',
        marginTop : 5,
    },
    TextTimePost: {
        color : '#8e8e8e',
        marginBottom : 10,
    }
});