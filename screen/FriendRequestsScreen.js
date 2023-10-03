import React from 'react'
import { View, Text, TouchableOpacity, Image } from 'react-native';
import Header from '../components/Header';
import { Entypo, AntDesign, FontAwesome, FontAwesome5, Ionicons } from '@expo/vector-icons';
import { ScrollView } from 'react-native-virtualized-view';
import FriendRequest from '../components/Friends/FriendRequest';
import PeopleYouMayKnow from '../components/Friends/PeopleYouMayKnow';

function FriendRequestsScreen() {
    const search = true;
    return (
        <>
            <Header title='Friend requests' search={search} />
            <ScrollView>
                <FriendRequest />
                <PeopleYouMayKnow />
                <View style={{ marginBottom: 50 }} />
            </ScrollView>
        </>
    );
}

export default FriendRequestsScreen;