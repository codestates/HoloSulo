import React, { useEffect, useState } from "react";
import { Link, useHistory } from "react-router-dom";
import styled from "styled-components";
import axios from "axios";
import smallLogo from "../images/smallLogo.png";

function Mypage() {
  return (
    <Container>
      <Title>my info</Title>
      <InfoContainer>
        <Emailcon>
          <Email>email</Email>
          <EmailInfo></EmailInfo>
        </Emailcon>
        <Nick>nickname</Nick>
      </InfoContainer>
    </Container>
  );
}

const Container = styled.div`
  width: 100%;
  height: 100vh;
  display: flex;
  flex-direction: column;
  background-color: #f3f1f0;
`;

const Emailcon = styled.div`
  width: 100%;
  height: 10%;
`;

const Title = styled.div`
  width: 50%;
  height: 30%;
  margin-left: 10%;
  line-height: 700%;
  font-family: monospace;
  font-size: 40px;
`;

const Email = styled.div`
  width: 70px;
  height: 40px;
  font-family: monospace;
  margin-right: 1px;

  font-size: 20px;
`;

const Nick = styled.div`
  width: 70px;
  height: 40px;
  font-family: monospace;
  margin-top: 30px;
  margin-right: 1px;

  font-size: 20px;
`;

const InfoContainer = styled.div`
  width: 80%;
  height: 80%;
  display: flex;
  margin: 0 auto;
`;

const Set = styled.div`
  width: 400px;
  height: 30px;
  display: flex;

  margin-bottom: 3%;
`;

const EmailInfo = styled.div`
  font-family: monospace;
  width: 300px;
  height: 40px;

  font-size: 20px;
  border-bottom: 2.5px dashed grey;
  padding-right: 0%;
  background-color: beige;
`;

const NicklInfo = styled.div`
  font-family: monospace;
  margin-left: 10%;
  margin-top: 400px;
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
