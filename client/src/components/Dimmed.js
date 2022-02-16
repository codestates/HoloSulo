import styled from "styled-components";

const Container = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 70%);
  cursor: pointer;
`;

function Dimmed({ setShowPlaylistDetail }) {
  const handleClick = () => {
    setShowPlaylistDetail((prev) => !prev);
    document.body.style.overflow = "auto";
  };

  return <Container onClick={handleClick} />;
}

export default Dimmed;
