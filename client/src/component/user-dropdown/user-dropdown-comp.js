import React from 'react';
import { connect } from "react-redux";
import { auth } from "../../firebase/firebase.utils";
import { createStructuredSelector } from "reselect";
import { selectCurentUser } from "../../redux/user/user-selector";
import { UserDropdownContainer,UserOptioncontainer,DisplayName } from "./user-dropdown.styles"

function UserDropdown({currentUser}) {
    const {displayName}=currentUser.currentUser;
    return (
        <UserDropdownContainer>
            <UserOptioncontainer>
              <i>Wellcom  </i>  <DisplayName>{displayName}</DisplayName>
            </UserOptioncontainer >
            <UserOptioncontainer  onClick={() => auth.signOut()}>
            
              Sign Out
            
            </UserOptioncontainer >
            
        </UserDropdownContainer>
    )
}
const mapStateToProps = createStructuredSelector({
  currentUser: selectCurentUser,
});
export default connect(mapStateToProps)(UserDropdown)
