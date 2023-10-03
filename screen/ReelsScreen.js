import React, { useState, useEffect, useRef } from 'react'
import { View, Dimensions, FlatList, Text, StatusBar, Platform } from 'react-native';
import reels from '../storage/reels';
import { GoBackWithUserInfo, ReelsCreatorInfo, SingleVideo } from '../components/Reels';
const windowHeight = Dimensions.get('window').height;
const array = [0, 1, 3, 4, 5,];


function ReelsScreen() {
    const mediaRefs = useRef([]);

    /**
     * Called any time a new post is shown when a user scrolls
     * the FlatList, when this happens we should start playing 
     * the post that is viewable and stop all the others
     */
    const onViewableItemsChanged = useRef(({ changed }) => {
        console.log('handling scroll....');
        changed.forEach(element => {
            const cell = mediaRefs.current[element.key]
            if (cell) {
                if (element.isViewable) {
                    cell.play()
                    console.log('playing...')
                } else {
                    cell.stop()
                    console.log('stopped...')
                }
            }

        });
    })

    const renderItem = ({ item, index }) => {

        return (
            <View style={[{ flex: 1, height: windowHeight }, index % 2 ? { backgroundColor: '#000000' } : { backgroundColor: '#0e0e0e' }]}>
                <SingleVideo item={item} ref={SingleVideoRef => (mediaRefs.current[item.id] = SingleVideoRef)} />
            </View>
        );
    }

    return (
        <View style={{ flex: 1, position: 'relative' }}>
            <StatusBar hidden={true} />
            <GoBackWithUserInfo />
            <FlatList
                data={reels}
                windowSize={4}
                initialNumToRender={1}
                maxToRenderPerBatch={2}
                removeClippedSubviews
                viewabilityConfig={{
                    itemVisiblePercentThreshold: 100
                }}
                renderItem={renderItem}
                pagingEnabled
                keyExtractor={item => item.id}
                decelerationRate={'fast'}
                onViewableItemsChanged={onViewableItemsChanged.current}
            />
            <ReelsCreatorInfo />
        </View>
    )
}

export default ReelsScreen;
