import * as SecureStore from "expo-secure-store";

const LoginUser = async (email, password) => {
  const newEmail = email.replace("@", "");
  try {
    const user = JSON.parse(await SecureStore.getItemAsync(newEmail));
    if (user.email === email && user.password === password) {
      return newEmail;
    } else {
      return false;
    }
  } catch (e) {
    console.log(e);
    return false;
  }
};

const RegisterUser = async (email, values) => {
  const newEmail = email.replace("@", "");
  try {
    const user = await SecureStore.getItemAsync(newEmail);
    if (user) {
      return false;
    }
    await SecureStore.setItemAsync(newEmail, JSON.stringify(values));
  } catch (e) {
    console.log(e);
    return false;
  }
};

export default {
  LoginUser,
  RegisterUser,
};
