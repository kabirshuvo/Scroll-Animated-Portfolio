"use client";
import React from "react";
import styled from "styled-components";
import design, { DesignItem } from "../../utils/design";

const DesignItemComponent: React.FC<DesignItem> = ({ title, description }) => (
  <>
    <h1 style={{ color: "#de37cb" }}>{title}</h1>
    <TextParagraph>{description}</TextParagraph>
  </>
);
const DesignLayout = () => {
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
              {design.map((item) => (
                <DesignItemComponent key={item.id} {...item} />
              ))}
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
  top: 60%;
  left: 30%;
  transform: translate(-50%, -50%);
`;

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

const TextParagraph = styled.p`
  margin: 0;
  color: #ffeb3b;
`;

export default DesignLayout;
