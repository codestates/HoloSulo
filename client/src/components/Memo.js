import { useRef } from "react";
import styled from "styled-components";

const MemoContainer = styled.div`
  width: 300px;
  height: 300px;
  position: absolute;
  right: 50px;
  bottom: 180px;
  background-color: white;
  border-radius: 20px;
  display: ${(props) => (props.isMemoOpen ? "flex" : "none")};
  flex-direction: column;
  align-items: flex-end;
  justify-content: space-between;
  @media only screen and (max-width: 800px) {
    right: 20px;
  }
`;

const Textarea = styled.textarea`
  width: 100%;
  height: 90%;
  background-color: white;
  border: none;
  resize: none;
  outline: none;
  border-radius: 20px;
  padding: 10px;
`;

const DeleteMemo = styled.span`
  color: red;
  font-size: 18px;
  padding: 10px;
  cursor: pointer;
`;

function Memo({ isMemoOpen }) {
  const memoTextareaRef = useRef();

  const handleDeleteMemoClick = () => {
    memoTextareaRef.current.value = "";
  };
  return (
    <MemoContainer isMemoOpen={isMemoOpen}>
      <Textarea ref={memoTextareaRef} placeholder="하고싶은 말이 있었나요?" />
      <DeleteMemo onClick={handleDeleteMemoClick}>지우기</DeleteMemo>
    </MemoContainer>
  );
}

export default Memo;
