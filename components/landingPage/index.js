import React from "react";
import styles from "./styles";
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

export default function LandingPage(props) {
  return (
    <View
      style={{
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <Image
        source={{
          uri: "https://i2.wp.com/eltallerdehector.com/wp-content/uploads/2021/05/Stitch-tierno-png.png?resize=700%2C700&ssl=1",
        }}
        style={styles.image}
      />
      <TouchableOpacity
        style={styles.button}
        onPress={() => props.navigation.navigate("login")}
      >
        <Text style={styles.textButton}>Login</Text>
      </TouchableOpacity>
      <TouchableOpacity
        style={styles.button}
        onPress={() => props.navigation.navigate("sing up")}
      >
        <Text style={styles.textButton}>Sing up</Text>
      </TouchableOpacity>
    </View>
  );
}
