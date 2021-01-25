import styled from "styled-components";

export const AbouteContainer=styled.div`
width:80%;
padding:15px 20px;
display:flex;
flex-direction:column;
margin:0 auto;
text-align:left;

& img{
  width:100%;

}

@media screen and (max-width: 800px) {
    width:100%;
   padding:10px;
   text-align:center;

  }

`;


export const Title=styled.h1`


`;
export const Paraghraphe=styled.p`
line-height: 2;


`;