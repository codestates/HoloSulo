import { Link, useLocation } from "react-router-dom";
import { useRecoilValue, useSetRecoilState } from "recoil";
import styled from "styled-components";
import { isLoggedInAtom } from "../atom";
import logo from "../images/logo.png";

const Container = styled.div`
  width: 100%;
  height: 80px;
  position: fixed;
  background-color: ${(props) =>
    props.isTransparent ? "rgba(0,0,0,0)" : "#f1eded"};
  left: 0;
  top: 0;
  color: ${(props) => (props.isTransparent ? "white" : "black")};
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

function Header({ isTransparent = false }) {
  const { pathname } = useLocation();
  const isLoggedIn = useRecoilValue(isLoggedInAtom);
  const setIsLoggedInAtom = useSetRecoilState(isLoggedInAtom);

  const LogoutHandler = async () => {
    localStorage.removeItem("accessToken");
    setIsLoggedInAtom(false);
    console.log("토큰이 잘못 됬습니다.");
  };

  return (
    <Container isTransparent={isTransparent}>
      <Link to="/">
        <Logo src={logo} />
      </Link>
      {pathname === "/" ? null : (
        <MenuItems>
          <Item active={pathname === "/menu" ? "underline" : "none"}>
            <Link to="/menu">Menu</Link>
          </Item>
          {isLoggedIn ? (
            <>
              <Item active={pathname === "/mypage" ? "underline" : "none"}>
                <Link to="/mypage">mypage</Link>
              </Item>
              <Item onClick={LogoutHandler}>
                <Link to="/">Logout</Link>
              </Item>
            </>
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
