import React, { useState, useRef } from 'react';
import { Text, Dimensions, StyleSheet, View, TouchableOpacity } from 'react-native';
import { SwiperFlatList } from 'react-native-swiper-flatlist';
import GoBackWithUserInfo from './GoBackWithUserInfo';
import ReelsCreatorInfo from './ReelsCreatorInfo';
import { Video, ResizeMode } from 'expo-av';
import reelsData from '../../storage/reels';
import { useNavigation } from '@react-navigation/native';

const { width, height } = Dimensions.get('window');

const ReelsComponent = () => {
    const navigation = useNavigation();

    const [currentVideoIndex, setCurrentVideoIndex] = useState(0);
    const [isPlaying, setIsPlaying] = useState(false);
    const video = useRef(null);

    const handleIndexChanged = (index) => {
        setCurrentVideoIndex(index);
        setIsPlaying(false); // Pause video when changing to a new one
    };

    const handlePlayPause = async () => {
        if (video.current) {
            const status = await video.current.getStatusAsync();
            if (status.isPlaying) {
                await video.current.pauseAsync();
                setIsPlaying(false);
            } else {
                await video.current.playAsync();
                setIsPlaying(true);
            }
        }
    };

    return (
        <View>
            <SwiperFlatList
                vertical
                index={currentVideoIndex}
                data={reelsData}
                onIndexChanged={handleIndexChanged}
                renderItem={({ item }) => (
                    <View style={{ height: height, width: width, backgroundColor: '#000000' }}>
                        <GoBackWithUserInfo navigation={navigation} />
                        <Video
                            style={{
                                width: width,
                                height: height,
                                position: 'absolute',
                            }}
                            ref={video}
                            source={item.vido_uri}
                            useNativeControls={false}
                            resizeMode={ResizeMode.COVER}
                            isLooping={true}
                            shouldPlay={isPlaying} // Pass the play state to the Video component
                        />
                        <ReelsCreatorInfo />
                    </View>
                )}
            />
            <View style={styles.playPauseButton}>
                <TouchableOpacity onPress={handlePlayPause}>
                    <Text style={styles.playPauseButtonText}>
                        {isPlaying ? 'Pause' : 'Play'}
                    </Text>
                </TouchableOpacity>
            </View>
        </View>
    );
};

export default ReelsComponent;

const styles = StyleSheet.create({
    playPauseButton: {
        position: 'absolute',
        bottom: 20,
        right: 20,
        backgroundColor: 'rgba(255,255,255,0.7)',
        borderRadius: 20,
        padding: 10,
    },
    playPauseButtonText: {
        fontSize: 18,
        fontWeight: 'bold',
    },
});
