import styled, { keyframes } from "styled-components";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faBackward,
  faPlay,
  faPause,
  faForward,
  faPencil,
  faXmark,
  faVolumeOff,
  faVolumeUp,
} from "@fortawesome/free-solid-svg-icons";
import { useEffect, useRef, useState } from "react";
import Dimmed from "../components/Dimmed";
import { Link, useLocation } from "react-router-dom";
import cheeers from "../images/cheers.jpg";
import { getYoutubeVideoIdOrNull } from "../utils/getYoutubeVideoId";

const Container = styled.div`
  width: 100%;
  height: 100vh;
  /* padding-top: 80px; */
  /* padding-bottom: 80px; */
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
`;

const BarContainer = styled.div`
  display: flex;
  align-items: center;
  margin-top: 30px;
  margin-bottom: 50px;
  height: 20px;
`;

const equalize = keyframes`
  0% {
    height: 6px;
  }
  4% {
    height: 5px;
  }
  8% {
    height: 4px;
  }
  12% {
    height: 13px;
  }
  16% {
    height: 2px;
  }
  20% {
    height: 3px;
  }
  24% {
    height: 4px;
  }
  28% {
    height: 11px;
  }
  32% {
    height: 4px;
  }
  36% {
    height: 16px;
  }
  40% {
    height: 2px;
  }
  44% {
    height: 14px;
  }
  48% {
    height: 17px;
  }
  52% {
    height: 3px;
  }
  56% {
    height: 8px;
  }
  60% {
    height: 3px;
  }
  64% {
    height: 15px;
  }
  68% {
    height: 16px;
  }
  72% {
    height: 7px;
  }
  76% {
    height: 8px;
  }
  80% {
    height: 7px;
  }
  84% {
    height: 16px;
  }
  88% {
    height: 15px;
  }
  92% {
    height: 6px;
  }
  96% {
    height: 7px;
  }
  100% {
    height: 8px;
  }
`;
const Bar = styled.span`
  width: 3px;
  height: 8px;
  background: white;
  margin: 0 1px;
  animation: ${equalize} 4s 0s infinite;
  &:nth-child(11n + 0) {
    animation-delay: -1.2s;
  }
  &:nth-child(11n + 1) {
    animation-delay: -1.9s;
  }
  &:nth-child(11n + 2) {
    animation-delay: -2.7s;
  }
  &:nth-child(11n + 3) {
    animation-delay: -2.3s;
  }
  &:nth-child(11n + 4) {
    animation-delay: -5.3s;
  }
  &:nth-child(11n + 5) {
    animation-delay: -1.2s;
  }
  &:nth-child(11n + 6) {
    animation-delay: -1.5s;
  }
  &:nth-child(11n + 7) {
    animation-delay: -0.8s;
  }
  &:nth-child(11n + 8) {
    animation-delay: -1.2s;
  }
  &:nth-child(11n + 9) {
    animation-delay: -0.5s;
  }
`;

const Text = styled.span`
  display: block;
  color: white;
  margin-bottom: 10px;
`;

