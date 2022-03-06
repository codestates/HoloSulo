import { Link } from "react-router-dom";
import styled from "styled-components";
import landing from "../images/landing.jpg";
import { Helmet } from "react-helmet-async";

const Container = styled.div`
  width: 100%;
  height: 100vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  &:after {
    width: 100%;
    height: 100vh;
    position: absolute;
    top: 0;
    left: 0;
    z-index: -1;
    content: "";
    background-image: url(${landing});
    background-position: center;
    background-size: cover;
    opacity: 0.8;
  }
`;

const Title = styled.h1`
  color: white;
  font-size: 3rem;
  font-weight: bold;
  padding: 20px;
  margin-bottom: 200px;
`;

const Button = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  color: white;
  width: 200px;
  padding: 15px 10px;
  font-weight: 500;
  border: 1px solid white;
  border-radius: 20px;
  cursor: pointer;
  transition: background-color 0.2s linear;
  &:hover {
    background-color: rgba(255, 255, 255, 0.25);
    border: 1px solid rgba(255, 255, 255, 0);
  }
`;

function Home() {
  return (
    <Container>
      <Helmet>
        <title>HoloSulo</title>
      </Helmet>
      <Title>당신의 혼술 HoloSulo와 함께</Title>
      <Link to="login">
        <Button>시작하기</Button>
      </Link>
    </Container>
  );
}

export default Home;
