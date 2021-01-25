import styled from "styled-components";

export const HeroSectionContainer=styled.div`
width:100%;
height:90vh;
padding:0 90px;
display:flex;
justify-content:center;
align-items:center;
position:relative;
margin-bottom:50px;
@media screen and (max-width: 1100px) {
  padding:0 20px;
  height:50vh;
}


  @media screen and (max-width: 800px) {
    height:90vh;
    justify-content:center;

  }
`;
export const ImageContainer=styled.img`
height:100%;
width:40%;
max-width:820px;



@media screen and (max-width: 800px) {
  width:100%;
  }


`;
export const CTAContainer=styled.div`
width:45%;
height:100%;

display:flex;
justify-content:center;
align-items:flex-start;

flex-direction:column;
@media screen and (max-width: 800px) {
  position: absolute;
    left: 0;
    bottom: 50%;
    transform: translateY(50%);
    background-color: transparent;
    width: 100%;
    height: 50%;
    align-items: center;
}
& h1{

  font-size:5rem; 
  display:flex;
  flex-direction:column;
  @media screen and (max-width: 1100px) {
   
    font-size:3.5rem; 
   
    }
    @media screen and (max-width: 800px) {
   
      
      text-align: center;
      }
      @media screen and (max-width: 280px) {
        font-size:3rem; 
      
        
        }
 
  & span{
    font-weight: 300;
    font-size:1.8rem;
   
    color:#fff;
    @media screen and (max-width: 800px) {
    color:#000;
    }
  

  }
}
& button{
  width:50%;
  &:hover{
    background-color:transparent;
  }

}
`;