import { StyleSheet } from 'react-native'
import React from 'react'
import { Gesture, GestureDetector } from 'react-native-gesture-handler';
import Animation, { useAnimatedStyle, useSharedValue, withSpring } from "react-native-reanimated";
import { type ImageSource } from 'expo-image';

type Props = {
    imageSize: number,
    imageSource: string
};

const Stickericon = ({ imageSize, imageSource }: Props) => {
    const imageTranslateX = useSharedValue(0);
    const imageTranslatey = useSharedValue(0);
    const scaleImageSize = useSharedValue(imageSize);


    const drag = Gesture
        .Pan()
        .onChange((event) => {
            imageTranslateX.value += event.changeX;
            imageTranslatey.value += event.changeY; 
        });

    const animImageTranslatestyle = useAnimatedStyle(() => {
        return {
            transform: [
                {
                    translateX: imageTranslateX.value,
                },
                {
                    translateY: imageTranslatey.value,
                }
            ]
        }
    });

    const doubleTap = Gesture
        .Tap()
        .numberOfTaps(2)
        .onStart((event) => {
            if (scaleImageSize.value !== imageSize * 2) {
                scaleImageSize.value = scaleImageSize.value * 2;
            } else {
                scaleImageSize.value = Math.round(scaleImageSize.value / 2);
            };
        });

    const animImageSizeStyle = useAnimatedStyle(() => {
        return {
            width: withSpring(scaleImageSize.value),
            height: withSpring(scaleImageSize.value),
        };
    })


    return <GestureDetector gesture={drag}>
        <Animation.View style={[animImageTranslatestyle, styles.iconContainer]}>
            <GestureDetector gesture={doubleTap} >
                <Animation.Image
                    style={[styles.icon, animImageSizeStyle, { width: imageSize, height: imageSize }]}
                    source={imageSource as ImageSource} 
                    resizeMode={'contain'}/>
            </GestureDetector>
        </Animation.View>
    </GestureDetector>
};

export default Stickericon;

const styles = StyleSheet.create({
    iconContainer: {
        position: 'absolute',
        top: 20,
        left: 20,
    },
    icon: {
        borderRadius: 18,
        cursor: 'pointer',
    }
});