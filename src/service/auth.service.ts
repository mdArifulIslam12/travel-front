import { authKey } from "@/constants/storageKey";
import { decodeToken } from "@/utils/auth";
import { getFromLocalStorage, setToLocalStorage } from "@/utils/local-store";

export const storeUserInfo = ({ accessToken }: { accessToken: string }) => {
  return setToLocalStorage(authKey, accessToken as string);
};

export const getUserInfo = () => {
  const authLocalStoreData = getFromLocalStorage(authKey);

  if (authLocalStoreData) {
    const decodeData = decodeToken(authLocalStoreData);
    return decodeData;
  } else {
    return "";
  }
};

export const isLoggedIn = () => {
  const authToken = getFromLocalStorage(authKey);
  return !!authToken;
};

export const removeUserInfo = (key: string) => {
  return localStorage.removeItem(key);
};
