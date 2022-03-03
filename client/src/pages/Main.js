import styled from "styled-components";
import { useEffect, useRef, useState } from "react";
import Dimmed from "../components/Dimmed";
import { Link, useLocation } from "react-router-dom";
import cheeers from "../images/cheers.jpg";
import MusicPlayer from "../components/MusicPlayer";
import Memo from "../components/Memo";
import FloatingButton from "../components/FloatingButton";

const Container = styled.div`
  width: 100%;
  height: 100vh;
  background-color: white;
`;

const ModalContainer = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  margin: auto;
  width: 60%;
  height: 80%;
  /* height: 60%; */
  padding: 20px;
  display: flex;
  justify-content: space-evenly;
  align-items: center;
  flex-direction: column;
  background-color: rgb(50, 50, 50);
  opacity: 0.9;
  @media only screen and (max-width: 800px) {
    flex-direction: column;
    align-items: center;
    width: 80%;
  }
  z-index: 1;
`;
const Title = styled.h2`
  font-size: 32px;
  color: white;
`;
const ButtonContainer = styled.div`
  display: flex;
  width: 100%;
  justify-content: center;
  @media only screen and (max-width: 800px) {
    flex-direction: column;
    align-items: center;
  }
`;
const Button = styled.div`
  color: white;
  width: 200px;
  background-color: rgba(0, 0, 0);
  padding: 15px 30px;
  border-radius: 20px;
  margin-top: 50px;
  display: flex;
  align-items: center;
  justify-content: center;
  margin-left: 5px;
  margin-right: 5px;
  cursor: pointer;
  @media only screen and (max-width: 800px) {
    margin-top: 10px;
  }
`;

const Background = styled.div`
  background-image: url(${(props) => props.coverUrl});
  background-position: left;
  background-size: cover;
  background-repeat: no-repeat;
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  /* opacity: 0.9; */
`;

const Header = styled.h1`
  color: white;
  font-size: 88px;
  font-weight: bold;
  letter-spacing: 2px;
  @media only screen and (max-width: 600px) {
    font-size: 60px;
  }
`;

const RandomImage = styled.img`
  width: 80%;
  height: auto;
  margin-top: 10px;
`;

function Main() {
  const {
    state: { time, songs, coverUrl },
  } = useLocation();
  // console.log(songs);
  const [isEndModalOpened, setIsEndModalOpened] = useState(false);
  const [isModalOpened, setIsModalOpened] = useState(false);
  const [isMemoOpen, setIsMemoOpen] = useState(false);
  const isTimeOver = useRef(false);

  useEffect(() => {
    // show random modal view every 15 minute
    const interval = setInterval(() => {
      if (!isTimeOver.current) {
        setIsModalOpened(true);
      }
    }, 1000 * 60 * 15);

    return () => {
      clearInterval(interval);
    };
  }, []);

  const handleCloseModal = () => {
    setIsModalOpened(false);
  };

  return (
    <Container>
      <Background coverUrl={coverUrl}>
        <Header>HOLOSULO</Header>
        <MusicPlayer
          time={time}
          songs={songs}
          isTimeOver={isTimeOver}
          setIsEndModalOpened={setIsEndModalOpened}
        />
      </Background>
      {isEndModalOpened && (
        <>
          <Dimmed isClickedAllowed={false} />
          <ModalContainer>
            <Title>저희와 함께한 시간 어떠셨나요?</Title>
            <ButtonContainer>
              <Link to="/menu">
                <Button>다시 주문하기</Button>
              </Link>
              <Link to="/">
                <Button>홈으로 이동</Button>
              </Link>
            </ButtonContainer>
          </ModalContainer>
        </>
      )}
      {isModalOpened && !isEndModalOpened && (
        <>
          <Dimmed isClickedAllowed={false} />
          <ModalContainer>
            <Title>짠!</Title>
            <RandomImage src={cheeers} />
            <ButtonContainer>
              <Button onClick={handleCloseModal}>닫기</Button>
            </ButtonContainer>
          </ModalContainer>
        </>
      )}
      <Memo isMemoOpen={isMemoOpen} />
      <FloatingButton isMemoOpen={isMemoOpen} setIsMemoOpen={setIsMemoOpen} />
    </Container>
  );
}

export default Main;
