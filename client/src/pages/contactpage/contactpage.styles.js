import styled from "styled-components";

export const ContactContainer=styled.div`
width:80%;
padding:15px 20px;
display:flex;

justify-content:center;
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