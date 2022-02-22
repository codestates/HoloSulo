import { useLocation, useNavigate } from "react-router-dom";
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

function Dimmed({ toggleDimmed, isClickedAllowed = true }) {
  const navigate = useNavigate();
  const { pathname } = useLocation();

  const handleClick = () => {
    if (isClickedAllowed) {
      toggleDimmed((prev) => !prev);
      if (pathname === "/playlists") {
        navigate(-1);
      }
      document.body.style.overflow = "auto";
    }
  };

  return (
    <Container onClick={handleClick} isClickedAllowed={isClickedAllowed} />
  );
}

export default Dimmed;
