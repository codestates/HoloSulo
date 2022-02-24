import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import styled from "styled-components";
import axios from "axios";
import Logo from "../images/logo.png";

const Total = styled.div`
  display: flex;
  width: 100%;
  height: 100vh;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  background-color: #f3f1f0;
`;

const Part1 = styled.div`
  margin-bottom: 13%;
`;

const Part2 = styled.div`
  margin-left: 5.5%;
  margin-bottom: 15%;
`;

const Space = styled.div`
  margin-top: 15%;
`;

const InputInfo = styled.div``;

const FontLogo = styled.div`
  width: 300px;
  height: 120px;
  background-image: url(${Logo});
  background-size: cover;
  margin-bottom: 15%;
  margin-top: -10%;
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
  margin-bottom: 4.5%;
  padding-left: 10px;
  display: flex;
  align-items: center;
  flex-direction: column;
  justify-content: center;
`;

const TypoNickname = styled.input`
  width: 200px;
  background-color: #e8e8e8;
  color: #707070;
  outline: none;
  font-family: monospace;
  border: 0.2em;
  border-radius: 0.9em;
  width: 23em;
  height: 2em;
  padding-left: 10px;
  margin-right: 2%;
  display: flex;
`;

const Check = styled.button`
  width: 200px;
  background-color: #8c8c8c;
  color: whitesmoke;
  outline: none;
  font-family: monospace;
  margin-left: 2%;
  border: 0.2em;
  border-radius: 0.9em;
  width: 5em;
  height: 2em;
  line-height: 25px;
  cursor: pointer;
  transition: background-color 0.2s linear;
  &:hover {
    background-color: #565656;
  }
`;

const Compo = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  margin-bottom: 3%;
  padding-left: 5.5%;
  // margin-bottom: 2%; *삼항연산자 들어왔을때
`;

const Edit = styled.button`
  width: 200px;
  background-color: #8c8c8c;
  color: whitesmoke;
  outline: none;
  font-family: monospace;
  border: 0.2em;
  border-radius: 0.9em;
  width: 23em;
  height: 2em;
  margin-bottom: 1.5%;
  margin-top: 2%;
  line-height: 25px;
  cursor: pointer;
  transition: background-color 0.2s linear;
  &:hover {
    background-color: #565656;
  }
`;

const Cancle = styled.button`
  width: 200px;
  background-color: #8c8c8c;
  color: whitesmoke;
  outline: none;
  font-family: monospace;
  border: 0.2em;
  border-radius: 0.9em;
  width: 23em;
  height: 2em;
  align-items: center;
  line-height: 25px;
  cursor: pointer;
  transition: background-color 0.2s linear;
  &:hover {
    background-color: #565656;
  }
`;

const Mention2 = styled.div`
  font-family: monospace;
  font-size: 15px;
  margin-bottom: 2%;
  margin-top: 10px;
  margin-left: 2.7%;
`;

const Mention3 = styled.div`
  font-family: monospace;
  font-size: 15px;
  margin-bottom: 2%;
  margin-top: 10px;
  margin-left: 7.8%;
`;

const Msg = styled.div`
  color: #f06363;
  margin-left: 2%;
  margin-top: -2.8%;
  font-size: 12px;
  font-family: monospace;
  font-weight: 500;
`;

const Msg2 = styled.div`
  color: #117326;
  margin-top: 5%;
  font-size: 12px;
  font-family: monospace;
  font-weight: 500;
