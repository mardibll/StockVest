import {StyleSheet} from 'react-native';
import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import Splash from '../pages/auth/Splash';
import Login from '../pages/auth/Login';
import Regist from '../pages/auth/Regist';
import Recovery from '../pages/auth/Recovery';
import Validasi from '../pages/auth/Validasi';
import PagesSucces from '../pages/auth/PagesSucces';
import Battom_Native from './Battom_Native';
const Stack = createStackNavigator();
const Stack_Native = () => {
  return (
    <Stack.Navigator
      screenOptions={{
        headerShown: false,
      }}>
      {/* <Stack.Screen name="Splash" component={Splash} /> */}
      <Stack.Screen name="Login" component={Login} />
      <Stack.Screen name="Regist" component={Regist} />
      <Stack.Screen name="Recovery" component={Recovery} />
      <Stack.Screen name="Validasi" component={Validasi} />
      <Stack.Screen name="PagesSucces" component={PagesSucces} />
      <Stack.Screen name="Tab_Nav" component={Battom_Native} />
    </Stack.Navigator>
  );
};

export default Stack_Native;

const styles = StyleSheet.create({});
