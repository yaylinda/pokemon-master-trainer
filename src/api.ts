import axios from "axios";
import { localStorageKeys } from "./constants";
import { useUserStore } from "./stores/userStore";

axios.defaults.withCredentials = true;

const host = 'http://localhost:8000'; // TODO - set host based on environment
const getEndpoint = (path: string) => `${host}${path}`;

export const logIn = async (id: string) => {
  await axios.post(getEndpoint("/login"), { id });
  useUserStore.setState({ activeUserId: id });
  window.localStorage.setItem(localStorageKeys.USER_ID, id);
};

export const logOut = async () => {
  await axios.post(getEndpoint("/logout"));
  useUserStore.setState({ activeUserId: null });
  window.localStorage.setItem(localStorageKeys.USER_ID, "");
};