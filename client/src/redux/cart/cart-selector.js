import { createSelector } from "reselect";
const selectCart = (state) => state.cart;
export const selectHidden = createSelector([selectCart], (cart) => cart.hidden);
export const selectItems = createSelector([selectCart], (cart) => cart.items);
export const selectItemsCount = createSelector([selectItems], (items) =>
  items.reduce(
    (accumulator, currentItem) => accumulator + currentItem.quantity,
    0
  )
);
export const selectItemTotalPrice = createSelector([selectItems], (items) =>
  items.reduce(
    (accumulator, currentItem) =>
      accumulator + currentItem.quantity * currentItem.price,
    0
  )
);
