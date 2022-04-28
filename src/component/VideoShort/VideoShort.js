import React, {useState,useEffect} from "react";
import MaterialIcons from "react-native-vector-icons/MaterialIcons";
import MaterialCommunityIcons from "react-native-vector-icons/MaterialCommunityIcons";
import FontAwesome from "react-native-vector-icons/FontAwesome";
import Feather from "react-native-vector-icons/Feather";
import Ionicons from "react-native-vector-icons/Ionicons";
import Entypo from "react-native-vector-icons/Entypo";
import AntDesign from 'react-native-vector-icons/AntDesign';
import { Text,Button, View, StyleSheet, TextInput,Image,ScrollView,Modal,Dimensions,Pressable} from 'react-native';
import Video from 'react-native-video';
import { useNavigation } from "@react-navigation/native";
import {SwiperFlatList} from 'react-native-swiper-flatlist';
export default function VideoShorts (){ 
    const navigation = useNavigation();
    const [currIndex, setIndex] = useState({})
    const [modalSendVisible, setModalSendVisible] = useState(false);
    const [modalEditVisible, setModalEditVisible] = useState(false);
    const [modalReelVisible, setModalReelVisible] = useState(false);
    const data = [
        {
            name : 'hdh.huyyyy',
            image : 'https://scontent.fsgn4-1.fna.fbcdn.net/v/t39.30808-6/274876629_2826541607639210_363529317853290439_n.jpg?_nc_cat=101&ccb=1-5&_nc_sid=09cbfe&_nc_ohc=zhn6GxH97wsAX9igMrU&_nc_ht=scontent.fsgn4-1.fna&oh=00_AT8CV-QY77nPfLu8se8Ba5bfAa8KH96jrUmxQJa0CXTW2A&oe=625BCEB5',
            url : 'https://www.rmp-streaming.com/media/big-buck-bunny-360p.mp4',
            singer : 'HoaVinh',
            namemusic : 'Đừng quên tên anh',
            thumb : 'https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/images/BigBuckBunny.jpg',
            watch : 2,
            content : 'Nice Video!'
        },
        {
            name : 'huyhuy01',
            image : 'https://scontent.fsgn8-1.fna.fbcdn.net/v/t39.30808-6/218314327_2670798459880193_1753066056267794964_n.jpg?_nc_cat=110&ccb=1-5&_nc_sid=174925&_nc_ohc=whpw84OV5OMAX8hTvCg&_nc_ht=scontent.fsgn8-1.fna&oh=00_AT_v4ihHZH6FD_9-9l8RQuQSIrGOuTe9wBHCunAWfYN9xw&oe=626624CF',
            url : 'https://v16-webapp.tiktok.com/94e6cc9640241bd95312347235b5e319/626300a5/video/tos/useast2a/tos-useast2a-ve-0068c003/9ba72d69e67343f9b78dc8c6afb403a9/?a=1988&br=2648&bt=1324&cd=0%7C0%7C1%7C0&ch=0&cr=0&cs=0&cv=1&dr=0&ds=3&er=&ft=eXd.6Hk_Myq8ZBWeNwe2NhfQml7Gb&l=20220422132238010245005098081BDA98&lr=tiktok_m&mime_type=video_mp4&net=0&pl=0&qs=0&rc=M2lyaTk6ZnNoNjMzNzczM0ApPDM6OGg3Zzw2NzVpPGhlM2ctbGctcjRnaG9gLS1kMTZzczQ1Mi42X2BiLS9jL2JgLjE6Yw%3D%3D&vl=&vr=',
            singer : 'Soobin',
            namemusic : 'Xin đừng lặng im',
            thumb : 'https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/images/BigBuckBunny.jpg',
            watch : 10,
            content : 'Hãy yêu theo một cách tự nhiên'
        },
        {
            name : 'vituong91',
            image : 'https://scontent-sin6-1.xx.fbcdn.net/v/t39.30808-6/272152926_1240913986401147_8867493523089750699_n.jpg?_nc_cat=111&ccb=1-5&_nc_sid=09cbfe&_nc_ohc=9Nz4bVKM5joAX8fhbRi&_nc_ht=scontent-sin6-1.xx&oh=00_AT_PmiSFopbNLfgeXZxQVCC1nETPN56gDmF5MNinf4vlsQ&oe=625C53AC',
            url : 'https://v16-webapp.tiktok.com/0c6ff0849a9e115d9d5d69d43ee3c16d/6262fd66/video/tos/maliva/tos-maliva-ve-0068c799-us/16368ba567684dcb9fae11ce10866b62/?a=1988&br=2606&bt=1303&cd=0%7C0%7C0%7C0&ch=0&cr=0&cs=0&dr=0&ds=3&er=&ft=eXd.6Hk_Myq8ZxzeNwe2N3VQml7Gb&l=20220422130857010245154099011AF40C&lr=tiktok_m&mime_type=video_mp4&net=0&pl=0&qs=0&rc=M3VvNjY6Zmw5PDMzZzczNEApZWg8Z2Q5NztoN2Y4O2hlZGdzcGVpcjQwYWNgLS1kMS9zczIyMGEyYV4yYC9gLi1gMi86Yw%3D%3D&vl=&vr=',
            singer : 'Soobin',
            namemusic : 'Vẫn nhớ',
            thumb : 'https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/images/BigBuckBunny.jpg',
            watch : 7,
            content : 'Nhớ những ngày đầu đời'
        },
        {
            name : 'truonghd85',
            image : 'https://scontent.fsgn4-1.fna.fbcdn.net/v/t39.30808-6/272991438_1571607939871527_6579089651911998367_n.jpg?_nc_cat=103&ccb=1-5&_nc_sid=09cbfe&_nc_ohc=0yrT4Ddm2MEAX-BaOkp&_nc_ht=scontent.fsgn4-1.fna&oh=00_AT_t-lukzFdRL8IOBAJ_ihyv62ElheSLCGkGcsXQtNP0cw&oe=625FA506',
            url : 'https://v16-webapp.tiktok.com/ff15ca3e278dc457e6a171ce0aae6fec/6262fd8b/video/tos/useast2a/tos-useast2a-pve-0037-aiso/dec81cce7b914fbd836b49c62119a078/?a=1988&br=2544&bt=1272&cd=0%7C0%7C1%7C0&ch=0&cr=0&cs=0&cv=1&dr=0&ds=3&er=&ft=eXd.6Hk_Myq8ZxzeNwe2N3VQml7Gb&l=20220422130857010245154099011AF40C&lr=tiktok_m&mime_type=video_mp4&net=0&pl=0&qs=11&rc=anl1NTU6ZnE4PDMzZjgzM0ApN2Q2aDw0NDw6Nzw5ZjU8OWcyZWNrcjQwLzJgLS1kL2NzczEyYTVeLjUyNTMwMGNhNDI6Yw%3D%3D&vl=&vr=',
            singer : 'Soobin',
            namemusic : 'Vẫn nhớ',
            thumb : 'https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/images/BigBuckBunny.jpg',
            watch : 7,
            content : 'Nhớ những ngày đầu đời'
        },
        {
            name : 'truongsinhhh',
            image : 'https://scontent.fsgn3-1.fna.fbcdn.net/v/t39.30808-1/185526923_1334442560290882_6475410094091613892_n.jpg?stp=dst-jpg_p320x320&_nc_cat=104&ccb=1-5&_nc_sid=7206a8&_nc_ohc=vh-1deZnVFMAX-CL9Rq&_nc_ht=scontent.fsgn3-1.fna&oh=00_AT-tUjdRuwBIzRTh5a6EpMZUvZ7ZX1DykLCmSP9J1TROCw&oe=626076E4',
            url : 'https://v16-webapp.tiktok.com/51c48f0744b15f524f11473592efed37/6263012c/video/tos/useast2a/tos-useast2a-pve-0037-aiso/cdf2f4371ed34f53aa74387869090200/?a=1988&br=1418&bt=709&cd=0%7C0%7C1%7C0&ch=0&cr=0&cs=0&cv=1&dr=0&ds=3&er=&ft=eXd.6Hk_Myq8ZMJeNwe2Ntkhml7Gb&l=20220422132501010245010181011CEE36&lr=tiktok_m&mime_type=video_mp4&net=0&pl=0&qs=11&rc=anN3eWU6ZjR1PDMzZjgzM0ApZTZkNzhkNTw3Nzw6aGhkZmdkNWUycjRfNF9gLS1kL2Nzc181LjQuNF9fXzYuYzYyXl46Yw%3D%3D&vl=&vr=',
            singer : 'Soobin',
            namemusic : 'Vẫn nhớ',
            thumb : 'https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/images/BigBuckBunny.jpg',
            watch : 7,
            content : 'Nhớ những ngày đầu đời'
        },
        {
            name : 'truongmai85',
            image : 'https://scontent.fsgn13-2.fna.fbcdn.net/v/t39.30808-1/274723232_2095406903969072_7504427080082865401_n.jpg?stp=dst-jpg_p320x320&_nc_cat=106&ccb=1-5&_nc_sid=7206a8&_nc_ohc=mF8bPnwU1TwAX_TZXOy&_nc_ht=scontent.fsgn13-2.fna&oh=00_AT_fPpbhcpaFDxDX31d_ZQp0YtkBgupf58VrAqWoqi8CnA&oe=6260E6D5',
            url : 'https://v16-webapp.tiktok.com/86bac5d900d945f2e8e45f4ff4ed37a7/62630129/video/tos/useast2a/tos-useast2a-pve-0037-aiso/2e4deac6e3194cd290b5aede556682d7/?a=1988&br=4150&bt=2075&cd=0%7C0%7C1%7C0&ch=0&cr=0&cs=0&cv=1&dr=0&ds=3&er=&ft=eXd.6Hk_Myq8ZMJeNwe2Ntkhml7Gb&l=20220422132501010245010181011CEE36&lr=tiktok_m&mime_type=video_mp4&net=0&pl=0&qs=0&rc=Mzd3Z2Q6ZnBmOjMzZjgzM0ApZzk7OWQ5ZDxpNzk8ZzQ0N2czZWUtcjQwMGdgLS1kL2Nzcy4xMTQzLjQ2Ll4uNmFiMzE6Yw%3D%3D&vl=&vr=',
            singer : 'Soobin',
            namemusic : 'Vẫn nhớ',
            thumb : 'https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/images/BigBuckBunny.jpg',
            watch : 7,
            content : 'Nhớ những ngày đầu đời'
        },
        {
            name : 'duchung',
            image : 'https://scontent-sin6-4.xx.fbcdn.net/v/t1.6435-9/52696062_101541554333212_6443151805353295872_n.jpg?_nc_cat=103&ccb=1-5&_nc_sid=09cbfe&_nc_ohc=iVYxj2aTG4MAX9KnVR1&_nc_ht=scontent-sin6-4.xx&oh=00_AT91XhpTsxpNb7NguhkEdM6FjBuqzXxj45JWgs4OlLsxbQ&oe=627DBD8C',
            url : 'https://v16-webapp.tiktok.com/41c0792431b954e5bc5b0704ed86402e/6263021e/video/tos/useast2a/tos-useast2a-pve-0037-aiso/2632f6f2d2734abfa5dd8ed626f46da0/?a=1988&br=1564&bt=782&cd=0%7C0%7C1%7C0&ch=0&cr=0&cs=0&cv=1&dr=0&ds=3&er=&ft=eXd.6Hk_Myq8ZS-eNwe2NbTQml7Gb&l=20220422132926010251004172151C6607&lr=tiktok_m&mime_type=video_mp4&net=0&pl=0&qs=0&rc=amk8Ozc6ZmQzNzMzZjgzM0ApZWQ5NjhnNzs8N2Y1OTU7NGdqMmlzcjRvcDRgLS1kL2Nzcy1fXjExNl9gLjMxXzA0YTQ6Yw%3D%3D&vl=&vr=',
            singer : 'Soobin',
            namemusic : 'Vẫn nhớ',
            thumb : 'https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/images/BigBuckBunny.jpg',
            watch : 7,
            content : 'Nhớ những ngày đầu đời'
        },
        {
            name : 'cvan77',
            image : 'https://scontent.fsgn13-2.fna.fbcdn.net/v/t39.30808-6/273154334_1123664431736763_6121942889354663811_n.jpg?_nc_cat=108&ccb=1-5&_nc_sid=09cbfe&_nc_ohc=BoFOVA5QuwIAX-KiXcQ&tn=98Qe8qL2dr5GlQT0&_nc_ht=scontent.fsgn13-2.fna&oh=00_AT8FeFwFTaLe6n_2eXdstYnWoCRVcEtpZZNsA2y4eGBazw&oe=625CDBAA',
            url : 'https://v16-webapp.tiktok.com/931e0fce4bf07dc130d2e9ea6efa9ecc/62630223/video/tos/useast2a/tos-useast2a-pve-0037-aiso/3385619a803849a5adb8e6c2b65c6b1c/?a=1988&br=5684&bt=2842&cd=0%7C0%7C1%7C0&ch=0&cr=0&cs=0&cv=1&dr=0&ds=3&er=&ft=eXd.6Hk_Myq8ZS-eNwe2NbTQml7Gb&l=20220422132926010251004172151C6607&lr=tiktok_m&mime_type=video_mp4&net=0&pl=0&qs=0&rc=ampuNTs6Zjh5NjMzZjgzM0ApNDs7ODQ5ZmQzNzU2Mzk5OmdgYGlhcjRvLnNgLS1kL2Nzcy1iXzExYmAxNDA0Li4vLmE6Yw%3D%3D&vl=&vr=',
            singer : 'Soobin',
            namemusic : 'Vẫn nhớ',
            thumb : 'https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/images/BigBuckBunny.jpg',
            watch : 7,
            content : 'Nhớ những ngày đầu đời'
        },
        {
            name : 'hdh.hoan',
            image : 'https://scontent.fsgn3-1.fna.fbcdn.net/v/t1.6435-9/122192711_697566607532271_2285775074524737085_n.jpg?_nc_cat=104&ccb=1-5&_nc_sid=e3f864&_nc_ohc=EbgVXCseho4AX_YlDU0&_nc_ht=scontent.fsgn3-1.fna&oh=00_AT9cqUejp0kkoKRQY2mJrD3w-qMD1dBsDtD48v9vQOj6DQ&oe=62888240',
            url : 'https://v16-webapp.tiktok.com/292da3b789975617280be3c4d9ca814c/62630222/video/tos/useast2a/tos-useast2a-pve-0037c001-aiso/2ef7d34810724068ae3ff4cf5d6af042/?a=1988&br=4024&bt=2012&cd=0%7C0%7C1%7C0&ch=0&cr=0&cs=0&cv=1&dr=0&ds=3&er=&ft=eXd.6Hk_Myq8ZS-eNwe2NbTQml7Gb&l=20220422132926010251004172151C6607&lr=tiktok_m&mime_type=video_mp4&net=0&pl=0&qs=11&rc=amt5ZWk6Znh4OzMzZjgzM0ApZDdkOTc8NTw0N2Q0NjQ2ZmdyYy9ycjQwXjVgLS1kL2Nzcy42Y2AyLy8wMzJjYjVgNGE6Yw%3D%3D&vl=&vr=',
            singer : 'Soobin',
            namemusic : 'Vẫn nhớ',
            thumb : 'https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/images/BigBuckBunny.jpg',
            watch : 7,
            content : 'Nhớ những ngày đầu đời'
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
    const VideoRef = React.useRef();
    const onBuffer = (e) => {
        console.log('onBuffer', e);
    }
    const onError = (e) => {
        console.log('onError', e);
    }
    const onChangeIndex = ({index}) => {
        setIndex(index);
    }
    useEffect(() => {
        if(!!VideoRef.current){
            VideoRef.current.seek(0);
        }
    }, [currIndex]);
    const rederItem = ({item,index}) => {
        return(
            <View style={styles.Videocontainer}>
                {/* Open Modal Report, share, link */}
                <Modal
                    animationType="fade"
                    transparent={true}
                    visible={modalEditVisible}
                    onRequestClose={() => {
                    setModalVisible(!modalEditVisible);
                    }}
                >
                    <View style={styles.BottomView}>
                        <View style={styles.modalBottomView}>
                            <View style = {styles.modalBottomBoder}/>
                            {/* Title */}
                            <View style = {styles.modalBottomTitle}>
                                <Text style = {styles.modalBottomTitleReport}>Report...</Text>
                                <Text style = {styles.modalBottomTitleInterested}>Not Interested</Text>
                                <Text style = {styles.modalBottomTitleCopyLink}>Copy link</Text>
                                <Text style = {styles.modalBottomTitleShare}>Share to...</Text>
                                <Text style = {styles.modalBottomTitleSave}>Save</Text>
                                <Text style = {styles.modalBottomTitleReel}>Remix This Reel</Text>
                                <Pressable onPress={() => {setModalEditVisible(!modalEditVisible)}}>
                                    <Text style = {styles.modalBottomTitleClose}>Close</Text>
                                </Pressable>
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
                {/* Open Modal Reel */}
                <Modal
                    animationType="fade"
                    transparent={true}
                    visible={modalReelVisible}
                    onRequestClose={() => {
                    setModalVisible(!modalReelVisible);
                    }}
                >
                    <View style={styles.BottomSendView}>
                        <View style={styles.modalBottomSendView}>
                            <View style = {styles.modalBottomSendBoder}/>
                            {/* Action */}
                            <View style = {styles.modalBottomActionSend}>
                                <Text style = {styles.modalBottomActionReel}>In This Reel</Text>
                            </View>
                            <ScrollView showsVerticalScrollIndicator={false}>
                                <View style = {styles.modalBottomActionReelClose}>
                                    <Pressable
                                        onPress={() => setModalReelVisible(!modalReelVisible)} style = {{flexDirection : 'row'}}
                                    >
                                        <View style = {styles.modalBottomActionReelCloseIcon}>
                                            <AntDesign style = {styles.modalBottomActionReelCloseIconAction} name="close" size={25} color="rgb(226, 41, 74)"/>
                                        </View>
                                        <Text style = {styles.modalBottomActionReelCloseText}>Close</Text>
                                    </Pressable>
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
                                            <Text style = {styles.modalBottomSendUserActionText}>Follow</Text>
                                        </View>
                                    </View>
                                ))}
                                </View>
                            </ScrollView>
                        </View>
                    </View>
                </Modal>
                <Video
                    source={{uri: item.url}} 
                    ref={VideoRef}    
                    poster = {item.thumb}
                    posterResizeMode="cover"
                    repeat
                    paused = {true}
                    // paused={currIndex !== index}
                    resizeMode="cover"                                  
                    onBuffer={onBuffer}                
                    onError={onError}               
                    style={styles.backgroundVideo}
                />
                {/* Body Video Short Cut */}
                <View style = {styles.bottomView}>
                    {/* Like Video Short Cut */}
                    <View style = {styles.LikePost}>
                        <MaterialCommunityIcons name = "heart-outline" size={30} color = "rgb(248, 248, 242)"/>
                        <Text style = {styles.TextLike}>831k</Text>
                    </View>
                    {/* Comment Video Short Cut */}
                    <View style = {styles.CommentPost}>
                        <FontAwesome name = "comment-o" size={30} color = "white"/>
                        <Text style = {styles.TextComment}>2,543</Text>
                    </View>
                    {/* Send Video Short Cut */}
                    <View style = {styles.SendPost}>
                        <Feather name = "send" size={30} color = "rgb(248, 248, 242)" onPress={() => {setModalSendVisible(true)}}/>
                    </View>
                    {/* Action Video Short Cut */}
                    <View style = {styles.ActionPost}>
                        <Pressable onPress = {() => {navigation.navigate('Follower')}} style = {{width: '85%',marginLeft: '5%'}}>
                            <View style = {styles.userPost}>
                                <Image source={{uri : item.image}} style = {styles.UserPostImage}/>
                                <Text style = {styles.UserPostName}>{item.name}</Text>
                                <View style = {styles.backCover}>
                                    <Text style = {styles.Follow}>Follow</Text>
                                </View>
                            </View>
                        </Pressable>
                        <Ionicons name = "ellipsis-vertical" size={20} color = "white" onPress={() => {setModalEditVisible(true)}}/>
                    </View>
                    {/* Content Video Short Cut */}
                    <View style = {styles.ContentPost}>
                        <View style = {styles.ContentPostLeft}>
                            <Text style = {styles.ContentPostText}>{item.content}</Text>
                            <View style = {{flexDirection : 'row'}}>
                                <Text style = {styles.PostText} onPress = {() => {navigation.navigate('Audio')}}>{item.namemusic} <Entypo name="dot-single" size={15} color = "white"/> {item.singer}</Text>
                                <Pressable onPress = {() => {setModalReelVisible(true)}} style = {{flexDirection : 'row',marginTop : '4%'}}>
                                    <Feather name="user" size={15} color = "white" style = {{marginLeft : '2%'}}/>
                                    <Text style = {styles.TextUserWatch}>{item.watch} people</Text>
                                </Pressable>
                            </View>
                        </View>
                        <Pressable onPress={ () => {navigation.navigate('Audio')}}>
                            <View style = {styles.ContentPostRight}>
                                <Image source={{uri : 'https://scontent.fsgn4-1.fna.fbcdn.net/v/t39.30808-6/274876629_2826541607639210_363529317853290439_n.jpg?_nc_cat=101&ccb=1-5&_nc_sid=09cbfe&_nc_ohc=zhn6GxH97wsAX9igMrU&_nc_ht=scontent.fsgn4-1.fna&oh=00_AT8CV-QY77nPfLu8se8Ba5bfAa8KH96jrUmxQJa0CXTW2A&oe=625BCEB5'}} style = {styles.AudioImage}/>
                            </View>
                        </Pressable>
                    </View>
                </View>
            </View>
        )
    }
    return (
        <View style = {{flex : 1,backgroundColor : "black"}}>
            <SwiperFlatList
                vertical={true}
                data={data}
                renderItem={rederItem}
                keyExtractor={(item, index) => index.toString()}
                onChangeIndex = {onChangeIndex}
            />
            {/* Header Video Short Cut */}
            <View style = {styles.flexHorizontal}>
                <Text style = {styles.HeaderStyle}>Reels</Text>
                <MaterialIcons name = "photo-camera" size={30} color = "rgb(248, 248, 242)" style ={styles.IconSendPhoto} />
            </View>
        </View>        
    )
}
const styles = StyleSheet.create({
    Videocontainer: {
        height : 702
    },
    backgroundVideo: {
        position: 'absolute',
        height : 700,
        width : '100%',
    },
    flexHorizontal: {
        flexDirection: 'row',
        position : 'absolute',
        top : '2%',
        left : '5%',
    },
    HeaderStyle: {
        fontSize: 25,
        fontWeight: 'bold',
        color: 'white',
    },
    IconSendPhoto: {
        marginLeft: '72%',
    },
    LikePost: {
        marginLeft: '88%',
    },
    TextLike: {
        color: 'white',
    },
    CommentPost: {
        marginLeft: '88%',
        marginTop: '2%',  
    },
    TextComment: {
        color: 'white',
    },
    SendPost: {
        marginLeft: '88%',
        marginTop: '2%',
    },
    ActionPost: {
        flexDirection: 'row',
        marginTop: '2%',
    },
    userPost: {
        flexDirection: 'row',

    },
    UserPostImage: {
        width: 30,
        height: 30,
        borderRadius: 15,
    },
    UserPostName: {
        marginLeft: '3%',
        color: 'white',
        marginTop: '1%',
        fontSize: 15,
        fontWeight: 'bold',
    },
    Follow: {
        color: 'white',
        fontSize: 15,
        textAlign: 'center',
        marginTop: '1%',
        fontWeight: 'bold',
    },
    backCover: {
        width : 67,
        height : 26,
        backgroundColor: '#00000000',
        borderRadius : 5,
        marginLeft : '5%',
        borderWidth: 1,
        borderColor: "white",
        marginTop: '1%',
    },
    bottomView : {
        flex : 1,
        justifyContent : 'flex-end',
    },
    ContentPost: {
        flexDirection: 'row',
    },
    ContentPostLeft: {
        width: '80%',
        marginLeft: '5%',
        marginTop: '4%',
    },
    ContentPostText: {
        color: 'white',
        fontSize: 15,
    },
    PostText: {
        color: 'white',
        fontSize: 15,
        marginTop: '4%',
        width: '70%',
    },
    ContentPostRight: {
        width: 40,
        height: 40,
        borderRadius: 8,
        borderWidth: 2,
        borderColor: "white",
        marginLeft: '2%',
        marginTop: '5%',
    },
    AudioImage: {
        width: 35,
        height: 34,
        borderRadius: 5,
    },
    TextUserWatch: {
        color: 'white',
        fontSize: 15,
        marginLeft: '2%',
    },
    BottomView : {
        top: '56%', 
    },
    modalBottomView: {
        backgroundColor: "#272c33",
        borderRadius: 20,
        height : 330,
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
    modalBottomTitle : {
        marginTop : '2%',
        marginLeft : '2%',
    },
    modalBottomTitleReport : {
        color : 'white',
        fontSize : 18,
        marginLeft : '2%',
    },
    modalBottomTitleInterested: {
        marginTop : '5%',
        color : 'white',
        fontSize : 18,
        marginLeft : '2%',
    },
    modalBottomTitleCopyLink: {
        marginTop : '5%',
        color : 'white',
        fontSize : 18,
        marginLeft : '2%',
    },
    modalBottomTitleShare: {
        marginTop : '5%',
        color : 'white',
        fontSize : 18,
        marginLeft : '2%',
    },
    modalBottomTitleSave: {
        marginTop : '5%',
        color : 'white',
        fontSize : 18,
        marginLeft : '2%',
    },
    modalBottomTitleReel : {
        marginTop : '5%',
        color : 'white',
        fontSize : 18,
        marginLeft : '2%',
    },
    modalBottomTitleClose : {
        marginTop : '5%',
        color : 'white',
        fontSize : 18,
        marginLeft : '2%',
    },
    BottomSendView : {
        top: '20%', 
    },
    modalBottomActionSend : {
        flexDirection : 'row',
        marginTop : '3%',
        borderBottomColor: "#8e8e8e",
        borderBottomWidth: 1,
    },
    modalBottomActionReel : {
        width : '30%',
        marginLeft : '35%',
        color : 'white',
        fontSize : 20,
        marginBottom : '3%',
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
    },
    modalBottomActionClose: {
        marginTop : '3%',
        marginLeft : '4%',
    },
    modalBottomCloseView: {
        flexDirection : 'row',
        marginTop : '2%',
    },
    modalBottomCloseBorder : {
        width : 45,
        height : 45,
        borderRadius: 45/2,
        borderColor: '#8e8e8e',
        borderWidth: 1,
    },
    modalBottomCloseIcon : {
        marginLeft : '18%',
        marginTop : '18%',
    },
    modalBottomClose : {
        marginLeft : '5%',
        color : 'white',
        fontSize : 18,
        marginTop : '3%',
    },
    modalBottomActionReelClose : {
        marginLeft : '5%',
        marginTop : '4%',
    },
    modalBottomActionReelCloseIcon : {
        width : 45,
        height : 45,
        borderRadius: 45/2,
        borderWidth: 2,
        borderColor: 'rgb(221, 99, 121)',
    },
    modalBottomActionReelCloseIconAction : {
        marginLeft : '20%',
        marginTop : '20%',
    },
    modalBottomActionReelCloseText : {
        color : 'rgb(226, 41, 74)',
        fontSize : 20,
        marginLeft : '5%',
        marginTop : '2%',
    },
});