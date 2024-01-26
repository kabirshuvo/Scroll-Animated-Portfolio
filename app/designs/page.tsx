import React from "react";
import Navbar from "../Components/Header/NavBar";
import Footer from "../Components/Footer";
import SectionLayout from "../Components/SectionLayout";
import Designs from "../Components/Designs/Designs";

const DesignsPage = () => {
  return (
    <div>
      <Navbar />
      <SectionLayout>
        <Designs />
      </SectionLayout>
      <Footer />
    </div>
  );
};

export default DesignsPage;
