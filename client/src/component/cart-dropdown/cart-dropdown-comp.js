import React from "react";
import { connect } from "react-redux";
import CartItem from "../cart-item/cart-item-comp";
import { createStructuredSelector } from "reselect";
import { selectItems } from "../../redux/cart/cart-selector";
import { withRouter } from "react-router-dom";
import { toggelCart } from "../../redux/cart/cart-action";
import uuid from 'react-uuid'
import {
  CartDropDownButton,
  CartDropdownContainer,
  CartItemsConatiner,
  EmptyMessageConatiner,
} from "./cart-dropdown.styles";

function CartDropdown({ items, history, dispatch }) {
  return (
    <CartDropdownContainer>
      <CartItemsConatiner>
        {items.length ? (
          items.map((item) => <CartItem key={uuid()} item={item} />)
        ) : (
          <EmptyMessageConatiner>Your cart is empty</EmptyMessageConatiner>
        )}
      </CartItemsConatiner>
      <CartDropDownButton
        onClick={() => {
          history.push("/checkout");
          dispatch(toggelCart());
        }}
      >
        Go To checkout
      </CartDropDownButton>
    </CartDropdownContainer>
  );
}
const mapStateToProps = createStructuredSelector({
  items: selectItems,
});
export default withRouter(connect(mapStateToProps)(CartDropdown));
