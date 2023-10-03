import React from 'react'
import { View, Text, Image, TouchableOpacity } from 'react-native';


export default function Friend() {
    return (
        <>
            <View style={{ marginHorizontal: 20, marginTop: 10 }}>
                <Text style={{ color: "#19295C", fontSize: 20, fontWeight: '600' }}>Friends <Text style={{ color: "#99A1BE", fontSize: 15, fontWeight: '400' }}>(3024, mutual)</Text></Text>
            </View>
            <View style={{ height: 1, backgroundColor: '#F1F4F5', marginTop: 10, marginHorizontal: 20 }} />

            <View style={{ flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center', marginHorizontal: 20, marginTop: 10 }}>
                <View style={{ height: 70, position: 'relative' }}>
                    <View style={{ height: 70, width: 70, borderRadius: 35, position: 'absolute', overflow: 'hidden', borderWidth: 3, borderColor: '#FFFFFF', zIndex: 6 }}>
                        <Image source={require('../../assets/person-1.jpg')} resizeMode='contain' style={{ height: '100%', width: '100%' }} />
                    </View>
                    <View style={{ height: 70, width: 70, borderRadius: 35, position: 'absolute', left: 40, overflow: 'hidden', borderWidth: 3, borderColor: '#FFFFFF', zIndex: 5 }}>
                        <Image source={require('../../assets/person-2.jpg')} resizeMode='contain' style={{ height: '100%', width: '100%' }} />
                    </View>
                    <View style={{ height: 70, width: 70, borderRadius: 35, position: 'absolute', left: 80, overflow: 'hidden', borderWidth: 3, borderColor: '#FFFFFF', zIndex: 4 }}>
                        <Image source={require('../../assets/person-3.jpg')} resizeMode='contain' style={{ height: '100%', width: '100%' }} />
                    </View>
                    <View style={{ height: 70, width: 70, borderRadius: 35, position: 'absolute', left: 120, overflow: 'hidden', borderWidth: 3, borderColor: '#FFFFFF', zIndex: 3 }}>
                        <Image source={require('../../assets/person-4.jpg')} resizeMode='contain' style={{ height: '100%', width: '100%' }} />
                    </View>
                    <View style={{ height: 70, width: 70, borderRadius: 35, position: 'absolute', left: 160, overflow: 'hidden', borderWidth: 3, borderColor: '#FFFFFF', zIndex: 2 }}>
                        <Image source={require('../../assets/person-1.jpg')} resizeMode='contain' style={{ height: '100%', width: '100%' }} />
                    </View>
                    <View style={{ height: 70, width: 70, borderRadius: 35, position: 'absolute', left: 200, overflow: 'hidden', borderWidth: 3, borderColor: '#FFFFFF', zIndex: 1 }}>
                        <Image source={require('../../assets/person-2.jpg')} resizeMode='contain' style={{ height: '100%', width: '100%' }} />
                    </View>
                </View>
                <TouchableOpacity>
                    <Text style={{ color: "#1877F2", fontSize: 15, fontWeight: '500' }}>see all</Text>
                </TouchableOpacity>
            </View>
        </>
    )
}