import React, { useState } from "react";
import { Text, View, Button, TextInput, ScrollView, Input } from "react-native";
import styles from "./styles";

export default function Login(props) {
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
      <View>
        <Button
          title="Login"
          onPress={() => props.navigation.navigate("profile")}
        />
      </View>
    </ScrollView>
  );
}
