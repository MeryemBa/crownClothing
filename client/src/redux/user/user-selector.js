import { createSelector } from "reselect";

const selectUser = (state) => state.user;
export const selectShowUser=createSelector([selectUser],(user)=>user.showUser);
export const selectCurentUser = createSelector(
  [selectUser],
  (user) => user.currentUser
);
