import { View, TextInput, KeyboardAvoidingView, Text, TouchableOpacity, Image } from 'react-native'
import React, { useState } from 'react'
import { AntDesign, Entypo, FontAwesome, MaterialIcons, Fontisto } from '@expo/vector-icons';

export default function ReelsCreatorInfo() {
    const [like, setLike] = useState(false);

    const handleLike = () => {
        setLike(!like)
    }

    return (
        <KeyboardAvoidingView
            behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
            style={{ flex: 1 }}
        >
            <View
                style={{
                    position: 'absolute',
                    bottom: 10,
                    left: '5%',
                    right: '5%',
                    flex: 1,
                    flexDirection: 'column',
                    justifyContent: 'space-between',
                    zIndex: 1,
                }}>
                <View style={{ flex: 1, flexDirection: 'row', justifyContent: 'space-between' }}>
                    <View style={{ alignSelf: 'flex-end' }}>
                        <View style={{ flexDirection: 'row' }}>
                            <TouchableOpacity style={{ height: 40, width: 40, borderRadius: 40 / 2, alignItems: 'center', justifyContent: 'center', overflow: 'hidden', marginBottom: 10, marginRight: 7 }}>
                                <Image source={require('../../assets/person-2.jpg')} resizeMode='cover' style={{ width: '100%', height: '100%' }} />
                            </TouchableOpacity>
                            <View>
                                <Text style={{ color: "#FFFFFF", fontSize: 11, fontWeight: '500' }}>Mark Ramous</Text>
                                <View style={{ flexDirection: 'row', alignItems: 'center' }}>
                                    <Fontisto name="world" size={11} color="#FFFFFF" style={{ marginRight: 3 }} />
                                    <Text style={{ color: "#FFFFFF", fontSize: 11 }}>Public</Text>
                                </View>
                            </View>
                        </View>
                        <Text style={{ color: "#FFFFFF", fontSize: 11 }}>Look what we found down here! 😂</Text>
                        <Text style={{ color: "#FFFFFF", fontSize: 9, marginBottom: 10 }}>#adventure #nature #diving … more</Text>
                        <TouchableOpacity style={{ flexDirection: 'row', alignItems: 'center', marginBottom: 10 }}>
                            <Text style={{ color: "#FFFFFF", fontSize: 11 }}>Audio{' '}</Text>
                            <MaterialIcons name="multitrack-audio" size={12} color="#FFFFFF" />
                            <Text style={{ color: "#FFFFFF", fontSize: 11 }}>{' '}Original</Text>
                        </TouchableOpacity>
                    </View>
                    <View>
                        <View style={{ marginBottom: 20, width: 35, flexDirection: 'column', alignItems: 'center' }}>
                            <TouchableOpacity style={{ height: 35, width: 35, borderRadius: 30 / 2, backgroundColor: '#2F2F2F', justifyContent: 'center', alignItems: 'center' }} onPress={() => handleLike()}>
                                <AntDesign name="like1" size={15} color={like ? "#FF3E3E" : "#FFFFFF"} />
                            </TouchableOpacity>
                            <Text style={{ color: '#FFFFFF' }}>11k</Text>
                        </View>
                        <View style={{ marginBottom: 20, width: 35, flexDirection: 'column', alignItems: 'center' }}>
                            <TouchableOpacity style={{ height: 35, width: 35, borderRadius: 30 / 2, backgroundColor: '#2F2F2F', justifyContent: 'center', alignItems: 'center' }}>
                                <Entypo name="message" size={15} color="#FFFFFF" />
                            </TouchableOpacity>
                            <Text style={{ color: '#FFFFFF' }}>2.3k</Text>
                        </View>
                        <View style={{ marginBottom: 20, width: 35, flexDirection: 'column', alignItems: 'center' }}>
                            <TouchableOpacity style={{ height: 35, width: 35, borderRadius: 30 / 2, backgroundColor: '#2F2F2F', justifyContent: 'center', alignItems: 'center' }}>
                                <FontAwesome name="share" size={15} color="#FFFFFF" />
                            </TouchableOpacity>
                            <Text style={{ color: '#FFFFFF' }}>371</Text>
                        </View>
                    </View>
                </View>
                <View style={{ flex: 1, flexDirection: 'row', borderWidth: 1, borderColor: '#FFFFFF', borderRadius: 50 / 2, paddingHorizontal: 10, paddingVertical: 3, position: 'relative' }}>
                    <AntDesign name="smile-circle" size={15} color="#FFFFFF" style={{ position: 'absolute', right: 10, top: 10 }} />
                    <TextInput placeholder='Add a comment' placeholderTextColor='#FFFFFF'
                        style={{
                            flex: 1,
                            color: '#FFFFFF',
                            fontSize: 12,
                        }}
                    />
                </View>
            </View>
        </KeyboardAvoidingView>
    )
}