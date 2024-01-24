import React from "react";
import Navbar from "../Components/Header/NavBar";
import Footer from "../Components/Footer";
import SectionLayout from "../Components/SectionLayout";
import HorizontalWrapper from "../Components/HorizontalWrapper";

const AboutPage = () => {
  return (
    <>
      <Navbar />
      <SectionLayout>
       <div>
        <h3>About Page</h3>
       </div>
      </SectionLayout>
      <Footer />
    </>
  );
};

export default AboutPage;
