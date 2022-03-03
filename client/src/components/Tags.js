import { useState } from "react";
import { useRecoilValue } from "recoil";
import styled from "styled-components";
import { tagsAtom } from "../atom";

const TagContainer = styled.div`
  margin-top: 50px;
  padding: 10px 20px;
  height: 200px;
  width: 100%;
  background-color: rgba(48, 48, 48, 60%);
`;
const Text = styled.li`
  color: white;
  font-size: 18px;
  text-align: center;
  cursor: pointer;
  /* border: 1px solid white; */
  &:nth-child(${(props) => props.isActiveAt}) {
    color: #38b5fb;
    transition: color 0.2s;
  }
`;
const TagList = styled.ul`
  display: grid;
  height: 80%;
  /* border: 1px solid white; */
  place-items: center;
  align-items: center;
  grid-template-columns: 1fr 1fr 1fr 1fr;
`;
const Title = styled.h2`
  color: white;
  font-weight: bold;
  font-size: 1.25rem;
  margin-bottom: 10px;
`;

function Tags({ setTag }) {
  const tags = useRecoilValue(tagsAtom);
  const [isActiveAt, setIsActiveAt] = useState(1);
  const handleTagClick = async (index) => {
    setIsActiveAt(index + 1);
    setTag(tags[index]);
    // setActiveTagIndex(index + 1);
    // if (tag !== event.target.innerText) {
    //   setActivePlaylistIndex(-1);
    //   setTag(event.target.innerText);
    // }
  };
  return (
    <TagContainer>
      <Title>어떤 분위기가 좋으신가요?</Title>
      <TagList>
        {tags.map((tag, index) => (
          <Text
            key={index}
            isActiveAt={isActiveAt}
            onClick={() => handleTagClick(index)}
          >
            {tag}
          </Text>
        ))}
      </TagList>
    </TagContainer>
  );
}

export default Tags;
