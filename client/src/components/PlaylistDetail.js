import styled from "styled-components";

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
    width: 50px;
    height: 50px;
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

const Description = styled.p`
  font-size: 14px;
  @media only screen and (max-width: 600px) {
    font-size: 12px;
  }
  @media only screen and (max-width: 400px) {
    font-size: 10px;
  }
`;

const SonglistContainer = styled.div`
  display: flex;
  flex-direction: column;
  margin-top: 40px;

  @media only screen and (max-width: 800px) {
    margin-top: 20px;
  }
`;

const SonglistHeader = styled.div`
  border-top: 1px solid rgb(200, 200, 200);
  border-bottom: 1px solid rgb(200, 200, 200);
  color: #717171;
  padding: 5px 0;
  @media only screen and (max-width: 600px) {
    font-size: 12px;
  }
`;

const SongRow = styled.div`
  border-bottom: 1px solid rgb(200, 200, 200);
  color: #717171;
  padding: 8px 0;
  @media only screen and (max-width: 600px) {
    font-size: 12px;
  }
`;

const Number = styled.span`
  width: 80px;
  margin-left: 10px;
  display: inline-block;
`;

const SongTitle = styled.span``;

function PlaylistDetail({
  scrollPosition,
  playlist = {
    cover:
      "https://images.unsplash.com/photo-1513151233558-d860c5398176?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1770&q=80",
    title: "행복을 드려요",
    description: "듣고만 있어도 행복한 노래들과 더더욱 행복하세요 :)",
  },
}) {
  const songs = [
    { title: "abcdefg" },
    { title: "abcdefg" },
    { title: "abcdefg" },
  ];
  return (
    <Container scrollPosition={scrollPosition + ""}>
      <PlaylistContainer>
        <Cover src={playlist.cover} />
        <PlaylistInfoContainer>
          <SubTitle>Playlist</SubTitle>
          <Title>{playlist.title}</Title>
          <Description>{playlist.description}</Description>
        </PlaylistInfoContainer>
      </PlaylistContainer>
      <SonglistContainer>
        <SonglistHeader>
          <Number>#</Number>
          <SongTitle>노래</SongTitle>
        </SonglistHeader>
        {songs.map((song, index) => (
          <SongRow key={index}>
            <Number>{index + 1}</Number>
            <SongTitle>{song.title}</SongTitle>
          </SongRow>
        ))}
      </SonglistContainer>
    </Container>
  );
}

export default PlaylistDetail;
