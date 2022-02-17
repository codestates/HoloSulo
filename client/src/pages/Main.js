import styled from "styled-components";
import video from "../static/video.mp4";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faBackward,
  faPlay,
  faPause,
  faForward,
  faPencil,
  faXmark,
} from "@fortawesome/free-solid-svg-icons";
import { useEffect, useRef, useState } from "react";
import song1 from "../static/naked.mp3";
import song2 from "../static/lately.mp3";
import song3 from "../static/toMe.mp3";
import endingSong from "../static/emotion.mp3";
import Dimmed from "../components/Dimmed";
import { Link, useLocation } from "react-router-dom";
import cheeers from "../images/cheers.jpg";

const Container = styled.div`
  width: 100%;
  height: 100vh;
  padding-top: 80px;
  padding-bottom: 80px;
  border: 1px solid black;
  background-color: #f1eded;
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

const VideoBackground = styled.video`
  width: 100%;
  height: 100%;
`;

const MusicPlayerContainer = styled.div`
  width: 100%;
  height: 80px;
  background-color: white;
  /* opacity: 0.5; */
  /* position: absolute; */
  bottom: 0;
  left: 0;
  padding: 0 20px;
  display: flex;
  align-items: center;
`;

const PlayerBtn = styled.div`
  width: 30px;
  height: 30px;
  background-color: white;
  margin-right: 10px;
  display: flex;
  justify-content: center;
  align-items: center;
  cursor: pointer;
`;
const PlayButton = styled(PlayerBtn)`
  /* border-radius: 10px; */
`;

const PrevButton = styled(PlayerBtn)`
  /* background-color: red; */
`;

const NextButton = styled(PlayerBtn)`
  /* background-color: red; */
`;

const SongTitle = styled.span`
  color: black;
  font-size: 14px;
`;

const FloatingButton = styled.div`
  position: absolute;
  bottom: 100px;
  right: 50px;
  width: 50px;
  height: 50px;
  border-radius: 25px;
  background-color: white;
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  @media only screen and (max-width: 800px) {
    right: 20px;
  }
`;

const MemoContainer = styled.div`
  width: 300px;
  height: 300px;
  position: absolute;
  right: 50px;
  bottom: 180px;
  background-color: #f2e68a;
  display: ${(props) => (props.isMemoOpen ? "flex" : "none")};
  flex-direction: column;
  align-items: flex-end;
  justify-content: space-between;
  @media only screen and (max-width: 800px) {
    right: 20px;
  }
`;

const Memo = styled.textarea`
  width: 100%;
  height: 90%;
  background-color: #f2e68a;
  border: none;
  resize: none;
  outline: none;
`;

const DeleteMemo = styled.span`
  color: red;
  font-size: 18px;
  padding: 10px;
  cursor: pointer;
`;

const RandomImage = styled.img`
  width: 80%;
  height: auto;
  margin-top: 10px;
`;

function Main() {
  const songs = [
    {
      url:
        process.env.NODE_ENV === "development"
          ? song1
          : `${process.env.REACT_APP_S3_DOMAIN}/naked.mp3`,
      title: "Naked",
    },
    {
      url:
        process.env.NODE_ENV === "development"
          ? song2
          : `${process.env.REACT_APP_S3_DOMAIN}/lately.mp3`,
      title: "Lately",
    },
    {
      url:
        process.env.NODE_ENV === "development"
          ? song3
          : `${process.env.REACT_APP_S3_DOMAIN}/toMe.mp3`,
      title: "To Me",
    },
  ];

  const [audio, setAudio] = useState(new Audio(songs[0].url));
  const [isPlaying, setIsPlaying] = useState(false);
  const [isEndModalOpened, setIsEndModalOpened] = useState(false);
  const [isModalOpened, setIsModalOpened] = useState(false);
  const songIndex = useRef(0);
  const [isMemoOpen, setIsMemoOpen] = useState(false);
  const [currentSongIndex, setCurrentSongIndex] = useState(0);
  const isTimeOver = useRef(false);
  const memoTextareaRef = useRef();
  const {
    state: { time },
  } = useLocation();

  useEffect(() => {
    audio.addEventListener("ended", () => {
      audio.pause();
      if (!isTimeOver.current) {
        songIndex.current = (songIndex.current + 1) % songs.length;
        audio.src = songs[songIndex.current].url;
        audio.play();
        setCurrentSongIndex(songIndex.current);
      }
    });
    // play ending song when time passed.
    if (time) {
      setTimeout(() => {
        audio.pause();
        audio.src =
          process.env.NODE_ENV === "development"
            ? endingSong
            : `${process.env.REACT_APP_S3_DOMAIN}/ending_song.mp3`;
        audio.play();
        isTimeOver.current = true;
        setIsEndModalOpened(true);
      }, 1000 * 5);
    }

    // show random modal view every 15 minute
    setInterval(() => {
      if (!isTimeOver.current) {
        setIsModalOpened(true);
      }
    }, 1000 * 3);

    return () => {
      audio.pause();
      setAudio(null);
    };
  }, []);

  const handlePlayClick = () => {
    if (isPlaying) {
      audio.pause();
      setIsPlaying(false);
    } else {
      audio.play();
      setIsPlaying(true);
    }
  };
  const playPrevSong = () => {
    audio.pause();
    audio.src =
      songs[
        currentSongIndex !== 0 ? currentSongIndex - 1 : songs.length - 1
      ].url;
    audio.play();

    songIndex.current =
      songIndex.current !== 0 ? songIndex.current - 1 : songs.length - 1;
    setCurrentSongIndex((prev) => (prev !== 0 ? prev - 1 : songs.length - 1));
  };
  const playNextSong = () => {
    audio.pause();
    songIndex.current = (songIndex.current + 1) % songs.length;
    audio.src = songs[songIndex.current].url;
    if (isPlaying) {
      audio.play();
    }
    setCurrentSongIndex(songIndex.current);
  };

  const handleFloatBtnClick = () => {
    setIsMemoOpen((prev) => !prev);
    if (isMemoOpen && memoTextareaRef.current.value === "") {
      memoTextareaRef.current.value = "하고싶은 말이 있었나요?";
    }
  };

  const handleDeleteMemoClick = () => {
    memoTextareaRef.current.value = "";
  };

  const handleCloseModal = () => {
    setIsModalOpened(false);
  };
  return (
    <Container>
      <VideoBackground
        src={
          process.env.NODE_ENV === "development"
            ? video
            : `${process.env.REACT_APP_S3_DOMAIN}/video.mp4`
        }
        autoPlay={true}
        muted={true}
        loop={true}
      />
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
      <MusicPlayerContainer>
        <>
          <PrevButton onClick={playPrevSong}>
            <FontAwesomeIcon icon={faBackward} />
          </PrevButton>
          <PlayButton onClick={handlePlayClick}>
            <FontAwesomeIcon icon={isPlaying ? faPause : faPlay} />
          </PlayButton>
          <NextButton onClick={playNextSong}>
            <FontAwesomeIcon icon={faForward} />
          </NextButton>
        </>
        <>
          <SongTitle>{songs[currentSongIndex].title}</SongTitle>
        </>
      </MusicPlayerContainer>
      <MemoContainer isMemoOpen={isMemoOpen}>
        <Memo ref={memoTextareaRef} />
        <DeleteMemo onClick={handleDeleteMemoClick}>지우기</DeleteMemo>
      </MemoContainer>
      <FloatingButton onClick={handleFloatBtnClick}>
        <FontAwesomeIcon icon={isMemoOpen ? faXmark : faPencil} />
      </FloatingButton>
    </Container>
  );
}

export default Main;
