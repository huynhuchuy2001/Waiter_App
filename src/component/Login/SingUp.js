import React from 'react';
import Icon from 'react-native-vector-icons/FontAwesome';
import { Alert,Text, View, StyleSheet, TextInput, Platform,ScrollView, TouchableOpacity} from 'react-native';
import Feather from 'react-native-vector-icons/Feather';
// import LinearGradient from 'react-native-linear-gradient';
// import * as Animatable from 'react-native-animatable';
import Axios from 'axios';
export default function Register({navigation}) {
  const [data,setData] = React.useState({
    firstname : '',
    lastname : '',
    username : '',
    password : '',
    confirmpassword : '',
    email : '',
    phonenumber : '',
    address : '',
    nationality : '',
    check_textInputChange : false,
    check_textInputChange1 : false,
    check_textInputChange2 : false,
    check_textInputChange3 : false,
    check_textInputChange4 : false,
    check_textInputChange5 : false,
    check_textInputChange6 : false,
    secureTextEntry : true,
    secureTextEntry1 :true
  });
  const register = async () =>{
    try{
      await Axios.post('http://10.0.2.2:5000/user/register',{...data});
      Alert.alert("Thông báo!",'Đăng ký thành công!');
    }
    catch(err){
      Alert.alert("Thông báo!",err.response.data.msg);
    }
  };
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
  const textInputChange1 = (first) => {
    if(first.length != 0){ // kiem tra neu nguoi dung chua nhap thong tin thi ko check
      setData ({
        ...data,
        firstname : first,
        check_textInputChange1 : true
      });
    }
    else{
      setData({
        ...data,
        firstname : first,
        check_textInputChange1 : false
      });
    }
  };
  const textInputChange2 = (last) => {
    if(last.length != 0){ // kiem tra neu nguoi dung chua nhap thong tin thi ko check
      setData ({
        ...data,
        lastname : last,
        check_textInputChange2 : true
      });
    }
    else{
      setData({
        ...data,
        lastname : last,
        check_textInputChange2 : false
      });
    }
  };
  const textInputChange3 = (email) => {
    if(email.length != 0){ // kiem tra neu nguoi dung chua nhap thong tin thi ko check
      setData ({
        ...data,
        email : email,
        check_textInputChange3 : true
      });
    }
    else{
      setData({
        ...data,
        email : email,
        check_textInputChange3 : false
      });
    }
  };
  const textInputChange4 = (phone) => {
    if(phone.length != 0){ // kiem tra neu nguoi dung chua nhap thong tin thi ko check
      setData ({
        ...data,
        phonenumber : phone,
        check_textInputChange4 : true
      });
    }
    else{
      setData({
        ...data,
        phonenumber : phone,
        check_textInputChange4 : false
      });
    }
  };
  const textInputChange5 = (address) => {
    if(address.length != 0){ // kiem tra neu nguoi dung chua nhap thong tin thi ko check
      setData ({
        ...data,
        address : address,
        check_textInputChange5 : true
      });
    }
    else{
      setData({
        ...data,
        address : address,
        check_textInputChange5 : false
      });
    }
  };
  const textInputChange6 = (nationality) => {
    if(nationality.length != 0){ // kiem tra neu nguoi dung chua nhap thong tin thi ko check
      setData ({
        ...data,
        nationality : nationality,
        check_textInputChange6 : true
      });
    }
    else{
      setData({
        ...data,
        nationality : nationality,
        check_textInputChange6 : false
      });
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
  const handlePasswordChange1 = (pass1) => {
    setData({
      ...data,
      confirmpassword : pass1
    });
  };
  const updateSecureTextEntry1 = () =>{
    setData ({
      ...data,
      secureTextEntry1 : !data.secureTextEntry1  // khi nguoi dung click vao icon hien thi mat khau thi set lai tinh trang cua mat khau bang false
    });
  };
    return(
        <View style = {styles.container}>
            <View style = { styles.header}>
                <Text style = {styles.text_header}>Register to Waiter!</Text>
            </View>
            <View style = { styles.footer}>
              <ScrollView>
                <Text style = { styles.text_footer}>First Name</Text>
                <View style = {styles.action}>
                  <Icon
                    name = "user-o"
                    color = "#05375a"
                    size = {35}
                  />
                  <TextInput 
                    style = {styles.text_input} 
                    placeholder = "First name..."
                    autoCapitalize = 'none'
                    onChangeText = {(first) => textInputChange1(first)}
                  />
                  {data.check_textInputChange1 ?
                    <Feather
                      name = "check-circle"
                      color = "green"
                      size
                      = {20}
                    />
                  : null}
                </View>
                <Text style = {[styles.text_footer,{marginTop : 15}]}>Last Name</Text>
                <View style = {styles.action}>
                  <Icon
                    name = "user-o"
                    color = "#05375a"
                    size = {35}
                  />
                  <TextInput 
                    style = {styles.text_input} 
                    placeholder = "Last name..."
                    autoCapitalize = 'none'
                    onChangeText = {(last) => textInputChange2(last)}
                  />
                  {data.check_textInputChange2 ?
                    <Feather
                      name = "check-circle"
                      color = "green"
                      size
                      = {20}
                    />
                  : null}
                </View>
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
                <Text style = {[styles.text_footer,{marginTop : 15}]}>Confirm Pass Word</Text>
                <View style = {styles.action}>
                  <Icon
                    name = "lock"
                    color = "#05375a"
                    size = {35}
                  />
                  <TextInput 
                    style = {styles.text_input} 
                    placeholder = "Nhập Lại Mật Khẩu..."
                    autoCapitalize = 'none'
                    secureTextEntry = {data.secureTextEntry1 ? true : false}
                    onChangeText ={(pass1) => handlePasswordChange1(pass1)}
                  />
                  <TouchableOpacity onPress = {updateSecureTextEntry1}>
                    <Feather
                      name = "eye-off"
                      color = 'grey'
                      size = {20}
                    />
                  </TouchableOpacity>
                </View>
                <Text style = {[styles.text_footer,{marginTop : 15}]}>Email</Text>
                <View style = {styles.action}>
                  <Icon
                    name = "envelope"
                    color = "#05375a"
                    size = {35}
                  />
                  <TextInput 
                    style = {styles.text_input} 
                    placeholder = "Email..."
                    autoCapitalize = 'none'
                    onChangeText = {(email) => textInputChange3(email)}
                  />
                  {data.check_textInputChange3 ?
                    <Feather
                      name = "check-circle"
                      color = "green"
                      size
                      = {20}
                    />
                  : null}
                </View>
                <Text style = { [styles.text_footer,{marginTop : 15}]}>Phone Number</Text>
                <View style = {styles.action}>
                  <Icon
                    name = "phone"
                    color = "#05375a"
                    size = {35}
                  />
                  <TextInput 
                    style = {styles.text_input} 
                    placeholder = "Số điện thoại..."
                    autoCapitalize = 'none'
                    onChangeText = {(phone) => textInputChange4(phone)}
                  />
                  {data.check_textInputChange4 ?
                    <Feather
                      name = "check-circle"
                      color = "green"
                      size
                      = {20}
                    />
                  : null}
                </View>
                <Text style = { [styles.text_footer,{marginTop : 15}]}>Address</Text>
                <View style = {styles.action}>
                  <Icon
                    name = "address-card"
                    color = "#05375a"
                    size = {35}
                  />
                  <TextInput 
                    style = {styles.text_input} 
                    placeholder = "Địa chỉ..."
                    autoCapitalize = 'none'
                    onChangeText = {(address) => textInputChange5(address)}
                  />
                  {data.check_textInputChange5 ?
                    <Feather
                      name = "check-circle"
                      color = "green"
                      size
                      = {20}
                    />
                  : null}
                </View>
                <Text style = { [styles.text_footer,{marginTop : 15}]}>Nationality</Text>
                <View style = {styles.action}>
                  <Icon
                    name = "flag"
                    color = "#05375a"
                    size = {35}
                  />
                  <TextInput 
                    style = {styles.text_input} 
                    placeholder = "Nationality..."
                    autoCapitalize = 'none'
                    onChangeText = {(Nationality) => textInputChange6(Nationality)}
                  />
                  {data.check_textInputChange6 ?
                    <Feather
                      name = "check-circle"
                      color = "green"
                      size
                      = {20}
                    />
                  : null}
                </View>
                <View style = {styles.button}>
                <TouchableOpacity
                    onPress = {register}
                    style = {[styles.singIn,{
                      borderColor : '#009387',
                      borderWidth : 1,
                      marginTop : 15
                    }]}
                  >
                    <Text style = {[styles.text_singIn,{
                      color : '#fff'
                    }]}>Đăng Ký</Text>
                  </TouchableOpacity>
                  <TouchableOpacity
                    onPress = {() => navigation.navigate("Login")}
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
                </View>
              </ScrollView>
            </View>
            
        </View>   
    );
};
const styles = StyleSheet.create({
  container : {
    flex :1,
    backgroundColor : '#009387'
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
    width : '90%',
    height : 50,
    justifyContent : 'center',
    alignItems : 'center',
    borderRadius : 10,
    backgroundColor : '#009387'
  },
  text_singUp :{
    fontSize : 18,
    fontWeight : 'bold'
  },
  singIn : {
    width : '90%',
    height : 50,
    justifyContent : 'center',
    alignItems : 'center',
    borderRadius : 10,
    backgroundColor : '#009387'
  },
  text_singIn :{
    fontSize : 18,
    fontWeight : 'bold'
  }
});