import React from 'react'
import { View, Text, Image, TouchableOpacity, FlatList } from 'react-native';
import place from '../../storage/place';


export default function Country() {
    return (
        <>
            <View style={{ marginTop: 20 }}>
                <FlatList
                    showsHorizontalScrollIndicator={false}
                    data={place}
                    horizontal={true}
                    renderItem={({ item }) => {
                        return (
                            <TouchableOpacity style={{ marginLeft: item.id === 1 ? 20 : 10, flexDirection: 'column', alignItems: 'center', borderRadius: 24, }}>
                                <View style={{ height: 76, width: 76, borderRadius: 76 / 2, overflow: 'hidden' }}>
                                    <Image source={item.image_uri} resizeMode='cover' style={{ height: 100, width: 100 }} />
                                </View>
                                <Text style={{ fontSize: 12, color: '#99A1BE', marginTop: 3 }}>
                                    {item.name.length > 9 ? `${item.name.slice(0, 9)}...` : item.name}
                                </Text>
                            </TouchableOpacity>
                        );
                    }}
                    keyExtractor={(item, index) => index.toString()}
                />
            </View>
        </>
    )
}