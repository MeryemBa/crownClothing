import styled from "styled-components";
import CustomButton from "../costum-button/custom-buttom-comp";
export const CartDropdownContainer = styled.div`
  position: absolute;
  width: 240px;
  height: 340px;
  display: flex;
  flex-direction: column;
  padding: 20px;
  border: 1px solid black;
  background-color: white;
  top: 100px;
  right: 40px;
  z-index: 100;
  @media screen and (max-width: 800px) {
    width: 75vw;
    max-width: 280px;
    right: 25px;
    top: 90px;
  }
  @media screen and (max-width: 280px) {
    width: 95vw;
    max-width: 280px;
    right: 5px;
   
  }
 
`;

export const CartItemsConatiner = styled.div`
  height: 240px;
  display: flex;
  flex-direction: column;
  overflow-y: auto;
`;

export const CartDropDownButton = styled(CustomButton)`
  margin-top: auto;
`;
export const EmptyMessageConatiner = styled.span`
  margin: 50px auto;
  font-size: 18px;
`;
