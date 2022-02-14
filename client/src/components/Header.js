import styled from "styled-components";

const HeaderContainer = styled.div`
  width: 100%;
  height: 80px;
  display: fixed;
  left: 0;
  top: 0;
  border: 1px solid black;
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

function Header() {
  return (
    <HeaderContainer>
      <div>Logo</div>
      <div>
        <span>Menu</span>
        <span>Login</span>
        <span>Signup</span>
      </div>
    </HeaderContainer>
  );
}

export default Header;
