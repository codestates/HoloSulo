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
      console.log("호출");
      await axios
        .post(
          `${process.env.REACT_APP_API_URL}/naver/api/callback`,
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
          console.log(el);
          if (el.data.data.accessToken) {
            localStorage.setItem("accessToken", el.data.data.accessToken);
            setIsLoggedInAtom(true);
            window.location.assign("/menu");
          }
        });
    } catch (error) {
      console.log("error", error);
    }
  }
}
