import React from "react";
import { View, TouchableOpacity, Text, } from "react-native";

export default ShortcutComponent = ({ item }) => {
    return (
        <TouchableOpacity style={{ flex: 1, justifyContent: 'center', alignItems: 'flex-start', margin: 8, height: 60, borderRadius: 14, backgroundColor: '#FFFFFF' }}>
            <View style={{ marginLeft: 20, flexDirection: 'row', alignItems: 'center' }}>
                {item.icon}
                <Text style={{ fontSize: 14, color: '#19295C', fontWeight: '500', marginLeft: 7 }}>{item.title}</Text>
            </View>
        </TouchableOpacity>
    );
}

