import React from 'react'
import { View, Text, TouchableOpacity, StyleSheet, Dimensions, Image } from 'react-native'
import { AntDesign, Entypo, FontAwesome } from '@expo/vector-icons';
import { useNavigation } from '@react-navigation/native';


export default function GoBackWithUserInfo() {
    const windowHeight = Dimensions.get('window').height;
    const windowWeight = Dimensions.get('window').width;
    const navigation = useNavigation();

    return (
        <View style={{
            position: 'absolute',
            top: '5%',
            left: '5%',
            right: '5%',
            flex: 1,
            flexDirection: 'row',
            justifyContent: 'space-between',
            zIndex: 1,
        }}>
            <TouchableOpacity style={{ flexDirection: 'row', alignItems: 'center', }} onPress={() => navigation.goBack()}>
                <AntDesign name="arrowleft" size={20} color="#FFFFFF" />
                <Text style={{ textTransform: 'capitalize', color: '#FFFFFF', marginLeft: 10, fontWeight: '500', fontSize: 20 }}>reels</Text>
            </TouchableOpacity>

            <View style={{ display: 'flex', flexDirection: 'row', alignItems: 'center' }}>
                <TouchableOpacity
                    style={{ height: 30, backgroundColor: '#FFFFFF', flexDirection: 'row', alignItems: 'center', borderRadius: 30 / 2, paddingHorizontal: 10, }}>
                    <Entypo name="camera" size={12} color='#2F2F2F' />
                    <Text style={{ paddingLeft: 3, color: '#2F2F2F', fontSize: 12 }}>create</Text>
                </TouchableOpacity>
                <TouchableOpacity style={{ height: 30, width: 30, borderWidth: 2, borderColor: '#FFFFFF', borderRadius: 30 / 2, alignItems: 'center', justifyContent: 'center', marginLeft: 3 }}>
                    <FontAwesome name="search" size={12} color='#FFFFFF' />
                </TouchableOpacity>
                <TouchableOpacity style={{ height: 30, width: 30, borderWidth: 2, borderColor: '#FFFFFF', borderRadius: 30 / 2, alignItems: 'center', justifyContent: 'center', overflow: 'hidden', marginLeft: 3 }}>
                    <Image source={require('../../assets/person-6.jpg')} resizeMode='cover' style={{ width: '100%', height: '100%' }} />
                </TouchableOpacity>
            </View>
        </View>
    )
}



