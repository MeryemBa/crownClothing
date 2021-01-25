import React from "react";
import { connect } from "react-redux";
import {toggelUserDropdown } from "../../redux/user/user-action";


import {
 UserIconConatiner,
 UserAvatarIcon ,

} from "./user-icon.styles.js";

function UserIcon({  toggelUserDropdown  }) {
  return (
    <UserIconConatiner role="button"  onClick={ toggelUserDropdown }>
      <UserAvatarIcon />
     
    </UserIconConatiner>
  );
}
const mapdispatchToProps = (dispatch) => ({
    toggelUserDropdown : () => dispatch( toggelUserDropdown ()),
});

export default connect(null, mapdispatchToProps)(UserIcon);
