import React from "react";


import Directory from "../../component/directory/directory-comp";
import HeroSection from "../../component/hero-section/hero-section-comp";

import { HomePageContainer,Title } from "./homepage.styles";

const HomePage = () => {

  return(
  <HomePageContainer>
    
    
    <HeroSection /> 
    
    <Title> Shop By Category</Title>
    <Directory />
  </HomePageContainer>
)};

export default HomePage;
