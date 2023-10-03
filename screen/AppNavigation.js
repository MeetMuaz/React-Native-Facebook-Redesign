import * as React from 'react';
import { KeyboardAvoidingView } from 'react-native'
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import TabNavigation from './TabNavigation';
import ReelsScreen from './ReelsScreen';
import NotificationScreen from './Notification';
import ProfileScreen from './ProfileScreen';

const Stack = createNativeStackNavigator();

export default function AppNavigation() {
    return (
        <NavigationContainer>
            <Stack.Navigator
                initialRouteName='app'
                screenOptions={{ headerShown: false }}
            >
                <Stack.Screen name={'app'} component={TabNavigation} />
                <Stack.Screen name={'reels'} component={ReelsScreen} />
                <Stack.Screen name={'notification'} component={NotificationScreen} />
                <Stack.Screen name={'profile'} component={ProfileScreen} />
            </Stack.Navigator>
        </NavigationContainer>
    );
}