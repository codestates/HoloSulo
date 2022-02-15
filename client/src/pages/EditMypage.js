import React, { useEffect, useState } from "react";
import { Link, useHistory } from "react-router-dom";
import styled from "styled-components";
import axios from "axios";
import Logo from "../images/logo.png";

function EditMypage() {
  return (
    <Total>
      <center>
        <FontLogo></FontLogo>

        <Mention>password 변경</Mention>
        <Password
          type="password"
          placeholder="change password"
          onfocus="this.placeholder=''"
          onblur="this.placeholder='change password'"
        ></Password>
        <Space></Space>

        <Password
          type="password"
          placeholder="check password"
          onfocus="this.placeholder=''"
          onblur="this.placeholder='check password'"
        ></Password>
        <MarginBot></MarginBot>

        <Mention>nickname 변경</Mention>
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
  margin-top: 3%;
`;

const MarginBot = styled.div`
  margin-bottom: 20%;
`;

const FontLogo = styled.div`
  width: 260px;
  height: 260px;
  background-image: url(${Logo});
  background-size: cover;
`;

const Edit = styled.button`
  width: 200px;
  background-color: #8c8c8c;
  color: whitesmoke;
  outline: none;
  font-family: monospace;
  margin-top: 18%;
  border: 0.2em;
  border-radius: 0.9em;
  width: 23em;
  height: 2em;
  margin-bottom: 70%;
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
  float: left;
  line-height: 25px;
  cursor: pointer;
`;

const Compo = styled.div`
  display: flex;
  width: 500px;
  margin-left: 19.5%;
  margin-bottom: 8%;
`;

const Mention = styled.div`
  font-family: monospace;
  font-size: 15px;
  margin-left: 21%;
  margin-bottom: 3%;
  text-align: left;
`;

export default EditMypage;
