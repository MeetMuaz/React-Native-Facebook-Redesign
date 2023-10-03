import React from 'react'
import { View, TouchableOpacity, Image, Text, FlatList } from 'react-native';
import { Entypo, Ionicons, SimpleLineIcons } from '@expo/vector-icons';
import Header from '../components/Header';
import { NewNotification, EarlierNotification } from '../components/notification';
import { ScrollView } from 'react-native-virtualized-view';

function NotificationScreen() {
    const search = true;

    return (
        <>
            <Header title={'Notifications'} search={search} />
            <ScrollView>
                <NewNotification />
                <EarlierNotification />
                <View style={{ marginBottom: 50 }} />
            </ScrollView>
        </>
    );
}

export default NotificationScreen;