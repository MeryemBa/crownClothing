import { createSelector } from "reselect";

const selectShop = (state) => state.shop;

export const selectCollections = createSelector( 
  [selectShop],
  (shop) => shop.collection
);
export const selectCollectionForSearch = createSelector( 
  [selectShop],
  (shop) => shop.searchItems
);
export const selectCollectionForPreview = createSelector(
  [selectCollections],
  (collection) =>
    collection ? Object.keys(collection).map((key) => collection[key]) : []
);
export const selectCollection = (collectionId) =>
  createSelector([selectCollections], (collection) =>
    collection ? collection[collectionId] : null
  );
  export const selectItemForDetails=(collectionId,itemId)=>
  createSelector([selectCollections], (collection) => collection[collectionId].items.filter(item=>item.id===Number(itemId))[0] 
  );
export const selectIsFetching = createSelector(
  [selectShop],
  (shop) => shop.isFetching
);
export const selectIsLoding = createSelector(
  [selectShop],
  (shop) => !!shop.collection
);
