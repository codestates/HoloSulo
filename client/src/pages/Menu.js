import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { useRecoilValue, useSetRecoilState } from "recoil";
import styled from "styled-components";
import { isGlowingAtom } from "../atom";
import Glowing from "../components/Glowing";
import Playlist from "../components/Playlist";
import PlaylistDetail from "../components/PlaylistDetail";
import Dimmed from "../components/Dimmed";
import axios from "axios";
import { faPlus } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const Container = styled.div`
  width: 100%;
  height: 100%;
  padding-top: 80px;
  padding-bottom: 80px;
  background: black;
  display: flex;
  flex-direction: column;
  transition: height, 0.3s;
`;

const LoadingWrapper = styled.div`
  width: 100%;
  height: 100vh;
  background: black;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

const Text = styled.li`
  color: white;
  font-size: 18px;
  text-align: center;
  cursor: pointer;
  /* border: 1px solid white; */
`;

const TagContainer = styled.div`
  margin-top: 50px;
  padding: 10px 20px;
  height: 200px;
  width: 100%;
  background-color: rgba(48, 48, 48, 60%);
`;

const TagList = styled.ul`
  display: grid;
  height: 80%;
  /* border: 1px solid white; */
  place-items: center;
  align-items: center;
  grid-template-columns: 1fr 1fr 1fr 1fr;
  & ${Text}:nth-child(${(props) => props.isActiveAt}) {
    color: #38b5fb;
    transition: color 0.2s;
  }
`;

const PlayListContainer = styled.div`
  overflow-x: scroll;
  display: flex;
  justify-content: "flex-start";
  color: white;
  align-items: center;
  padding: 20px;
  height: 300px;
`;

const TimeContainer = styled.div`
  /* margin-top: 50px; */
  padding: 10px 20px;
  height: 150px;
  width: 100%;
  background-color: rgba(48, 48, 48, 60%);
`;

const TimeList = styled.ul`
  display: grid;
  height: 80%;
  place-items: center;
  align-items: center;
  grid-template-columns: 1fr 1fr 1fr 1fr 1fr;
  & ${Text}:nth-child(${(props) => props.isActiveAt}) {
    color: #38b5fb;
    transition: color 0.2s;
  }
`;

const Button = styled.div`
  color: white;
  margin: 0 auto;
  background-color: rgba(48, 48, 48, 60%);
  padding: 15px 30px;
  border-radius: 20px;
  margin-top: 50px;
  cursor: ${(props) => (props.isEnable ? "pointer" : "default")};
`;

const Title = styled.h2`
  color: white;
  font-weight: bold;
  font-size: 1.25rem;
  margin-bottom: 10px;
`;

const EmptyPlaylist = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width: 140px;
  height: 220px;
  margin-right: 40px;
  padding: 10px;
  background-color: rgba(48, 48, 48, 60%);
  border: 2px solid ${(props) => (props.isActive ? "#38b5fb;" : "black;")};
  border-radius: 10px;
  cursor: pointer;
  &:hover {
    background-color: rgba(225, 225, 225, 60%);
  }
  transition: background-color 0.2s;
`;

const EmptyMessage = styled.span`
  margin-top: 20px;
`;

const TAGS = [
  "#조용한",
  "#재즈",
  "#모던한",
  "#차분한",
  "#뉴에이지",
  "#신나는",
  "#시끌벅적한",
  "#일렉트로닉",
];
const TIMES = ["30분", "1시간", "2시간", "3시간", "무제한"];

