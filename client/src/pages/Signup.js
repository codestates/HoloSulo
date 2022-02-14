import React, { useEffect, useState } from "react";
import { Link, useHistory } from "react-router-dom";
import styled from "styled-components";
import axios from "axios";

function Signup() {
  return (
    <Total>
      <center>
        <Logo></Logo>

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
          onblur="this.placeholder='change password'"
        ></Password>
        <Space></Space>

        <CheckPassword
          type="password"
          placeholder="check password"
          onfocus="this.placeholder=''"
          onblur="this.placeholder='check password'"
        ></CheckPassword>
        <Space></Space>

        <Compo>
          <Mention>nickname을 입력해주세요.</Mention>
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
        <Link to="/Menu">
          <Confirm>회원가입</Confirm>
        </Link>

        <Space></Space>
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

const TypoEmail = styled.input`
  width: 200px;
  background-color: #e8e8e8;
  color: #707070;
  outline: none;
  margin-bottom: 6%;
  font-family: monospace;
  border: 0.2em;
  border-radius: 0.9em;
  width: 23em;
  height: 2em;
  display: flex;
  margin-left: 350px;
  align-items: center;
  flex-direction: column;
  justify-content: center;
  float: left;
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
  display: flex;
  align-items: center;
  flex-direction: column;
  justify-content: center;
`;

const CheckPassword = styled.input`
  width: 200px;
  background-color: #e8e8e8;
  color: #707070;
  outline: none;
  font-family: monospace;
  margin-bottom: 6%;
  border: 0.2em;
  border-radius: 0.9em;
  width: 23em;
  height: 2em;

  margin-left: 350px;
  align-items: center;
  flex-direction: column;
  justify-content: center;
  float: left; ;
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
  display: flex;
  margin-left: 350px;
  align-items: center;
  flex-direction: column;
  justify-content: center;
  float: left;
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
  float: left;
  line-height: 25px;
  cursor: pointer;
`;

const Compo = styled.div`
  width: 100%;
  display: inline-block;
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
  padding-left: 35%;
  margin-bottom: 2%;
  text-align: left;
`;

export default Signup;
