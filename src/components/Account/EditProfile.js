import React, {Component} from 'react';
import {
  View,
  Text,
  Image,
  TouchableOpacity,
  ScrollView,
  TextInput,
} from 'react-native';
import { scale, vScale } from '../ScaleSheet';
//import Icon from 'react-native-vector-icons/FontAwesome5';
export default class EditProfile extends Component {
  constructor(props) {
    super(props);
    this.state = {
      hovaten: 'Đặng Anh Sơn',
      ngaysinh: '',
      sodienthoai: '',
      password: '',
    };
  }
  hovaten = (text) => {
    this.setState({hovaten: text});
    //console.log(`change state ${text}`);
  };
  sodienthoai = (text) => {
    this.setState({sodienthoai: text});
  };

  render() {
    return (
      <View>
        <View
          style={{
            width: '100%',
            height: vScale(60),
            backgroundColor: '#000080',
            alignItems: 'center',
            flexDirection: 'row',
            // justifyContent:"space-evenly"
          }}>
          <TouchableOpacity onPress={() => this.props.navigation.goBack()}>
            {/* <Image
              source={require('../images/back.png')}
              style={{marginLeft: scale(16)}}
            /> */}
          </TouchableOpacity>
          <View style={{justifyContent: 'flex-end'}}>
            <Text
              style={{
                fontSize: scale(24),
                color: 'white',
                textAlign: 'center',
                marginLeft: '20%',
              }}>
              Chỉnh sửa thông tin
            </Text>
          </View>
        </View>
        <ScrollView>
          <View
            style={{
              flexDirection: 'column',
              justifyContent: 'space-around',
              alignItems: 'center',
              width: '100%',
              height: vScale(200),
              // backgroundColor: 'red',
            }}>
            <Image
              resizeMode="contain"
              style={{
                width: scale(80),
                height: vScale(80),
                borderRadius: scale(80),
              }}
              source={require('../images/avatar.jpg')}
            />
            <View style={{justifyContent: 'center'}}>
              <Text style={{textAlign: 'center', fontSize: 20}}>
                Đặng Anh Sơn
              </Text>
              <Text style={{fontSize: 16, color: '#a9a9a9'}}>
                sonsieg1999@gmail.com
              </Text>
            </View>
          </View>
          <View
            style={{
              width: '100%',
              height: vScale(60),
              // backgroundColor: 'gray',
              flexDirection: 'row',
              justifyContent: 'space-between',
              marginHorizontal: scale(16),
              borderEndColor: 'gray',
            }}>
            <Text
              style={{
                textAlign: 'center',
                paddingTop: scale(20),
                fontSize: 18,
              }}>
              Họ và tên:
            </Text>
            <TextInput
              style={{marginHorizontal: scale(24), fontSize: scale(16)}}
              value={this.state.hovaten}
              onChangeText={this.hovaten}
              ></TextInput>
          </View>
        </ScrollView>
      </View>
    );
  }
}



