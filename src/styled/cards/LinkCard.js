import React, { useState } from "react";
import styled from "styled-components";
import Button from "../Button";

export default function LinkCard({ orignalLink, shortLink }) {
  const [copied, setcopied] = useState(false);
  const onClickHandler = (e) => {
    setcopied(true);
    // functionality to be added
  };
  return (
    <Wrapper>
      <p>{orignalLink || "https://asdasdasda.com"}</p>
      <div>
        <a href={shortLink || "https://asdasdasda.com"}>
          {shortLink || "https://asdasdasda.com"}
        </a>
        {copied ? (
          <Button voilet primary>
            Copied!
          </Button>
        ) : (
          <Button onClick={onClickHandler} primary>
            Copy
          </Button>
        )}
      </div>
    </Wrapper>
  );
}

const Wrapper = styled.div`
  background-color: #ffffff;
  box-sizing: border-box;
  border-radius: 0.6rem;
  margin: 2rem auto;
  width: 100%;
  height: max-content;
  display: flex;
  justify-content: space-between;
  padding: 0.5rem 2rem;
  align-items: center;
  div {
    display: flex;
    align-items: center;
  }
  p {
    max-width: 40%;
    white-space: nowrap;
    overflow: hidden;
    text-overflow: ellipsis;
  }
  a {
    color: #2acfcf;
    text-decoration: none;
    margin-right: 1rem;
    white-space: nowrap;
    overflow: hidden;
    text-overflow: ellipsis;
    width: 90%;
  }
  .line {
    display: none;
  }
  /* media query */
  @media (max-width: 950px) {
    flex-direction: column;
    align-items: flex-start;
    padding: 0;
    div {
      width: 100%;
      align-items: flex-start;
      flex-direction: column;
    }
    p {
      padding: 1rem;
      text-align: left;
      border-bottom: 1px solid #bfbfbf;
      max-width: 100%;
      width: 100%;
    }
    a {
      padding: 1rem;
      text-align: left;
      width: 100%;
    }
    Button {
      margin: 0rem 1rem;
      margin-bottom: 1rem;
    }
  }
`;
