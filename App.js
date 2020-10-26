import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import Login from './src/container/Login/Login';
import Taikhoan from './src/container/Account/Taikhoan';
import EditProfile from './src/container/Account/EditProfile';
import Router from './src/router';

const StackNavigator = createStackNavigator();

const App = () => {
  return (
    // <BorrowerScreen/>
    // <HomeScreen/>
    <NavigationContainer>
      <StackNavigator.Navigator screenOptions={{header:()=>null}}>
          <StackNavigator.Screen name="Login" component={Login}  />
          <StackNavigator.Screen name="Taikhoan" component={Taikhoan} />
          <StackNavigator.Screen name="EditProfile" component={EditProfile} />
          <StackNavigator.Screen name ="Router" component={Router}/>
      </StackNavigator.Navigator>
    </NavigationContainer>

  );
};



export default App;