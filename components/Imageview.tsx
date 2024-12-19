import { StyleSheet } from 'react-native'
import React from 'react'
import { Image } from 'expo-image';

type Props = {
    placeHolder: string
};

const Imageview = ({ placeHolder }: Props) => {
    return <Image source={placeHolder} style={styles.image} />
};

export default Imageview

const styles = StyleSheet.create({
    image: {
        width: 320,
        height: 440,
        borderRadius: 18,
    },
});