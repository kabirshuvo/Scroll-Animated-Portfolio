"use client";
import React from "react";
import styled from "styled-components";

const RotatedText = styled.span`
  color: #2da4ec;
  font-size: 3rem;
`;

const NonRotatedText = styled.h4`
  color: #2da4ec;
  padding-bottom: 4rem;
`;

const RotatedDiv = styled.div`
  transform: rotate(-90deg);
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100%;
`;

const Designs = () => {
  return (
    <>
      <StyledDiv>
        <div className="ParentDiv">
          <LeftDiv>
            <RotatedDiv>
              <RotatedText>MY DESIGNS</RotatedText>
            </RotatedDiv>
            <NonRotatedText>MADDAYFX</NonRotatedText>
          </LeftDiv>
          <RightDiv>
            <BackgroundImage />
            <TextContent>
              <h1 style={{ color: "#de37cb" }}>Design 1</h1>
              <TextParagraph>Lorem Lorem Lorem.</TextParagraph>
              <h1 style={{ color: "#de37cb" }}>Design 2</h1>
              <TextParagraph>Lorem Lorem Lorem.</TextParagraph>
              <h1 style={{ color: "#de37cb" }}>Design 3</h1>
              <TextParagraph>Lorem Lorem Lorem.</TextParagraph>
            </TextContent>
          </RightDiv>
        </div>
      </StyledDiv>
    </>
  );
};
const StyledDiv = styled.div`
  .ParentDiv {
    display: flex;
    height: 100vh;
  }
`;

const LeftDiv = styled.div`
  width: 30%;
  background-color: #232432;
  color: #2da4ec;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

const RightDiv = styled.div`
  flex: 1;
  background-color: #232432;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  position: relative;
`;

const BackgroundImage = styled.div`
  flex: 1;
  background: url("/pen-logo.png") center/cover;
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
`;

const TextContent = styled.div`
  text-align: center;
  padding: 2rem;

  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
`;

const TextParagraph = styled.p`
  margin: 0;
  color: #ffeb3b;
`;

export default Designs;
