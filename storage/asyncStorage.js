import AsyncStorage from "@react-native-async-storage/async-storage";

const SECRET_KEY = "@storage_Key";

const saveUser = async (usuario) => {
  try {
    await AsyncStorage.setItem(SECRET_KEY, JSON.stringify(usuario));
    return JSON.stringify(usuario);
  } catch (err) {
    console.log("error al configurar datos del usuario en el storage", err);
  }
};

const getUser = async () => {
  try {
    const user = await AsyncStorage.getItem(SECRET_KEY);
    if (user !== null) {
      return JSON.parse(user);
    }
  } catch (err) {
    console.log("error al obtener usuario del storage", err);
  }
};

const deleteUser = async () => {
  try {
    await AsyncStorage.removeItem(SECRET_KEY);
    const user = await AsyncStorage.getItem(SECRET_KEY);
    return user == null
      ? "Usuario eliminado correctamente"
      : "El usuario no ha podido ser eliminado";
  } catch (err) {
    console.log("error al eliminar usuario del storage", err);
  }
};

export { saveUser, getUser, deleteUser };
