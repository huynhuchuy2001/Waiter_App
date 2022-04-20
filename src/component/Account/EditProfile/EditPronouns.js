import React, {useState} from 'react';
import AntDesign from 'react-native-vector-icons/AntDesign';
import { Text, View, StyleSheet, TextInput , Switch} from 'react-native';
import { useNavigation } from "@react-navigation/native";
export default function EditPronouns() {
    const navigation = useNavigation();
    const [isEnabled, setIsEnabled] = useState(false);
    const toggleSwitch = () => setIsEnabled(previousState => !previousState);
    return(
        <View style={styles.EditProfilecontainer}>
            {/* Header Edit Profile */}
            <View style={styles.HeaderEditProfile}>
                <AntDesign name="arrowleft" size={30} color="white" onPress={() => navigation.goBack()} style ={{marginTop : '2%',marginLeft : '2%'}}/>
                <Text style={styles.HeaderEditProfileText}>Pronouns</Text>
                <AntDesign name="check" size={30} color="#8e8e8e" style ={{marginTop : '2%',marginLeft : '50%'}}/>
            </View>
            <View style={styles.EditProfileBody}>
                {/* Edit Pronoun */}
                <View style={styles.EditPronoun}>
                    <Text style={styles.EditPronounText}>Pronouns</Text>
                    <TextInput style={styles.EditPronounInput} placeholder="Add your pronouns" placeholderTextColor="#8e8e8e" />
                </View>
                <Text style={styles.FormatEditPronoun}>Add up to 4 pronouns to your profile so people know how to refer to you. You can edit or remove them at any time.
                    <Text style={{color : 'white'}}> Learn More</Text>
                </Text>
                <View style={{flexDirection : 'row'}}>
                    <Text style={styles.SwitchPronoun}>Show to Followers Only</Text>
                    <Switch
                        trackColor={{ false: "#767577", true: "#81b0ff" }}
                        thumbColor={isEnabled ? "#f5dd4b" : "#f4f3f4"}
                        ios_backgroundColor="#3e3e3e"
                        onValueChange={toggleSwitch}
                        value={isEnabled}
                        style = {{marginTop : '2%',marginLeft : '30%'}}
                    />
                </View>
                <Text style={styles.WarningEditPronoun}>When this is turned on, only people who follow you will see your pronouns.</Text>
            </View>
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
        marginLeft: '5%',
    },
    EditProfileBody: {
        backgroundColor: 'black',
        height: '100%',
    },
    EditPronoun: {
        marginTop: '2.5%',
        marginLeft: '5%',
    },
    EditPronounText: {
        color: '#8e8e8e',
        fontSize: 15,
    },
    EditPronounInput: {
        color: 'white',
        fontSize: 18,
        width: '95%',
        borderBottomColor: "white",
        borderBottomWidth: 1,
    },
    FormatEditPronoun: {
        width: '94%',
        color: '#8e8e8e',
        fontSize: 15,
        marginTop: '2.5%',
        marginLeft: '5%',
    },
    WarningEditPronoun: {
        width: '92%',
        color: '#8e8e8e',
        fontSize: 15,
        marginTop: '2.5%',
        marginLeft: '5%',
    },
    SwitchPronoun: {
        color: 'white',
        fontSize: 20,
        marginTop: '2.5%',
        marginLeft: '5%',
    }
});