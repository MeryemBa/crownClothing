import { userActionTypes } from "./user-action-type";

export const setCurrentUser = (user) => ({
  type: userActionTypes.SET_CURRENT_USER,
  payload: user,
});

export const toggelUserDropdown = () => ({
  type: userActionTypes.TOOGEL_USER_DROPDOWN,

});