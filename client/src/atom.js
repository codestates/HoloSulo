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

export const tagsAtom = atom({
  key: "tags",
  default: [
    "#조용한",
    "#재즈",
    "#모던한",
    "#차분한",
    "#뉴에이지",
    "#신나는",
    "#시끌벅적한",
    "#일렉트로닉",
  ],
});

export const timesAtom = atom({
  key: "times",
  default: [0.5, 1, 2, 3, 24],
});
