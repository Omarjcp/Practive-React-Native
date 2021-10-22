import React, { useState } from "react";
import { Text, View, Button, TextInput, ScrollView, Input } from "react-native";
import styles from "./styles";

export default function CreateUser(props) {
  const [dataForm, setDataForm] = useState({
    name: "",
    email: "",
    password: "",
  });

  const onChangeInput = (name, value) => {
    setDataForm({
      ...dataForm,
      [name]: value,
    });
  };

  return (
    <ScrollView style={styles.container}>
      <View style={styles.inputGroup}>
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
        />
      </View>
      <View>
        <Button
          title="Save user"
          onPress={() => props.navigation.navigate("profile")}
        />
      </View>
    </ScrollView>
  );
}
