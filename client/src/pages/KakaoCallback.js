import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { useSetRecoilState } from "recoil";
import { kakaoAuthenticate } from "../api";
import { isLoggedInAtom } from "../atom";

function KakaoCallback() {
  const setIsLoggedIn = useSetRecoilState(isLoggedInAtom);
  const navigate = useNavigate();
  useEffect(() => {
    const params = new URL(document.location.toString()).searchParams;
    const code = params.get("code");

    kakaoAuthenticate(code).then((res) => {
      if (res.status === 200) {
        localStorage.setItem("accessToken", res.data.data.accessToken);
        setIsLoggedIn(true);
        navigate("/menu");
      }
    });
  }, []);
  return <></>;
}

export default KakaoCallback;
