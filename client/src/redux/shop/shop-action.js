import shopAction from "./shop-action-type";
import {
  firestore,
  convertCollectionSnapshotToMap,
} from "../../firebase/firebase.utils";

export const fetchCollectionStart = () => ({
  type: shopAction.FETCH_COLLECTIONS_START,
});
export const fetchCollectionSuccess = (collectionMap) => ({
  type: shopAction.FETCH_COLLECTIONS_SUCCESS,
  payload: collectionMap,
});
export const fetchCollectionFailure = (errorMesssage) => ({
  type: shopAction.FETCH_COLLECTIONS_FAILURE,
  payload: errorMesssage,
});
export const searchItem = (query) => ({
  type: shopAction.SEARCH_ITEMS,
  payload: query,
});

export const fetchCollectionAsync = () => {
  return (dispatch) => {
    const collectionRef = firestore.collection("collections");
    dispatch(fetchCollectionStart());
    collectionRef
      .get()
      .then((snapshot) => {
        const collectionMap = convertCollectionSnapshotToMap(snapshot);
        dispatch(fetchCollectionSuccess(collectionMap));
      })
      .catch((error) => dispatch(fetchCollectionSuccess(error.message)));
  };
};
