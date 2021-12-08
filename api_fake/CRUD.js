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
    return true;
  } catch (e) {
    console.log(e);
    return false;
  }
};

const GetProfile = async (token) => {
  try {
    const user = JSON.parse(await SecureStore.getItemAsync(token));
    return user;
  } catch (e) {
    console.log(e);
    return false;
  }
};

const UpdateProfile = async (token, values) => {
  try {
    let user = JSON.parse(await SecureStore.getItemAsync(token));
    user.firstName = values.firstName;
    user.phone = values.phone;
    await SecureStore.setItemAsync(token, JSON.stringify(user));
    return user;
  } catch (e) {
    console.log(e);
    return false;
  }
};

export default {
  LoginUser,
  RegisterUser,
  GetProfile,
  UpdateProfile,
};
