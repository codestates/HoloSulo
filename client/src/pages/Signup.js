import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import styled from "styled-components";
import axios from "axios";
import Logo from "../images/logo.png";

axios.defaults.withCredentials = true;

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
  margin-bottom: 15%;
`;

const Part2 = styled.div`
  margin-left: 5.5%;
  margin-bottom: 15%;
`;

const InputInfo = styled.div``;

const FontLogo = styled.div`
  width: 300px;
  height: 120px;
  background-image: url(${Logo});
  background-size: cover;
  margin-bottom: 10%;
`;

const TypoEmail = styled.input`
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
  align-items: center;
  flex-direction: column;
  justify-content: center;
`;

const Confirm = styled.button`
  width: 200px;
  background-color: #8c8c8c;
  color: whitesmoke;
  outline: none;
  font-family: monospace;
  margin-top: 5%;
  margin-bottom: 5%;
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

const Terms = styled.button`
  width: 200px;
  background-color: #8c8c8c;
  color: whitesmoke;
  outline: none;
  font-family: monospace;
  border: 0.2em;
  border-radius: 0.9em;
  width: 23em;
  height: 2em;
  margin-top: 1.5%;
  line-height: 25px;
  cursor: pointer;
  transition: background-color 0.2s linear;
  &:hover {
    background-color: #565656;
  }
`;

const Mention1 = styled.div`
  font-family: monospace;
  font-size: 15px;
  margin-bottom: 2%;
  margin-top: 10px;
  margin-left: 8%;
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
  margin-top: 5%;
  font-size: 13px;
  font-family: monospace;
`;

/*
const TrueMention = styled.div`
  font-family: monospace;
  font-size: 13px;
  color: #008c06;
  margin-left: 21%;
  margin-bottom: 8%;
  text-align: left;
`;
*/

export default function Signup() {
  const [userinfo, setuserinfo] = useState({
    email: "",
    password: "",
    nickname: "",
  });
  const [emailValidation, setEmailValidation] = useState("");
  const [passwordValidation, setPasswordValidation] = useState("");
  const [nicknameValidation, setNicknameValidation] = useState("");
  const [errorMessage, setErrorMessage] = useState("");
  const handleInputValue = (key) => (e) => {
    setuserinfo({ ...userinfo, [key]: e.target.value });
  };

  //  const emailForm =
  //    /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;

  const history = useNavigate();

  // 회원가입
  async function confirm() {
    if (
      userinfo.email === "" ||
      userinfo.password === "" ||
      userinfo.nickname === ""
    ) {
      setErrorMessage("모든 내용을 작성해 주세요");
      return null;
    }
    if (!(passwordValidation && nicknameValidation && emailValidation)) {
      setErrorMessage("다시 확인해주세요");
      return null;
    }
    setErrorMessage("");

    await axios(
      (`${process.env.REACT_APP_API_URL}/signup`,
      {
        method: "POST",
        data: {
          email: userinfo.email,
          password: userinfo.password,
          nickname: userinfo.nickname,
        },
        headers: {
          "Access-Control-Allow-Headers": "Content-Type",
          "Access-Control-Allow-Origin": "*",
          "Access-Control-Allow-Methods": "POST",
          "Access-Control-Allow-Credentials": "true",
        },
        withCredentials: true,
      })
        .then((res) => {
          history.push("/login");
        })
        .catch((e) => {
          setErrorMessage("회원가입에 실패하였습니다");
        })
    );
  }

  const checkingPassword = (e) => {
    console.log(e.target.value);
    if (userinfo.password !== e.target.value) {
      setErrorMessage("비밀번호가 일치하지 않습니다");
      setPasswordValidation(false);
    } else {
      setErrorMessage("");
      setPasswordValidation(true);
    }
  };
  //중복 email 찾기
  async function emailValidationCheck(e) {
    // if (!emailRule.test(String(userinfo.email))) {
    //   setEmailValidation(false);
    // }

    await axios(
      (`${process.env.REACT_APP_API_URL}/users/email` + userinfo.email,
      {
        method: "GET",
        headers: {
          "Access-Control-Allow-Headers": "Content-Type",
          "Access-Control-Allow-Origin": "*",
          "Access-Control-Allow-Methods": "POST",
          "Access-Control-Allow-Credentials": "true",
        },
        withCredentials: true,
      })
        .then((res) => {
          setEmailValidation(true);
        })
        .catch((e) => {
          setEmailValidation(false);
        })
    );
  }
  //중복 닉네임 찾기
  async function nicknameValidationCheck() {
    await axios(
      (`${process.env.REACT_APP_API_URL}/users/userName` + userinfo.nickname,
      {
        method: "GET",
        headers: {
          "Access-Control-Allow-Headers": "Content-Type",
          "Access-Control-Allow-Origin": "*",
          "Access-Control-Allow-Methods": "POST",
          "Access-Control-Allow-Credentials": "true",
        },
        withCredentials: true,
      })
        .then((res) => {
          setNicknameValidation(true);
        })
        .catch((e) => {
          setNicknameValidation(false);
        })
    );
  }

  return (
    <Total>
      <Link to="/">
        <FontLogo></FontLogo>
      </Link>

      <InputInfo>
        <Part1>
          <Mention1>email을 입력해주세요.</Mention1>
          <Compo>
            <TypoEmail
              type="text"
              placeholder="email"
              onChange={handleInputValue("email")}
            ></TypoEmail>
            <Check onClick={emailValidationCheck}>check</Check>
          </Compo>
          {emailValidation === "" || emailValidation === true ? (
            <Msg></Msg>
          ) : (
            <Msg>중복이거나 사용 불가능한 email입니다.</Msg>
          )}
        </Part1>

        <Part2>
          <Mention2>password를 입력해주세요.</Mention2>
          <Password
            type="password"
            placeholder="password"
            onChange={handleInputValue("password")}
          ></Password>
          <Password
            type="password"
            placeholder="check password"
            onChange={checkingPassword}
          ></Password>
        </Part2>

        <Part1>
          <Mention3>nickname을 입력해주세요.</Mention3>
          <Compo>
            <TypoNickname
              type="text"
              placeholder="nickname"
              onChange={handleInputValue("nickname")}
            ></TypoNickname>

            <Check onClick={nicknameValidationCheck}>check</Check>
          </Compo>

          {nicknameValidation === "" || nicknameValidation === true ? (
            <Msg></Msg>
          ) : (
            <Msg>이미 사용중인 닉네임입니다.</Msg>
          )}
        </Part1>
      </InputInfo>

      <Terms>회원약관</Terms>

      <Confirm onClick={confirm}>회원가입</Confirm>

      <Link to="/login">
        <Cancle>취소</Cancle>
      </Link>
      {errorMessage === "" ? null : <Msg>{errorMessage}</Msg>}
    </Total>
  );
}

