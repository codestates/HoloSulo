import axios from "axios";
import { useSetRecoilState } from "recoil";
import { isLoggedInAtom } from "../atom";
// import { useNavigate } from "react-router-dom";
export default async function Logout() {
  const setIsLoggedInAtom = useSetRecoilState(isLoggedInAtom);
  await axios({
    method: "post",
    url: `${process.env.REACT_APP_API_URL}/users/logout`,
    data: {
      accessToken: localStorage.getItem("accessToken"),
    },
  }).then((data) => {
    if (data.data.response === "ok") {
      localStorage.removeItem("accessToken");
      setIsLoggedInAtom(false);
      window.location.href = "/";
    } else {
      console.log("토큰이 잘못 됬습니다.");
    }
  });
}
