import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPencil, faXmark } from "@fortawesome/free-solid-svg-icons";
import styled from "styled-components";

const Button = styled.div`
  position: absolute;
  bottom: 100px;
  right: 50px;
  width: 50px;
  height: 50px;
  border-radius: 25px;
  background-color: white;
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  @media only screen and (max-width: 800px) {
    right: 20px;
  }
`;

function FloatingButton({ isMemoOpen, setIsMemoOpen }) {
  const handleFloatBtnClick = () => {
    setIsMemoOpen((prev) => !prev);
  };
  return (
    <Button onClick={handleFloatBtnClick}>
      <FontAwesomeIcon icon={isMemoOpen ? faXmark : faPencil} />
    </Button>
  );
}

export default FloatingButton;
