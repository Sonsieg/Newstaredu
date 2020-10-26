import React, {Component} from 'react';
import {
  Image,
  ScrollView,
  Text,
  TextInput,
  TouchableOpacity,
  View,
  StyleSheet,
  FlatList,
} from 'react-native';
import {scale, vScale} from '../../ScaleSheet';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
export default class Trangchu extends Component {
  constructor(props) {
    super(props);
    this.state = {
      search: '',
      subjectList: [],
    };
  }
   home = async () => {
    try {
      const response = await fetch('https://acabiz.vn/api/home', {
      });
      // console.log(response);
      const jsonData = await response.json();
      return jsonData.data;
    } catch (e) {
      console.log(e);
    }
  };

  componentDidMount() {
    this.refeshDataFromSever();
  }
  refeshDataFromSever = () => {
    //promise khi nao datasever trả về thì cho vào list
    this.home()
      .then((list) => {
        this.setState({subjectList: list});
      })
      .catch((error) => {
        this.setState({subjectList: []});
      });
  };

  render() {
    const SonItem = ({item,index}) => (
      <ScrollView>
        <Image style={{width: scale(120), height: vScale(50)}} source={require('../../assets/images/girl.png')}></Image>

      </ScrollView>
      );
    return (
      <View>
        <View
          style={{
            flexDirection: 'row',
            justifyContent: 'space-around',
            marginTop: scale(20),
            height: scale(70),
          }}>
          <View
            style={{
              flexDirection: 'row',
              justifyContent: 'flex-start',
              width: scale(300),
              height: vScale(50),
              borderRadius: 20,
              borderWidth: 1,
              alignItems: 'center',
              borderColor: '#b0c4de',
            }}>
            <Image
              source={require('../../assets/images/search.png')}
              style={{marginHorizontal: scale(12)}}
            />
            <TextInput
              style={{
                fontWeight: 'bold',
                width: scale(240),
                fontSize: scale(14),
              }}
              placeholder="Bạn muốn học gì hôm nay?"
              textAlignVertical="center"
              placeholderTextColor="#b0c4de"
              onChangeText={(text) => {
                this.setState({search: text});
              }}
            />
          </View>
          <TouchableOpacity>
            <MaterialCommunityIcons name="bell-ring" size={scale(32)} />
          </TouchableOpacity>
        </View>
        <ScrollView>
          <Text
            style={{
              fontSize: scale(22),
              fontWeight: 'bold',
              marginHorizontal: scale(12),
            }}>
            Danh mục khóa học
          </Text>
          <ScrollView
            horizontal={true}
            justifyContent="flex-start"
            marginTop={scale(16)}>
            <TouchableOpacity style={styles.danhmuc}>
              <Text
                style={{
                  color: 'white',
                  textAlign: 'center',
                  marginHorizontal: scale(12),
                }}>
                nhanvien
              </Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.danhmuc}>
              <Text
                style={{
                  color: 'white',
                  textAlign: 'center',
                  marginHorizontal: scale(12),
                }}>
                ads
              </Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.danhmuc}>
              <Text
                style={{
                  color: 'white',
                  textAlign: 'center',
                  marginHorizontal: scale(12),
                }}>
                nhanvienmoi
              </Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.danhmuc}>
              <Text
                style={{
                  color: 'white',
                  textAlign: 'center',
                  marginHorizontal: scale(12),
                }}>
                Tester
              </Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.danhmuc}>
              <Text
                style={{
                  color: 'white',
                  textAlign: 'center',
                  marginHorizontal: scale(12),
                }}>
                B2B
              </Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.danhmuc}>
              <Text
                style={{
                  color: 'white',
                  textAlign: 'center',
                  marginHorizontal: scale(12),
                }}>
                Sale B2B
              </Text>
            </TouchableOpacity>
          </ScrollView>
          <View style={{flexDirection: 'row', justifyContent: 'space-between'}}>
            <Text
              style={{
                fontSize: scale(22),
                fontWeight: 'bold',
                marginHorizontal: scale(12),
                marginTop: scale(16),
              }}>
              Khóa học Newstaredu
            </Text>
            <Text
              style={{
                fontSize: scale(16),
                fontWeight: 'normal',
                marginHorizontal: scale(12),
                marginTop: scale(20),
              }}>
              Xem tất cả
            </Text>
          </View>
          <FlatList
            horizontal={true}
            data={
              {
                id: 1,
                name: "hello"
              },
              {
                id: 2,
                name: "ddd"
              }
            }
            renderItem={({item, index}) => {
              return <SonItem item={item} index={index}></SonItem>;
            }}/>

        </ScrollView>
      </View>
    );
  }
}
const styles = StyleSheet.create({
  danhmuc: {
    borderRadius: 20,
    borderWidth: 1,
    backgroundColor: '#00008b',
    height: 40,
    justifyContent: 'center',
    marginLeft: scale(16),
  },
});
