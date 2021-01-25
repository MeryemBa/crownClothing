import styled from "styled-components";
export const FaqPageContainer= styled.div`
min-height:70vh;
padding:15px 20px;
display:flex;
  flex-direction:column;
  justify-content: flex-start;
  align-items: center;


@media screen and (max-width: 800px) {
   
    padding:20px 10px;
  }

`;
export const SubContainer=styled.div`
display:grid;
grid-template-columns: repeat(2, 1fr);
grid-gap: 16px;

@media screen and (max-width: 800px) {
  
  display:flex;
  flex-direction:column;
  justify-content: flex-start;
  align-items: center;
  width:100%;
  & div{
    width:95%;
  }
}
`;
export const Title =styled.h2`

@media screen and (max-width: 800px) {
   font-size:18px;
  }
`;
export const  FaqContainer=styled.div`
width:450px;
height:max-content;

padding:0 10px;
box-shadow: 2px 2px 20px rgba(0,0,0,.1);
@media screen and (max-width: 800px) {
  width: 95%;
}

`;