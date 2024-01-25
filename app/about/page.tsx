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
        <h3>
          Kamrul Hasan <br />
          Print on demand Specialist & <br />
          Graphic Designer.
        </h3>
       </div>
      </SectionLayout>
      <SectionLayout>
        <div>
          <div>left div</div>
          <div>Image div</div>
          <div>Rirgt div</div>
        </div>
      </SectionLayout>
      <SectionLayout>
        <div>
          <div>image 1</div>
          <div>image 2</div>
          <div>image 3</div>
          <div>image 4</div>
          <div>image 5</div>
          <div>image 6</div>
          <div>image 7</div>
        </div>
      </SectionLayout>
      <Footer />
    </>
  );
};

export default AboutPage;
