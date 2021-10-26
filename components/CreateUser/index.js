import React, { useState } from "react";
import {
  Text,
  View,
  Button,
  TextInput,
  ScrollView,
  Input,
  TouchableOpacity,
  Image,
} from "react-native";
import styles from "./styles";
import * as ImagePicker from "expo-image-picker";

export default function CreateUser(props) {
  const [image, setImage] = useState(null);

  const [dataForm, setDataForm] = useState({
    name: "",
    email: "",
    password: "",
  });

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

  const onChangeInput = (name, value) => {
    setDataForm({
      ...dataForm,
      [name]: value,
    });
  };

  return (
    <ScrollView style={styles.container}>
      <View style={{ flex: 1, alignItems: "center" }}>
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
      <View style={styles.inputGroup}>
        {/* NO MAS DE 17 CARACTERES */}
        <TextInput
          placeholder="Name user"
          onChangeText={(value) => onChangeInput("name", value)}
        />
      </View>
      <View style={styles.inputGroup}>
        <TextInput
          placeholder="Email"
          onChangeText={(value) => onChangeInput("email", value)}
        />
      </View>
      <View style={styles.inputGroup}>
        <TextInput
          placeholder="Password"
          onChangeText={(value) => onChangeInput("password", value)}
          secureTextEntry={true}
        />
      </View>

      <View
        style={{
          marginTop: 20,
        }}
      >
        <Button
          title="Save user"
          onPress={() => props.navigation.navigate("profile")}
        />
      </View>
      <View
        style={{
          flex: 1,
          color: "grey",
          marginTop: 20,
        }}
      >
        <Text
          style={{
            color: "dimgray",
            marginTop: 5,
            textAlign: "center",
            letterSpacing: 1,
          }}
          onPress={() => props.navigation.navigate("login")}
        >
          ¿Ya tienes una cuenta?
        </Text>
        {/* <Button
          title="Login"
          onPress={() => props.navigation.navigate("login")}
        /> */}
      </View>
    </ScrollView>
  );
}
