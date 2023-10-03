import React from 'react'
import { View, Text, TouchableOpacity } from 'react-native';
import { FontAwesome, Ionicons } from '@expo/vector-icons';

export default function HelpCenter() {
    return (
        <>
            <View style={{ marginHorizontal: 20, marginTop: 25, flexDirection: 'row', justifyContent: 'space-between', alignItems: 'flex-end' }}>
                <Text style={{ color: "#19295C", fontSize: 20, fontWeight: '600' }}>Help & Support</Text>
            </View>
            <TouchableOpacity style={{ backgroundColor: '#FFFFFF', borderRadius: 14, padding: 20, marginHorizontal: 20, marginTop: 20, flexDirection: 'row', alignItems: 'center' }}>
                <Ionicons name="chatbox" size={24} color="#99A1BE" />
                <Text style={{ fontSize: 16, color: '#99A1BE', marginLeft: 7 }}>Help and Support</Text>
            </TouchableOpacity>
            <TouchableOpacity style={{ backgroundColor: '#FFFFFF', borderRadius: 14, padding: 20, marginHorizontal: 20, marginTop: 20, flexDirection: 'row', alignItems: 'center' }}>
                <FontAwesome name="file-text" size={24} color="#99A1BE" />
                <Text style={{ fontSize: 16, color: '#99A1BE', marginLeft: 7 }}>Terms & Policies</Text>
            </TouchableOpacity>
            <TouchableOpacity style={{ backgroundColor: '#FFFFFF', borderRadius: 14, padding: 20, marginHorizontal: 20, marginTop: 20, flexDirection: 'row', alignItems: 'center' }}>
                <Ionicons name="log-out" size={24} color="#F72B2B" />
                <Text style={{ fontSize: 16, color: '#F72B2B', marginLeft: 7 }}>Log out</Text>
            </TouchableOpacity>
        </>
    )
}