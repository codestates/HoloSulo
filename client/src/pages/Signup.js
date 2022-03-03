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
  margin-bottom: 10%;
`;

const Part2 = styled.div`
  margin-left: 5.5%;
  margin-bottom: 10%;
`;

const Part3 = styled.div`
  margin-left: 7.5%;
  margin-top: -3%;
`;

const Part4 = styled.div`
  margin-left: 1.9%;
  margin-top: -5.5%;
  margin-bottom: 1%;
`;

const Part5 = styled.div`
  margin-left: 7.5%;
  margin-top: -3%;
  margin-bottom: 1%;
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
  margin-top: 2%;
  margin-bottom: 2%;
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
  margin-bottom: 7%;
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
  // margin-bottom: 3%;
  padding-left: 5.5%;
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

//Agreement
const CommonForm = styled.div`
  display: flex;
  flex-direction: column;
`;
const DescSpan = styled.span`
  color: gray;
  margin: 0 10px 10px 0;
  font-size: 16px;
`;
const EssentialSpan = styled(DescSpan)`
  color: #36c5f0;
`;

const OptionSpan = styled(DescSpan)`
  color: rgb(45, 45, 45);
`;
const Label = styled.label`
  display: block;
`;
const AgreementSection = styled.form`
  border: solid 1px lightgray;
  padding: 15px;
  margin-bottom: 5px;
`;

const AgreementSpan = styled(DescSpan)`
  display: inline-block;
  margin-bottom: 10px;
`;

