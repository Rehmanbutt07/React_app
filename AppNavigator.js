import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import NavigationScreen from './screens/NavigationScreen';
import LoginScreen from './screens/LoginScreen';



const AppNavigator = () => {
    return (
        <Stack.Navigator initialRouteName="Login">
            <Stack.Screen name="Login" component={LoginScreen} />
            <Stack.Screen name="Navigation" component={NavigationScreen} />
        </Stack.Navigator>
    );
};
const Stack = createNativeStackNavigator();
export default AppNavigator;
