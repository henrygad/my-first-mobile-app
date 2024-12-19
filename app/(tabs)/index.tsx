import React from "react";
import { View, StyleSheet} from "react-native";
import * as imagePicker from 'expo-image-picker';
import Imageview from "@/components/Imageview";
import Button from "@/components/Button";
import { useState } from "react";
import Imagemodal from '@/components/Imagemodal';
import Listimages from "@/components/Listimages";
const placeHolder = require('@/assets/images/gripz-avatar.jpeg');

export default function Index() {
  const [url, setUrl] = useState<string | undefined>(undefined);
  const [images, setImages] = useState<string[]>([placeHolder]);
  const [isModalVisible, setIsModalVisible] = useState(false);


  const handleChooseImage = async () => {
    const result = await imagePicker.launchImageLibraryAsync({
      mediaTypes: ['images'],
      allowsEditing: true,
      quality: 1,
    });

    if (!result.canceled) {
      const uri = result.assets[0].uri;
      setUrl(uri);
      setImages(pre => pre ? [...pre, uri] : pre);
    } else {
      alert('You did not select any image.');
    };
  };


  return (
    <View
      style={styles.container}>
      <View style={styles.imageContainer}>
        <Imageview placeHolder={url || placeHolder} />
      </View>
      <View style={styles.buttonContainer}>
        <Button
          theme="primary"
          label="Choose new image"
          onPress={handleChooseImage} />
      </View>
      <View style={styles.buttonContainer}>
        <Button
          label="Choose from Library"
          onPress={() => setIsModalVisible(true)} />
      </View>
      <Imagemodal
        isVisible={isModalVisible}
        closeModal={() => setIsModalVisible(false)} >
        <Listimages
          data={images}
          selectImage={(image) => setUrl(image)}
          closeModal={() => setIsModalVisible(false)} />
      </Imagemodal>
    </View>
  );
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
