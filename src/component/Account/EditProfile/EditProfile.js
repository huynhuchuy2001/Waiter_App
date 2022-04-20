import * as React from 'react';
import AntDesign from 'react-native-vector-icons/AntDesign';
import { Text, View, StyleSheet, TextInput,Image,ScrollView,Pressable } from 'react-native';
import { useNavigation } from "@react-navigation/native";
export default function EditProfile() {
    const navigation = useNavigation();
    var user = {
        name : "Huy Huỳnh",
        username : 'hdh.huyyyy',
        pronouns : 'hờ y huy',
        website : 'https://www.facebook.com/hyuezh01',
        bio : 'Huy is a software engineer who is currently studying at the University of Washington.',
    }
    return (
        <View style={styles.EditProfilecontainer}>
            {/* Header Edit Profile */}
            <View style={styles.HeaderEditProfile}>
                <AntDesign name="close" size={30} color="white" onPress={() => navigation.goBack()} style ={{marginTop : '2%',marginLeft : '2%'}}/>
                <Text style={styles.HeaderEditProfileText}>Edit Profile</Text>
                <AntDesign name="check" size={30} color="#087cbf" style ={{marginTop : '2%',marginLeft : '40%'}}/>
            </View>
            <ScrollView showsVerticalScrollIndicator={false} style = {{height : '100%'}}>
                {/* Body Edit Profile */}
                <View style={styles.EditProfileBody}>
                    {/* Edit Photo */}
                    <View style={styles.EditImage}>
                        <Image source={{uri : 'https://scontent.fsgn4-1.fna.fbcdn.net/v/t39.30808-6/274876629_2826541607639210_363529317853290439_n.jpg?_nc_cat=101&ccb=1-5&_nc_sid=09cbfe&_nc_ohc=zhn6GxH97wsAX9igMrU&_nc_ht=scontent.fsgn4-1.fna&oh=00_AT8CV-QY77nPfLu8se8Ba5bfAa8KH96jrUmxQJa0CXTW2A&oe=625BCEB5'}} style = {styles.ProfileImage}/>
                        <Text style={styles.EditImageText}>Change profile Photo</Text>
                    </View>
                    {/* Edit Name */}
                    <Pressable onPress = { () => {navigation.navigate('EditName')}}>
                        <View style={styles.EditName}>
                            <Text style={styles.EditNameText} onPress = { () => {navigation.navigate('EditName')}}>Name</Text>
                            <TextInput style={styles.EditNameInput} placeholder="Enter your name" placeholderTextColor="#8e8e8e" value={user.name} editable = {false} />
                        </View>
                    </Pressable>
                    {/* Edit UserName */}
                    <Pressable onPress = { () => {navigation.navigate('EditUserName')}}>
                        <View style={styles.EditUserName}>
                            <Text style={styles.EditUserNameText}>UserName</Text>
                            <TextInput style={styles.EditUserNameInput} placeholder="Enter your username" placeholderTextColor="#8e8e8e" value={user.username} editable = {false}/>
                        </View>
                    </Pressable>
                    {/* Edit Pronouns */}
                    <Pressable onPress = { () => {navigation.navigate('EditPronouns')}}>
                        <View style={styles.EditPronouns}>
                            <Text style={styles.EditPronounsText}>Pronouns</Text>
                            <TextInput style={styles.EditPronounsInput} placeholder="Enter your pronouns" placeholderTextColor="#8e8e8e" value={user.pronouns} editable = {false}/>
                        </View>
                    </Pressable>
                    {/* Edit Website */}
                    <View style={styles.EditWebsite}>
                        <Text style={styles.EditWebsiteText}>Website</Text>
                        <TextInput style={styles.EditWebsiteInput} placeholder="Enter your website" placeholderTextColor="#8e8e8e" value={user.website}/>
                    </View>
                    {/* Edit Bio */}
                    <Pressable onPress = { () => {navigation.navigate('EditBio')}}>
                        <View style={styles.EditBio}>
                            <Text style={styles.EditBioText}>Bio</Text>
                            <TextInput style={styles.EditBioInput} placeholder="Enter your bio" placeholderTextColor="#8e8e8e" value={user.bio} editable = {false}/>
                        </View>
                    </Pressable>
                    <View style={{borderBottomColor: "#8e8e8e",borderBottomWidth: 1, marginTop : '7%'}}/>
                    {/* Switch to professional account */}
                    <View style={styles.SwitchAccount}>
                        <Text style={styles.SwitchAccountText}>Switch to professional account</Text>
                    </View>
                    {/* Add Avatar */}
                    <View style={styles.AddAvatar}>
                        <Text style={styles.AddAvatarText}>Add Avatar</Text>
                    </View>
                    {/* Personal information settings */}
                    <View style={styles.PersonalInformation}>
                        <Text style={styles.PersonalInformationText} onPress = {() => {navigation.navigate('EditInformations')}}>Personal information settings</Text>
                    </View>
                </View>
            </ScrollView>
        </View>
    ) 
};
const styles = StyleSheet.create({
    EditProfilecontainer: {
        backgroundColor: 'black',
    },
    HeaderEditProfile: {
        backgroundColor: 'black',
        flexDirection: 'row',
        height: 50,
    },
    HeaderEditProfileText: {
        color: 'white',
        fontSize: 22,
        marginTop: '2%',
        marginLeft: '10%',
    },
    EditProfileBody: {
        backgroundColor: 'black',
        height: '100%',
    },
    EditImage: {
        marginTop: '2%',
    },
    ProfileImage: {
        height: 80,
        width: 80,
        borderRadius: 40,
        marginLeft: '40%',
    },
    EditImageText: {
        color: '#087cbf',
        fontSize: 18,
        textAlign: 'center',
        marginTop: '2%',
    },
    EditName: {
        marginTop: '2.5%',
        marginLeft: '5%',
    },
    EditNameText: {
        color: '#8e8e8e',
        fontSize: 15,
    },
    EditNameInput: {
        color: 'white',
        fontSize: 18,
        width: '95%',
        borderBottomColor: "white",
        borderBottomWidth: 1,
    },
    EditUserName: {
        marginTop: '2.5%',
        marginLeft: '5%',
    },
    EditUserNameText: {
        color: '#8e8e8e',
        fontSize: 15,
    },
    EditUserNameInput: {
        color: 'white',
        fontSize: 18,
        width: '95%',
        borderBottomColor: "white",
        borderBottomWidth: 1,
    },
    EditPronouns: {
        marginTop: '2.5%',
        marginLeft: '5%',
    },
    EditPronounsText: {
        color: '#8e8e8e',
        fontSize: 15,
    },
    EditPronounsInput: {
        color: 'white',
        fontSize: 18,
        width: '95%',
        borderBottomColor: "white",
        borderBottomWidth: 1,
    },
    EditWebsite: {
        marginTop: '2.5%',
        marginLeft: '5%',
    },
    EditWebsiteText: {
        color: '#8e8e8e',
        fontSize: 15,
    },
    EditWebsiteInput: {
        color: 'white',
        fontSize: 18,
        width: '95%',
        borderBottomColor: "white",
        borderBottomWidth: 1,
    },
    EditBio: {
        marginTop: '2.5%',
        marginLeft: '5%',
    },
    EditBioText: {
        color: '#8e8e8e',
        fontSize: 15,
    },
    EditBioInput: {
        color: 'white',
        fontSize: 18,
        width: '95%',
        borderBottomColor: "white",
        borderBottomWidth: 1,
    },
    SwitchAccount: {
        marginTop: '3%',
        borderBottomColor: "#8e8e8e",
        borderBottomWidth: 1,
    },
    SwitchAccountText: {
        marginLeft: '5%',
        color: '#087cbf',
        fontSize: 18,
        marginBottom: '2%',
    },
    AddAvatar: {
        marginTop: '3%',
        borderBottomColor: "#8e8e8e",
        borderBottomWidth: 1,
    },
    AddAvatarText: {
        marginLeft: '5%',
        color: '#087cbf',
        fontSize: 18,
        marginBottom: '2%',
    },
    PersonalInformation: {
        marginTop: '3%',
        borderBottomColor: "#8e8e8e",
        borderBottomWidth: 1,
    },
    PersonalInformationText: {
        marginLeft: '5%',
        color: '#087cbf',
        fontSize: 18,
        marginBottom: '2%',
    }
});