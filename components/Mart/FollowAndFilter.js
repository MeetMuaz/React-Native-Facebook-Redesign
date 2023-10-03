import React from 'react'
import { AntDesign, Ionicons } from '@expo/vector-icons';
import { View, Text, TouchableOpacity } from 'react-native';

export default function FollowAndFilter() {
    return (
        <>
            {/* folllow */}
            <TouchableOpacity style={{ backgroundColor: '#FFFFFF', marginHorizontal: 20, borderRadius: 14, padding: 20, marginTop: 20, flexDirection: 'row', alignItems: 'center' }}>
                <View style={{ height: 60, width: 60, borderRadius: 30, backgroundColor: '#283544', justifyContent: 'center', alignItems: 'center', marginRight: 25 }}>
                    <AntDesign name="apple1" size={24} color="#FFFFFF" />
                </View>
                <View style={{ marginRight: 20 }}>
                    <Text style={{ color: '#2D3F7B', fontSize: 16, fontWeight: '400' }}>FOLLOW</Text>
                    <Text style={{ fontSize: 13, color: '#2D3F7B' }}>17.4M</Text>
                </View>
                <View style={{ marginRight: 20 }}>
                    <Text style={{ color: '#2D3F7B', fontSize: 16, fontWeight: '400' }}>LIKE</Text>
                    <Text style={{ fontSize: 13, color: '#2D3F7B' }}>263M</Text>
                </View>
                <View style={{ marginRight: 20 }}>
                    <Text style={{ color: '#2D3F7B', fontSize: 16, fontWeight: '400' }}>BUY</Text>
                    <Text style={{ fontSize: 13, color: '#2D3F7B' }}>169K</Text>
                </View>
            </TouchableOpacity>

            {/* filter */}
            <View style={{ marginHorizontal: 20, marginTop: 20, flexDirection: 'row' }}>
                <TouchableOpacity style={{ height: 50, width: 100, borderRadius: 30, backgroundColor: '#1877F2', flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center', marginRight: 7, paddingHorizontal: 10 }}>
                    <Text style={{ fontSize: 18, color: '#FFFFFF' }}>Filter</Text>
                    <Ionicons name="md-options" size={24} color="#FFFFFF" />
                </TouchableOpacity>
                <TouchableOpacity style={{ height: 50, width: 50, borderRadius: 30, backgroundColor: '#1877F2', justifyContent: 'center', alignItems: 'center' }}>
                    <Ionicons name="chatbubble-ellipses" size={24} color="#FFFFFF" />
                </TouchableOpacity>
            </View>
        </>
    )
}