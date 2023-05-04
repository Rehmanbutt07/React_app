import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { NavigationContainer } from '@react-navigation/native';
import LoginScreen from './screens/LoginScreen';
import NavigationScreen from './screens/NavigationScreen';
import DepositeScreen from './screens/DepositeScreen';
import WithdrawScreen from './screens/WithdrawScreen';
import AboutUsPage from './screens/AboutUsScreen';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { Ionicons } from '@expo/vector-icons';

const Tab = createBottomTabNavigator();
export default function App() {
  return (

    <NavigationContainer>

      {/* <Tab.Navigator screenOptions={({ route }) => ({
        tabBarIcon: ({ focused, color, size }) => {
          let iconName;

          if (route.name === 'Home') {
            iconName = focused ? 'home' : 'home-outline';
          } else if (route.name === 'Withdraw') {
            iconName = focused ? 'arrow-down-circle' : 'arrow-down-circle-outline';
          } else if (route.name === 'Deposit') {
            iconName = focused ? 'arrow-up-circle' : 'arrow-up-circle-outline';
          } else if (route.name === 'About Us') {
            iconName = focused ? 'information-circle' : 'information-circle-outline';
          }

          // You can return any component that you like here!
          return <Ionicons name={iconName} size={size} color={color} />;
        },
      })}
        tabBarOptions={{
          activeTintColor: 'tomato',
          inactiveTintColor: 'gray',
        }}
      >
        
        <Tab.Screen name="Home" component={HomeScreen} />
        <Tab.Screen name="Withdraw" component={WithdrawScreen} />
        <Tab.Screen name="Deposit" component={DepositeScreen} />
        <Tab.Screen name="About Us" component={AboutUsPage} />
      </Tab.Navigator> */}
      <Stack.Navigator>
        <Stack.Screen name="Login" component={LoginScreen} />
        <Stack.Screen name="Main" component={NavigationScreen} />
        {/* <Stack.Screen name="Home" component={HomeScreen} /> */}
      </Stack.Navigator>
    </NavigationContainer >
  );
}
const Stack = createNativeStackNavigator();
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
