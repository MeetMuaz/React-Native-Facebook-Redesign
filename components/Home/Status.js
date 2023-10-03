import { View, Text, Image, TouchableOpacity, FlatList } from 'react-native'
import React from 'react'
import statusData from '../../storage/status';

export default function Status() {
    return (
        <View style={{ marginTop: 20 }}>
            <FlatList
                showsHorizontalScrollIndicator={false}
                data={statusData}
                horizontal={true}
                renderItem={({ item }) => <Component item={item} />}
                keyExtractor={(item) => item.id}
            />
        </View >
    )
}

const Component = ({ item }) => {
    return (
        item.id === 1 ?

            <View style={{ flexDirection: 'column', alignItems: 'center', justifyContent: 'center', width: 76, marginLeft: 20 }}>
                <TouchableOpacity style={{ height: 76, width: 76, borderRadius: 76 / 2, backgroundColor: '#1877F2', justifyContent: 'center', alignItems: 'center' }}>
                    <Image source={require('../../assets/Status.png')} />
                </TouchableOpacity>
                <Text style={{ color: '#99A1BE', fontSize: 10 }}>Your Story</Text>
            </View>

            :

            <View style={{ flexDirection: 'column', alignItems: 'center', justifyContent: 'center', width: 76, marginLeft: 10 }}>
                <TouchableOpacity style={{ height: 76, width: 76, borderRadius: 76 / 2, borderWidth: 2, borderColor: '#1877F2', justifyContent: 'center', alignItems: 'center' }} >
                    <Image source={item.image_uri} style={{ height: 65, width: 65, borderRadius: 73 / 2 }} resizeMode='contain' />
                </TouchableOpacity>
                <Text style={{ color: '#99A1BE', fontSize: 10 }}>{item.name}</Text>
            </View>
    );

}