import { Link, useLocation } from "react-router-dom";
import { useRecoilValue } from "recoil";
import styled from "styled-components";
import { isLoggedInAtom } from "../atom";
import logo from "../images/logo.png";

const Container = styled.div`
  width: 100%;
  height: 80px;
  position: fixed;
  background-color: #f1eded;
  left: 0;
  top: 0;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0 20px;
`;

const Logo = styled.img`
  height: 50px;
  src: ${logo};
`;

const MenuItems = styled.ul`
  display: flex;
`;

const Item = styled.li`
  margin-left: 20px;
  text-decoration: ${(props) => props.active};
`;

function Header() {
  const { pathname } = useLocation();
  const isLoggedIn = useRecoilValue(isLoggedInAtom);

  return (
    <Container>
      <Link to="/">
        <Logo src={logo} />
      </Link>
      {pathname === "/" ? null : (
        <MenuItems>
          <Item active={pathname === "/menu" ? "underline" : "none"}>
            <Link to="/menu">Menu</Link>
          </Item>
          {isLoggedIn ? (
            <Item active={pathname === "/mypage" ? "underline" : "none"}>
              <Link to="/mypage">mypage</Link>
            </Item>
          ) : (
            <>
              <Item active={pathname === "/login" ? "underline" : "none"}>
                <Link to="/login">Login</Link>
              </Item>
              <Item active={pathname === "/signup" ? "underline" : "none"}>
                <Link to="/signup">Signup</Link>
              </Item>
            </>
          )}
        </MenuItems>
      )}
    </Container>
  );
}

export default Header;
