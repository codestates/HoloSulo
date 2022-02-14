import Header from "./Header";
import styled from "styled-components";
import { useRecoilValue } from "recoil";
import { isGlowingAtom } from "../atom";
import { useLocation } from "react-router-dom";

const Container = styled.div``;

function Layout({ children }) {
  const { pathname } = useLocation();
  const isGlowing = useRecoilValue(isGlowingAtom);
  return (
    <Container>
      {isGlowing && pathname === "/menu" ? null : <Header />}
      {children}
    </Container>
  );
}

export default Layout;
