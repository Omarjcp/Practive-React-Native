import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 10,
  },
  profile: {
    display: "flex",
    flexDirection: "row",
    marginTop: 30,
  },
  image: {
    height: 100,
    width: 100,
    borderRadius: 50,
  },
  containerEditProfile: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "center",
  },
  edit: {
    height: 32,
    width: 80,
    borderWidth: 1,
    borderRadius: 4,
    borderColor: "darkgrey",
    justifyContent: "center",
    alignItems: "center",
  },
  textEdit: {
    padding: 3,
    fontWeight: "700",
    color: "gray",
  },
  name: {
    marginRight: 30,
    marginLeft: 20,
    fontSize: 16,
    color: "black",
  },
  // button: {
  //   justifyContent: "center",
  //   height: 50,
  //   width: "90%",
  //   backgroundColor: "darkmagenta",
  //   borderRadius: 5,
  //   marginTop: 25,
  // },
  // textButton: {
  //   textAlign: "center",
  //   color: "#ccc",
  //   fontWeight: "bold",
  //   letterSpacing: 1,
  //   textTransform: "uppercase",
  // },
});

export default styles;
