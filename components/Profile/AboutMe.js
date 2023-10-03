import { View, Text, Image, Dimensions, TouchableOpacity } from 'react-native';
import { MaterialIcons, Fontisto, Entypo, FontAwesome, Ionicons, FontAwesome5, MaterialCommunityIcons } from '@expo/vector-icons';
import React from 'react'

export default function AboutMe() {
    const width = Dimensions.get('window').width;
    return (
        <>
            <View style={{
                height: 200,
                width: width,
                position: 'relative'
            }}>
                <Image source={require('../../assets/person-6.jpg')}
                    resizeMode='cover'
                    style={{
                        height: 200,
                        width: width,
                        top: 0,
                        left: 0,
                        right: 0,
                        position: 'absolute'
                    }} />
                <TouchableOpacity style={{
                    position: 'absolute',
                    bottom: '-25%',
                    left: '50%',
                    marginLeft: -60,
                    width: 120,
                    height: 120,
                    borderRadius: 60,
                    overflow: 'hidden',
                    borderWidth: 2,
                    borderColor: '#FFFFFF',
                }}>
                    <Image source={require('../../assets/person-6.jpg')} style={{ height: '100%', width: '100%' }} resizeMode='cover' />
                </TouchableOpacity>
            </View>
            <View style={{ marginHorizontal: 20 }}>
                <View style={{ marginTop: 60, alignItems: 'center' }}>
                    <View style={{ alignItems: 'center', flexDirection: 'row' }}>
                        <Text style={{ fontSize: 26, fontWeight: '500', color: '#19295C', marginRight: 3 }}>Millie Brown</Text>
                        <MaterialIcons name="verified" size={18} color="#2095F3" />
                    </View>
                    <Text style={{ color: '#99A1BE', fontSize: 16, marginTop: 5 }}>Photographer l videographer</Text>
                </View>
                <View style={{ justifyContent: 'space-between', flexDirection: 'row', marginTop: 20 }}>
                    <TouchableOpacity style={{ backgroundColor: '#1877F2', width: 140, height: 48, borderRadius: 30, justifyContent: 'center', alignItems: 'center' }}>
                        <View style={{ flexDirection: 'row', alignItems: 'center' }}>
                            <Fontisto name="messenger" size={15} color="#FFFFFF" />
                            <Text style={{ marginLeft: 5, color: '#FFFFFF', fontSize: 14 }}>Messenger</Text>
                        </View>
                    </TouchableOpacity>
                    <TouchableOpacity style={{ borderColor: '#1877F2', borderWidth: 1, width: 140, height: 48, borderRadius: 30, justifyContent: 'center', alignItems: 'center' }}>
                        <Text style={{ color: '#1877F2', fontSize: 14 }}>Friends</Text>
                    </TouchableOpacity>
                    <TouchableOpacity style={{ borderColor: '#99A1BE', borderWidth: 1, height: 48, width: 48, borderRadius: 48 / 2, justifyContent: 'center', alignItems: 'center' }}>
                        <Entypo name="dots-three-horizontal" size={20} color="#99A1BE" />
                    </TouchableOpacity>
                </View>
                <View style={{ height: 1, backgroundColor: '#F1F4F5', marginTop: 20 }} />
                <View style={{ flexDirection: 'row', alignItems: 'center', marginTop: 15 }}>
                    <FontAwesome name="shopping-bag" size={20} color="#99A1BE" />
                    <Text style={{ fontSize: 15, color: '#99A1BE', marginLeft: 10 }}>Photographer & videographer</Text>
                </View>
                <View style={{ flexDirection: 'row', alignItems: 'center', marginTop: 15 }}>
                    <Entypo name="home" size={20} color="#99A1BE" />
                    <Text style={{ fontSize: 15, color: '#99A1BE', marginLeft: 10 }}>Lives in <Text style={{ fontWeight: '500', color: '#6A7497' }}>NewYork, USA</Text></Text>
                </View>
                <View style={{ flexDirection: 'row', alignItems: 'center', marginTop: 15 }}>
                    <FontAwesome name="shopping-bag" size={20} color="#99A1BE" />
                    <Text style={{ fontSize: 15, color: '#99A1BE', marginLeft: 10 }}>behance/rachelpodrez</Text>
                </View>
                <View style={{ flexDirection: 'row', alignItems: 'center', marginTop: 15 }}>
                    <FontAwesome name="shopping-bag" size={20} color="#99A1BE" />
                    <Text style={{ fontSize: 15, color: '#99A1BE', marginLeft: 10 }}>More info about <Text style={{ fontWeight: '500', color: '#6A7497' }}>Rachel</Text></Text>
                </View>
                <View style={{ height: 1, backgroundColor: '#F1F4F5', marginTop: 15 }} />
            </View>
        </>
    )
}