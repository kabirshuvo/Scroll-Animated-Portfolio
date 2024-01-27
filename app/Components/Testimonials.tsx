import React, { useState } from 'react'
import {TestimonialsDiv} from "../Components/styles/Testimonials.Styled"
import {testimonials} from "../utils/testimonials"
import styled from 'styled-components'
import Button from './Button/Button'




const Testimonials = () => {


  const [currentIndex, setCurrentIndex] = useState(0);

  const handlePrev = () => {
    setCurrentIndex((prevIndex) => (prevIndex > 0 ? prevIndex - 1 : testimonials.length - 1));
  };

  const handleNext = () => {
    setCurrentIndex((prevIndex) => (prevIndex < testimonials.length - 1 ? prevIndex + 1 : 0));
  };




  return (
    <StyledSection>
    <Container>
      {/* title */}
      <StyledH2>
        In last coupple of years I earned these <br />
        <StyledSpan className="text-cyred md:text-2xl lg:text-3xl">
           Reviews
        </StyledSpan>
      </StyledH2>
      {/* slider */}
    
      <SliderContainer>
        {/* <TestimonialSlider /> */}
        {testimonials.map((testimonial, index) => (
          <TestimonialCard key={testimonial.id} active={index === currentIndex}>
            <img src={testimonial.imageUrl} alt={testimonial.name} />
            <h3>{testimonial.name}</h3>
            <p>{testimonial.country}</p>
            <p>{testimonial.date}</p>
            <p>Stars: {testimonial.stars}</p>
            <p>{testimonial.review}</p>
          </TestimonialCard>
        ))}
      </SliderContainer>

     <StyledH2>
        Thank you guyes for giving me these kinds of better  <br />
        <StyledSpan className="text-cyred md:text-2xl lg:text-3xl">
        Experiences
        </StyledSpan>
      </StyledH2>
    
    </Container>
  </StyledSection>
  )
}

export default Testimonials


const StyledSection = styled.section`
  height: 100%;
  margin-top: 20px;
  padding-bottom: 10px;
  width: 80%;
  max-width: 80%;
  margin-left: auto;
  margin-right: auto;
  backdrop-filter: blur(10px);
  backdrop-opacity: 0.8;
  border-bottom: 2px solid #c62828;
  padding-top: 20px;
  text-align: center;
`;

const Container = styled.div`
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
`;

const StyledH2 = styled.h2`
  font-size: 2rem;
  margin-bottom: 8px;

  @media (min-width: 768px) {
    font-size: 2.5rem;
  }

  @media (min-width: 1024px) {
    font-size: 3rem;
    margin-bottom: 0;
  }
`;

const StyledSpan = styled.span`
  font-size: 1.5rem;

  @media (min-width: 1024px) {
    font-size: 2rem;
  }
`;

const SliderContainer = styled.div`
  margin-top: 2rem;
  display: flex;
`;

const TestimonialCard = styled.div`
  border: 1px solid #ccc;
  border-radius: 8px;
  padding: 16px;
  margin: 16px;
  width: 300px;
  background-color: ${(props) => (props.active ? "#191919" : "#111111")};
  transition: background-color 0.3s ease;

  img {
    width: 100%;
    border-radius: 50%;
    margin-bottom: 16px;
  }

  h3 {
    font-size: 1.5rem;
  }

  p {
    margin-bottom: 8px;
  }
`;