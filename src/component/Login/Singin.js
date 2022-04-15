import React, { useState } from 'react';
import Icon from 'react-native-vector-icons/FontAwesome';
import { Alert,Text,Button, View, StyleSheet, TextInput, Platform,ScrollView, TouchableOpacity} from 'react-native';
import Feather from 'react-native-vector-icons/Feather';
import AsyncStorage from "@react-native-async-storage/async-storage";
// import LinearGradient from 'react-native-linear-gradient';
// import * as Animatable from 'react-native-animatable';
import Axios from 'axios';
export default function SingIn ({navigation}) {
  const [data,setData] = React.useState({
    username : '',
    password : '',
    check_textInputChange : false,
    secureTextEntry : true
  });
  const textInputChange = (val) => {
    if(val.length != 0){ // kiem tra neu nguoi dung chua nhap thong tin thi ko check
      setData ({
        ...data,
        username : val,
        check_textInputChange : true
      });
    }
    else{
      setData({
        ...data,
        username : val,
        check_textInputChange : false
      });
    }
  };
  const loading = () => {
    navigation.navigate('Waiter');
  }
  const login = async () =>{
    try{
      await Axios.post('http://10.0.2.2:5000/user/login',{
        email : data.username,
        password : data.password
      });
      await AsyncStorage.setItem('UserLogin',`${true}`);
      await AsyncStorage.setItem('UserEmail',data.username);
      Alert.alert("Thông báo!","Đăng nhập thành công!",
      [
        { text: "OK", onPress: loading }
      ]);
    }
    catch(err){
      Alert.alert("Thông báo!",err.response.data.msg);
    }
  };
  const handlePasswordChange = (pass) => {
    setData({
      ...data,
      password : pass
    });
  };
  const updateSecureTextEntry = () =>{
    setData ({
      ...data,
      secureTextEntry : !data.secureTextEntry  // khi nguoi dung click vao icon hien thi mat khau thi set lai tinh trang cua mat khau bang false
    });
  };
  return(
        <View style = {styles.container}>
            <View style = { styles.header}>
                <Text style = {styles.text_header}>Login to Waiter!</Text>
            </View>
            <View style = { styles.footer}>
              <ScrollView>
                <Text style = { [styles.text_footer,{marginTop : 15}]}>User Name</Text>
                <View style = {styles.action}>
                  <Icon
                    name = "user-circle"
                    color = "#05375a"
                    size = {35}
                  />
                  <TextInput 
                    style = {styles.text_input} 
                    placeholder = "Số điện thoại, email hoặc tên người dùng..."
                    autoCapitalize = 'none'
                    onChangeText = {(val) => textInputChange(val)}
                  />
                  {data.check_textInputChange ?
                    <Feather
                      name = "check-circle"
                      color = "green"
                      size = {20}
                    />
                  : null}
                </View>
                <Text style = {[styles.text_footer,{marginTop : 15}]}>Pass Word</Text>
                <View style = {styles.action}>
                  <Icon
                    name = "lock"
                    color = "#05375a"
                    size = {35}
                  />
                  <TextInput 
                    style = {styles.text_input} 
                    placeholder = "Mật Khẩu..."
                    autoCapitalize = 'none'
                    secureTextEntry = {data.secureTextEntry ? true : false}
                    onChangeText ={(pass) => handlePasswordChange(pass)}
                  />
                  <TouchableOpacity onPress = {updateSecureTextEntry}>
                    <Feather
                      name = "eye-off"
                      color = 'grey'
                      size = {20}
                    />
                  </TouchableOpacity>
                  
                </View>
                <View style = {styles.button}>
                <TouchableOpacity
                    onPress = {login}
                    style = {[styles.singIn,{
                      borderColor : '#009387',
                      borderWidth : 1,
                      marginTop : 15
                    }]}
                >
                    <Text style = {[styles.text_singIn,{
                      color : '#fff'
                    }]}>Đăng Nhập</Text>
                </TouchableOpacity>
                  <TouchableOpacity
                    onPress = {() => navigation.navigate('Register')}
                    style = {[styles.singUp,{
                      borderColor : '#009387',
                      borderWidth : 1,
                      marginTop : 15
                    }]}
                  >
                    <Text style = {[styles.text_singUp,{
                      color : '#fff'
                    }]}>Đăng Ký</Text>
                  </TouchableOpacity>
                </View>
              </ScrollView>
            </View>
            
        </View>   
  );
};
const styles = StyleSheet.create({
  container : {
    flex :1,
    backgroundColor : '#009387',
  },
  header : {
    flex : 1,
    justifyContent : 'flex-end',
    paddingHorizontal : 20,
    paddingBottom : 50,
  },
  footer : {
    flex : 3,
    backgroundColor : '#fff',
    borderTopLeftRadius : 30,
    borderTopRightRadius : 30,
    paddingVertical : 30,
    paddingHorizontal : 20,
  },
  text_header : {
    color : '#fff',
    fontWeight : 'bold',
    fontSize : 30,
    textAlign : 'center',
  },
  text_footer : {
    color : '#05375a',
    fontSize : 18
  },
  action : {
    flexDirection : 'row',
    marginTop : 10,
    borderBottomWidth : 1,
    borderBottomColor : '#f2f2f2',
  },
  text_input :{ 
    flex : 1,
    marginTop : Platform.OS == 'android' ? 0 : -12,
    paddingLeft : 15,
    color : '#05375a' 
  },
  button : {
    alignItems : 'center',
    marginTop : 15,
  },
  singUp : {
    backgroundColor : '#009387',
    width : '100%',
    height : 50,
    justifyContent : 'center',
    alignItems : 'center',
    borderRadius : 10
  },
  text_singUp :{
    fontSize : 18,
    fontWeight : 'bold'
  },
  singIn : {
    backgroundColor : '#009387',
    width : '100%',
    height : 50,
    justifyContent : 'center',
    alignItems : 'center',
    borderRadius : 10
  },
  text_singIn :{
    fontSize : 18,
    fontWeight : 'bold'
  }
});