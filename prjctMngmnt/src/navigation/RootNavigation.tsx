import {StyleSheet, Text, View} from 'react-native';
import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';

import {useAppSelector} from '../stateManagemer/Store';
import {Home} from '../screens';
import LoginScreen from '../screens/Login';

const RootStack = createNativeStackNavigator();
const RootNavigation = () => {
  const email = useAppSelector(state => state.userReducer.email);
  const name = useAppSelector(state => state.userReducer.name);
  return (
    <NavigationContainer>
      <RootStack.Navigator>
        {email == '' && (
          <RootStack.Screen
            options={{
              headerShown: false,
            }}
            name="Login"
            component={LoginScreen}
          />
        )}
        {email != '' && (
          <RootStack.Screen
            options={{
              headerShown: false,
            }}
            name="Home"
            component={Home}
          />
        )}
      </RootStack.Navigator>
    </NavigationContainer>
  );
};

export default RootNavigation;

const styles = StyleSheet.create({});
