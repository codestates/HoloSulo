import styled from "styled-components";
import { faPlus } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Playlist from "../components/Playlist";
import { useRecoilValue } from "recoil";
import { isLoggedInAtom } from "../atom";
import { useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";

const PlayListContainer = styled.div`
  overflow-x: scroll;
  display: flex;
  justify-content: "flex-start";
  color: white;
  align-items: center;
  padding: 20px;
  height: 300px;
`;

const PlaylistCard = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width: 140px;
  height: 220px;
  margin-right: 10px;
  font-size: 14px;
  /* padding: 5px; */
  background-color: rgba(48, 48, 48, 60%);
  border: 2px solid black;
  border-radius: 10px;
  cursor: pointer;
  &:hover {
    background-color: rgba(225, 225, 225, 60%);
  }
  transition: background-color 0.2s;
`;

const PlaylistCardMessage = styled.span`
  margin-top: 20px;
  width: 120px;
  text-align: center;
`;

function Playlists({
  playlists,
  tag,
  setShowPlaylistDetail,
  setShowCreatePlaylist,
  setPlaylistId,
}) {
  //   console.log(playlists);
  const navigate = useNavigate();
  const [isActiveAt, setIsActiveAt] = useState();
  const isLoggedIn = useRecoilValue(isLoggedInAtom);

  useEffect(() => {
    setIsActiveAt(1);
    setPlaylistId(playlists[0].id);
  }, [tag]);
  const handleCreatePlaylistClick = () => {
    if (!isLoggedIn) {
      navigate("/login");
      return;
    }
    setShowCreatePlaylist(true);

    navigate("/playlists", { state: { tag: tag } });
  };
  const handlePlaylistClick = (index) => {
    setIsActiveAt(index + 1);
    setPlaylistId(playlists[index].id);
  };
  return (
    <PlayListContainer>
      {playlists.map((playlist, index) => (
        <Playlist
          key={index}
          playlist={playlist}
          isActiveAt={isActiveAt}
          handlePlaylistClick={() => handlePlaylistClick(index)}
          setShowPlaylistDetail={setShowPlaylistDetail}
          setPlaylistId={setPlaylistId}
          tag={tag}
        />
      ))}
      <PlaylistCard onClick={handleCreatePlaylistClick}>
        <FontAwesomeIcon icon={faPlus} />
        <PlaylistCardMessage>플레이리스트 추가</PlaylistCardMessage>
      </PlaylistCard>
    </PlayListContainer>
  );
}

export default Playlists;