function Menu() {
  const navigate = useNavigate();
  const isGlowing = useRecoilValue(isGlowingAtom);
  const setGlowingAtom = useSetRecoilState(isGlowingAtom);
  const [activeTagIndex, setActiveTagIndex] = useState(1);
  const [activeTimeIndex, setActiveTimeIndex] = useState(2);
  const [activePlaylistIndex, setActivePlaylistIndex] = useState(0);
  const [playlists, setPlaylists] = useState([]);
  const [showPlaylistDetail, setShowPlaylistDetail] = useState(false);
  const [tag, setTag] = useState(TAGS[0]);
  const [time, setTime] = useState("1시간");
  const [scrollPosition, setScrollPosition] = useState(0);
  const [showCreatePlaylist, setShowCreatePlaylist] = useState(false);
  const [playlistId, setPlaylistId] = useState();

  const handleScroll = () => {
    const position = window.pageYOffset;
    setScrollPosition(position);
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [scrollPosition]);

  useEffect(() => {
    // Playlist 호출
    (async () => {
      let response = await axios.get(
        `http://localhost:4000/playlists?tag=${encodeURIComponent(TAGS[0])}`
      );
      if (response.data.response === "ok") {
        setPlaylists(response.data.data);
      }
    })();

    if (isGlowing) {
      setTimeout(() => {
        setGlowingAtom(false);
      }, 3000);
    }

    return () => {
      setGlowingAtom(true);
    };
  }, []);

  const handleTagClick = async (event, index) => {
    // setActiveTagIndex((prev) => (prev === index + 1 ? 0 : index + 1));
    setActiveTagIndex(index + 1);
    if (tag !== event.target.innerText) {
      setActivePlaylistIndex(-1);
      setTag(event.target.innerText);
      // /playlists?tag api 호출
      try {
        const response = await axios.get(
          `http://localhost:4000/playlists?tag=${encodeURIComponent(
            event.target.innerText
          )}`
        );
        if (response.data.response === "ok") {
          setPlaylists(response.data.data);
        } else {
          setPlaylists([]);
        }
      } catch (err) {
        setPlaylists([]);
      }
    }
  };

  const handleTimeClick = (event, index) => {
    setTime(event.target.innerText);
    setActiveTimeIndex((prev) => (prev === index + 1 ? 0 : index + 1));
  };

  const handlePlaylistClick = (index) => {
    setActivePlaylistIndex(index);
  };

  const handleOrderClick = async () => {
    let selectedTime;
    if (
      activeTagIndex !== 0 &&
      activeTimeIndex !== 0 &&
      activePlaylistIndex !== -1
    ) {
      switch (time) {
        case TIMES[0]:
          selectedTime = 1000 * 60 * 60 * 0.5;
          break;
        case TIMES[1]:
          selectedTime = 1000 * 60 * 60 * 1;
          break;
        case TIMES[2]:
          selectedTime = 1000 * 60 * 60 * 2;
          break;
        case TIMES[3]:
          selectedTime = 1000 * 60 * 60 * 3;
          break;
        default:
          break;
      }
      const response = await axios({
        method: "post",
        url: "http://localhost:4000/orders",
        data: {
          tag,
          playlistId: activePlaylistIndex,
          time: selectedTime / (1000 * 60 * 60),
        },
      });

      if (response.data.response === "ok") {
        navigate("/main", {
          state: {
            time: selectedTime,
            songs: playlists[activePlaylistIndex].songs,
          },
        });
      }
    }
  };

  const handleCreatePlaylistClick = () => {
    setShowCreatePlaylist(true);
    document.body.style.overflow = "hidden";
    navigate("/playlists", { state: { tag: tag } });
  };

  return (
    <>
      {isGlowing ? (
        <LoadingWrapper>
          <Glowing />
        </LoadingWrapper>
      ) : (
        <Container>
          {showPlaylistDetail && (
            <>
              <Dimmed toggleDimmed={setShowPlaylistDetail} />
              <PlaylistDetail
                scrollPosition={scrollPosition}
                playlist={playlists[playlistId]}
              />
            </>
          )}
          {showCreatePlaylist && (
            <>
              <Dimmed toggleDimmed={setShowCreatePlaylist} />
              <PlaylistDetail scrollPosition={scrollPosition} />
            </>
          )}
          <TagContainer>
            <Title>어떤 분위기가 좋으신가요?</Title>
            <TagList isActiveAt={activeTagIndex}>
              {TAGS.map((tag, index) => (
                <Text key={index} onClick={(e) => handleTagClick(e, index)}>
                  {tag}
                </Text>
              ))}
            </TagList>
          </TagContainer>
          <PlayListContainer isEmpty={playlists.length === 0}>
            {playlists.map((playlist, index) => (
              <Playlist
                key={index}
                index={index}
                playlist={playlist}
                isActive={index === activePlaylistIndex}
                handlePlaylistClick={() => handlePlaylistClick(index)}
                setShowPlaylistDetail={setShowPlaylistDetail}
                setPlaylistId={setPlaylistId}
              />
            ))}
            <EmptyPlaylist onClick={handleCreatePlaylistClick}>
              <FontAwesomeIcon icon={faPlus} />
              <EmptyMessage>플레이리스트 추가</EmptyMessage>
            </EmptyPlaylist>
          </PlayListContainer>
          <TimeContainer>
            <Title>얼마나 머물렀다 가실건가요?</Title>
            <TimeList isActiveAt={activeTimeIndex}>
              {TIMES.map((time, index) => (
                <Text onClick={(e) => handleTimeClick(e, index)} key={index}>
                  {time}
                </Text>
              ))}
            </TimeList>
          </TimeContainer>
          <Button
            isEnable={
              activeTagIndex !== 0 &&
              activeTimeIndex !== 0 &&
              activePlaylistIndex !== -1
            }
            onClick={handleOrderClick}
          >
            주문하기
          </Button>
        </Container>
      )}
    </>
  );
}

export default Menu;
