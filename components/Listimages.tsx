import { StyleSheet, FlatList, Platform, Pressable } from 'react-native'
import React from 'react'
import { Image } from 'expo-image';

type Props = {
    data: string[]
    selectImage: (imageUrl: string) => void
    closeModal: ()=> void
};

const Listimages = ({ data, selectImage, closeModal }: Props) => {
    return <FlatList
        horizontal
        showsHorizontalScrollIndicator={Platform.OS === 'web'}
        contentContainerStyle={styles.listContainer}
        data={data}
        renderItem={({ item, index }) =>
            <Pressable
                onPress={() => {
                    selectImage(item);
                    closeModal();
                }}
                key={index}>
                <Image source={item} style={styles.image} />
            </Pressable>
        }
    />
}

export default Listimages;

const styles = StyleSheet.create({
    listContainer: {
        borderTopRightRadius: 10,
        borderTopLeftRadius: 10,
        paddingHorizontal: 20,
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
        gap: 10,
      },
      image: {
        width: 120,
        height: 120,
        objectFit: 'contain',
        backgroundColor: 'white',
      },
});
