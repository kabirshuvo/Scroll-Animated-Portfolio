"use client";

import styled from "styled-components";
import { motion, useScroll, useTransform } from "framer-motion";

export const CenteredText = styled.h1`
  text-align: center;
  font-size: 70px;
  background: linear-gradient(45deg, #f2994a, #3498db, #ff8a00);

  -webkit-background-clip: text;
  background-clip: text;
  -webkit-text-fill-color: transparent;

  &:hover {
  background: linear-gradient(45deg, #ff8a00, #f2994a, #3498db);
  transition: background 0.9s ease;
    -webkit-background-clip: text;
    background-clip: text;
    -webkit-text-fill-color: transparent;
  }
`;

export const FlexContainer = styled.div`
  display: flex;
  justify-content: space-between;
`;

export const LeftDiv = styled.div`
  width: 25%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

export const ImageDiv = styled.div`
  width: 50%;
  display: flex;
  justify-content: center;
  align-items: center;
  margin: 0 auto;

  img {
    width: 30rem;
    height: 46rem;
    border-radius: 5% 1% 40% 40%; /* Example: Add border-radius for a rounded image */
    /* Add other styles for the image here */
  }
`;

export const RightDiv = styled.div`
  width: 25%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

export const ScrollingImages = styled(motion.div)`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 1rem;
  overflow-x: auto;
`;
