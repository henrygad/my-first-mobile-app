import { Link } from "expo-router";
import { Text, View, StyleSheet } from "react-native";

export default function Index() {
    return (
        <View
            style={style.container}>
            <Text style={style.text} >
                Welcome back
            </Text>
            <Link style={{ ...style.button, ...style.primaryBtn }} href='/(tabs)'>
                Go to tabs
            </Link>
        </View>
    );
};


const style = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
        gap: 10,
        backgroundColor: 'red',
    },
    text: {
        fontSize: 40,
        fontWeight: 'bold'
    },
    button: {
        color: 'white',
        backgroundColor: 'blue',
        paddingInline: 10,
        paddingBlock: 5,
        borderRadius: 25,
    },
    primaryBtn: {
        borderWidth: 10
    },
});
