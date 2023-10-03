import { View, Text, Image, TouchableOpacity } from 'react-native'
import React, { useState } from 'react'
import { AntDesign, Ionicons, FontAwesome, Fontisto, Entypo, MaterialIcons } from '@expo/vector-icons'
import { useNavigation } from '@react-navigation/native';

export default function Post1() {
    const navigation = useNavigation();

    const goToProfile = () => {
        navigation.navigate('profile');
    }

    const [like, setLike] = useState(false);

    const handleLike = () => {
        setLike(!like)
    }
    return (
        <View style={{ marginHorizontal: 20, marginTop: 20, backgroundColor: '#FFFFFF', borderRadius: 14, padding: 10 }}>
            <View style={{ flexDirection: 'row', justifyContent: 'space-between' }}>
                <View style={{ flexDirection: 'row', alignItems: 'center' }}>
                    <TouchableOpacity style={{ height: 50, width: 50, borderRadius: 50 / 2, alignItems: 'center', justifyContent: 'center', overflow: 'hidden', marginBottom: 10, marginRight: 7 }} onPress={goToProfile}>
                        <Image source={require('../../assets/person-6.jpg')} resizeMode='cover' style={{ width: '100%', height: '100%' }} />
                    </TouchableOpacity>
                    <View style={{ flexDirection: 'column' }}>
                        <View style={{ alignItems: 'center', flexDirection: 'row' }}>
                            <Text style={{ fontSize: 16, fontWeight: '500', color: '#19295C', marginRight: 3 }}>Millie Brown</Text>
                            <MaterialIcons name="verified" size={18} color="#2095F3" />
                        </View>
                        <View style={{ flexDirection: 'row' }}>
                            <Fontisto name="world" size={11} color="#99A1BE" style={{ marginRight: 3 }} />
                            <Text style={{ color: "#99A1BE", fontSize: 10 }}>2 Hours ago</Text>
                        </View>
                    </View>
                </View>
                <View style={{ flexDirection: 'row' }}>
                    <TouchableOpacity style={{ backgroundColor: '#F1F4F5', height: 40, width: 40, borderRadius: 20, alignItems: 'center', justifyContent: 'center', marginRight: 7 }}>
                        <AntDesign name="star" size={20} color="#2095F3" />
                    </TouchableOpacity>
                    <TouchableOpacity style={{ backgroundColor: '#F1F4F5', height: 40, width: 40, borderRadius: 20, alignItems: 'center', justifyContent: 'center' }}>
                        <Entypo name="dots-three-horizontal" size={24} color="#99A1BE" />
                    </TouchableOpacity>
                </View>
            </View>
            <Text style={{ fontSize: 16, color: '#2D3F7B', marginTop: 10 }}>Hey pals, guess what? 🎉 I've just wrapped up crafting these mind-blowing 3D wallpapers, drenched in the coolest of the cool colors! 🌈💎</Text>
            <View style={{ justifyContent: 'space-between', flexDirection: 'row', marginTop: 10 }}>
                <Image source={require('../../assets/Post1.png')} style={{ width: 100, height: 200, borderRadius: 8 }} />
                <Image source={require('../../assets/Post2.png')} style={{ width: 100, height: 200, borderRadius: 8 }} />
                <Image source={require('../../assets/Post3.png')} style={{ width: 100, height: 200, borderRadius: 8 }} />
            </View>
            <Text style={{ color: '#99A1BE', fontSize: 9, marginTop: 10 }}>3.4k Comments . 46 Shares</Text>
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
                    <Text style={{ fontSize: 9, color: '#99A1BE' }}>Q&A with Mark & 361k others</Text>
                    <Image source={require('../../assets/3Reaction.png')} style={{ marginLeft: 3 }} />
                </View>
            </View>
            <View style={{ marginTop: 10 }}>

            </View>
        </View >
    )
}