export default function Signup() {
  const [userinfo, setUserinfo] = useState({
    email: "",
    nickname: "",
    password: "",
    passwordCheck: "",
  });

  // State Msg
  const [emailMessage, setEmailMessage] = useState("");
  const [nicknameMessage, setNicknameMessage] = useState("");
  const [passwordMessage, setPasswordMessage] = useState("");
  const [passwordCheckMessage, setPasswordCheckMessage] = useState("");

  // Validation
  const [isEmail, setIsEmail] = useState(false);
  const [isDupEmail, setIsDupEmail] = useState(false); // 이메일 중복 State
  const [isDupNickname, setIsDupNickname] = useState(false);
  const [isPassword, setIsPassword] = useState(false);
  const [isPwdCheck, setIsPwdCheck] = useState(false);

  // 회원가입 상태 state
  const [isComplete, setIsComplete] = useState(false);
  const navigate = useNavigate();

  const handleComplete = () => {
    axios
      .post(
        `${process.env.REACT_APP_API_URL}/users/signup`,
        {
          email: userinfo.email,
          password: userinfo.password,
          nickname: userinfo.nickname,
        },
        { httpOnly: true, withCredentials: true }
      )
      .then((res) => {
        const successMsg = res.data.response;
        if (successMsg) {
          setIsComplete(true);
          // setTimeout(() => {
          navigate("/login");
          // }, 3000);
        }
      })
      .catch((err) => {
        throw err;
      });
  };

  const handleInputValue = (key) => (e) => {
    setUserinfo({ ...userinfo, [key]: e.target.value });
  };

  // email validation
  const validEmail = (email) => {
    const regEmail =
      /^([0-9a-zA-Z_.-]+)@([0-9a-zA-Z_-]+)(\.[0-9a-zA-Z_-]+){1,2}$/;
    if (regEmail.test(email) === false) {
      setIsEmail(false);
      setEmailMessage("email 형식이 올바르지 않습니다.");
    } else {
      setIsEmail(true);
      setEmailMessage("올바른 email 형식입니다. 중복 체크를 해주세요.");
    }
  };
  // password validation
  const validPassword = (password) => {
    const regPassword = /^(?=.*[a-zA-Z])(?=.*[!@#$%^*+=-])(?=.*[0-9]).{8,25}$/;
    if (!regPassword.test(password)) {
      setIsPassword(false);
      setPasswordMessage(
        "숫자+영문+특수문자 조합으로 8자리 이상 입력해주세요."
      );
    } else {
      setIsPassword(true);
      setPasswordMessage("사용가능한 비밀번호 입니다.");
    }
  };
  // password confirm validation
  const checkPassword = (password, cheeckPassword) => {
    if (password === cheeckPassword) {
      setIsPwdCheck(true);
      setPasswordCheckMessage("비밀번호가 일치합니다.");
    } else {
      setIsPwdCheck(false);
      setPasswordCheckMessage("비밀번호가 일치하지 않습니다.");
    }
  };

  // email 중복 체크
  const dupEmail = (email) => {
    axios
      .post(
        `${process.env.REACT_APP_API_URL}/users/email`,
        { email: userinfo.email },
        { httpOnly: true, withCredentials: true }
      )
      .then((res) => {
        // const resMsg = res.data.message;
        if (res.data.response === "ok") {
          setIsDupEmail(true);
          setEmailMessage("사용가능한 이메일입니다.");
        }
      })
      .catch((err) => {
        console.log(err.response);
        if (err.response.data.message === "user email conflict") {
          setIsDupEmail(false);
          setEmailMessage("이미 회원가입된 이메일입니다.");
        }
        throw err;
      });
  };

  // nickName 중복 체크
  const dupNickname = (nickname) => {
    axios
      .post(
        `${process.env.REACT_APP_API_URL}/users/userName`,
        { username: userinfo.nickname },
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

  const submitAll = () => {
    const { email, nickname, password, passwordCheck } = userinfo;
    const stateInfo = [
      { email, nickname, password, passwordCheck },
      {
        isEmail,
        isDupEmail,
        isDupNickname,
        isPassword,
        isPwdCheck,
      },
    ];
    if (
      isEmail &&
      isDupEmail &&
      isDupNickname &&
      isPassword &&
      isPwdCheck === true &&
      checkedItems.includes("use" && "age" && "agree")
    ) {
      handleComplete();
      console.log("회원가입 요청이 성공적으로 전달되었습니다.");
    } else {
      console.log("회원가입 요청이 실패하였습니다.");
    }
    console.log(stateInfo);
  };

  //Agreement
  const [checkedItems, setCheckedItems] = useState([]);
  const handleCheckChange = (checked, val) => {
    if (checked) {
      setCheckedItems([...checkedItems, val]);
    } else {
      setCheckedItems(checkedItems.filter((el) => el !== val));
    }
  };
  const handleAllCheck = (checked) => {
    if (checked) {
      setCheckedItems(["age", "use", "agree", "event"]);
    } else {
      setCheckedItems([]);
    }
  };

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
              onBlur={() => {
                validEmail(userinfo.email);
              }}
            ></TypoEmail>
            <Check
              disabled={isEmail ? false : "disabled"}
              onClick={() => {
                dupEmail(userinfo.email);
              }}
            >
              check
            </Check>
          </Compo>
          <Part3>
            {isDupEmail === true ? (
              <Msg2>{emailMessage}</Msg2>
            ) : userinfo.email.length === 0 ? null : (
              <Msg>{emailMessage}</Msg>
            )}
          </Part3>
        </Part1>

        <Part2>
          <Mention2>password를 입력해주세요.</Mention2>
          <Password
            type="password"
            placeholder="password"
            onChange={handleInputValue("password")}
            onBlur={() => {
              validPassword(userinfo.password);
            }}
          ></Password>
          <Part4>
            {isPassword ? (
              <Msg2>{passwordMessage}</Msg2>
            ) : userinfo.password.length === 0 ? null : (
              <Msg>{passwordMessage}</Msg>
            )}
          </Part4>

          <Password
            type="password"
            placeholder="check password"
            onChange={handleInputValue("passwordCheck")}
            onBlur={() => {
              checkPassword(userinfo.password, userinfo.passwordCheck);
            }}
          ></Password>
          <Part4>
            {isPwdCheck ? (
              userinfo.passwordCheck.length === 0 ? null : (
                <Msg2>{passwordCheckMessage}</Msg2>
              )
            ) : userinfo.passwordCheck.length === 0 ? null : (
              <Msg>{passwordCheckMessage}</Msg>
            )}
          </Part4>
        </Part2>

        <Part1>
          <Mention3>nickname을 입력해주세요.</Mention3>
          <Compo>
            <TypoNickname
              type="text"
              placeholder="nickname"
              onChange={handleInputValue("nickname")}
              onBlur={() => {}}
            ></TypoNickname>

            <Check
              disabled={userinfo.nickname.length !== 0 ? false : "disabled"}
              onClick={() => {
                dupNickname(userinfo.nickname);
              }}
            >
              check
            </Check>
          </Compo>
          <Part5>
            {isDupNickname ? (
              <Msg2>{nicknameMessage}</Msg2>
            ) : userinfo.nickname.length === 0 ? null : (
              <Msg>{nicknameMessage}</Msg>
            )}
          </Part5>
        </Part1>
      </InputInfo>

      <CommonForm>
        <AgreementSection>
          <Label>
            <input
              type="checkbox"
              checked={checkedItems.length === 4 ? true : false}
              onChange={(e) => handleAllCheck(e.target.checked)}
            ></input>
            <AgreementSpan>전체동의 </AgreementSpan>
          </Label>
          <hr></hr>
          <Label>
            <input
              type="checkbox"
              value="age"
              checked={checkedItems.includes("age")}
              onChange={(e) =>
                handleCheckChange(e.target.checked, e.target.value)
              }
              required
            ></input>
            <AgreementSpan>
              만 14세 이상입니다.{" "}
              <EssentialSpan className="essential">(필수)</EssentialSpan>
            </AgreementSpan>
            <br></br>
          </Label>
          <Label>
            <input
              type="checkbox"
              value="use"
              checked={checkedItems.includes("use")}
              onChange={(e) =>
                handleCheckChange(e.target.checked, e.target.value)
              }
              required
            ></input>
            <AgreementSpan>
              이용약관{" "}
              <EssentialSpan className="essential">(필수)</EssentialSpan>
            </AgreementSpan>
            <br></br>
          </Label>
          <Label>
            <input
              type="checkbox"
              value="agree"
              checked={checkedItems.includes("agree")}
              onChange={(e) =>
                handleCheckChange(e.target.checked, e.target.value)
              }
              required
            ></input>
            <AgreementSpan>
              개인정보수집 및 이용동의{" "}
              <EssentialSpan className="essential">(필수)</EssentialSpan>
            </AgreementSpan>
            <br></br>
          </Label>
          <Label>
            <input
              type="checkbox"
              value="event"
              checked={checkedItems.includes("event")}
              onChange={(e) =>
                handleCheckChange(e.target.checked, e.target.value)
              }
            ></input>
            <AgreementSpan>
              이벤트, 프로모션 알림 메일 및 SMS 수신{" "}
              <OptionSpan className="option">(선택)</OptionSpan>
            </AgreementSpan>
          </Label>
        </AgreementSection>
      </CommonForm>
      <Confirm onClick={submitAll}>회원가입</Confirm>
      <Link to="/login">
        <Cancle>취소</Cancle>
      </Link>
    </Total>
  );
}
