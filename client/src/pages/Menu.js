import { useEffect } from "react";
import { useRecoilValue, useSetRecoilState } from "recoil";
import styled from "styled-components";
import { isGlowingAtom } from "../atom";
import Glowing from "../components/Glowing";

const Container = styled.div`
  width: 100%;
  height: 100vh;
  padding-top: 80px;
  background: black;
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

function Menu() {
  const isGlowing = useRecoilValue(isGlowingAtom);
  const setGlowingAtom = useSetRecoilState(isGlowingAtom);

  useEffect(() => {
    if (isGlowing) {
      setTimeout(() => {
        setGlowingAtom(false);
      }, 3000);
    }

    return () => {
      setGlowingAtom(true);
    };
  }, []);
  return (
    <>
      {isGlowing ? (
        <LoadingWrapper>
          <Glowing />
        </LoadingWrapper>
      ) : (
        <Container>
          <div>Hie</div>
        </Container>
      )}
    </>
  );
}

export default Menu;
