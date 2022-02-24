import axios from "axios";
import { useEffect } from "react";
import { useSetRecoilState } from "recoil";
import { isLoggedInAtom } from "../atom";
export default async function NaverLoginCallback() {
  const setIsLoggedInAtom = useSetRecoilState(isLoggedInAtom);
  let params = new URL(document.location).searchParams;
  let code = params.get("code");
  let state = params.get("state");
  const getState = localStorage.getItem("state");
  if (getState !== state) {
    console.log("state가 일치하지 않습니다");
  } else {
    try {
      await axios
        .post(
          `http://localhost:8080/naver/api/callback`,
          {
            code: code,
            state: state,
          },
          {
            headers: {
              "Access-Control-Allow-Headers": "Content-Type",
              "Access-Control-Allow-Origin": "*",
              "Access-Control-Allow-Methods": "POST",
              "Access-Control-Allow-Credentials": "true",
            },
          },
          { withCredentials: true }
        )
        .then(async (el) => {
          await axios({
            method: "post",
            url: "http://localhost:8080/users/signup",
            data: {
              email: el.data.data.email,
              password: el.data.data.mobile,
              nickname: el.data.data.nickname,
            },
          }).then(async (el) => {
            console.log(el);
            try {
              await axios({
                method: "post",
                url: "http://localhost:8080/users/login",
                data: {
                  email: el.data.data.user.email,
                  password: el.data.data.user.password,
                  username: el.data.data.user.username,
                },
              }).then((el) => {
                console.log(el.data.data);
                if (el.data.data.accessToken) {
                  localStorage.setItem("accessToken", el.data.data.accessToken);
                  setIsLoggedInAtom(true);
                  // window.location.assign("/menu");
                }
              });
            } catch (error) {
              console.log("err :", error.message);
            }
          });
        });
    } catch (error) {
      console.log("error", error);
    }
  }
}
/**
 *           console.log(el);
          await axios({
            method: "get",
            url: "https://openapi.naver.com/v1/nid/me",
            headers: {
              Authorization: `Bearer ${el.data.accessToken.access_token}`,
            },
          }).then(async (el) => {
 */
