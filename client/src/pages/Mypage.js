import React, { useEffect, useState } from "react";
import { Link, useHistory } from "react-router-dom";
import styled from "styled-components";
import axios from "axios";
import smallLogo from "../images/smallLogo.png";

function Mypage() {
  return (
    <Total>
      <center>
        <MyInfo>my info</MyInfo>

        <Set>
          <Mention>email</Mention>
          <EmailInfo>holosulo@gmail.com</EmailInfo>
        </Set>

        <Set>
          <Mention>nickname</Mention>
          <NicklInfo>holosulo</NicklInfo>
        </Set>

        <Link to="edit">
          <Editbut>프로필 수정</Editbut>
        </Link>
        <Resignbut>회원 탈퇴</Resignbut>

        <Compo>
          <Compo>
            <VisitNum>3</VisitNum>
            <VisitTimeNum>10</VisitTimeNum>
          </Compo>

          <Visit>총 방문 횟수</Visit>
          <VisitTime>총 방문 시간</VisitTime>
        </Compo>
      </center>

      <Percent>나의 알콜 충전 지수</Percent>

      <Part>
        <SmallLogo></SmallLogo>
        <Gage></Gage>
        <Gage></Gage>
        <Gage></Gage>
        <Gage></Gage>
        <Gage></Gage>
        <Gage></Gage>
        <Gage></Gage>
      </Part>
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

const MyInfo = styled.div`
  font-family: monospace;
  font-size: 40px;
  margin-top: 10%;
  margin-bottom: 7%;
`;

const Mention = styled.div`
  font-family: monospace;
  font-size: 20px;
  margin-left: 10%;
`;

const Compo = styled.div`
  width: 600px;
  height: 200px;
  display: flex;
  margin-top: 3%;
`;

const Set = styled.div`
  width: 400px;
  height: 30px;
  display: flex;

  margin-bottom: 3%;
`;

const EmailInfo = styled.div`
  font-family: monospace;
  margin-left: 19%;
  font-size: 20px;
  border-bottom: 2.5px dashed grey;
  padding-right: 0%;
`;

const NicklInfo = styled.div`
  font-family: monospace;
  margin-left: 10%;
  font-size: 20px;
  border-bottom: 2.5px dashed grey;
  padding-right: 30%;
`;

const Editbut = styled.button`
  font-family: monospace;
  border: 0;
  margin-top: 3%;
  font-size: 16px;
  background-color: #f3f1f0;
  cursor: pointer;
`;

const Resignbut = styled.button`
  font-family: monospace;
  border: 0;
  font-size: 16px;
  color: #f06363;
  background-color: #f3f1f0;
  margin-left: 3%;
  cursor: pointer;
`;

const Visit = styled.div`
  font-family: monospace;
  border: 0;
  font-size: 16px;
  margin-top: 12%;
  margin-left: -69%;
  margin-right: 10%;
  background-color: #f3f1f0;
`;

const VisitTime = styled.div`
  font-family: monospace;
  border: 0;
  font-size: 16px;
  margin-top: 12%;
  background-color: #f3f1f0;
`;

const VisitNum = styled.div`
  font-family: monospace;
  border: 0;
  font-size: 30px;
  font-weight: 700;
  margin-left: 37%;

  color: #a8a8a8;
`;

const VisitTimeNum = styled.div`
  font-family: monospace;
  border: 0;
  font-size: 30px;
  font-weight: 700;
  margin-left: 20%;

  color: #a8a8a8;
`;

const Percent = styled.div`
  font-family: monospace;
  font-size: 18px;
  margin-left: 3%;
  font-weight: 600;
  margin: 0 auto;
`;

const SmallLogo = styled.div`
  width: 130px;
  height: 130px;
  background-image: url(${smallLogo});
  background-size: cover;
  margin-top: -0.7%;
  margin-bottom: 100px;
`;

const Gage = styled.div`
  width: 80px;
  height: 80px;
  background-color: skyblue;

  margin-right: 1px;
`;

const Part = styled.div`
  width: 100%;
  height: 200px;
  display: flex;
  margin: 0 auto;
`;

export default Mypage;