const MusicPlayerContainer = styled.div`
  width: 40%;
  min-width: 280px;
  height: 80px;
  background-color: white;
  position: absolute;
  bottom: 80px;
  left: 0;
  right: 0;
  margin: 0 auto;
  padding: 0 20px;
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 10px;
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

const VolumeSlider = styled.input``;

const SongTitle = styled.h3`
  color: white;
  font-size: 14px;
  font-weight: bold;
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
  background-color: white;
  border-radius: 20px;
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
  background-color: white;
  border: none;
  resize: none;
  outline: none;
  border-radius: 20px;
  padding: 10px;
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
  const {
    state: { time, songs, coverUrl },
  } = useLocation();

  const [isPlaying, setIsPlaying] = useState(false);
  const [isEndModalOpened, setIsEndModalOpened] = useState(false);
  const [isModalOpened, setIsModalOpened] = useState(false);
  const [isMemoOpen, setIsMemoOpen] = useState(false);
  const [volume, setVolume] = useState(100);
  const isTimeOver = useRef(false);
  const memoTextareaRef = useRef();
  const player = useRef();
  const youtubeIndex = useRef(0);
  const [currentYoutubeIndex, setCurrentYoutubeIndex] = useState(0);

  useEffect(() => {
    const tag = document.createElement("script");

    tag.src = `https://www.youtube.com/iframe_api?origin=${process.env.REACT_APP_HOST_DOMAIN}`;
    const firstScriptTag = document.getElementsByTagName("script")[0];
    firstScriptTag.parentNode.insertBefore(tag, firstScriptTag);

    window.onYouTubeIframeAPIReady = () => {
      player.current = new window.YT.Player("player", {
        height: "360",
        width: "640",
        videoId: getYoutubeVideoIdOrNull(songs[youtubeIndex.current].songUrl),
        events: {
          onReady: onPlayerReady,
          onStateChange: onPlayerStateChange,
        },
      });
    };

    function onPlayerReady(event) {
      event.target.playVideo();
    }

    function onPlayerStateChange(event) {
      if (!isTimeOver.current) {
        if (event.data === window.YT.PlayerState.ENDED) {
          youtubeIndex.current = (youtubeIndex.current + 1) % songs.length;
          setCurrentYoutubeIndex(youtubeIndex.current);
          event.target.loadVideoById(
            getYoutubeVideoIdOrNull(songs[youtubeIndex.current].songUrl)
          );
        } else if (event.data === window.YT.PlayerState.PLAYING) {
          setIsPlaying(true);
        }
      }
    }
    let timer;
    if (time) {
      timer = setTimeout(() => {
        player.current.pauseVideo();
        player.current.loadVideoById("ZD64BtQYNGw");
        player.current.playVideo();
        isTimeOver.current = true;
        setIsEndModalOpened(true);
      }, time);
    }
    // show random modal view every 15 minute
    const interval = setInterval(() => {
      if (!isTimeOver.current) {
        setIsModalOpened(true);
      }
    }, 1000 * 60 * 15);

    return () => {
      clearInterval(interval);
      clearTimeout(timer);
      window.onYouTubeIframeAPIReady = null;
      window.YT = null;
      player.current.getIframe().remove();
      player.current.destroy();
      player.current = null;
    };
  }, []);

  const handlePlayClick = () => {
    if (player.current.getPlayerState() === 1) {
      player.current.pauseVideo();
      setIsPlaying(false);
    } else if (
      player.current.getPlayerState() === -1 ||
      player.current.getPlayerState() === 2
    ) {
      player.current.playVideo();
      setIsPlaying(true);
    }
  };
  const playPrevSong = () => {
    player.current.pauseVideo();
    youtubeIndex.current =
      youtubeIndex.current !== 0 ? youtubeIndex.current - 1 : songs.length - 1;
    setCurrentYoutubeIndex(youtubeIndex.current);
    player.current.loadVideoById(
      getYoutubeVideoIdOrNull(songs[youtubeIndex.current].songUrl)
    );
    if (player.current.getPlayerState() === 1) {
      player.current.playVideo();
    }
  };
  const playNextSong = () => {
    player.current.pauseVideo();
    youtubeIndex.current = (youtubeIndex.current + 1) % songs.length;
    setCurrentYoutubeIndex(youtubeIndex.current);
    player.current.loadVideoById(
      getYoutubeVideoIdOrNull(songs[youtubeIndex.current].songUrl)
    );
    if (player.current.getPlayerState() === 1) {
      player.current.playVideo();
    }
  };

  const handleVolumeChange = (event) => {
    player.current.setVolume(event.target.value);
    setVolume(event.target.value);
  };

  const handleMuteClick = () => {
    if (player.current.isMute()) {
      player.current.unMute();
      setVolume(player.current.getVolume());
    } else {
      player.current.mute();
      setVolume(0);
    }
  };

  const handleFloatBtnClick = () => {
    setIsMemoOpen((prev) => !prev);
  };

  const handleDeleteMemoClick = () => {
    memoTextareaRef.current.value = "";
  };

  const handleCloseModal = () => {
    setIsModalOpened(false);
  };
  const bars = Array(50).fill(1);
  return (
    <Container>
      <Background coverUrl={coverUrl}>
        <Header>HOLOSULO</Header>

        <BarContainer>
          {bars.map((item, index) => (
            <Bar key={index} />
          ))}
        </BarContainer>
        <Text>NOW PLAYING</Text>
        <SongTitle>{songs[currentYoutubeIndex].songTitle}</SongTitle>
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
      <MusicPlayerContainer>
        <div id="player" style={{ display: "none" }} />
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
          <PlayerBtn onClick={handleMuteClick}>
            <FontAwesomeIcon icon={volume > 0 ? faVolumeUp : faVolumeOff} />
          </PlayerBtn>
          <VolumeSlider
            onChange={(e) => handleVolumeChange(e)}
            type="range"
            min="0"
            max="100"
            step="10"
            value={volume}
          />
        </>
      </MusicPlayerContainer>
      <MemoContainer isMemoOpen={isMemoOpen}>
        <Memo ref={memoTextareaRef} placeholder="하고싶은 말이 있었나요?" />
        <DeleteMemo onClick={handleDeleteMemoClick}>지우기</DeleteMemo>
      </MemoContainer>
      <FloatingButton onClick={handleFloatBtnClick}>
        <FontAwesomeIcon icon={isMemoOpen ? faXmark : faPencil} />
      </FloatingButton>
    </Container>
  );
}

export default Main;
