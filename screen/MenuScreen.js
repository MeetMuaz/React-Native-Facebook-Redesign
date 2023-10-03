import React from 'react'
import { View, Text, TouchableOpacity, Image, FlatList } from 'react-native';
import Header from '../components/Header';
import { Entypo, AntDesign, FontAwesome, FontAwesome5, Ionicons } from '@expo/vector-icons';
import { ScrollView } from 'react-native-virtualized-view'
import { HelpCenter, Profile, ShortCut } from '../components/menu';
import Group from '../components/menu/Group';

const data = [
    { id: '1', title: 'My Activities', icon: <AntDesign name="heart" size={24} color='#FF0000' /> },
    { id: '2', title: 'Videos & Reels', icon: <FontAwesome name="video-camera" size={24} color="#07A6FF" /> },
    { id: '3', title: 'Memories', icon: <AntDesign name="clockcircle" size={24} color="#65F40D" /> },
    { id: '4', title: 'Marketplace', icon: <FontAwesome5 name="shopping-bag" size={24} color="#D400F6" /> },
    { id: '5', title: 'Saved posts', icon: <FontAwesome name="bookmark" size={24} color="#01DDEB" /> },
    { id: '6', title: 'My Games', icon: <FontAwesome5 name="gamepad" size={24} color="#F6DF0B" /> },
];

const GridComponent = ({ item }) => {
    return (
        <TouchableOpacity style={{ flex: 1, justifyContent: 'center', alignItems: 'flex-start', margin: 8, height: 60, borderRadius: 14, backgroundColor: '#FFFFFF' }}>
            <View style={{ marginLeft: 20, flexDirection: 'row', alignItems: 'center' }}>
                {item.icon}
                <Text style={{ fontSize: 14, color: '#19295C', fontWeight: '500', marginLeft: 7 }}>{item.title}</Text>
            </View>
        </TouchableOpacity>
    );
}

const GridScreen = () => {
    return (
        <View style={{ flex: 1 }}>
            <FlatList
                data={data}
                numColumns={2}
                renderItem={({ item }) => <GridComponent item={item} />}
                keyExtractor={(item) => item.id}
            />
        </View>
    );
}


function MenuScreen() {
    const setting = true;
    const search = true;
    return (
        <>
            {/* account details */}
            <Header title='Menu'
                search={search}
                setting={setting}
            />
            <ScrollView>
                <Profile />
                <Group />
                <ShortCut />
                <HelpCenter />
                <View style={{ marginBottom: 50 }} />
            </ScrollView>
        </>
    );
}

export default MenuScreen;