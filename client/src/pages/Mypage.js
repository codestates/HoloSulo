import React, { useEffect, useState } from "react";
import { Link, useHistory } from "react-router-dom";
import styled from "styled-components";
import axios from "axios";
import PropTypes from "prop-types";
import Modal from "../components/Modal";

// import smallLogo from "../images/smallLogo.png";

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
  margin-bottom: 3%;
`;
const Part1 = styled.div`
  margin-bottom: 2%;
`;

const Part2 = styled.div`
  display: flex;
  margin: 0 auto;
`;

const Part3 = styled.div`
  margin-top: 0.5%;
`;

const Part4 = styled.div`
  margin-top: 3%;
`;

const Title = styled.div`
  font-family: monospace;
  font-size: 40px;
  font-weight: 600;
  margin-bottom: 5%;
`;

const TitleBox = styled.div`
  text-align: center;
  margin-bottom: 5%;
  margin-top: 5%;
`;

const Editbut = styled.button`
  width: 120px;
  font-family: monospace;
  border: 0;
  font-size: 16px;
  font-weight: 600;
  color: #565656;
  background-color: #f3f1f0;
  cursor: pointer;
`;

const Resignbut = styled.button`
  width: 170px;
  font-family: monospace;
  border: 0;
  font-size: 16px;
  font-weight: 600;
  color: #f06363;
  background-color: #f3f1f0;
  margin-left: 13%;
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
  width: 160px;
  font-size: 50px;
  font-weight: 700;

  color: #a8a8a8;
`;

const VisitTimeNum = styled.div`
  font-family: monospace;
  border: 0;
  width: 160px;
  font-size: 50px;
  font-weight: 700;

  color: #a8a8a8;
`;

const Visit = styled.div`
  font-family: monospace;
  border: 0;
  font-size: 20px;
  font-weight: 600;
  width: 150px;
  color: #2c2c2c;
`;

const VisitTime = styled.div`
  font-family: monospace;
  border: 0;
  font-size: 20px;
  font-weight: 600;
  width: 180px;
  color: #2c2c2c;
`;

const Mention = styled.div`
  font-family: monospace;
  font-size: 16px;
  font-weight: 600;
  margin-top: 5%;
  margin-left: 30%;

  color: #2c2c2c;
`;

/*
const SmallLogo = styled.div`
  width: 100px;
  height: 100px;
  margin-right: 10%;
  background-image: url(${smallLogo});
  background-size: cover;
`;
*/

const Gage = styled.div`
  width: 50px;
  height: 50px;
  background-color: skyblue;

  margin-right: 4px;
`;

export default function Mypage() {
  const [modalVisible, setModalVisible] = useState(false);
  const openModal = () => {
    setModalVisible(true);
  };
  const closeModal = () => {
    setModalVisible(false);
  };

  return (
    <>
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

          <Resignbut onClick={openModal}>회원 탈퇴</Resignbut>
          {modalVisible && (
            <Modal
              visible={modalVisible}
              closable={true}
              maskClosable={true}
              onClose={closeModal}
            ></Modal>
          )}
        </Part2>

        <Space></Space>

        <Part3>
          <Compo>
            <Link to="edit">
              <VisitNum>3</VisitNum>
            </Link>
            <VisitTimeNum>10</VisitTimeNum>
          </Compo>

          <Compo>
            <Visit>총 방문 횟수</Visit>
            <VisitTime>총 방문 시간</VisitTime>
          </Compo>
        </Part3>

        <Part4>
          <Compo>
            <Mention>나의 알콜 충전 지수</Mention>
          </Compo>

          <Compo>
            <Gage></Gage>
            <Gage></Gage>
            <Gage></Gage>
            <Gage></Gage>
            <Gage></Gage>
            <Gage></Gage>
            <Gage></Gage>
          </Compo>
        </Part4>
      </Total>
    </>
  );
}
