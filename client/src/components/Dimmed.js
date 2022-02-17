import styled from "styled-components";

const Container = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 70%);
  z-index: 1;
  cursor: ${(props) => (props.isClickedAllowed ? "pointer" : "default")};
`;

function Dimmed({ setShowPlaylistDetail, isClickedAllowed = true }) {
  const handleClick = () => {
    if (isClickedAllowed) {
      setShowPlaylistDetail((prev) => !prev);
      document.body.style.overflow = "auto";
    }
  };

  return (
    <Container onClick={handleClick} isClickedAllowed={isClickedAllowed} />
  );
}

export default Dimmed;
