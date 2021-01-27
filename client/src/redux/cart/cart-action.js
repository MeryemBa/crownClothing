import cartAction from "./cart-action-type";
export const toggelCart = () => ({
  type: cartAction.TOOGEL_CART,
});
export const addItem = (item) => ({
  type: cartAction.ADD_ITEM,
  payload: item,
});
export const removeItem = (item) => ({
  type: cartAction.REMOVE_ITEM,
  payload: item,
});
export const clearItem = (item) => ({
  type: cartAction.CLEAR_ITEM,
  payload: item,
});

export const changeItemSize=(item,newSize)=>({
  type:cartAction.CHANGE_ITEM_SIZE,
  payload:{item,newSize},
});
export const clearItemsArray = () => ({
  type: cartAction.CLEAR_ITEMS_ARRAY,
});