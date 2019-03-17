import React from 'react';
import { Platform } from 'react-native';
import {
  createStackNavigator,
  createBottomTabNavigator,
} from 'react-navigation';

import TabBarIcon from '../components/TabBarIcon';
import HomeScreen from '../screens/HomeScreen';
import WeddingInfoScreen from '../screens/WeddingInfoScreen';
import WeddingPartyScreen from '../screens/WeddingPartyScreen';
import Colors from '../constants/Colors';

const HomeStack = createStackNavigator({
  Home: HomeScreen,
});

HomeStack.navigationOptions = {
  tabBarLabel: 'Home',
  tabBarIcon: ({ focused }) => (
    <TabBarIcon
      focused={focused}
      name={Platform.OS === 'ios' ? `ios-heart'}` : 'md-heart'}
    />
  ),
};

const WeddingInfoStack = createStackNavigator({
  WeddingInfo: WeddingInfoScreen,
});

WeddingInfoStack.navigationOptions = {
  tabBarLabel: 'Info',
  tabBarIcon: ({ focused }) => (
    <TabBarIcon
      focused={focused}
      name={
        Platform.OS === 'ios'
          ? 'ios-information-circle-outline'
          : 'md-information-circle-outline'
      }
    />
  ),
};

const WeddingPartyStack = createStackNavigator({
  WeddingParty: WeddingPartyScreen,
});

WeddingPartyStack.navigationOptions = {
  tabBarLabel: 'The Party',
  tabBarIcon: ({ focused }) => (
    <TabBarIcon
      focused={focused}
      name={Platform.OS === 'ios' ? 'ios-options' : 'md-people'}
    />
  ),
};

const PhotosStack = createStackNavigator({
  Photos: WeddingPartyScreen,
});

PhotosStack.navigationOptions = {
  tabBarLabel: '#TNA4Life',
  tabBarIcon: ({ focused }) => (
    <TabBarIcon
      focused={focused}
      name={Platform.OS === 'ios' ? 'ios-camera' : 'md-camera'}
    />
  ),
};

const DJStack = createStackNavigator({
  Photos: WeddingPartyScreen,
});

DJStack.navigationOptions = {
  tabBarLabel: 'Music',
  tabBarIcon: ({ focused }) => (
    <TabBarIcon
      focused={focused}
      name={Platform.OS === 'ios' ? 'ios-musical-notes' : 'md-musical-notes'}
    />
  ),
};

export default createBottomTabNavigator(
  {
    HomeStack,
    WeddingInfoStack,
    WeddingPartyStack,
    PhotosStack,
    DJStack,
  },
  {
    tabBarOptions: {
      activeTintColor: Colors.tabLabelSelected,
      style: {
        paddingVertical: 5,
      },
    },
  }
);
