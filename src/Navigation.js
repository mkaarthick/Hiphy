import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {TrendingScreen} from './screens/TrendingScreen';
import {SearchScreen} from './screens/SearchScreen';
import {DetailSearchScreen} from './screens/DetailSearchScreen';
import {Image} from 'react-native';

const MainStack = createNativeStackNavigator();
const Tab = createBottomTabNavigator();

const TabNavigation = () => {
  return (
    <Tab.Navigator
      screenOptions={{
        tabBarStyle: {backgroundColor: 'papayawhip'},
        tabBarActiveTintColor: 'black',
      }}>
      <Tab.Screen
        name="Trending"
        component={TrendingScreen}
        options={{
          headerShown: false,
          tabBarLabelStyle: {fontSize: 14},
          tabBarIcon: ({color, size}) => (
            <Image
              source={require('../assets/icons/trend.png')}
              style={{width: 32, height: 32}}
            />
          ),
        }}
      />
      <Tab.Screen
        name="Search"
        component={SearchScreen}
        options={{
          headerShown: false,
          tabBarLabelStyle: {fontSize: 14},
          tabBarIcon: ({color, size}) => (
            <Image
              source={require('../assets/icons/search.png')}
              style={{width: 32, height: 32}}
            />
          ),
        }}
      />
    </Tab.Navigator>
  );
};

function AppNavigation() {
  return (
    <NavigationContainer>
      <MainStack.Navigator
        screenOptions={{
          headerTitleAlign: 'center',
          headerStyle: {backgroundColor: 'papayawhip'},
          headerTitleStyle: {fontWeight: '900'},
        }}>
        <MainStack.Screen
          name={'tab'}
          options={{title: 'HIPHY'}}
          component={TabNavigation}
        />
        <MainStack.Screen
          name={'DetailSearch'}
          options={{title: 'Search'}}
          component={DetailSearchScreen}
        />
      </MainStack.Navigator>
    </NavigationContainer>
  );
}

export default AppNavigation;
