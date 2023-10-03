import { View, Text, TouchableOpacity, Image, FlatList } from 'react-native'
import React from 'react'
import { Entypo } from '@expo/vector-icons'
import { newNotification } from '../../storage/notification'

const Component = ({ item }) => {
    return (
        <>
            <TouchableOpacity style={{ backgroundColor: '#FFFFFF', borderRadius: 14, padding: 10, flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center', marginTop: 10 }}>
                <View style={{ flex: 1, flexDirection: 'row', justifyContent: 'space-between', flexGrow: 9 }}>
                    <View style={{ position: 'relative' }}>
                        <Image source={item.image_uri} style={{ height: 60, width: 60, borderRadius: 30, marginRight: 10 }} />
                        <View style={{ position: 'absolute', bottom: 10, right: 10, height: 24, width: 24, backgroundColor: item.noteColor, borderRadius: 12, justifyContent: 'center', alignItems: 'center' }}>
                            {item.noteIcon}
                        </View>
                    </View>
                    <View>
                        <Text style={{ fontSize: 14, color: '#2D3F7B' }}>{item.message}</Text>
                        <Text style={{ color: '#1877F2', fontSize: 10, marginTop: 3 }}>{item.time}</Text>
                    </View>
                </View>
                <View style={{ flexGrow: 2, justifyContent: 'flex-end', flexDirection: 'row' }}>
                    {item.isOnline && <Entypo name="dot-single" size={35} color="#1877F2" />}
                </View>
            </TouchableOpacity>
        </>
    )
}

export default function NewNotification() {
    return (
        <View style={{ marginHorizontal: 13, marginTop: 20 }}>
            <Text style={{ color: '#99A1BE', fontSize: 16, marginBottom: 10 }}>New</Text>
            <FlatList
                data={newNotification}
                renderItem={({ item }) => <Component item={item} />}
                keyExtractor={(item) => item.id}
            />
        </View>
    )
}