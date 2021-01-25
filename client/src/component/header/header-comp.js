import React, { useState } from "react";
import { ReactComponent as Logo } from "../../assets/crown.svg";

import { connect } from "react-redux";
import CartIcon from "../cart-icon/cart-icon-comp";
import UserIcon from "../user-icon/user-icon-comp";
import CartDropdown from "../cart-dropdown/cart-dropdown-comp";
import SearchInput from "../search-input/search-input-comp";
import { createStructuredSelector } from "reselect";
import { selectCurentUser } from "../../redux/user/user-selector";
import { selectHidden } from "../../redux/cart/cart-selector";
import {selectShowUser}from "../../redux/user/user-selector";
import {
  HeaderConatiner,
  AppLogoContainer,
  AppOptionsContainer,
  OptionContainer,
  Menu,
  ToggelButton,
} from "./header.styles.js";
import UserDropdown from "../user-dropdown/user-dropdown-comp";


function Header({ currentUser, hidden,showUser }) {
  const [open, setOpen] = useState(false);

  return (
    <HeaderConatiner open={open}>
      <ToggelButton
          onClick={() => {
            setOpen(!open);
          }}
          open={open}
        >
          <div />
          <div />
          <div />
        </ToggelButton>
      <AppLogoContainer aria-label="crown clothing logo" to="/">
        <Logo />
      </AppLogoContainer>
      <AppOptionsContainer>
        <Menu
          open={open}
          onClick={() => {
            setOpen(!open);
          }}
        >
          <OptionContainer to="/">Home</OptionContainer>
          <OptionContainer to="/shop">Shop</OptionContainer>
          <OptionContainer to="/aboutus">About Us</OptionContainer>
          {currentUser ? (
           null
         
          ) : (
            <OptionContainer to="/sign">Sign In</OptionContainer>
          )}
        </Menu>
           <SearchInput />
       
         {currentUser && (
          <UserIcon/>
          
          ) }
           <CartIcon />
      </AppOptionsContainer>

      {hidden ? null : <CartDropdown />}
      {showUser? <UserDropdown />:null}

    </HeaderConatiner>
  );
}
const mapStateToProps = createStructuredSelector({
  currentUser: selectCurentUser,
  hidden: selectHidden,
showUser:selectShowUser,
});
export default connect(mapStateToProps)(Header);
