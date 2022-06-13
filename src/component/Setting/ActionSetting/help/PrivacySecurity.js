import * as React from 'react';
import AntDesign from 'react-native-vector-icons/AntDesign';
import { Text, View, StyleSheet, Pressable, TextInput ,ScrollView} from 'react-native';
import { useNavigation } from '@react-navigation/native';
export default function PrivacySecurity() {
    const navigation = useNavigation();
    return( 
        <View style = {styles.PrivacySecurity}>
            <View style = {styles.HeaderPrivacySecurity}>
                <AntDesign name = "arrowleft" size={30} color = "rgb(248, 248, 242)" style ={styles.IconBack} onPress = {(e) =>{navigation.goBack()}}></AntDesign>
                <Text style = {styles.textPrivacySecurity}>Privacy and Security Help</Text>
            </View>
            {/* Body */}
            <ScrollView showsVerticalScrollIndicator = {false}>
                {/* Managing Your Account */}
                <View style = {styles.PrivacySecurityManagingAccount}>
                    <Text style = {styles.textPrivacySecurityManagingAccount}>Managing Your Account</Text>
                    <Text style = {styles.textPrivacySecurityManagingAccountTitle}>Age Requirements</Text>
                    <Text style = {styles.textPrivacySecurityManagingAccountTitle}>Account Privacy</Text>
                    <Text style = {styles.textPrivacySecurityManagingAccountTitle}>Location Sharing</Text>
                    <Text style = {styles.textPrivacySecurityManagingAccountTitleEnd}>Two-Factor Authentication</Text>
                </View>
                {/* Customizing Your Experience */}
                <View style = {styles.PrivacySecurityCustomizingExperience}>
                    <Text style = {styles.textPrivacySecurityCustomizingExperience}>Customizing Your Experience</Text>
                    <Text style = {styles.textPrivacySecurityCustomizingExperienceTitle}>Blocking Accounts</Text>
                    <Text style = {styles.textPrivacySecurityCustomizingExperienceTitle}>Removing Followers</Text>
                    <Text style = {styles.textPrivacySecurityCustomizingExperienceTitle}>Managing Photos of You</Text>
                    <Text style = {styles.textPrivacySecurityCustomizingExperienceTitle}>Filtering Comments</Text>
                    <Text style = {styles.textPrivacySecurityCustomizingExperienceTitle}>Turning Comments Off</Text>
                    <Text style = {styles.textPrivacySecurityCustomizingExperienceTitle}>Deleting Comments</Text>
                    <Text style = {styles.textPrivacySecurityCustomizingExperienceTitle}>Choosing Who Can See Your Story</Text>
                    <Text style = {styles.textPrivacySecurityCustomizingExperienceTitleEnd}>Choosing Who Can Reply to Your Story</Text>
                </View>
                {/* Reporting Content You Don't Like */}
                <View style = {styles.PrivacySecurityReportingContent}>
                    <Text style = {styles.textPrivacySecurityReportingContent}>Reporting Content You Don't Like</Text>
                    <Text style = {styles.textPrivacySecurityReportingContentTitle}>Reporting Comments</Text>
                    <Text style = {styles.textPrivacySecurityReportingContentTitle}>Reporting Accounts or Posts</Text>
                    <Text style = {styles.textPrivacySecurityReportingContentTitle}>Reporting Intimate Images</Text>
                    <Text style = {styles.textPrivacySecurityReportingContentTitle}>Removing Contents From Your Explore</Text>
                    <Text style = {styles.textPrivacySecurityReportingContentTitleEnd}>Sensitive Content Screens</Text>
                </View>
            </ScrollView>

        </View>
    );
}
const styles = StyleSheet.create({
    PrivacySecurity: {
        flex: 1,
        backgroundColor: 'black',
    },
    HeaderPrivacySecurity: {
        flexDirection : 'row',
        height : 40,
        marginTop : '2%',
    },
    IconBack: {
        marginLeft : '2%',
    },
    textPrivacySecurity: {
        color : 'white',
        fontSize : 22,
        fontWeight : 'bold',
        marginLeft : '5%',
    },
    PrivacySecurityManagingAccount: {
        borderBottomColor : '#8e8e8e',
        borderBottomWidth : 1,
        marginTop : '5%',
    },
    textPrivacySecurityManagingAccount: {
        color : 'white',
        fontWeight : 'bold',
        fontSize : 18,
        marginLeft : '5%',
    },
    textPrivacySecurityManagingAccountTitle: {
        color : 'white',
        fontSize : 18,
        marginLeft : '5%',
        marginTop : '5%',
    },
    textPrivacySecurityManagingAccountTitleEnd: {
        color : 'white',
        fontSize : 18,
        marginLeft : '5%',
        marginTop : '5%',
        marginBottom : '5%',
    },
    PrivacySecurityCustomizingExperience: {
        borderBottomColor : '#8e8e8e',
        borderBottomWidth : 1,
        marginTop : '5%',
    },
    textPrivacySecurityCustomizingExperience: {
        color : 'white',
        fontWeight : 'bold',
        fontSize : 18,
        marginLeft : '5%',
    },
    textPrivacySecurityCustomizingExperienceTitle: {
        color : 'white',
        fontSize : 18,
        marginLeft : '5%',
        marginTop : '5%',
    },
    textPrivacySecurityCustomizingExperienceTitleEnd: {
        color : 'white',
        fontSize : 18,
        marginLeft : '5%',
        marginTop : '5%',
        marginBottom : '5%',
    },
    PrivacySecurityReportingContent: {
        borderBottomColor : '#8e8e8e',
        borderBottomWidth : 1,
        marginTop : '5%',
    },
    textPrivacySecurityReportingContent: {
        color : 'white',
        fontWeight : 'bold',
        fontSize : 18,
        marginLeft : '5%',
    },
    textPrivacySecurityReportingContentTitle: {
        color : 'white',
        fontSize : 18,
        marginLeft : '5%',
        marginTop : '5%',
    },
    textPrivacySecurityReportingContentTitleEnd: {
        color : 'white',
        fontSize : 18,
        marginLeft : '5%',
        marginTop : '5%',
        marginBottom : '5%',
    }
});