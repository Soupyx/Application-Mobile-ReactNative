import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import HomePage from './HomePage';
import MoreInfoPage from './MoreInfoPage';
import SignUpPage from './SignUpPage';
import SignInPage from './SignInPage';
import Game from './game';
import SignUpConfirmationPage from './SignUpConfirmationPage'; 
const Stack = createStackNavigator();

const App = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Home">
        <Stack.Screen name="Home" component={HomePage} />
        <Stack.Screen name="MoreInfo" component={MoreInfoPage} />
        <Stack.Screen name="SignUp" component={SignUpPage} /> 
        <Stack.Screen name="SignIn" component={SignInPage} />
        <Stack.Screen name="Game" component={Game} />
        <Stack.Screen name="SignUpConfirmationPage" component={SignUpConfirmationPage} /> 
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default App;
