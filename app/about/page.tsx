"use client"
import React from "react";
import Navbar from "../Components/Header/NavBar";
import Footer from "../Components/Footer";
import SectionLayout from "../Components/SectionLayout";
import { motion, useScroll, useTransform } from "framer-motion";
import styled from "styled-components";


const AboutPage = () => {
  return (
    <>
    <Navbar />
    <SectionLayout>
      <CenteredText>
        Kamrul Hasan <br />
        Print on demand Specialist & <br /> Graphic Designer. <br />
        Based on Bangladesh
      </CenteredText>
    </SectionLayout>
    <SectionLayout>
      <FlexContainer>
        <LeftDiv>left div</LeftDiv>
        <ImageDiv>Image div</ImageDiv>
        <RightDiv>Rirgt div</RightDiv>
      </FlexContainer>
    </SectionLayout>
    <SectionLayout>
      <ScrollingImages>
        <motion.div>image 1</motion.div>
        <motion.div>image 2</motion.div>
        <motion.div>image 3</motion.div>
        <motion.div>image 4</motion.div>
        <motion.div>image 5</motion.div>
        <motion.div>image 6</motion.div>
        <motion.div>image 7</motion.div>
      </ScrollingImages>
    </SectionLayout>
    <Footer />
  </>
  );
};

export default AboutPage;


const CenteredText = styled.h3`
  text-align: center;
  font-size: 80px;
  background: linear-gradient(45deg, #ff8a00, #e52e71, #3498db); 
  -webkit-background-clip: text;
  background-clip: text;
  -webkit-text-fill-color: transparent;
`;

const FlexContainer = styled.div`
  display: flex;
  justify-content: space-between;
`;

const LeftDiv = styled.div`
  width: 25%;
  display: flex;
  flex-direction: column;
`;

const ImageDiv = styled.div`
  width: 50%;
  display: flex;
  justify-content: center;
  align-items: center;
  margin: 0 auto;
`;

const RightDiv = styled.div`
  width: 25%;
  display: flex;
  flex-direction: column;
`;

const ScrollingImages = styled(motion.div)`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 1rem;
  overflow-x: auto;

  
`;

