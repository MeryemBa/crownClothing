import React from 'react';
import { withRouter } from "react-router-dom";
import model from "../../assets/model.png";
import {HeroSectionContainer,CTAContainer,ImageContainer} from "./hero-section.styles";
import CustomButton from "../costum-button/custom-buttom-comp";



function HeroSection({history}) {
    return (
        <HeroSectionContainer>
           
           

           <CTAContainer>
               <h1  id="slogan"><span>FIND  YOUR TRUE</span> Fashion Identity</h1>
               <CustomButton id="btn" aria-labelledby=" slogan btn" onClick={()=>history.push("/shop")}>Shop now</CustomButton>
           </CTAContainer>
           <ImageContainer src={model} alt="women" />
        </HeroSectionContainer>
    )
}

export default withRouter(HeroSection);
