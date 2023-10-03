import { View, Text, Image, TouchableOpacity } from 'react-native'
import React from 'react'
import { Entypo, AntDesign } from '@expo/vector-icons';

export default function Profile() {
    return (
        <>
            <View style={{ backgroundColor: '#FFFFFF', borderRadius: 14, flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center', padding: 20, marginHorizontal: 20, marginTop: 20 }}>
                <View style={{ flexDirection: 'row' }}>
                    <TouchableOpacity style={{ height: 40, width: 40, borderRadius: 40 / 2, alignItems: 'center', justifyContent: 'center', overflow: 'hidden', marginRight: 7 }}>
                        <Image source={require('../../assets/person-6.jpg')} resizeMode='cover' style={{ width: '100%', height: '100%' }} />
                    </TouchableOpacity>
                    <View>
                        <Text style={{ color: "#19295C", fontSize: 18, fontWeight: '500' }}>Mark Ramous</Text>
                        <View style={{ flexDirection: 'row', alignItems: 'center' }}>
                            <Text style={{ color: "#2D3F7B", fontSize: 11 }}>@mark_ramous</Text>
                        </View>
                    </View>
                </View>
                <View style={{ flexDirection: 'row' }}>
                    <TouchableOpacity style={{ height: 30, width: 30, borderRadius: 30 / 2, backgroundColor: '#F1F4F5', justifyContent: 'center', alignItems: 'center', marginRight: 7 }}>
                        <Entypo name="plus" size={18} color="#2D3F7B" />
                    </TouchableOpacity>
                    <TouchableOpacity style={{ height: 30, width: 30, borderRadius: 30 / 2, backgroundColor: '#F1F4F5', justifyContent: 'center', alignItems: 'center' }}>
                        <AntDesign name="down" size={18} color="#2D3F7B" />
                    </TouchableOpacity>
                </View>
            </View>
        </>
    )
}