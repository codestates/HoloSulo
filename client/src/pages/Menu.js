import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { useRecoilState, useRecoilValue, useSetRecoilState } from "recoil";
import styled from "styled-components";
import { isGlowingAtom, playlistsAtom, tagsAtom, timesAtom } from "../atom";
import Glowing from "../components/Glowing";
import PlaylistDetail from "../components/PlaylistDetail";
import Dimmed from "../components/Dimmed";

import CreatePlaylist from "../components/CreatePlaylist";
import { createOrder, getPlaylists } from "../api";
import Tags from "../components/Tags";
import Times from "../components/Times";
import Playlists from "../components/Playlists";
import { getPlaylistById } from "../utils/getPlaylistById";
import { Helmet } from "react-helmet-async";

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

const Button = styled.div`
  color: white;
  margin: 0 auto;
  background-color: rgba(48, 48, 48, 60%);
  padding: 15px 30px;
  border-radius: 20px;
  margin-top: 50px;
  cursor: ${(props) => (props.isEnable ? "pointer" : "default")};
`;

function Menu() {
  const navigate = useNavigate();
  const isGlowing = useRecoilValue(isGlowingAtom);
  const setGlowingAtom = useSetRecoilState(isGlowingAtom);

  const tags = useRecoilValue(tagsAtom);
  const times = useRecoilValue(timesAtom);

  const [tag, setTag] = useState(tags[0]);
  const [time, setTime] = useState(times[0]);
  const [playlists, setPlaylists] = useRecoilState(playlistsAtom);
  const [playlistId, setPlaylistId] = useState();
  const [showPlaylistDetail, setShowPlaylistDetail] = useState(false);
  const [showCreatePlaylist, setShowCreatePlaylist] = useState(false);

  useEffect(() => {
    // Playlists 호출
    (async () => {
      const responses = await getPlaylists(tags);
      // console.log(responses);
      const obj = {};
      responses.forEach((response) => {
        obj[response.data.data[0].tag] = response.data.data;
      });
      setPlaylists(obj);
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

  const handleOrderClick = async () => {
    const response = await createOrder(tag, playlistId, time);
    // console.log(response);
    if (response.data.response === "ok") {
      navigate("/main", {
        state: {
          time: 1000 * 60 * 60 * time,
          songs: getPlaylistById(playlists[tag], playlistId).songs,
          coverUrl: getPlaylistById(playlists[tag], playlistId).coverUrl,
        },
      });
    }
  };
  // console.log(time, tag, playlistId);
  return (
    <>
      <Helmet>
        <title>Menu | HoloSulo</title>
      </Helmet>
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
                playlist={getPlaylistById(playlists[tag], playlistId)}
                setShowPlaylistDetail={setShowPlaylistDetail}
              />
            </>
          )}
          {showCreatePlaylist && (
            <>
              <Dimmed toggleDimmed={setShowCreatePlaylist} />
              <CreatePlaylist setShowCreatePlaylist={setShowCreatePlaylist} />
            </>
          )}
          <Tags setTag={setTag} />
          <Playlists
            playlists={playlists[tag]}
            tag={tag}
            setShowPlaylistDetail={setShowPlaylistDetail}
            setShowCreatePlaylist={setShowCreatePlaylist}
            setPlaylistId={setPlaylistId}
          />
          <Times setTime={setTime} />
          <Button isEnable={true} onClick={handleOrderClick}>
            주문하기
          </Button>
        </Container>
      )}
    </>
  );
}

export default Menu;
