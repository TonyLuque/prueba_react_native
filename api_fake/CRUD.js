import * as SecureStore from "expo-secure-store";

const keyWord = "token";

const LoginUser = async (email, password) => {
  const newEmail = email.replace("@", "");
  try {
    const user = JSON.parse(await SecureStore.getItemAsync(newEmail));
    if (user.email === email && user.password === password) {
      return user.email + user.password;
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
  }
};

export default {
  LoginUser,
  RegisterUser,
};
