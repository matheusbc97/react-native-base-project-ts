import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import {createDrawerNavigator} from '@react-navigation/drawer';
import {useSelector} from 'react-redux';

import {
  AccountStackParams,
  DrawerStackParams,
  RootStackParams,
  HomeStackParams,
} from './types';
import {HeaderLeft} from '../library/components';
import colors from '../assets/colors';
import {selectUser} from '../store/account/user';
import SideMenu from './SideMenu';

import Login from '../pages/account/Login';
import Home from '../pages/Home';

const AccountStack = createStackNavigator<AccountStackParams>();
const RootStack = createStackNavigator<RootStackParams>();
const Drawer = createDrawerNavigator<DrawerStackParams>();
const HomeStack = createStackNavigator<HomeStackParams>();

const headerLeft = ({canGoBack}: any) => <HeaderLeft canGoBack={canGoBack} />;

const headerStyle = {
  headerLeft,
  headerStyle: {
    backgroundColor: colors.red2,
  },
  headerTintColor: 'white',
};

const HomeStackScreen = () => {
  return (
    <HomeStack.Navigator>
      <HomeStack.Screen
        options={{
          ...headerStyle,
          title: 'Início',
        }}
        component={Home}
        name="Home"
      />
    </HomeStack.Navigator>
  );
};

const DrawerStack = () => {
  return (
    <Drawer.Navigator drawerContent={(props: any) => <SideMenu {...props} />}>
      <Drawer.Screen
        name="HomeStack"
        component={HomeStackScreen}
        options={{
          title: 'Início',
        }}
      />
    </Drawer.Navigator>
  );
};

const App = () => {
  const user = useSelector(selectUser);

  return (
    <NavigationContainer>
      {user ? (
        <RootStack.Navigator screenOptions={headerStyle}>
          <RootStack.Screen
            options={{
              headerShown: false,
            }}
            name="DrawerStack"
            component={DrawerStack}
          />
        </RootStack.Navigator>
      ) : (
        <AccountStack.Navigator screenOptions={headerStyle}>
          <AccountStack.Screen
            options={{
              headerShown: false,
            }}
            name="Login"
            component={Login}
          />
        </AccountStack.Navigator>
      )}
    </NavigationContainer>
  );
};

export default App;
