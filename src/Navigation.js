import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {TrendingScreen} from './screens/TrendingScreen';
import {SearchScreen} from './screens/SearchScreen';
import {DetailSearchScreen} from './screens/DetailSearchScreen';

const MainStack = createNativeStackNavigator();
const Tab = createBottomTabNavigator();

const TabNavigation = () => {
  return (
    <Tab.Navigator>
      <Tab.Screen name="Trending" component={TrendingScreen} />
      <Tab.Screen name="Search" component={SearchScreen} />
    </Tab.Navigator>
  );
};

function AppNavigation() {
  return (
    <NavigationContainer>
      <MainStack.Navigator
      // screenOptions={{
      //   header: props => <TMAppBar {...props} right={true} />,
      // }}
      >
        <MainStack.Screen name={'tab'} component={TabNavigation} />
        <MainStack.Screen
          name={'DetailSearch'}
          component={DetailSearchScreen}
        />
      </MainStack.Navigator>
    </NavigationContainer>
  );
}

export default AppNavigation;
