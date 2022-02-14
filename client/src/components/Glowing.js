import styled, { keyframes } from "styled-components";

const glowing = (color) => keyframes`
  0%, 5%, 10%, 20%, 50.1%, 60%, 65.1%, 80%, 90.1%, 92% {
    color: #white;
    text-shadow: none;
  }

  5.1%,10.1%,20.1%,30%,50%,60.1%,65%,80.1%,90%,92.1%,100% {
    color: white;
    text-shadow: 0 0 10px ${color},
    0 0 20px ${color},
    0 0 40px ${color},
    0 0 80px ${color},
    0 0 160px ${color},
    0 0 400px ${color};
  }
`;

const GlowingText = styled.span`
  color: ${(props) => props.glowingColor};
  font-size: 8rem;
  display: block;
  animation: ${(props) => glowing(props.glowingColor)} 5s linear infinite;
  &:nth-child(2) {
    animation-delay: 0.4s;
  }
  @media only screen and (max-width: 600px) {
    font-size: 4rem;
  }
`;

const Frame = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  border: 3px solid white;
  padding: 3rem;

  @media only screen and (max-width: 600px) {
    padding: 2rem;
  }
`;

function Glowing() {
  return (
    <Frame>
      <GlowingText glowingColor={"#df93ed"}>HOLO</GlowingText>
      <GlowingText glowingColor={"#87D8FD"}>SULO</GlowingText>
    </Frame>
  );
}

export default Glowing;
