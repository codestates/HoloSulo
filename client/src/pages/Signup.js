import React, { useEffect, useState } from "react";
import { Link, useHistory } from "react-router-dom";
import styled from "styled-components";
import axios from "axios";
import Logo from "../images/logo.png";

function Signup() {
  return (
    <Total>
      <center>
        <FontLogo></FontLogo>

        <Mention>email을 입력해주세요.</Mention>
        <Compo>
          <TypoEmail
            type="text"
            placeholder="email"
            onfocus="this.placeholder=''"
            onblur="this.placeholder='email'"
          ></TypoEmail>
          <Check>check</Check>
        </Compo>

        <Mention>password를 입력해주세요.</Mention>
        <Password
          type="password"
          placeholder="password"
          onfocus="this.placeholder=''"
          onblur="this.placeholder='password'"
        ></Password>
        <Space></Space>

        <Password
          type="password"
          placeholder="check password"
          onfocus="this.placeholder=''"
          onblur="this.placeholder='check password'"
        ></Password>
        <MarginBot></MarginBot>
        <Mention>nickname을 입력해주세요.</Mention>
        <Compo>
          <TypoNickname
            type="text"
            placeholder="nickname"
            onfocus="this.placeholder=''"
            onblur="this.placeholder='nickname'"
          ></TypoNickname>
          <Check>check</Check>
        </Compo>

        <Space></Space>
        <Terms>회원약관</Terms>
        <Space></Space>
        <Link to="/menu">
          <Confirm>회원가입</Confirm>
        </Link>

        <Space></Space>
      </center>
    </Total>
  );
}

const Total = styled.div`
  display: flex;
  width: 100%;
  height: 100%;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  background-color: #f3f1f0;
  outline: none;
`;

const Space = styled.div`
  margin-top: 2%;
`;

const MarginBot = styled.div`
  margin-bottom: 8%;
`;

const FontLogo = styled.div`
  width: 260px;
  height: 260px;
  background-image: url(${Logo});
  background-size: cover;
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
  margin-top: 3%;
  border: 0.2em;
  border-radius: 0.9em;
  width: 23em;
  height: 2em;
  margin-bottom: 100%;
  align-items: center;
  text-align: auto;
  vertical-align: center;
  flex-direction: column;
  line-height: 25px;
  cursor: pointer;
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
  margin-bottom: 2%;
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
  margin-bottom: 2%;
  padding-left: 10px;
  display: flex;
  align-items: center;
  flex-direction: column;
  justify-content: center;
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
`;

const Compo = styled.div`
  display: flex;
  width: 500px;
  margin-left: 19.5%;
  margin-bottom: 8%;
  // margin-bottom: 2%; *삼항연산자 들어왔을때
`;

const Terms = styled.button`
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

const Mention = styled.div`
  font-family: monospace;
  font-size: 15px;
  margin-left: 21%;
  margin-bottom: 3%;
  text-align: left;
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

export default Signup;
