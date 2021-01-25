import styled from "styled-components";
import CustomButton from "../costum-button/custom-buttom-comp";

export const CheckoutItemContainer = styled.div`
  width: 100%;
  display: flex;
  min-height: 100px;
  border-bottom: 1px solid darkgrey;
  padding: 15px 0;
  font-size: 20px;
  align-items: center;
  @media screen and (max-width: 800px) {
    font-size: 18px;
  }
`;

export const ImageContainer = styled.div`
  width: 23%;
  padding-right: 15px;

  img {
    width: 100%;
    height: 100%;
  }
`;

export const TextConatiner = styled.div`
  width: 23%;
  @media screen and (max-width: 800px) {
    width: 22%;
  }
`;
export const SmallButton=styled(CustomButton)`
padding:5px 15px;
width:45%;
height:25px;

border:${({inverted})=>(inverted?"1px solid":"none")};
text-transform: ${({inverted})=>(inverted&&"capitalize")};
@media screen and (max-width: 480px) {
  width:90%;
  margin:5px auto;
}

`;
export const SizeConatiner=styled.div`
width: 25%;
display:block;
 & select{
   width:50%;
 }


@media screen and (max-width: 800px) {
  width: 23%;
  & select{
    width:80%;
  }
 
}

& div{
  max-width:80%;
  margin-top:10px;
  padding :10px  0;
  display: flex;
  justify-content: space-between;
  @media screen and (max-width: 480px) {
    flex-direction:column-reverse;
  }
 
}

`;

export const QuantityContainer = styled(TextConatiner)`
  display: flex;
  & span:nth-child(2) {
    margin: 0 10px;
  }
  & span:nth-child(1),
  & span:nth-child(3) {
    cursor: pointer;
  }
`;
export const RemoveButtonContainer = styled.div`
  padding-left: 12px;
  cursor: pointer;
`;
