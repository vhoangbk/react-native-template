import {createStackNavigator} from '@react-navigation/stack';
import React from 'react';
import Login from '@components/login';
import Home from '@components/home';

const Stack = createStackNavigator();

const AuthStack = () => {

  return (
    <Stack.Navigator>
      <Stack.Screen
        name="Login"
        component={Login}
        options={{headerShown: false}}
      />
      <Stack.Screen
        name="Home"
        component={Home}
        options={{headerShown: true}}
      />
    </Stack.Navigator>
  );
};

export default AuthStack;