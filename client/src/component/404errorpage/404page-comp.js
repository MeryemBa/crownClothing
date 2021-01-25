import React from 'react';
import { withRouter } from "react-router-dom";
import CustomButton from '../costum-button/custom-buttom-comp';
import {
  ErrorContainer,
  
    ErrorTextContainer
  } from './404page.styles';
function ErrorPage({history}) {
    return (
        <ErrorContainer>
        
        <ErrorTextContainer>
          <h1>WELL.!!</h1> 
          <h2>It seems like you have lost your way.</h2>
         <p>Don't worry, we will help you get back to your path. <br/>        
             To keep shopping you can go back to your previous path or use the link above to discover more of our products.

         </p>
        <CustomButton onClick={()=>history.goBack()} >BACK TO YOUR PATH</CustomButton>
        
        </ErrorTextContainer>
        
       
      </ErrorContainer>
    )
}

export default withRouter(ErrorPage); 
