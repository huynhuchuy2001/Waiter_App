import * as React from 'react';
import AntDesign from 'react-native-vector-icons/AntDesign';
import Ionicons from 'react-native-vector-icons/Ionicons';
import { Text, View, StyleSheet, Pressable, TextInput ,Switch,Image} from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { ScrollView } from 'react-native-gesture-handler';
export default function Saved() {
    const navigation = useNavigation();
    var arrayImageSave = [
        {
            title : 'All Posts',
            image : {
                image1 : 'https://scontent.fsgn13-2.fna.fbcdn.net/v/t39.30808-6/273241477_1938622796344650_4709420617748794170_n.jpg?_nc_cat=109&ccb=1-6&_nc_sid=e3f864&_nc_ohc=Mb-Ej_RW_scAX8VGrk7&_nc_ht=scontent.fsgn13-2.fna&oh=00_AT8mabspphqlgy634XfeRAj40FEPhclInE7FbOkRiBNlmg&oe=628B688F',
                image2 : 'https://scontent.fsgn8-2.fna.fbcdn.net/v/t1.6435-9/195257224_2643156072644432_4935552701988663558_n.jpg?_nc_cat=105&ccb=1-6&_nc_sid=174925&_nc_ohc=yh9Rn-wVezgAX9vp5LJ&_nc_ht=scontent.fsgn8-2.fna&oh=00_AT9X_2fa5_-CMif_H1yXe4PFPzSRu0Vi4eisgMNyi7wnqA&oe=62AB4A30',
                image3 : 'https://scontent.fsgn13-1.fna.fbcdn.net/v/t1.6435-9/48413416_2005537883072924_6727718849279426560_n.jpg?_nc_cat=107&ccb=1-6&_nc_sid=174925&_nc_ohc=gIdEP3a1_LIAX_DUE0Q&_nc_ht=scontent.fsgn13-1.fna&oh=00_AT8Us9kQVPKJn8cxPVi6IAGA--f5Ey2fG9Q1tRmcxclr6Q&oe=62AA1685',
                image4 : 'https://scontent.fsgn4-1.fna.fbcdn.net/v/t39.30808-6/274876629_2826541607639210_363529317853290439_n.jpg?_nc_cat=101&ccb=1-6&_nc_sid=09cbfe&_nc_ohc=-GOPXgeLknsAX_K9kT0&_nc_ht=scontent.fsgn4-1.fna&oh=00_AT-QqajvrtsWhRFAqTUzosNVMnOfIAhk2Vn9I2DAxpsgUQ&oe=628B44B5'
            }
        },
        {
            title : 'huyyy',
            image : {
                image1 : 'https://scontent.fsgn13-2.fna.fbcdn.net/v/t39.30808-6/273241477_1938622796344650_4709420617748794170_n.jpg?_nc_cat=109&ccb=1-6&_nc_sid=e3f864&_nc_ohc=Mb-Ej_RW_scAX8VGrk7&_nc_ht=scontent.fsgn13-2.fna&oh=00_AT8mabspphqlgy634XfeRAj40FEPhclInE7FbOkRiBNlmg&oe=628B688F',
                image2 : 'https://scontent.fsgn8-2.fna.fbcdn.net/v/t1.6435-9/195257224_2643156072644432_4935552701988663558_n.jpg?_nc_cat=105&ccb=1-6&_nc_sid=174925&_nc_ohc=yh9Rn-wVezgAX9vp5LJ&_nc_ht=scontent.fsgn8-2.fna&oh=00_AT9X_2fa5_-CMif_H1yXe4PFPzSRu0Vi4eisgMNyi7wnqA&oe=62AB4A30',
                image3 : 'https://scontent.fsgn13-1.fna.fbcdn.net/v/t1.6435-9/48413416_2005537883072924_6727718849279426560_n.jpg?_nc_cat=107&ccb=1-6&_nc_sid=174925&_nc_ohc=gIdEP3a1_LIAX_DUE0Q&_nc_ht=scontent.fsgn13-1.fna&oh=00_AT8Us9kQVPKJn8cxPVi6IAGA--f5Ey2fG9Q1tRmcxclr6Q&oe=62AA1685',
                image4 : 'https://scontent.fsgn4-1.fna.fbcdn.net/v/t39.30808-6/274876629_2826541607639210_363529317853290439_n.jpg?_nc_cat=101&ccb=1-6&_nc_sid=09cbfe&_nc_ohc=-GOPXgeLknsAX_K9kT0&_nc_ht=scontent.fsgn4-1.fna&oh=00_AT-QqajvrtsWhRFAqTUzosNVMnOfIAhk2Vn9I2DAxpsgUQ&oe=628B44B5'
            }
        }
    ];
    return( 
        <View style = {styles.Saved}>
            <View style = {styles.HeaderSaved}>
                <AntDesign name = "arrowleft" size={30} color = "rgb(248, 248, 242)"  onPress = {(e) =>{navigation.goBack()}}></AntDesign>
                <Text style = {styles.textSaved}>Saved</Text>
                <Ionicons name = "add" size={30} color = "rgb(248, 248, 242)" style ={{marginLeft : '60%'}} ></Ionicons>
            </View>
            <ScrollView style = {{marginTop : '2%'}} showsVerticalScrollIndicator = {false}>
                {/* Post Saved */}
                <View style = {{flexDirection : 'row', marginLeft : '2%',marginTop : '2%'}}>
                {arrayImageSave.map((item) => (
                    <View style = {styles.PostSaved}>
                        <View style = {styles.PostSavedItem}>
                            <View style = {styles.PostSavedItemImage}>
                                <Image source = {{uri : item.image.image1}} style = {styles.PostSavedItemLeftAvatar}></Image>
                                <Image source = {{uri : item.image.image2}} style = {styles.PostSavedItemRightAvatar}></Image>
                            </View>
                            <View style = {styles.PostSavedItemImage}>
                                <Image source = {{uri : item.image.image3}} style = {styles.PostSavedItemBottomLeftAvatar}></Image>
                                <Image source = {{uri : item.image.image4}} style = {styles.PostSavedItemBottomRightAvatar}></Image>
                            </View>
                        </View>
                        <Text  style = {styles.textSavedPost}>{item.title}</Text>
                    </View>
                ))}
                </View>
            </ScrollView>
        </View>
    );
}
const styles = StyleSheet.create({
    Saved: {
        flex: 1,
        backgroundColor: 'black',
    },
    HeaderSaved: {
        flexDirection: 'row',
        marginTop : '2%',
        marginLeft : '2%',
    },
    textSaved: {
        color : 'white',
        fontSize : 22,
        fontWeight : 'bold',
        marginLeft : '5%',
    },
    PostSavedItem: {
        width : 170,
        height : 180,
        marginLeft : '5%',
        
    },
    PostSavedItemImage: {
        flexDirection : 'row',
    },
    PostSavedItemLeftAvatar: {
        width : 85,
        height : 85,
        marginBottom : 1,
        borderTopLeftRadius : 10,  
        marginLeft : 2,
        marginTop : 2,
    },
    PostSavedItemRightAvatar: {
        width : 85,
        height : 85,
        marginBottom : 1,
        borderTopRightRadius : 10,  
        marginLeft : 2,
        marginTop : 2,
    },
    textSavedPost: {
        color : 'white',
        fontSize : 16,
        marginTop : '5%',
        marginLeft : '7%',  
    },
    PostSavedItemBottomLeftAvatar: {
        width : 85,
        height : 85,
        marginBottom : 1,
        borderBottomLeftRadius : 10,  
        marginLeft : 2,
        marginTop : 1,
    },
    PostSavedItemBottomRightAvatar: {
        width : 85,
        height : 85,
        marginBottom : 1,
        borderBottomRightRadius : 10,  
        marginLeft : 2,
        marginTop : 1,
    },
});
