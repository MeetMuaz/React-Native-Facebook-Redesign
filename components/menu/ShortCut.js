import { View, Text, TouchableOpacity, FlatList } from 'react-native'
import React from 'react'
import shortcut from '../../storage/shortcut';

const Component = ({ item }) => {
    return (
        <TouchableOpacity style={{ flex: 1, justifyContent: 'center', alignItems: 'flex-start', margin: 8, height: 60, backgroundColor: 'lightblue', borderRadius: 14, backgroundColor: '#FFFFFF' }}>
            <View style={{ marginLeft: 20, flexDirection: 'row', alignItems: 'center' }}>
                {item.icon}
                <Text style={{ fontSize: 14, color: '#19295C', fontWeight: '500', marginLeft: 7 }}>{item.title}</Text>
            </View>
        </TouchableOpacity>
    );
}

export default function ShortCut() {
    return (
        <>
            <View style={{ marginHorizontal: 20, marginTop: 25, flexDirection: 'row', justifyContent: 'space-between', alignItems: 'flex-end' }}>
                <Text style={{ color: "#19295C", fontSize: 20, fontWeight: '600' }}>Shortcuts</Text>
                <TouchableOpacity>
                    <Text style={{ color: "#1877F2", fontSize: 15, fontWeight: '500' }}>see all</Text>
                </TouchableOpacity>
            </View>
            <View style={{
                marginHorizontal: 20 - 8,
                marginTop: 20 - 8
            }}
            >
                <FlatList
                    data={shortcut}
                    numColumns={2}
                    renderItem={({ item }) => <Component item={item} />}
                    keyExtractor={(item) => item.id}
                />
            </View>
        </>
    )
}