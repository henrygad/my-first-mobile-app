import Stickericon from '@/components/Stickericon';
import { GestureHandlerRootView } from "react-native-gesture-handler";
import { Image } from 'expo-image';
import { StyleSheet, View, Platform } from 'react-native';
import { useEffect, useRef } from 'react';
import * as MediaLibrary from "expo-media-library";
import { captureRef } from "react-native-view-shot";
import Button from '@/components/Button';
const placeHolder = require('../../assets/images/gripz-avatar.jpeg');
const icon1 = require('../../assets/images/favicon.png');
const icon2 = require('../../assets/images/react-logo.png');


export default function About() {
    const [status, requestPermission] = MediaLibrary.usePermissions();
    const imageRef = useRef<View>(null);

    const handleScreenShot = async () => {
        try {
            const localUri = await captureRef(imageRef, {
                height: 420,
                quality: 1,
                format: 'jpg',
            });
            await handleSaveScreenShot(localUri);
        } catch (error) {
            console.log(error, 'cp');
        }
    };

    const handleSaveScreenShot = async (localUri: string) => {
           
        try {

            if (Platform.OS === 'web') {               
                const response = await fetch(localUri);
                const blob = await response.blob();
                const url = window.URL.createObjectURL(blob);

                const link = document.createElement('a');
                link.href = url;
                link.download = 'screenshot.jpg';
                link.click();
                
                if (localUri) {
                    alert('Image saved on web');
                };

                window.URL.revokeObjectURL(url);
            };

            await MediaLibrary.saveToLibraryAsync(localUri);
            if (localUri) {
                alert('Image saved');
            };

        } catch (error) {
            console.log(error, 'sv');
        };
    };


    useEffect(() => {
        if (status === null) {
            requestPermission();
        };

    }, []);

    return <GestureHandlerRootView >
        <View style={styles.container}>
            <View style={styles.imageContainer}>
                <View
                    ref={imageRef}
                    collapsable={false}>
                    <Image style={styles.image} source={placeHolder} />
                    <Stickericon imageSource={icon1} imageSize={40} />
                    <Stickericon imageSource={icon2} imageSize={40} />
                </View>
            </View>
            <View style={styles.buttonContainer}>
                <Button label='Save image' onPress={handleScreenShot} />
            </View>
        </View>
    </GestureHandlerRootView>
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
        gap: 10,
        backgroundColor: '#fff',
        paddingBlock: 6
    },
    imageContainer: {
        flex: 1,
        position: 'relative',
    },
    image: {
        width: 320,
        height: 440,
        borderRadius: 18,
    },
    buttonContainer: {
        width: 320,
        height: 68,
        marginHorizontal: 20,
        alignItems: 'center',
        justifyContent: 'center',
        padding: 3,
    },

});
