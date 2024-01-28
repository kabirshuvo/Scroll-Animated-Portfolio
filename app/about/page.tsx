"use client";
import React from "react";
import Navbar from "../Components/Header/NavBar";
import Footer from "../Components/Footer";
import SectionLayout from "../Components/SectionLayout";
import {
  CenteredText,
  FlexContainer,
  LeftDiv,
  ImageDiv,
  RightDiv,
  ScrollingImages,
} from "../Components/styles/about.styled";
import { motion, useScroll, useTransform } from "framer-motion";
import { Advent_Pro } from "next/font/google";
import Button from "../Components/Button/Button";
import Testimonials from "../Components/Testimonials";
import Slider from "../Components/swiperComponents/Slider";

const abril = Advent_Pro({
  subsets: ["latin"],
  weight: "900",
});

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
          <LeftDiv>
            <div>
              <Button name="Dreams to design"></Button>
            </div>
          </LeftDiv>
          <ImageDiv>
            <div>
              <img
                src="https://plus.unsplash.com/premium_photo-1688891564708-9b2247085923?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                alt="Profile pic of Kamrul Hasan"
              />
            </div>
          </ImageDiv>
          <RightDiv>
            <div>
              <Button name="Design to reality"></Button>
            </div>
          </RightDiv>
        </FlexContainer>
      </SectionLayout>
      <SectionLayout>
        <Testimonials></Testimonials>
      </SectionLayout>
      <SectionLayout>
        <ScrollingImages>
          {/* <motion.div>image 1</motion.div>
          <motion.div>image 2</motion.div>
          <motion.div>image 3</motion.div>
          <motion.div>image 4</motion.div>
          <motion.div>image 5</motion.div>
          <motion.div>image 6</motion.div>
          <motion.div>image 7</motion.div> */}
          <Slider />
        </ScrollingImages>
      </SectionLayout>
      <Footer />
    </>
  );
};

export default AboutPage;
