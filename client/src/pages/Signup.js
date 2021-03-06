import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import styled from "styled-components";
import axios from "axios";
import Logo from "../images/logo.png";
import { Helmet } from "react-helmet-async";

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
  margin-bottom: 7%;
`;

const Part2 = styled.div`
  margin-left: 5.5%;
  margin-bottom: 7%;
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

const PasswordCheck = styled.input`
  width: 200px;
  background-color: #e8e8e8;
  color: #707070;
  outline: none;

  border: 0.2em;
  border-radius: 0.9em;
  width: 23em;
  height: 2em;
  margin-top: 10%;
  margin-bottom: 14%;
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
  padding-left: 5.5%;
`;

const Terms = styled.button`
  width: 200px;
  background-color: #8c8c8c;
  color: whitesmoke;
  outline: none;
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
  font-size: 15px;
  margin-bottom: 1%;
  margin-top: 10px;
  margin-left: 8%;
`;

const Mention2 = styled.div`
  font-size: 15px;
  margin-bottom: 1%;
  margin-top: 10px;
  margin-left: 2.7%;
`;

const Mention3 = styled.div`
  font-size: 15px;
  margin-bottom: 1%;
  margin-top: 10px;
  margin-left: 7.8%;
`;

const Msg = styled.div`
  color: #f06363;
  margin-top: 5%;
  font-size: 12px;
  font-weight: 500;
`;

const Msg2 = styled.div`
  color: #117326;
  margin-top: 5%;
  font-size: 12px;
  font-weight: 500;
`;

const Msg3 = styled.div`
  color: #117326;
  margin-top: 5%;
  margin-bottom: -5%;
  font-size: 12px;
  font-weight: 500;
`;

const Msg4 = styled.div`
  color: #f06363;
  margin-top: 5%;
  margin-bottom: -5%;
  font-size: 12px;
  font-weight: 500;
`;

const Msg5 = styled.div`
  color: #117326;
  margin-top: -12%;
  margin-bottom: 3%;
  font-size: 12px;
  font-weight: 500;
`;

const Msg6 = styled.div`
  color: #f06363;
  margin-top: -12%;
  margin-bottom: 3%;
  font-size: 12px;
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
  const [isDupEmail, setIsDupEmail] = useState(false); // ????????? ?????? State
  const [isDupNickname, setIsDupNickname] = useState(false);
  const [isPassword, setIsPassword] = useState(false);
  const [isPwdCheck, setIsPwdCheck] = useState(false);

  // ???????????? ?????? state
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
      setEmailMessage("email ????????? ???????????? ????????????.");
    } else {
      setIsEmail(true);
      setEmailMessage("????????? email ???????????????. ?????? ????????? ????????????.");
    }
  };
  // password validation
  const validPassword = (password) => {
    const regPassword = /^(?=.*[a-zA-Z])(?=.*[!@#$%^*+=-])(?=.*[0-9]).{8,25}$/;
    if (!regPassword.test(password)) {
      setIsPassword(false);
      setPasswordMessage(
        "??????+??????+???????????? ???????????? 8?????? ?????? ??????????????????."
      );
    } else {
      setIsPassword(true);
      setPasswordMessage("??????????????? ???????????? ?????????.");
    }
  };
  // password confirm validation
  const checkPassword = (password, cheeckPassword) => {
    if (password === cheeckPassword) {
      setIsPwdCheck(true);
      setPasswordCheckMessage("??????????????? ???????????????.");
    } else {
      setIsPwdCheck(false);
      setPasswordCheckMessage("??????????????? ???????????? ????????????.");
    }
  };

  // email ?????? ??????
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
          setEmailMessage("??????????????? ??????????????????.");
        }
      })
      .catch((err) => {
        console.log(err.response);
        if (err.response.data.message === "user email conflict") {
          setIsDupEmail(false);
          setEmailMessage("?????? ??????????????? ??????????????????.");
        }
        throw err;
      });
  };

  // nickName ?????? ??????
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
          setNicknameMessage("??????????????? ??????????????????.");
        }
      })
      .catch((err) => {
        console.log(err.response);
        if (err.response.data.message === "user name conflict") {
          setIsDupNickname(false);
          setNicknameMessage("?????? ???????????? ??????????????????.");
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
      console.log("???????????? ????????? ??????????????? ?????????????????????.");
    } else {
      console.log("???????????? ????????? ?????????????????????.");
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
      <Helmet>
        <title>Signup | HoloSulo</title>
      </Helmet>
      <Link to="/">
        <FontLogo></FontLogo>
      </Link>

      <InputInfo>
        <Part1>
          <Mention1>email??? ??????????????????.</Mention1>
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
          <Mention2>password??? ??????????????????.</Mention2>
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
              <Msg3>{passwordMessage}</Msg3>
            ) : userinfo.password.length === 0 ? null : (
              <Msg4>{passwordMessage}</Msg4>
            )}
          </Part4>

          <PasswordCheck
            type="password"
            placeholder="check password"
            onChange={handleInputValue("passwordCheck")}
            onBlur={() => {
              checkPassword(userinfo.password, userinfo.passwordCheck);
            }}
          ></PasswordCheck>
          <Part4>
            {isPwdCheck ? (
              userinfo.passwordCheck.length === 0 ? null : (
                <Msg5>{passwordCheckMessage}</Msg5>
              )
            ) : userinfo.passwordCheck.length === 0 ? null : (
              <Msg6>{passwordCheckMessage}</Msg6>
            )}
          </Part4>
        </Part2>

        <Part1>
          <Mention3>nickname??? ??????????????????.</Mention3>
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
            <AgreementSpan>????????????</AgreementSpan>
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
              ??? 14??? ???????????????.{" "}
              <EssentialSpan className="essential">(??????)</EssentialSpan>
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
              ????????????{" "}
              <EssentialSpan className="essential">(??????)</EssentialSpan>
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
              ?????????????????? ??? ????????????{" "}
              <EssentialSpan className="essential">(??????)</EssentialSpan>
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
              ?????????, ???????????? ?????? ?????? ??? SMS ??????{" "}
              <OptionSpan className="option">(??????)</OptionSpan>
            </AgreementSpan>
          </Label>
        </AgreementSection>
      </CommonForm>
      <Confirm onClick={submitAll}>????????????</Confirm>
      <Link to="/login">
        <Cancle>??????</Cancle>
      </Link>
    </Total>
  );
}
