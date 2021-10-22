import React, { useState } from "react";
import { Text, View, Image, TouchableOpacity } from "react-native";
import styles from "./styles";

import * as ImagePicker from "expo-image-picker";
import * as Sharing from "expo-sharing";

// const Stack = createNativeStackNavigator();

export default function Profile() {
  const [image, setImage] = useState(null);

  const openImagePicker = async () => {
    let permissionResult =
      await ImagePicker.requestMediaLibraryPermissionsAsync();

    if (!permissionResult.granted) {
      alert("required permission");
      return;
    }

    const imgResult = await ImagePicker.launchImageLibraryAsync();

    if (imgResult.cancelled === true) {
      return;
    }

    setImage(imgResult.uri);
  };

  const openSharedDialog = async () => {
    let availableShare = await Sharing.isAvailableAsync();

    if (!availableShare) {
      alert("Sharing, is not available in your platform");
      return;
    } else {
      if (image) {
        await Sharing.shareAsync(image);
      } else {
        alert("Select an image in your galery");
      }
    }
  };

  return (
    <View style={styles.container}>
      <View style={{ width: "100%", height: "50%" }}>
        <TouchableOpacity onPress={openImagePicker}>
          {image ? (
            <Image
              source={{
                uri: image,
              }}
              style={styles.image}
            />
          ) : (
            <Image
              source={{
                uri: "https://i2.wp.com/eltallerdehector.com/wp-content/uploads/2021/05/Stitch-tierno-png.png?resize=700%2C700&ssl=1",
              }}
              style={styles.image}
            />
          )}
        </TouchableOpacity>
      </View>
      {image ? (
        <>
          <View>
            <Text style={styles.title}>My photo</Text>
          </View>
          <View
            style={{
              width: "100%",
              justifyContent: "center",
              alignItems: "center",
              marginBottom: 3,
            }}
          >
            <TouchableOpacity style={styles.button} onPress={openSharedDialog}>
              <Text style={styles.textButton}>Share image</Text>
            </TouchableOpacity>
          </View>
        </>
      ) : (
        <View>
          <Text style={styles.title}>Select an image</Text>
        </View>
      )}
    </View>
  );
}
