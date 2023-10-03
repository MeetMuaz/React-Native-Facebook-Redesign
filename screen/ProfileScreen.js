import React from 'react';
import { View } from 'react-native';
import { ScrollView } from 'react-native-virtualized-view';
import { AboutMe, Country, Event, Friend, PinnedPost } from '../components/Profile';

export default function ProfileScreen() {
    return (
        <ScrollView style={{ backgroundColor: '#FFFFFF' }}>
            <AboutMe />
            <Country />
            <Event />
            <Friend />
            <PinnedPost />
            <View style={{ marginBottom: 50 }} />
        </ScrollView >
    )
}