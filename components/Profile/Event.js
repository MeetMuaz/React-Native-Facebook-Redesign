import React from 'react'
import { View, Text, TouchableOpacity } from 'react-native';
import { Ionicons, FontAwesome5, MaterialCommunityIcons } from '@expo/vector-icons';

export default function Event() {
    return (
        <>
            <View style={{ height: 1, backgroundColor: '#F1F4F5', marginTop: 20, marginHorizontal: 20 }} />
            <View style={{ marginHorizontal: 20, marginTop: 20, flexDirection: 'row' }}>
                <TouchableOpacity style={{ backgroundColor: '#F1F4F5', paddingVertical: 6, paddingHorizontal: 10, borderRadius: 20, flexDirection: 'row', alignItems: 'center' }}>
                    <Ionicons name="image" size={16} color="#1877F2" />
                    <Text style={{ color: '#19295C', fontSize: 14, marginLeft: 5 }}>Photos</Text>
                </TouchableOpacity>
                <TouchableOpacity style={{ backgroundColor: '#F1F4F5', paddingVertical: 6, paddingHorizontal: 10, borderRadius: 20, flexDirection: 'row', alignItems: 'center', marginLeft: 5 }}>
                    <FontAwesome5 name="calendar-day" size={16} color="#1877F2" />
                    <Text style={{ color: '#19295C', fontSize: 14, marginLeft: 5 }}>Events</Text>
                </TouchableOpacity>
                <TouchableOpacity style={{ backgroundColor: '#F1F4F5', paddingVertical: 6, paddingHorizontal: 10, borderRadius: 20, flexDirection: 'row', alignItems: 'center', marginLeft: 5 }}>
                    <MaterialCommunityIcons name="play-box" size={16} color="#1877F2" />
                    <Text style={{ color: '#19295C', fontSize: 14, marginLeft: 5 }}>Reels</Text>
                </TouchableOpacity>
            </View>
            <View style={{ height: 1, backgroundColor: '#F1F4F5', marginTop: 20, marginHorizontal: 20 }} />
        </>
    )
}