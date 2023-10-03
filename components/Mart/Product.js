import { View, Text, TouchableOpacity, Image, FlatList } from 'react-native'
import { AntDesign, FontAwesome, FontAwesome5 } from '@expo/vector-icons';
import React from 'react'
import mart from '../../storage/mart';

const Component = ({ item }) => {
    return (
        <TouchableOpacity style={{ flex: 1, margin: 8, height: 333, backgroundColor: 'lightblue', borderRadius: 14, backgroundColor: '#FFFFFF', padding: 7 }}>
            <View style={{ backgroundColor: '#DBE4E7', height: 210, width: '100%', borderRadius: 16, justifyContent: 'center', alignItems: 'center', overflow: 'hidden' }}>
                <Image source={item.image_uri} style={{ height: 150 }} resizeMode='contain' />
            </View>
            <View style={{ marginTop: 10, flexDirection: 'row', alignItems: 'center', justifyContent: 'space-between' }}>
                <Text style={{ fontSize: 16, color: '#1877F2' }}>{item.price}</Text>
                <Text style={{ fontSize: 9, borderColor: '#99A1BE' }}>{item.status}</Text>
            </View>
            <Text style={{ marginTop: 15 }}>{item.description}</Text>
        </TouchableOpacity>
    );
}

export default function Product() {
    return (
        <View style={{
            marginHorizontal: 20 - 8,
            marginTop: 20 - 8,
        }}
        >
            <FlatList
                data={mart}
                numColumns={2}
                renderItem={({ item }) => <Component item={item} />}
                keyExtractor={(item) => item.id}
            />
        </View>
    )
}