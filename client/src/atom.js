import { atom } from "recoil";

export const isGlowingAtom = atom({
  key: "isGlowing",
  default: true,
});

export const isLoggedInAtom = atom({
  key: "isLoggedIn",
  default: localStorage.getItem("accessToken") ? true : false,
});

export const playlistsAtom = atom({
  key: "playlists",
  default: {},
});

export const userInfoAtom = atom({
  key: "userinfo",
  default: {},
});
