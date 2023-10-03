import { View, Text, Dimensions, TouchableOpacity } from 'react-native'
import React from 'react'
import { Ionicons, FontAwesome, FontAwesome5, AntDesign } from '@expo/vector-icons';

const windowWidth = Dimensions.get('window').width;

export default function Header({ title, goToNotification, facebook, setting, notification, search, messager, home }) {
    return (
        <View style={{ height: home ? 220 : 110, width: windowWidth, backgroundColor: '#FFFFFF', borderBottomEndRadius: 24, borderBottomStartRadius: 24, padding: 20 }}>
            <View style={{ flex: 1, flexDirection: 'row', alignItems: 'flex-end', justifyContent: 'space-between' }}>
                <View style={{ flexDirection: 'row' }}>
                    {facebook && <FontAwesome5 name="facebook" size={34} color="#1877F2" />}
                    <Text style={{ fontWeight: '500', fontSize: 22, color: '#1877F2' }}>{title}</Text>
                </View>
                <View style={{ flexDirection: 'row' }}>
                    {setting && <TouchableOpacity style={{ height: 30, width: 30, borderRadius: 30 / 2, backgroundColor: '#F1F4F5', justifyContent: 'center', alignItems: 'center', marginLeft: 7 }}>
                        <Ionicons name="settings" size={18} color="#2D3F7B" />
                    </TouchableOpacity>}
                    {search && <TouchableOpacity style={{ height: 30, width: 30, borderRadius: 30 / 2, backgroundColor: '#F1F4F5', justifyContent: 'center', alignItems: 'center', marginLeft: 7 }}>
                        <FontAwesome name="search" size={18} color="#2D3F7B" />
                    </TouchableOpacity>}
                    {notification && <TouchableOpacity style={{ height: 30, width: 30, borderRadius: 30 / 2, backgroundColor: '#F1F4F5', justifyContent: 'center', alignItems: 'center', marginLeft: 7 }} onPress={goToNotification}>
                        <FontAwesome name="bell" size={18} color="#2D3F7B" />
                    </TouchableOpacity>}
                    {messager && <TouchableOpacity style={{ height: 30, width: 30, borderRadius: 30 / 2, backgroundColor: '#F1F4F5', justifyContent: 'center', alignItems: 'center', marginLeft: 7 }} onPress={goToNotification}>
                        <FontAwesome5 name="facebook-messenger" size={18} color="#1877F2" />
                    </TouchableOpacity>}
                </View>
            </View>
            {home && <View>
                <View style={{ height: 1, backgroundColor: '#F1F4F5', marginTop: 10 }} />
                <Text style={{ color: '#99A1BE', fontSize: 15, marginTop: 20 }}>What's on your mind, Muaz?</Text>
                <View style={{ flexDirection: 'row', justifyContent: 'space-between', marginTop: 20 }}>
                    <TouchableOpacity style={{ backgroundColor: '#F1F4F5', borderRadius: 10, height: 36, width: 105, paddingVertical: 6, justifyContent: 'center', alignItems: 'center' }}>
                        <View style={{ flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center' }}>
                            <Ionicons name="camera" size={20} color="#63C48C" />
                            <Text style={{ color: '#535767', marginLeft: 5, fontSize: 12 }}>Photo/video</Text>
                        </View>
                    </TouchableOpacity>
                    <TouchableOpacity style={{ backgroundColor: '#F1F4F5', borderRadius: 10, height: 36, width: 105, paddingVertical: 6, justifyContent: 'center', alignItems: 'center' }}>
                        <View style={{ flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center' }}>
                            <Ionicons name="videocam" size={20} color="#F31954" />
                            <Text style={{ color: '#535767', marginLeft: 5, fontSize: 12 }}>Live video</Text>
                        </View>
                    </TouchableOpacity>
                    <TouchableOpacity style={{ backgroundColor: '#F1F4F5', borderRadius: 10, height: 36, width: 105, paddingVertical: 6, justifyContent: 'center', alignItems: 'center' }}>
                        <View style={{ flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center' }}>
                            <AntDesign name="eye" size={24} color="#1877F2" />
                            <Text style={{ color: '#535767', marginLeft: 5, fontSize: 12 }}>Check in</Text>
                        </View>
                    </TouchableOpacity>
                </View>
            </View>}
        </View>
    )
}