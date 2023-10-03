import { View, Text } from 'react-native'
import React, { forwardRef, useImperativeHandle, useRef, useEffect } from 'react'
import { Video, ResizeMode } from 'expo-av'

const SingleVideo = forwardRef(({ item }, parentRef) => {

    useImperativeHandle(parentRef, () => ({
        play,
        unload,
        stop
    }))

    useEffect(() => {
        return () => unload();
    }, [])

    const ref = useRef(null);

    const play = async () => {
        if (ref.current === null) {
            return;
        }
        const status = await ref.current.getStatusAsync();
        if (status?.isPlaying) {
            return;
        }
        try {
            await ref.current.playAsync()
        } catch (e) {
            console.log(e)
        }
    }

    const stop = async () => {
        if (ref.current === null) {
            return;
        }
        const status = await ref.current.getStatusAsync();
        if (!status?.isPlaying) {
            return;
        }
        try {
            await ref.current.stopAsync()
        } catch (e) {
            console.log(e)
        }
    }

    // this will destroy anything in memory that does't have to be there
    const unload = async () => {
        if (ref.current === null) {
            return;
        }
        const status = await ref.current.getStatusAsync();
        if (!status?.isPlaying) {
            return;
        }
        try {
            await ref.current.unloadAsync()
        } catch (e) {
            console.log(e)
        }
    }

    return <Video style={{ flex: 1 }}
        ref={ref}
        resizeMode={ResizeMode.COVER}
        shouldPlay={false}
        isLooping
        source={item.video_uri}
    />
})

export default SingleVideo;