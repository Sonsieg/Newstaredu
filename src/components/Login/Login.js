import AsyncStorage from '@react-native-community/async-storage';
import React, {Component} from 'react';
import {
  Alert,
  Button,
  Image,
  ImageBackground,
  Modal,
  ScrollView,
  StyleSheet,
  Text,
  TextInput,
  //Input,
  TouchableOpacity,
  View,
} from 'react-native';
import { scale, vScale } from '../ScaleSheet';
export default class Login extends Component {
  constructor(props) {
    super(props);
    this.state = {
      email: 'company@unica.vn',
      password: 'zibaca@1A',
      data: [],
      isShow: false,
      quenmatkhau: '',
      // storeData:null
    };
  }
  handleEmail = (text) => {
    this.setState({email: text});
    //console.log(`change state ${text}`);
  };
  
  oldPassword = (text) => {
    this.setState({quenmatkhau: text});
  };
  handlePassword = (text) => {
    this.setState({password: text});
  };
  // email: 'company@unica.vn',
  // password: 'zibaca@1A'
  storeData = async (value) => {
    try {
      const jsonValue = JSON.stringify(value);
      await AsyncStorage.setItem('@token', jsonValue);
    } catch (e) {
      // saving error
    }
  };
  getData = async () => {
    try {
      const jsonValue = await AsyncStorage.getItem('@token');
      if (jsonValue != null) {
        this.props.navigation.replace("Router");
      }
    } catch (e) {
      // error reading value
    }
  };
  componentDidMount(){
      this.getData()
  }
  signin = async () => {
    try {
      const response = await fetch('https://acabiz.vn/api/auth/login', {
        method: 'POST',
        headers: {
          Accept: 'application/json',
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          email: this.state.email,
          password: this.state.password,
        }),
      });
      // console.log(response);
      const jsonData = await response.json();
      console.log(jsonData);
      // await AsyncStorage.setItem('@storage_Token', '123456789');

      console.log('----------------------');
      if (jsonData.status == 404) {
        Alert.alert('Email hoặc mật khẩu không được để trống');
      } else if (jsonData.status == 422) {
        Alert.alert('Email hoặc mật khẩu không đúng');
      }  else if ( jsonData.status == 200 ){
        this.setState({data: jsonData.data.user});
        console.log(jsonData.data.token)
        // this.setState({storeData:jsonData.data.token})
        this.storeData(jsonData.data.token)
        this.props.navigation.replace("Router");
      }
      else Alert.alert('Sap sever')
    } catch (e) {
      console.log(e);
    }
  };

  render() {
    //const uri = `https://acabiz.vn${this.state?.data.image}`;
    //   console.log(typeof(uri))
    return (
      <ImageBackground
        style={{width: '100%', height: '100%'}}
        source={require('../images/login-bg.jpg')}>
          <ScrollView>
        <View style={{}}>
          <Image
            style={{
              height: vScale(160),
              width: scale(360),
              marginTop: vScale(100),
            }}
            source={require('../images/logo-login.png')}></Image>
        </View>
        <View style={{}}>
          <View
            style={{
              width: scale(340),
              height: vScale(60),
              borderRadius: 5,
              borderWidth: 1,
              borderColor: '#fff5ee',
              marginHorizontal: scale(20),
              flexDirection: 'row',
              justifyContent: 'flex-start',
              backgroundColor: '#191970',
            }}>
            <Image
              style={{marginHorizontal: scale(20), marginTop: scale(14)}}
              source={require('../images/user.png')}
            />
            <TextInput
              style={styles.input}
              placeholder="Email"
              placeholderTextColor="#C2C9CD"
              color="white"
              onChangeText={this.handleEmail}
              keyboardType="email-address"
              autoCapitalize="none"
              value={this.state.email}
            />
          </View>
          <View
            style={{
              width: scale(340),
              height: vScale(60),
              borderRadius: 5,
              borderWidth: 1,
              borderColor: '#fff5ee',
              marginHorizontal: scale(20),
              flexDirection: 'row',
              justifyContent: 'flex-start',
              backgroundColor: '#191970',
              marginTop: scale(20),
            }}>
            <Image
              style={{marginHorizontal: scale(20), marginTop: scale(14)}}
              source={require('../images/lock.png')}
            />
            <TextInput
              style={styles.input}
              placeholder="Password"
              placeholderTextColor="#C2C9CD"
              secureTextEntry={true}
              color="white"
              onChangeText={this.handlePassword}
              value={this.state.password}
            />
          </View>
          <TouchableOpacity onPress={() => this.setState({isShow: true})}>
            <Text
              style={{
                marginHorizontal: scale(20),
                color: 'white',
                fontSize: scale(16),
                marginTop: vScale(16),
              }}>
              Quên mật khẩu ?
            </Text>
          </TouchableOpacity>
        </View>
        <View
          style={{
            flexDirection: 'row',
            justifyContent: 'space-evenly',
            marginTop: scale(32),
          }}>
          <TouchableOpacity
            style={{
              width: scale(280),
              height: vScale(60),
              backgroundColor: '#1e90ff',
              borderRadius: 10,
              alignItems: 'center',
            }}
            onPress={this.signin}>
            <Text
              style={{
                textAlign: 'center',
                color: 'white',
                fontSize: 20,
                paddingTop: scale(14),
              }}>
              ĐĂNG NHẬP
            </Text>
          </TouchableOpacity>
          <TouchableOpacity>
            <Image
              resizeMode="contain"
              style={{width: scale(40), height: scale(40)}}
              source={require('../images/touch-id.png')}></Image>
          </TouchableOpacity>
        </View>
        <Modal
          animationType="slide"
          transparent={true}
          visible={this.state.isShow}
          onRequestClose={() => {
            Alert.alert('Modal has been closed.');
          }}>
          <View
            style={{
              width: scale(300),
              height: vScale(200),
              backgroundColor: '#fff',
              alignSelf: 'center',
              marginTop: '50%',
              borderWidth: 1,
              borderColor: 'white',
              // alignItems: 'center',
              // justifyContent: 'center',
              borderRadius: 6,
              // justifyContent: 'flex-start',
              // flexDirection: 'row',
            }}>
            <View
              style={{
                width: scale(300),
                height: vScale(50),
                backgroundColor: '#191970',
                justifyContent: 'center',
                alignContent: 'center',
              }}>
              <Text style={{textAlign: 'center', color: 'white'}}>
                Quên mật khẩu
              </Text>
            </View>
            <TextInput
              style={{
                marginHorizontal: scale(20),
                marginTop: scale(20),
                borderWidth: 1,
                width: scale(260),
                height: vScale(60),
                borderRadius: 5,
                borderColor: '#d3d3d3',
                justifyContent: 'flex-start',
                paddingLeft: scale(10)
              }}
              placeholderTextColor="#C2C9CD"
              onChangeText={this.oldPassword}
              keyboardType="email-address"
              autoCapitalize="none"
              value={this.state.quenmatkhau}
              placeholder="Nhập email để lấy lại mật khẩu"
            />
            <View
              style={{
                flexDirection: 'row',
                justifyContent: 'space-around',
                marginTop: scale(12),
              }}>
              <TouchableOpacity
                style={{
                  width: scale(60),
                  height: vScale(40),
                  backgroundColor: '#4169e1',
                  borderRadius: 5,
                  justifyContent: 'center',
                  alignItems: 'center',
                }}
                onPress={() => this.setState({isShow: false})}>
                <Text style={{textAlign: 'center', color:"white"}}>Bỏ qua</Text>
              </TouchableOpacity>
              <TouchableOpacity
                style={{
                  width: scale(60),
                  height: vScale(40),
                  backgroundColor: '#4169e1',
                  borderRadius: 5,
                  justifyContent: 'center',
                  alignItems: 'center',
                }}
                onPress={() => this.setState({isShow: false})}>
                <Text style={{textAlign: 'center', color:"white"}}>OK</Text>
              </TouchableOpacity>
            </View>
            {/* <Text>{this.state?.data.fullname}</Text>
            <Image source={{uri: uri}} style={{width: 66, height: 58}} /> */}

            {/* <Button title="ok" onPress={() => this.setState({isShow: false})} /> */}
          </View>
        </Modal>
        </ScrollView>
      </ImageBackground>
    );
  }
}
const styles = StyleSheet.create({
  input: {
    textDecorationColor: 'white',
    padding: scale(8),
    fontWeight: 'bold',
    fontSize: 16,
    fontFamily: 'Aria',
    // backgroundColor:"red",
    width:scale(280)
  },
});