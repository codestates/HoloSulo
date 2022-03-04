import styled from "styled-components";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faBackward,
  faPlay,
  faPause,
  faForward,
  faVolumeOff,
  faVolumeUp,
} from "@fortawesome/free-solid-svg-icons";
import { useEffect, useRef, useState } from "react";
import { getYoutubeVideoIdOrNull } from "../utils/getYoutubeVideoId";
import Equalizer from "./Equalizer";
import { isMobile } from "../utils/isMobile";

const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const MusicControllerContainer = styled.div`
  width: 30%;
  min-width: 200px;
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
  @media only screen and (max-width: 600px) {
    bottom: 40px;
  }
`;

const Text = styled.span`
  display: block;
  color: white;
  margin-bottom: 10px;
`;

const SongTitle = styled.h3`
  color: white;
  font-size: 14px;
  font-weight: bold;
`;

const PlayerBtn = styled.div`
  width: 30px;
  height: 30px;
  background-color: white;
  margin-right: 5px;
  margin-left: 5px;
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

function MusicPlayer({ time, songs, isTimeOver, setIsEndModalOpened }) {
  const player = useRef();
  const youtubeIndex = useRef(0);
  const [currentYoutubeIndex, setCurrentYoutubeIndex] = useState(0);
  const [volume, setVolume] = useState(100);
  const [isPlaying, setIsPlaying] = useState(false);

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
          if (getYoutubeVideoIdOrNull(songs[youtubeIndex.current].songUrl)) {
            event.target.loadVideoById(
              getYoutubeVideoIdOrNull(songs[youtubeIndex.current].songUrl)
            );
          } else {
            console.log("invalid youtube url");
          }
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

    return () => {
      clearTimeout(timer);
      window.onYouTubeIframeAPIReady = null;
      window.YT = null;
      player.current.getIframe().remove();
      player.current.destroy();
      player.current = null;
    };
  }, []);
  const handlePlayClick = () => {
    console.log(player.current.getVideoUrl());
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
    if (getYoutubeVideoIdOrNull(songs[youtubeIndex.current].songUrl)) {
      player.current.loadVideoById(
        getYoutubeVideoIdOrNull(songs[youtubeIndex.current].songUrl)
      );
      if (player.current.getPlayerState() === 1) {
        player.current.playVideo();
      }
    } else {
      console.log("invalid youtube url");
    }
  };
  const playNextSong = () => {
    player.current.pauseVideo();
    youtubeIndex.current = (youtubeIndex.current + 1) % songs.length;
    setCurrentYoutubeIndex(youtubeIndex.current);
    if (getYoutubeVideoIdOrNull(songs[youtubeIndex.current].songUrl)) {
      player.current.loadVideoById(
        getYoutubeVideoIdOrNull(songs[youtubeIndex.current].songUrl)
      );
      if (player.current.getPlayerState() === 1) {
        player.current.playVideo();
      }
    } else {
      console.log("invalid youtube url");
    }
  };

  const handleVolumeChange = (event) => {
    player.current.setVolume(event.target.value);
    setVolume(event.target.value);
  };

  const handleMuteClick = () => {
    if (player.current.isMuted()) {
      player.current.unMute();
      setVolume(player.current.getVolume());
    } else {
      player.current.mute();
      setVolume(0);
    }
  };
  return (
    <Container>
      <Equalizer isPlaying={isPlaying} />
      <Text>NOW PLAYING</Text>
      <SongTitle>{songs[currentYoutubeIndex].songTitle}</SongTitle>
      <div id="player" style={{ display: "none" }} />
      <MusicControllerContainer>
        <PrevButton onClick={playPrevSong}>
          <FontAwesomeIcon icon={faBackward} />
        </PrevButton>
        <PlayButton onClick={handlePlayClick}>
          <FontAwesomeIcon icon={isPlaying ? faPause : faPlay} />
        </PlayButton>
        <NextButton onClick={playNextSong}>
          <FontAwesomeIcon icon={faForward} />
        </NextButton>
        {!isMobile() && (
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
        )}
      </MusicControllerContainer>
    </Container>
  );
}

export default MusicPlayer;
