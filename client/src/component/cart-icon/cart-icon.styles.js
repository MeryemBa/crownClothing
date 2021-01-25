import styled from "styled-components";
import { ReactComponent as ShopBag } from "../../assets/cart.svg";
export const CartIconConatiner = styled.div`
  width: 45px;
  height: 45px;
  position: relative;
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;

`;

export const ShoppingIcon = styled(ShopBag)`
  width: 24px;
  height: 24px;
`;

export const ItemCountConatiner = styled.span`
  position: absolute;
  font-size: 10px;
  font-weight: bold;
  bottom: 17.199px;
`;
