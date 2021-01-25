import styled, { createGlobalStyle } from "styled-components";
const bgColor="#ccd0d3";
export const GlobelStyles = createGlobalStyle`
* {
    box-sizing: border-box;
 
}
body {
    font-family: "Open Sans Condensed";

 }

 ul{
  list-style: none;
  padding:0;
 }
  
  a {
    text-decoration: none;
    color: black;
  }`;
 
export const AppConatiner = styled.div`

  padding: 20px 40px;
  max-width:100vw;
  min-height: 90vh;
padding-bottom: 100px;

background-image:${({home})=>home && `linear-gradient(to bottom,${bgColor} 0%,${bgColor} calc(90vh + 127px),#fff calc(90vh + 127px),#fff 100%);`}

   
@media screen and (max-width: 1100px) {
  
  background-image: ${({home})=>home&& `linear-gradient(to bottom,${bgColor} 0%,${bgColor} calc(50vh + 127px),#fff calc(50vh + 127px),#fff 100%);`}

}
@media screen and (max-width: 800px) {
  padding: 10px;
  padding-bottom: 80px;
  background-image: ${({home})=>home&& `linear-gradient(to bottom,${bgColor} 0%,${bgColor} calc(90vh + 91px),#fff calc(90vh + 91px),#fff 100%);`}

}
& main{
  @media screen and (min-width: 1400px) {
    width:1400px;
    margin:0 auto;
    padding:0;
  }
}

`;
