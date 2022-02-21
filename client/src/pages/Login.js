import { React, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";
import styled from "styled-components";
import Logo from "../images/logo.png";
import naverLogo from "../images/naverLogo.png";
import kakaoLogo from "../images/kakaoLogo.png";
import kakaoLoginClickHandler from "../components/KaKaoLogin";
import naverLoginClickHandler from "../components/NaverLogin";

axios.defaults.withCredentials = true;

const Total = styled.div`
  display: flex;
  width: 100%;
  height: 100vh;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  background-color: #f3f1f0;
  outline: none;
`;

const Space = styled.div`
  margin-top: 2.5%;
`;

const FontLogo = styled.div`
  width: 300px;
  height: 120px;
  background-image: url(${Logo});
  background-size: cover;
`;

const LoginButton = styled.button`
  width: 200px;
  background-color: #8c8c8c;
  color: whitesmoke;
  outline: none;
  font-family: monospace;
  margin-top: 30%;
  border: 0.2em;
  border-radius: 0.9em;
  width: 23em;
  height: 2em;
  align-items: center;
  text-align: auto;
  vertical-align: center;
  flex-direction: column;
  line-height: 25px;
  cursor: pointer;
  transition: background-color 0.2s linear;
  &:hover {
    background-color: #565656;
  }
`;
const Email = styled.input`
  width: 200px;
  background-color: #e8e8e8;
  color: #707070;
  outline: none;
  font-family: monospace;
  border: 0.2em;
  border-radius: 0.9em;
  width: 23em;
  height: 2em;
  margin-top: 22%;
  padding-left: 10px;
  display: flex;
  align-items: center;
  flex-direction: column;
  justify-content: center;
`;

const Password = styled.input`
  width: 200px;
  background-color: #e8e8e8;
  color: #707070;
  outline: none;
  font-family: monospace;
  border: 0.2em;
  border-radius: 0.9em;
  width: 23em;
  height: 2em;
  margin-top: 10%;
  padding-left: 10px;
  display: flex;
  align-items: center;
  flex-direction: column;
  justify-content: center;
`;

const GuestLoginbut = styled.button`
  font-family: monospace;
  border: 0;
  background-color: #f3f1f0;
  cursor: pointer;
`;

const SignUpButton = styled.button`
  font-family: monospace;
  border: 0;
  background-color: #f3f1f0;
  margin-right: 8%;
  cursor: pointer;
`;

const Slash = styled.span`
  font-family: monospace;
  margin-left: 1%;
  margin-right: 1%;
`;

const SocialLoginButton1 = styled.div`
  background-image: url(${naverLogo});
  width: 50px;
  height: 50px;
  background-size: cover;
  margin-top: 25%;

  cursor: pointer;
`;

const SocialLoginButton2 = styled.div`
  background-image: url(${kakaoLogo});
  width: 50px;
  height: 50px;
  background-size: cover;
  margin-top: 25%;
  margin-left: 30%;
  cursor: pointer;
`;

const Compo = styled.div`
  width: 160px;
  height: 130px;
  display: flex;
  margin-top: 7%;
`;

const LoginErr = styled.div`
  color: #f06363;
  margin-top: 5%;
  font-size: 13px;
  font-family: monospace;
`;

export default function Login(props) {
  const [userEmail, setUserEmail] = useState("");
  const [userPassword, setUserPassword] = useState("");
  const [userLoginError, setUserLoginError] = useState("");
  const [userInfo, setUserInfo] = useState({});

  const history = useNavigate();

  const handleLogin = async () => {
    const userData = {
      email: userEmail,
      password: userPassword,
    };

    // id, pw 입력란 초기화
    setUserEmail("");
    setUserPassword("");

    console.log(userData);

    // 로그인 JWT 인증 처리 (API POST : /login)
    await axios(`${process.env.REACT_APP_API_URL}/login`, {
      method: "POST",
      data: userData,
      headers: {
        "Access-Control-Allow-Headers": "Content-Type",
        "Access-Control-Allow-Origin": "*",
        "Access-Control-Allow-Methods": "POST",
        "Access-Control-Allow-Credentials": "true",
      },
      withCredentials: true,
    })
      .then((res) => {
        const { accessToken } = res.data;

        // 로컬스토리지 accessToken 담기
        localStorage.setItem("accessToken", accessToken);

        // API 요청하는 콜마다 헤더에 accessToken 담아 보내도록 설정
        axios.defaults.headers.common[
          "Authorization"
        ] = `Bearer ${accessToken}`;
        console.log(res.data);

        // 윗 줄에 기본 헤더로 `Bearer ${accessToken}`를 넣었기 때문에
        // 해당 accesstoken이 유효하면 GET 요청으로 로그인 회원 정보를 받아옴
        axios(`${process.env.REACT_APP_API_URL}/token-valid-check`, {
          method: "GET",
          headers: {
            "Access-Control-Allow-Headers": "Content-Type",
            "Access-Control-Allow-Origin": "*",
            "Access-Control-Allow-Methods": "GET",
            "Access-Control-Allow-Credentials": "true",
          },
          withCredentials: true,
        })
          .then((res) => {
            // id, pw가 맞고 토큰이 유효하면 받아온 데이터를 userInfo에 저장

            props.setUserInfo(res.data);
            setUserInfo(props.userInfo);
            console.log(userInfo);

            // useHistory를 사용하여 로그인 성공시 menu로 이동
            setUserEmail("");
            setUserPassword("");
            setUserLoginError("");
            history.push("/menu");
            props.setLoginOn(true);
          })
          .catch((err) => {
            console.error(err);
          });
      })
      .catch((err) => {
        console.error(err);
        console.log(
          `email = ${userData.email}, password = ${userData.password}`
        );

        if (userData.email === "" && userData.password === "") {
          setUserLoginError("email 또는 password 를 입력해주세요.");
        } else {
          setUserLoginError("emaill 또는 password 가 잘못 입력되었습니다.");
        }
        if (err.response) {
          // 에러에 response가 있으면 해당 data를 출력
          console.log(err.response.data);
        }
      });
  };

  // 이메일 입력 상태관리
  const handleChangeEmail = (e) => {
    setUserEmail(e.target.value);
    console.log(userEmail);
  };

  // 비밀번호 입력 상태관리
  const handleChangePassword = (e) => {
    setUserPassword(e.target.value);
    console.log(userPassword);
  };

  return (
    <>
      <Total>
        <center>
          <Link to="/">
            <FontLogo></FontLogo>
          </Link>

          <Email
            type="text"
            placeholder="email"
            onChange={handleChangeEmail}
          ></Email>
          <Space></Space>

          <Password
            type="password"
            placeholder="password"
            onChange={handleChangePassword}
          ></Password>
          <LoginErr>{userLoginError}</LoginErr>

          <LoginButton onClick={handleLogin}>Login</LoginButton>

          <Compo>
            <SocialLoginButton1></SocialLoginButton1>
            <SocialLoginButton2
              onClick={kakaoLoginClickHandler}
            ></SocialLoginButton2>
          </Compo>

          <Space></Space>
          <Link to="/menu">
            <GuestLoginbut>Guest Login</GuestLoginbut>
          </Link>
          <Slash>/</Slash>
          <Link to="/signup">
            <SignUpButton>sign Up</SignUpButton>
          </Link>
        </center>
      </Total>
    </>
  );
}
