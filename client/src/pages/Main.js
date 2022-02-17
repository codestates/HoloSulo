import styled from "styled-components";
import video from "../static/video.mp4";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faBackward,
  faPlay,
  faPause,
  faForward,
} from "@fortawesome/free-solid-svg-icons";
import { useEffect, useRef, useState } from "react";
import song1 from "../static/naked.mp3";
import song2 from "../static/lately.mp3";
import song3 from "../static/toMe.mp3";
import endingSong from "../static/emotion.mp3";
import Dimmed from "../components/Dimmed";
import { Link } from "react-router-dom";

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
  height: 60%;
  padding: 20px;
  border: 1px solid white;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
`;
const Title = styled.h2`
  font-size: 32px;
  color: white;
`;
const ButtonContainer = styled.div`
  display: flex;
  width: 100%;
  justify-content: center;
`;
const Button = styled.div`
  color: white;
  width: 200px;
  background-color: rgba(48, 48, 48, 60%);
  padding: 15px 30px;
  border-radius: 20px;
  margin-top: 50px;
  display: flex;
  align-items: center;
  justify-content: center;
  margin-left: 5px;
  margin-right: 5px;
  cursor: pointer;
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

function Main({
  songs = [
    { url: song1, title: "Naked" },
    { url: song2, title: "Lately" },
    { url: song3, title: "To Me" },
  ],
  time = 1000 * 60 * 60,
}) {
  const [audio, setAudio] = useState(new Audio(songs[0].url));
  const [isPlaying, setIsPlaying] = useState(false);
  const [isModalOpened, setIsModalOpened] = useState(false);
  const songIndex = useRef(0);

  const [currentSongIndex, setCurrentSongIndex] = useState(0);
  // const [isTimeOver, setIsTimeOver] = useState(false);
  const isTimeOver = useRef(false);

  useEffect(() => {
    audio.addEventListener("ended", () => {
      console.log("ended song", currentSongIndex, audio);

      audio.pause();
      if (!isTimeOver.current) {
        songIndex.current = (songIndex.current + 1) % songs.length;
        audio.src = songs[songIndex.current].url;
        audio.play();
        setCurrentSongIndex(songIndex.current);
      }
      console.log("next song", currentSongIndex, audio);
    });
    setTimeout(() => {
      audio.pause();
      // play ending song
      audio.src = endingSong;
      audio.play();
      isTimeOver.current = true;
      setIsModalOpened(true);
    }, time);
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
    // audio.src =
    //   songs[
    //     songIndex.current !== 0 ? songIndex.current - 1 : songs.length - 1
    //   ].url;
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
    console.log("current", currentSongIndex);
    console.log("is Playing? ", isPlaying);
    audio.pause();
    // audio.src = songs[(songIndex.current + 1) % songs.length].url;
    songIndex.current = (songIndex.current + 1) % songs.length;
    audio.src = songs[songIndex.current].url;
    if (isPlaying) {
      audio.play();
    }
    setCurrentSongIndex(songIndex.current);
    console.log("after play next", currentSongIndex);
  };

  return (
    <Container>
      <VideoBackground src={video} autoPlay={true} muted={true} loop={true} />
      {isModalOpened && (
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
    </Container>
  );
}

export default Main;
