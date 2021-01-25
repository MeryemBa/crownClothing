import cartAction from "./cart-action-type";
import { addItemToCart, removeItemFromCart,changeCartItemSize } from "./cart-utils";

const INITIAL_STATE = {
  hidden: true,
  items: [],
};

const cartReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case cartAction.TOOGEL_CART:
      return {
        ...state,
        hidden: !state.hidden,
      };
    case cartAction.ADD_ITEM:
      return {
        ...state,
        items: addItemToCart(state.items, action.payload),
      };
    case cartAction.REMOVE_ITEM:
      return {
        ...state,
        items: removeItemFromCart(state.items, action.payload),
      };
    case cartAction.CLEAR_ITEM:
      return {
        ...state,
        items: state.items.filter((item) => item.cartId !== action.payload.cartId ),
      };
      case cartAction.CHANGE_ITEM_SIZE:
        return {
          ...state,
          items: changeCartItemSize(state.items,action.payload.item,action.payload.newSize),
        };
    default:
      return state;
  }
};
export default cartReducer;
