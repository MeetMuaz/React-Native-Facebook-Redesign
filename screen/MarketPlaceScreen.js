import React from 'react'
import { View, Text, TouchableOpacity, FlatList, Image } from 'react-native';
import Header from '../components/Header';
import { AntDesign, FontAwesome, FontAwesome5 } from '@expo/vector-icons';
import { ScrollView } from 'react-native-virtualized-view';
import { FollowAndFilter, Product } from '../components/Mart';

function MarketPlaceScreen() {
    const search = true;
    return (
        <View style={{ flex: 1 }}>
            <Header title='Marketplace' search={search} />
            <ScrollView>
                <FollowAndFilter />
                <Product />
                <View style={{ marginBottom: 50 }} />
            </ScrollView>
        </View>
    );
}

export default MarketPlaceScreen;