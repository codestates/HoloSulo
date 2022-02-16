import styled from "styled-components";

const Container = styled.div`
  display: flex;
  flex-direction: column;
  width: 140px;
  height: 220px;
  margin-right: 40px;
  padding: 10px;
  background-color: rgba(48, 48, 48, 60%);
  border: 2px solid ${(props) => (props.isActive ? "#38b5fb;" : "black;")}
  border-radius: 10px;
  cursor: pointer;
  transition: border 0.2s;
`;

const Cover = styled.img`
  height: 115px;
  width: 115px;
  border-radius: 10px;
  margin: 0 auto;
  margin-bottom: 15px;
`;

const Title = styled.h3`
  color: white;
  font-weight: bold;
  font-size: 14px;
  margin-bottom: 5px;
`;

const Description = styled.p`
  color: rgba(255, 255, 255, 70%);
  font-size: 10px;
`;

const More = styled.span`
  font-size: 9px;
  color: white;
  margin-top: 5px;
`;

function Playlist({
  index,
  playlist,
  isActive,
  handlePlaylistClick,
  setShowPlaylistDetail,
}) {
  const handleClick = () => {
    handlePlaylistClick(index);
  };

  const handleMoreClick = (event) => {
    event.stopPropagation();
    setShowPlaylistDetail(true);
    document.body.style.overflow = "hidden";
  };
  return (
    <Container onClick={handleClick} isActive={isActive}>
      <Cover src={playlist.cover} />
      <Title>{playlist.title}</Title>
      <Description>{playlist.description}</Description>
      <More onClick={(e) => handleMoreClick(e)}>자세히보기 &rarr;</More>
    </Container>
  );
}

export default Playlist;
