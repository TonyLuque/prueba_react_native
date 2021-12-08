import * as SecureStore from "expo-secure-store";

const keyWord = "token";

const GetToken = async () => {
  try {
    return await SecureStore.getItemAsync(keyWord);
  } catch (e) {
    console.log(e);
  }
};

const SetToken = async (token) => {
  try {
    await SecureStore.setItemAsync(keyWord, token);
  } catch (e) {
    console.log(e);
  }
};

const RemoveToken = async () => {
  try {
    await SecureStore.deleteItemAsync(keyWord);
  } catch (e) {
    console.log(e);
  }
};

export default {
  GetToken,
  SetToken,
  RemoveToken,
};
