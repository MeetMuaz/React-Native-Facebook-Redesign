import { View, Text, TouchableOpacity, Image, FlatList } from 'react-native'
import React from 'react'
import { Entypo, SimpleLineIcons } from '@expo/vector-icons'
import { earlierNotification } from '../../storage/notification'

const Component = ({ item }) => {
    return (
        item.type === 'friend_request' ?

            <TouchableOpacity style={{ backgroundColor: '#FFFFFF', borderRadius: 14, padding: 10, flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center', marginTop: 10 }}>
                <View style={{ flex: 1, flexDirection: 'row', justifyContent: 'space-between', flexGrow: 8 }}>
                    <View style={{ position: 'relative' }}>
                        <Image source={item.image_uri} style={{ height: 60, width: 60, borderRadius: 30, marginRight: 10 }} />
                        <View style={{ position: 'absolute', bottom: 10, right: 10, height: 24, width: 24, backgroundColor: item.noteColor, borderRadius: 12, justifyContent: 'center', alignItems: 'center' }}>
                            {item.noteIcon}
                        </View>
                    </View>
                    <View>
                        <Text style={{ fontSize: 14, color: '#2D3F7B' }}>Rachel Podrez sent you a friend requests</Text>
                        <View style={{ flexDirection: 'row', marginTop: 10 }}>
                            <TouchableOpacity style={{ backgroundColor: '#1877F2', paddingHorizontal: 30, paddingVertical: 6, marginRight: 7, borderRadius: 30 }}>
                                <Text style={{ color: '#FFFFFF', fontSize: 14, fontWeight: 500 }}>Accept</Text>
                            </TouchableOpacity>
                            <TouchableOpacity style={{ backgroundColor: '#F1F4F5', paddingHorizontal: 30, paddingVertical: 6, borderRadius: 30 }}>
                                <Text style={{ color: '#1877F2', fontSize: 14, fontWeight: 500 }}>Reject</Text>
                            </TouchableOpacity>
                        </View>
                    </View>
                </View>
                <View style={{ flexGrow: 2, justifyContent: 'flex-end', flexDirection: 'row' }}>
                    <TouchableOpacity>
                        <SimpleLineIcons name="options-vertical" size={20} color="#99A1BE" />
                    </TouchableOpacity>
                </View>
            </TouchableOpacity>

            :

            <TouchableOpacity style={{ backgroundColor: '#FFFFFF', borderRadius: 14, padding: 10, flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center', marginTop: 10 }}>
                <View style={{ flex: 1, flexDirection: 'row', justifyContent: 'space-between', flexGrow: 8 }}>
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
    );

}

export default function EarlierNotification() {
    return (
        <View style={{ marginHorizontal: 13, marginTop: 20 }}>
            <Text style={{ color: '#99A1BE', fontSize: 16, marginBottom: 10 }}>Earlier</Text>
            <FlatList
                data={earlierNotification}
                renderItem={({ item }) => <Component item={item} />}
                keyExtractor={(item) => item.id}
            />
        </View>
    )
}