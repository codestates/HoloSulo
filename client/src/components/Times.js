import { useState } from "react";
import { useRecoilValue } from "recoil";
import styled from "styled-components";
import { timesAtom } from "../atom";

const Title = styled.h2`
  color: white;
  font-weight: bold;
  font-size: 1.25rem;
  margin-bottom: 10px;
`;

const Text = styled.li`
  color: white;
  font-size: 18px;
  text-align: center;
  cursor: pointer;
  &:nth-child(${(props) => props.isActiveAt}) {
    color: #38b5fb;
    transition: color 0.2s;
  }
  @media only screen and (max-width: 450px) {
    font-size: 14px;
  }
  /* border: 1px solid white; */
`;
const TimeContainer = styled.div`
  /* margin-top: 50px; */
  padding: 10px 20px;
  height: 150px;
  width: 100%;
  background-color: rgba(48, 48, 48, 60%);
`;

const TimeList = styled.ul`
  display: grid;
  height: 80%;
  place-items: center;
  align-items: center;
  grid-template-columns: 1fr 1fr 1fr 1fr 1fr;
`;

function Times({ setTime }) {
  const times = useRecoilValue(timesAtom);
  const [isActiveAt, setIsActiveAt] = useState(1);

  const handleTimeClick = (event, index) => {
    setIsActiveAt(index + 1);
    setTime(times[index]);
  };
  return (
    <TimeContainer>
      <Title>얼마나 머물렀다 가실건가요?</Title>
      <TimeList>
        {times.map((time, index) => (
          <Text
            isActiveAt={isActiveAt}
            onClick={(e) => handleTimeClick(e, index)}
            key={index}
          >
            {time === 0.5 ? "30분" : time + "시간"}
          </Text>
        ))}
      </TimeList>
    </TimeContainer>
  );
}

export default Times;
