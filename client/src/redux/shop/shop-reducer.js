import shopAction from "./shop-action-type";
import {searchCollection } from "./shop-utils";

const INITIAL_STATE = {
  collection: null,
  isFetching: false,
  errorMessage: undefined,
  searchItems:[],
};

const shopReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case shopAction.FETCH_COLLECTIONS_START:
      return {
        ...state,
        isFetching: true,
      };
    case shopAction.FETCH_COLLECTIONS_SUCCESS:
      return {
        ...state,
        isFetching: false,
        collection: action.payload,
      };
    case shopAction.FETCH_COLLECTIONS_FAILURE:
      return {
        ...state,
        isFetching: false,
        errorMessage: action.payload,
      };
      case shopAction.SEARCH_ITEMS:
      return {
        ...state,
       
        searchItems: searchCollection(state.collection,action.payload),
      };
    default:
      return state;
  }
};
export default shopReducer;
