import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    backgroundColor: "#292929",
  },
  title: {
    fontSize: 30,
    color: "#ccc",
  },
  image: {
    height: "90%",
    width: "100%",
    marginTop: 50,
  },
  button: {
    justifyContent: "center",
    height: 50,
    width: "90%",
    backgroundColor: "darkmagenta",
    borderRadius: 5,
    marginTop: 25,
  },
  textButton: {
    textAlign: "center",
    color: "#ccc",
    fontWeight: "bold",
    letterSpacing: 1,
    textTransform: "uppercase",
  },
});

export default styles;
