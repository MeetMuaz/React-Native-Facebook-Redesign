import { View, Text, Image, TouchableOpacity, Linking } from 'react-native'
import React, { useState } from 'react'
import { AntDesign, Ionicons, FontAwesome, Fontisto, Entypo } from '@expo/vector-icons';

export default function Post2() {
    const [like, setLike] = useState(false);

    const handleLike = () => {
        setLike(!like)
    }

    const handleLinkPress = () => {
        Linking.openURL('https://linkedin.com/in/meetmuaz');
    };

    return (
        <View style={{ marginHorizontal: 20, marginTop: 20, backgroundColor: '#FFFFFF', borderRadius: 14, padding: 10 }}>
            <View style={{ flexDirection: 'row', justifyContent: 'space-between' }}>
                <View style={{ flexDirection: 'row', alignItems: 'center' }}>
                    <TouchableOpacity style={{ height: 50, width: 50, borderRadius: 50 / 2, alignItems: 'center', justifyContent: 'center', overflow: 'hidden', marginBottom: 10, marginRight: 7 }}>
                        <Image source={require('../../assets/person-4.jpg')} resizeMode='cover' style={{ width: '100%', height: '100%' }} />
                    </TouchableOpacity>
                    <View style={{ flexDirection: 'column' }}>
                        <View style={{ flexDirection: 'row', alignItems: 'center' }}>
                            <Text style={{ fontSize: 16, fontWeight: '500', color: '#19295C' }}>Millie Brown</Text>
                            <Text style={{ fontSize: 10, marginLeft: 3 }}>with John and 2 others</Text>
                        </View>
                        <View style={{ flexDirection: 'row' }}>
                            <Fontisto name="world" size={11} color="#99A1BE" style={{ marginRight: 3 }} />
                            <Text style={{ color: "#99A1BE", fontSize: 10 }}>2 Hours ago</Text>
                        </View>
                    </View>
                </View>
                <TouchableOpacity style={{ backgroundColor: '#F1F4F5', height: 40, width: 40, borderRadius: 20, alignItems: 'center', justifyContent: 'center' }}>
                    <Entypo name="dots-three-horizontal" size={24} color="#99A1BE" />
                </TouchableOpacity>
            </View>
            <Text style={{ fontSize: 16, color: '#2D3F7B', marginTop: 10 }}>👋🏼 Hey guys..
                check out this beautiful landing page for JW company I just finished for a client. 😄</Text>
            <Text>
                <TouchableOpacity onPress={handleLinkPress}>
                    <Text style={{ textDecorationLine: 'underline', color: '#1877F2', fontSize: 16 }}>https://linkedin.com/in/meetmuaz</Text>
                </TouchableOpacity>
            </Text>
            <Text style={{ color: '#99A1BE', fontSize: 9, marginTop: 10 }}>19 Comments </Text>
            <View style={{ flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center' }}>
                <View style={{ flexDirection: 'row', marginTop: 10 }}>
                    <TouchableOpacity style={{ height: 40, width: 40, borderRadius: 20, backgroundColor: like ? '#1877F2' : '#EFF8FF', justifyContent: 'center', alignItems: 'center', marginRight: 10 }} onPress={handleLike}>
                        <AntDesign name="like1" size={18} color={like ? '#EFF8FF' : '#1877F2'} />
                    </TouchableOpacity>
                    <TouchableOpacity style={{ height: 40, width: 40, borderRadius: 20, backgroundColor: '#EFF8FF', justifyContent: 'center', alignItems: 'center', marginRight: 10 }}>
                        <Ionicons name="md-chatbubble-ellipses-sharp" size={18} color="#1877F2" />
                    </TouchableOpacity>
                    <TouchableOpacity style={{ height: 40, width: 40, borderRadius: 20, backgroundColor: '#EFF8FF', justifyContent: 'center', alignItems: 'center', marginRight: 10 }}>
                        <FontAwesome name="share" size={18} color="#1877F2" />
                    </TouchableOpacity>
                </View>
                <View style={{ flexDirection: 'row', alignItems: 'center' }}>
                    <Text style={{ fontSize: 9, color: '#99A1BE' }}>Will Byers & 216 others</Text>
                    <Image source={require('../../assets/reaction.png')} style={{ marginLeft: 3 }} />
                </View>
            </View>
        </View >
    )
}