import styled from "styled-components";

export const HomePageContainer = styled.div`
  display: flex;
  flex-direction: column;

  align-items: center;
 
 &>div{

  width:100%;
 }
  @media screen and (max-width: 800px) {
    padding: 0px;
  }
`;
export const Title=styled.h1`
text-align:center;
margin:50px auto;

`;

