import { View, Text, Image, TouchableOpacity, FlatList } from 'react-native'
import React from 'react'
import { friendRequest } from '../../storage/friend'

export default function FriendRequest() {
  return (
    <>
      <View style={{ marginHorizontal: 20, marginTop: 25, flexDirection: 'row', justifyContent: 'space-between', alignItems: 'flex-end' }}>
        <Text style={{ color: "#19295C", fontSize: 20, fontWeight: '600' }}>Requests <Text style={{ color: "#D70606", fontSize: 15, }}>({367})</Text></Text>
        <TouchableOpacity>
          <Text style={{ color: "#1877F2", fontSize: 15, fontWeight: '500' }}>see all</Text>
        </TouchableOpacity>
      </View>
      <View style={{ marginHorizontal: 20 }}>
        <FlatList
          data={friendRequest}
          renderItem={({ item }) => <Component item={item} />}
          keyExtractor={(item) => item.id}
        />
      </View>
    </>
  )
}


const Component = ({ item }) => {
  return (
    <TouchableOpacity style={{ backgroundColor: '#FFFFFF', borderRadius: 14, padding: 20, marginTop: 10, flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center' }}>
      <View style={{ flexDirection: 'row', }}>
        <Image source={item.image_uri} style={{ height: 60, width: 60, borderRadius: 30, marginRight: 10 }} />
        <View>
          <Text style={{ color: '#19295C', fontSize: 16, fontWeight: '500' }}>{item.name}</Text>
          <View style={{ flexDirection: 'row', marginTop: 5 }}>
            <View style={{ flexDirection: 'row', position: 'relative', width: 38 }}>
              <View style={{ height: 16, width: 16, borderRadius: 16 / 2, position: 'absolute', overflow: 'hidden', borderWidth: 1, borderColor: '#FFFFFF', zIndex: 3 }}>
                <Image source={item.mutal_friend_images[0]} resizeMode='cover' style={{ height: '100%', width: '100%' }} />
              </View>
              <View style={{ height: 16, width: 16, borderRadius: 16 / 2, position: 'absolute', left: 12, overflow: 'hidden', borderWidth: 1, borderColor: '#FFFFFF', zIndex: 2 }}>
                <Image source={item.mutal_friend_images[1]} resizeMode='cover' style={{ height: '100%', width: '100%' }} />
              </View>
              <View style={{ height: 16, width: 16, borderRadius: 16 / 2, position: 'absolute', left: 24, overflow: 'hidden', borderWidth: 1, borderColor: '#FFFFFF', zIndex: 1 }}>
                <Image source={item.mutal_friend_images[2]} resizeMode='cover' style={{ height: '100%', width: '100%' }} />
              </View>
            </View>
            <Text style={{ fontSize: 10, marginLeft: 7 }}>{item.mutal_friend}</Text>
          </View>
        </View>
      </View>
      <View>
        <TouchableOpacity style={{ backgroundColor: '#1877F2', paddingHorizontal: 20, paddingVertical: 6, borderRadius: 30 }}>
          <Text style={{ color: '#FFFFFF', fontSize: 14, fontWeight: 500 }}>Accept</Text>
        </TouchableOpacity>
        <TouchableOpacity style={{ backgroundColor: '#F1F4F5', paddingHorizontal: 20, paddingVertical: 6, borderRadius: 30, top: 7 }}>
          <Text style={{ color: '#1877F2', fontSize: 14, fontWeight: 500 }}>Reject</Text>
        </TouchableOpacity>
      </View>
    </TouchableOpacity>
  )
}