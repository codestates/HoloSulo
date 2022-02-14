import React, { useEffect, useState } from "react";
import { Link, useHistory } from "react-router-dom";
import styled from "styled-components";
import axios from "axios";

function EditMypage() {
  return (
    <Total>
      <center>
        <Logo></Logo>

        <Password>password 변경</Password>
        <ChangePassword
          type="password"
          placeholder="change password"
          onfocus="this.placeholder=''"
          onblur="this.placeholder='change password'"
        ></ChangePassword>
        <Space></Space>

        <CheckPassword
          type="password"
          placeholder="check password"
          onfocus="this.placeholder=''"
          onblur="this.placeholder='check password'"
        ></CheckPassword>

        <Space></Space>
        <Nickname>nickname 변경</Nickname>
        <Compo>
          <ChangeNickname
            type="text"
            placeholder="change nickname"
            onfocus="this.placeholder=''"
            onblur="this.placeholder='change nickname'"
          ></ChangeNickname>
          <Check>check</Check>
        </Compo>

        <Space></Space>
        <Link to="/mypage">
          <Edit>회원정보 저장</Edit>
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

const Edit = styled.button`
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

const ChangePassword = styled.input`
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

const CheckPassword = styled.input`
  width: 200px;
  background-color: #e8e8e8;
  color: #707070;
  outline: none;
  font-family: monospace;
  border: 0.2em;
  border-radius: 0.9em;
  width: 23em;
  height: 2em;
  margin-top: 2%;
  display: flex;
  align-items: center;
  flex-direction: column;
  justify-content: center;
`;

const Password = styled.div`
  font-family: monospace;
  font-size: 15px;
  padding-left: 35%;
  margin-bottom: 2%;
  text-align: left;
`;

const Nickname = styled.div`
  font-family: monospace;
  font-size: 15px;
  margin-top: 8%;
  padding-left: 35%;
  margin-bottom: 2%;
  text-align: left;
`;

const ChangeNickname = styled.input`
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

export default EditMypage;
