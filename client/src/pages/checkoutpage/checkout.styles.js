import styled from "styled-components";


export const CheckoutPageContainer = styled.div`
  width: 55%;
  min-height: 90vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  margin: 50px auto 0;
  @media screen and (max-width: 800px) {
    width: 90%;
  }
`;

export const CheckoutHeaderContainer = styled.div`
  width: 100%;
  padding: 10px 0;
  display: flex;
  justify-content: space-between;
  border-bottom: 1px solid darkgrey;
`;

export const HeaderBlockConatiner = styled.div`
  text-transform: capitalize;
  width: 23%;

  &:last-child {
    width: 8%;
  }
  @media screen and (max-width: 800px) {
    font-size:12.5px;
    width: 22%
    &:last-child {
      width: 12%;
    }
  }
`;

export const TotalContainer = styled.div`
  margin-top: 30px;
  margin-left: auto;
  font-size: 36px;
`;
export const TextInfoContainer=styled.div`
width:80%;

display: flex;
flex-direction:column;
justify-content:center;
align-items:center;
text-align: center;
  margin: 40px auto;
  font-size: 24px;
  & img{
    width:20%;
  }
 & button{
   margin: 20px 0;
 }

`;
export const TestWarningContainer = styled.div`
  text-align: center;
  margin-top: 40px;
  font-size: 24px;
  color: red;
`;
export const StripeButton = styled.div`
width:max-content;
  margin-top: 15px;
  margin-left: auto !important;
`;
