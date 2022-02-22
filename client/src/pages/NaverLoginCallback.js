import axios from "axios";
import { useEffect } from "react";

export default async function NaverLoginCallback() {
  useEffect(() => {
    const href = window.location.href;
  }, []);
  let params = new URL(document.location).searchParams;
  let code = params.get("code");
  let state = params.get("state");
  try {
    await axios
      .post(`http://localhost:8080/naver/api/callback`, {
        code: code,
        state: state,
      })
      .then((data) => {
        if (data.data.accessToken.access_token) {
          window.location.replace("/menu");
        }
      });
  } catch (error) {
    console.log("error", error);
  }
  return;
}
//window.location.replace("/menu");