/*
const [frontEmail, setFrontEmail] = useState("");
const [backEmail, setBackEmail] = useState(""); // Domain
const [email, setEmail] = useState("");

useEffect(() => {
  setEmail(frontEmail + "@" + backEmail);
}, [frontEmail]);

useEffect(() => {
  setEmail(frontEmail + "@" + backEmail);
}, [backEmail]);

useEffect(() => {}, [email]);

const [userInfo, setUserInfo] = useState({
  nickname: "",
  password: "",
  passwordCheck: "",
});

// password 유효성 검사
  useEffect(() => {
    validPassword(userInfo.password);
    equalPassword(userInfo.password, userInfo.passwordCheck);
  }, [userInfo]);
  

const userData = {
  email: email,
  nickname: userInfo.nickname,
  password: userInfo.password,
};

// check State
const [isEmail, setIsEmail] = useState(false);
const [isDupEmail, setIsDupEmail] = useState(false); //email 중복 check State
const [isDupNickname, setIsDupNickname] = useState(false); // nickname 중복 check State
const [isPassword, setIsPassword] = useState(false);
const [isPwdCheck, setIsPwdCheck] = useState(false);

// 가입 상태 State
const [isComplete, setIsComplete] = useState(false);

// message State
const [emailMessage, setEmailMessage] = useState("");
const [nicknameMessage, setNicknameMessage] = useState("");
const [passwordMessage, setPasswordMessage] = useState("");
const [passwordCheckMessage, setPasswordCheckMessage] = useState("");
const [checkMessage, setCheckMessage] = useState("");

// password check
 // 비밀번호 유효성
  const validPassword = (password) => {
    const regPassword = /^(?=.*[a-zA-Z])(?=.*[!@#$%^*+=-])(?=.*[0-9]).{7,25}$/;
    if (!regPassword.test(password)) {
      setIsPassword(false);
      setPasswordMessage(
        "숫자, 영문, 특수문자가 포함 된 7자리 이상 비밀번호를 입력해 주세요"
      );
    } else {
      setIsPassword(true);
      setPasswordMessage("사용가능한 비밀번호입니다");
    }
  };
  

const equalPassword = (password, cheeckPassword) => {
  if (password === cheeckPassword) {
    setIsPwdCheck(true);
    setPasswordCheckMessage("비밀번호가 일치합니다");
  } else {
    setIsPwdCheck(false);
    setPasswordCheckMessage("비밀번호가 일치하지 않습니다");
  }
};

// email 중복 check
const checkEmail = () => {
  if (frontEmail.length === 0 || backEmail.length === 0) {
    setIsDupEmail(false);
    setEmailMessage("사용 불가능 한 email 입니다");
  } else {
    axios
      .post("/email", { email: userData.email })
      .then((res) => {
        setIsEmail(true);
        setIsDupEmail(true);
        setEmailMessage("사용 가능한 email입니다");
      })
      .catch((err) => {
        const resMsg = err.response.data;
        if (resMsg === "Overlap") {
          setIsEmail(false);
          setIsDupEmail(false);
          setEmailMessage("이미 회원가입된 email입니다");
        } else if (resMsg === "Empty body") {
          setIsEmail(false);
          setIsDupEmail(false);
          setEmailMessage("사용 불가능 한 email 입니다");
        }
      });
  }
};

const checkNickname = () => {
  axios
    .post("/nickname", { nickname: userData.nickname })
    .then((res) => {
      setIsDupNickname(true);
      setNicknameMessage("사용 가능한 닉네임입니다");
    })
    .catch((err) => {
      const resMsg = err.response.data;
      if (resMsg === "Overlap") {
        setIsDupNickname(false);
        setNicknameMessage("이미 사용 중인 닉네임입니다");
      } else if (resMsg === "Empty body") {
        setIsDupNickname(false);
        setNicknameMessage("사용 불가능한 닉네임입니다 ");
      }
    });
};

const handleComplete = () => {
  axios.post("/signup", userData).then((res) => {
    const resMsg = res.data;
  });
  setIsComplete(true);
};
*/
