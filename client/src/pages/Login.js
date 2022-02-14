import React, { useEffect, useState } from "react";
import { Link, useHistory } from "react-router-dom";
import styled from "styled-components";
import axios from "axios";
import naverLogo from "../images/naverLogo.png";
import kakaoLogo from "../images/kakaoLogo.png";

/*
export default function Login ({ handleResponseSuccess }) {
  const history = useHistory();
  const [errorMessage, setErrorMessage] = useState("");
  const [loginInfo, setLoginInfo] = useState({
    email: "",
    password: ""
  });
  const handleInputValue = (key) => (e) => {
    setLoginInfo({ ...loginInfo, [key]: e.target.value });
  };

  const handleLogin = () => {
    const { email, password } = loginInfo;
    if (! email || !password) {
      setErrorMessage("이메일 비밀번호를 모두 입력해주세요.");
    } else {
      axios
      .post(`${process.env.REACT_APP_API_URL}/login`, loginInfo, {
        headers : { "Content-Type" : "application/json" },
        withCredentials : true,
      })
      .then((res) => {
        localStorage.setItem("accessToken", res.data.data.access_token);
        setErrorMessage("");
        handleResponseSuccess();
        history.push("/");
      })
      .catch((err) => {
        console.log(err);
      });
    }
  }
};
*/

function Logined() {
  return (
    <Total>
      <center>
        <Logo></Logo>

        <Email
          type="text"
          placeholder="email"
          onfocus="this.placeholder=''"
          onblur="this.placeholder='email'"
          //onChange={handleInputValue("email")}
        ></Email>
        <Space></Space>

        <Password
          type="password"
          placeholder="password"
          onfocus="this.placeholder=''"
          onblur="this.placeholder='password'"
          //onChange={handleInputValue("email")}
        ></Password>

        <Link to="/Menu">
          <LoginButton>Login</LoginButton>
        </Link>

        <Space></Space>
        <SocialLoginButton1></SocialLoginButton1>
        <SocialLoginButton2></SocialLoginButton2>

        <Space></Space>
        <Link to="/Menu">
          <GestLoginButton>Guest Login</GestLoginButton>
        </Link>
        <Slash>/</Slash>
        <Link to="/signup">
          <SignUpButton>sign Up</SignUpButton>
        </Link>
      </center>
    </Total>
  );
}

const Total = styled.body`
  width: 100vw;
  height: 100vh;
  padding-top: 25%;
  background-color: #f3f1f0;
  outline: none;
  align-items: center;
  flex-direction: column;
  justify-content: center;
`;

const Space = styled.div`
  margin-top: 2%;
`;

const Logo = styled.title``;

const LoginButton = styled.button`
  width: 200px;
  background-color: #8c8c8c;
  color: whitesmoke;
  outline: none;
  font-family: monospace;
  margin-top: 8%;
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
  margin-top: 2.5%;
  display: flex;
  align-items: center;
  flex-direction: column;
  justify-content: center;
`;

const GestLoginButton = styled.button`
  font-family: monospace;
  border: 0;
  background-color: #f3f1f0;
  margin-top: 3%;
  cursor: pointer;
`;

const SignUpButton = styled.button`
  font-family: monospace;
  border: 0;
  background-color: #f3f1f0;
  margin-top: 3%;
  cursor: pointer;
`;

const Slash = styled.span`
  font-family: monospace;
  margin-left: 1%;
  margin-right: 1%;
  margin-top: 3%;
`;

const SocialLoginButton1 = styled.div`
  background-image: url(${naverLogo});
  width: 45px;
  height: 45px;
  background-size: cover;
  margin-top: 6%;
  flex: auto;
  cursor: pointer;
`;

const SocialLoginButton2 = styled.div`
  background-image: url(${kakaoLogo});
  width: 45px;
  height: 45px;
  background-size: cover;
  margin-left: 2%;
  flex: auto;
  cursor: pointer;
`;

export default Logined;
