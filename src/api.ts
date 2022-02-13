import axios from "axios";
import { User } from "../common/types";
import { USER_LOCAL_STORAGE_KEY } from "./constants";
import { useUserStore } from "./stores/userStore";

axios.defaults.withCredentials = true;

const host = 'http://localhost:8000'; // TODO - set host based on environment

const getEndpoint = (path: string) => `${host}${path}`;

export const logIn = async (user: User) => {
  await axios.post(getEndpoint("/login"), user);
  useUserStore.setState({ user });
  window.localStorage.setItem(USER_LOCAL_STORAGE_KEY, JSON.stringify(user));
};

export const logOut = async () => {
  await axios.post(getEndpoint("/logout"));
  useUserStore.setState({ user: null });
  window.localStorage.setItem(USER_LOCAL_STORAGE_KEY, "");
};
