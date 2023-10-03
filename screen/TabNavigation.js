import React, { useCallback } from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { FontAwesome, FontAwesome5, Entypo, Ionicons } from '@expo/vector-icons'; // Assuming you're using Expo
import { useNavigation, useFocusEffect } from '@react-navigation/native';
import { TouchableOpacity, StyleSheet } from 'react-native'; // Assuming you're using React Native

// Import your screens here
import HomeScreen from './HomeScreen';
import ReelsScreen from './ReelsScreen';
import MarketPlaceScreen from './MarketPlaceScreen';
import FriendRequestsScreen from './FriendRequestsScreen';
import MenuScreen from './MenuScreen';

const Tab = createBottomTabNavigator();

export default function TabNavigation() {
    const navigation = useNavigation();

    useFocusEffect(
        useCallback(() => {
            const unsubscribe = navigation.addListener('tabPress', e => {
                e.preventDefault();
                navigation.navigate('reels');
            });

            return unsubscribe;
        }, [navigation])
    );

    return (
        <Tab.Navigator
            initialRouteName='app'
            screenOptions={({ route }) => ({
                headerShown: false,
                tabBarHideOnKeyboard: true,
                tabBarShowLabel: false,
                tabBarStyle: styles.tabBar,
                tabBarIcon: ({ focused, color, size }) => {
                    let iconName;

                    if (route.name === "home") {
                        iconName = <Entypo name="home" size={23} color={focused ? '#1877F2' : '#CFD7ED'} />;
                    }

                    if (route.name === "reels") {
                        iconName = (
                            <TouchableOpacity
                                onPress={() => navigation.navigate('reels')}
                                style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }} // Center the icon
                            >
                                <FontAwesome name="youtube-play" size={23} color={focused ? '#1877F2' : '#CFD7ED'} />
                            </TouchableOpacity>
                        );
                    }

                    if (route.name === "marketPlace") {
                        iconName = <FontAwesome name="shopping-cart" size={23} color={focused ? '#1877F2' : '#CFD7ED'} />;
                    }

                    if (route.name === "friendRequests") {
                        iconName = <FontAwesome5 name="user-friends" size={23} color={focused ? '#1877F2' : '#CFD7ED'} />;
                    }

                    if (route.name === "menu") {
                        iconName = <Ionicons name="grid" size={23} color={focused ? '#1877F2' : '#CFD7ED'} />;
                    }

                    return iconName;
                },
            })}
        >
            <Tab.Screen name="home" component={HomeScreen} />
            <Tab.Screen name="reels" component={ReelsScreen} />
            <Tab.Screen name="marketPlace" component={MarketPlaceScreen} />
            <Tab.Screen name="friendRequests" component={FriendRequestsScreen} />
            <Tab.Screen name="menu" component={MenuScreen} />
        </Tab.Navigator>
    )
}

const styles = StyleSheet.create({
    tabBar: {
        borderRadius: 80 / 2,
        height: 80,
    }
})