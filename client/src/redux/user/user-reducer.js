import { userActionTypes } from "./user-action-type";

const INITIAL_STATE = {
  currentUser: null,
  showUser:false,
};
const userReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case userActionTypes.SET_CURRENT_USER:
      return {
        ...state,
        currentUser: action.payload,
      };
      case userActionTypes.TOOGEL_USER_DROPDOWN:
        return{
          ...state,
          showUser:!state.showUser,
        }

    default:
      return state;
  }
};
export default userReducer;
