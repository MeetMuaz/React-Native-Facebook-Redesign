import { View, Text, TouchableOpacity, FlatList, Image } from 'react-native'
import React from 'react'
import group from '../../storage/group'

export default function Group() {
    return (
        <>
            <View style={{ marginHorizontal: 20, marginTop: 25, flexDirection: 'row', justifyContent: 'space-between', alignItems: 'flex-end' }}>
                <Text style={{ color: "#19295C", fontSize: 20, fontWeight: '600' }}>Your Groups</Text>
                <TouchableOpacity>
                    <Text style={{ color: "#1877F2", fontSize: 15, fontWeight: '500' }}>see all</Text>
                </TouchableOpacity>
            </View>
            <View style={{ marginLeft: 0, marginTop: 20 }}>
                <FlatList
                    showsHorizontalScrollIndicator={false}
                    data={group}
                    horizontal={true}
                    renderItem={({ item }) => <Component item={item} />}
                    keyExtractor={(item) => item.id}
                />
            </View>
        </>
    )
}

const Component = ({ item }) => {
    return (
        <TouchableOpacity style={{ marginLeft: item.id === 1 ? 20 : 10, flexDirection: 'column', alignItems: 'center', borderRadius: 24, }}>
            <View style={{ height: 100, width: 100, borderRadius: 8, overflow: 'hidden' }}>
                <Image source={item.uri} resizeMode='cover' style={{ height: 100, width: 100 }} />
            </View>
            <Text style={{ fontSize: 12, color: '#99A1BE', marginTop: 3 }}>
                {item.title.length > 12 ? `${item.title.slice(0, 12)}...` : item.title}
            </Text>
        </TouchableOpacity>
    )
}