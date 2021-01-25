import React,{memo} from "react";
import {
  CartItemContainer,
  CartItemImag,
  ItemDetailsConatiner,
} from "./cart-item.styles";

function CartItem({ item: { imageUrl, name, quantity, price,size } }) {
  return (
    <CartItemContainer>
      <CartItemImag src={imageUrl} alt={name} />
      <ItemDetailsConatiner>
        <span>{name}</span>
        {size && <span>{`Size: ${size}`}</span>}
        <span>
          {quantity} x ${price}
        </span>
        
      </ItemDetailsConatiner>
    </CartItemContainer>
  );
}

export default memo(CartItem);
