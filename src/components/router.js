import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import Baikiemtra from './Account/Baikiemtra';
import Baocao from './Account/Baocao';
import Taikhoan from './Account/Taikhoan';
import Trangchu from './Account/Trangchu';
import Vaohoc from './Account/Vaohoc';
import React from 'react';
import {scale} from './ScaleSheet';
import {Image} from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5';
import Ionicons from 'react-native-vector-icons/Ionicons';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
const Tab = createBottomTabNavigator();

function Router() {
  return (
    <Tab.Navigator tabBarOptions={{labelStyle: {fontSize: scale(14), justifyContent:"center"}}}>
      <Tab.Screen
        name="Trangchu"
        component={Trangchu}
        options={{
          tabBarLabel: '',
          tabBarIcon: ({color, size}) => (
            <MaterialCommunityIcons  style={{paddingTop:scale(14)}} name="home" color="#1e90ff" size={size*1.3} />
          ),
        }}
      />
      <Tab.Screen
        name="Vaohoc"
        component={Vaohoc}
        options={{
          tabBarLabel: '',
          tabBarIcon: ({color, size}) => (
            <MaterialCommunityIcons style={{paddingTop:scale(14)}} name="book-open-variant" color="#1e90ff" size={size*1.3} />
          ),
        }}
      />
      
      <Tab.Screen
        name="Baikiemtra"
        component={Baikiemtra}
        options={{
          tabBarLabel: '',
          tabBarIcon: ({color, size}) => (
            <MaterialCommunityIcons style={{paddingTop:scale(14)}} name="file-document-outline" color="#1e90ff" size={size*1.3} />
          ),
        }}
      />
      <Tab.Screen
        name="Baocao"
        component={Baocao}
        options={{
          tabBarLabel: '',
          tabBarIcon: ({color, size}) => (
            <MaterialCommunityIcons style={{paddingTop:scale(14)}} name="file-question" color="#1e90ff" size={size*1.3} />
          ),
        }}
      />
      <Tab.Screen
        name="Taikhoan"
        component={Taikhoan}
        options={{
          tabBarLabel: '',
          tabBarIcon: ({color, size}) => (
            <MaterialCommunityIcons style={{paddingTop:scale(14)}} name="auto-fix" color="#1e90ff" size={size*1.3} />
          ),
        }}
      />
    </Tab.Navigator>
  );
}

export default Router;
