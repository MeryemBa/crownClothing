import React from "react";
import { connect } from "react-redux";
import { toggelCart } from "../../redux/cart/cart-action";

import { createStructuredSelector } from "reselect";
import { selectItemsCount } from "../../redux/cart/cart-selector";
import {
  CartIconConatiner,
  ShoppingIcon,
  ItemCountConatiner,
} from "./cart-icon.styles.js";

function CartIcon({ toggelCart, count }) {
  return (
    <CartIconConatiner role="button" aria-label={count?`Basket empty`:`${count} product in the basket`} onClick={toggelCart}>
      <ShoppingIcon />
      <ItemCountConatiner>{count}</ItemCountConatiner>
    </CartIconConatiner>
  );
}
const mapdispatchToProps = (dispatch) => ({
  toggelCart: () => dispatch(toggelCart()),
});
const mapStateToProps = createStructuredSelector({
  count: selectItemsCount,
});
export default connect(mapStateToProps, mapdispatchToProps)(CartIcon);
