import {StyleSheet} from 'react-native';
import React from 'react';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import Watchlist from '../pages/watchlist/Watchlist';
import Home from '../pages/home/Home';
import Profile from '../pages/profile/Profile';
import Stream from '../pages/stream/Stream';
import Protofolio from '../pages/portofolio/Protofolio';
import {Feather, MaterialCommunityIcons, MaterialIcons} from '../assets/Icons';
const Tab = createBottomTabNavigator();

const Battom_Native = () => {
  return (
    <Tab.Navigator
      screenOptions={({route}) => ({
        headerShown: false,
        tabBarIcon: ({focused, color, size}) => {
          let iconName;

          if (route.name === 'Home') {
            iconName = 'home';
          } else if (route.name === 'Watchlist') {
            iconName = 'star';
          } else if (route.name === 'Protofolio') {
            iconName = 'pie-chart';
          } else if (route.name === 'Stream') {
            iconName = 'clipboard-text-outline';
          } else if (route.name === 'Profile') {
            iconName = 'user';
          }
          if (route.name == 'Stream') {
            return (
              <MaterialCommunityIcons
                name={iconName}
                size={size}
                color={color}
              />
            );
          } else {
            return <Feather name={iconName} size={size} color={color} />;
          }
        },
        tabBarActiveTintColor: '#e8f44c',
        tabBarInactiveTintColor: 'black',

        tabBarItemStyle: {height: 40, marginTop: 5},
        tabBarIconStyle: {
          fontSize: 5,
          //   backgroundColor: '#2e3032',
          paddingHorizontal: 20,
          borderRadius: 15,
        },
      })}>
      <Tab.Screen
        name="Home"
        component={Home}
        options={{tabBarLabel: () => null}}
      />
      <Tab.Screen
        name="Watchlist"
        options={{tabBarLabel: () => null}}
        component={Watchlist}
      />
      <Tab.Screen
        name="Protofolio"
        options={{tabBarLabel: () => null}}
        component={Protofolio}
      />
      <Tab.Screen
        name="Stream"
        options={{tabBarLabel: () => null}}
        component={Stream}
      />
      <Tab.Screen
        name="Profile"
        options={{tabBarLabel: () => null}}
        component={Profile}
      />
    </Tab.Navigator>
  );
};

export default Battom_Native;

const styles = StyleSheet.create({});
