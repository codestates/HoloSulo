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
  display: flex;
  flex-direction: column;
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

const TagContainer = styled.div`
  margin-top: 50px;
  padding: 10px 20px;
  height: 200px;
  width: 100%;
  background-color: rgba(48, 48, 48, 60%);
`;

const TagList = styled.ul`
  display: grid;
  height: 80%;
  /* border: 1px solid white; */
  place-items: center;
  align-items: center;
  grid-template-columns: 1fr 1fr 1fr 1fr;
`;

const PlayListContainer = styled.div``;

const TimeContainer = styled.div`
  margin-top: 50px;
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

const Button = styled.div`
  color: white;
  margin: 0 auto;
  background-color: rgba(48, 48, 48, 60%);
  padding: 15px 30px;
  border-radius: 20px;
  margin-top: 50px;
  cursor: pointer;
`;

const Title = styled.h2`
  color: white;
  font-weight: bold;
  font-size: 1.25rem;
  margin-bottom: 10px;
`;

const Text = styled.span`
  color: white;
  font-size: 18px;
  text-align: center;
  cursor: pointer;
  /* border: 1px solid white; */
`;

function Menu() {
  const isGlowing = useRecoilValue(isGlowingAtom);
  const setGlowingAtom = useSetRecoilState(isGlowingAtom);

  const tags = [
    "#조용한",
    "#재즈",
    "#모던한",
    "#차분한",
    "뉴에이지",
    "#신나는",
    "#시끌벅적한",
    "#일렉트로닉",
  ];
  const times = ["30분", "1시간", "2시간", "3시간", "무제한"];

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

  const handleTagClick = (event) => {
    console.log(event.target.innerText);
  };

  return (
    <>
      {isGlowing ? (
        <LoadingWrapper>
          <Glowing />
        </LoadingWrapper>
      ) : (
        <Container>
          <TagContainer>
            <Title>어떤 분위기가 좋으신가요?</Title>
            <TagList>
              {tags.map((tag, index) => (
                <div>
                  <Text key={index} onClick={(e) => handleTagClick(e)}>
                    {tag}
                  </Text>
                </div>
              ))}
            </TagList>
          </TagContainer>
          <PlayListContainer></PlayListContainer>
          <TimeContainer>
            <Title>얼마나 머물렀다 가실건가요?</Title>
            <TimeList>
              {times.map((time, index) => (
                <div>
                  <Text key={index}>{time}</Text>
                </div>
              ))}
            </TimeList>
          </TimeContainer>
          <Button>주문하기</Button>
        </Container>
      )}
    </>
  );
}

export default Menu;
