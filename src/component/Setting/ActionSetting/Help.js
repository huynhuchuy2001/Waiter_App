import React,{useState} from 'react';
import AntDesign from 'react-native-vector-icons/AntDesign';
import { Text, View, StyleSheet, Pressable, TextInput,Modal, Image,Alert } from 'react-native';
import { useNavigation } from '@react-navigation/native';
export default function Helps() {
    const navigation = useNavigation();
    const [modalVisible, setModalVisible] = useState(false);
    return( 
        <View style = {styles.Helps}>
            <Modal
                animationType="fade"
                transparent={true}
                visible={modalVisible}
                onRequestClose={() => {
                    Alert.alert("Modal has been closed.");
                    setModalVisible(!modalVisible);
                }}
                >
                <View style={styles.centeredView}>
                    <View style={styles.modalView}>
                        <View style={styles.modalHeader}>
                            <Text style={styles.modalText}>Report a problem</Text>
                        </View>
                        <Text style={styles.modalTextReport}>Report spam or abuse</Text>
                        <Text style={styles.modalTextFeedback}>Send feedback</Text>
                        <Text style={styles.modalTextReport}>Report a problem</Text>
                        <Text style={styles.modalTextClose} onPress = {() => setModalVisible(!modalVisible)}>Close</Text>
                    </View>
                </View>
            </Modal>
            <View style = {styles.HeaderHelps}>
                <AntDesign name = "arrowleft" size={30} color = "rgb(248, 248, 242)" style ={styles.IconBack} onPress = {(e) =>{navigation.goBack()}}></AntDesign>
                <Text style = {styles.textHelps}>Helps</Text>
            </View>
            {/* Report */}
            <Pressable onPress={() => {setModalVisible(true)}}>
                <View style = {styles.HelpsAction}>
                    <Text style = {styles.textHelpsAction}>Report a Problem</Text>
                    <AntDesign name="right" size={20} color="white" style = {styles.IconRight}/>
                </View>
            </Pressable>
            {/* Hepl Center */}
            <View style = {styles.HelpsAction}>
                <Text style = {styles.textHelpsAction}>Help Center</Text>
                <AntDesign name="right" size={20} color="white" style = {styles.IconRight}/>
            </View>
            {/* Privacy and Security */}
            <Pressable onPress={() => {navigation.navigate('PrivacySecurity')}}>
                <View style = {styles.HelpsAction}>
                    <Text style = {styles.textHelpsAction}>Privacy and Security Help</Text>
                    <AntDesign name="right" size={20} color="white" style = {styles.IconRight}/>
                </View>
            </Pressable>
            {/* Support Request */}
            <Pressable onPress={() => {navigation.navigate('SupportRequest')}}>
                <View style = {styles.HelpsAction}>
                    <Text style = {styles.textHelpsAction}>Support Requests</Text>
                    <AntDesign name="right" size={20} color="white" style = {styles.IconRight}/>
                </View>
            </Pressable>
        </View>
    );
}
const styles = StyleSheet.create({
    Helps: {
        flex: 1,
        backgroundColor: 'black',
    },
    HeaderHelps: {
        flexDirection : 'row',
        height : 40,
        marginTop : '2%',
    },
    IconBack: {
        marginLeft : '2%',
        marginTop : '1%',
    },
    textHelps: {
        fontSize : 22,
        color : 'white',
        fontWeight : 'bold',
        marginLeft : '10%',
        marginTop : '1%',
    },
    HelpsAction: {
        flexDirection : 'row',  
        marginTop : '5%',
        marginLeft : '4%',
    },
    textHelpsAction: {
        width : '80%',
        fontSize : 18,
        color : 'white',
    },
    IconRight: {
        marginLeft : '10%',
        marginTop : '1%',
    },
    centeredView: {
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
        marginTop: 22
    },
    modalView: {
        width: "80%",
        height: 210,
        backgroundColor: "#282c34",
    },
    modalHeader: {
        borderBottomColor: '#8e8e8e',
        borderBottomWidth: 1,
    },
    modalText: {
        fontSize: 20,
        color: 'white',
        fontWeight: 'bold',
        marginLeft: '5%',
        marginBottom: '2%',
    },
    modalTextReport: {
        fontSize: 18,
        color: 'white',
        marginLeft: '5%',
        marginTop: '5%',
    },
    modalTextFeedback: {
        fontSize: 18,
        color: 'white',
        marginLeft: '5%',
        marginTop: '5%',
    },
    modalTextClose: {
        fontSize: 18,
        color: 'white',
        marginLeft: '5%',
        marginTop: '5%',
    },
});