`;

function EditMypage() {
  const [nicknameMessage, setNicknameMessage] = useState("");
  const [isDupNickname, setIsDupNickname] = useState(false);

  // password
  const [passwordInfo, setPasswordInfo] = useState({
    newPassword: "",
    checkNewPassword: "",
  });

  // nickname
  const [nicknameInfo, setNicknameInfo] = useState({
    newNickname: "",
  });

  // 비밀번호 변경 상태 state
  const [isComplete, setIsComplete] = useState(false);
  const history = useNavigate();

  // nickname
  const [isNicknameComplete, setIsNicknameComplete] = useState(false);

  const handleComplete = () => {
    // mypage로 리다이렉트
    setIsComplete(true);
    history("/mypage");
  };

  const handleComplete2 = () => {
    // mypage로 리다이렉트
    setIsNicknameComplete(true);
    history("/mypage");
  };

  // 입력상태 state
  const [isNewPassword, setIsNewPassword] = useState(false);
  const [isCheckNewPassword, setIsCheckNewPassword] = useState(false);
  const [passwordMessage, setPasswordMessage] = useState(""); // 새로운 패스워드 유효성검사 메세지 state
  const [passwordCheckMessage, setPasswordCheckMessage] = useState(""); // 새로운 패스워드 확인 메세지 state

  const handleInputValue = (key) => (e) => {
    setPasswordInfo({ ...passwordInfo, [key]: e.target.value });
  };

  const handleInputValue2 = (key) => (e) => {
    setNicknameInfo({ ...nicknameInfo, [key]: e.target.value });
  };

  // nickname  입력상태 state
  const [isNewNickname, setIsNewNickname] = useState(false);

  // nickname 중복체크
  const dupNickname = (nickname) => {
    axios
      .post(
        `${process.env.REACT_APP_API_URL}/users/userName`,
        { username: nicknameInfo.newNickname },
        { httpOnly: true, withCredentials: true }
      )
      .then((res) => {
        //const resMsg = res.data.message;
        if (res.data.response === "ok") {
          setIsDupNickname(true);
          setNicknameMessage("사용가능한 닉네임입니다.");
        }
      })
      .catch((err) => {
        console.log(err.response);
        if (err.response.data.message === "user name conflict") {
          setIsDupNickname(false);
          setNicknameMessage("이미 사용중인 닉네임입니다.");
        }
        throw err;
      });
  };

  // newPassword 유효성검사
  const validPassword = (newPassword) => {
    const regPassword = /^(?=.*[a-zA-Z])(?=.*[!@#$%^*+=-])(?=.*[0-9]).{8,25}$/;
    if (!regPassword.test(newPassword)) {
      setIsNewPassword(false);
      setPasswordMessage(
        "숫자+영문+특수문자 조합으로 8자리 이상 입력해주세요!"
      );
    } else {
      setIsNewPassword(true);
      setPasswordMessage("");
    }
  };

  // newPassword 확인 유효성검사
  const checkPassword = (password, checkPassword) => {
    if (password === checkPassword) {
      setIsCheckNewPassword(true);
      setPasswordCheckMessage("");
    } else {
      setIsCheckNewPassword(false);
      setPasswordCheckMessage("비밀번호가 일치하지 않습니다.");
    }
  };

  const submitPassword = () => {
    axios
      .patch(
        "/users/password",
        {
          password: passwordInfo.newPassword,
        },
        { withCredentials: true }
      )
      .then((res) => {
        console.log(res.data.message);
        const resMsg = res.data.message;
        if (resMsg === "ok") {
          handleComplete();
          console.log("비밀번호가 성공적으로 변경되었습니다.");
        } else {
          console.log("비밀번호 변경이 실패하였습니다.");
        }
      })
      .catch((err) => {
        throw err;
      });
  };

  const submitNickname = () => {
    axios
      .patch(
        "/users/username",
        {
          nickname: nicknameInfo.newNickname,
        },
        { withCredentials: true }
      )
      .then((res) => {
        console.log(res.data.message);
        const resMsg = res.data.message;
        if (resMsg === "ok") {
          handleComplete2();
          console.log("nickname이 성공적으로 변경되었습니다.");
        } else {
          console.log("nickname 변경이 실패하였습니다.");
        }
      })
      .catch((err) => {
        throw err;
      });
  };

  return (
    <Total>
      <Link to="/">
        <FontLogo></FontLogo>
      </Link>

      <InputInfo>
        <Part2>
          <Mention2>password 변경</Mention2>
          <Password
            type="password"
            placeholder="change password"
            onChange={handleInputValue("newPassword")}
            onBlur={() => {
              validPassword(passwordInfo.newPassword);
            }}
          ></Password>
          {isNewPassword ? (
            passwordInfo.newPassword.length === 0 ? null : (
              <Msg>{passwordMessage}</Msg>
            )
          ) : passwordInfo.newPassword.length === 0 ? null : (
            <Msg>{passwordMessage}</Msg>
          )}

          <Password
            type="password"
            placeholder="check password"
            onChange={handleInputValue2("checkNewPassword")}
            onBlur={() => {
              checkPassword(
                passwordInfo.newPassword,
                passwordInfo.checkNewPassword
              );
            }}
          ></Password>
          {isCheckNewPassword ? (
            passwordInfo.checkNewPassword.length === 0 ? null : (
              <Msg>{passwordCheckMessage}</Msg>
            )
          ) : (
            <Msg>{passwordCheckMessage}</Msg>
          )}
          <Space></Space>
          <Edit onClick={submitPassword}>password 변경 저장</Edit>
        </Part2>

        <Part1>
          <Mention3>nickname 변경</Mention3>
          <Compo>
            <TypoNickname
              type="text"
              placeholder="nickname"
              onChange={handleInputValue("nickname")}
              onBlur={() => {}}
            ></TypoNickname>
            <Check
              disabled={
                nicknameInfo.newNickname.length !== 0 ? false : "disabled"
              }
              onClick={() => {
                dupNickname(nicknameInfo.newNickname);
              }}
            >
              check
            </Check>
          </Compo>
          {isDupNickname ? (
            <Msg2>{nicknameMessage}</Msg2>
          ) : nicknameInfo.newNickname.length === 0 ? null : (
            <Msg>{nicknameMessage}</Msg>
          )}
        </Part1>
      </InputInfo>
      <Edit onClick={submitNickname}>nickname 변경 저장</Edit>

      <Link to="/mypage">
        <Cancle>취소</Cancle>
      </Link>
    </Total>
  );
}

export default EditMypage;
