import React, { useState } from 'react';
import Icon from 'react-native-vector-icons/Ionicons';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import AntDesign from 'react-native-vector-icons/AntDesign';
import Feather from 'react-native-vector-icons/Feather';
import Octicons from 'react-native-vector-icons/Octicons';
import Fontisto from 'react-native-vector-icons/Fontisto';
import { Text,Button, View, StyleSheet, TextInput,Image,ScrollView,ImageBackground,Modal,Pressable } from 'react-native';
import { useNavigation } from "@react-navigation/native";
import Ionicons from 'react-native-vector-icons/Ionicons';
export default function Home () {
    const [modalAddVisible, setModalAddVisible] = useState(false);
    const [modalEditVisible, setModalEditVisible] = useState(false);
    const [modalSendVisible, setModalSendVisible] = useState(false);
    const navigation = useNavigation();
    var arrayStory = [
        {
            name : 'DucHoan',
            image : 'https://scontent.fsgn3-1.fna.fbcdn.net/v/t1.6435-9/122192711_697566607532271_2285775074524737085_n.jpg?_nc_cat=104&ccb=1-7&_nc_sid=19026a&_nc_ohc=uS9n3QsAXAcAX9uqsmo&_nc_ht=scontent.fsgn3-1.fna&oh=00_AT804VS0UCyuZTH3AvDE4obV508Dux8mw4OLEZKZGcW0IA&oe=62DB90C0'
        },
        {
            name : 'CamVan',
            image : 'https://scontent.fsgn13-3.fna.fbcdn.net/v/t39.30808-6/273154334_1123664431736763_6121942889354663811_n.jpg?_nc_cat=108&ccb=1-7&_nc_sid=09cbfe&_nc_ohc=5JKUGavtKnEAX87SRXD&tn=98Qe8qL2dr5GlQT0&_nc_ht=scontent.fsgn13-3.fna&oh=00_AT9dhMs9opTKaEEDkuZ5Xcc4gZ-fN_TTOrSyjwizQor48w&oe=62BDC1EA'
        },
        {
            name : 'DucHung',
            image : 'https://scontent.fsgn4-1.fna.fbcdn.net/v/t1.6435-9/52696062_101541554333212_6443151805353295872_n.jpg?_nc_cat=103&ccb=1-7&_nc_sid=09cbfe&_nc_ohc=nsE_roCBRuAAX8lqdK2&_nc_ht=scontent.fsgn4-1.fna&oh=00_AT8XQ_z2rvZocGfVa2CI2E9PB4Tu5dAmJhe0gSGVVPFr9w&oe=62DCA98C'
        },
        {
            name : 'Tường Vi',
            image : 'https://scontent.fsgn8-2.fna.fbcdn.net/v/t39.30808-6/272152926_1240913986401147_8867493523089750699_n.jpg?_nc_cat=111&ccb=1-7&_nc_sid=174925&_nc_ohc=k4tjE6AyONAAX_oXSSb&_nc_ht=scontent.fsgn8-2.fna&oh=00_AT-mS1KADc7rqebiYp9MmKyhmMvZ5YSDf62ZBPSaIILbng&oe=62BD39EC'
        },
        {
            name : 'HuyHuy',
            image : 'https://scontent.fsgn4-1.fna.fbcdn.net/v/t39.30808-6/274876629_2826541607639210_363529317853290439_n.jpg?_nc_cat=101&ccb=1-7&_nc_sid=09cbfe&_nc_ohc=HdI0cCt0Q3wAX_5XJCE&_nc_ht=scontent.fsgn4-1.fna&oh=00_AT-EuusFTe6O_0EhmxL3lfl3fe-vR-9i-UVqvuXBFrKYiw&oe=62BCB4F5'
        }
    ]
    var arrayPost = [
        {
            name : 'HuyHuy',
            image : 'https://scontent.fsgn4-1.fna.fbcdn.net/v/t39.30808-6/274876629_2826541607639210_363529317853290439_n.jpg?_nc_cat=101&ccb=1-7&_nc_sid=09cbfe&_nc_ohc=HdI0cCt0Q3wAX_5XJCE&_nc_ht=scontent.fsgn4-1.fna&oh=00_AT-EuusFTe6O_0EhmxL3lfl3fe-vR-9i-UVqvuXBFrKYiw&oe=62BCB4F5',
            imagePost : 'https://scontent.fsgn4-1.fna.fbcdn.net/v/t39.30808-6/274876629_2826541607639210_363529317853290439_n.jpg?_nc_cat=101&ccb=1-7&_nc_sid=09cbfe&_nc_ohc=HdI0cCt0Q3wAX_5XJCE&_nc_ht=scontent.fsgn4-1.fna&oh=00_AT-EuusFTe6O_0EhmxL3lfl3fe-vR-9i-UVqvuXBFrKYiw&oe=62BCB4F5',
            like : 30,
            content : 'Hạnh phúc là không phải một người đàn ông bỏ cả thế giới để yêu em, mà là anh ta vì yêu em mà sắp xếp lại thế giới của mình.',
            comment : 10,
            time : '1 giờ trước',
        },
        {
            name : 'DucHoan',
            image : 'https://scontent.fsgn3-1.fna.fbcdn.net/v/t1.6435-9/122192711_697566607532271_2285775074524737085_n.jpg?_nc_cat=104&ccb=1-7&_nc_sid=19026a&_nc_ohc=uS9n3QsAXAcAX9uqsmo&_nc_ht=scontent.fsgn3-1.fna&oh=00_AT804VS0UCyuZTH3AvDE4obV508Dux8mw4OLEZKZGcW0IA&oe=62DB90C0',
            imagePost : 'https://scontent.fsgn3-1.fna.fbcdn.net/v/t1.6435-9/122192711_697566607532271_2285775074524737085_n.jpg?_nc_cat=104&ccb=1-7&_nc_sid=19026a&_nc_ohc=uS9n3QsAXAcAX9uqsmo&_nc_ht=scontent.fsgn3-1.fna&oh=00_AT804VS0UCyuZTH3AvDE4obV508Dux8mw4OLEZKZGcW0IA&oe=62DB90C0',
            like : 300,
            content : 'Hỡi thế gian có ai hiểu được mình.',
            comment : 10,
            time : '2 giờ trước',
        },
        {
            name : 'CamVan',
            image : 'https://scontent.fsgn13-3.fna.fbcdn.net/v/t39.30808-6/273154334_1123664431736763_6121942889354663811_n.jpg?_nc_cat=108&ccb=1-7&_nc_sid=09cbfe&_nc_ohc=5JKUGavtKnEAX87SRXD&tn=98Qe8qL2dr5GlQT0&_nc_ht=scontent.fsgn13-3.fna&oh=00_AT9dhMs9opTKaEEDkuZ5Xcc4gZ-fN_TTOrSyjwizQor48w&oe=62BDC1EA',
            imagePost : 'https://scontent.fsgn13-3.fna.fbcdn.net/v/t39.30808-6/273154334_1123664431736763_6121942889354663811_n.jpg?_nc_cat=108&ccb=1-7&_nc_sid=09cbfe&_nc_ohc=5JKUGavtKnEAX87SRXD&tn=98Qe8qL2dr5GlQT0&_nc_ht=scontent.fsgn13-3.fna&oh=00_AT9dhMs9opTKaEEDkuZ5Xcc4gZ-fN_TTOrSyjwizQor48w&oe=62BDC1EA',
            like : 100,
            content : 'Tình chỉ đẹp khi còn giang dở.',
            comment : 10,
            time : '10 giờ trước',
        },
        {
            name : 'Tường Vi',
            image : 'https://scontent.fsgn8-2.fna.fbcdn.net/v/t39.30808-6/272152926_1240913986401147_8867493523089750699_n.jpg?_nc_cat=111&ccb=1-7&_nc_sid=174925&_nc_ohc=k4tjE6AyONAAX_oXSSb&_nc_ht=scontent.fsgn8-2.fna&oh=00_AT-mS1KADc7rqebiYp9MmKyhmMvZ5YSDf62ZBPSaIILbng&oe=62BD39EC',
            imagePost : 'https://scontent.fsgn8-2.fna.fbcdn.net/v/t39.30808-6/272152926_1240913986401147_8867493523089750699_n.jpg?_nc_cat=111&ccb=1-7&_nc_sid=174925&_nc_ohc=k4tjE6AyONAAX_oXSSb&_nc_ht=scontent.fsgn8-2.fna&oh=00_AT-mS1KADc7rqebiYp9MmKyhmMvZ5YSDf62ZBPSaIILbng&oe=62BD39EC',
            like : 200,
            content : 'Hạnh phúc là không phải một người đàn ông bỏ cả thế giới để yêu em, mà là anh ta vì yêu em mà sắp xếp lại thế giới của mình.',
            comment : 10,
            time : '1 giờ trước',
        },
        {
            name : 'DucHung',
            image : 'https://scontent.fsgn4-1.fna.fbcdn.net/v/t1.6435-9/52696062_101541554333212_6443151805353295872_n.jpg?_nc_cat=103&ccb=1-7&_nc_sid=09cbfe&_nc_ohc=nsE_roCBRuAAX8lqdK2&_nc_ht=scontent.fsgn4-1.fna&oh=00_AT8XQ_z2rvZocGfVa2CI2E9PB4Tu5dAmJhe0gSGVVPFr9w&oe=62DCA98C',
            imagePost : 'https://scontent.fsgn4-1.fna.fbcdn.net/v/t1.6435-9/52696062_101541554333212_6443151805353295872_n.jpg?_nc_cat=103&ccb=1-7&_nc_sid=09cbfe&_nc_ohc=nsE_roCBRuAAX8lqdK2&_nc_ht=scontent.fsgn4-1.fna&oh=00_AT8XQ_z2rvZocGfVa2CI2E9PB4Tu5dAmJhe0gSGVVPFr9w&oe=62DCA98C',
            like : 600,
            content : 'Hạnh phúc là không phải một người đàn ông bỏ cả thế giới để yêu em, mà là anh ta vì yêu em mà sắp xếp lại thế giới của mình.',
            comment : 10,
            time : '1 giờ trước',
        }
    ]
    var arraySendMessage = [
        {
            nameFB : 'Đức Trường',
            name : 'hdhtruong1985',
            image : 'https://scontent.fsgn4-1.fna.fbcdn.net/v/t39.30808-6/272991438_1571607939871527_6579089651911998367_n.jpg?_nc_cat=103&ccb=1-5&_nc_sid=09cbfe&_nc_ohc=0yrT4Ddm2MEAX-BaOkp&_nc_ht=scontent.fsgn4-1.fna&oh=00_AT_t-lukzFdRL8IOBAJ_ihyv62ElheSLCGkGcsXQtNP0cw&oe=625FA506'
        },
        {
            nameFB : 'Trường Sinh',
            name : 'truonsinh.ben',
            image : 'https://scontent.fsgn3-1.fna.fbcdn.net/v/t39.30808-1/185526923_1334442560290882_6475410094091613892_n.jpg?stp=dst-jpg_p320x320&_nc_cat=104&ccb=1-5&_nc_sid=7206a8&_nc_ohc=vh-1deZnVFMAX-CL9Rq&_nc_ht=scontent.fsgn3-1.fna&oh=00_AT-tUjdRuwBIzRTh5a6EpMZUvZ7ZX1DykLCmSP9J1TROCw&oe=626076E4'
        },
        {
            nameFB : 'Trường Mai',
            name : 'truongmai1982',
            image : 'https://scontent.fsgn13-2.fna.fbcdn.net/v/t39.30808-1/274723232_2095406903969072_7504427080082865401_n.jpg?stp=dst-jpg_p320x320&_nc_cat=106&ccb=1-5&_nc_sid=7206a8&_nc_ohc=mF8bPnwU1TwAX_TZXOy&_nc_ht=scontent.fsgn13-2.fna&oh=00_AT_fPpbhcpaFDxDX31d_ZQp0YtkBgupf58VrAqWoqi8CnA&oe=6260E6D5'
        },
        {
            nameFB : 'Đức Hùng',
            name : 'hdhhung.73',
            image : 'https://scontent-sin6-4.xx.fbcdn.net/v/t1.6435-9/52696062_101541554333212_6443151805353295872_n.jpg?_nc_cat=103&ccb=1-5&_nc_sid=09cbfe&_nc_ohc=iVYxj2aTG4MAX9KnVR1&_nc_ht=scontent-sin6-4.xx&oh=00_AT91XhpTsxpNb7NguhkEdM6FjBuqzXxj45JWgs4OlLsxbQ&oe=627DBD8C'
        },
        {
            nameFB : 'Tường Vi',
            name : 'vituong.vi91',
            image : 'https://scontent-sin6-1.xx.fbcdn.net/v/t39.30808-6/272152926_1240913986401147_8867493523089750699_n.jpg?_nc_cat=111&ccb=1-5&_nc_sid=09cbfe&_nc_ohc=9Nz4bVKM5joAX8fhbRi&_nc_ht=scontent-sin6-1.xx&oh=00_AT_PmiSFopbNLfgeXZxQVCC1nETPN56gDmF5MNinf4vlsQ&oe=625C53AC'
        },
        {
            nameFB : 'Huy Huỳnh',
            name : 'hdh.huyyyy',
            image : 'https://scontent.fsgn4-1.fna.fbcdn.net/v/t39.30808-6/274876629_2826541607639210_363529317853290439_n.jpg?_nc_cat=101&ccb=1-5&_nc_sid=09cbfe&_nc_ohc=zhn6GxH97wsAX9igMrU&_nc_ht=scontent.fsgn4-1.fna&oh=00_AT8CV-QY77nPfLu8se8Ba5bfAa8KH96jrUmxQJa0CXTW2A&oe=625BCEB5'
        },
        {
            nameFB : 'Đức Hoan',
            name : 'hoanhd.2005',
            image : 'https://scontent.fsgn8-1.fna.fbcdn.net/v/t1.30497-1/143086968_2856368904622192_1959732218791162458_n.png?stp=cp0_dst-png_p80x80&_nc_cat=1&ccb=1-5&_nc_sid=7206a8&_nc_ohc=iuMIcxiCMkcAX_TVYh4&_nc_oc=AQnCMwFO0ikM1T3PNmT6hLfYsZgH-UFncWKfNhVaUwjq4DeJjL3Zz5o9N1VoxVT46V_F5s1RY-Ndwrkb3kv6fw1r&_nc_ht=scontent.fsgn8-1.fna&oh=00_AT8o3TOeWVcpPpS4Gy7NagZtopzLFPdCkkGCAzsGaaMdEQ&oe=627B5DF8'
        },
        {
            nameFB : 'Cẩm Vân',
            name : 'camvan77',
            image : 'https://scontent.fsgn13-2.fna.fbcdn.net/v/t39.30808-6/273154334_1123664431736763_6121942889354663811_n.jpg?_nc_cat=108&ccb=1-5&_nc_sid=09cbfe&_nc_ohc=BoFOVA5QuwIAX-KiXcQ&tn=98Qe8qL2dr5GlQT0&_nc_ht=scontent.fsgn13-2.fna&oh=00_AT8FeFwFTaLe6n_2eXdstYnWoCRVcEtpZZNsA2y4eGBazw&oe=625CDBAA'
        },
        {
            nameFB : 'Đức Trường',
            name : 'hdhtruong1985',
            image : 'https://scontent.fsgn4-1.fna.fbcdn.net/v/t39.30808-6/272991438_1571607939871527_6579089651911998367_n.jpg?_nc_cat=103&ccb=1-5&_nc_sid=09cbfe&_nc_ohc=0yrT4Ddm2MEAX-BaOkp&_nc_ht=scontent.fsgn4-1.fna&oh=00_AT_t-lukzFdRL8IOBAJ_ihyv62ElheSLCGkGcsXQtNP0cw&oe=625FA506'
        },
        {
            nameFB : 'Trường Sinh',
            name : 'truonsinh.ben',
            image : 'https://scontent.fsgn3-1.fna.fbcdn.net/v/t39.30808-1/185526923_1334442560290882_6475410094091613892_n.jpg?stp=dst-jpg_p320x320&_nc_cat=104&ccb=1-5&_nc_sid=7206a8&_nc_ohc=vh-1deZnVFMAX-CL9Rq&_nc_ht=scontent.fsgn3-1.fna&oh=00_AT-tUjdRuwBIzRTh5a6EpMZUvZ7ZX1DykLCmSP9J1TROCw&oe=626076E4'
        },
        {
            nameFB : 'Trường Mai',
            name : 'truongmai1982',
            image : 'https://scontent.fsgn13-2.fna.fbcdn.net/v/t39.30808-1/274723232_2095406903969072_7504427080082865401_n.jpg?stp=dst-jpg_p320x320&_nc_cat=106&ccb=1-5&_nc_sid=7206a8&_nc_ohc=mF8bPnwU1TwAX_TZXOy&_nc_ht=scontent.fsgn13-2.fna&oh=00_AT_fPpbhcpaFDxDX31d_ZQp0YtkBgupf58VrAqWoqi8CnA&oe=6260E6D5'
        },
        {
            nameFB : 'Đức Hùng',
            name : 'hdhhung.73',
            image : 'https://scontent-sin6-4.xx.fbcdn.net/v/t1.6435-9/52696062_101541554333212_6443151805353295872_n.jpg?_nc_cat=103&ccb=1-5&_nc_sid=09cbfe&_nc_ohc=iVYxj2aTG4MAX9KnVR1&_nc_ht=scontent-sin6-4.xx&oh=00_AT91XhpTsxpNb7NguhkEdM6FjBuqzXxj45JWgs4OlLsxbQ&oe=627DBD8C'
        },
        {
            nameFB : 'Tường Vi',
            name : 'vituong.vi91',
            image : 'https://scontent-sin6-1.xx.fbcdn.net/v/t39.30808-6/272152926_1240913986401147_8867493523089750699_n.jpg?_nc_cat=111&ccb=1-5&_nc_sid=09cbfe&_nc_ohc=9Nz4bVKM5joAX8fhbRi&_nc_ht=scontent-sin6-1.xx&oh=00_AT_PmiSFopbNLfgeXZxQVCC1nETPN56gDmF5MNinf4vlsQ&oe=625C53AC'
        },
        {
            nameFB : 'Huy Huỳnh',
            name : 'hdh.huyyyy',
            image : 'https://scontent.fsgn4-1.fna.fbcdn.net/v/t39.30808-6/274876629_2826541607639210_363529317853290439_n.jpg?_nc_cat=101&ccb=1-5&_nc_sid=09cbfe&_nc_ohc=zhn6GxH97wsAX9igMrU&_nc_ht=scontent.fsgn4-1.fna&oh=00_AT8CV-QY77nPfLu8se8Ba5bfAa8KH96jrUmxQJa0CXTW2A&oe=625BCEB5'
        },
        {
            nameFB : 'Đức Hoan',
            name : 'hoanhd.2005',
            image : 'https://scontent.fsgn8-1.fna.fbcdn.net/v/t1.30497-1/143086968_2856368904622192_1959732218791162458_n.png?stp=cp0_dst-png_p80x80&_nc_cat=1&ccb=1-5&_nc_sid=7206a8&_nc_ohc=iuMIcxiCMkcAX_TVYh4&_nc_oc=AQnCMwFO0ikM1T3PNmT6hLfYsZgH-UFncWKfNhVaUwjq4DeJjL3Zz5o9N1VoxVT46V_F5s1RY-Ndwrkb3kv6fw1r&_nc_ht=scontent.fsgn8-1.fna&oh=00_AT8o3TOeWVcpPpS4Gy7NagZtopzLFPdCkkGCAzsGaaMdEQ&oe=627B5DF8'
        },
        {
            nameFB : 'Cẩm Vân',
            name : 'camvan77',
            image : 'https://scontent.fsgn13-2.fna.fbcdn.net/v/t39.30808-6/273154334_1123664431736763_6121942889354663811_n.jpg?_nc_cat=108&ccb=1-5&_nc_sid=09cbfe&_nc_ohc=BoFOVA5QuwIAX-KiXcQ&tn=98Qe8qL2dr5GlQT0&_nc_ht=scontent.fsgn13-2.fna&oh=00_AT8FeFwFTaLe6n_2eXdstYnWoCRVcEtpZZNsA2y4eGBazw&oe=625CDBAA'
        }
    ]
    return(
        <View style = {styles.Header}>
            <View style = {styles.HeaderApp}>
                <Text style = {styles.HeaderAppText}>Waiter</Text>
                <Octicons style = {styles.HeaderAppActionAdd} name="diff-added" size={30} color="white" onPress={() =>{setModalAddVisible(true)}}/>
                <AntDesign style = {styles.HeaderAppActionMessage} name="message1" size={30} color="white" onPress={() => {navigation.navigate('Messages')}} />
            </View>
            {/* Open Modal Add Post, live, reel, story */}
            <Modal
                animationType="fade"
                transparent={true}
                visible={modalAddVisible}
                onRequestClose={() => {
                setModalVisible(!modalAddVisible);
                }}
            >
                <View style={styles.centeredView}>
                    <View style={styles.modalView}>
                        <View style = {styles.modalPost}>
                            <Text style = {styles.modalPostText}>Post</Text>
                            <AntDesign style = {styles.modalPostAction} name="table" size={25} color="white"/>
                        </View>
                        <View style = {styles.modalStory}>
                            <Text style = {styles.modalStoryText}>Story</Text>
                            <Ionicons style = {styles.modalStoryAction} name="md-add-circle-outline" size={35} color="white"/>
                        </View>
                        <View style = {styles.modalReel}>
                            <Text style = {styles.modalReelText}>Reel</Text>
                            <MaterialCommunityIcons style = {styles.modalReelAction} name="video-plus-outline" size={35} color="white"/>
                        </View>
                        <View style = {styles.modalLive}>
                            <Text style = {styles.modalLiveText}>Live</Text>
                            <MaterialIcons style = {styles.modalLiveAction} name="live-tv" size={30} color="white"/>
                        </View>
                        <Pressable
                        onPress={() => setModalAddVisible(!modalAddVisible)}
                        >
                            <View style = {styles.modalClose}>
                                <Text style = {styles.modalCloseText}>Close</Text>
                                <AntDesign style = {styles.modalCloseAction} name="closecircleo" size={30} color="white"/>
                            </View>
                        </Pressable>
                    </View>
                </View>
            </Modal>
            {/* Open Modal Report, share, link */}
            <Modal
                animationType="slide"
                transparent={true}
                visible={modalEditVisible}
                onRequestClose={() => {
                setModalVisible(!modalEditVisible);
                }}
            >
                <View style={styles.BottomView}>
                    <View style={styles.modalBottomView}>
                        <View style = {styles.modalBottomBoder}/>
                        {/* Action */}
                        <View style = {styles.modalBottomAction}>
                            {/* Share */}
                            <View style = {styles.modalBottomActionShare}>
                                <View style = {styles.modalBottomActionShareIcon}>
                                    <AntDesign style = {styles.modalBottomActionShareIconAction} name="sharealt" size={30} color="white"/>
                                </View>
                                <Text style = {styles.modalBottomActionShareText}>Share</Text>
                            </View>
                            {/* Link */}
                            <View style = {styles.modalBottomActionlink}>
                                <View style = {styles.modalBottomActionLinkIcon}>
                                    <Fontisto style = {styles.modalBottomActionLinkIconAction} name="link" size={30} color="white"/>
                                </View>
                                <Text style = {styles.modalBottomActionLinkText}>Link</Text>
                            </View>
                            {/* Report */}
                            <View style = {styles.modalBottomActionReport}>
                                <View style = {styles.modalBottomActionReportIcon}>
                                    <Octicons style = {styles.modalBottomActionReportIconAction} name="report" size={30} color="#d23a51"/>
                                </View>
                                <Text style = {styles.modalBottomActionReportText}>Report</Text>
                            </View>
                            {/* Close */}
                            <View style = {styles.modalBottomActionClose}>
                                <Pressable
                                    onPress={() => setModalEditVisible(!modalEditVisible)}
                                >
                                    <View style = {styles.modalBottomActionCloseIcon}>
                                        <AntDesign style = {styles.modalBottomActionCloseIconAction} name="close" size={30} color="white"/>
                                    </View>
                                    <Text style = {styles.modalBottomActionCloseText}>Close</Text>
                                </Pressable>
                            </View>
                        </View>
                        {/* Title */}
                        <View style = {styles.modalBottomTitle}>
                            <Text style = {styles.modalBottomTitleHashtag}>Don't show for this hashtag</Text>
                            <Text style = {styles.modalBottomTitleUnfollowHashtag}>Unfollow hashtag</Text>
                        </View>
                    </View>
                </View>
            </Modal>
            {/* Open Modal Send */}
            <Modal
                animationType="slide"
                transparent={true}
                visible={modalSendVisible}
                onRequestClose={() => {
                setModalVisible(!modalSendVisible);
                }}
            >
                <View style={styles.BottomSendView}>
                    <View style={styles.modalBottomSendView}>
                        <View style = {styles.modalBottomSendBoder}/>
                        {/* Action */}
                        <View style = {styles.modalBottomActionSend}>
                            <Image style = {styles.modalBottomActionImage} source={{uri : 'https://scontent.fsgn4-1.fna.fbcdn.net/v/t39.30808-6/274876629_2826541607639210_363529317853290439_n.jpg?_nc_cat=101&ccb=1-5&_nc_sid=09cbfe&_nc_ohc=zhn6GxH97wsAX9igMrU&_nc_ht=scontent.fsgn4-1.fna&oh=00_AT8CV-QY77nPfLu8se8Ba5bfAa8KH96jrUmxQJa0CXTW2A&oe=625BCEB5'}}/>
                            <TextInput style = {styles.modalBottomActionText} placeholder="Write a message..." placeholderTextColor="#8e8e8e"/>
                            <View style = {styles.modalBottomActionSendClose}>
                                <Pressable
                                    onPress={() => setModalSendVisible(!modalSendVisible)}
                                >
                                    <View style = {styles.modalBottomActionSendCloseIcon}>
                                        <AntDesign style = {styles.modalBottomActionSendCloseIconAction} name="close" size={20} color="white"/>
                                    </View>
                                </Pressable>
                            </View>
                        </View>
                        {/* Search */}
                        <View style = {styles.modalBottomSearch}>
                            <View style = {styles.modalBottomSearchView}>
                                <AntDesign style = {styles.modalBottomSearchIconAction} name="search1" size={20} color="#8e8e8e"/>
                                <TextInput style = {styles.modalBottomSearchText} placeholder="Search" placeholderTextColor="#8e8e8e"/>
                            </View>
                        </View>
                        <ScrollView showsVerticalScrollIndicator={false}>
                            {/* Add post to your story */}
                            <View style = {styles.modalBottomAddStory}>
                                <Image style = {styles.modalBottomAddStoryImage} source={{uri : 'https://scontent.fsgn4-1.fna.fbcdn.net/v/t39.30808-6/274876629_2826541607639210_363529317853290439_n.jpg?_nc_cat=101&ccb=1-5&_nc_sid=09cbfe&_nc_ohc=zhn6GxH97wsAX9igMrU&_nc_ht=scontent.fsgn4-1.fna&oh=00_AT8CV-QY77nPfLu8se8Ba5bfAa8KH96jrUmxQJa0CXTW2A&oe=625BCEB5'}}/>
                                <Text style = {styles.modalBottomAddStoryText}>Add post to your story</Text>
                            </View>
                            {/* Create group */}
                            <View style = {styles.modalBottomCreateGroup}>
                                <View style = {styles.modalBottomCreateGroupView}>
                                    <AntDesign style = {styles.modalBottomCreateGroupIconAction} name="addusergroup" size={25} color="#107ae4"/>
                                </View>
                                <Text style = {styles.modalBottomCreateGroupText}>Create group</Text>
                            </View>
                            {/* Send User */}
                            <View style = {{marginTop : '5%'}}>
                            {arraySendMessage.map(item => (
                                <View style = {styles.modalBottomSendUser}>
                                    <Image style = {styles.modalBottomSendUserImage} source={{uri : item.image}}/>
                                    <View style = {styles.modalBottomSendUserView}>
                                        <Text style = {styles.modalBottomSendUserNameFBText}>{item.nameFB}</Text>
                                        <Text style = {styles.modalBottomSendUserNameText}>{item.name}</Text>
                                    </View>
                                    <View style = {styles.modalBottomSendUserAction}>
                                        <Text style = {styles.modalBottomSendUserActionText}>Send</Text>
                                    </View>
                                </View>
                            ))}
                            </View>
                        </ScrollView>
                    </View>
                </View>
            </Modal>
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
                            <ImageBackground style={styles.tinyLogo} source = {{uri: 'https://scontent.fsgn4-1.fna.fbcdn.net/v/t39.30808-6/274876629_2826541607639210_363529317853290439_n.jpg?_nc_cat=101&ccb=1-7&_nc_sid=09cbfe&_nc_ohc=HdI0cCt0Q3wAX_5XJCE&_nc_ht=scontent.fsgn4-1.fna&oh=00_AT-EuusFTe6O_0EhmxL3lfl3fe-vR-9i-UVqvuXBFrKYiw&oe=62BCB4F5'}} imageStyle={{ borderRadius: 60/2 }}>
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
                                    <Icon name="ellipsis-vertical" size={25} color="white" onPress={() => {setModalEditVisible(true)}}/>
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
                                    <Feather name="send" size={25} color="white" onPress={() => {setModalSendVisible(true)}}/>
                                </View>
                                <View style = {styles.IconActionSave}>
                                    <FontAwesome name="bookmark-o" size={25} color="white" />
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
    },
    centeredView: {
        justifyContent: "flex-start",
        marginTop: '10%',
        left: '65%',
        width : '40%',  
        top: '2%',   
    },
    modalView: {    
        backgroundColor: "#272c33",
        borderRadius: 5,
        height : 200,
    },
    modalPost : {
        flexDirection : 'row',
        marginTop : 5,
        marginLeft : 10,
        height : 30,
    },
    modalPostText : {
        color : 'white',
        fontWeight : 'bold',
        fontSize : 20,
        width : '60%',
    },
    modalPostAction: {
        marginLeft : '5%',
    },
    modalStory : {
        flexDirection : 'row',  
        marginLeft : 10,
        height : 35,
    },
    modalStoryText : {
        color : 'white',
        fontWeight : 'bold',
        fontSize : 20,
        width : '60%',
        marginTop : 5,
    },
    modalStoryAction: {
        marginLeft : '2%',
    },
    modalReel : {
        flexDirection : 'row',
        marginTop : 5,
        marginLeft : 10,
        height : 35,
    },
    modalReelText : {
        color : 'white',
        fontWeight : 'bold',
        fontSize : 20,
        width : '60%',
        marginTop : 4,
    },
    modalReelAction: {
        marginLeft : '1%',
    },
    modalLive : {
        flexDirection : 'row',
        marginTop : 5,
        marginLeft : 10,
        height : 35,
    },
    modalLiveText : {
        color : 'white',
        fontWeight : 'bold',
        fontSize : 20,
        width : '60%',
        marginTop : 3,
    },
    modalLiveAction: {
        marginLeft : '3%',
    },
    modalClose : {
        flexDirection : 'row',
        marginTop : 5,
        marginLeft : 10,
        height : 35,
    },
    modalCloseText : {
        color : 'white',
        fontWeight : 'bold',
        fontSize : 20,
        width : '60%',
        marginTop : 3,
    },
    modalCloseAction: {
        marginLeft : '3%',
    },
    BottomView : {
        top: '74%', 
    },
    modalBottomView: {
        backgroundColor: "#272c33",
        borderRadius: 20,
        height : 200,
    },
    modalBottomBoder: {
        marginTop : '3%',
        width : '10%',
        marginLeft : '45%',
        borderBottomColor: "white",
        borderBottomWidth: 6,
        borderBottomEndRadius: 10,
        borderBottomStartRadius: 10,
        borderTopLeftRadius: 10,
        borderTopRightRadius: 10,
    },
    modalBottomAction : {
        flexDirection : 'row',
        marginTop : '3%',
        borderBottomColor: "#414360",
        borderBottomWidth: 1,
    },
    modalBottomActionShare : {
        marginLeft : '8%',
        marginBottom : '3%',
    },
    modalBottomActionShareIcon : {
        width : 60,
        height : 60,
        borderRadius: 60/2,
        borderWidth: 2,
        borderColor: '#8e8e8e',
    },
    modalBottomActionShareIconAction : {
        marginLeft : '20%',
        marginTop : '25%',
    },
    modalBottomActionShareText : {
        color : 'white',
        marginTop : '5%',
        textAlign : 'center',
        fontSize : 15,
    },
    modalBottomActionlink : {
        marginLeft : '8%',
        marginBottom : '3%',
    },
    modalBottomActionLinkIcon : {
        width : 60,
        height : 60,
        borderRadius: 60/2,
        borderWidth: 2,
        borderColor: '#8e8e8e',
    },
    modalBottomActionLinkIconAction : {
        marginLeft : '24%',
        marginTop : '24%',
    },
    modalBottomActionLinkText : {
        color : 'white',
        marginTop : '5%',
        textAlign : 'center',
        fontSize : 15,
    },
    modalBottomActionReport : {
        marginLeft : '8%',
        marginBottom : '3%',
    },
    modalBottomActionReportIcon : {
        width : 60,
        height : 60,
        borderRadius: 60/2,
        borderWidth: 2,
        borderColor: '#e55787',
    },
    modalBottomActionReportIconAction : {
        marginLeft : '24%',
        marginTop : '24%',
    },
    modalBottomActionReportText : {
        color : '#d23a51',
        marginTop : '5%',
        textAlign : 'center',
        fontSize : 15,
    },
    modalBottomActionClose : {
        marginLeft : '8%',
        marginBottom : '3%',
    },
    modalBottomActionCloseIcon : {
        width : 60,
        height : 60,
        borderRadius: 60/2,
        borderWidth: 2,
        borderColor: '#8e8e8e',
    },
    modalBottomActionCloseIconAction : {
        marginLeft : '24%',
        marginTop : '24%',
    },
    modalBottomActionCloseText : {
        color : 'white',
        marginTop : '5%',
        textAlign : 'center',
        fontSize : 15,
    },
    modalBottomTitle : {
        marginTop : '2%',
        marginLeft : '2%',
    },
    modalBottomTitleHashtag : {
        color : 'white',
        fontSize : 17,
    },
    modalBottomTitleUnfollowHashtag : {
        marginTop : '2%',
        color : 'white',
        fontSize : 17,
    },
    BottomSendView : {
        top: '20%', 
    },
    modalBottomActionSend : {
        flexDirection : 'row',
        marginTop : '3%',
    },
    modalBottomSendView: {
        backgroundColor: "#272c33",
        borderRadius: 20,
        height : '90%',
    },
    modalBottomSendBoder: {
        marginTop : '3%',
        width : '10%',
        marginLeft : '45%',
        borderBottomColor: "white",
        borderBottomWidth: 6,
        borderBottomEndRadius: 10,
        borderBottomStartRadius: 10,
        borderTopLeftRadius: 10,
        borderTopRightRadius: 10,
    },
    modalBottomActionImage : {
        width : 45,
        height : 45,
        borderRadius: 5,
        marginLeft : '5%',
        marginTop : '2%',
    },
    modalBottomActionText : {
        color : 'white',
        fontSize : 15,
        marginLeft : '2%',
        width : '65%',
        marginTop : '2%',
    },
    modalBottomActionSendClose : {
        marginLeft : '2%',
        marginTop : '3%',
        marginBottom : '3%',
    },
    modalBottomActionSendCloseIcon : {
        width : 40,
        height : 40,
        borderRadius: 40/2,
        borderWidth: 2,
        borderColor: '#8e8e8e',
    },
    modalBottomActionSendCloseIconAction : {
        marginLeft : '24%',
        marginTop : '24%',
    },
    modalBottomSearch: {
        backgroundColor: "#303846",
        borderRadius: 10,
        width : '90%',
        height : 35,
        marginTop : '3%',
        marginLeft : '5%',
        marginBottom : '3%',

    },
    modalBottomSearchView: {
        flexDirection : 'row',
    },
    modalBottomSearchIconAction: {
        marginLeft : '5%',
        marginTop : '2%',
    },
    modalBottomSearchText: {
        color : 'white',
        fontSize : 13,
        marginLeft : '2%',
    },
    modalBottomAddStory: {
        flexDirection : 'row',
        marginTop : '3%',
        marginLeft : '5%',
    },
    modalBottomAddStoryImage: {
        width : 45,
        height : 45,
        borderRadius: 45/2,
    },
    modalBottomAddStoryText: {
        color : '#127dbc',
        fontSize : 15,
        marginLeft : '5%',
        marginTop : '4%',
    },
    modalBottomCreateGroup: {
        flexDirection : 'row',
        marginTop : '3%',
        marginLeft : '5%',
    },
    modalBottomCreateGroupView : {
        width : 45,
        height : 45,
        borderRadius: 45/2,
        borderWidth: 2,
        borderColor: '#107ae4',
    },
    modalBottomCreateGroupIconAction : {
        marginLeft : '20%',
        marginTop : '20%',
    },
    modalBottomCreateGroupText: {
        color : 'white',
        fontSize : 17,
        marginLeft : '5%',
        marginTop : '4%',
        fontWeight : 'bold',
    },
    modalBottomSendUser : {
        flexDirection : 'row',
        marginLeft : '5%',
        marginBottom : '5%',
    },
    modalBottomSendUserView : {
        marginLeft : '5%',
        marginTop : '1%',
        width : '60%'
    },
    modalBottomSendUserImage: {
        width : 45,
        height : 45,
        borderRadius: 45/2,
    },
    modalBottomSendUserNameFBText: {
        color : 'white',
        fontSize : 15,
    },
    modalBottomSendUserNameText : {
        color : '#8e8e8e',
        fontSize : 15,
    },
    modalBottomSendUserAction : {
        backgroundColor: "#107ae4",
        borderRadius: 5,
        width : 70,
        height : 30,
        marginTop : '3%',
    },
    modalBottomSendUserActionText : {
        color : 'white',
        textAlign : 'center',
        fontSize : 16,
        marginTop : '5%',
        fontWeight : 'bold',
    }
});