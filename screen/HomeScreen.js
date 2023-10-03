import React from 'react'
import { View, Text } from 'react-native';
import Header from '../components/Header';
import { useNavigation } from '@react-navigation/native';
import { Post1, Post2, Status } from '../components/Home';
import { ScrollView } from 'react-native-virtualized-view';


function HomeScreen() {
    const navigation = useNavigation();

    const goToNotification = () => {
        navigation.navigate('notification');
    }

    const messager = true;
    const facebook = true;
    const notification = true;
    const search = true;
    const home = true;

    return (
        <View style={{ flex: 1 }}>
            <Header
                navigation={navigation}
                goToNotification={goToNotification}
                messager={messager}
                facebook={facebook}
                notification={notification}
                search={search}
                home={home}
            />
            <ScrollView>
                <Status />
                <Post1 />
                <Post2 />
                <View style={{ marginBottom: 50 }} />
            </ScrollView>
        </View>
    );
}

export default HomeScreen;