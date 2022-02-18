import { useState, React } from "react";
import { Link } from "react-router-dom";
import axios from "axios";
import styled from "styled-components";
import Logo from "../images/logo.png";
import naverLogo from "../images/naverLogo.png";
import kakaoLogo from "../images/kakaoLogo.png";
import kakaoLoginClickHandler from "../components/KaKaoLogin";
import naverLoginClickHandler from "../components/NaverLogin";

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

export default function Login() {
  const [isCorrect, setIsCorrect] = useState(true);
  const [userInfo, setUserInfo] = useState({
    email: null,
    password: null,
  });

  const handleChange = (e) => {
    setUserInfo({
      ...userInfo,
      [e.target.name]: e.target.value,
    });
  };

  const guestLogin = () => {
    axios
      .post(`${process.env.REACT_APP_SERVER_API}/guest`, "", {
        withCredentials: true,
      })
      .then((res) => {
        if (!res.data.data) {
          setIsCorrect(false);
        } else if (res.data.data) {
          window.location.replace("/");
        }
      })
      .catch((err) => {
        console.log(err);
      });
  };

  const handleLogin = async () => {
    const { email, password } = userInfo;
    if (userInfo) {
      await axios
        .post(
          `${process.env.REACT_APP_SERVER_API}/login`,
          {
            email: email,
            password: password,
          },
          { withCredentials: true }
        )
        .then((res) => {
          if (!res.data.data) {
            setIsCorrect(false);
          } else if (res.data.data) {
            console.log("로그인성공");

            window.location.replace("/menu");
          }
        })
        .catch((err) => {
          console.log(err);
        });
    }
  };

  const EnterLogin = (e) => {
    if (e.key === "Enter") {
      handleLogin();
    }
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
            onChange={handleChange}
          ></Email>
          <Space></Space>

          <Password
            type="password"
            placeholder="password"
            onChange={handleChange}
            onKeyPress={EnterLogin}
          ></Password>

          <LoginButton onClick={handleLogin}>Login</LoginButton>

          <Space></Space>
          <Compo>
            <SocialLoginButton1></SocialLoginButton1>
            <SocialLoginButton2
              onClick={kakaoLoginClickHandler}
            ></SocialLoginButton2>
          </Compo>

          <Space></Space>
          <Link to="/menu">
            <GuestLoginbut onClick={guestLogin}>Guest Login</GuestLoginbut>
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
