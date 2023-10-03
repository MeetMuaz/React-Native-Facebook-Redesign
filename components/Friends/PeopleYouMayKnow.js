import { View, Text, TouchableOpacity, Image, FlatList } from 'react-native'
import React from 'react'
import { peopleYouMayKnow } from '../../storage/friend'

export default function PeopleYouMayKnow() {
    return (
        <>
            <View style={{ marginHorizontal: 20, marginTop: 25, flexDirection: 'row', justifyContent: 'space-between', alignItems: 'flex-end' }}>
                <Text style={{ color: "#19295C", fontSize: 20, fontWeight: '600' }}>People you may know</Text>
                <TouchableOpacity>
                    <Text style={{ color: "#1877F2", fontSize: 15, fontWeight: '500' }}>see all</Text>
                </TouchableOpacity>
            </View>
            <View style={{ marginTop: 20 }}>
                <FlatList
                    data={peopleYouMayKnow}
                    renderItem={({ item }) => <Component item={item} />}
                    keyExtractor={(item) => item.id}
                    horizontal={true}
                    showsHorizontalScrollIndicator={false}
                />
            </View>
        </>
    )
}

const Component = ({ item }) => {
    return (
        <TouchableOpacity style={{ backgroundColor: '#FFFFFF', borderRadius: 14, padding: 20, flexDirection: 'column', justifyContent: 'space-between', width: 180, height: 213, marginLeft: item.id === 1 ? 20 : 0, marginRight: 10, }}>
            <View style={{ justifyContent: 'center', alignItems: 'center' }}>
                <View style={{ flexDirection: 'column', alignItems: 'center' }}>
                    <Image source={item.image_uri} style={{ height: 60, width: 60, borderRadius: 30 }} />
                    <Text style={{ fontSize: 16, color: '#19295C', fontWeight: '500', marginTop: 7 }}>{item.name}</Text>
                    <View style={{ flexDirection: 'row', marginTop: 7 }}>
                        <View style={{ flexDirection: 'row', position: 'relative', width: 28 }}>
                            <View style={{ height: 16, width: 16, borderRadius: 8, position: 'absolute', overflow: 'hidden', borderWidth: 1, borderColor: '#FFFFFF', zIndex: 2 }}>
                                <Image source={item.mutal_friend_images[0]} resizeMode='cover' style={{ height: '100%', width: '100%' }} />
                            </View>
                            <View style={{ height: 16, width: 16, borderRadius: 8, position: 'absolute', left: 12, overflow: 'hidden', borderWidth: 1, borderColor: '#FFFFFF', zIndex: 1 }}>
                                <Image source={item.mutal_friend_images[1]} resizeMode='cover' style={{ height: '100%', width: '100%' }} />
                            </View>
                        </View>
                        <Text style={{ fontSize: 10, marginLeft: 7 }}>{item.mutal_friend}</Text>
                    </View>
                </View>
            </View>
            <TouchableOpacity style={{ backgroundColor: '#1877F2', paddingVertical: 6, borderRadius: 30, justifyContent: 'center', alignItems: 'center' }}>
                <Text style={{ color: '#FFFFFF', fontSize: 14, fontWeight: '500' }}>Add Friend</Text>
            </TouchableOpacity>
        </TouchableOpacity>
    )
}