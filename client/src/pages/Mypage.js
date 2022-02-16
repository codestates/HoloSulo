import React, { useEffect, useState } from "react";
import { Link, useHistory } from "react-router-dom";
import styled from "styled-components";
import axios from "axios";
import Logo from "../images/logo.png";

function Mypage() {
  return (
    <Total>
      <TitleBox>
        <Title>my info</Title>
      </TitleBox>

      <Part1>
        <Compo>
          <Email>email</Email>
          <UserEmail>holosulo@gmail.com</UserEmail>
        </Compo>

        <Compo>
          <Nickname>nickname</Nickname>
          <UserNick>holosulo</UserNick>
        </Compo>
      </Part1>

      <Part2>
        <Link to="edit">
          <Editbut>프로필 수정</Editbut>
        </Link>
        <Resignbut>회원 탈퇴</Resignbut>
      </Part2>

      <Space></Space>

      <Compo>
        <Link to="edit">
          <VisitNum>3</VisitNum>
        </Link>
        <VisitTimeNum>10</VisitTimeNum>
      </Compo>
    </Total>
  );
}

const Total = styled.div`
  display: flex;
  width: 100%;
  height: 100vh;
  flex-direction: column;
  justify-content: center;
  text-align: center;
  align-items: center;
  background-color: #f3f1f0;
`;

const Space = styled.div`
  margin-bottom: 4%;
`;
const Part1 = styled.div`
  margin-bottom: 3%;
`;

const Part2 = styled.div`
  display: flex;

  margin: 0 auto;
`;

const Title = styled.div`
  font-family: monospace;
  font-size: 40px;
  margin-bottom: 5%;
`;

const TitleBox = styled.div`
  text-align: center;

  margin-bottom: 3%;
`;

const Editbut = styled.button`
  width: 100px;
  font-family: monospace;
  border: 0;
  font-size: 16px;
  font-weight: 600;
  color: #565656;
  background-color: #f3f1f0;
  cursor: pointer;
`;

const Resignbut = styled.button`
  width: 100px;
  font-family: monospace;
  border: 0;
  font-size: 16px;
  font-weight: 600;
  color: #f06363;
  background-color: #f3f1f0;
  margin-left: 5%;
  cursor: pointer;
`;

const Email = styled.div`
  font-family: monospace;
  font-size: 19px;
  padding-left: 10px;
  display: flex;
`;

const Nickname = styled.div`
  font-family: monospace;
  font-size: 19px;
  padding-left: 10px;
  display: flex;
`;

const UserNick = styled.div`
  font-family: monospace;
  font-size: 19px;
  border-bottom: 2.5px dashed grey;

  margin-left: 20px;
`;

const UserEmail = styled.div`
  font-family: monospace;
  font-size: 19px;
  border-bottom: 2.5px dashed grey;

  margin-left: 55px;
`;

const Compo = styled.div`
  display: flex;
  margin-bottom: 20px;
`;

const VisitNum = styled.div`
  font-family: monospace;
  border: 0;
  font-size: 30px;
  font-weight: 700;
  color: #a8a8a8;
`;

const VisitTimeNum = styled.div`
  font-family: monospace;
  border: 0;
  font-size: 30px;
  font-weight: 700;
  margin-left: 90%;
  color: #a8a8a8;
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

export default Mypage;
