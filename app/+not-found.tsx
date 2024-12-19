import { Link } from 'expo-router';
import { View, Text, StyleSheet } from 'react-native';

export default function Notfound() {
  return (
    <View>
      <Text>Not is found</Text>
      <Link href={'/'} >Return Home</Link>
    </View>
  )
}


const style = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center'
    }
});