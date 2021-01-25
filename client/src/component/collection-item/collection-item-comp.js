import React from "react";

import { connect } from "react-redux";
import { addItem } from "../../redux/cart/cart-action";
import { withRouter } from "react-router";

import {
  CollectionItemContainer,
  CollectionFooter,
  AddButton,
  BackgroundImage,
} from "./collection-item.styles";
function CollectionItem({ item, addItem,history,routeName }) {
  const { name, price, imageUrl,id } = item;
  return (
    
    <CollectionItemContainer to={`/shop/${routeName}/${id}`}>
    
      <BackgroundImage className="image" alt={name} src={imageUrl} />
     
    

     
      <CollectionFooter>
        <span>{name}</span>
        <span>${price} </span>
      </CollectionFooter>
      <AddButton inverted onClick={() => history.push(`/shop/${routeName}/${id}`)}>
        {" "}
        See Product Details
      </AddButton>
     
    </CollectionItemContainer>
   
  );
}
const mapDispatchToProps = (dispatch) => ({
  addItem: (item) => dispatch(addItem(item)),
});

export default withRouter( connect(null, mapDispatchToProps)(CollectionItem));
