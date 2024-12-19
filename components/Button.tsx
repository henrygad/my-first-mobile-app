import { Pressable, StyleSheet, Text } from 'react-native'
import React from 'react'
import FontAwesome from '@expo/vector-icons/FontAwesome';

type Props = {
    label: string,
    onPress: () => void
    theme?: string
};

const Button = ({ label, theme = 'secondary', onPress }: Props) => {


    if (theme === 'primary') {
        return <Pressable
            style={styles.button}
            onPress={onPress}>
            <FontAwesome name="picture-o" size={18} color="#25292e" style={[styles.buttonIcon, {color: 'white'}]} />
            <Text style={[styles.buttonLabel, {color: 'white'}]}>
                {label}
            </Text>
        </Pressable>

    };

    return <Pressable
        style={styles.button}
        onPress={onPress}>
        <Text style={[styles.buttonLabel, {color: 'white'}]}>
            {label}
        </Text>
    </Pressable>
};

export default Button;

const styles = StyleSheet.create({
    button: {
        backgroundColor: 'red',
        borderRadius: 10,
        width: '100%',
        height: '100%',
        alignItems: 'center',
        justifyContent: 'center',
        flexDirection: 'row',
    },
    buttonIcon: {
        paddingRight: 8,
    },
    buttonLabel: {
        color: '',
        fontSize: 18,
        fontWeight: 'bold',
    },
});