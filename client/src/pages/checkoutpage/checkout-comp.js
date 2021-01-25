import React from "react";
import  {withRouter}from "react-router-dom" 
import uuid from 'react-uuid'
import CheckoutItem from "../../component/checkout-item/checkout-item-comp";
import CustomButton from "../../component/costum-button/custom-buttom-comp";
import StripeChekoutButton from "../../component/strip-button/strip-button-comp";
import bag from "../../assets/bag.svg"
import { createStructuredSelector } from "reselect";
import { connect } from "react-redux";
import {
  selectItems,
  selectItemTotalPrice,
} from "../../redux/cart/cart-selector";
import { selectCurentUser } from "../../redux/user/user-selector";
import {
  StripeButton,
  CheckoutPageContainer,
  CheckoutHeaderContainer,
  HeaderBlockConatiner,
  TotalContainer,
  TextInfoContainer,
  TestWarningContainer,
} from "./checkout.styles";

function CheckoutPage({ total, items,currentUser ,history}) {
  return (
    <CheckoutPageContainer>
      <CheckoutHeaderContainer>
        <HeaderBlockConatiner>
          <span>Product</span>
        </HeaderBlockConatiner>
        <HeaderBlockConatiner>
          <span>Description</span>
        </HeaderBlockConatiner>
        <HeaderBlockConatiner>
          <span>Size</span>
        </HeaderBlockConatiner>
        <HeaderBlockConatiner>
          <span>Quantity</span>
        </HeaderBlockConatiner>
        <HeaderBlockConatiner>
          <span>Price</span>
        </HeaderBlockConatiner>
        <HeaderBlockConatiner>
          <span>Remove</span>
        </HeaderBlockConatiner>
      </CheckoutHeaderContainer>

      {total?items.map((item) => (
        <CheckoutItem key={uuid()} item={item} />
      ))
      :<TextInfoContainer>
        <img src={bag} alt="bag"/>
        <h5>Your bag is empty start shop Now</h5>
        <CustomButton onClick={()=>history.push("/shop")}>Go Shopping</CustomButton>
        
      </TextInfoContainer>
      
      }
     <TotalContainer>TOTAL: ${total}</TotalContainer>
      <TestWarningContainer>
        *Please use the following test credit card for payments*
        <br />
        4242 4242 4242 4242 - Exp: 01/22 - CVV: 123
      </TestWarningContainer>
      <StripeButton>
        { currentUser?<StripeChekoutButton disabled={!total} price={total} />
        :<CustomButton onClick={()=>history.push("/sign")}>Go to Sign In</CustomButton>}
      </StripeButton>
    </CheckoutPageContainer>
  );
}
const mapStateToProps = createStructuredSelector({
  items: selectItems,
  total: selectItemTotalPrice,
  currentUser: selectCurentUser,
});
export default withRouter(connect(mapStateToProps)(CheckoutPage));
