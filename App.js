/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React from 'react'
import Icon from 'react-native-vector-icons/Ionicons';
import Icon2 from 'react-native-vector-icons/MaterialCommunityIcons';
import { SafeAreaProvider, SafeAreaView } from 'react-native-safe-area-context';
import {
  ScrollView,
  StyleSheet,
  Text,
  View,
} from 'react-native';
import BusType from './src/BusType/BusType';
import Destination from './src/originDestination/Destination';
import BookingSeat from './src/SeatBooking/BookingSeat';
import Auth from './src/Authentication/Auth';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { NavigationContainer } from '@react-navigation/native';
const Tab = createBottomTabNavigator();

const App = () => {
  return (
    <SafeAreaProvider>
      <NavigationContainer>
        <Tab.Navigator>
          <Tab.Screen options={{
            headerShown: false, tabBarIcon: ({ tintColor }) => (
              <Icon name='home-outline' size={25} color="#1c1159" />
            )
          }} name="Book" component={BusType} />
          <Tab.Screen options={{
            headerShown: false, tabBarIcon: ({ tintColor }) => (
              <Icon2 name='ticket-confirmation-outline' size={25} color="#1c1159" />
            )
          }} name="My Ticket" component={Destination} />
          <Tab.Screen options={{
            headerShown: false, tabBarIcon: ({ tintColor }) => (
              <Icon name='notifications-outline' size={25} color="#1c1159" />
            )
          }} name="Seat Booking" component={Auth} />
        </Tab.Navigator>
      </NavigationContainer>
    </SafeAreaProvider>
  );
};
export default App;
