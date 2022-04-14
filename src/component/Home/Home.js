import React, { Fragment } from 'react';
import Icon from 'react-native-vector-icons/FontAwesome';
import { Text,Button, View, StyleSheet, TextInput,Image,ScrollView } from 'react-native';
export default function Home () {
    var array = [
        {
            name : 'DucHoan',
            image : 'https://scontent.fsgn8-1.fna.fbcdn.net/v/t1.30497-1/143086968_2856368904622192_1959732218791162458_n.png?stp=cp0_dst-png_p80x80&_nc_cat=1&ccb=1-5&_nc_sid=7206a8&_nc_ohc=iuMIcxiCMkcAX_TVYh4&_nc_oc=AQnCMwFO0ikM1T3PNmT6hLfYsZgH-UFncWKfNhVaUwjq4DeJjL3Zz5o9N1VoxVT46V_F5s1RY-Ndwrkb3kv6fw1r&_nc_ht=scontent.fsgn8-1.fna&oh=00_AT8o3TOeWVcpPpS4Gy7NagZtopzLFPdCkkGCAzsGaaMdEQ&oe=627B5DF8'
        },
        {
            name : 'CamVan',
            image : 'https://scontent.fsgn13-2.fna.fbcdn.net/v/t39.30808-1/273154334_1123664431736763_6121942889354663811_n.jpg?stp=dst-jpg_p100x100&_nc_cat=108&ccb=1-5&_nc_sid=7206a8&_nc_ohc=UEVWGcpCoMAAX8OO0tw&_nc_ad=z-m&_nc_cid=0&_nc_ht=scontent.fsgn13-2.fna&oh=00_AT-8xy3baGvi4adrhQbGfE7zQvPeq5H31p_La7ww5tNmWw&oe=625C43EC'
        },
        {
            name : 'DucHung',
            image : 'https://scontent.xx.fbcdn.net/v/t1.6435-1/52696062_101541554333212_6443151805353295872_n.jpg?stp=dst-jpg_p100x100&_nc_cat=103&ccb=1-5&_nc_sid=dbb9e7&_nc_ohc=iVYxj2aTG4MAX-1yQVt&_nc_ad=z-m&_nc_cid=0&_nc_ht=scontent.xx&oh=00_AT-tbc7fGJqay212GakzgeXH3Uqrrtl1Dj8h4X4hqHxQcA&oe=627CCAE2'
        },
        {
            name : 'Tường Vi',
            image : 'https://scontent.fsgn8-1.fna.fbcdn.net/v/t39.30808-1/272152926_1240913986401147_8867493523089750699_n.jpg?stp=dst-jpg_p100x100&_nc_cat=111&ccb=1-5&_nc_sid=7206a8&_nc_ohc=9Nz4bVKM5joAX85SdaW&_nc_ad=z-m&_nc_cid=0&_nc_ht=scontent.fsgn8-1.fna&oh=00_AT-vCC-ptARQUreaNTLWEq04xBm8X5cn8DyN2XmnEJrHkw&oe=625CE52A'
        },
        {
            name : 'HuyHuy',
            image : 'https://scontent.fsgn4-1.fna.fbcdn.net/v/t39.30808-6/274876629_2826541607639210_363529317853290439_n.jpg?_nc_cat=101&ccb=1-5&_nc_sid=09cbfe&_nc_ohc=zhn6GxH97wsAX9igMrU&_nc_ht=scontent.fsgn4-1.fna&oh=00_AT8CV-QY77nPfLu8se8Ba5bfAa8KH96jrUmxQJa0CXTW2A&oe=625BCEB5'
        }
    ]
    return(
        <ScrollView style = {styles.Home} 
            showsVerticalScrollIndicator={false}
            showsHorizontalScrollIndicator={false}
        >
            {/* header ScrollView story */}
            <ScrollView 
                horizontal showsVerticalScrollIndicator={false}
                showsHorizontalScrollIndicator={false}
            >
                <View style = {styles.LoadingContainer}>
                    <View>
                        <Image style={styles.tinyLogo} source = {{uri: 'https://scontent.fsgn4-1.fna.fbcdn.net/v/t39.30808-6/274876629_2826541607639210_363529317853290439_n.jpg?_nc_cat=101&ccb=1-5&_nc_sid=09cbfe&_nc_ohc=zhn6GxH97wsAX9igMrU&_nc_ht=scontent.fsgn4-1.fna&oh=00_AT8CV-QY77nPfLu8se8Ba5bfAa8KH96jrUmxQJa0CXTW2A&oe=625BCEB5'}}/>
                        <Text style = {styles.AddStoryText}>Your story</Text>
                    </View>
                    {array.map(item=>(
                        <View>
                            <Image style={styles.tinyLogoFriend} source = {{uri: item.image}}/>
                            <Text style = {styles.NameFriend}>{item.name}</Text>
                        </View>
                    ))}
                </View>
            </ScrollView>
            {/* body ScrollView */}
            <View style = {styles.BodyContainer}>
                {/* Infor user post */}
                <View style = {styles.HeaderPost}>
                    <View style = {styles.Userpost}>
                        <Image style={styles.ImageFriendPost} source = {{uri: 'https://scontent.fsgn4-1.fna.fbcdn.net/v/t39.30808-6/274876629_2826541607639210_363529317853290439_n.jpg?_nc_cat=101&ccb=1-5&_nc_sid=09cbfe&_nc_ohc=zhn6GxH97wsAX9igMrU&_nc_ht=scontent.fsgn4-1.fna&oh=00_AT8CV-QY77nPfLu8se8Ba5bfAa8KH96jrUmxQJa0CXTW2A&oe=625BCEB5'}}/>
                        <Text style = {styles.NameUserPost}>HuyHuy</Text>
                    </View>
                    <View style = {styles.SettingPost}>
                        <Icon name="ellipsis-h" size={15} color="white" />
                    </View>
                </View>
                <View style = {styles.ImagePost}>
                    <Image style = {styles.ImageUserPost} source = {{uri: 'https://scontent.fsgn4-1.fna.fbcdn.net/v/t39.30808-6/274876629_2826541607639210_363529317853290439_n.jpg?_nc_cat=101&ccb=1-5&_nc_sid=09cbfe&_nc_ohc=zhn6GxH97wsAX9igMrU&_nc_ht=scontent.fsgn4-1.fna&oh=00_AT8CV-QY77nPfLu8se8Ba5bfAa8KH96jrUmxQJa0CXTW2A&oe=625BCEB5'}}/>
                </View>
            </View>
            {/* Action User  */}
            <View style = {styles.ActionContainer}>
                <View style = {styles.IconActionLike}>
                    <Icon name="heart" size={25} color="white" />
                </View>
                <View style = {styles.IconAction}>
                    <Icon name="comment" size={25} color="white" />
                </View>
                <View style = {styles.IconAction}>
                    <Icon name="share-alt" size={25} color="white" />
                </View>
                <View style = {styles.IconActionSave}>
                    <Icon name="save" size={25} color="white" />
                </View>
            </View>
            {/* Like, Content and SeeMore Comment*/}
            <View style = {styles.ContentContainer}>
                <Text style = {styles.likeText}>Có 200 lượt thích</Text>
                    <Text style = {styles.ContentText}>
                        HuyHuy
                        <Text style = {styles.EmptyText}> </Text>
                        <Text style = {styles.UsercontentText}>
                        Hạnh phúc là không phải một người đàn ông bỏ cả thế giới để yêu em, mà là anh ta vì yêu em mà sắp xếp lại thế giới của mình.
                        </Text>
                    </Text>
                    <Text style = {styles.SeeMoreComment}>Xem tất cả 
                    <Text> 200 </Text>
                     bình luận.</Text>
            </View>
        </ScrollView>
    );
};
const styles = StyleSheet.create({
    Home:{
        backgroundColor : '#1F2739',
    },
    LoadingContainer: {
        paddingTop: 8,
        backgroundColor: '#1F2739',
        height : 100,
        flexDirection : 'row',
        borderBottomColor: "#414360",
        borderBottomWidth: 2,
    },
    tinyLogo: {
        marginLeft: 5,
        width: 60,
        height: 60,
        borderRadius: 60/2,
    },
    AddStoryText: {
        marginTop: 5,
        marginLeft: 5,
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
        backgroundColor: '#1F2739',
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
        marginTop : 20,
        alignItems : 'center',
        marginLeft : 8
    },
    ImagePost : {
        marginTop : 15,
    },
    ImageUserPost: {
        width : '100%',
        height : 500,
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
    },
    IconActionSave: {
        marginLeft : '55%',
        marginTop : 15,
    },
    ContentContainer: {
        marginLeft : 15,
        marginTop : 15,
    },
    likeText: {
        color: 'white',
    },
    UsercontentText: {
        color: 'white',
        fontWeight : 'normal'
    },
    ContentText: {
        marginTop : 10,
        color: 'white',
        fontWeight: 'bold',
    },
    SeeMoreComment : {
        color : 'white',
        marginTop : 5,
    }
});