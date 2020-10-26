import React, {Component} from 'react';
import { Text, View } from 'react-native';
import { scale, vScale } from '../../ScaleSheet';

export default class Baocao extends Component {
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
            Báo cáo học tập
          </Text>
        </View>
      </View>
    );
  }
}
