import AsyncStorage from '@react-native-community/async-storage';
import React, {Component} from 'react';
import {Image, Text, Switch, TouchableOpacity, View} from 'react-native';
import {scale, vScale} from '../ScaleSheet';
// import { Switch } from 'react-native-paper';

export default class Taikhoan extends Component {
  constructor(props) {
    super(props);
    this.state = {
      onSwitch: false,
    };
  }
  // toggleSwitch (){
  //     this.setState({
  //         onSwitch: !this.state.onSwitch
  //     })
  // }
  componentDidMount(){
    let test = AsyncStorage.getItem("@storage_Token");
    console.log(test)
}
  render() {
    return (
      <View>
        <View
          style={{
            width: '100%',
            height: vScale(60),
            backgroundColor: '#000080',
            alignItems: 'center',
          }}>
          <Text
            style={{
              fontSize: scale(24),
              color: 'white',
              textAlign: 'center',
              paddingTop: scale(10),
            }}>
            Thông tin tài khoản
          </Text>
        </View>
        <TouchableOpacity
          onPress={() => this.props.navigation.navigate('EditProfile')}>
          <View
            style={{
              flexDirection: 'row',
              backgroundColor: 'white',
              justifyContent: 'space-between',
              height: scale(80),
              width: '100%',
            }}>
            <View
              style={{
                flexDirection: 'row',
                marginTop: scale(16),
                marginHorizontal: scale(20),
              }}>
              {/* <Image resizeMode="contain" style={{ width: scale(60), height: vScale(60), borderRadius: scale(50) }} source={require('../images/avatar.jpg')} /> */}
              <View style={{marginLeft: scale(16)}}>
                <Text style={{fontSize: 18}}>Đặng Anh Sơn</Text>
                <Text
                  style={{
                    fontSize: 14,
                    color: '#a9a9a9',
                    paddingTop: scale(12),
                  }}>
                  sonsieg1999@gmail.com
                </Text>
              </View>
            </View>
            {/* <Image
              style={{
                width: scale(30),
                height: vScale(30),
                marginTop: scale(20),
              }}
              source={require('../images/next.png')}
            /> */}
          </View>
        </TouchableOpacity>
        <View
          style={{
            flexDirection: 'row',
            backgroundColor: 'white',
            justifyContent: 'space-evenly',
            height: scale(60),
            width: '100%',
            marginTop: scale(20),
          }}>
          <Text style={{fontSize: 16, paddingTop: scale(18)}}>
            Đăng nhập bằng tay hoặc gương mặt
          </Text>
          <Switch
            trackColor={{false: '#767577', true: '#81b0ff'}}
            onValueChange={() =>
              this.setState({onSwitch: !this.state.onSwitch})
            }
            value={this.state.onSwitch}
          />
        </View>
        <TouchableOpacity onPress={() => this.logout()}>
          <View
            style={{
              backgroundColor: 'white',
              height: vScale(60),
              width: '100%',
              marginTop: scale(20),
              alignItems: 'center',
              flexDirection: 'row',
              justifyContent: 'center',
            }}>
            <Text
              style={{
                fontSize: 20,
                paddingTop: scale(4),
                paddingHorizontal: scale(20),
                textAlign: 'center',
                color: '#dc143c',
              }}>
              Đăng xuất
            </Text>
          </View>
        </TouchableOpacity>
      </View>
    );
  }
}
