import { useEffect, useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import styled from "styled-components";
import axios from "axios";

const Container = styled.div`
  position: absolute;
  top: ${(props) => (props.scrollPosition ? props.scrollPosition : "0")};
  left: 0;
  right: 0;
  bottom: 0;
  margin: auto;
  /* top: 15%;
  left: 20%; */
  width: 60%;
  height: 60%;
  min-height: 400px;
  border: 1px solid white;
  background-color: white;
  display: flex;
  flex-direction: column;
  padding: 20px;
  border-radius: 10px;
  z-index: 1;
  overflow-y: scroll;
  @media only screen and (max-width: 400px) {
    width: 80%;
    height: 80%;
  }
`;

const PlaylistContainer = styled.div`
  width: 100%;
  display: flex;
  @media only screen and (max-width: 800px) {
    height: auto;
  }
`;

const Cover = styled.img`
  width: 200px;
  height: 200px;
  margin-right: 20px;
  border-radius: 10px;
  @media only screen and (max-width: 800px) {
    width: 100px;
    height: 100px;
  }
  @media only screen and (max-width: 400px) {
    width: 80px;
    height: 80px;
  }
`;

const CoverContainer = styled.div`
  display: flex;
  flex-direction: column;
`;

const CoverInput = styled.input`
  width: 150px;
  @media only screen and (max-width: 800px) {
    width: 100px;
  }
  @media only screen and (max-width: 400px) {
    width: 80px;
  }
`;

const PlaylistInfoContainer = styled.div`
  display: flex;
  flex-direction: column;
  height: 100%;
  width: 100%;
`;
const SubTitle = styled.h2`
  font-size: 16px;
  @media only screen and (max-width: 600px) {
    font-size: 14px;
  }
  @media only screen and (max-width: 400px) {
    font-size: 12px;
  }
`;
const Title = styled.h1`
  font-size: 32px;
  margin-bottom: 40px;
  font-weight: bold;
  @media only screen and (max-width: 800px) {
    font-size: 24px;
    margin-bottom: 20px;
  }
  @media only screen and (max-width: 600px) {
    font-size: 16px;
    margin-bottom: 10px;
  }
`;

const TitleInput = styled(Title).attrs({
  as: "input",
})`
  border: none;
  @media only screen and (max-width: 800px) {
    flex-basis: 1;
  }
  @media only screen and (max-width: 420px) {
    flex-basis: 50%;
  }
`;

const Description = styled.p`
  font-size: 14px;
  @media only screen and (max-width: 600px) {
    font-size: 12px;
  }
  @media only screen and (max-width: 400px) {
    font-size: 10px;
  }
`;

const DescriptionTextarea = styled(Description).attrs({
  as: "textarea",
})`
  height: 80px;
  max-height: 100px;
  resize: none;
  border: none;
  @media only screen and (max-width: 800px) {
    flex-basis: 40%;
  }
  @media only screen and (max-width: 450px) {
    width: auto;
  }
`;

const SonglistContainer = styled.div`
  display: flex;
  flex-direction: column;
  margin-top: 40px;
  /* overflow-y: scroll; */
  @media only screen and (max-width: 800px) {
    margin-top: 20px;
  }
`;

const SonglistHeader = styled.div`
  border-top: 1px solid rgb(200, 200, 200);
  border-bottom: 1px solid rgb(200, 200, 200);
  color: #717171;
  padding: 5px 0;
  display: flex;
  @media only screen and (max-width: 600px) {
    font-size: 12px;
  }
`;

const SongRow = styled.div`
  border-bottom: 1px solid rgb(200, 200, 200);
  color: #717171;
  padding: 8px 0;
  display: flex;
  @media only screen and (max-width: 600px) {
    font-size: 12px;
  }
`;

const Number = styled.span`
  width: 80px;
  margin-left: 10px;
  display: inline-block;
  flex-basis: 10%;
`;

const SongTitle = styled.span`
  flex-basis: 40%;
`;

const SongTitleInput = styled.input`
  flex-basis: 40%;
  border: none;
  @media only screen and (max-width: 800px) {
    width: 80px;
  }
`;
const SongUrlInput = styled.input`
  flex-basis: 40%;
  border: none;
  @media only screen and (max-width: 800px) {
    width: 80px;
  }
`;

const SongDelete = styled.span`
  flex-basis: 10%;
  text-align: center;
  cursor: pointer;
`;

const ButtonContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  margin-top: 20px;
`;
const Button = styled.button`
  border: none;
  padding: 10px;
  width: 100px;
  margin: 0 30px;
  background: #666666;
  color: white;
  margin-top: ${(props) => props.marginTop || 0};
  &:hover {
    background: black;
    color: white;
  }
  transition: background-color 0.2s;
  cursor: pointer;
  @media only screen and (max-width: 800px) {
    width: 200px;
  }
  @media only screen and (max-width: 600px) {
    padding: 10px 5px;
    width: 80px;
  }
`;

function PlaylistDetail({ scrollPosition, playlist }) {
  const { pathname, state } = useLocation();

  const [cover, setCover] = useState();
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [songlist, setSonglist] = useState([{ title: "", url: "" }]);
  const [coverUrl, setCoverUrl] = useState();

  useEffect(() => {
    if (cover) {
      const url = URL.createObjectURL(cover);
      setCoverUrl(url);
    }
  }, [cover]);
  const handleTitleInputChange = (event) => {
    event.preventDefault();

    setTitle(event.target.value);
  };

  const handleTextareaChange = (event) => {
    setDescription(event.target.value);
  };
  const handleUpload = (event) => {
    event.preventDefault();

    const file = event.target.files[0];
    setCover(file);
  };

  const handleSongTitleChange = (event, index) => {
    event.preventDefault();

    const newSonglist = [...songlist];
    newSonglist[index].title = event.target.value;
    setSonglist(newSonglist);
  };
  const handleSongUrlChange = (event, index) => {
    event.preventDefault();

    const newSonglist = [...songlist];
    newSonglist[index].url = event.target.value;
    setSonglist(newSonglist);
  };
  const handleAddClick = () => {
    setSonglist((prev) => [...prev, { title: "", url: "" }]);
  };
  const handleDeleteSong = (event, index) => {
    const newSonglist = [...songlist];
    newSonglist.splice(index, 1);
    setSonglist(newSonglist);
  };
  const handleSubmitClick = async () => {
    // TODO: call POST /playlists
    const formData = new FormData();

    formData.append("tag", state.tag);
    formData.append("title", title);
    formData.append("description", description);
    formData.append("coverFile", cover);
    formData.append("songs", JSON.stringify(songlist));
    const response = await axios.post(
      `${process.env.REACT_APP_API_URL}/playlists`,
      formData,
      {
        headers: { "Content-Type": "multipart/form-data" },
        withCredentials: true,
      }
    );
    // TODO: Update playlists states
    // TODO: Go back to Menu with new playlist info
  };

  return (
    <Container scrollPosition={scrollPosition + ""}>
      <PlaylistContainer>
        {pathname === "/playlists" ? (
          <CoverContainer>
            <Cover src={coverUrl} />
            <CoverInput type="file" accept="image/*" onChange={handleUpload} />
          </CoverContainer>
        ) : (
          <Cover src={playlist.coverUrl} />
        )}
        <PlaylistInfoContainer>
          <SubTitle>Playlist</SubTitle>
          {pathname === "/playlists" ? (
            <TitleInput
              placeholder="플레이리스트 제목을 입력하세요"
              onChange={handleTitleInputChange}
              value={title}
            />
          ) : (
            <Title>{playlist.title}</Title>
          )}
          {pathname === "/playlists" ? (
            <DescriptionTextarea
              placeholder="플레이리스트 상세 설명을 입력하세요"
              onChange={handleTextareaChange}
              value={description}
            />
          ) : (
            <Description>{playlist.description}</Description>
          )}
        </PlaylistInfoContainer>
      </PlaylistContainer>
      <SonglistContainer>
        <SonglistHeader>
          <Number>#</Number>
          <SongTitle>노래</SongTitle>
          {pathname === "/playlists" && <SongTitle>URL</SongTitle>}
        </SonglistHeader>
        {pathname === "/playlists"
          ? songlist.map((song, index) => (
              <SongRow>
                <Number>{index + 1}</Number>
                <SongTitleInput
                  placeholder="노래 제목을 입력하세요."
                  onChange={(e) => handleSongTitleChange(e, index)}
                  value={song.title}
                />
                <SongUrlInput
                  placeholder="유튜브 영상 링크를 입력하세요."
                  value={song.url}
                  onChange={(e) => handleSongUrlChange(e, index)}
                />
                <SongDelete onClick={(e) => handleDeleteSong(e, index)}>
                  삭제
                </SongDelete>
              </SongRow>
            ))
          : playlist.songs.map((item, index) => (
              <SongRow key={index}>
                <Number>{index + 1}</Number>
                <SongTitle>{item.songTitle}</SongTitle>
              </SongRow>
            ))}
      </SonglistContainer>
      {pathname === "/playlists" && (
        <ButtonContainer>
          <Button onClick={handleAddClick}>노래 추가</Button>
          <Button onClick={handleSubmitClick}>생성</Button>
        </ButtonContainer>
      )}
    </Container>
  );
}

export default PlaylistDetail;
