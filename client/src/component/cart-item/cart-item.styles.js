import styled from "styled-components";

export const CartItemContainer = styled.div`
  width: 100%;
  display: flex;
  height: 80px;
  margin-bottom: 15px;
  @media screen and (max-width: 800px) {
    font-size: 19px;
  }
`;

export const CartItemImag = styled.img`
  width: 30%;
`;

export const ItemDetailsConatiner = styled.div` {
    width: 70%;
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    justify-content: center;
    padding: 10px 20px;
`;
