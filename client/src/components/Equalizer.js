import styled, { css, keyframes } from "styled-components";

const BarContainer = styled.div`
  display: flex;
  align-items: center;
  margin-top: 30px;
  margin-bottom: 50px;
  height: 20px;
`;

const equalize = keyframes`
  0% {
    height: 6px;
  }
  4% {
    height: 5px;
  }
  8% {
    height: 4px;
  }
  12% {
    height: 13px;
  }
  16% {
    height: 2px;
  }
  20% {
    height: 3px;
  }
  24% {
    height: 4px;
  }
  28% {
    height: 11px;
  }
  32% {
    height: 4px;
  }
  36% {
    height: 16px;
  }
  40% {
    height: 2px;
  }
  44% {
    height: 14px;
  }
  48% {
    height: 17px;
  }
  52% {
    height: 3px;
  }
  56% {
    height: 8px;
  }
  60% {
    height: 3px;
  }
  64% {
    height: 15px;
  }
  68% {
    height: 16px;
  }
  72% {
    height: 7px;
  }
  76% {
    height: 8px;
  }
  80% {
    height: 7px;
  }
  84% {
    height: 16px;
  }
  88% {
    height: 15px;
  }
  92% {
    height: 6px;
  }
  96% {
    height: 7px;
  }
  100% {
    height: 8px;
  }
`;
const Bar = styled.span`
  width: 3px;
  height: 8px;
  background: white;
  margin: 0 1px;
  ${(props) =>
    props.isPlaying &&
    css`
      animation: ${equalize} 4s 0s infinite;
    `};
  &:nth-child(11n + 0) {
    animation-delay: -1.2s;
  }
  &:nth-child(11n + 1) {
    animation-delay: -1.9s;
  }
  &:nth-child(11n + 2) {
    animation-delay: -2.7s;
  }
  &:nth-child(11n + 3) {
    animation-delay: -2.3s;
  }
  &:nth-child(11n + 4) {
    animation-delay: -5.3s;
  }
  &:nth-child(11n + 5) {
    animation-delay: -1.2s;
  }
  &:nth-child(11n + 6) {
    animation-delay: -1.5s;
  }
  &:nth-child(11n + 7) {
    animation-delay: -0.8s;
  }
  &:nth-child(11n + 8) {
    animation-delay: -1.2s;
  }
  &:nth-child(11n + 9) {
    animation-delay: -0.5s;
  }
`;

function Equalizer({ isPlaying }) {
  const bars = Array(50).fill(1);
  return (
    <BarContainer>
      {bars.map((item, index) => (
        <Bar key={index} isPlaying={isPlaying} />
      ))}
    </BarContainer>
  );
}

export default Equalizer;
